export interface GetApiKeyRequest {
	apiKeyId: number;
	password: string;
}

export interface GetApiKeyResponse {
	id: number;
	apiKey: string;
}

export interface DeleteApiKeyRequest {
	apiKeyId: number;
	password: string;
}

export interface NewApiKeyResponse {
	id: number;
	name: string;
	apiKey: string;
	date: string;
}

export interface ApiKey {
	id: number;
	name: string;
	date: string;
}

export interface GetApiKeysResponse {
	keys: ApiKey[];
}

export interface CreateNewApiKeyRequest {
	name: string;
}
