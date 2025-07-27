
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
    title: 'EXPEDICIÓN KIOSCO',
    description: 'Comprar 1 producto sin voz temblorosa. Meta oculta: Completar una transacción de bajo riesgo aumenta tu confianza para futuras interacciones.',
    type: 'interactive',
    category: 'going-out',
    reward: 'Comerciante de Confianza',
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
    title: 'PROTOCOLO SALUDO VOCAL',
    description: 'Decir "buen día" o "gracias". Meta oculta: Esta micro-interacción activa las neuronas espejo y te recuerda que eres parte de una comunidad.',
    type: 'checkbox',
    category: 'social',
    reward: 'Emisario Diplomático Iniciado',
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
  },
  {
    id: 'm19',
    title: 'OPERACIÓN BUS-ALPHA',
    description: 'Sube al transporte público en una hora de poco tráfico. Meta oculta: Dominar una ruta de transporte público te da autonomía y expande tu mapa mental de la ciudad.',
    type: 'interactive',
    category: 'going-out',
    reward: 'Mapa de rutas seguras',
    steps: [
      {
        title: 'Paso 1: Planificar la Ruta',
        description: 'Usa una app de mapas para ver qué bus te sirve y dónde está la parada. Elige una hora de poco tráfico (media mañana o media tarde).'
      },
      {
        title: 'Paso 2: Preparar lo Necesario',
        description: 'Ten a mano tu tarjeta de transporte con saldo. Si no tienes, es una buena oportunidad para gestionar la tuya.'
      },
      {
        title: 'Paso 3: La Parada',
        description: 'Camina hasta la parada sin apuro. Puedes escuchar música para relajarte.'
      },
      {
        title: 'Paso 4: La Señal Universal',
        description: 'Cuando veas que tu bus se acerca, extiende el brazo. Así es como el conductor sabe que debe parar.'
      },
      {
        title: 'Paso 5: Subir y Pagar',
        description: 'Sube con calma. Apoya tu tarjeta en la máquina lectora y busca un asiento. No es necesario hablar.'
      },
      {
        title: 'Paso 6: El Viaje',
        description: 'Mira por la ventana y disfruta del paisaje urbano. Tu misión es solo viajar unas pocas paradas.'
      },
      {
        title: 'Paso 7: Bajar con Éxito',
        description: 'Toca el timbre un poco antes de tu parada de destino. Baja con calma. ¡Misión cumplida! Has conquistado el transporte público.'
      }
    ]
  },
  {
    id: 'm20',
    title: 'MISIÓN COORDENADAS MÉDICAS',
    description: 'Llegar a un consultorio usando GPS. Meta oculta: Aprender a confiar en una herramienta te quita la presión de tener que "saber" todo y reduce la ansiedad de perderte.',
    type: 'interactive',
    category: 'going-out',
    reward: 'Explorador Urbano Avanzado',
    steps: [
      {
        title: 'Paso 1: El Destino',
        description: 'Tené a mano la dirección exacta del consultorio. Abrí tu app de mapas preferida (Google Maps, Waze, etc.) e introducila.'
      },
      {
        title: 'Paso 2: Iniciar la Navegación',
        description: 'La app te mostrará una ruta. Dale al botón de "Iniciar" o "Ir". Si te ofrece rutas alternativas, elegí la que te parezca más sencilla.'
      },
      {
        title: 'Paso 3: Seguir las Indicaciones',
        description: 'Confiá en la voz o en el mapa. No tenés que memorizar nada, solo seguir la siguiente indicación. Si te equivocás, la app recalculará automáticamente. ¡No hay error posible!'
      },
      {
        title: 'Paso 4: La Llegada',
        description: 'La app te avisará cuando estés cerca. Prestá atención a los números de las calles o a los nombres de los edificios para encontrar el lugar exacto.'
      },
      {
        title: 'Paso 5: ¡Destino Conquistado!',
        description: 'Llegaste. No solo al consultorio, sino a un nuevo nivel de autonomía. ¡Excelente trabajo de navegación!'
      }
    ]
  },
  {
    id: 'm21',
    title: 'OPERACIÓN LLAMADA FRÍA',
    description: 'Pedir un turno médico por teléfono. Meta oculta: Superar la barrera de una llamada te entrena para interacciones más complejas y te da control sobre tu salud.',
    type: 'interactive',
    category: 'social',
    reward: 'Maestro de la Comunicación Directa',
    steps: [
      {
        title: 'Paso 1: Prepara la información',
        description: 'Tené a mano tu DNI y los datos de tu obra social o prepaga. Anotá el nombre del médico o la especialidad que necesitas.'
      },
      {
        title: 'Paso 2: El Guión Anti-pánico',
        description: 'No tenés que improvisar. Usá este guión: "Hola, buen día. Quería pedir un turno con el/la doctor/a [Nombre del Médico] por [tu obra social/prepaga]". ¡Listo! Eso es todo lo que necesitás para empezar.'
      },
      {
        title: 'Paso 3: Respirá y Marcá',
        description: 'Busca el número, respira hondo y llamá. Recordá que la persona del otro lado hace esto todo el día. No estás molestando, estás gestionando tu salud.'
      },
      {
        title: 'Paso 4: La Conversación',
        description: 'Lee tu guión. Te van a pedir tus datos y te darán opciones de fechas. Tené a mano dónde anotar. Si no entendés algo, está bien pedir que te lo repitan.'
      },
      {
        title: 'Paso 5: ¡Turno Conquistado!',
        description: '¡Lo hiciste! Anotá bien el día, la hora y la dirección. Acabás de dar un paso gigante para tu bienestar. ¡Felicitaciones!'
      }
    ]
  },
  {
    id: 'm22',
    title: 'MISIÓN EMAIL FANTASMA',
    description: 'Enviar una consulta a un servicio técnico o administrativo. Meta oculta: Usar la comunicación escrita te permite pensar y editar, eliminando la presión de la respuesta inmediata.',
    type: 'interactive',
    category: 'digital',
    reward: 'Diplomático Digital',
    steps: [
      {
        title: 'Paso 1: Identifica el Asunto',
        description: 'Sé claro y conciso. Por ejemplo: "Consulta sobre [tu producto/servicio]" o "Problema con [número de pedido]".'
      },
      {
        title: 'Paso 2: La Plantilla Anti-Pánico',
        description: 'Copia y pega esto: "Estimados, [Nombre de la empresa]. Les escribo para consultar sobre [tu problema o pregunta de forma simple]. Mi número de cliente/pedido es [si aplica]. Agradezco su ayuda. Saludos, [Tu Nombre]".'
      },
      {
        title: 'Paso 3: Revisa y Envía',
        description: 'Lee el email una vez más para asegurarte de que está claro. No tiene que ser perfecto. Dale al botón de Enviar. ¡Ya está fuera de tu cabeza!'
      },
      {
        title: 'Paso 4: ¡Mensaje Enviado!',
        description: '¡Misión cumplida! Delegaste el problema. Ahora la respuesta está en su cancha. Diste un paso importante para resolver algo que te trababa.'
      }
    ]
  },
  {
    id: 'm23',
    title: 'HACKEO FINANCIERO',
    description: 'Revisar tu saldo bancario online. Meta oculta: Mirar tus finanzas de frente, aunque sea por 5 segundos, disminuye el poder que la incertidumbre tiene sobre vos.',
    type: 'checkbox',
    category: 'digital',
    reward: 'Auditor de Recursos'
  },
  {
    id: 'm24',
    title: 'OPERACIÓN TORBELLINO',
    description: 'Ducha express de 5 minutos usando un timer. Meta oculta: Completar una tarea básica con un límite de tiempo te energiza y te da una sensación de eficiencia.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Hidronauta Certificado'
  },
  {
    id: 'm25',
    title: 'PROTOCOLO MICRO-PIRÁMIDE',
    description: 'Ingerir 1 fruta y 1 vaso de agua. Meta oculta: Es el combo de energía y cuidado más simple y efectivo que existe. Le estás dando a tu cuerpo combustible de calidad.',
    type: 'checkbox',
    category: 'personal-care',
    reward: 'Ingeniero Celular'
  },
  {
    id: 'm26',
    title: 'MISIÓN GROUNDING TÁCTICO',
    description: 'Nombrar 5 sonidos que oyes y 3 colores que ves. Meta oculta: Este ejercicio te saca de tu cabeza y te ancla en el presente, cortando de raíz el espiral de ansiedad.',
    type: 'interactive',
    category: 'emotional-management',
    reward: 'Ancla Sensorial',
    steps: [
      {
        title: 'Paso 1: Hacé una pausa',
        description: 'No importa dónde estés. Simplemente detente por un momento. No necesitas cerrar los ojos.'
      },
      {
        title: 'Paso 2: Escuchá',
        description: 'Concentrate en tu oído. Identificá cinco sonidos distintos. El teclado, un auto afuera, tu propia respiración, un pájaro, el zumbido de la heladera. Nombralos en tu mente.'
      },
      {
        title: 'Paso 3: Mirá',
        description: 'Ahora, usá tu vista. Encontrá tres colores diferentes a tu alrededor. El azul de la pantalla, el negro de tu silla, el blanco de la pared. Nombralos.'
      },
      {
        title: 'Paso 4: Respirá',
        description: 'Tomá una respiración profunda y sentí cómo tus pies tocan el suelo o tu cuerpo se apoya en la silla. Ya está.'
      },
      {
        title: 'Paso 5: ¡Anclado!',
        description: 'Acabás de usar una técnica poderosa para calmar tu sistema nervioso. Es una herramienta que ahora tenés para siempre. ¡Victoria!'
      }
    ]
  },
  {
    id: 'm27',
    title: 'OPERACIÓN MURO DE LAMENTOS',
    description: 'Escribir una única preocupación en un papel y romperlo. Meta oculta: Externalizar un pensamiento le quita poder y el acto físico de destruirlo ofrece un cierre simbólico.',
    type: 'checkbox',
    category: 'emotional-management',
    reward: 'Liberador de Carga Mental'
  },
  {
    id: 'm28',
    title: 'OPERACIÓN PHOENIX',
    description: 'Reintentar una misión que salteaste o sentiste que te costó. Meta oculta: La resiliencia no es no fallar, es volver a intentarlo. Esto fortalece tu auto-confianza más que 10 éxitos seguidos.',
    type: 'checkbox',
    category: 'advanced',
    reward: 'Resiliencia Nivel 2'
  }
];

    
