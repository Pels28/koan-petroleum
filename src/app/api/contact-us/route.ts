import { NextResponse } from "next/server";
import fetch from "node-fetch";

const sleep = (): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

interface ReCaptchaResponse {
  success: boolean;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, message, number, captcha } = body;

    if (!username || !email || !message || !number || !captcha) {
      return NextResponse.json(
        { message: "Please provide the required fields " },
        { status: 422 }
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        method: "POST",
      }
    );

    const captchaValidation = (await response.json()) as ReCaptchaResponse;

    if (captchaValidation.success) {
      await sleep();
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "Invalid Captcha Code, Please verify again" },
      { status: 422 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 422 }
    );
  }
}