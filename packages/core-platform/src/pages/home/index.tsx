import { PageConfig } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Platforms on Vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-48">
        <Image width={40} height={40} src="/logo.png" alt="Platforms on Vercel" />
      </div>
    </div>
  );
}

export const config: PageConfig = {};
