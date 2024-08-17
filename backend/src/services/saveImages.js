import cloudinary from '../config/cloudinary.js';

const saveImages = async ({ buffers = [], names = [] }) => {
	let urls = [];
	for (let index = 0; index < buffers.length; index++) {
		try {
			const response = await new Promise((resolve, reject) => {
				const uploadStream = cloudinary.uploader.upload_stream(
					{
						folder: 'portafolio-franklinfreenow',
						public_id: names[index],
					},
					(error, result) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					},
				);

				uploadStream.end(buffers[index]);
			});

			urls.push(response.secure_url);
			console.log('Imagen guardada exitosamente');
		} catch (error) {
			console.error('Error al procesar o subir la imagen:', error);
		}
	}

	return urls;
};

export default saveImages;
