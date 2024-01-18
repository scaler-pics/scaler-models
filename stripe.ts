export type BillingPeriod = 'monthly' | 'yearly';

export interface CheckoutSessionRequest {
	userId: string;
	plan: string;
	billingPeriod: BillingPeriod;
	email: string;
}

export interface CheckoutSessionResponse {
	sessionUrl: string;
}

export interface Subscription {
	plan: string;
	endDate: Date;
	lastUpdateDate: Date;
}
