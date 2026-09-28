'use client'

import { LibraryContext } from "@/LibraryContext/LibraryProvider";
import { useContext, useState } from "react";
import { ILibrary } from "../types/libraryType";
import Image from "next/image";
import { FaRegCircle,FaFire,FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { IoIosCheckmark } from "react-icons/io";
import { toast } from "react-toastify";
import { RiDeleteBin2Line } from "react-icons/ri";



const MyPlanTab = () => {

    const [doneIds,setDoneIds] = useState<number[]>([]);

    const handleDoneButton=(id:number)=>{
        toast.success("Congrats on finishing the task.")
         setDoneIds ([...doneIds,id]);
    }

    const {todaysPlan,setTodaysPlan, saved,setSaved,setActiveTab} = useContext(LibraryContext)

    const handleRemovePlan = (library:ILibrary) =>{
        const restPlan = todaysPlan.filter((card:ILibrary)=> {
            return card.name !== library.name
        })
        setTodaysPlan(restPlan)
    }
    const handleRemoveSaved = (library:ILibrary) =>{
        const restSaved = saved.filter((card:ILibrary)=> {
            return card.name !== library.name
        })
        setSaved(restSaved)

       
    }

     const [sortBy, setSortBy] = useState<"duration"|"calories"|"rating">("duration")

    const sortCards = (library:ILibrary[])=>{
      const sortedCards  = [...library]
      if(sortBy === "duration"){
        sortedCards.sort((a,b)=> b.duration - a.duration)
      } else if (sortBy === "calories"){
        sortedCards.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
      } else if(sortBy === "rating"){
        sortedCards.sort((a,b)=> b.rating - a.rating)
      } return sortedCards;
    }

    const sortedTodaysPlan = sortCards(todaysPlan);
    const sortedSaved = sortCards(saved)

    return (
        <div>
           <div className="flex justify-end mt-6 mb:3 md:mt-8">
  <select value={sortBy}
    onChange={(e)=> setSortBy (e.target.value as "duration" | "calories" | "rating")}
    className="select w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#222630] text-white rounded-full border border-[#9ca3af] cursor-pointer hover:border-[#c2f800] focus:border-[#c2f800] focus:outline-none transition">
    <option disabled={true} className="bg-[#222630]">Sort by</option>
    <option value={"duration"} className="bg-[#222630]">Duration</option>
    <option value={"calories"} className="bg-[#222630]">Calories</option>
    <option value={"rating"} className="bg-[#222630]">Rating</option>
  </select>
</div>
<div className="tabs gap-2 text-white">
  <input type="radio" name="my_tabs_2"
    className="tab rounded-full border border-[#9ca3af] px-5 md:px-8 text-white hover:border-[#c2f800] checked:bg-[#c2f800] checked:text-black checked:border-[#c2f800] checked:font-semibold transition"
    aria-label="Today's Plan" onChange={()=>setActiveTab("today")} defaultChecked/>
  <div className="tab-content border-base-300 bg-[#222630] rounded-2xl p-4 md:p-8 space-y-4">
    {todaysPlan.length>0? sortedTodaysPlan.map((library:ILibrary)=>{
    return <div key={library.id} className="border border-[#9ca3af] rounded-2xl p-3 md:px-6 hover:border-[#c2f800] transition">

      {/* Mobile: stacked. Tablet and up (md): one row */}
      <div className="flex flex-col gap-3 items-center md:flex-row md:items-center md:justify-between">

        {/* Image + text */}
        <div className="flex items-center gap-3 md:gap-5">
          <Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl w-20 h-20 md:w-24 md:h-24 object-cover"></Image>
          <div>
            <h2 className="text-base font-bold text-white lg:text-xl">{library.name}</h2>
            <p className="text-sm text-white mb-2">{library.equipment}</p>
            <div className="flex flex-wrap gap-3 text-sm text-[#9ca3af]">
              <div className="flex items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
              <div className="flex items-center gap-1"><FaFire className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
              <div className="flex items-center gap-1"><FaRegStar className="text-[#c2f800]"/> {library.rating}</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Link href=""><button className="btn btn-outline btn-sm md:btn-md rounded-full border-[#9ca3af] text-white hover:bg-[#c2f800] hover:text-black hover:border-[#c2f800]">View Details</button></Link>
          <button onClick={()=>handleDoneButton(library.id)} disabled={(doneIds.includes(library.id))? true: false}
          className="btn btn-sm md:btn-md rounded-full bg-[#c2f800] text-black hover:opacity-80"><IoIosCheckmark className="text-2xl"/> Mark as Done</button>
          <span onClick={()=>handleRemovePlan(library)}><RiDeleteBin2Line className="text-xl text-[#c2f800] cursor-pointer hover:scale-125 transition"/></span>
        </div>

      </div>
    </div>}): (
      <div className="text-center text-white space-y-3 py-10 border border-dashed border-[#9ca3af] rounded-2xl">
        <h2 className="font-bold text-xl md:text-3xl">NOTHING HERE <span className="text-[#c2f800]">YET</span></h2>
        <p className="text-[#9ca3af] text-sm md:text-base">Browse the library and a lift to get today moving.</p>
        <Link href="/#workouts"><button className="btn rounded-full bg-[#c2f800] text-black hover:opacity-80">Go to workouts</button></Link>
      </div>
    )}
  </div>

  <input type="radio" name="my_tabs_2"
    className="tab rounded-full border border-[#9ca3af] px-5 md:px-8 text-white hover:border-[#c2f800] checked:bg-[#c2f800] checked:text-black checked:border-[#c2f800] checked:font-semibold transition"
    aria-label="Saved" onChange={()=>setActiveTab("save")} />
  <div className="tab-content border-base-300 bg-[#222630] rounded-2xl p-4 md:p-8 space-y-4">
    {saved.length>0? sortedSaved.map((library:ILibrary)=>{
    return <div key={library.id} className="border border-[#9ca3af] rounded-2xl p-3 md:px-6 hover:border-[#c2f800] transition">

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3 md:gap-5">
          <Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl w-20 h-20 md:w-24 md:h-24 object-cover"></Image>
          <div>
            <h2 className="text-base font-bold text-white lg:text-xl">{library.name}</h2>
            <p className="text-sm text-white mb-2">{library.equipment}</p>
            <div className="flex flex-wrap gap-3 text-sm text-[#9ca3af]">
              <div className="flex items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
              <div className="flex items-center gap-1"><FaFire className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
              <div className="flex items-center gap-1"><FaRegStar className="text-[#c2f800]"/> {library.rating}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/${library.id}`}><button className="btn btn-outline btn-sm md:btn-md rounded-full border-[#9ca3af] text-white hover:bg-[#c2f800] hover:text-black hover:border-[#c2f800]">View Details</button></Link>
          <span onClick={()=>handleRemoveSaved(library)}><RiDeleteBin2Line className="text-xl text-[#c2f800] cursor-pointer hover:scale-125 transition"/></span>
        </div>

      </div>
    </div>}): (
      <div className="text-center text-white space-y-3 py-10 border border-dashed border-[#9ca3af] rounded-2xl">
        <h2 className="font-bold text-xl md:text-3xl">NOTHING HERE <span className="text-[#c2f800]">YET</span></h2>
        <p className="text-[#9ca3af] text-sm md:text-base">Browse the library and a lift to get today moving.</p>
        <Link href="/#workouts"><button className="btn rounded-full bg-[#c2f800] text-black hover:opacity-80">Go to workouts</button></Link>
      </div>
    )}
  </div>
</div>

        </div>
    );
};

export default MyPlanTab;

//  <div className="flex flex-col md:flex-row">