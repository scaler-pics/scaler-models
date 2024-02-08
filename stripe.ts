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

export type CustomerSubscriptionState =
	| 'noCustomer'
	| 'noSubscription'
	| 'hasSubscription';

export interface SubscriptionInfoResponse {
	state: CustomerSubscriptionState;
	subscription?: SubscriptionInfo;
}

export interface SubscriptionInfo {
	id: string;
	status: string;
	cancel_at_period_end: boolean;
	current_period_end: number;
	current_period_start: number;
	start_date: number;
	trial_start: number | null;
	trial_end: number | null;
	plan: string | null;
	product: string | null;
}
