export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
}

export interface SessionResponse {
	sessionUrl: string;
}

export interface Subscription {
	plan: string;
	endDate: Date;
	lastUpdateDate: Date;
}

export interface PortalSessionRequest {
	stripeCustomerId: string;
}
