"use client";

import { Input as NextInput } from "@heroui/react";
import { ReactNode } from "react";

interface InputProps {
  label: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  isRequired?: boolean;
  type: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
  labelPlacement: "inside" | "outside" | "outside-left";
  className?: string;
  size?: "sm" | "md" | "lg"
  radius?: "none" | "sm" | "md" | "lg" | "full"
  fullWidth?: boolean
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
  startContent?: ReactNode
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
  startContent
}: InputProps) => {
  return (
    <NextInput
      classNames={{ inputWrapper: ["border-gray", "border-2",] }}
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
    />
  );
};

export default Input;
