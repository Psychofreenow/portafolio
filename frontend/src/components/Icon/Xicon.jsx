import Icon from '.';

function Xicon({ title, typeIcon, color, onClick, className }) {
	return (
		<Icon
			title={title}
			typeIcon={typeIcon}
			onClick={onClick}
			className={className}
		>
			<svg
				viewBox='0 -0.5 21 21'
				version='1.1'
				style={{
					width: `inherit`,
					height: `inherit`,
					fill: `${color}`,
					cursor: 'pointer',
				}}
			>
				<title>close [#1511]</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g
					id='Page-1'
					stroke='none'
					strokeWidth='1'
					fill='none'
					fillRule='evenodd'
				>
					<g
						id='Dribbble-Light-Preview'
						transform='translate(-419.000000, -240.000000)'
						fill='#000000'
					>
						<g id='icons' transform='translate(56.000000, 160.000000)'>
							<polygon
								id='close-[#1511]'
								points='375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446'
							></polygon>
						</g>
					</g>
				</g>
			</svg>
		</Icon>
	);
}

export default Xicon;
