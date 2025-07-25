import { useParams, Link } from "react-router-dom";
import {
  Star,
  Check,
  Play,
  Users,
  Clock,
  Award,
  ArrowLeft,
  Palette,
  Download,
  BookOpen,
  ShoppingBag
} from "lucide-react";

// --- Mock Data ---
const allProducts = [
  {
    id: 1,
    name: "Closet Therapy",
    type: "1-on-1 Styling",
    description: "Rediscover your wardrobe's potential. Komal will personally guide you through a virtual session to declutter, restyle, and build stunning outfits with what you already own.",
    price: "₹999",
    category: "services",
    icon: <Palette className="h-5 w-5 text-gray-500" />,
    image: "https://i.pinimg.com/736x/a7/50/4a/a7504aa3bf74cb5551ab8fa18bce1bb2.jpg",
    cta: "Book a Session",
    popular: true,
    rating: 4.9,
    clients: 850,
    duration: "60-Minute Session",
    includes: [
      "Personal style assessment",
      "Live outfit building (10+ looks)",
      "Digital lookbook of styled outfits",
      "Post-session style guide PDF",
      "Wardrobe organization tips",
    ],
    testimonials: [
      {
        name: "Ananya",
        role: "Working Professional",
        text: "I had a closet full of clothes but nothing to wear. Komal's session was a game-changer. I feel so much more confident getting dressed now!",
        rating: 5,
      },
      {
        name: "Priya",
        role: "Client",
        text: "This was the best self-care investment. It's not just about clothes; it's about seeing yourself in a new light. Highly recommend!",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Bold is Beautiful",
    type: "Lookbook PDF",
    description: "Unlock the art of statement-making. This downloadable 50-page lookbook is packed with pose guides, curated outfit formulas, and daring color palettes to elevate your content.",
    price: "₹199",
    category: "digital",
    icon: <Download className="h-5 w-5 text-gray-500" />,
    image: "https://i.pinimg.com/1200x/38/cb/48/38cb487f94a404eb88462611e6728c84.jpg",
    cta: "Download Now",
    popular: false,
    rating: 4.8,
    downloads: 12500,
    details: "50+ High-Res Pages",
    includes: [
      "Instant PDF download",
      "5 core outfit formulas",
      "20+ pose ideas for Instagram",
      "Printable mood board kit",
      "Exclusive color theory guide",
    ],
    testimonials: [
      {
        name: "Simran",
        role: "Content Creator",
        text: "This lookbook is my secret weapon for Instagram. The pose guides are so helpful, and my feed has never looked better.",
        rating: 5,
      },
      {
        name: "Zara",
        role: "Fashion Student",
        text: "An incredible resource for the price. The way Komal breaks down color and composition is brilliant. A must-have!",
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Power Dressing 101",
    type: "4-Part Mini Course",
    price: "₹1,499",
    category: "courses",
    description: "Learn how to express power and elegance through every look — from boardroom to brunch.",
    image: "https://i.pinimg.com/1200x/9d/d3/6d/9dd36d1cbdcb63d839e0c6e0e17bb9de.jpg",
    cta: "Enroll Now",
    popular: true,
    icon: <BookOpen className="h-5 w-5 text-gray-500" />,
    rating: 4.9,
    students: 2847,
    duration: "4 hours",
    includes: [
      "4 video lessons",
      "Style workbook PDF",
      "Certificate of completion",
      "Lifetime access to course material",
      "Private community access",
    ],
    testimonials: [
      {
        name: "Kritika",
        role: "Student",
        text: "Her courses helped me feel confident for my first job interview. The lessons are practical and inspiring.",
        rating: 5,
      },
      {
        name: "Rhea",
        role: "Fashion Enthusiast",
        text: "This course changed how I dress for work — now I feel unstoppable and my confidence has skyrocketed.",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    name: "Saree Reimagined Drop",
    type: "Fashion Product",
    description: "A curated, limited-edition collection where tradition meets trend. These Indo-western sarees are designed by Komal for the modern woman who owns her heritage and her future.",
    price: "₹3,499",
    category: "merch",
    icon: <ShoppingBag className="h-5 w-5 text-gray-500" />,
    image: "https://i.pinimg.com/1200x/2f/63/63/2f636346be57b78e1d72cf999724310e.jpg",
    cta: "Shop the Collection",
    popular: false,
    rating: 4.9,
    sold: "500+ Units",
    details: "Limited Edition Drop",
    includes: [
      "Premium georgette fabric",
      "Comes with a custom-designed blouse piece",
      "Signed thank-you card from Komal",
      "Exclusive keepsake packaging",
      "A styling suggestion card",
    ],
    testimonials: [
      {
        name: "Aisha",
        role: "Shopper",
        text: "The quality is breathtaking! It drapes beautifully and I got so many compliments at a recent wedding. Felt like a celebrity.",
        rating: 5,
      },
      {
        name: "Neha",
        role: "Fashion Blogger",
        text: "This isn't just a saree, it's a piece of art. The attention to detail is immaculate. Worth every rupee.",
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Dewy Look Kit",
    type: "Beauty Collab",
    description: "Get Komal's signature 'glass-skin' glow. This curated 3-piece kit, created in collaboration with a top beauty brand, is all you need for a fresh, dewy, and radiant look.",
    price: "₹1,299",
    category: "beauty",
    icon: <Star className="h-5 w-5 text-gray-500" />,
    image: "https://i.pinimg.com/736x/31/83/8c/31838cb23d054565fdffdfb7d2c75759.jpg",
    cta: "Shop the Kit",
    popular: true,
    rating: 4.8,
    buyers: 9800,
    details: "3-Piece Makeup Kit",
    includes: [
      "'Glass-Glow' Lip Oil (5ml)",
      "'Cloud-Crush' Cheek & Lip Tint",
      "'Stardust' Liquid Highlighter (15ml)",
      "Cruelty-free & Vegan",
      "Travel-friendly makeup pouch",
    ],
    testimonials: [
      {
        name: "Fatima",
        role: "Makeup Artist",
        text: "The highlighter is absolutely stunning, it melts into the skin without any glitter. The quality of this collab is top-notch.",
        rating: 5,
      },
      {
        name: "Tanya",
        role: "Follower",
        text: "I finally achieved the dewy look I've been trying for! The products are so easy to use and look amazing.",
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    name: "Personal Shopping",
    type: "1-on-1 Styling",
    description: "The ultimate style upgrade. Komal becomes your personal shopper, curating a full wardrobe based on your lifestyle, budget, and goals. For those ready for a total transformation.",
    price: "₹2,499",
    category: "services",
    icon: <Palette className="h-5 w-5 text-gray-500" />,
    image: "https://i.pinimg.com/736x/6f/9c/3b/6f9c3b36813b924d337076424a293a81.jpg",
    cta: "Enquire Now",
    popular: false,
    rating: 5.0,
    clients: "150+",
    duration: "Multi-Day Experience",
    includes: [
      "In-depth virtual consultation",
      "Personalized mood board & shopping list",
      "Links to purchase all recommended items",
      "3 follow-up virtual fitting sessions",
      "Direct line of communication with Komal",
    ],
    testimonials: [
      {
        name: "Isha",
        role: "Entrepreneur",
        text: "This service saved me so much time and stress. I now have a functional, stylish wardrobe that makes me feel powerful.",
        rating: 5,
      },
      {
        name: "Maya",
        role: "Client",
        text: "A truly luxurious and transformative experience. I never thought I could look and feel this good.",
        rating: 5,
      },
    ],
  },
]

// Helper function to get the correct enrollment/purchase metric
const getMetric = (product) => {
    if (product.students) return { value: product.students, label: 'students' };
    if (product.clients) return { value: product.clients, label: 'clients' };
    if (product.downloads) return { value: product.downloads, label: 'downloads' };
    if (product.buyers) return { value: product.buyers, label: 'buyers' };
    if (product.sold) return { value: product.sold, label: 'units sold' };
    return null;
}

export default function ProductDetailPage() {
  const { id } = useParams(); 
  const product = allProducts.find(p => p.id === parseInt(id));
  const metric = getMetric(product);

  if (!product) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Product not found!</h1>
            <Link to="/products" className="mt-4 text-gray-800 hover:underline">
                Back to all products
            </Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Products</span>
            </Link>
        </div>
      
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 flex flex-col justify-center">
            <span className="inline-block w-fit-content rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-gray-900">
                {product.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">{product.name}</h1>
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1.5" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              {metric && (
                <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1.5" />
                    <span>{metric.value.toLocaleString('en-IN')} {metric.label}</span>
                </div>
              )}
              {product.duration && (
                <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>{product.duration}</span>
                </div>
              )}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">{product.description}</p>
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-4xl font-bold text-gray-900">{product.price}</span>
              <button className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all transform hover:scale-105">
                {product.cta}
              </button>
            </div>
          </div>

          <div className="relative h-[74%] overflow-hidden rounded-2xl shadow-lg">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="h-20 w-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all transform hover:scale-110">
                  <Play className="h-10 w-10 ml-1" fill="currentColor"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16 bg-white border border-gray-200/80 rounded-2xl shadow-lg">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <Award className="h-6 w-6 mr-3 text-gray-800" />
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {product.includes.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Community Says</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center rounded-2xl bg-white border border-gray-200/80 p-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Style?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of women who've discovered their power through fashion
            </p>
            <button className="inline-flex items-center justify-center rounded-lg px-12 py-4 text-xl font-semibold text-white bg-gray-900 hover:bg-gray-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all transform hover:scale-105">
              {product.cta} - {product.price}
            </button>
        </div>
      </div>
    </div>
  );
}