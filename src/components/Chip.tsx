"use client"

import {Chip as NextChip} from "@heroui/react";
import { ReactNode } from "react";

interface ChipProps {
    children: ReactNode
}

const Chip = ({children}: ChipProps) => {
    return <NextChip size="lg">{children}</NextChip>
}

export default Chip