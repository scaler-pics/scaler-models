export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
	email: string;
}

export interface CheckoutSessionResponse {
	sessionUrl: string;
}

export interface Subscription {
	stripeCustomerId: string;
	plan: string;
	endDate: Date;
	lastUpdateDate: Date;
}
