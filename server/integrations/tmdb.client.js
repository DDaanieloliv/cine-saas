import { tmdbClient } from "../config/tmdb";

export async function getMovie(tmdbId) {
	const response = await tmdbClient.get(`movie/${tmdbId}`, {
		params: {
			append_to_response: 'credits, images, videos'
		}
	});

	return response.data;
}
