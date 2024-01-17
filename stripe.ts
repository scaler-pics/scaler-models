export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
	email: string;
}

export interface CheckoutSessionResponse {
	sessionUrl: string;
}

export interface Subscription {
	plan: string;
	endDate: Date;
}
