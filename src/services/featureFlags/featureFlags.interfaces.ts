import { handleUnaryCall } from '@grpc/grpc-js';

export interface Feature {
  id: number;
  name: string;
  exposure: number;
}

export interface User {
  id: number;
  name: string;
  createdAt: string;
}

export interface Flag {
  id: number;
  user: number;
  feature: number;
  createdAt: string;
}

interface FeatureEnabledForUserRequest {
  userId: string;
  featureId: number;
}

interface FeatureEnabledForUserResponse {
  enabled: boolean;
}

interface EditFeatureExposureRequest {
  featureId: number;
  exposurePercent: number;
}

interface EditFeatureExposureResponse {
  success: boolean;
}

interface CreateFeatureRequest {
  name: string;
  initialExposurePercent: number;
}

interface CreateFeatureResponse {
  success: boolean;
  feature: Feature;
}

export interface FeatureFlagsService {
  CreateFeature: handleUnaryCall<CreateFeatureRequest, CreateFeatureResponse>;
  EditFeatureExposure: handleUnaryCall<EditFeatureExposureRequest, EditFeatureExposureResponse>;
  FeatureEnabledForUser: handleUnaryCall<FeatureEnabledForUserRequest, FeatureEnabledForUserResponse>;
}
