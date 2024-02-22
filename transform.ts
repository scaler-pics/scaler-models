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

export type GetImageDataMethod = 'body' | 'url';

export interface Source {
	method: GetImageDataMethod;
	type: SourceImageType;
	url?: string;
}

export interface Destination {
	fit: SizeFit;
	type: DestinationImageType;
	quality?: number;
	upload?: Upload;
}

export interface SizeFit {
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
