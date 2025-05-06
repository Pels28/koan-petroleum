"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

import { FaCalendarAlt, FaGasPump, FaUsers } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import useCountUp from "@/hooks/useCountUp";
import Button from "@/components/Button";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import Subscribe from "../Subscribe";

const CareersContent = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsInView, setIsStatsInView] = useState(false);

  // Initialize counters with viewport detection
  const yearsCount = useCountUp(15, 2000, isStatsInView);
  const stationsCount = useCountUp(200, 2000, isStatsInView);
  const customersCount = useCountUp(1500, 2000, isStatsInView);

  useEffect(() => {
    const currentRef = statsRef.current; // Store ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="font-montserrat">
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-careersOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center">
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-2 sm:mb-3 md:mb-4">
            Careers
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px sm:w-[100px]" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 w-7 mb-3 sm:mb-4 rounded-xl bg-white"
          />
          <p className="text-base sm:text-lg md:text-xl text-white max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
            Join a dynamic team driving innovation in Ghana&apos;s energy sector
          </p>
        </motion.div>
      </div>

      {/* Why Work With Us */}

      <section className="py-20 px-4 bg-white max-md:py-16 max-sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-md:mb-12 max-sm:mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 max-md:text-3xl max-sm:text-2xl">
              Why Build Your Career at Koan Petroleum?
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-5 max-md:mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto max-md:text-lg max-sm:text-base max-sm:max-w-md">
              Join Ghana&apos;s premier energy company and be part of a team
              that values innovation, growth, and employee satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-md:gap-6 max-sm:gap-4">
            {[
              {
                icon: (
                  <svg
                    className="w-16 h-16 text-primary max-md:w-14 max-md:h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
                title: "Industry Leadership",
                desc: "Pioneering Ghana's energy sector since 2005",
                stat: "1M+",
                statLabel: "Customers served",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16 text-primary max-md:w-14 max-md:h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Employee Satisfaction",
                desc: "Consistently high employee retention",
                stat: "98%",
                statLabel: "Employee satisfaction rate",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16 text-primary max-md:w-14 max-md:h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Career Growth",
                desc: "Structured development programs",
                stat: "80%",
                statLabel: "Promotion rate internally",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16 text-primary max-md:w-14 max-md:h-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Inclusive Culture",
                desc: "Diverse workforce across 5 regions",
                stat: "45%",
                statLabel: "Female leadership",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-80 bg-tertiary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-primary/30 max-md:h-72"
              >
                {/* Static Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 max-md:p-6">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 max-md:text-xl">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Content - Slides in from right */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center bg-white transform translate-x-full group-hover:translate-x-0 transition-all duration-500 max-md:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 max-md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 max-md:text-sm">
                    {item.desc}
                  </p>
                  <div className="text-center border-t border-gray-200 pt-6">
                    <p className="text-3xl font-bold text-primary max-md:text-2xl">
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={statsRef}
            className="bg-primary rounded-2xl p-8 md:p-12 border border-primary/10 max-md:p-6"
          >
            <div className="mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center max-sm:gap-6">
                {[
                  {
                    number: `${yearsCount.toLocaleString()}+`,
                    label: "Years in operation",
                    icon: (
                      <FaCalendarAlt className="w-12 h-12 text-white mb-4 max-md:w-10 max-md:h-10" />
                    ),
                  },
                  {
                    number: `${stationsCount.toLocaleString()}+`,
                    label: "Fuel stations nationwide",
                    icon: (
                      <FaGasPump className="w-12 h-12 text-white mb-4 max-md:w-10 max-md:h-10" />
                    ),
                  },
                  {
                    number: `${customersCount.toLocaleString()}+`,
                    label: "Employees across Ghana",
                    icon: (
                      <FaUsers className="w-12 h-12 text-white mb-4 max-md:w-10 max-md:h-10" />
                    ),
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 flex flex-col items-center justify-center max-sm:p-3"
                  >
                    <div className="bg-white/20 p-4 rounded-full mb-4 max-md:p-3">
                      {stat.icon}
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2 max-md:text-3xl">
                      {stat.number}
                    </p>
                    <p className="text-white/90 max-md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 sm:mb-5 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-1 sm:mb-2">
              Current Job <span className="text-primary">Openings</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <Accordion
            variant="splitted"
            selectionMode="multiple"
            className="gap-3 sm:gap-4"
            itemClasses={{
              base: "py-0 w-full",
              title: "font-semibold text-base sm:text-lg",
              trigger:
                "px-4 sm:px-6 py-3 sm:py-4 hover:bg-primary/10 rounded-lg transition-colors",
              content: "px-4 sm:px-6 pb-4 sm:pb-6",
              subtitle: "text-xs sm:text-sm font-normal text-gray-500",
              indicator: "text-primary",
            }}
          >
            <AccordionItem
              key="engineering"
              aria-label="Engineering Roles"
              title={
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>Engineering & Operations</span>
                </div>
              }
              subtitle="Browse available positions"
              classNames={{
                title: "text-primary-dark",
                trigger: "",
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        Mechanical Engineer
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          Accra
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary-dark">
                          Full-time
                        </span>
                      </div>
                    </div>
                    <Button
                      endContent={<FaArrowRight className="text-primary" />}
                      className="w-full sm:w-auto"
                      radius="full"
                      color="primary"
                      variant="ghost"
                      size="md"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="p-3 sm:p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        Petroleum Technician
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          Kumasi
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary-dark">
                          Contract
                        </span>
                      </div>
                    </div>
                    <Button
                      endContent={<FaArrowRight className="text-primary" />}
                      className="w-full sm:w-auto"
                      radius="full"
                      color="primary"
                      variant="ghost"
                      size="md"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              key="retail"
              aria-label="Retail Roles"
              title={
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <span>Retail & Station Management</span>
                </div>
              }
              subtitle="Explore customer-facing roles"
              classNames={{
                title: "text-primary-dark",
                trigger: "",
              }}
            >
              <div className="p-3 sm:p-4 border border-primary/20 rounded-lg bg-primary/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">
                      Station Manager
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        Takoradi
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary-dark">
                        Full-time
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/30 text-primary-darker">
                        Leadership
                      </span>
                    </div>
                  </div>
                  <Button
                    endContent={<FaArrowRight className="text-primary" />}
                    className="w-full sm:w-auto"
                    radius="full"
                    color="primary"
                    variant="ghost"
                    size="md"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      {/* Testimonials */}

      <section className="py-20 px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-primary">Team</span> Testimonials
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from people building the future of energy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              quote:
                "Koan Petroleum gave me the training to grow from a station attendant to a regional manager. The support here is unmatched!",
              author: "Kwame A.",
              role: "Regional Operations Lead",
              years: "5 years at Koan",
              accent: "primary",
            },
            {
              quote:
                "What I love most is the company's commitment to safety and innovation. Every day brings new challenges and learning opportunities.",
              author: "Ama B.",
              role: "HSE Officer",
              years: "3 years at Koan",
              accent: "emerald",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                testimonial.accent === "primary" ? "bg-white" : "bg-gray-50"
              }`}
            >
              {/* Diagonal accent bar */}
              <div
                className={`absolute top-0 left-0 w-full h-2 ${
                  testimonial.accent === "primary"
                    ? "bg-primary"
                    : "bg-emerald-500"
                }`}
              ></div>

              {/* Card content */}
              <div className="p-8 relative">
                {/* Floating avatar */}
                <div
                  className={`absolute -top-6 right-6 w-16 h-16 rounded-full border-4 ${
                    testimonial.accent === "primary"
                      ? "border-primary"
                      : "border-emerald-500"
                  } bg-white shadow-md overflow-hidden`}
                >
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      testimonial.accent === "primary"
                        ? "bg-primary/10"
                        : "bg-emerald-100"
                    }`}
                  >
                    <span
                      className={`text-2xl font-bold ${
                        testimonial.accent === "primary"
                          ? "text-primary"
                          : "text-emerald-600"
                      }`}
                    >
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className={`w-8 h-8 mb-4 opacity-20 ${
                      testimonial.accent === "primary"
                        ? "text-primary"
                        : "text-emerald-500"
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Author info */}
                <div className="border-t pt-4">
                  <h3 className="font-bold text-xl">{testimonial.author}</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.years}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        testimonial.accent === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {testimonial.role.split(" ").pop()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 ${
                  testimonial.accent === "primary"
                    ? "bg-primary/5"
                    : "bg-emerald-50"
                } rounded-tl-full`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            radius="full"
            color="primary"
            variant="ghost"
            className=""
            endContent={<FaChevronRight />}
          >
            More Team Stories
          </Button>
        </div>
      </section>

      {/* Application Process */}

      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Join Our <span className="text-white">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience our seamless 4-step hiring journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
                title: "Search",
                desc: "Browse Open Position",
                accent: "from-cyan-400 to-blue-500",
                pattern:
                  "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "Apply",
                desc: "Submit your application",
                accent: "from-blue-500 to-purple-500",
                pattern:
                  "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
                title: "Interview",
                desc: "Let's get to know each other",
                accent: "from-purple-500 to-pink-500",
                pattern:
                  "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Onboarding",
                desc: "Welcome to Koan",
                accent: "from-pink-500 to-amber-500",
                pattern:
                  "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl group hover:shadow-xl transition-all duration-500 ${step.pattern} bg-gradient-to-br ${step.accent} bg-opacity-10 hover:bg-opacity-20`}
              >
                {/* Floating number */}
                <div className="absolute top-6 left-6 text-3xl font-bold text-white/20">
                  0{index + 1}
                </div>

                <div className="p-8 backdrop-blur-sm">
                  {/* Icon container */}
                  <div
                    className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white">{step.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-8">{step.desc}</p>

                  {/* Animated button */}
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      {/* FAQs */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-primary">
              Your Questions
              <span className="block text-gray-900 mt-1 md:mt-2">Answered</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Accordion - Complete Implementation */}
          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: "How long does the hiring process take?",
                answer: "Typically 2-4 weeks from application to offer.",
              },
              {
                question: "Does Koan Petroleum offer remote jobs?",
                answer:
                  "Most roles are on-site, but some corporate positions allow hybrid work.",
              },
              {
                question: "What benefits do you offer?",
                answer:
                  "We provide health insurance, performance bonuses, training programs, and retirement benefits.",
              },
              {
                question: "Do you offer internships or graduate programs?",
                answer:
                  "Yes, we have annual internship programs and occasionally run graduate trainee initiatives.",
              },
            ].map((faq, index) => (
              <Accordion
                key={index}
                variant="splitted"
                className="group"
                itemClasses={{
                  base: "border-none overflow-hidden",
                  trigger:
                    "px-4 md:px-6 py-3 md:py-4 bg-white hover:bg-gray-50",
                  title: "text-base md:text-lg font-medium flex items-center",
                  content: "px-4 md:px-6 pb-3 md:pb-4 text-gray-600",
                  indicator: "text-primary",
                }}
              >
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={
                    <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 rounded-full bg-gradient-to-b from-primary to-secondary flex items-center justify-center text-white text-xs md:text-sm font-bold">
                        {index + 1}
                      </div>
                      {faq.question}
                    </div>
                  }
                >
                  <div className="pl-9 md:pl-12">{faq.answer}</div>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute left-4 md:left-10 top-1/4 w-20 md:w-32 h-20 md:h-32 rounded-full bg-primary/10 blur-xl md:blur-3xl -z-10"></div>
          <div className="absolute right-4 md:right-10 bottom-1/4 w-24 md:w-40 h-24 md:h-40 rounded-full bg-secondary/10 blur-xl md:blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-12 px-4 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Equal Opportunity Employer
          </h3>
          <p className="text-lg">
            Koan Petroleum is committed to diversity and inclusion. We welcome
            applicants regardless of gender, ethnicity, religion, or disability.
          </p>
        </div>
      </section>

      {/* Newsletter */}

      <Subscribe />
    </section>
  );
};

export default CareersContent;
