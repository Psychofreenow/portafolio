import { Link } from 'react-router-dom';
import Button from '.';

function ButtonLink({ buttonText, to, onClick, typeBtn, size, center }) {
	return (
		<Button onClick={onClick} typeBtn={typeBtn} size={size} center={center}>
			<Link to={to}>{buttonText}</Link>
		</Button>
	);
}

export default ButtonLink;
