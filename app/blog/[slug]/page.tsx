import { title } from "@/components/primitives";
import Link from "next/link";

// In a real application, you would fetch this data based on the slug
const getBlogPost = (slug: string) => {
  // This is mock data - in a real app, you would fetch from an API or database
  const posts = {
    "ultimate-guide-to-hot-sauce-heat-levels": {
      title: "The Ultimate Guide to Hot Sauce Heat Levels",
      content: `
        <p>Hot sauce enthusiasts know that not all hot sauces are created equal when it comes to heat. The Scoville scale is the measurement of the pungency (spicy heat) of chili peppers and other spicy foods, as recorded in Scoville Heat Units (SHU).</p>
        
        <h2>Understanding the Scoville Scale</h2>
        <p>The Scoville scale is named after its creator, pharmacist Wilbur Scoville, who developed the method in 1912. Originally, the Scoville Organoleptic Test was a subjective measurement depending on the sensitivity of the tester. Today, high-performance liquid chromatography (HPLC) gives precise measurements of capsaicin concentration.</p>
        
        <h2>Common Hot Sauce Heat Levels</h2>
        <ul>
          <li><strong>Mild (500-5,000 SHU):</strong> Includes hot sauces made from poblano, ancho, and jalapeño peppers.</li>
          <li><strong>Medium (5,000-50,000 SHU):</strong> Includes cayenne, chipotle, and tabasco pepper sauces.</li>
          <li><strong>Hot (50,000-250,000 SHU):</strong> Includes habanero and scotch bonnet based sauces.</li>
          <li><strong>Very Hot (250,000-1,000,000 SHU):</strong> Ghost pepper (bhut jolokia) sauces fall in this range.</li>
          <li><strong>Extremely Hot (1,000,000+ SHU):</strong> Carolina Reaper and Trinidad Scorpion based sauces.</li>
        </ul>
        
        <p>When selecting a hot sauce, consider not just the heat level but also the flavor profile that complements your dishes. A good hot sauce should add both heat and enhance the overall taste experience.</p>
      `,
      date: "February 20, 2025",
      author: "Spicy Sean",
      imageUrl: "https://placehold.co/1200x600/png",
      authorImageUrl: "https://placehold.co/100x100/png",
    },
    "cooking-with-hot-sauce": {
      title: "Cooking with Hot Sauce: Beyond the Dash",
      content: `
        <p>Hot sauce is far more versatile than just a condiment to be dashed on after cooking. This fiery ingredient can transform everyday dishes when incorporated directly into your cooking process.</p>
        
        <h2>Marinades and Brines</h2>
        <p>Hot sauce makes an excellent addition to marinades for meat, poultry, and seafood. The acids in many hot sauces help tenderize proteins while adding depth of flavor and spice.</p>
        
        <h2>Soups and Stews</h2>
        <p>A few drops to a few tablespoons (depending on your heat preference) can elevate a simple soup or stew into something special. Add it early in the cooking process to allow the flavors to meld.</p>
        
        <h2>Baking with Heat</h2>
        <p>Believe it or not, hot sauce can be incorporated into certain baked goods like cornbread, savory muffins, or even chocolate desserts for a surprising kick that balances sweetness.</p>
        
        <h2>Cocktails</h2>
        <p>The Bloody Mary might be famous for its hot sauce component, but many other cocktails benefit from that spicy addition. Try a few drops in a margarita or even a spicy pineapple mojito.</p>
        
        <p>Remember that different hot sauces have different flavor profiles beyond just heat - fruity habanero sauces pair well with tropical ingredients, while smoky chipotle sauces complement hearty meats and beans.</p>
      `,
      date: "February 15, 2025",
      author: "Chef Pepper",
      imageUrl: "https://placehold.co/1200x600/png",
      authorImageUrl: "https://placehold.co/100x100/png",
    },
    "growing-your-own-hot-peppers": {
      title: "Growing Your Own Hot Peppers: A Beginner's Guide",
      content: `
        <p>There's something deeply satisfying about growing the peppers that will eventually become your own signature hot sauce. Whether you have a sprawling garden or just a few pots on a sunny balcony, growing hot peppers is a rewarding endeavor for any hot sauce enthusiast.</p>
        
        <h2>Choosing Your Peppers</h2>
        <p>For beginners, it's best to start with peppers that are easier to grow and have shorter growing seasons:</p>
        <ul>
          <li><strong>Jalapeño:</strong> A classic choice with moderate heat and a 70-80 day growing period.</li>
          <li><strong>Serrano:</strong> Similar to jalapeños but spicier, these peppers mature in about 75 days.</li>
          <li><strong>Cayenne:</strong> These long, thin peppers pack heat and are relatively easy to grow in 70-80 days.</li>
        </ul>
        
        <p>Once you gain experience, you can move to more challenging varieties like habaneros, ghost peppers, or Carolina Reapers, which have longer growing seasons (100+ days) and more specific requirements.</p>
        
        <h2>Starting from Seeds</h2>
        <p>Begin indoors 8-10 weeks before the last spring frost:</p>
        <ol>
          <li>Use seed-starting mix in small containers with drainage holes</li>
          <li>Plant seeds ¼ inch deep</li>
          <li>Keep soil consistently moist but not soggy</li>
          <li>Maintain temperature between 70-85°F for germination</li>
          <li>Once seedlings emerge, provide plenty of light (a sunny window or grow lights)</li>
        </ol>
        
        <h2>Transplanting Outdoors</h2>
        <p>After danger of frost has passed and soil temperatures reach at least 60°F:</p>
        <ul>
          <li>Harden off seedlings by gradually exposing them to outdoor conditions over 7-10 days</li>
          <li>Plant in well-draining soil with 18-24 inches between plants</li>
          <li>Choose a location with at least 6-8 hours of direct sunlight</li>
        </ul>
        
        <h2>Care and Maintenance</h2>
        <p>Hot peppers thrive with:</p>
        <ul>
          <li>Regular watering when the top inch of soil is dry (avoid overwatering)</li>
          <li>Light fertilization every 3-4 weeks with a balanced fertilizer</li>
          <li>Support for taller varieties using stakes or cages</li>
          <li>Mulch to retain moisture and suppress weeds</li>
        </ul>
        
        <p>From garden to hot sauce bottle, growing your own peppers connects you to the entire process of hot sauce creation. The resulting flavors are fresher and often more complex than anything you can achieve with store-bought peppers.</p>
      `,
      date: "February 5, 2025",
      author: "Garden Guru",
      imageUrl: "https://placehold.co/1200x600/png",
      authorImageUrl: "https://placehold.co/100x100/png",
    },
    // Add more blog posts as needed
  };
  
  return posts[slug as keyof typeof posts] || null;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return (
      <div className="text-center py-12 px-4">
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-auto text-default-400"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h1 className={`${title()} text-3xl md:text-4xl mb-4`}>Blog Post Not Found</h1>
        <p className="text-default-500 text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
        </p>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
        >
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
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="w-full max-w-4xl mx-auto">
      <div className="mb-8 md:mb-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-6 text-sm md:text-base transition-colors gap-1"
        >
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
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Blog
        </Link>
        
        <h1 className={`${title({ size: "lg" })} text-3xl md:text-4xl lg:text-5xl !leading-tight mb-4 md:mb-6`}>
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src={post.authorImageUrl} 
              alt={post.author} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div>
            <p className="font-semibold text-base md:text-lg">{post.author}</p>
            <p className="text-default-500 text-sm md:text-base">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden mb-8 md:mb-12 shadow-lg">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mx-auto px-0 md:px-4
          prose-headings:font-bold prose-headings:text-primary dark:prose-headings:text-primary-500
          prose-p:text-default-700 dark:prose-p:text-default-300 prose-p:leading-relaxed
          prose-a:text-primary hover:prose-a:text-primary-600 dark:prose-a:text-primary-400
          prose-strong:text-default-900 dark:prose-strong:text-default-100
          prose-li:marker:text-primary-500"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 md:mt-16 pt-6 border-t border-default-200 dark:border-default-800">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Share this article</h3>
        <div className="flex gap-3">
          {["facebook", "twitter", "linkedin", "email"].map((platform) => (
            <button 
              key={platform}
              className="p-2 md:p-3 bg-default-100 dark:bg-default-800 rounded-full hover:bg-primary/10 dark:hover:bg-primary-500/20 transition-colors"
              aria-label={`Share on ${platform}`}
            >
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
                className="text-default-700 dark:text-default-300"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-16 mb-8 flex flex-col md:flex-row md:justify-between gap-4">
        <Link 
          href="/blog" 
          className="px-6 py-3 border border-default-300 dark:border-default-700 rounded-lg hover:bg-default-100 dark:hover:bg-default-800 transition-colors text-center md:text-left"
        >
          More Articles
        </Link>
        <Link 
          href="#" 
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors text-center md:text-left"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </article>
  );
}