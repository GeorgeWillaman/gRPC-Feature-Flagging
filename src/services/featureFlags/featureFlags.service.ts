import { FeatureFlagsService, Feature, User } from './featureFlags.interfaces';
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

    const users = await prisma.$queryRaw`SELECT * FROM user ORDER BY RANDOM() LIMIT 3` as User[];

    users.forEach((user:User) => {
      console.log(user);
    });

    return callback(null, {
      success: true,
      feature,
    });
  },
};

export default { featureFlagService };
