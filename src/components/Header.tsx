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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-3xl font-bold text-foreground">
          CAMINO
        </h1>
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-2">
            <Medal className="h-5 w-5 text-accent" />
            <span className="font-semibold text-base text-foreground">{title}</span>
          </div>
          <div className="w-36">
            <Progress value={progressPercentage} className="h-2" />
            <span className="text-sm text-muted-foreground">{points} / {totalPoints} Puntos</span>
          </div>
        </div>
      </div>
    </header>
  );
}
