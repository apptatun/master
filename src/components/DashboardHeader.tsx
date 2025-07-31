
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { RotateCcw, Shield, BookOpen, Moon, Sun, HeartPulse } from 'lucide-react';
import { ResetProgressDialog } from './ResetProgressDialog';
import { useState } from 'react';
import { ResponseArmoryDialog } from './ResponseArmoryDialog';
import { BitacoraDialog } from './BitacoraDialog';
import type { FeedbackEntry, Mission } from '@/lib/types';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DashboardHeaderProps {
    onResetProgress: () => void;
    onSaveFeedback: (feedback: Omit<FeedbackEntry, 'id' | 'date'>) => void;
    feedbackHistory: FeedbackEntry[];
    missions: Mission[];
    onOpenRescueBox: () => void;
}

export function DashboardHeader({ 
    onResetProgress, 
    onSaveFeedback,
    feedbackHistory, 
    missions, 
    onOpenRescueBox
}: DashboardHeaderProps) {
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [isArmoryOpen, setIsArmoryOpen] = useState(false);
  const [isBitacoraOpen, setIsBitacoraOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <>
        <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/">
            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <h1 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                CAMINO
                </h1>
            </div>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2">
                <Button variant="ghost" size="icon" onClick={() => setIsBitacoraOpen(true)}>
                    <BookOpen className="h-6 w-6" />
                    <span className="sr-only">Mi Bitácora de Movidas</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsArmoryOpen(true)}>
                    <Shield className="h-6 w-6" />
                    <span className="sr-only">Armería de Respuestas</span>
                </Button>
                 <Button variant="ghost" size="icon" onClick={onOpenRescueBox}>
                    <HeartPulse className="h-6 w-6" />
                    <span className="sr-only">Caja de Rescate</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Claro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Oscuro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      Sistema
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="icon" onClick={() => setIsResetDialogOpen(true)}>
                    <RotateCcw className="h-6 w-6" />
                    <span className="sr-only">Reiniciar Progreso</span>
                </Button>
            </div>
        </div>
        </header>
        <ResetProgressDialog 
            isOpen={isResetDialogOpen}
            onClose={() => setIsResetDialogOpen(false)}
            onConfirm={onResetProgress}
        />
        <ResponseArmoryDialog
            isOpen={isArmoryOpen}
            onClose={() => setIsArmoryOpen(false)}
            onSaveFeedback={onSaveFeedback}
            feedbackHistory={feedbackHistory}
        />
        <BitacoraDialog
            isOpen={isBitacoraOpen}
            onClose={() => setIsBitacoraOpen(false)}
            feedbackHistory={feedbackHistory}
            missions={missions}
        />
    </>
  );
}
