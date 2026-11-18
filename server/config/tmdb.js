import axios from "axios";

export const tmdbClient = axios.create({
	baseURL: process.env.TMDB_BASE_URL,

	headers: {
		Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
		Accept: `application/json`
	},

	params: {
		language: process.env.TMDB_LANGUAGE || `pt-BR`
	},

	timeout: 10000
});
