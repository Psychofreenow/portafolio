import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const multerManage = ({ nameFile }) => {
	return upload.single(nameFile);
};

export default multerManage;
