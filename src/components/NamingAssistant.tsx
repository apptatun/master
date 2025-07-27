'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getSuggestedNames } from '@/app/actions';
import { Wand2, Loader2, Info, PlusCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Badge } from './ui/badge';

export function NamingAssistant() {
  const [hints, setHints] = useState('');
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hints.trim()) {
      setError('Por favor, ingresa algunas pistas sobre tu desafío.');
      return;
    }
    setLoading(true);
    setError(null);
    setNames([]);

    const result = await getSuggestedNames({ hints });
    
    if (result.names && result.names.length > 0) {
        if(result.names[0].startsWith('Error')) {
            setError(result.names[0]);
        } else {
            setNames(result.names);
        }
    } else {
        setError('No se pudieron generar nombres. Intenta con otras pistas.');
    }
    
    setLoading(false);
  };
  
  const exampleHints = ['limpiar mi pieza', 'hacer una llamada', 'comprar pan'];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-3xl">
          <Wand2 className="mr-3 h-7 w-7 text-accent" />
          Creador de Desafíos
        </CardTitle>
        <CardDescription className="text-lg">
          ¿Tenés un objetivo en mente? Describilo acá y dale un nombre épico para empezar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="hints-input" className="text-base font-medium">Describí tu desafío personal</label>
            <Input
              id="hints-input"
              value={hints}
              onChange={(e) => {
                setHints(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Ej: ordenar los apuntes, llamar al médico..."
              className="text-base"
            />
            <div className="flex gap-1 pt-1 flex-wrap">
                {exampleHints.map(hint => (
                    <Button key={hint} variant="outline" size="sm" type="button" className="text-sm" onClick={() => setHints(hint)}>{hint}</Button>
                ))}
            </div>
          </div>
          <Button type="submit" disabled={loading} className="w-full text-base">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generar Nombre Épico
          </Button>
        </form>

        {error && (
            <Alert variant="destructive" className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="text-base">{error}</AlertDescription>
            </Alert>
        )}

        {names.length > 0 && (
          <div className="mt-6">
            <h4 className="font-bold mb-3 text-lg">Nombres sugeridos para tu desafío:</h4>
            <div className="flex flex-wrap gap-2">
              {names.map((name, index) => (
                <Badge key={index} variant="secondary" className="text-lg px-4 py-1">
                  {name}
                </Badge>
              ))}
            </div>
            <Button className="w-full mt-4 text-base" disabled>
                <PlusCircle className="mr-2 h-4 w-4" />
                Añadir como nuevo desafío (Próximamente)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
