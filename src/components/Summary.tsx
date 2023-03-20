import SummaryCards from "./SummaryCards";

const Summary = () => {
	return (
		<div className='bg-white px-8 md:px-7 mt-5 md:mt-0 pt-2 md:pt-5'>
			<p className='font-bold'>Summary</p>

			<div className='summariesCtn mt-5'>
        <SummaryCards />
			</div>

			<button className='p-[0.9rem] rounded-full text-white bg-dark-g-blue w-full mb-9 mt-4 btn'>
				Continue
			</button>
		</div>
	);
};

export default Summary;
