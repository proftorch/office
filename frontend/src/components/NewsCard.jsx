export default function NewsCard({ item }) {
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer h-[460px] transition-all duration-500 hover:shadow-xl">


      <div className="h-52 overflow-hidden">
        <img
          src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>


      <div className="p-5 h-52 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>

          <p className="text-14px text-gray-600 margin-block-end: 20px line-height: 17px; display: block; line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {item.description}
          </p>
        </div>

        <span className="text-sky-600 text-sm mt-3">
          Read more
        </span>
      </div>

    
      <div
        className="
          absolute inset-0
          bg-white
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          flex
          flex-col
          p-6
        "
      >
        <h3 className="font-semibold text-gray-800 mb-3">
          {item.title}
        </h3>


        <div className="flex-1 overflow-y-hidden group-hover:overflow-y-auto pr-2 no-scrollbar">
          <p className="text-14px text-gray-700 line-height: 17px; display: block; margin-block-end: 20px leading-relaxed">
            {item.description}
          </p>
        </div>

        <span className="text-sky-600 text-sm mt-4">
          Read more
        </span>
      </div>
    </div>
  );
}
