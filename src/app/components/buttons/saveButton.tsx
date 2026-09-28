'use client'

import { ILibrary } from "@/app/types/libraryType";
import { LibraryContext } from "@/LibraryContext/LibraryProvider";
import { BsSaveFill } from "react-icons/bs";
import { useContext } from "react";
import {toast } from 'react-toastify';


const SaveButton = ({idData}:{idData:ILibrary}) => {

    const libraryProvider = useContext(LibraryContext)
    const {saved,setSaved,setActiveTab} = libraryProvider

    const handleSaved = ()=>{
    
    const alreadySaved = saved.some((itemId:ILibrary)=> idData.id === itemId.id)
    if(alreadySaved){
     toast.error(`You have already saved this.`)
    } else {
    setSaved([...saved, idData])
    toast.success(`${idData.name} has been saved for later.`)}
    setActiveTab("save")
}
    return (
        <button onClick={handleSaved}
        className="btn bg-[#c2f800] flex items-center"><BsSaveFill /> Save for later</button>
    )
};

export default SaveButton;