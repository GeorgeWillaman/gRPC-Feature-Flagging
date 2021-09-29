"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../util/db"));
const featureFlagService = {
    CreateFeature: async (call, callback) => {
        const { name, initialExposurePercent } = call.request;
        const feature = await db_1.default.feature.create({
            data: {
                name,
                exposure: initialExposurePercent,
            },
        });
        const users = await db_1.default.$queryRaw `SELECT * FROM user ORDER BY RANDOM() LIMIT 3`;
        users.forEach((user) => {
            console.log(user);
        });
        return callback(null, {
            success: true,
            feature,
        });
    },
};
exports.default = { featureFlagService };
//# sourceMappingURL=featureFlags.service.js.map