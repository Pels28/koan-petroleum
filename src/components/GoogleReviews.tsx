'use client';
import { useEffect, useState } from 'react';

type GoogleReview = {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{message: string; details?: string} | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.details || errorData.error);
        }

        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError({
          message: 'Failed to load reviews',
          details: err instanceof Error ? err.message : 'Unknown error'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading reviews...</div>;
  
  if (error) return (
    <div className="p-4 bg-red-50 rounded-lg">
      <h3 className="text-red-600 font-medium">{error.message}</h3>
      {error.details && <p className="text-sm text-red-500 mt-1">{error.details}</p>}
      <p className="text-sm mt-2">
        Please ensure the Google Places API is properly configured.
      </p>
    </div>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available yet</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.time} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{review.author_name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < review.rating} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{review.text}</p>
      <p className="text-sm text-gray-400 mt-2">
        {review.relative_time_description}
      </p>
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// export type GoogleReview = {
//   author_name: string;
//   author_url: string;
//   language: string;
//   profile_photo_url: string;
//   rating: number;
//   relative_time_description: string;
//   text: string;
//   time: number;
// };