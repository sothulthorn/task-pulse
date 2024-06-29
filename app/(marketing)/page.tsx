import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { Medal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 rounded-full uppercase ">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Task Pulse helps team move
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-t primary-gradient text-white px-4 p-2 rounded-md pb-4">
          work forward.
        </div>
      </div>

      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        Collaborate, manage projects and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with Task Pulse
      </div>

      <Button className="primary-button mt-6" size="lg">
        <Link href="/sign-up">Get Task Pulse for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
