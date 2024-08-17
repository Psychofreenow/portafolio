import { v2 as cloudinary } from 'cloudinary';
import {
	CLOUIDINARY_NAME,
	CLOUIDINARY_KEY,
	CLOUIDINARY_SECRET,
} from './env.js';

cloudinary.config({
	cloud_name: CLOUIDINARY_NAME,
	api_key: CLOUIDINARY_KEY,
	api_secret: CLOUIDINARY_SECRET,
});

export default cloudinary;
