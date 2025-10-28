import type { Metadata } from "next";
import { StructuredData, generateLocalBusinessSchema, generatePlaceSchema, CLINIC_DATA } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us | Now Medical Clinic Calgary | Open 7 Days",
  description: "Contact Now Medical Clinic Calgary. Find our location, hours, phone numbers, and directions. Walk-ins welcome. Open 7 days until 11 PM.",
  keywords: ["contact now medical clinic", "calgary clinic location", "walk-in clinic hours", "clinic phone number", "medical clinic directions"],
  alternates: {
    canonical: "https://nowmedical.ca/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Contact Now Medical Clinic Calgary. Walk-ins welcome 7 days a week until 11 PM. Find our location, hours, and directions."
  });
  
  const placeSchema = generatePlaceSchema(CLINIC_DATA);

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={placeSchema} />
      {children}
    </>
  );
}

