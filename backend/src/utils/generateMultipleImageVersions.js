import sharp from 'sharp';

const generateMultipleImageVersions = async ({ buffer, sizes = [] }) => {
	let buffers = [];
	for (const size of sizes) {
		const output = await sharp(buffer)
			.resize(size.width, size.height)
			.toFormat('webp')
			.toBuffer();

		buffers.push(output);
	}

	return buffers;
};

export default generateMultipleImageVersions;
