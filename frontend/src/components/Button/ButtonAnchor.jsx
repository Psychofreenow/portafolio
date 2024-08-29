import Button from '.';

function ButtonAnchor({
	buttonText,
	href,
	target,
	onClick,
	typeBtn,
	size,
	center,
	icon,
}) {
	return (
		<Button onClick={onClick} typeBtn={typeBtn} size={size} center={center}>
			<a href={href} target={target}>
				{icon}
				{buttonText}
			</a>
		</Button>
	);
}

export default ButtonAnchor;
