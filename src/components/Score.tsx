

const Score = () => {
    return (
        <div className="score text-light-lavender text-center px-14 rounded-b-[1.7rem] md:rounded-[1.7rem] flex flex-col justify-center pt-5 md:pt-0 gap-y-6 pb-8">
            <p className="font-semibold">Your Result</p>
            <div className="circle w-[150px] h-[150px] py-2 mx-auto rounded-full flex flex-col justify-center">
                <p className="text-[3rem] font-bold text-white">76</p>
                <p className="text-sm">of 100</p>
            </div>
            <p className="font-bold text-white text-2xl md:pt-4 ">Great</p>
            <p className="text-sm md:text-base">
                You scored higher than 65% of the people who have taken these tests
            </p>
      </div>
  )
};

export default Score;
