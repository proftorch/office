import { Bell, CircleUser } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-[#000048] text-white px-16 py-4 flex items-center justify-between">

      
      <Link
        to="/"
        className="text-lg font-bold tracking-wide hover:opacity-80"
      >
        OneCognizant
      </Link>


      <div className="flex gap-8 text-lg font-bold tracking-wide opacity-90">
        <span className="hover:text-white cursor-pointer">News & Info</span>
        <span className="hover:text-white cursor-pointer">My actions</span>
        <span className="hover:text-white cursor-pointer">My corner</span>
        <span className="hover:text-white cursor-pointer">Apps & activities</span>
      </div>


      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <Bell size={22} className="text-white" />
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <CircleUser size={24} className="text-white" />
        </button>
      </div>

    </div>
  );
}
