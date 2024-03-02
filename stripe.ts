export type Plan = 'launch' | 'navigate' | 'soar';
export interface CheckoutSessionRequest {
	userId: string;
	plan: Plan;
	email?: string;
}

export interface SessionResponse {
	sessionUrl: string;
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
}

export interface ChangePlanRequest {
	plan: Plan;
}
export interface ChangePlanResponse {
	sessionUrl?: string;
}
