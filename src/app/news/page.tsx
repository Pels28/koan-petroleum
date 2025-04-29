import { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "Latest News & Updates | KOAN Petroleum",
  description:
    "Stay informed with the latest news, announcements, and updates from KOAN Petroleum. Discover industry trends, company milestones, and energy sector insights.",
  keywords: [
    "petroleum news",
    "energy updates",
    "KOAN announcements",
    "oil industry trends",
    "fuel market news",
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};

const NewsPage = () => {
  return <NewsContent />;
};

export default NewsPage;
