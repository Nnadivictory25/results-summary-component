import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GridContainer = ({ children }: Props) => {
	return (
		<div className='grid md:grid-cols-2 md:gap-x-4 md:h-[410px] max-w-2xl mx-auto md:mt-[10%]'>
			{children}
		</div>
	);
};

export default GridContainer;
