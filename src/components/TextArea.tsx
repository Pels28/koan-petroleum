"use client";
import { Textarea as NextTextArea } from "@heroui/react";

interface ITextAreaProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: string) => void;
  onBlur?:
    | ((e: React.FocusEvent<HTMLInputElement, Element>) => void)
    | undefined;
  isRequired?: boolean;
  minRows?: number;
  maxRows?: number;
  error?: string;
  name?: string
}

export default function TextArea({
  value,
  onBlur,
  error,
  isRequired,
  maxRows,
  minRows,
  onChange,
  onValueChange,
  name
}: ITextAreaProps) {
  return (
    <NextTextArea
    name={name}
      isClearable
      size="lg"
      fullWidth
      label="Description"
      placeholder="Description"
      variant="bordered"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onValueChange={onValueChange}
      errorMessage={error}
      isInvalid={Boolean(error)}
      maxRows={maxRows}
      minRows={minRows}
      isRequired={isRequired}
    />
  );
}
