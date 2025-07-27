import { Mission } from './types';

export const missions: Mission[] = [
  {
    id: 'm1',
    title: 'Misión: Activar la Hornalla',
    description: 'Activa la zona de cocción. Objetivo: hervir agua. Riesgo: bajo.',
    points: 10,
    type: 'interactive',
    category: 'cooking',
    steps: [
      {
        title: 'Paso 1: Pedir ayuda es de cracks. ¡Y es obligatorio si no estás seguro!',
        description: 'Esta misión involucra fuego y gas. La seguridad no es negociable. Si es tu primera vez, no estás 100% seguro o te da un mínimo de ansiedad, es fundamental que pidas ayuda a un adulto. No es una opción, es el paso más inteligente y valiente que podés dar. Demostrar que te cuidás es una victoria enorme.',
      },
      {
        title: 'Paso 2: Ubicar la hornalla',
        description: 'Busca los círculos de metal en tu cocina. La más estable y segura suele ser una de las de atrás. Elige una.',
      },
      {
        title: 'Paso 3: La perilla',
        description: 'Cada hornalla tiene una perilla. Para encenderla, a menudo tenés que presionar hacia adentro y luego girar hacia la izquierda (anti-horario).',
      },
      {
        title: 'Paso 4: El fuego',
        description: 'Si tu cocina tiene encendedor automático, oirás un "click-click-click" y verás la llama. Si es manual, acerca un fósforo o encendedor con cuidado.',
      },
      {
        title: 'Paso 5: La llama ideal',
        description: 'Una llama azul es perfecta. Si es amarilla o naranja, podría haber un problema. En ese caso, apaga todo y ventila. Si todo está bien, ponla a fuego medio.',
      },
      {
        title: 'Paso 6: La olla',
        description: 'Llena una olla con agua (no hasta el borde, deja espacio). Colócala con cuidado sobre la hornalla encendida.',
      },
      {
        title: 'Paso 7: ¡Felicitaciones!',
        description: 'Lo lograste. Has completado la guía. Ya diste un paso clave para dominar la cocina.',
      },
    ],
  },
  {
    id: 'm2',
    title: 'Arroz sin engrudo',
    description: 'Prepara tu primer arroz. ¡Conviértete en el maestro del grano! 🍚',
    points: 15,
    type: 'interactive',
    category: 'cooking',
    steps: [
        {
            title: 'Paso 1: Medir el arroz',
            description: 'Usa una taza como medida. Por cada taza de arroz, necesitarás dos tazas de agua. Hoy, usa solo una taza de arroz.'
        },
        {
            title: 'Paso 2: Lavar el arroz',
            description: 'Pon el arroz en una olla y cúbrelo con agua. Remuévelo con la mano y verás que el agua se pone blanca. Cuela esa agua y repite hasta que salga más clara. Esto quita el almidón y evita el engrudo.'
        },
        {
            title: 'Paso 3: Al fuego',
            description: 'Pon la olla con el arroz lavado y las dos tazas de agua a fuego fuerte, sin tapa. Añade una pizca de sal.'
        },
        {
            title: 'Paso 4: El hervor',
            description: 'Cuando empiece a hervir fuerte, baja el fuego al mínimo posible. Tapa la olla y NO la destapes por 15 minutos. Pon una alarma.'
        },
        {
            title: 'Paso 5: Reposo',
            description: 'Pasados los 15 minutos, apaga el fuego. Deja la olla tapada por 5 minutos más. Este paso es clave para que quede perfecto.'
        },
        {
            title: 'Paso 6: ¡A comer!',
            description: '¡Listo! Separa los granos con un tenedor. Ya tenés tu primer arroz perfecto. ¡Buen trabajo!'
        }
    ]
  },
   {
    id: 'm10',
    title: 'Mate para Principiantes',
    description: 'Prepara tu primer mate. Un ritual de calma y compañía. 🧉',
    points: 15,
    type: 'interactive',
    category: 'cooking',
    steps: [
        {
            title: 'Paso 1: Calentar el agua',
            description: 'Calienta agua en una pava. NO tiene que hervir. El punto ideal es justo antes de que empiecen a salir burbujas grandes (entre 75-80°C). Si no tenés termómetro, apagala cuando veas que empieza a hacer ruido.'
        },
        {
            title: 'Paso 2: Preparar el mate',
            description: 'Llena 3/4 partes de tu mate con yerba. Tapa la boca con la mano, inclínalo y sacudilo un poco para que el polvo quede arriba. Esto evita que se tape la bombilla.'
        },
        {
            title: 'Paso 3: Humedecer la yerba',
            description: 'Vuelve a poner el mate derecho. La yerba quedará inclinada. En el hueco que se formó, echa un chorrito de agua tibia (si tenés) o un poco del agua de la pava. Deja que la yerba absorba por un minuto.'
        },
        {
            title: 'Paso 4: Poner la bombilla',
            description: 'Tapa el pico de la bombilla con el pulgar e insértala en la parte húmeda de la yerba, contra la pared del mate.'
        },
        {
            title: 'Paso 5: Cebar',
            description: 'Ahora sí, empieza a echar el agua caliente del termo o pava en el hueco, siempre en el mismo lugar, cerca de la bombilla. No mojes toda la yerba.'
        },
        {
            title: 'Paso 6: ¡A disfrutar!',
            description: '¡Felicitaciones! Preparaste tu primer mate. El primero es amargo, pero después mejora. ¡Disfrutá tu logro!'
        }
    ]
  },
  {
    id: 'm3',
    title: 'Ninja de la limpieza',
    description: 'Misión stealth: elimina 5 \'enemigos mugre\' del fregadero. ✨',
    points: 10,
    type: 'checkbox',
    category: 'organizing',
  },
  {
    id: 'm4',
    title: 'Misión: Lavarropas',
    description: 'Inicia un ciclo de lavado. ¡Ropa fresca, vida organizada! 👕',
    points: 20,
    type: 'interactive',
    category: 'organizing',
    steps: [
        {
            title: 'Paso 1: Separar la ropa',
            description: 'Reúne tu ropa sucia. Separa la ropa blanca o de colores claros de la ropa de color oscuro. Esto evita que se manche.'
        },
        {
            title: 'Paso 2: Cargar el lavarropas',
            description: 'Abre la puerta del lavarropas y mete un grupo de ropa (blanca o de color). No lo llenes a tope, deja espacio para que el agua y el jabón circulen.'
        },
        {
            title: 'Paso 3: El jabón',
            description: 'Busca el cajón del lavarropas. Usualmente tiene compartimentos. Vierte el jabón líquido o en polvo en el compartimento más grande. Si usas suavizante, va en el compartimento más pequeño con el símbolo de una flor.'
        },
        {
            title: 'Paso 4: Elegir el programa',
            description: 'Cierra la puerta. Gira la perilla o presiona los botones para elegir un programa. Un "lavado diario" o "algodón" suele funcionar para casi todo. Asegúrate que la temperatura esté en "frío" o "30°" para no dañar la ropa.'
        },
        {
            title: 'Paso 5: Iniciar',
            description: 'Presiona el botón de "Inicio" o "Play". ¡Y ya está! La máquina hará el resto. Volvé cuando termine el ciclo.'
        },
        {
            title: 'Paso 6: Ciclo completado',
            description: '¡Misión cumplida! Tu ropa está limpia gracias a vos. El siguiente paso es colgarla, pero eso es otra misión. ¡Disfrutá tu victoria!'
        }
    ]
  },
   {
    id: 'm9',
    title: 'Operación "Cama Cero"',
    description: 'Tu primera misión del día: estirar las sábanas. Una cama hecha es un cuarto que ya se ve mejor.',
    points: 5,
    type: 'checkbox',
    category: 'organizing',
  },
  {
    id: 'm5',
    title: 'Gánale al Snooze',
    description: 'Primer objetivo del día: levantate. ¿El segundo? Hidratarte. Un vaso de agua al despertar es una victoria fácil. ☀️',
    points: 5,
    type: 'checkbox',
    category: 'personal-care',
  },
  {
    id: 'm6',
    title: 'Embajador de la Hidratación',
    description: 'Bebe un vaso de agua al despertar. ¡Un comienzo épico para tu día! 💦',
    points: 5,
    type: 'checkbox',
    category: 'personal-care',
  },
  {
    id: 'm7',
    title: 'Exploración Beta',
    description: 'Pisa la calle como si fueras un NPC observando el mapa (hoodie permitido).',
    points: 15,
    type: 'checkbox',
    category: 'going-out',
  },
    {
    id: 'm11',
    title: 'Misión Supermercado',
    description: 'Ve al supermercado o almacén más cercano a comprar UNA cosa. Solo una. Pan, galletitas, lo que sea. El objetivo es entrar y salir.',
    points: 20,
    type: 'interactive',
    category: 'going-out',
    steps: [
        {
            title: 'Paso 1: El Objetivo',
            description: 'Define qué vas a comprar. Una sola cosa. ¿Pan? ¿Leche? ¿Algo para tomar? Tener un objetivo claro reduce la incertidumbre.'
        },
        {
            title: 'Paso 2: La Preparación',
            description: 'Agarra tu billetera/plata, llaves y celular. Revisa si tienes una bolsa reutilizable. Ponte auriculares si te ayuda a reducir el estrés del ambiente.'
        },
        {
            title: 'Paso 3: La Entrada',
            description: 'Camina hacia el lugar. Al entrar, respira hondo. Tu única misión es encontrar tu objetivo. Ignora el resto. No tienes que saludar a nadie si no quieres.'
        },
        {
            title: 'Paso 4: La Búsqueda',
            description: 'Dirígete a la sección donde está tu producto. Si no sabes dónde está, camina por los pasillos hasta encontrarlo. Concéntrate en las etiquetas.'
        },
        {
            title: 'Paso 5: La Caja',
            description: 'Una vez que tengas tu producto, ve a la caja. Coloca el item en el mostrador. El cajero te dirá el precio. Paga. No necesitas hablar más de lo necesario.'
        },
        {
            title: 'Paso 6: ¡Escape Exitoso!',
            description: '¡Lo lograste! Saliste de la tienda con tu objetivo cumplido. Te enfrentaste al mundo y ganaste. ¡Excelente trabajo!'
        }
    ]
  },
  {
    id: 'm8',
    title: 'Misión: Saludo Social',
    description: 'Practica un saludo simple con un empleado de una tienda. Un "buen día" es suficiente.',
    points: 10,
    type: 'checkbox',
    category: 'social',
  },
   {
    id: 'm12',
    title: 'Guardián del Esmalte',
    description: 'Cepíllate los dientes. No tienen que quedar perfectos. Solo tienes que hacerlo.',
    points: 5,
    type: 'checkbox',
    category: 'personal-care'
  },
  {
    id: 'm13',
    title: 'Uniforme de Entrecasa',
    description: 'Ponte ropa limpia, aunque no vayas a salir. Es para vos.',
    points: 5,
    type: 'checkbox',
    category: 'personal-care'
  }
];

    