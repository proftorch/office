export default function NewsCard({ item }) {
  return (
    <div className="relative h-[460px] rounded-xl shadow-md overflow-hidden group cursor-pointer bg-white hover:shadow-xl transition-all duration-500">

      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-white
          p-5
          flex flex-col
          transition-all duration-500 ease-in-out
          h-52
          group-hover:h-full
        "
      >
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-hidden group-hover:overflow-y-auto pr-2">
          <h3 className="font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Read More Always Visible */}
        <span className="text-sky-600 text-sm mt-4 flex-shrink-0">
          Read more
        </span>
      </div>
    </div>
  );
}
