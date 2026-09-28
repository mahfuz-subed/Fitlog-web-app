import Link from "next/link";

const NotFound = () => {
    return (
        <div className='mt-4 text-center'>
            <h2 className='text-xl font-bold text-white md:text-2xl'>Page Not Found</h2>
            <p className='my-2 text-white'>The you're looking for doesn't exist.</p>
            <Link href="/"><button className="btn bg-[#c2f800]">Go Home</button></Link>
        </div>
    );
};

export default NotFound;