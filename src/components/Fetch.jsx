import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
export default function Fetch({
	uri,
	renderSuccess,
	loadingFallback = <p>loading...</p>,
	renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
	console.log(`Fetch compoenent ${uri}`);
	const { loading, data, error } = useFetch(uri);
	console.log(`data: ${data}`);
	if (loading) return loadingFallback;
	if (error) return renderError(error);
	if (data) {
		console.log(data);
		return renderSuccess({ data });
	}
}
