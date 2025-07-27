
import { Mission } from './types';

export const missions: Mission[] = [
  {
    id: 'm1',
    title: 'Misión: Activar la Hornalla (3 min)',
    description: 'Activa la zona de cocción para hervir agua. Meta oculta: Dominar una herramienta básica te da una sensación de control sobre tu entorno.',
    type: 'interactive',
    category: 'cooking',
    reward: 'Alquimista Nivel 1',
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
    title: 'Arroz sin engrudo (20 min)',
    description: 'Prepara tu primer arroz. Meta oculta: Aprender a preparar un alimento básico te da independencia y te conecta con un ritual universal.',
    type: 'interactive',
    category: 'cooking',
    reward: 'Maestro del Grano',
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
    title: 'Mate para Principiantes (5 min)',
    description: 'Prepara tu primer mate. Meta oculta: Participar en un ritual cultural te conecta con otros y te ofrece un momento de pausa y reflexión.',
    type: 'interactive',
    category: 'cooking',
    reward: 'Cebador de la Calma',
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
    title: 'Ninja del Fregadero (5 min)',
    description: 'Elimina 5 platos, vasos o cubiertos sucios. Meta oculta: Conquistar un pequeño foco de caos reduce la carga visual y mental.',
    type: 'checkbox',
    category: 'organizing',
    reward: 'Exterminador de Caos',
  },
  {
    id: 'm4',
    title: 'Misión: Lavarropas (5 min)',
    description: 'Inicia un ciclo de lavado. Meta oculta: Automatizar una tarea de cuidado personal te libera energía mental para otras cosas.',
    type: 'interactive',
    category: 'organizing',
    reward: 'Domador de Textiles',
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
    title: 'Operación "Cama Cero" (2 min)',
    description: 'Estira las sábanas. Meta oculta: Es una "victoria de 2 minutos" que le ordena a tu cerebro que el día ya empezó.',
    type: 'checkbox',
    category: 'organizing',
    reward: 'Guardián del Orden',
  },
  {
    id: 'm14',
    title: 'Foco de Orden (7 min)',
    description: 'Elegí UNA sola cosa y ordenala (la silla con ropa, el escritorio). Meta oculta: Concentrarte en un solo punto de mejora evita que te sientas abrumado por el desorden general.',
    type: 'checkbox',
    category: 'minimal-organization',
    reward: 'Clarividente Espacial',
  },
  {
    id: 'm5',
    title: 'Gánale al Snooze (1 min)',
    description: 'Levantate e hidrátate. Meta oculta: Romper el ciclo de postergación con una acción física simple entrena tu "músculo" de la voluntad.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Conquistador del Alba',
  },
  {
    id: 'm6',
    title: 'Embajador de la Hidratación (1 min)',
    description: 'Bebe un vaso de agua al despertar. Meta oculta: Es la forma más rápida de reactivar tu cuerpo y mente después de horas de ayuno.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Ingeniero de Bienestar',
  },
  {
    id: 'm7',
    title: 'Exploración Beta (5 min)',
    description: 'Pisa la calle solo para observar. Meta oculta: Exponerte al entorno sin un objetivo reduce la ansiedad de "tener que hacer algo" afuera.',
    type: 'checkbox',
    category: 'going-out',
    reward: 'Cartógrafo de lo Cotidiano',
  },
    {
    id: 'm11',
    title: 'Misión Supermercado (10 min)',
    description: 'Ve al súper a comprar UNA sola cosa. Meta oculta: Completar una transacción de bajo riesgo aumenta tu confianza para futuras interacciones.',
    type: 'interactive',
    category: 'going-out',
    reward: 'Explorador Urbano',
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
    title: 'Misión: Saludo Social (1 min)',
    description: 'Di "buen día" o "gracias". Meta oculta: Esta micro-interacción activa las neuronas espejo y te recuerda que eres parte de una comunidad.',
    type: 'checkbox',
    category: 'social',
    reward: 'Diplomático Novato',
  },
  {
    id: 'm15',
    title: 'Reactivar Contacto (2 min)',
    description: 'Mándale un "hola, ¿cómo estás?" a alguien de confianza. Meta oculta: Iniciar el contacto te pone en una posición activa en tus relaciones, en lugar de pasiva.',
    type: 'checkbox',
    category: 'social',
    reward: 'Emisario Silencioso',
  },
   {
    id: 'm12',
    title: 'Guardián del Esmalte (3 min)',
    description: 'Cepíllate los dientes. Meta oculta: Es un acto de autocuidado básico que envía una señal a tu cerebro de que mereces atención y limpieza.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Paladín de la Sonrisa',
  },
  {
    id: 'm13',
    title: 'Uniforme de Entrecasa (2 min)',
    description: 'Ponte ropa limpia, aunque no salgas. Meta oculta: Cambiar el pijama por ropa te ayuda a diferenciar entre descanso y actividad, preparando tu mente para el día.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Comandante del Confort',
  },
  {
    id: 'm16',
    title: 'Operación Hibernación: Apagar pantallas 1h antes de dormir',
    description: 'Desconéctate para conectar con tu descanso. Meta oculta: Regular tus ciclos de sueño es el hack de productividad más potente que existe.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Guardián del Ritmo Circadiano',
  },
  {
    id: 'm17',
    title: 'MISIÓN LÍNEA BLANCA',
    description: 'Descongelar el freezer sin causar una inundación. Meta oculta: Enfrentar una tarea doméstica grande te demuestra que podés manejar proyectos más complejos de lo que creés.',
    type: 'interactive',
    category: 'organizing',
    reward: 'Domador de Escarcha',
    steps: [
      {
        title: 'Paso 1: Seguridad y Preparación',
        description: 'Desenchufa el freezer. ¡No te saltes este paso! Coloca toallas o trapos viejos alrededor para absorber el agua que caerá.',
      },
      {
        title: 'Paso 2: Vaciar la Fortaleza',
        description: 'Saca toda la comida. Lo que sirva, ponelo en una heladerita portátil o en el refrigerador. Lo que no, a la basura.',
      },
      {
        title: 'Paso 3: El Deshielo (Sé Paciente)',
        description: 'Deja la puerta abierta y que la naturaleza haga su trabajo. Para acelerar, puedes poner recipientes con agua caliente adentro (¡nunca uses un cuchillo o secador de pelo!).',
      },
      {
        title: 'Paso 4: Limpieza Final',
        description: 'Una vez que todo el hielo se haya derretido, limpia el interior con un trapo con agua y un poco de vinagre o bicarbonato. Sécalo bien.',
      },
      {
        title: 'Paso 5: Reactivación',
        description: 'Vuelve a enchufar el freezer. Espera unos 15-20 minutos a que empiece a enfriar antes de volver a guardar la comida.',
      },
      {
        title: 'Paso 6: ¡Victoria Ártica!',
        description: '¡Lo lograste! Venciste al gigante de hielo. Ahora tu freezer es más eficiente y vos demostraste una paciencia de monje tibetano.',
      },
    ],
  },
  {
    id: 'm18',
    title: 'PROTOCOLO CUBO BASURA',
    description: 'Saca los residuos sin posponer. Meta oculta: Completar una tarea rutinaria de inmediato rompe el ciclo de la procrastinación y libera espacio mental.',
    type: 'checkbox',
    category: 'organizing',
    reward: 'Operario de Saneamiento Élite',
  }
];
