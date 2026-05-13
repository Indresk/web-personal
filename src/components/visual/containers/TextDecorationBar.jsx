export default function TextDecorationBar({
	color,
	position,
	children,
	className,
}) {
	let classesBuffer = '';

	switch (color) {
		case 'primary':
			classesBuffer += 'border-primary ';
			break;
		case 'secondary':
			classesBuffer += 'border-secondary ';
			break;
		default:
			classesBuffer += 'border-white ';
			break;
	}

	switch (position) {
		case 'bottom':
			classesBuffer += 'border-b-4 ';
			break;
		default:
			classesBuffer += 'pl-8 border-l-4 ';
			break;
	}

	return (
		<div className={`border-solid ${classesBuffer} ${className}`}>
			{children}
		</div>
	);
}
