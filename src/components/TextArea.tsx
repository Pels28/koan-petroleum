"use client"
import {Textarea as NextTextArea} from "@heroui/react";

export default function TextArea() {
  return (
    <NextTextArea
      isClearable
      size="lg"
      fullWidth
      label="Description"
      placeholder="Description"
      variant="bordered"
 
    />
  );
}
