import { useState } from "react";
import { ChevronRight, Filter } from "lucide-react";
import trendingData from "../data/tredingData.json";

const TrendingSection = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(0);

  const filtered = trendingData.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-50 px-24">
      {/* Header */}
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <p className="text-sm text-pink-500 font-medium mb-2 bg-pink-50 inline-block px-3 py-1 rounded-full">
            One fixed price
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
            Variouse Amazing <br /> that are trending
          </h2>
        </div>

        <p className="text-gray-600 max-w-md text-base leading-relaxed">
          We have a structured work process to ensure that the projects handled
          can be completed properly and according to your needs
        </p>
      </div>

      {/* Search + Filter */}
      <div className="w-[90%] flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-lg py-3 px-5 pl-12 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Categories</span>
          <Filter size={18} className="text-gray-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 rounded-lg py-2 px-4 text-sm bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Health">Health</option>
            <option value="Medical">Medical</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                index === 0 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
              onClick={() => setSelected(index)}
            >
              <div className="relative h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
                </div>

                {index === selected && (
                  <div className="absolute bottom-6 right-6">
                    <button className="bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition-all hover:scale-110">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {filtered.map((_, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                i === selected ? "bg-gray-800 w-10" : "bg-gray-300 w-2"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Selected Card Details - Mobile Only */}
      {selected !== null && (
        <div className="w-[90%] max-w-7xl mt-8 md:hidden bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">
            {filtered[selected].title}
          </h3>
          <p className="text-gray-600 mb-2 text-sm font-medium">
            {filtered[selected].category}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {filtered[selected].desc}
          </p>
        </div>
      )}
    </section>
  );
};

export default TrendingSection;