import BlogHero from '../components/sections/BlogHero';
import BlogTopics from '../components/sections/BlogTopics';
import FeaturedArticles from '../components/sections/FeaturedArticles';
import FreeResources from '../components/sections/FreeResources';
import BlogNewsletter from '../components/sections/BlogNewsletter';
import FinalCTA from '../components/sections/FinalCTA';

export default function Blog() {
  return (
    <div className="pt-20">
      <BlogHero />
      <BlogTopics />
      <FeaturedArticles />
      <FreeResources />
      <BlogNewsletter />
    </div>
  );
}
