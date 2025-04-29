"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Divider, Image } from "@heroui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AutoScroll from "embla-carousel-auto-scroll";
import Button from "@/components/Button";
import { GrGallery } from "react-icons/gr";

const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
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

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      alt: "KOAN Petroleum station",
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      alt: "Fuel pumps",
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Customer service",
    },
    {
      id: 4,
      src: "/images/gallery-4.jpg",
      alt: "Lubricants display",
    },
    {
      id: 5,
      src: "/images/gallery-5.jpg",
      alt: "Transport fleet",
    },
    {
      id: 6,
      src: "/images/gallery-6.jpg",
      alt: "Team photo",
    },
  ];

  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-1 text-center">
            Media <span className="text-primary">Gallery</span>
          </h2>
          <Divider className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        {/* Full-width Carousel */}
        <div className="relative overflow-hidden w-full mb-8">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container flex">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="embla__slide flex-[0_0_100%] px-2"
                >
                  <div className="relative w-full h-[70vh] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
          <div className="flex justify-center mt-6 space-x-2">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button color="primary" size="lg" radius="md" className="px-6 py-3" endContent={<GrGallery />}>
            View Full Gallery
          </Button>
        </motion.div>

        <style jsx>{`
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

export default GalleryCarousel;
