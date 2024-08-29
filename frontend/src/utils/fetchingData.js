const fetchingData = async ({ URL, options }) => {
	const response = await fetch(URL, options);
	const data = await response.json();
	return data;
};

export default fetchingData;
