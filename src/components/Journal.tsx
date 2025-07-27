'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Book } from 'lucide-react';

export function Journal() {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('journalText');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('journalText', newText);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-3xl">
          <Book className="mr-3 h-7 w-7 text-accent" />
          Diario Personal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-lg">
          Un espacio para vos. Anotá tus victorias, tus frustraciones, lo que
          sea. Nadie más lo va a leer.
        </p>
        <Textarea
          value={text}
          onChange={handleChange}
          placeholder="¿Cómo te sentís hoy?"
          rows={8}
          className="resize-none text-base"
        />
      </CardContent>
    </Card>
  );
}
