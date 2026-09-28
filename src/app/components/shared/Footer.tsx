import Image from "next/image";
import logo from "@/assets/logo.png"
const Footer = () => {
    return (
        <div className="flex justify-between items-center px-[2%] text-white py-10 border-t border-[#4d4d4d]">
            <div className="flex justify-center items-center gap-2">
                <Image src={logo} alt="footer logo"></Image>
                <h2 className="font-bold text-xl">FITLOG</h2>
            </div>
            <p className="text-sm lg:text-base">
                &copy; 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div> 
    );
};

export default Footer;