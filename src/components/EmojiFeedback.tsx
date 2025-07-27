
'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface EmojiFeedbackProps {
    onFeedback: (feeling: string) => void;
}

const feelings = [
    { emoji: '😞', label: 'Mal' },
    { emoji: '😐', label: 'Más o menos' },
    { emoji: '😊', label: 'Un poco mejor' },
];

export function EmojiFeedback({ onFeedback }: EmojiFeedbackProps) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (label: string) => {
        setSelected(label);
        setTimeout(() => onFeedback(label), 500);
    }

    return (
        <div className="text-center p-6 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Cómo te sentiste?</h3>
            <div className="flex justify-center gap-4">
                {feelings.map(({ emoji, label }) => (
                     <motion.div
                        key={label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => handleSelect(label)}
                            className={`flex flex-col items-center justify-center h-24 w-24 rounded-lg transition-all duration-300
                                ${selected === label ? 'bg-accent text-accent-foreground' : ''}
                                ${selected && selected !== label ? 'opacity-50' : ''}
                            `}
                        >
                            <span className="text-4xl">{emoji}</span>
                            <span className="text-sm mt-1">{label}</span>
                        </Button>
                     </motion.div>
                ))}
            </div>
        </div>
    )
}
