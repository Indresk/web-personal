export default function LangInfo({ item }) {
	function visualLangLevel(level = 0) {
		const tiles = 4;
		const maxLevel = 100;
		const fractionValue = maxLevel / tiles / maxLevel;

		const partial = level / maxLevel;

		const finalTileState = [];

		for (let i = 1; i <= tiles; i++) {
			finalTileState.push(partial >= fractionValue * i);
		}

		return finalTileState;
	}
	return (
		<div className='flex items-center justify-between'>
			<div>
				<h4 className='block font-bold text-2xl mb-1 uppercase tracking-tighter'>
					{item.lenguage}
				</h4>
				<p className='uppercase tracking-widest text-zinc-500'>{item.copy}</p>
			</div>
			<div className='flex gap-1'>
				{visualLangLevel(item.level).map((tileState, i) => (
					<span
						key={i}
						className={`h-8 w-4 ${tileState ? 'bg-primary' : 'bg-lightgray'}`}></span>
				))}
			</div>
		</div>
	);
}
