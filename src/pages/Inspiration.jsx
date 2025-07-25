import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

const moods = [
  {
    name: "All",
    color: "from-rose-500 to-amber-500",
    description: "View all curated looks and find your inspiration",
  },
  {
    name: "Bold",
    color: "from-red-500 to-pink-500",
    description: "Make a statement with fearless fashion choices",
  },
  {
    name: "Romantic",
    color: "from-pink-400 to-rose-400",
    description: "Soft, feminine looks that capture hearts",
  },
  {
    name: "Street",
    color: "from-slate-600 to-gray-800",
    description: "Urban edge meets comfortable style",
  },
  {
    name: "Festive",
    color: "from-amber-500 to-orange-500",
    description: "Celebration-ready outfits that shine",
  },
];

const looks = [
  {
    id: 1,
    title: "Power Blazer Moment",
    mood: "Bold",
    description: "Oversized blazer with statement accessories",
    image: "https://i.pinimg.com/1200x/c7/14/2a/c7142a8f496f7f624bcfd9c8c515b2c7.jpg",
    likes: 1247,
    saves: 89,
  },
  {
    id: 2,
    title: "Dreamy Pastels",
    mood: "Romantic",
    description: "Soft pink dress with delicate jewelry",
    image: "https://i.pinimg.com/1200x/20/3d/f5/203df54bd43d47854918d56d431bc401.jpg",
    likes: 892,
    saves: 156,
  },
  {
    id: 3,
    title: "Urban Explorer",
    mood: "Street",
    description: "Cargo pants with cropped jacket",
    image: "https://i.pinimg.com/1200x/02/ff/a1/02ffa1833b5a6018d7c71ce852cbecd5.jpg",
    likes: 2103,
    saves: 234,
  },
  {
    id: 4,
    title: "Golden Hour Glam",
    mood: "Festive",
    description: "Sequined top with flowing palazzo",
    image: "https://i.pinimg.com/736x/8d/ce/df/8dcedf24ab8f8a449cf2fd4bc01c0888.jpg",
    likes: 1567,
    saves: 298,
  },
  {
    id: 5,
    title: "Neon Dreams",
    mood: "Bold",
    description: "Bright neon co-ord set",
    image: "https://i.pinimg.com/1200x/df/27/79/df277972f494673cfd212893bfcd76ae.jpg",
    likes: 934,
    saves: 67,
  },
  {
    id: 6,
    title: "Floral Fantasy",
    mood: "Romantic",
    description: "Flowing floral maxi dress",
    image: "https://i.pinimg.com/1200x/c7/80/24/c78024befe5b875999dbac842a955b6d.jpg",
    likes: 1789,
    saves: 445,
  },
  {
    id: 7,
    title: "Denim on Denim",
    mood: "Street",
    description: "Double denim with modern twist",
    image: "https://i.pinimg.com/1200x/82/9b/30/829b30808907fcc5abb533c0a3a5df52.jpg",
    likes: 1456,
    saves: 178,
  },
  {
    id: 8,
    title: "Saree Reimagined",
    mood: "Festive",
    description: "Contemporary saree styling",
    image: "https://i.pinimg.com/1200x/47/be/86/47be868c94ed14e7c9371b318761e8ad.jpg",
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
    <div className="min-h-screen bg-[#F3F4F6] py-20 font-sans mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="font-serif italic text-gray-500">Style</span>{" "}
            <span>
              Inspiration
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover looks curated by mood and occasion. Find your style story
            in every outfit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {moods.map((mood) => (
            <button
              key={mood.name}
              onClick={() => setActiveMood(mood.name)}
              className={`group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden text-white bg-gradient-to-br ${
                mood.color
              } ${
                activeMood === mood.name
                  ? "ring-2 ring-rose-500 ring-offset-4"
                  : ""
              }`}
            >
              <div className="h-32 relative flex flex-col justify-end p-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="relative">
                  <h3 className="text-2xl font-bold">{mood.name}</h3>
                </div>
              </div>
              <div className="p-4 text-left bg-black/10">
                <p className="text-sm text-white/80">{mood.description}</p>
              </div>
            </button>
          ))}
        </div>

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
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${moodStyle.color}`}
                    >
                      {look.mood}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center justify-end">
                      <div className="flex space-x-2">
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

        <div className="text-center mt-20">
          <div className="bg-neutral-900 text-white rounded-xl shadow-2xl">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Get Personalized Style Inspiration
              </h2>
              <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                Book a Closet Therapy session and discover looks curated just
                for you.
              </p>
              <button className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold bg-white text-black hover:bg-rose-50 transition-colors shadow-lg">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
