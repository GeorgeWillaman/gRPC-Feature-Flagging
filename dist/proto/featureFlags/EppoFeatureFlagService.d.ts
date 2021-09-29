import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { CreateFeatureRequest as _featureFlags_CreateFeatureRequest, CreateFeatureRequest__Output as _featureFlags_CreateFeatureRequest__Output } from './CreateFeatureRequest';
import type { CreateFeatureResponse as _featureFlags_CreateFeatureResponse, CreateFeatureResponse__Output as _featureFlags_CreateFeatureResponse__Output } from './CreateFeatureResponse';
import type { EditFeatureExposureRequest as _featureFlags_EditFeatureExposureRequest, EditFeatureExposureRequest__Output as _featureFlags_EditFeatureExposureRequest__Output } from './EditFeatureExposureRequest';
import type { EditFeatureExposureResponse as _featureFlags_EditFeatureExposureResponse, EditFeatureExposureResponse__Output as _featureFlags_EditFeatureExposureResponse__Output } from './EditFeatureExposureResponse';
import type { FeatureEnabledForUserRequest as _featureFlags_FeatureEnabledForUserRequest, FeatureEnabledForUserRequest__Output as _featureFlags_FeatureEnabledForUserRequest__Output } from './FeatureEnabledForUserRequest';
import type { FeatureEnabledForUserResponse as _featureFlags_FeatureEnabledForUserResponse, FeatureEnabledForUserResponse__Output as _featureFlags_FeatureEnabledForUserResponse__Output } from './FeatureEnabledForUserResponse';
export interface EppoFeatureFlagServiceClient extends grpc.Client {
    CreateFeature(argument: _featureFlags_CreateFeatureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    CreateFeature(argument: _featureFlags_CreateFeatureRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    CreateFeature(argument: _featureFlags_CreateFeatureRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    CreateFeature(argument: _featureFlags_CreateFeatureRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    createFeature(argument: _featureFlags_CreateFeatureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    createFeature(argument: _featureFlags_CreateFeatureRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    createFeature(argument: _featureFlags_CreateFeatureRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    createFeature(argument: _featureFlags_CreateFeatureRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_CreateFeatureResponse__Output) => void): grpc.ClientUnaryCall;
    EditFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    EditFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    EditFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    EditFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    editFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    editFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    editFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    editFeatureExposure(argument: _featureFlags_EditFeatureExposureRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_EditFeatureExposureResponse__Output) => void): grpc.ClientUnaryCall;
    FeatureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    FeatureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    FeatureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    FeatureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    featureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    featureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    featureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
    featureEnabledForUser(argument: _featureFlags_FeatureEnabledForUserRequest, callback: (error?: grpc.ServiceError, result?: _featureFlags_FeatureEnabledForUserResponse__Output) => void): grpc.ClientUnaryCall;
}
export interface EppoFeatureFlagServiceHandlers extends grpc.UntypedServiceImplementation {
    CreateFeature: grpc.handleUnaryCall<_featureFlags_CreateFeatureRequest__Output, _featureFlags_CreateFeatureResponse>;
    EditFeatureExposure: grpc.handleUnaryCall<_featureFlags_EditFeatureExposureRequest__Output, _featureFlags_EditFeatureExposureResponse>;
    FeatureEnabledForUser: grpc.handleUnaryCall<_featureFlags_FeatureEnabledForUserRequest__Output, _featureFlags_FeatureEnabledForUserResponse>;
}
export interface EppoFeatureFlagServiceDefinition extends grpc.ServiceDefinition {
    CreateFeature: MethodDefinition<_featureFlags_CreateFeatureRequest, _featureFlags_CreateFeatureResponse, _featureFlags_CreateFeatureRequest__Output, _featureFlags_CreateFeatureResponse__Output>;
    EditFeatureExposure: MethodDefinition<_featureFlags_EditFeatureExposureRequest, _featureFlags_EditFeatureExposureResponse, _featureFlags_EditFeatureExposureRequest__Output, _featureFlags_EditFeatureExposureResponse__Output>;
    FeatureEnabledForUser: MethodDefinition<_featureFlags_FeatureEnabledForUserRequest, _featureFlags_FeatureEnabledForUserResponse, _featureFlags_FeatureEnabledForUserRequest__Output, _featureFlags_FeatureEnabledForUserResponse__Output>;
}
