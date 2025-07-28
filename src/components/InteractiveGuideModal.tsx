
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import type { Mission } from '@/lib/types';

interface InteractiveGuideModalProps {
  mission: Mission;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function InteractiveGuideModal({
  mission,
  isOpen,
  onClose,
  onComplete,
}: InteractiveGuideModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = mission.steps || [];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
    setTimeout(() => setCurrentStep(0), 300); // Reset for next time
  };
  
  const handleClose = () => {
    onClose();
    setTimeout(() => setCurrentStep(0), 300); // Reset for next time
  }

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[525px] bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">{mission.title}</DialogTitle>
           <div className='pt-2'>
            <p className="text-muted-foreground text-base">
                Esto es una guía, no un examen. El objetivo es que te animes a explorar, con calma y a tu ritmo.
            </p>
          </div>
        </DialogHeader>
        <div className="my-4 flex-grow space-y-3 overflow-y-auto px-1">
          <p className="font-bold text-xl text-foreground">{steps[currentStep]?.title}</p>
          <p className="text-lg text-muted-foreground whitespace-pre-line">{steps[currentStep]?.description}</p>
        </div>
        <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 mt-auto">
            <div className="flex w-full justify-between items-center flex-wrap gap-2">
                 <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0} className="text-base">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                </Button>
                <Button onClick={handleNext} className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-6 py-6">
                    {isLastStep ? 'Listo, ¡Un paso más!' : 'Listo, ¿qué sigue?'}
                    {isLastStep && <Check className="ml-2 h-5 w-5" />}
                </Button>
            </div>
            <Button variant="outline" onClick={handleComplete} className="w-full text-base">
                Ya sé cómo seguir (Saltar y conquistar)
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
