export default function CertificationInfo({ children, year }) {
	return (
		<div className='flex justify-between border-b-2 border-zinc-200 font-bold py-4'>
			<p className='text-secondary'>{children}</p>
			<p className='text-zinc-400'>{year}</p>
		</div>
	);
}
