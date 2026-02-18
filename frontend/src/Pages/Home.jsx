import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import ActionButtons from "../components/ActionButtons";
import NewsCarousel from "../components/NewsCarousel";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <div className="relative min-h-screen">



      <div className="absolute inset-0 -z-10">
        <div className="h-[50vh] bg-gradient-to-r from-blue-500 to-amber-300"></div>
        <div className="h-[50vh] bg-white"></div>
      </div>


      <div className="relative max-w-5xl mx-auto py-6">
        <SearchSection />
        <ActionButtons />
      </div>

      <div className="relative px-16 pb-16">
        <NewsCarousel />
      </div>

      <FloatingButtons />

    </div>
  );
}
