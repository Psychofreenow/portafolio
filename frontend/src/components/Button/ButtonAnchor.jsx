import Button from '.';

function ButtonAnchor({
	buttonText,
	href,
	target,
	onClick,
	typeBtn,
	size,
	center,
	children,
}) {
	return (
		<Button onClick={onClick} typeBtn={typeBtn} size={size} center={center}>
			<a href={href} target={target}>
				{children}
				{buttonText}
			</a>
		</Button>
	);
}

export default ButtonAnchor;
