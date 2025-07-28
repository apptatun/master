
import Link from 'next/link';
import { Button } from './ui/button';
import type { Path } from '@/lib/types';
import { Compass, Settings } from 'lucide-react';

interface DashboardHeaderProps {
    path: Path | null; // Path is kept for potential future use
}

export function DashboardHeader({ path }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
              CAMINO
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}
