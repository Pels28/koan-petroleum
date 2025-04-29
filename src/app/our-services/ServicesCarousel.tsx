
"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  MdMiscellaneousServices,
  MdOutlineEmojiTransportation,
} from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import { GiMining } from "react-icons/gi";
import { useCallback } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import AutoScroll from "embla-carousel-auto-scroll";

const services = [
  {
    title: "KOAN Retail",
    description:
      "Our fuel stations in the Central, Ashanti, Bono-East and Western-North regions provide premium fuel and top-tier customer service. We continue to add more fuel stations to the existing ones in order to be present in all regions as well as making our stations easily accessible.",
    icon: <MdMiscellaneousServices size={40} className="text-primary" />,
  },
  {
    title: "KOAN Lubricants",
    description:
      "High quality lubricants, engine oils and coolants are available at all our retail outlets to keep your vehicle running efficiently.",
    icon: <RiOilLine size={40} className="text-primary" />,
  },
  {
    title: "KOAN Mining",
    description:
      "We supply quality petroleum products to mining companies, industry and institutions, ensuring seamless operations.",
    icon: <GiMining size={40} className="text-primary" />,
  },
  {
    title: "Transport & Logistics",
    description:
      "Reliable fuel distribution and logistics services designed to meet the needs of businesses nationwide.",
    icon: <MdOutlineEmojiTransportation size={40} className="text-primary" />,
  },
];



export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true,
      align: "start",
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 }
      }
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative p- bg-primary-50 mb-10">
      <div className="flex justify-end gap-4 mb-4">
        <button 
          onClick={scrollPrev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
        >
          <CiCircleChevLeft size={24} />
        </button>
        <button 
          onClick={scrollNext}
          className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
        >
          <CiCircleChevRight size={24} />
        </button>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {services.map((service, idx) => (
            <div key={idx} className="embla__slide">
              <div className="h-full w-full bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-5 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-center text-primary mb-4">
                  {service.title}
                </h4>
                <div className="flex-1 overflow-y-auto px-4">
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          gap: 1.5rem;
          padding: 0.5rem;
        }
        .embla__slide {
          flex: 0 0 85%;
          min-width: 0;
          height: 400px;
          padding: 0.5rem;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 calc(50% - 0.75rem);
          }
        }
      `}</style>
    </div>
  );
}
