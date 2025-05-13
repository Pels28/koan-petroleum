// app/api/reviews/route.ts
import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.GOOGLE_API_KEY || !process.env.GOOGLE_PLACE_ID) {
    return NextResponse.json(
      { error: "API configuration missing" },
      { status: 500 }
    );
  }

  const client = new Client({});

  try {
    const response = await client.placeDetails({
      params: {
        place_id: process.env.GOOGLE_PLACE_ID,
        key: process.env.GOOGLE_API_KEY,
        fields: ["reviews"],
      },
      timeout: 3000, // 1 second timeout
    });

    if (response.data.status !== "OK") {
      throw new Error(response.data.error_message || "Failed to fetch reviews");
    }

    return NextResponse.json(response.data.result?.reviews || []);
  } catch (error: unknown) {
    const errorMessage = "Failed to fetch reviews";
    let errorDetails = "Unknown error";
    
    if (error instanceof Error) {
      errorDetails = error.message;
      // If you need to access response data from the Google API error
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const apiError = error as { response?: { data?: { error_message?: string } } };
        errorDetails = apiError.response?.data?.error_message || error.message;
      }
    }

    console.error("Google Places API error:", errorDetails);
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails
      },
      { status: 500 }
    );
  }
}