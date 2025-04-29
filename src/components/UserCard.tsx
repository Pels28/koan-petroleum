"use client"

import {Card, CardFooter, CardBody, Image} from "@heroui/react";

interface UserCardProps {
    imgSrc: string
    name: string
    position: string
}

const UserCard = ({ imgSrc, name, position}: UserCardProps) => {
    return      <Card isHoverable isPressable className="py-4">
     
    <CardBody  className="overflow-visible py-2">
      <Image
      isZoomed
        alt="Card background"
        className="object-cover rounded-xl"
        src={imgSrc}
        width={500}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{name}</p>
  
      <h4 className="font-bold text-large">{position}</h4>
    </CardFooter>
  </Card>
}

export default UserCard