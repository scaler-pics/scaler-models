export type SourceImageType =
	| 'jpeg'
	| 'png'
	| 'webp'
	| 'heic'
	| 'tiff'
	| 'gif'
	| 'bmp';
export type DestinationImageType = 'jpeg' | 'png' | 'heic';
export const sourceImageTypes: SourceImageType[] = [
	'jpeg',
	'png',
	'webp',
	'heic',
	'tiff',
	'gif',
	'bmp',
];
export const destinationImageTypes: DestinationImageType[] = [
	'jpeg',
	'png',
	'heic',
];

export interface TransformUrlBody {
	source: Source;
	destinations: Destination[];
	crop?: NormalizedCrop;
}

export type SourceDataDeliveryMethod = 'body' | 'url';

export interface Source {
	url?: string;
}

export interface Destination {
	fit: Size;
	type: DestinationImageType;
	quality?: number;
	upload?: Upload;
}

export interface Size {
	width: number;
	height: number;
}

export interface Upload {
	url: string;
	method?: 'post' | 'put';
}

export interface NormalizedCrop {
	left: number;
	top: number;
	right: number;
	bottom: number;
}

export interface TransfomResponse {
	sourceImage: SourceImage;
	destinationImages: [DestinationImage];
}

export interface SourceImage {
	pixelSize: Size;
	byteSize: number;
}

export interface DestinationImage {
	fit: Size;
	pixelSize: Size;
	downloadUrl?: string;
}
