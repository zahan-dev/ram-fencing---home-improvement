import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'RAM Fencing & Home Improvement | Remodeling & Construction in Plainfield, NJ',
  description:
    'Premier Remodeling, Construction, Fencing, Deck, and Home Improvement Services in Plainfield, New Jersey and surrounding areas. Licensed & insured.',
  openGraph: {
    title: 'RAM Fencing & Home Improvement | Remodeling & Construction in Plainfield, NJ',
    description:
      'Premier Remodeling, Construction, Fencing, Deck, and Home Improvement Services in Plainfield, New Jersey. 5-Star rated craftsmanship.',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/xntykrc8/image/upload/v1793294360/Weathered_Gold_Ram_Village_Crest.png',
        width: 1200,
        height: 630,
        alt: 'RAM Fencing & Home Improvement Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAM Fencing & Home Improvement | Plainfield, NJ',
    description:
      'Premier Remodeling, Construction, Fencing, Deck, and Home Improvement Services in Plainfield, New Jersey.',
    images: ['https://res.cloudinary.com/xntykrc8/image/upload/v1793294360/Weathered_Gold_Ram_Village_Crest.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F2F1EF] text-black antialiased selection:bg-[#EABC48] selection:text-black min-h-screen flex flex-col justify-between" suppressHydrationWarning>
        <CustomCursor />
        <Header />
        <main className="flex-1 w-full relative z-10 bg-[#F2F1EF]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
