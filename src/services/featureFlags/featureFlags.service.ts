import {
  FeatureFlagsService, Feature, User, Flag,
} from './featureFlags.interfaces';
import prisma from '../../util/db';

const featureFlagService: FeatureFlagsService = {
  CreateFeature: async (call, callback): Promise<any> => {
    const { name, initialExposurePercent } = call.request;

    const feature = await prisma.feature.create({
      data: {
        name,
        exposure: initialExposurePercent,
      },
    }) as Feature;

    const userCount = await prisma.user.count();
    const groupSize = Math.ceil((initialExposurePercent / 100) * userCount);
    const users = await prisma.$queryRaw`SELECT * FROM user ORDER BY RANDOM() LIMIT ${groupSize}` as User[];

    users.forEach(async (user:User) => {
      await prisma.flag.create({
        data: {
          user: user.id,
          feature: feature.id,
        },
      }) as unknown as Flag;
    });

    return callback(null, {
      success: true,
      feature,
    });
  },

  EditFeatureExposure: async (call, callback): Promise<any> => {
    try {
      const { featureId, exposurePercent } = call.request;

      const userCount = await prisma.user.count();
      const existingFlags = await prisma.flag.count({
        where: {
          feature: Number(featureId),
        },
      });
      const existingFlagExposure = Math.ceil((existingFlags / userCount) * 100); // Get % of users who have access to beta feature. Compare %, then decide whether to add users in or move users out

      const targetUsers = ((exposurePercent / 100) * userCount);
      let difference = Math.ceil(targetUsers - existingFlags);

      if (difference < 0) {
        difference = -difference;
        console.log(`Remove ${difference} user flags`);
        const deleteFlags = await prisma.$queryRaw`SELECT * FROM flag WHERE feature = ${Number(featureId)} ORDER BY RANDOM() LIMIT ${difference}` as Flag[];
        deleteFlags.forEach(async (flag:Flag) => {
          await prisma.flag.delete({
            where: {
              id: flag.id,
            },
          });
        });
      } else if (exposurePercent - existingFlagExposure >= 0) {
        console.log(`Add ${difference} users flags`);
        const users = await prisma.$queryRaw`SELECT * FROM user ORDER BY RANDOM() LIMIT ${difference}` as User[];
        users.forEach(async (user:User) => {
          await prisma.flag.create({
            data: {
              user: user.id,
              feature: Number(featureId),
            },
          }) as unknown as Flag;
        });
      }

      return callback(null, {
        success: true,
      });
    } catch {
      return callback(null, {
        success: false,
      });
    }
  },

  FeatureEnabledForUser: async (call, callback): Promise<any> => {
    const { userId, featureId } = call.request;

    const featureEnabled = await prisma.flag.count({
      where: {
        user: Number(userId),
        feature: Number(featureId),
      },
    });

    if (featureEnabled > 0) {
      return callback(null, {
        enabled: true,
      });
    }
    return callback(null, {
      enabled: false,
    });
  },
};

export default { featureFlagService };
