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

const imgs = [reactionIcon, memoryIcon, verbalIcon, visualIcon];

const textColors = ['light-red', 'orange-yellow', 'green-teal', 'co-blue'];

const SummaryCards = () => {
	return (
		<>
			{data.map(({ category }, i) => (
				<div
					className='card flex mb-4 items-center justify-between p-[1.1rem] rounded-lg'
					style={{ backgroundColor: colorCodes[i] }}>
					<div className='flex items-center gap-x-3'>
						<img src={imgs[i]} />
						<p className={'text-' + textColors[i]}>{category}</p>
					</div>
					<div className='scoreRating flex items-center gap-x-1'>
						<p className='text-dark-g-blue font-semibold'>80</p>
						<p>/</p>
						<p className='opacity-50'>100</p>
					</div>
				</div>
			))}
		</>
	);
};

export default SummaryCards;
