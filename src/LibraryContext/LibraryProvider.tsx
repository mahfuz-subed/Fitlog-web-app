'use client'
import { ILibrary } from "@/app/types/libraryType";
import { createContext,ReactNode,useState } from "react";

interface ILibraryContext {
    todaysPlan: ILibrary[],
    setTodaysPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>,
    saved: ILibrary[],
    setSaved: React.Dispatch<React.SetStateAction<ILibrary[]>>,
    activeTab:"today"|"save",
    setActiveTab:React.Dispatch<React.SetStateAction<"today"|"save">>
}

export const LibraryContext = createContext<ILibraryContext>({todaysPlan:[],setTodaysPlan:()=>{},saved:[],setSaved:()=>{},activeTab:"today", setActiveTab:()=>{}})


const LibraryProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan,setTodaysPlan] = useState<ILibrary[]>([]);
    const [saved,setSaved] = useState<ILibrary[]>([]);
    const [activeTab,setActiveTab] = useState<"today"|"save">("today");

    const contexts = {
    todaysPlan,setTodaysPlan,saved,setSaved,activeTab,setActiveTab
    }

    return(
        <LibraryContext.Provider value={contexts}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;