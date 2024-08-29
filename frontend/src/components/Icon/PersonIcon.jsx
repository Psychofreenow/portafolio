import Icon from '.';

function PersonICon({ title, typeIcon, color, onClick, st }) {
	return (
		<Icon title={title} typeIcon={typeIcon} onClick={onClick} st={st}>
			<svg
				fill='#000000'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
				style={{
					width: `inherit`,
					height: `inherit`,
					fill: `${color}`,
				}}
			>
				<path d='M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z' />
			</svg>
		</Icon>
	);
}

export default PersonICon;
