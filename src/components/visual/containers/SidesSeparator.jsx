export default function SidesSeparator({ children, className = '' }) {
	return (
		<section className={`py-15 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
			{children}
		</section>
	);
}
