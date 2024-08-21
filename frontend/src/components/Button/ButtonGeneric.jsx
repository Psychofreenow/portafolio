import Button from '.';

function ButtonGeneric({ buttonText, onClick, typeBtn, size, center }) {
	return (
		<Button onClick={onClick} typeBtn={typeBtn} size={size} center={center}>
			<button>{buttonText}</button>
		</Button>
	);
}

export default ButtonGeneric;
