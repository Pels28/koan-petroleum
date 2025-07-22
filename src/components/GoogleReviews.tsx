"use client";
import { Image } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export type GoogleReview = {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  review_id: string;
};

export function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-center font-montserrat">
      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-lg italic mb-6">
        &quot;{review.text}&quot;
      </p>

      {/* Author Info */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
          // onError={(e) => {
          //   (e.target as HTMLImageElement).style.display = 'none';
          // }}
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">
            <Link
              href={review.author_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {review.author_name}
            </Link>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {review.relative_time_description}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(review.time * 1000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Google Logo */}
      <div className="mt-6 flex justify-center">
        <Link
          href={`https://www.google.com/maps/place/?q=place_id:${process.env.NEXT_PUBLIC_GOOGLE_PLACES_ID}&authuser=0#lrd=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_ID},1,,,`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FcGoogle className="h-11 w-12" />
        </Link>
      </div>
    </div>
  );
}

export function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
