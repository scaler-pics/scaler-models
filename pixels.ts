import { DestinationImageType, SourceImageType } from './transform';

export interface AddUsageRequest {
	userId: string;
	pixels: number;
	date: string;
	source: SourceInfo;
	destination: DestinationInfo[];
}

export interface SourceInfo {
	type: SourceImageType;
	sizeBytes: number;
	sizePixels: Size;
}

export interface DestinationInfo {
	width: number;
	height: number;
	type: DestinationImageType;
}

export interface Size {
	width: number;
	height: number;
}
