"use client";
import {
  Card as NextCard,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@heroui/react";
import { ReactNode } from "react";

interface CardProps {
  cardHeader?: ReactNode;
  cardBody?: ReactNode;
  cardFooter?: ReactNode;
  cardClassName?: string;
  cardHeaderClassName?: string;
  cardBodyClassName?: string;
  cardFooterClassName?: string;
  shadow?: "sm" | "md" | "lg";
  isHoverable?: boolean;
  isPressible?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
}

export default function Card({
  cardHeader,
  cardBody,
  cardFooter,
  cardClassName,
  cardBodyClassName,
  cardFooterClassName,
  cardHeaderClassName,
  shadow,
  isHoverable,
  isPressible,
  disableAnimation,
  disableRipple,
}: CardProps) {
  return (
    <NextCard
      shadow={shadow}
      isHoverable={isHoverable}
      isPressable={isPressible}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      className={cardClassName}
    >
      <CardHeader className={cardHeaderClassName}>{cardHeader}</CardHeader>
      <Divider/>
      <CardBody className={cardBodyClassName}>{cardBody}</CardBody>
      <CardFooter className={cardFooterClassName}>{cardFooter}</CardFooter>
    </NextCard>
  );
}
