"use client";
import { Skeleton } from "@heroui/react";

function Loading() {
  return (
    <div className="w-full">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-screen min-h-[520px]">
        <Skeleton className="absolute inset-0 w-full h-full" />
      </div>

      {/* Content Area Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="w-3/4 h-8 rounded" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-5/6 h-4 rounded" />
            <Skeleton className="w-2/3 h-4 rounded" />
            <Skeleton className="w-32 h-10 rounded mt-4" />
          </div>
          <Skeleton className="w-full h-64 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
