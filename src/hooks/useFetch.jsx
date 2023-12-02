import { useEffect, useState } from 'react';
import axios from './../service/axios';
export default function useFetch(uri) {
	const [response, setResponse] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!uri) return;
		console.log(`${axios.baseURL}/uri`);
		axios
			.get(uri)
			.then((data) => setResponse(data.data))
			.catch(setError)
			.finally(() => {
				setLoading(false);
			});
	}, [uri]);
	return {
		loading,
		response,
		error,
	};
}
