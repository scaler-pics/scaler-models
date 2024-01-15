export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
	email: string;
}

export interface CheckoutSessionResponse {
	sessionUrl: string;
}
