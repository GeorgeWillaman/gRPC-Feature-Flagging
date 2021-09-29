import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';
import type { EppoFeatureFlagServiceClient as _featureFlags_EppoFeatureFlagServiceClient, EppoFeatureFlagServiceDefinition as _featureFlags_EppoFeatureFlagServiceDefinition } from './featureFlags/EppoFeatureFlagService';
declare type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new (...args: ConstructorParameters<Constructor>): Subtype;
};
export interface ProtoGrpcType {
    featureFlags: {
        CreateFeatureRequest: MessageTypeDefinition;
        CreateFeatureResponse: MessageTypeDefinition;
        EditFeatureExposureRequest: MessageTypeDefinition;
        EditFeatureExposureResponse: MessageTypeDefinition;
        EppoFeatureFlagService: SubtypeConstructor<typeof grpc.Client, _featureFlags_EppoFeatureFlagServiceClient> & {
            service: _featureFlags_EppoFeatureFlagServiceDefinition;
        };
        Feature: MessageTypeDefinition;
        FeatureEnabledForUserRequest: MessageTypeDefinition;
        FeatureEnabledForUserResponse: MessageTypeDefinition;
    };
}
export {};
