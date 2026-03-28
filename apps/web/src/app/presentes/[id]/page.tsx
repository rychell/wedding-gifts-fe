import { notFound } from "next/navigation";
import gifts from "../../../data/gifts.json";
import { GiftDetailClient } from "./gift-detail-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GiftDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const gift = gifts.find((g) => g.id === id);

  if (!gift) {
    notFound();
  }

  return <GiftDetailClient gift={gift} />;
}

export function generateStaticParams() {
  return gifts.map((gift) => ({
    id: gift.id,
  }));
}
