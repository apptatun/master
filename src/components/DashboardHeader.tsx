
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { RotateCcw, Shield } from 'lucide-react';
import { ResetProgressDialog } from './ResetProgressDialog';
import { useState } from 'react';
import { ResponseArmoryDialog } from './ResponseArmoryDialog';


interface DashboardHeaderProps {
    onResetProgress: () => void;
}

export function DashboardHeader({ onResetProgress }: DashboardHeaderProps) {
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [isArmoryOpen, setIsArmoryOpen] = useState(false);

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
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => setIsArmoryOpen(true)}>
                    <Shield className="h-6 w-6" />
                    <span className="sr-only">Armería de Respuestas</span>
                </Button>
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
        />
    </>
  );
}
