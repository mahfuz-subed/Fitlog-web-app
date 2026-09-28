'use client'

import { ILibrary } from "@/app/types/libraryType";
import { LibraryContext } from "@/LibraryContext/LibraryProvider";
import { MdOutlineCropLandscape} from "react-icons/md";
import { useContext } from "react";
import {toast } from 'react-toastify';


const PlanButton = ({idData}:{idData:ILibrary}) => {

    const libraryProvider = useContext(LibraryContext)
    const {todaysPlan,setTodaysPlan,setActiveTab} = libraryProvider

    const handlePlanButton = ()=>{
    
    const alreadyPlanned = todaysPlan.some((itemId:ILibrary)=> idData.id === itemId.id)
    if(alreadyPlanned){
     toast.error(`You have already added this item.`)
    } else {
    setTodaysPlan([...todaysPlan, idData])
    toast.success(`${idData.name} has been added to today's plan.`)}
    setActiveTab("today")
}
    return (
        <button onClick={handlePlanButton}
        className="btn bg-[#c2f800] flex items-center"><MdOutlineCropLandscape /> Add to today's plan</button>
    );
};

export default PlanButton;