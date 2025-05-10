"use client";

import { Input as NextInput } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

interface InputProps {
  label: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  isRequired?: boolean;
  type: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
  labelPlacement: "inside" | "outside" | "outside-left";
  className?: string;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  startContent?: ReactNode;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  error?: string;
}

const Input = ({
  label,
  placeholder,
  className,
  description,
  isRequired,
  type = "text",
  labelPlacement = "outside",
  size,
  radius,
  fullWidth,
  value,
  onChange,
  startContent,
  name,
  onBlur,
  onFocus,
  error,
}: InputProps) => {
  return (
    <NextInput
      name={name}
      classNames={{ inputWrapper: clsx( "border-2 border-gray font-montserrat", {"border-red": Boolean(error)}, ) }}
      className={className}
      label={label}
      placeholder={placeholder}
      description={description}
      isRequired={isRequired}
      type={type}
      labelPlacement={labelPlacement}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      startContent={startContent}
      onFocus={(e) => {
        if (onFocus) {
          onFocus(e);
        }
      }}
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e);
        }
      }}
      errorMessage={error}
      isInvalid={Boolean(error)}
    />
  );
};

export default Input;
