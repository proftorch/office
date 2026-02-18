import { ShieldUser, Laptop, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";


export default function FloatingButtons() {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-[100]">


      <div className="group relative flex items-center justify-end">


        <div className="absolute right-16 opacity-0 translate-x-2
                        group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300
                        bg-[#2f415a] text-white text-sm px-3 py-2
                        rounded-md shadow-lg whitespace-nowrap">
          Ask HR
        </div>

        <button className="w-14 h-14 bg-[#2f415a] rounded-full
                           flex items-center justify-center
                           shadow-xl hover:scale-110 transition duration-300">
          <ShieldUser size={30} className="text-white" />
        </button>
      </div>


      <div className="group relative flex items-center justify-end">

        <div className="absolute right-16 opacity-0 translate-x-2
                        group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300
                        bg-[#2f415a] text-white text-sm px-3 py-2
                        rounded-md shadow-lg whitespace-nowrap">
          IT Support
        </div>

        <button className="w-14 h-14 bg-[#2f415a] rounded-full
                           flex items-center justify-center
                           shadow-xl hover:scale-110 transition duration-300">
          <Laptop size={30} className="text-white" />
        </button>
      </div>


      <div className="group relative flex items-center justify-end">

        <div className="absolute right-16 opacity-0 translate-x-2
                        group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300
                        bg-[#2f415a] text-white text-sm px-3 py-2
                        rounded-md shadow-lg whitespace-nowrap">
          Help Center
        </div>
        <Link to="/help-centre">


        <button className="w-14 h-14 bg-[#2f415a] rounded-full
                           flex items-center justify-center
                           shadow-xl hover:scale-110 transition duration-300">
          <HelpCircle size={30} className="text-white" />
        </button>

      </Link>
      </div>

    </div>
  );
}
