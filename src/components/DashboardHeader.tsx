
import Link from 'next/link';
import { Button } from './ui/button';
import type { Path } from '@/lib/types';
import { Compass, Trophy } from 'lucide-react';

interface DashboardHeaderProps {
    path: Path | null;
}

export function DashboardHeader({ path }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/setup">
          <div className="cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
              CAMINO
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-4">
            <Button variant="ghost">
                <Trophy className="mr-2 h-4 w-4" />
                Mis Logros
            </Button>
            {path && (
                <Link href={`/path?mode=${path}`}>
                    <Button variant="outline">
                        <Compass className="mr-2 h-4 w-4" />
                        Explorar otros caminos
                    </Button>
                </Link>
            )}
        </div>
      </div>
    </header>
  );
}
