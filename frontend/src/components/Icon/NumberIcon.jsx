import Icon from '.';

function NumberIcon({ title, typeIcon, color, onClick, st }) {
	return (
		<Icon title={title} typeIcon={typeIcon} onClick={onClick} st={st}>
			<svg viewBox='0 0 16 16' version='1.1'>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g
					id='Page-1'
					stroke='none'
					strokeWidth='1'
					fill='none'
					fillRule='evenodd'
					style={{
						width: `inherit`,
						height: `inherit`,
					}}
				>
					<g
						id='Dribbble-Light-Preview'
						transform='translate(-382.000000, -7721.000000)'
						fill='#000000'
						style={{
							fill: `${color}`,
						}}
					>
						<g id='icons' transform='translate(56.000000, 160.000000)'>
							<path
								d='M332,7571 L336,7571 L336,7567 L332,7567 L332,7571 Z M342,7567 L342,7565 L338,7565 L338,7561 L336,7561 L336,7565 L332,7565 L332,7561 L330,7561 L330,7565 L326,7565 L326,7567 L330,7567 L330,7571 L326,7571 L326,7573 L330,7573 L330,7577 L332,7577 L332,7573 L336,7573 L336,7577 L338,7577 L338,7573 L342,7573 L342,7571 L338,7571 L338,7567 L342,7567 Z'
								id='number_sign-[#110]'
							></path>
						</g>
					</g>
				</g>
			</svg>
		</Icon>
	);
}

export default NumberIcon;
