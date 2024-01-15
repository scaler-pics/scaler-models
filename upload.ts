export interface AddUploadedMbRequest {
	mb: number;
	userId: number;
	sizes: string;
}
export interface GetUploadedMbResponse {
	uploadedMb: number;
	monthlyQuota: number;
	year: number;
	month: number;
}
