import { OutputImageType, InputImageType } from './transform';

export interface AddUsageRequest {
	userId: string;
	pixels: number;
	date: string;
	input: InputInfo;
	output: OutputInfo[];
	worker: string;
}

export interface InputInfo {
	type: InputImageType;
	sizeBytes: number;
	sizePixels: Size;
}

export interface OutputInfo {
	width: number;
	height: number;
	type: OutputImageType;
}

export interface Size {
	width: number;
	height: number;
}

export interface GetPixelsResponse {
	gigapixels: number;
	monthId: string;
	quota: number;
	plan?: string;
	hardStop?: number;
	status?: string;
	statusUpdateDate?: string;
}

export interface SetHardStopRequest {
	hardStop: number | null;
}
