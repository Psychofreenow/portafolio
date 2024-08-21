import { useState, useEffect } from 'react';
import fetchingData from '../utils/fetchingData';

function useFetch(URL) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetching = async () => {
			try {
				const res = await fetchingData({ URL });
				setData(res);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetching();
	}, []);

	return { data, loading, error };
}

export default useFetch;
