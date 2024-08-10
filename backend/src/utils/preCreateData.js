const preCreateData = async (Model, data) => {
	for (const item of data) {
		try {
			await Model.findOrCreate({
				where: item,
				defaults: item,
			});
		} catch (error) {
			console.error(`Error inserting data into ${Model.name}`);
		}
	}
};

export default preCreateData;
