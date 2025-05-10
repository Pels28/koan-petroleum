"use client";
import Chip from "@/components/Chip";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhonePause } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { GrTask } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { GiTrophy } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import useCountUp from "@/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

const HomeContact = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsInView, setIsStatsInView] = useState(false);
  const [catptchaValue, setCaptchaValue] = useState<string | null>(null);
  const recpatchaRef = useRef(null);

  // Initialize counters with viewport detection
  const projectsCount = useCountUp(3, 2000, isStatsInView);
  const customersCount = useCountUp(20, 2000, isStatsInView);
  const awardsCount = useCountUp(13, 2000, isStatsInView);
  const satisfactionRate = useCountUp(99, 2000, isStatsInView);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // Set up Intersection Observer
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
  }, []); // Empty dependency array is safe now
  return (
    <div className="w-full space-y-6 sm:space-y-8 p-4 sm:p-6 md:p-8 lg:p-10">
      <Chip>
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
          <span className="rounded-full bg-primary h-2 w-2"></span>
          <span className="text-sm sm:text-base">Contact Us</span>
          <span className="rounded-full bg-primary h-2 w-2"></span>
        </div>
      </Chip>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-5">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat">
            <span className="text-primary">Contact</span> and Join Together
          </p>

          <p className="font-montserrat text-sm sm:text-base md:text-lg">
            We welcome and encourage enquiries regarding our products and
            services, as well as feedback about our operations and potential
            opportunities
          </p>

          <div className="flex flex-row items-start justify-start gap-2 sm:gap-3 md:gap-4 font-montserrat">
            <div className="h-10 sm:h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </Button>
            </div>
            <div className="h-10 sm:h-12">
              <div className="text-sm sm:text-base">Office Address</div>
              <div className="font-light text-xs sm:text-sm md:text-base">
                Accra
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 sm:gap-3 md:gap-4 font-montserrat">
            <div className="h-10 sm:h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <PiPhonePause className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </Button>
            </div>
            <div className="h-10 sm:h-12">
              <div className="text-sm sm:text-base">Phone Number:</div>
              <div className="font-light text-xs sm:text-sm md:text-base">
                0308235277
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 sm:gap-3 md:gap-4 font-montserrat">
            <div className="h-10 sm:h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <MdMarkEmailRead className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </Button>
            </div>
            <div className="h-10 sm:h-12">
              <div className="text-sm sm:text-base">Email Address:</div>
              <address className="font-light text-xs sm:text-sm md:text-base">
                info@koanpetroleum.com
              </address>
            </div>
          </div>
        </div>

        <div>
          <Formik
            initialValues={{
              username: "",
              email: "",
              message: "",
              number: "",
            }}
            validateOnBlur
            validateOnChange={false}
            validationSchema={Yup.object({
              username: Yup.string().trim().required("Username is required"),
              email: Yup.string()
                .trim()
                .email("Invalid Email")
                .required("Email is required"),
              message: Yup.string().required("Message should not be empty"),
              number: Yup.number().required("Number is required"),
            })}
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setStatus }
            ) => {
              console.log(values);
              if (!catptchaValue) {
                // alert("Please verify you are not robot");
                toast.warning(
                  // <ToastContent
                  //   title="Please verify you are not a robot"
                  //   status="success"
                  // />
                  <div>Please verify you are not a robot</div>
                );
                setSubmitting(false);
                return;
              }

              try {
                const response = await fetch("/api/contact-us", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username: values.username,
                    email: values.email,
                    message: values.message,
                    number: values.number,
                    captcha: catptchaValue,
                  }),
                });

                if (response.ok) {
                  toast.success(<div>Message Sent Succesfully</div>);
                  setStatus({
                    success: true,
                    message: "Message sent successfully!",
                  });
                  resetForm();

                  // setCaptchaValue(null); // If you're using state for reCAPTCHA
                  // If using react-google-recaptcha: recaptchaRef.current.reset();
                } else {
                  const data = await response.json();
                  toast.error(<div>{data.message}</div>);
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
              } catch (error) {
                console.error("Something went wrong");
                toast.error(<div>Something went wrong</div>);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mt-4 sm:mt-0">
                  <div className="bg-tertiary w-full rounded-lg drop-shadow-xl p-3 sm:p-4 md:p-5 gap-3 sm:gap-4 md:gap-5 flex flex-col items-center justify-center">
                    <p className="text-lg sm:text-xl md:text-2xl">
                      Get in Touch
                    </p>
                    <Input
                      size="lg"
                      label="Your Name"
                      type="text"
                      name="username"
                      labelPlacement="outside"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      error={touched.username ? errors.username : undefined}
                      isRequired
                    />
                    <Input
                      size="lg"
                      label="Your Email"
                      type="email"
                      name="email"
                      labelPlacement="outside"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email ? errors.email : undefined}
                      isRequired
                    />
                    <Input
                      size="lg"
                      label="Your Number"
                      type="tel"
                      name="number"
                      labelPlacement="outside"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.number ? errors.number : undefined}
                      isRequired
                    />
                    <div className="w-full">
                      <TextArea
                        name="message"
                        isRequired
                        value={values.message}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.message ? errors.message : undefined}
                      />
                    </div>
                    <div className="flex w-full items-start justify-start">
                      <Button
                        color="primary"
                        size="lg"
                        radius="md"
                        type="submit"
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Message"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>

          {/* reCAPTCHA positioned outside the form but aligned with form content */}
          <div className="mt-4 w-full flex justify-start">
            <div className="bg-tertiary w-full rounded-lg drop-shadow-xl p-3 sm:p-4 md:p-5">
              <ReCAPTCHA
                ref={recpatchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleCaptchaChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="h-auto sm:h-[200px] md:h-[250px] w-full bg-secondary rounded-xl sm:rounded-2xl place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6"
      >
        <div className="space-y-1 sm:space-y-2 flex flex-col items-center justify-center p-2 sm:p-3">
          <GrTask className="text-white h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20" />
          <div className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {projectsCount.toLocaleString()}k+
          </div>
          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-white text-center">
            Completed Projects
          </p>
        </div>

        <div className="space-y-1 sm:space-y-2 flex flex-col items-center justify-center p-2 sm:p-3">
          <ImUsers className="text-white h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20" />
          <div className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {customersCount.toLocaleString()}k+
          </div>
          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-white text-center">
            Happy Customers
          </p>
        </div>

        <div className="space-y-1 sm:space-y-2 flex flex-col items-center justify-center p-2 sm:p-3">
          <GiTrophy className="text-white h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20" />
          <div className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {awardsCount.toLocaleString()}k+
          </div>
          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-white text-center">
            Award Winning
          </p>
        </div>

        <div className="space-y-1 sm:space-y-2 flex flex-col items-center justify-center p-2 sm:p-3">
          <RiUserStarFill className="text-white h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20" />
          <div className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {satisfactionRate.toLocaleString()}%
          </div>
          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-white text-center">
            Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
