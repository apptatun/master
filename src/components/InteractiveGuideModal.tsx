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
import { ArrowLeft, ArrowRight, Check, Forward } from 'lucide-react';
import type { Mission } from '@/lib/types';

interface InteractiveGuideModalProps {
  mission: Mission;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (missionId: string, points: number, rewardTitle: string) => void;
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
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete(mission.id, mission.points, mission.rewardTitle);
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
      <DialogContent className="sm:max-w-[525px] bg-card">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">{mission.title}</DialogTitle>
        </DialogHeader>
        <div className="my-4 min-h-[150px] space-y-3">
          <p className="font-bold text-xl text-foreground">{steps[currentStep]?.title}</p>
          <p className="text-lg text-muted-foreground">{steps[currentStep]?.description}</p>
        </div>
        <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
            <div className="flex w-full justify-between items-center flex-wrap gap-2">
                <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0} className="text-base">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                </Button>
                 {isLastStep ? (
                    <Button onClick={handleComplete} className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                        <Check className="mr-2 h-4 w-4" />
                        ¡Lo logré!
                    </Button>
                ) : (
                    <Button onClick={handleNext} className="text-base">
                        Siguiente
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            {!isLastStep && (
                 <Button variant="outline" onClick={handleComplete} className="w-full text-base">
                     Ya sé cómo hacerlo (Completar)
                    <Forward className="ml-2 h-4 w-4" />
                </Button>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
