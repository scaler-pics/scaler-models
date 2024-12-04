import { ParsedUrlQuery } from 'querystring';

export interface CreateAlbumRequest {
	imageCount: number;
}

export interface AddToAlbumRequest {
	albumId: string;
	imageCount: number;
}

export interface CreateAlbumImage {
	imageId: string;
	order: number;
}

export interface CreateAlbumResponse {
	albumId: string;
	images: CreateAlbumImage[];
}

export interface GetAlbumRequest extends ParsedUrlQuery {
	albumId: string;
}

export interface GetAlbumResponse {
	albumId: string;
	images: { id: string }[];
}

export interface UpdateAlbumImagesOrderBody {
	albumId: string;
	images: string[];
}
