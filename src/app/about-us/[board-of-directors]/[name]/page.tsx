import { Metadata } from "next";
import MemberDetailContent from "./MemberDetailContent";
import { teamMembers } from "@/resources/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const member = teamMembers.find((m) => m.slug === name.toLowerCase());

  if (!member) {
    return {
      title: "Member Not Found",
      description: "The requested team member profile could not be found",
    };
  }

  const fullTitle = `${member.name} | ${member.position} | Your Company Name`;
  const description = `${member.name} is ${
    member.position
  } at Your Company Name. ${member.bio.substring(0, 160)}...`;
  // const pageUrl = `https://yourcompany.com/team/${member.slug}`;

  return {
    title: fullTitle,
    description: description,
    alternates: {
      // canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      // url: pageUrl,
      siteName: "Koan Petroleum",
      images: [
        {
          url: member.image, // Ensure this is an absolute URL
          width: 800,
          height: 600,
          alt: `Profile image of ${member.name}`,
        },
      ],
      locale: "en_US",
      type: "profile",
    },

    keywords: [
      member.name,
      member.position,
      "Koan Petroleum",
      "team profile",
      "company leadership",
    ],
  };
}

export default async function MemberDetails({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <MemberDetailContent nameOfMember={name} />;
}
