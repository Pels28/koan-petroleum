'use client';
import { Skeleton } from '@heroui/react';
import { FcGoogle } from "react-icons/fc";

export function ReviewCardSkeleton() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center animate-pulse">
      {/* Star Rating Skeleton */}
      <div className="flex justify-center mb-4 gap-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-7 h-7 rounded-full bg-gray-200" />
        ))}
      </div>

      {/* Review Text Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-6 w-3/4 mx-auto rounded bg-gray-200" />
      </div>

      {/* Author Info Skeleton */}
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32 mx-auto rounded bg-gray-200" />
          <Skeleton className="h-4 w-24 mx-auto rounded bg-gray-200" />
        </div>
      </div>

      {/* Google Logo Placeholder */}
      <div className="mt-6 flex justify-center opacity-30">
        <FcGoogle className="h-11 w-12" />
      </div>
    </div>
  );
}
