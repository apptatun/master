
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResponseArmoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
    {
        title: 'Para cuando te preguntan: "¿Qué estás haciendo con tu vida?"',
        responses: [
            {
                quote: '“Estoy en un proceso de exploración para entender qué quiero hacer. Agradezco tu paciencia.”',
                why: 'Muestra que no estás frenado, sino en movimiento. Pone un límite sin generar distancia.'
            },
            {
                quote: '“Me estoy tomando un tiempo para reordenar mis prioridades. Es algo que necesito hacer por mí.”',
                why: 'Habla de autocuidado y decisiones conscientes. Es difícil discutirlo sin sonar invasivo.'
            }
        ]
    },
    {
        title: 'Para cuando te dicen: "Tenés que hacer algo, no podés estar así"',
        responses: [
            {
                quote: '“Entiendo tu preocupación y te agradezco que te intereses. Estoy dando pasos chiquitos todos los días para construir una rutina, aunque tal vez no se note desde afuera.”',
                why: 'Valida la preocupación del otro sin ceder terreno. Deja claro que estás en camino, aunque tu proceso no sea visible.'
            },
            {
                quote: '“Justamente, estoy haciendo algo al respecto. Estoy trabajando en mi rutina y en mi bienestar, que es el primer paso para todo lo demás.”',
                why: 'Redefine "hacer algo" y lo lleva a tu terreno: el autocuidado y la construcción de bases.'
            }
        ]
    },
    {
        title: 'Para cuando te preguntan qué hiciste hoy:',
        responses: [
            {
                quote: '“Hoy me enfoqué en organizar mi espacio para tener más claridad.”',
                why: 'Concreto, verdadero y muestra una intención positiva (buscar claridad).'
            },
            {
                quote: '“Tuve una pequeña victoria: completé una tarea que venía postergando. Fue un buen día.”',
                why: 'Te permite celebrar tus propios logros, redefiniendo el éxito en tus términos.'
            }
        ]
    },
    {
        title: 'Para cuando comparan con otros ("Mirá a tu primo...")',
        responses: [
            {
                quote: '“Cada persona tiene su propio ritmo y su propio camino. Yo estoy enfocado en el mío ahora.”',
                why: 'Corta la comparación de raíz, sin agresividad. Es una declaración de auto-respeto.'
            },
            {
                quote: '“Me alegro por él/ella. Yo estoy trabajando en mis propias metas.”',
                why: 'Muestra seguridad y evita caer en la trampa de la comparación.'
            }
        ]
    },
    {
        title: 'Para cuando juzgan tu ritmo:',
        responses: [
            {
                quote: '“Estoy honrando mi propio tempo. La consistencia, no la velocidad, es lo que construye cimientos sólidos.”',
                why: 'Cambia el foco de "lento" a "consistente", un valor que inspira respeto.'
            }
        ]
    }
]

export function ResponseArmoryDialog({ isOpen, onClose }: ResponseArmoryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">Armería de Respuestas</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Herramientas para cuando te sentís presionado. No son para pelear, son para proteger tu proceso. Úsalas como un escudo frente a preguntas incómodas o juicios sobre tu momento de vida.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 overflow-y-auto my-4 pr-4 -mr-4">
            <div className="space-y-6">
                {sections.map(section => (
                    <div key={section.title}>
                        <h4 className="font-bold text-lg text-foreground mb-3">{section.title}</h4>
                        <div className="space-y-4">
                            {section.responses.map(response => (
                                <div key={response.quote} className="p-3 border rounded-lg bg-background/50 text-left">
                                    <p className="font-bold text-foreground text-base">{response.quote}</p>
                                    <p className="text-sm text-muted-foreground mt-1">Por qué funciona: {response.why}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                 <div className="pt-4 mt-4 border-t text-center text-muted-foreground text-sm">
                    <p>Estas frases no son máscaras. Son formas de cuidarte mientras te das el permiso de estar en proceso.</p>
                </div>
            </div>
        </div>

        <DialogFooter className="mt-auto pt-4 border-t">
          <Button onClick={onClose} className="w-full sm:w-auto">Entendido</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
