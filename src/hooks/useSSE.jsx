import { useEffect, useState } from 'react';
import { SSE } from 'sse.js';

const sse_config = {
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: { 'ngrok-skip-browser-warning': 123 },
};

export default function useSSE(uri, onMessage = (f) => f) {
	useEffect(() => {
		try {
			const sse = new SSE(`${sse_config.baseURL}/${uri}`, {
				...sse_config.headers,
			});
			sse.onopen = () =>
				console.log(`Registered to ${sse_config.baseURL}/${uri}`);
			sse.onmessage = onMessage;
			sse.onerror = (_error) => {
				sse.close();
			};
			window.addEventListener('beforeunload', () => {
				sse.close();
			});
			return () => sse.close();
		} catch (err) {
			return false;
		}
	}, [uri]);
	return true;
}
