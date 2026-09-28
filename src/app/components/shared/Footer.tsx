import Image from "next/image";
import logo from "@/assets/logo.png"
const Footer = () => {
    return (
        <div className="flex justify-between items-center px-[1%] gap-4 text-white py-10 border-t border-[#4d4d4d] md:px-[2%]">
            <div className="flex justify-center items-center gap-2">
                <Image src={logo} alt="footer logo " className="ml-2"></Image>
                <h2 className="font-bold text-sm md:text-xl">FITLOG</h2>
            </div>
            <p className="text-[12px] lg:text-base">
                &copy; 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div> 
    );
};

export default Footer;