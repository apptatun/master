import Link from 'next/link';
import { Medal, ShieldCheck } from 'lucide-react';

type HeaderProps = {
  completedCount: number;
};

export function Header({ completedCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl cursor-pointer hover:opacity-80 transition-opacity">
            CAMINO
          </h1>
        </Link>
        <div className="flex items-center space-x-3">
          <ShieldCheck className="h-8 w-8 text-accent" />
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl text-foreground">
              {completedCount}
            </span>
            <span className="text-base text-muted-foreground -mt-1">
              Desafíos Superados
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
