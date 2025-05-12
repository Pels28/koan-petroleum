"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Divider, Chip } from "@heroui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AutoScroll from "embla-carousel-auto-scroll";
import { GoogleReview, ReviewCard, StarIcon } from "./GoogleReviews";
import { ReviewCardSkeleton } from "./ReviewSkeleton";
export { StarIcon } from "./GoogleReviews";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

// import "./EmblaCarousel/embla.css";

const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        playOnInit: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{
    message: string;
    details?: string;
  } | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.details || errorData.error);
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError({
          message: "Failed to load reviews",
          details: err instanceof Error ? err.message : "Unknown error",
        });
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchReviews, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const calculateAverageRating = () => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  };

  const averageRating = calculateAverageRating();
  const totalReviews = reviews.length;



  if (error)
    return (
      <div className="p-4 bg-red-50 rounded-lg font-montserrat">
        <h3 className="text-red-600 font-medium">Something Went Wrong!</h3>
        {error.details && <p className="text-sm text-red-500 mt-1">{error.details}</p>}
      <p className="text-sm mt-2">
        Please ensure the Google Places API is properly configured.
      </p>
      </div>
    );

  return (
    <div className="mb-5">
      <div className="mx-auto px-0 w-full">
        <Chip className="mx-16 mb-6">
          <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 font-montserrat">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span className="text-sm sm:text-base">Client Reviews</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>

        {/* Removed container class */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6" // Added max-width container for heading only
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-1 text-center">
            What Our <span className="text-primary">Customer</span> Say
          </h2>
          <Divider className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>
        {loading && <ReviewCardSkeleton />}
        {error && (
          <div className="p-4 bg-red-50 rounded-lg font-montserrat">
            <h3 className="text-red-600 font-medium">Something Went Wrong!</h3>
          </div>
        )}

        {!error && !loading && (
          <>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center font-montserrat mb-6">
              <div className="flex items-center justify-between gap-4 font-montserrat">
                <div className="flex items-center gap-2">
                  <span className="ml-2 text-2xl font-semibold">
                    {averageRating.toFixed(1)}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        filled={i < Math.round(averageRating)}
                      />
                    ))}
                  </div>

                  {/* <a
                  href={`https://search.google.com/local/writereview?placeid=${process.env.GOOGLE_PLACE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                > */}
                  <span>{totalReviews.toLocaleString()} review(s) on</span>
                  {/* <FcGoogle className="h-8 w-8" /> */}

                  <Image
                    className="ml-[-12px] pl-0"
                    src="/images/google-logo.png"
                    width={120}
                    height={50}
                    alt="google-logo"
                  />
                </div>
                <div>
                  <Link
                    href={`https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      radius="md"
                      color="primary"
                      variant="solid"
                      endContent={<FcGoogle className="w-5 h-5" />}
                    >
                      Review us on Google
                    </Button>
                  </Link>
                </div>

                {/* </a> */}
              </div>
            </div>
            <div className="relative overflow-hidden w-full mb-2">
              <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container flex">
                  {reviews.length === 0 && (
                    <p className="text-2xl text-black">
                      No reviews available yet
                    </p>
                  )}
                  {reviews.map((review) => (
                    <div
                      key={review.author_name}
                      className="embla__slide flex-[0_0_100vw] min-w-0 pl-0" // Changed to 100vw and removed padding
                    >
                      {/* Added horizontal padding */}
                      <ReviewCard key={review.time} review={review} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
              >
                <FiChevronRight size={24} />
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-0 mb-4 space-x-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === selectedIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        {/* Full-width Carousel */}

        <style jsx global>{`
          .embla__slide {
            position: relative;
            min-width: 100vw;
            padding-left: 0;
          }
          .embla__container {
            display: flex;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: transparent;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
