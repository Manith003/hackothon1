import { Instagram, Youtube, Play, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
              <span className="font-serif italic text-gray-500">Latest</span> & Greatest
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay connected and get your daily dose of fashion inspiration across all platforms.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Instagram Card */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-5">
                  <Instagram className="h-7 w-7 text-pink-500 mr-3" />
                  <h3 className="font-bold text-xl text-gray-900">Instagram Feed</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {["https://i.pinimg.com/736x/37/6f/07/376f079406a7120dfcb4fefe299f5486.jpg", "https://i.pinimg.com/1200x/6f/66/4d/6f664d9823370ec637dcc51aebb52a3e.jpg", "https://i.pinimg.com/1200x/4b/03/a8/4b03a811baad8397ececa8cfb1aaf0cd.jpg", "https://i.pinimg.com/736x/35/24/c3/3524c3f3632ae65decc3573735149353.jpg"].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group/image">
                      <img
                        src={`${i}`}
                        alt={`Instagram post ${i}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-600 hover:bg-pink-500 hover:text-white transition-colors font-medium">
                  @komalpandeyofficial
                </button>
              </div>
            </div>

            {/* YouTube Card */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-5">
                  <Youtube className="h-7 w-7 text-red-600 mr-3" />
                  <h3 className="font-bold text-xl text-gray-900">YouTube Shorts</h3>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { title: "How To Dress For Work: Layering & Elegant 9 to 5 Fashion | Komal Pandey", time: "2 days ago", src: "https://img.youtube.com/vi/JcRJqAF8N3Y/maxresdefault.jpg" },
                    { title: "How To ALWAYS Look Put Together | Komal Pandey", time: "5 days ago", src: "https://img.youtube.com/vi/ifo0oJFqwmY/maxresdefault.jpg" },
                    { title: "The Perfect Date Night Look With Quick & Easy Hair Hacks! (And other hacks)", time: "1 week ago", src: "https://img.youtube.com/vi/xhmKEbfHVxs/maxresdefault.jpg" }
                  ].map((video, i) => (
                    <a href="#" key={i} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 transition-colors group/video">
                      <div className="relative w-24 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={video.src}
                          alt={video.title}
                          width={96}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 text-white/80" fill="white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{video.title}</p>
                        <p className="text-xs text-gray-500">{video.time}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <button className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white transition-colors font-medium">
                  Watch More
                </button>
              </div>
            </div>

            {/* Newsletter Card (Kept as a vibrant, contrasting element) */}
            <div className="bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white flex flex-col p-6">
              <h3 className="font-bold text-xl mb-2">Join the Style Revolution</h3>
              <p className="text-sm mb-6 text-rose-100 flex-grow">
                Subscribe for styling tips, exclusive drops & behind-the-scenes fashion therapy.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-200" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-rose-200 focus:bg-white/30 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <button type="submit" className="w-full py-2.5 px-4 rounded-lg bg-white text-rose-500 hover:bg-rose-50 font-semibold transition-colors shadow">
                  Subscribe Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}