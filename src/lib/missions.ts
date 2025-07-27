import { Mission } from './types';

export const missions: Mission[] = [
  {
    id: 'm1',
    title: 'Operación Hornalla',
    description: 'Activa la zona de cocción. Objetivo: hervir agua. Riesgo: bajo.',
    points: 10,
    rewardTitle: 'Ingeniero Termodinámico Lv.1',
    type: 'interactive',
    steps: [
      {
        title: 'Paso 1: Ubicar la hornalla',
        description: 'Busca los círculos de metal en tu cocina. La más estable y segura suele ser una de las de atrás. Elige una.',
      },
      {
        title: 'Paso 2: La perilla',
        description: 'Cada hornalla tiene una perilla. Para encenderla, a menudo tenés que presionar hacia adentro y luego girar hacia la izquierda (anti-horario).',
      },
      {
        title: 'Paso 3: El fuego',
        description: 'Si tu cocina tiene encendedor automático, oirás un "click-click-click" y verás la llama. Si es manual, acerca un fósforo o encendedor con cuidado.',
      },
      {
        title: 'Paso 4: La llama ideal',
        description: 'Una llama azul es perfecta. Si es amarilla o naranja, podría haber un problema. En ese caso, apaga todo y ventila. Si todo está bien, ponla a fuego medio.',
      },
      {
        title: 'Paso 5: La olla',
        description: 'Llena una olla con agua (no hasta el borde, deja espacio). Colócala con cuidado sobre la hornalla encendida.',
      },
      {
        title: '¡Felicitaciones!',
        description: 'Lo lograste. Has completado el protocolo. Ya diste un paso clave para dominar la cocina.',
      },
    ],
  },
  {
    id: 'm2',
    title: 'Arroz sin engrudo',
    description: 'Prepara tu primer arroz. ¡Conviértete en el maestro del grano! 🍚',
    points: 15,
    rewardTitle: 'Maestro Arrocero',
    type: 'checkbox',
  },
  {
    id: 'm3',
    title: 'Ninja de la limpieza',
    description: 'Misión stealth: elimina 5 \'enemigos mugre\' del fregadero. ✨',
    points: 10,
    rewardTitle: 'Guardián del Fregadero',
    type: 'checkbox',
  },
  {
    id: 'm4',
    title: 'Protocolo Lavarropas',
    description: 'Inicia un ciclo de lavado. ¡Ropa fresca, vida organizada! 👕',
    points: 20,
    rewardTitle: 'Técnico Textil',
    type: 'checkbox',
  },
  {
    id: 'm5',
    title: 'Despertador Motivador',
    description: 'Gánale a la mañana. Levántate antes de las 11 AM. ☀️',
    points: 5,
    rewardTitle: 'Madrugador Principiante',
    type: 'checkbox',
  },
  {
    id: 'm6',
    title: 'Embajador de la Hidratación',
    description: 'Bebe un vaso de agua al despertar. ¡Un comienzo épico para tu día! 💦',
    points: 5,
    rewardTitle: 'Hydro Homie',
    type: 'checkbox',
  },
];

export const titles = [
  'Novato con Potencial',
  'Ingeniero Termodinámico Lv.1',
  'Guardián del Fregadero',
  'Maestro Arrocero',
  'Técnico Textil',
  'Madrugador Principiante',
  'Hydro Homie',
  'Explorador Urbano',
  'Héroe de la Rutina',
  'Campeón del Momentum',
];