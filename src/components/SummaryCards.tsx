import data from '../data/data';
import memoryIcon from '../assets/icon-memory.svg';
import reactionIcon from '../assets/icon-reaction.svg';
import verbalIcon from '../assets/icon-verbal.svg';
import visualIcon from '../assets/icon-visual.svg';

const colorCodes = [
	'rgba(255, 87, 87, 0.1)',
	'rgba(255, 176, 31, 0.1)',
	'rgba(0, 189, 145, 0.1)',
	'rgba(17, 37, 212, 0.1)',
];

const imgs = [reactionIcon, memoryIcon, verbalIcon, visualIcon]

const textColors = ['text-light-red', 'text-orange-yellow', 'text-green-teal', 'text-co-blue'];

const SummaryCards = () => {
	return (
		<>
			{data.map(({ category, score }, i) => (
				<div
					className='card flex mb-4 items-center justify-between p-[.8rem] rounded-lg'
                    style={{ backgroundColor: colorCodes[i] }}
                    key={category}
                >
					<div className='flex items-center gap-x-3'>
						<img src={imgs[i]} />
						<p className={textColors[i]}>{category}</p>
					</div>
					<div className='scoreRating flex items-center gap-x-1'>
						<p className='text-dark-g-blue font-semibold'>{score}</p>
						<p>/</p>
						<p className='opacity-50'>100</p>
					</div>
				</div>
			))}
		</>
	);
};

export default SummaryCards;
