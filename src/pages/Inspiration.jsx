import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

// Updated mood data for the monochrome theme
const moods = [
  {
    name: "All",
    bgClass: "bg-gray-900",
    textClass: "text-white",
    description: "View all curated looks and find your inspiration",
  },
  {
    name: "Bold",
    bgClass: "bg-gray-800",
    textClass: "text-white",
    description: "Make a statement with fearless fashion choices",
  },
  {
    name: "Romantic",
    bgClass: "bg-gray-100",
    textClass: "text-gray-800",
    description: "Soft, feminine looks that capture hearts",
  },
  {
    name: "Street",
    bgClass: "bg-gray-500",
    textClass: "text-white",
    description: "Urban edge meets comfortable style",
  },
  {
    name: "Festive",
    bgClass: "bg-white",
    textClass: "text-gray-900",
    description: "Celebration-ready outfits that shine",
  },
];

const looks = [
  {
    id: 1,
    title: "Power Blazer Moment",
    mood: "Bold",
    description: "Oversized blazer with statement accessories",
    image: "/placeholder.svg?height=400&width=300&query=blazer",
    likes: 1247,
    saves: 89,
  },
  {
    id: 2,
    title: "Dreamy Pastels",
    mood: "Romantic",
    description: "Soft pink dress with delicate jewelry",
    image: "/placeholder.svg?height=400&width=300&query=dress",
    likes: 892,
    saves: 156,
  },
  {
    id: 3,
    title: "Urban Explorer",
    mood: "Street",
    description: "Cargo pants with cropped jacket",
    image: "/placeholder.svg?height=400&width=300&query=streetwear",
    likes: 2103,
    saves: 234,
  },
  {
    id: 4,
    title: "Golden Hour Glam",
    mood: "Festive",
    description: "Sequined top with flowing palazzo",
    image: "/placeholder.svg?height=400&width=300&query=sequins",
    likes: 1567,
    saves: 298,
  },
  {
    id: 5,
    title: "Neon Dreams",
    mood: "Bold",
    description: "Bright neon co-ord set",
    image: "/placeholder.svg?height=400&width=300&query=neon",
    likes: 934,
    saves: 67,
  },
  {
    id: 6,
    title: "Floral Fantasy",
    mood: "Romantic",
    description: "Flowing floral maxi dress",
    image: "/placeholder.svg?height=400&width=300&query=floral",
    likes: 1789,
    saves: 445,
  },
  {
    id: 7,
    title: "Denim on Denim",
    mood: "Street",
    description: "Double denim with modern twist",
    image: "/placeholder.svg?height=400&width=300&query=denim",
    likes: 1456,
    saves: 178,
  },
  {
    id: 8,
    title: "Saree Reimagined",
    mood: "Festive",
    description: "Contemporary saree styling",
    image: "/placeholder.svg?height=400&width=300&query=saree+style",
    likes: 2890,
    saves: 567,
  },
];

export default function InspirationPage() {
  const [activeMood, setActiveMood] = useState("All");

  const filteredLooks =
    activeMood === "All"
      ? looks
      : looks.filter((look) => look.mood === activeMood);

  return (
    <div className="min-h-screen bg-gray-100 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="font-serif italic text-gray-500">Style</span>{" "}
            Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover looks curated by mood and occasion. Find your style story
            in every outfit.
          </p>
        </div>

        {/* Mood Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {moods.map((mood) => {
            const moodStyle = moods.find((m) => m.name === mood.name);
            return (
              <button
                key={mood.name}
                onClick={() => setActiveMood(mood.name)}
                className={`group rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${
                  activeMood === mood.name
                    ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                    : "border-gray-200/80"
                } ${moodStyle.bgClass}`}
              >
                <div className="h-32 relative flex flex-col justify-end p-4">
                  <div
                    className={`absolute inset-0 ${
                      mood.name === "Festive" ? "bg-black/5" : "bg-black/20"
                    } group-hover:bg-black/10 transition-colors`}
                  />
                  <div className="relative">
                    <h3 className={`text-2xl font-bold ${moodStyle.textClass}`}>
                      {mood.name}
                    </h3>
                  </div>
                </div>
                <div className={`p-4 text-left ${moodStyle.bgClass}`}>
                  <p
                    className={`${
                      mood.name === "Festive"
                        ? "text-gray-600"
                        : mood.name === "Romantic"
                        ? "text-gray-600"
                        : "text-gray-400"
                    } text-sm`}
                  >
                    {mood.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Looks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => {
            const moodStyle = moods.find((m) => m.name === look.mood);
            return (
              <div
                key={look.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200/80"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={look.image || "/placeholder.svg"}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    {/* FIX: Changed mood.name to look.mood */}
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold border ${
                        moodStyle.bgClass
                      } ${moodStyle.textClass} ${
                        look.mood === "Festive"
                          ? "border-gray-200"
                          : "border-transparent"
                      }`}
                    >
                      {look.mood}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center justify-end">
                      <div className="flex space-x-2">
                        {/* Action Buttons */}
                        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-transform hover:scale-110">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-transform hover:scale-110">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-transform hover:scale-110">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    {look.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1.5" />
                        {look.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Bookmark className="h-4 w-4 mr-1.5" />
                        {look.saves.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Get Personalized Style Inspiration
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a Closet Therapy session and discover looks curated just
                for you.
              </p>
              <button className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-200 transition-colors shadow-lg">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
