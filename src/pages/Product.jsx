import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  Download,
  ShoppingBag,
  BookOpen,
  Palette,
  ArrowLeft,
} from "lucide-react";

const products = [
  // ... (product data remains the same)
  {
    id: 1,
    name: "Closet Therapy",
    type: "1-on-1 Styling",
    description: "Book a virtual styling session with Komal",
    price: "₹999",
    category: "services",
    icon: <Palette className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=fashion+styling",
    cta: "Book Now",
    popular: true,
  },
  {
    id: 2,
    name: "Bold is Beautiful",
    type: "Lookbook PDF",
    description: "Pose guides, outfit plans, and color pairings",
    price: "₹199",
    category: "digital",
    icon: <Download className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=fashion+lookbook",
    cta: "Download",
  },
  {
    id: 3,
    name: "Power Dressing 101",
    type: "Course",
    description: "Learn how to dress like a force",
    price: "₹1,499",
    category: "courses",
    icon: <BookOpen className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=fashion+course",
    cta: "Enroll",
    popular: true,
  },
  {
    id: 4,
    name: "Saree Reimagined Drop",
    type: "Fashion Product",
    description: "Limited edition Indo-western sarees",
    price: "₹3,499",
    category: "merch",
    icon: <ShoppingBag className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=saree",
    cta: "Buy Now",
  },
  {
    id: 5,
    name: "Dewy Look Kit",
    type: "Beauty Collab",
    description: "Lip gloss, tint, & highlighter combo",
    price: "₹1,299",
    category: "beauty",
    icon: <Star className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=beauty+kit",
    cta: "Shop Now",
  },
  {
    id: 6,
    name: "Personal Shopping",
    type: "1-on-1 Styling",
    description: "Let Komal curate the perfect wardrobe for you",
    price: "₹2,499",
    category: "services",
    icon: <Palette className="h-5 w-5 text-gray-500" />,
    image: "/placeholder.svg?height=300&width=400&query=personal+shopping",
    cta: "Book Now",
  },
];

const tabFilters = [
  { value: "all", label: "All" },
  { value: "services", label: "Styling" },
  { value: "courses", label: "Courses" },
  { value: "merch", label: "Merch" },
  { value: "beauty", label: "Beauty" },
  { value: "digital", label: "Digital" },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="font-serif italic text-gray-500">What I</span>{" "}
            Offer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal styling and digital lookbooks to in-depth courses,
            discover tools to transform your style journey.
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-1 rounded-full bg-gray-200/75 p-1 w-max mx-auto">
            {tabFilters.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab.value
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

// The ProductGrid component remains unchanged
function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200/50"
        >
          <div className="relative">
            {product.popular && (
              <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-gray-900">
                <Star className="-ml-1 mr-1.5 h-4 w-4 text-yellow-400" />
                Popular
              </span>
            )}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {product.icon}
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {product.type}
                </span>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                {product.price}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {product.description}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="w-full mt-auto inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all"
            >
              {product.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
