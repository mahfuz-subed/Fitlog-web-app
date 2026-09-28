import LibraryCard from '../components/libraryCard';
import { ILibrary } from '../types/libraryType';
 const getLibrary = async () => {
    const res = await fetch ('https://api.api-store.workers.dev/api/fitlog')
    if(!res.ok){
      throw new Error ("Failed to fetch data")  
    } 
    return res.json();
 }


const LibrarySection = async() => {
    const libraryData = await getLibrary()
    return (
       <div className='mx-auto w-[90%] text-start my-10'>
          <h2 className='font-bold text-2xl text-white'>THE LIBRARY </h2>
      <p className='text-[#9ca3af] mb-4'>Twelve lifts covering every major muscle group.</p>
        <div className='grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 '>
            {
                libraryData.map((library:ILibrary) => <LibraryCard key={library.id} library={library}/>)
            }
        </div>
       </div>
    );
};

export default LibrarySection;