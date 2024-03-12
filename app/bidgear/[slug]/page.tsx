'use client';
import Link from 'next/link';
import BidgearAds from '../../components/BidgearAds';
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Bidgear Code 2 {params.slug}</h1>
      <Link href={'/about'}>Go to new page</Link>
      <BidgearAds />
    </div>
  );
}
