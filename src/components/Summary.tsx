import SummaryCards from "./SummaryCards";

const Summary = () => {
	return (
		<div className='bg-white px-8 md:px-0 mt-5 md:mt-0 pt-2 md:pt-5'>
			<p className='font-bold'>Summary</p>

			<div className='summariesCtn mt-5'>
        <SummaryCards />
			</div>

			<button className='p-4 rounded-full text-white bg-dark-g-blue w-full'>
				Continue
			</button>
		</div>
	);
};

export default Summary;
