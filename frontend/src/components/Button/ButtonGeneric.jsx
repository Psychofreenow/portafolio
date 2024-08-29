import Button from '.';

function ButtonGeneric({ buttonText, onClick, typeBtn, size, center, icon }) {
	return (
		<Button onClick={onClick} typeBtn={typeBtn} size={size} center={center}>
			<button>
				{icon}
				{buttonText}
			</button>
		</Button>
	);
}

export default ButtonGeneric;
