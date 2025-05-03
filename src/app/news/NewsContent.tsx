"use client";
import { motion } from "framer-motion";
import { Divider, Image } from "@heroui/react";
import Chip from "@/components/Chip";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import Subscribe from "../Subscribe";
import Button from "@/components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import GalleryCarousel from "./GalleryCarouser";

const NewsContent = () => {
  const featuredNews = [
    {
      id: 1,
      title: "KOAN Petroleum Expands to Northern Region with 5 New Stations",
      excerpt:
        "KOAN announces major expansion plan to bring premium fuel services to Northern Ghana.",
      date: "May 15, 2023",
      category: "Company News",
      image: "/images/koan-oil.jpg",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "KOAN Wins 2023 Energy Excellence Award for Sustainability",
      excerpt:
        "Recognized for innovative environmental initiatives in petroleum distribution.",
      date: "March 28, 2023",
      category: "Awards",
      image: "/images/koan-station.jpg",
      readTime: "4 min read",
    },
  ];

  const recentNews = [
    {
      id: 3,
      title:
        "KOAN Partners with Local Communities for Tree Planting Initiative",
      excerpt:
        "10,000 trees planted in mining communities as part of environmental restoration program.",
      date: "April 5, 2023",
      category: "Sustainability",
      image: "/images/koan-sunny.jpg",
      readTime: "2 min read",
    },
    {
      id: 4,
      title: "New Mobile Payment System Launched Across All KOAN Stations",
      excerpt:
        "Customers can now pay for fuel and services using multiple digital payment options.",
      date: "February 18, 2023",
      category: "Innovation",
      image: "/images/koan-payment.jpg",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "KOAN Petroleum Reports Record Q1 2023 Performance",
      excerpt:
        "Company achieves 25% growth in fuel sales and expands market share.",
      date: "January 30, 2023",
      category: "Financial",
      image: "/images/koan-services.jpg",
      readTime: "5 min read",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Safety Workshop",
      date: "June 15, 2023",
      location: "Techiman",
      description:
        "Free workshop on fuel safety and environmental protection for local businesses.",
    },
    {
      id: 2,
      title: "Career Fair at KNUST",
      date: "July 8, 2023",
      location: "Kumasi",
      description:
        "Meet our team and explore career opportunities in the energy sector.",
    },
  ];

  return (
    <section className="font-montserrat">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] bg-newsOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center">
        <motion.div
          className="relative flex flex-col items-center justify-center z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-4">
            News & Media
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 w-7 mb-4 rounded-xl bg-white"
          />
          <p className="text-xl text-white max-w-2xl mx-auto">
            Stay updated with the latest from KOAN Petroleum
          </p>
       
        </motion.div>
      </div>

      {/* Featured News */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Chip>
            <div className="flex flex-row items-center gap-4">
              <span className="rounded-full bg-primary h-2 w-2"></span>
              <span>Featured Stories</span>
              <span className="rounded-full bg-primary h-2 w-2"></span>
            </div>
          </Chip>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold mt-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Latest <span className="text-primary">Updates</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full">
                <Image
                  isZoomed
                  radius="none"
                  src={news.image}
                  alt={news.title}
                  className="w-[100%]  h-96 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" /> {news.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> {news.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Button
                  color="primary"
                  variant="light"
                  size="lg"
                  radius="md"
                  className=""
                  endContent={<FaArrowRightLong />}
                >
                  Read Full Story
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      {/* Recent News Grid */}
      <div className="bg-primary-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-1 text-center">
              More <span className="text-primary">News</span>
            </h2>
            <Divider className="w-20 h-1 bg-primary mx-auto mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Image
                  isZoomed
                  src={news.image}
                  radius="none"
                  alt={news.title}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-primary font-medium">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FiClock className="mr-1" /> {news.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <Button
                      color="primary"
                      size="lg"
                      radius="md"
                      variant="light"
                      className=""
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              color="primary"
              size="lg"
              className="px-6 py-3"
              endContent={<IoNewspaper />}
            >
              View All News
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      {/* Events Section */}
      <div className="container bg-tertiary mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <Divider className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <FiCalendar className="mr-2 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FiMapPin className="mr-2 text-primary" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <Button
                size="lg"
                radius="md"
                variant="light"
                color="primary"
                className=""
              >
                Learn More & Register
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media Gallery Section */}

      <GalleryCarousel />

      {/* Press Releases Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-1 text-center">
            Press <span className="text-primary">Releases</span>
          </h2>
          <Divider className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="w-full px-auto">
          {[
            {
              id: 1,
              title: "KOAN Petroleum Announces New CEO Appointment",
              date: "April 10, 2023",
              summary:
                "KOAN Petroleum is pleased to announce the appointment of Mr. Kwame Osei as its new Chief Executive Officer, effective May 1, 2023.",
            },
            {
              id: 2,
              title:
                "KOAN Petroleum Partners with Government on Clean Energy Initiative",
              date: "March 22, 2023",
              summary:
                "In collaboration with the Ministry of Energy, KOAN launches a new program to promote cleaner fuel alternatives across Ghana.",
            },
            {
              id: 3,
              title: "KOAN Petroleum Reports Strong Financial Results for 2022",
              date: "February 15, 2023",
              summary:
                "The company announces record revenues and profits for the fiscal year 2022, with plans for further expansion in 2023.",
            },
          ].map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 py-6 px-10 last:border-0 hover:bg-primary-50 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">{release.title}</h3>
              <p className="text-gray-500 mb-3">{release.date}</p>
              <p className="text-gray-700 mb-4">{release.summary}</p>
              <Button
                color="primary"
                variant="light"
                size="lg"
                radius="md"
                className="text-primary"
              >
                Download Full Release
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-6">
          <Subscribe />
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
