export interface JWTPayload {
	sub: string;
	exp: number;
	name: string;
}

export interface ForgottenPasswordRequest {
	email: string;
}

export interface ResetPasswordRequest {
	token: string;
	password: string;
}

export interface LoginWithPasswordRequest {
	email: string;
	password: string;
}

export interface JWTResponse {
	jwt: string;
}

export interface EmailSignupRequest {
	email: string;
	name: string;
	password: string;
	plan: string;
}

export interface SignupWithCodeRequest {
	token: string;
	code: string;
}
