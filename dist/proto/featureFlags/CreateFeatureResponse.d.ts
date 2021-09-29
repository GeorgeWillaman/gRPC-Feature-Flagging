import type { Feature as _featureFlags_Feature, Feature__Output as _featureFlags_Feature__Output } from './Feature';
export interface CreateFeatureResponse {
    'success'?: (boolean);
    'feature'?: (_featureFlags_Feature | null);
}
export interface CreateFeatureResponse__Output {
    'success': (boolean);
    'feature': (_featureFlags_Feature__Output | null);
}
