export type BillingPeriod = 'monthly' | 'yearly';

export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
	billingPeriod: BillingPeriod;
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
