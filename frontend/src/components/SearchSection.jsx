import { MessageSquare, Search, Mic  } from "lucide-react";

export default function SearchSection() {
  return (
    <div className="mb-12">


      <div className="flex items-center justify-between mb-6">


        <h1 className="text-xl font-semibold text-[#000048]">
          Welcome Mohd!
        </h1>


        <div className="flex items-center gap-2 text-[#2f77c4] text-[14px] font-semibold bg-transparent cursor-pointer hover:underline">
          <MessageSquare size={20} />
          <span>Share feedback</span>
        </div>

      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-[900px]">


          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <button className="hover:cursor-pointer"><Mic
            size={18}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
          />
</button>

          <input
            type="text"
            placeholder="Search"
            className="
              w-full
              bg-white
              max-w-[900px]
              rounded-lg
              py-4
              pl-12
              pr-6
              shadow-md
              focus:outline-none
            "
          />

        </div>
      </div>

    </div>
  );
}
