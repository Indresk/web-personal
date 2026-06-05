export default function TextSymbol({ children, color, className = '' }) {
	let classesBuffer = '';

	switch (color) {
		case 'primary':
			classesBuffer += 'text-primary ';
			break;
		case 'secondary':
			classesBuffer += 'text-secondary ';
			break;
		case 'white':
			classesBuffer += 'text-white ';
			break;
		default:
			classesBuffer += 'text-primary ';
			break;
	}

	return (
		<span className={`material-symbols-outlined ${classesBuffer} ${className}`}>
			{children}
		</span>
	);
}
