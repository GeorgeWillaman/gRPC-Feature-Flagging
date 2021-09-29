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

interface CreateFeatureRequest {
  name: string;
  initialExposurePercent: number;
}

interface CreateFeatureResponse {
  success: boolean,
  feature: Feature
}

export interface FeatureFlagsService {
  CreateFeature: handleUnaryCall<CreateFeatureRequest, CreateFeatureResponse>;
}
