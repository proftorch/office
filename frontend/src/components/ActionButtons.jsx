import { MoveUpRight } from "lucide-react";

export default function ActionButtons() {
  const actions = [
    "Ask HR",
    "Build your skills",
    "View Timesheet",
    "View Assignments",
    "Submit Timesheet",
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {actions.map((action, index) => (
        <button
          key={index}
          className="group flex items-center gap-2 bg-[#7373d8] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
          <span className="text-sm font-12px font-gellixi-semibold height-37px">
            {action}
          </span>

          {/* Icon */}
          <MoveUpRight
            size={14}
            className="text-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      ))}
    </div>
  );
}
