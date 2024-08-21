const fetchingData = async ({ URL }) => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
};

export default fetchingData;
