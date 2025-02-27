import { title } from "@/components/primitives";
import Link from "next/link";

// Mock blog data - in a real app, you would fetch this from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-to-hot-sauce-heat-levels",
    title: "The Ultimate Guide to Hot Sauce Heat Levels",
    excerpt: "Learn about the Scoville scale and how to measure the heat in your favorite hot sauces.",
    date: "February 20, 2025",
    author: "Spicy Sean",
    authorImageUrl: "https://placehold.co/100x100/png",
    imageUrl: "https://placehold.co/600x400/png",
    category: "Education",
    readTime: "6 min read",
  },
  {
    id: 2,
    slug: "cooking-with-hot-sauce",
    title: "Cooking with Hot Sauce: Beyond the Dash",
    excerpt: "Discover innovative ways to incorporate hot sauce into your everyday cooking.",
    date: "February 15, 2025",
    author: "Chef Pepper",
    authorImageUrl: "https://placehold.co/100x100/png",
    imageUrl: "https://placehold.co/600x400/png",
    category: "Recipes",
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "growing-your-own-hot-peppers",
    title: "Growing Your Own Hot Peppers: A Beginner's Guide",
    excerpt: "Start your hot sauce journey from the source by growing your own peppers at home.",
    date: "February 5, 2025",
    author: "Garden Guru",
    authorImageUrl: "https://placehold.co/100x100/png",
    imageUrl: "https://placehold.co/600x400/png",
    category: "Gardening",
    readTime: "10 min read",
  },
];

// Featured post is the most recent one
const featuredPost = blogPosts[0];

export default function BlogPage() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h1 className={`${title({ color: "yellow" })} text-4xl md:text-5xl lg:text-6xl mb-4`}>Hot Sauce Blog</h1>
        <p className="text-xl text-default-500 max-w-2xl mx-auto">
          Latest news, recipes, and hot sauce reviews from the spicy world
        </p>
      </div>

      {/* Search and category filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border border-default-300 dark:border-default-700 rounded-lg bg-default-50 dark:bg-default-900"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-default-400"
          >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-center sm:justify-end">
          {["All", "Recipes", "Reviews", "Education", "Gardening"].map((category) => (
            <button
              key={category}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                category === "All"
                  ? "bg-primary text-white"
                  : "bg-default-100 dark:bg-default-800 hover:bg-primary/10 dark:hover:bg-primary-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured post */}
      <div className="mb-12 lg:mb-16">
        <div className="relative rounded-xl overflow-hidden group">
          <Link href={`/blog/${featuredPost.slug}`} className="block aspect-[16/9] md:aspect-[21/9]">
            <img 
              src={featuredPost.imageUrl} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
          </Link>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-medium">
                {featuredPost.category}
              </span>
              <span className="text-sm opacity-90">{featuredPost.readTime}</span>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
            </Link>
            
            <p className="text-base sm:text-lg opacity-90 mb-4 max-w-3xl">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center">
              <img 
                src={featuredPost.authorImageUrl} 
                alt={featuredPost.author}
                className="w-8 h-8 rounded-full mr-3 border border-white/30"
              />
              <div>
                <p className="font-medium text-sm">{featuredPost.author}</p>
                <p className="text-xs opacity-80">{featuredPost.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid of posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.slice(1).map((post) => (
          <div key={post.id} className="flex flex-col rounded-xl overflow-hidden border border-default-200 dark:border-default-800 hover:shadow-lg transition-all duration-300 h-full bg-white dark:bg-default-900">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-default-500">{post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-default-600 dark:text-default-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center mt-auto pt-4 border-t border-default-200 dark:border-default-800">
                <img 
                  src={post.authorImageUrl} 
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-sm">{post.author}</p>
                  <p className="text-xs text-default-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter signup */}
      <div className="mt-16 lg:mt-24 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-default-800 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
          <div className="md:max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to our Hot Takes</h3>
            <p className="text-default-600 dark:text-default-400">
              Get the latest hot sauce reviews, recipes, and news delivered straight to your inbox.
            </p>
          </div>
          
          <div className="flex-grow max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-default-300 dark:border-default-700 bg-white dark:bg-default-900"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-default-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
