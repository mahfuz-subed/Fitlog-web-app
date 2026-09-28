'use client'
import { useContext } from 'react';
import MyPlanTab from '../components/myPlantab';
import { LibraryContext } from '@/LibraryContext/LibraryProvider';
const MyPlanPage = () => {
    const {todaysPlan,saved,activeTab} = useContext(LibraryContext);
    const currentPlan = activeTab === "today"? todaysPlan : saved;
    const totalMinutes = currentPlan.reduce((total,crr)=> total+crr.duration,0)
    const totalCalories = currentPlan.reduce((total,crr)=> total+crr.caloriesBurned,0)
    return (
     <div className='w-[90%] max-w-6xl mx-auto my-8 md:my-12 text-white'>
    <h2 className='text-xl sm:text-2xl md:text-3xl font-bold tracking-wide'>
        MY <span className='text-[#c2f800]'>PLAN</span>
    </h2>
    <p className='mt-2 mb-5 md:mb-8 text-sm sm:text-base text-white/60'>
        Cap of the five lifts for today. Finish them, then load more.
    </p>

    <div className='grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 py-5 px-3 sm:py-7 sm:px-5 md:py-10 md:px-8 bg-[#222630] rounded-3xl shadow-xl shadow-black/30'>
        <div className='flex flex-col items-center text-center'>
            <p className='text-[11px] sm:text-sm md:text-base uppercase tracking-wider text-white/60'>Exercises</p>
            <h3 className='mt-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c2f800] font-bold'>{currentPlan.length}</h3>
        </div>
        <div className='flex flex-col items-center text-center'>
            <p className='text-[11px] sm:text-sm md:text-base uppercase tracking-wider text-white/60'>Minutes</p>
            <h3 className='mt-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c2f800] font-bold'>{totalMinutes}</h3>
        </div>
        <div className='flex flex-col items-center text-center'>
            <p className='text-[11px] sm:text-sm md:text-base uppercase tracking-wider text-white/60'>Calories</p>
            <h3 className='mt-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c2f800] font-bold'>{totalCalories}</h3>
        </div>
    </div>

    <MyPlanTab/>
</div>
    );
};

export default MyPlanPage;