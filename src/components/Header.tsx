import { Medal } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type HeaderProps = {
  title: string;
  points: number;
  totalPoints: number;
};

export function Header({ title, points, totalPoints }: HeaderProps) {
  const progressPercentage = totalPoints > 0 ? (points / totalPoints) * 100 : 0;

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
          CAMINO
        </h1>
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-2">
            <Medal className="h-6 w-6 text-accent" />
            <span className="font-semibold text-lg text-foreground">{title}</span>
          </div>
          <div className="w-40">
            <Progress value={progressPercentage} className="h-2.5" />
            <span className="text-base text-muted-foreground">{points} / {totalPoints} Puntos</span>
          </div>
        </div>
      </div>
    </header>
  );
}
