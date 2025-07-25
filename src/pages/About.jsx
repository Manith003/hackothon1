import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Star,
  Quote,
  Calendar,
  Users,
  Award,
  Heart,
  ArrowLeft,
} from "lucide-react";

const timeline = [
  // This year is dynamically checked against the current year (2025)
  {
    year: "2025",
    milestone: "Launches Lookbook & Closet Therapy",
    description: "Expanded into personalized styling services",
  },
  {
    year: "2023",
    milestone: "Started Style School",
    description: "Launched educational platform for fashion enthusiasts",
  },
  {
    year: "2020",
    milestone: "Reached 1M+ followers",
    description: "Became one of India's top fashion influencers",
  },
  {
    year: "2017",
    milestone: "Launched YouTube channel",
    description: "Started sharing fashion tips and styling videos",
  },
  {
    year: "2015",
    milestone: "Started career with PopXO",
    description: "Began journey as a fashion writer and content creator",
  },
];

const testimonials = [
  {
    name: "Kritika",
    role: "Student",
    text: "Her courses helped me feel confident for my first job interview.",
    rating: 5,
  },
  {
    name: "Rhea",
    role: "Fashion Enthusiast",
    text: "Closet Therapy changed how I dress — now I feel unstoppable.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Working Professional",
    text: "Komal taught me that fashion is about expressing your authentic self.",
    rating: 5,
  },
];

export default function AboutPage() {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* --- Back Button Added Here --- */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white bg-gray-900">
                Meet Komal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                India's{" "}
                <span className="font-serif italic text-gray-600">
                  unapologetic
                </span>{" "}
                fashion icon
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Komal Pandey is known for storytelling through style. From PopXO
                beginnings to becoming a voice for bold, fearless dressing,
                she's reshaped the Indian fashion landscape.
              </p>
              <div className="flex items-center space-x-8 text-sm text-gray-600 pt-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-semibold">2M+ Followers</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-semibold">Fashion Influencer</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-semibold">Style Educator</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/8b/4b/fd/8b4bfda7d38e57787e2d21f9fc233f7f.jpg"
                  alt="Komal Pandey"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <Quote className="h-8 w-8 mb-2 opacity-50" />
                <p className="font-semibold">
                  Style is the loudest form of self-love
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              The{" "}
              <span className="font-serif italic text-gray-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              From content creator to fashion icon
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const isFuture =
                  parseInt(item.year) >= new Date().getFullYear();
                return (
                  <div
                    key={index}
                    className={`flex items-center w-full ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-1/2 px-8">
                      <div
                        className={`p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow ${
                          index % 2 !== 0 ? "text-left" : "text-right"
                        }`}
                      >
                        <div
                          className={`flex items-center mb-2 ${
                            index % 2 !== 0 ? "justify-start" : "justify-end"
                          }`}
                        >
                          <Calendar
                            className={`h-5 w-5 mr-2 ${
                              isFuture ? "text-gray-400" : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`inline-block border rounded-md px-3 py-1 text-md font-bold ${
                              isFuture
                                ? "border-gray-200 text-gray-400"
                                : "border-gray-300 text-gray-800"
                            }`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            isFuture ? "text-gray-500" : "text-gray-900"
                          }`}
                        >
                          {item.milestone}
                        </h3>
                        <p
                          className={`${
                            isFuture ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`relative z-10 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                        isFuture ? "bg-gray-300" : "bg-gray-900"
                      }`}
                    ></div>
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4 text-gray-900">
              What People{" "}
              <span className="font-serif italic text-gray-600">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stories from the style revolution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gray-200 mb-4" />
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-lg text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md-text-5xl font-bold mb-8">
            My{" "}
            <span className="font-serif italic text-gray-400">Philosophy</span>
          </h2>
          <p className="text-2xl leading-relaxed mb-8 text-gray-300">
            "Fashion isn't about following trends—it's about finding your voice
            and wearing it with pride. Every outfit is an opportunity to tell
            your story, to show the world who you are without saying a word."
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://i.pinimg.com/1200x/d5/9d/cc/d59dccc37428341ad247de54d78465cb.jpg"
              alt="Komal's Philosophy"
              className="w-full h-full object-cover object-[0%_35%] filter brightness-75"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
