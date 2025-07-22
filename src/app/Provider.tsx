"use client";

import { HeroUIProvider } from "@heroui/react";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForceLightMode from "./ForceLightMode";

interface ProviderProps {
  children: ReactNode | ReactElement;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <HeroUIProvider>
      {children}

      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={5}
        position="top-right"
        closeButton={true}
        hideProgressBar={true}
        style={{ minWidth: 400 }}
        toastStyle={{ marginInlineEnd: 20 }} // Use toastStyle instead of bodyStyle
      />
      <ForceLightMode />
    </HeroUIProvider>
  );
};

export default Provider;
