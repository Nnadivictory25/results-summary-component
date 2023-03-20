import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GridContainer = ({ children }: Props) => {
	return (
		<div className='grid md:grid-cols-2 bg-white  max-w-2xl mx-auto overflow-hidden md:rounded-[1.7rem] shadow-lg'>
			{children}
		</div>
	);
};

export default GridContainer;
