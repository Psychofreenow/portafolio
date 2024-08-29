import Icon from './';

function LinkIcon({ title, typeIcon, color, onClick, st }) {
	return (
		<Icon title={title} typeIcon={typeIcon} onClick={onClick} st={st}>
			<svg
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				style={{
					width: `inherit`,
					height: `inherit`,
					stroke: `${color}` || '#000000',
				}}
			>
				<path
					d='M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5'
					strokeWidth='2'
					strokeLinecap='round'
				/>
			</svg>
		</Icon>
	);
}

export default LinkIcon;
