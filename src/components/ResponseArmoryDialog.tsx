
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FeedbackEntry, ArmoryFeedbackData } from '@/lib/types';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';


interface ResponseArmoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveFeedback: (feedback: Omit<FeedbackEntry, 'id' | 'date'>) => void;
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
                quote: '“Me alegro mucho por él/ella. Yo estoy trabajando en mis propias metas.”',
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
    },
    {
        title: '💭 Banco de Pensamientos (Escudos para tu voz interior)',
        responses: [
            {
                quote: '“No tengo que tener todo resuelto hoy.”',
                why: 'Te da permiso para vivir en el presente y alivia la presión de tener un plan perfecto.'
            },
            {
                quote: '“Está bien ir lento, siempre y cuando no me detenga.”',
                why: 'Valora el progreso constante por sobre la velocidad. Cada paso, no importa cuán pequeño, es una victoria.'
            },
            {
                quote: '“Esto también va a pasar.”',
                why: 'Un recordatorio de que los malos momentos son temporales. Te ayuda a ganar perspectiva cuando te sientes abrumado.'
            },
            {
                quote: '“Mi valor no se mide por mi productividad.”',
                why: 'Separa tu identidad de tus logros. Te recuerda que mereces descanso y respeto incondicionalmente.'
            }
        ]
    },
    {
        title: '🤖 Modo "Sigilo" (Respuestas de baja energía)',
        responses: [
            {
                quote: '“Estoy en una etapa de reinvención profesional. Gracias por preguntar.”',
                why: 'Corta una pregunta sobre trabajo de forma elegante y final.'
            },
            {
                quote: '“Es un tema en el que estoy trabajando. Cuando tenga algo que compartir, lo haré.”',
                why: 'Pone un límite claro sin dar detalles. Útil para casi cualquier pregunta personal.'
            },
            {
                quote: '“Gracias por el consejo, lo voy a pensar.”',
                why: 'Una forma neutral de recibir consejos no pedidos sin comprometerte a nada.'
            },
            {
                quote: '“Aprecio tu interés. Es un proceso personal.”',
                why: 'Valida la intención del otro pero protege tu privacidad de forma contundente.'
            }
        ]
    }
];

const armoryFeelings = [
    { value: 'Poderoso/a', label: 'Poderoso/a' },
    { value: 'Aliviado/a', label: 'Aliviado/a' },
    { value: 'Seguro/a', label: 'Seguro/a' },
    { value: 'Igual', label: 'Igual' },
    { value: 'Frustrado/a', label: 'Frustrado/a' },
] as const;


function ArmoryFeedbackSelector({ quote, onSaveFeedback }: { quote: string, onSaveFeedback: (feedback: Omit<FeedbackEntry, 'id' | 'date'>) => void }) {

    const handleSelect = (feeling: ArmoryFeedbackData['feeling']) => {
        onSaveFeedback({
            type: 'armory',
            data: {
                quote,
                feeling
            }
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-muted-foreground hover:text-accent"
                >
                    Lo usé, ¿cómo me sentí?
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {armoryFeelings.map((feeling) => (
                    <DropdownMenuItem
                        key={feeling.value}
                        onSelect={() => handleSelect(feeling.label)}
                    >
                        {feeling.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function ResponseArmoryDialog({ isOpen, onClose, onSaveFeedback }: ResponseArmoryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">Armería de Respuestas</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Herramientas para cuando te sentís presionado. No son para pelear, son para proteger tu proceso. Elige una categoría para ver las respuestas.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 overflow-y-auto my-4 pr-4 -mr-4">
             <Accordion type="single" collapsible className="w-full">
                {sections.map(section => (
                    <AccordionItem value={section.title} key={section.title}>
                        <AccordionTrigger className="font-bold text-lg text-foreground text-left hover:no-underline">
                            {section.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 pt-2">
                                {section.responses.map(response => (
                                    <div key={response.quote} className="p-3 border rounded-lg bg-background/50 text-left">
                                        <p className="font-bold text-foreground text-base">{response.quote}</p>
                                        <p className="text-sm text-muted-foreground mt-1">Por qué funciona: {response.why}</p>
                                        <div className="mt-2">
                                            <ArmoryFeedbackSelector quote={response.quote} onSaveFeedback={onSaveFeedback} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

        <DialogFooter className="mt-auto pt-4 border-t">
          <Button onClick={onClose} className="w-full sm:w-auto">Entendido</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
