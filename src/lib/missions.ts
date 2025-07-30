
import { Mission } from './types';

export const missions: Mission[] = [
  // MODO EN CASA
  // Supervivencia Culinaria
  {
    id: 'm1',
    title: 'Encender la hornalla',
    description: 'Una misión de activación para que te familiarices con la cocina de forma segura, hirviendo agua en una olla.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Cada uno viene con su historia. Tal vez ya usaste la cocina mil veces. Tal vez nunca prendiste una hornalla porque no te dejaron, o te dio miedo. Todo está bien. Acá no se trata de “saber” o “no saber”. Se trata de empezar a hacer, con calma y dignidad.',
    reward: 'Fuego bajo control',
    steps: [
      {
        title: 'Paso 1: UBICAR HORNALLA ESTABLE',
        description: 'La seguridad es clave. Elige una hornalla, preferentemente una de las de atrás. Son las más seguras. Si no estás 100% seguro, pide ayuda.',
      },
      {
        title: 'Paso 2: ENCENDER Y AJUSTAR LA LLAMA',
        description: 'Presiona y gira la perilla para encender la hornalla. Si es manual, acerca un fósforo con cuidado. Una llama azul es óptima. Si es amarilla o naranja, apaga todo, ventila y avisa a un adulto.',
      },
      {
        title: 'Paso 3: COLOCAR OLLA CON AGUA',
        description: 'Llena una olla con agua (dejando 3/4 de espacio libre) y colócala con cuidado sobre la hornalla encendida. ¡Misión cumplida! Has dominado el fuego.',
      },
    ],
  },
  {
    id: 'm2',
    title: 'Arroz sin engrudo (20 min)',
    description: 'Prepara tu primer arroz. Un alimento básico que te da independencia.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Aprender a preparar un alimento básico te da independencia y te conecta con un ritual universal.',
    reward: 'Tu primer arroz',
    steps: [
        {
            title: 'Paso 1: MEDIR Y LAVAR',
            description: 'Usa una taza como medida. Por cada taza de arroz, necesitarás dos tazas de agua. Lava el arroz en la olla hasta que el agua salga más clara para quitar el almidón.'
        },
        {
            title: 'Paso 2: COCCIÓN INICIAL',
            description: 'Pon la olla con el arroz lavado y dos tazas de agua a fuego fuerte, sin tapa. Añade una pizca de sal. Espera a que hierva con fuerza.'
        },
        {
            title: 'Paso 3: COCCIÓN FINAL Y REPOSO',
            description: 'Cuando hierva, baja el fuego al mínimo, tapa la olla y cocina por 15 minutos (pon una alarma). Luego, apaga el fuego y deja reposar 5 minutos más sin destapar.'
        },
        {
            title: 'Paso 4: ¡LISTO!',
            description: '¡Felicitaciones! Separa los granos con un tenedor. Ya tenés tu primer arroz perfecto.'
        }
    ]
  },
  {
    id: 'm10',
    title: 'Prepara tu primer mate (5 min)',
    description: 'Anímate a preparar un mate, un ritual cultural que te conecta con otros.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Participar en un ritual cultural te conecta con otros y te ofrece un momento de pausa y reflexión.',
    reward: 'Compañero del mate',
    steps: [
        {
            title: 'Paso 1: CALENTAR EL AGUA Y PREPARAR LA YERBA',
            description: 'Calienta agua sin que hierva (75-80°C). Llena 3/4 del mate con yerba, sacude para quitar el polvillo y déjala inclinada.'
        },
        {
            title: 'Paso 2: HUMEDECER Y PONER LA BOMBILLA',
            description: 'En el hueco de la yerba, echa un chorrito de agua tibia y deja que absorba. Luego, tapa el pico de la bombilla e insértala en la parte húmeda.'
        },
        {
            title: 'Paso 3: CEBAR Y DISFRUTAR',
            description: 'Ahora sí, echa el agua caliente en el hueco, cerca de la bombilla. No mojes toda la yerba. ¡Felicitaciones! Ya tienes tu primer mate.'
        }
    ]
  },
  {
    id: 'm29',
    title: 'Cocina un huevo frito (5 min)',
    description: 'Cocina un huevo frito sin que se queme ni se rompa la yema.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Dominar una receta simple te da un rápido retorno de inversión en confianza culinaria.',
    reward: 'Huevo en su punto',
    steps: [
      { 
        title: 'Paso 1: PREPARACIÓN',
        description: 'Poné una sartén a fuego medio con un chorrito de aceite. Rompé el huevo en un tazón pequeño primero para evitar que caigan cáscaras en la sartén.'
      },
      {
        title: 'Paso 2: COCCIÓN',
        description: 'Verté el huevo con cuidado en la sartén caliente. Cociná por 2-3 minutos hasta que la clara esté blanca y firme, pero la yema siga líquida.'
      },
      { 
        title: 'Paso 3: ¡A COMER!',
        description: 'Sácalo con una espátula y ponelo en un plato. ¡Listo! Buen provecho.'
      }
    ]
  },
  {
    id: 'm38',
    title: 'Piloto de abastecimiento (15 min)',
    description: 'Prepara un snack simple, cómelo y limpia lo que usaste. Un paso esencial para cuidar tu energía y autonomía.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Tomar control de tu alimentación, aunque sea con algo mínimo, es un acto de auto-cuidado fundamental. Te demuestra que sos capaz de proveer para vos mismo y nutrirte intencionalmente, rompiendo el ciclo de la pasividad.',
    reward: 'Autonomía en la cocina',
    steps: [
        {
            title: 'Paso 1: DEFINIR Y PREPARAR',
            description: 'Elige un snack simple que no requiera fuego (fruta, yogur, sándwich). Reúne los ingredientes y utensilios necesarios.\nAYUDA: No busques la perfección. Usa lo que tengas a mano.',
        },
        {
            title: 'Paso 2: PREPARAR Y CONSUMIR',
            description: 'Prepara tu snack y siéntate en un lugar tranquilo para comerlo. Presta atención a los sabores y a cómo te sientes al nutrirte.\nAYUDA: Es un momento solo para ti, mastica lentamente.',
        },
        {
            title: 'Paso 3: LIMPIEZA INMEDIATA',
            description: 'Apenas termines, lava, seca y guarda el plato y/o utensilio que usaste. ¡Misión completa sin cabos sueltos!',
        },
    ]
  },
  
  // Rescate de Territorio
  {
    id: 'm3_v2',
    title: 'Limpieza "Espejo Líquido"',
    description: 'Tomar control de un pequeño fragmento de tu entorno, realizando una micro-limpieza que genere una victoria visual y reduzca la ansiedad.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Ver la pileta más limpia cambia la sensación general del lugar. Es un impacto visual inmediato que le demuestra a tu cerebro que podés generar orden a partir del caos, un pequeño pero poderoso acto de control.',
    reward: 'Pileta despejada',
    alternativeMissionId: 'm43',
    steps: [
        {
            title: 'Paso 1: PREPARACIÓN',
            description: 'Elige solo 3 platos o utensilios de la pileta. No mires el resto. Ten a mano la esponja y el detergente.',
        },
        {
            title: 'Paso 2: EJECUCIÓN CONSCIENTE',
            description: 'Lava cada uno de los 3 objetos con concentración. Siente el agua y el jabón. Es un micro-ritual de limpieza.',
        },
        {
            title: 'Paso 3: FINALIZACIÓN Y VICTORIA',
            description: 'Colócalos en el secaplatos y observa la diferencia. Disfruta de la mini-victoria. ¡Buen trabajo!',
        }
    ]
  },
  {
    id: 'm4',
    title: 'Poner a lavar la ropa',
    description: 'Poner una tanda de ropa en el lavarropas y dejarla lista para tender. Un paso fundamental para tu autonomía.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Este es un paso fundamental para tu autonomía. Puede que siempre lo haya hecho alguien más, o que te parezca una tarea complicada. Estamos acá para desglosarlo y que lo hagas a tu ritmo.',
    reward: 'Ropa en proceso',
    steps: [
        {
            title: 'Paso 1: CARGAR EL LAVARROPAS',
            description: 'Reúne tu ropa sucia. Abre la puerta del lavarropas e introduce la ropa sin apretarla demasiado. Debe quedar espacio libre.'
        },
        {
            title: 'Paso 2: AÑADIR DETERGENTE',
            description: 'Busca el compartimento para el detergente y vierte una dosis mínima (una tapa suele ser suficiente). Menos es más.'
        },
        {
            title: 'Paso 3: SELECCIONAR E INICIAR',
            description: 'Cierra la puerta. Elige un ciclo simple como "Normal" o "Rápido" con agua fría. Presiona "Inicio". ¡La máquina hará el resto!'
        }
    ]
  },
   {
    id: 'm9',
    title: 'Hacé tu cama (2 min)',
    description: 'Estira las sábanas y el acolchado para empezar el día con un logro visible.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Es una "victoria de 2 minutos" que le ordena a tu cerebro que el día ya empezó. Es el primer paso para tomar control.',
    reward: 'Cama lista para empezar',
    steps: [
        { 
          title: 'Paso 1: ORGANIZAR',
          description: 'Sacudí la almohada y ponela en la cabecera.'
        },
        { 
          title: 'Paso 2: ESTIRAR',
          description: 'Tomá la sábana de arriba y estirala hasta cubrir la cama. Hacé lo mismo con el acolchado o la frazada.'
        },
        {
          title: 'Paso 3: ¡LISTO!',
          description: '¡Misión cumplida! Tu cuarto ya se ve un 50% más ordenado.'
        }
    ]
  },
  {
    id: 'm14',
    title: 'Ordena un solo lugar (7 min)',
    description: 'Elegí UNA sola cosa y ordenala (la silla con ropa, un estante del escritorio).',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Concentrarte en un solo punto de mejora evita que te sientas abrumado por el desorden general.',
    reward: 'Un rincón en orden',
     steps: [
        { 
          title: 'Paso 1: ELEGIR Y VACIAR',
          description: 'Elegí un único lugar pequeño y definido (una silla, un estante) y saca todo de ahí.'
        },
        {
          title: 'Paso 2: CLASIFICAR Y REORDENAR',
          description: 'Tirá lo que sea basura, guardá lo que tenga un lugar y dejá ahí solo lo que corresponda. ¡Listo!'
        }
    ]
  },
   {
    id: 'm17',
    title: 'Descongela el freezer',
    description: 'Descongelar el freezer sin causar una inundación. Una tarea que demuestra que podés manejar proyectos complejos.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Enfrentar una tarea doméstica grande te demuestra que podés manejar proyectos más complejos de lo que creés.',
    reward: 'Freezer como nuevo',
    steps: [
      {
        title: 'Paso 1: PREPARACIÓN Y VACIADO',
        description: '¡Importante! Desenchufa el freezer. Coloca toallas alrededor para el agua. Saca toda la comida y guárdala en la heladera o descártala.',
      },
      {
        title: 'Paso 2: EL DESHIELO PACIENTE',
        description: 'Deja la puerta abierta. Para acelerar, puedes poner recipientes con agua caliente adentro (¡nunca uses cuchillos ni secador de pelo!). Espera a que el hielo se derrita.',
      },
      {
        title: 'Paso 3: LIMPIEZA Y REACTIVACIÓN',
        description: 'Una vez sin hielo, limpia el interior con un trapo con agua y vinagre. Sécalo bien, volvé a enchufar el freezer y espera 15-20 minutos antes de guardar la comida de nuevo.',
      },
    ],
  },
  {
    id: 'm18',
    title: 'Saca la basura',
    description: 'Saca los residuos sin posponer para liberar espacio físico y mental.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Completar una tarea rutinaria de inmediato rompe el ciclo de la procrastinación y libera espacio mental.',
    reward: 'Espacio liberado',
    steps: [
        { 
          title: 'Paso 1: PREPARAR Y SACAR',
          description: 'Atá la bolsa de basura actual, sacala del tacho y llevala al contenedor de la calle.'
        },
        {
          title: 'Paso 2: REEMPLAZAR',
          description: 'Poné una bolsa nueva en el tacho. ¡Acción cumplida!'
        }
    ]
  },
  {
    id: 'm36',
    title: 'Despertar con propósito',
    description: 'Iniciar el día con una micro-victoria consciente, sentando las bases de la proactividad y el control personal.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Hacer estas tres cosas a propósito, incluso si ya las hacés, establece un tono de intención para tu día. Es una forma de decir "yo controlo el inicio de mi día". Es una victoria triple antes de empezar.',
    reward: 'Primer paso del día',
    steps: [
      {
        title: 'Paso 1: ACCIÓN INMEDIATA',
        description: 'Al sonar la alarma, sin pensarlo, siéntate en la cama y pon ambos pies en el piso. Es el primer acto de control del día.'
      },
      {
        title: 'Paso 2: RITUAL DE HIDRATACIÓN',
        description: 'Dirígete a tu "punto de hidratación" (un vaso de agua que dejaste listo anoche) y bebe el agua lentamente, sintiendo cómo tu cuerpo se activa.'
      },
      {
        title: 'Paso 3: CONEXIÓN Y VICTORIA',
        description: 'Nombra mentalmente UNA cosa por la que estés agradecido hoy (la que sea). ¡Misión cumplida! Tu día no empezó por accidente, empezó porque tú lo decidiste.'
      }
    ]
  },
  {
    id: 'm37',
    title: 'Despeje Estratégico (10 min)',
    description: 'Una secuencia para tomar control de tu entorno más inmediato y despejar tu mente.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Cuando el entorno físico está desordenado, la mente puede sentirse igual. Ordenar un espacio, por pequeño que sea, es una victoria visible e inmediata. Es como limpiar el "campo de batalla" de tu día a día, y te demuestra que SÍ podés influir y cambiar tu ambiente, un acto poderoso contra la sensación de estar "trabado".',
    reward: 'Un espacio con más calma',
    steps: [
        {
            title: 'Paso 1: ELEGIR Y VACIAR',
            description: 'Elige un área pequeña y definida (mesa de noche, un sector del escritorio). Retira completamente todos los objetos y ponlos en un lugar temporal cercano.',
        },
        {
            title: 'Paso 2: LIMPIAR Y CLASIFICAR',
            description: 'Limpia la superficie recién despejada. Luego, toma cada objeto y decide si se queda, se guarda en otro lado o se descarta. Sé honesto contigo mismo.',
        },
        {
            title: 'Paso 3: REORGANIZAR Y FINALIZAR',
            description: 'Vuelve a colocar solo los objetos que se quedan. Guarda o descarta el resto inmediatamente. ¡Disfruta de tu nuevo espacio ordenado!',
        },
    ]
  },
  {
    id: 'm39',
    title: 'Guardián de la vestimenta (20 min)',
    description: 'Organiza un área clave de tu autonomía personal, como un cajón de ropa.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Organizar tu ropa o un cajón personal es un acto de empoderamiento y auto-organización. Te permite visualizar tus pertenencias, tomar decisiones sobre ellas y mantener un orden que reduce el estrés diario y la "pasividad". Es un entrenamiento para la toma de decisiones y la auto-organización, habilidades vitales para la independencia. Cada prenda que doblas y guardas en su lugar es un pequeño paso hacia un "yo" más capaz y en control.',
    reward: 'Un cajón más claro',
    steps: [
        {
            title: 'Paso 1: ELEGIR Y VACIAR',
            description: 'Selecciona un solo cajón o una pila de ropa. Saca absolutamente todo y ponlo sobre tu cama o una mesa.',
        },
        {
            title: 'Paso 2: DECIDIR Y LIMPIAR',
            description: 'Toma cada prenda y decide: ¿la uso?, ¿me queda bien? Crea pilas para guardar, reubicar o descartar. Luego, limpia el interior del cajón vacío.',
        },
        {
            title: 'Paso 3: REORGANIZAR Y DOBLAR',
            description: 'Vuelve a colocar solo lo que decidiste guardar. Dóblalo de forma simple y ordenada. ¡Misión cumplida!',
        },
    ]
  },
  
  // Dominio Digital
  {
    id: 'm22',
    title: 'Envía un email de consulta',
    description: 'Envía una consulta a un servicio técnico o administrativo por email. Una forma de comunicación de baja presión.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Usar la comunicación escrita te permite pensar y editar, eliminando la presión de la respuesta inmediata.',
    reward: 'Consulta enviada',
    steps: [
      {
        title: 'Paso 1: PREPARAR EL EMAIL',
        description: 'Identifica un asunto claro (ej: "Consulta sobre [producto]"). Luego, copia y pega esta plantilla en el cuerpo del email: "Estimados, les escribo para consultar sobre [tu problema simple]. Mi número de cliente es [si aplica]. Agradezco su ayuda. Saludos, [Tu Nombre]".'
      },
      {
        title: 'Paso 2: REVISAR Y ENVIAR',
        description: 'Lee el email una vez más para asegurarte de que está claro. No tiene que ser perfecto. Dale al botón de Enviar. ¡Ya está fuera de tu cabeza y en manos de otros!'
      }
    ]
  },
  {
    id: 'm33',
    title: 'Crea tu primer CV',
    description: 'Crea tu primer CV usando una plantilla simple, aunque no tengas experiencia laboral.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Plasmar tus (pocas o muchas) experiencias en un documento te ayuda a ver tu propio valor y potencial.',
    reward: 'CV listo para la acción',
    steps: [
      {
        title: 'Paso 1: BUSCAR PLANTILLA Y DATOS',
        description: 'Abre Google Docs, Canva o Word y busca "plantilla de CV para principiantes". Elige una simple. Rellena tu nombre, email profesional, teléfono y ciudad.'
      },
      {
        title: 'Paso 2: EXPERIENCIA (¡TODO CUENTA!)',
        description: '¿Sin trabajo formal? No importa. Poné cualquier cosa: "Ayudante en negocio familiar", "Administrador de server de Discord". En "Educación", tu nivel de estudios. En "Habilidades", cosas reales: "Manejo de Office", "Inglés: Nivel Lectura".'
      },
      {
        title: 'Paso 3: GUARDAR Y CELEBRAR',
        description: 'Guardalo como PDF. No tiene que ser perfecto, solo existir. ¡Felicitaciones, acabás de crear una herramienta clave para tu futuro!'
      }
    ]
  },

  // Finanzas Ninja
  {
    id: 'm23',
    title: 'Revisa tu saldo bancario',
    description: 'Revisa tu saldo bancario online sin juzgar el número, solo para informarte.',
    type: 'interactive',
    category: 'finanzas-ninja',
    why: 'Mirar tus finanzas de frente, aunque sea por 5 segundos, disminuye el poder que la incertidumbre tiene sobre vos.',
    reward: 'Información es poder',
    steps: [
        { 
          title: 'Paso 1: INGRESAR',
          description: 'Abrí la app de tu banco o la página web e ingresá con tu usuario y contraseña.'
        },
        {
          title: 'Paso 2: OBSERVAR Y SALIR',
          description: 'Buscá el número de tu saldo. No tenés que hacer nada más. Solo miralo. Luego, cerrá la sesión. ¡Listo! Ya tenés más información que antes.'
        }
    ]
  },
  {
    id: 'm30',
    title: 'Paga una factura online',
    description: 'Paga una factura o servicio online por primera vez para tomar control de tus responsabilidades.',
    type: 'interactive',
    category: 'finanzas-ninja',
    why: 'Tomar control de una pequeña responsabilidad financiera reduce la ansiedad sobre "el dinero" y te empodera.',
    reward: 'Una cuenta menos',
    steps: [
      {
        title: 'Paso 1: IDENTIFICAR Y ESCANEAR',
        description: 'Encontrá una factura y buscá el código de pago. Abrí la app de tu banco o billetera virtual, andá a "Pagar Servicios" y escaneá el código de barras.'
      },
      {
        title: 'Paso 2: CONFIRMAR Y PAGAR',
        description: 'La app te mostrará el monto. Verificá que sea correcto y presioná "Pagar". ¡Felicitaciones! Acabás de resolver un trámite de adulto desde tu celular.'
      }
    ]
  },

  // Laboratorio Mental
  {
    id: 'm16',
    title: 'Apaga pantallas 1h antes de dormir',
    description: 'Desconéctate de las pantallas para conectar con tu descanso.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Regular tus ciclos de sueño es el hack de productividad más potente que existe.',
    reward: 'Preparando el descanso',
    steps: [
        { 
          title: 'Paso 1: PONER ALARMA Y DESCONECTAR',
          description: 'Poné una alarma 1 hora antes de tu hora de dormir habitual. Cuando suene, dejá el celular, la compu o la tele.'
        },
        { 
          title: 'Paso 2: ACTIVIDAD ANALÓGICA',
          description: 'Hacé algo que no involucre pantallas: leé un libro, escuchá música, ordená algo pequeño. Estás preparando a tu cerebro para un descanso de calidad.'
        }
    ]
  },
  {
    id: 'm26',
    title: 'Ejercicio de Anclaje 5-4-3-2-1',
    description: 'Una técnica rápida para calmar la ansiedad y volver al presente usando tus 5 sentidos.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Este ejercicio te saca de tu cabeza y te ancla en el presente, cortando de raíz el espiral de pensamientos ansiosos. Es una herramienta poderosa para manejar momentos de pánico o agobio.',
    reward: 'De vuelta al presente',
    steps: [
      {
        title: 'Paso 1: 5 COSAS QUE VES',
        description: 'Haz una pausa, respira hondo. Mira a tu alrededor y nombra mentalmente 5 objetos que puedas ver (una lapicera, una silla, tu mano, etc.).'
      },
      {
        title: 'Paso 2: 4 COSAS QUE SIENTES',
        description: 'Presta atención a tu sentido del tacto. Identifica 4 cosas que puedas sentir (la textura de tu ropa, la silla bajo tu peso, la temperatura del aire).'
      },
      {
        title: 'Paso 3: 3 SONIDOS QUE OYES',
        description: 'Cierra los ojos si te ayuda. Concéntrate en 3 sonidos que puedas oír (un auto a lo lejos, el silencio, tu propia respiración).'
      },
      {
        title: 'Paso 4: 2 OLORES Y 1 SABOR',
        description: 'Concéntrate en 2 cosas que puedas oler y 1 que puedas saborear. Puede ser el gusto de tu última comida. ¡Listo! Volviste al presente.'
      }
    ]
  },
  {
    id: 'm27',
    title: 'Escribe una preocupación y rómpela',
    description: 'Escribir una única preocupación en un papel y destruirlo para quitarle poder.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Externalizar un pensamiento le quita poder y el acto físico de destruirlo ofrece un cierre simbólico.',
    reward: 'Una carga menos',
    steps: [
        { 
          title: 'Paso 1: ESCRIBIR',
          description: 'Tomá un papel y un lápiz. Escribí una sola cosa que te esté preocupando mucho.'
        },
        {
          title: 'Paso 2: DESTRUIR',
          description: 'Leelo una vez. Después, rompelo en muchos pedazos y tiralos a la basura. ¡Carga liberada!'
        }
    ]
  },
  {
    id: 'm34',
    title: 'Detecta un disparador de ansiedad',
    description: 'Identificar UNA situación o pensamiento que te genera ansiedad y anotarlo para entenderlo.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Nombrar a tu "monstruo" le quita poder. Lo que se puede nombrar, se puede manejar.',
    reward: 'Algo más claro',
    steps: [
        { 
          title: 'Paso 1: IDENTIFICAR',
          description: 'Hacé una pausa y pensá: ¿qué te hizo sentir mal hoy o ayer? Sé específico. Ejemplo: "Pensar en llamar a X persona".'
        },
        {
          title: 'Paso 2: ANOTAR',
          description: 'Anotalo en un papel o en el celu. No tenés que hacer nada más. ¡Listo! Le pusiste nombre. Ya no es una nube abstracta.'
        }
    ]
  },
  {
    id: 'm35',
    title: 'Caminá 30 minutos',
    description: 'Caminar durante 30 minutos escuchando un podcast o música para despejar la mente.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'El movimiento físico es el antidepresivo natural más efectivo y accesible que existe.',
    reward: 'Mente despejada',
    steps: [
        {
          title: 'Paso 1: PREPARARSE',
          description: 'Ponete zapatillas cómodas y elegí un podcast o una lista de música que te guste.'
        },
        {
          title: 'Paso 2: MOVERSE',
          description: 'Salí a caminar. No importa la velocidad ni la distancia, solo movete por 30 minutos. ¡Listo! Generaste endorfinas y despejaste la mente.'
        }
    ]
  },
  {
    id: 'm41',
    title: 'Activación matutina',
    description: 'Establecer un micro-hábito de autocuidado para iniciar el día, rompiendo el ciclo de postergación con una acción física simple. Incluye beber agua.',
    type: 'interactive',
    category: 'laboratorio-mental',
    reward: 'Mañana en marcha',
    steps: [
        {
            title: 'Paso 1: PREPARACIÓN NOCTURNA',
            description: 'La noche anterior, deja un vaso de agua al lado de tu cama. Es un pequeño esfuerzo que facilita enormemente la misión de mañana.'
        },
        {
            title: 'Paso 2: ACCIÓN AL DESPERTAR',
            description: 'Al sonar la alarma, siéntate en el borde de la cama, levántate y toma el vaso de agua. Bébelo lentamente. ¡Victoria! Ganaste la primera batalla del día.'
        }
    ]
  },
  {
    id: 'm44',
    title: 'Gestión de energía',
    description: 'Interrumpir una actividad prolongada (como juegos o redes) con una pausa activa para recargar la atención y evitar la pasividad.',
    type: 'interactive',
    category: 'laboratorio-mental',
    reward: 'Pausa consciente',
    steps: [
        {
            title: 'Paso 1: DETENER LA ACTIVIDAD',
            description: 'Identifica una actividad de "absorción" que estés haciendo (jugar, ver series, etc.). Pon pausa o sal de la app solo por 90 segundos.'
        },
        {
            title: 'Paso 2: REALIZAR PAUSA ACTIVA',
            description: 'Realiza una "acción de desbloqueo" física y simple: levántate y estira, ve por un vaso de agua, mira por la ventana 30 segundos. La misión se cumple al haber tomado la pausa.'
        }
    ]
  },
  
  // MODO EXPLORADOR
  // Primeros Pasos
  {
    id: 'm11',
    title: 'Compra algo en el kiosco',
    description: 'Comprar 1 producto en un kiosco, una interacción de bajo riesgo.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Completar una transacción de bajo riesgo aumenta tu confianza para futuras interacciones.',
    reward: 'Misión de abastecimiento',
    steps: [
      {
        title: 'Paso 1: DEFINIR OBJETIVO Y PREPARARSE',
        description: 'Decide qué vas a comprar (una sola cosa). Agarra tu billetera, llaves y celular. Si te ayuda, ponte auriculares como "escudo social".',
      },
      {
        title: 'Paso 2: ENTRAR Y BUSCAR',
        description: 'Camina al kiosco. Entra y concéntrate solo en encontrar tu producto. Ignora todo lo demás.',
      },
      {
        title: 'Paso 3: PAGAR Y SALIR',
        description: 'Ve a la caja, pon el producto en el mostrador y paga. Si quieres, di "gracias". ¡Lo lograste! Saliste con tu botín.',
      },
    ],
  },
  {
    id: 'm19',
    title: 'Toma un transporte público',
    description: 'Sube al transporte público en una hora de poco tráfico para familiarizarte con el sistema.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Dominar una ruta de transporte público te da autonomía y expande tu mapa mental de la ciudad.',
    reward: 'Transporte dominado',
    steps: [
      {
        title: 'Paso 1: PLANIFICAR Y PREPARAR',
        description: 'Usa una app de mapas para ver qué bus te sirve y dónde está la parada. Elige una hora de poco tráfico. Ten a mano tu tarjeta de transporte con saldo.'
      },
      {
        title: 'Paso 2: IR A LA PARADA Y HACER LA SEÑAL',
        description: 'Camina hasta la parada. Cuando veas que tu bus se acerca, extiende el brazo para que el conductor sepa que debe parar.'
      },
      {
        title: 'Paso 3: SUBIR, PAGAR Y BAJAR',
        description: 'Sube con calma y apoya tu tarjeta en la máquina. Busca un asiento. Toca el timbre un poco antes de tu parada de destino para bajar. ¡Misión cumplida!'
      }
    ]
  },
  {
    id: 'm20',
    title: 'Llega a un lugar usando GPS',
    description: 'Llegar a un lugar desconocido, como un consultorio, usando el GPS de tu celular.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Aprender a confiar en una herramienta te quita la presión de tener que "saber" todo y reduce la ansiedad de perderte.',
    reward: 'Navegación exitosa',
    steps: [
      {
        title: 'Paso 1: INGRESAR DESTINO',
        description: 'Ten a mano la dirección exacta. Abrí tu app de mapas preferida (Google Maps, etc.) e introducila. Dale a "Iniciar".'
      },
      {
        title: 'Paso 2: SEGUIR LAS INDICACIONES',
        description: 'Confiá en la voz o en el mapa. No tenés que memorizar nada, solo seguir la siguiente indicación. Si te equivocás, la app recalculará automáticamente. ¡No hay error posible!'
      },
      {
        title: 'Paso 3: LLEGADA',
        description: 'La app te avisará cuando estés cerca. Prestá atención a los números de las calles o edificios para encontrar el lugar exacto. ¡Destino conquistado!'
      }
    ]
  },
  {
    id: 'm40',
    title: 'Horizonte Cero',
    description: 'Reconectar con el exterior sin presión, gestionando la ansiedad de salir. Pisa la calle solo para observar el entorno, sin ninguna otra meta.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Exponerte al entorno sin un objetivo reduce la ansiedad de "tener que hacer algo" afuera. Esta es una misión progresiva para reconectar a tu ritmo.',
    reward: 'Horizonte a la vista',
    steps: [
        {
            title: 'NIVEL 1: OBSERVACIÓN SEGURA',
            description: 'Ubícate en un lugar donde veas el exterior (ventana, balcón). Abre un poco para sentir el aire y nombra mentalmente 3 cosas que veas. Respira profundo.'
        },
        {
            title: 'NIVEL 2: UMBRAL DE LA PUERTA',
            description: 'Sal a la puerta de tu casa. Quédate ahí parado 1 minuto. Solo mira a tu alrededor. Siente el aire, los sonidos. Vuelve adentro cuando quieras.'
        },
        {
            title: 'NIVEL 3 (OPCIONAL): EXPEDICIÓN A LA ESQUINA',
            description: 'Si te sientes bien, camina hasta la esquina de tu calle y vuelve. No hay apuro. El objetivo es solo el trayecto. ¡Completar cualquier nivel es una victoria total!'
        }
    ]
  },

  // Interacciones Humanas
  {
    id: 'm8',
    title: 'Di "buen día" o "gracias"',
    description: 'Decir "buen día" o "gracias" en una tienda o al recibir algo. Una micro-interacción que activa la conexión.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Esta micro-interacción activa las neuronas espejo y te recuerda que eres parte de una comunidad.',
    reward: 'Un gesto amable',
    steps: [
        { 
          title: 'Paso 1: LA ACCIÓN',
          description: 'Al entrar a un negocio, decí "buen día" o "buenas tardes". Cuando te den algo (el vuelto, un producto), decí "gracias".'
        },
        {
          title: 'Paso 2: ¡LISTO!',
          description: 'No tenés que esperar respuesta ni hacer nada más. ¡Ya cumpliste tu misión de micro-conexión!'
        }
    ]
  },
  {
    id: 'm15',
    title: 'Reactivar Contacto (2 min)',
    description: 'Mándale un "hola, ¿cómo estás?" a alguien de confianza con quien no hablas hace rato.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Iniciar el contacto te pone en una posición activa en tus relaciones, en lugar de pasiva.',
    reward: 'Un puente extendido',
    steps: [
        { 
          title: 'Paso 1: ELEGIR Y ESCRIBIR',
          description: 'Elegí a un amigo o familiar con quien no hablás hace rato. Abrí su chat y escribí "Hola [nombre], ¿cómo andas? Hace mucho no hablamos."'
        },
        { 
          title: 'Paso 2: ENVIAR',
          description: 'Enviá el mensaje. No esperes respuesta inmediata. ¡Ya diste el paso y reactivaste un puente!'
        }
    ]
  },
  {
    id: 'm21',
    title: 'Pide un turno médico por teléfono',
    description: 'Pedir un turno médico por teléfono, superando la barrera de la llamada.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Superar la barrera de una llamada te entrena para interacciones más complejas y te da control sobre tu salud.',
    reward: 'Turno agendado',
    steps: [
      {
        title: 'Paso 1: PREPARAR INFORMACIÓN Y GUIÓN',
        description: 'Tené a mano tu DNI y datos de obra social. Usá este guión: "Hola, buen día. Quería pedir un turno con el/la doctor/a [Nombre] por [obra social]".'
      },
      {
        title: 'Paso 2: LLAMAR Y COMUNICAR',
        description: 'Respira hondo y llamá. Lee tu guión. La persona del otro lado hace esto todo el día, no estás molestando.'
      },
      {
        title: 'Paso 3: AGENDAR',
        description: 'Te darán opciones de fechas. Tené a mano dónde anotar. Si no entendés algo, pedí que te lo repitan. ¡Turno conquistado!'
      }
    ]
  },
  {
    id: 'm31',
    title: 'Di "no" a algo pequeño',
    description: 'Decir "no" a un pequeño pedido o invitación sin sentirte culpable. Un acto de autocuidado.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Aprender a poner límites es la habilidad de autocuidado más importante. Protege tu tiempo y energía.',
    reward: 'Tu tiempo es tuyo',
    steps: [
        { 
          title: 'Paso 1: LA PAUSA',
          description: 'La próxima vez que te pidan algo que no querés o no podés hacer, hacé una pausa antes de responder.'
        },
        {
          title: 'Paso 2: EL "NO" AMABLE',
          description: 'Decí una frase amable pero firme. Ej: "Gracias por pensar en mí, pero hoy no puedo." No des excusas largas. Un "no" simple es suficiente.'
        },
        {
          title: 'Paso 3: ¡VICTORIA!',
          description: '¡Listo! Defendiste tu tiempo y tu energía. Es una victoria enorme de autocuidado.'
        }
    ]
  },
  {
    id: 'm42',
    title: 'Desafío de micro-interacción',
    description: 'Realizar una interacción social mínima y controlada para reducir la ansiedad.',
    type: 'interactive',
    category: 'interacciones-humanas',
    reward: 'Conexión iniciada',
    steps: [
        {
            title: 'Paso 1: ELEGIR OBJETIVO Y FORMULAR PREGUNTA',
            description: 'Elige una persona de confianza (un tendero, un vecino). Piensa en una pregunta o saludo simple y neutral (ej: "¿Qué tal tu día?").'
        },
        {
            title: 'Paso 2: REALIZAR LA INTERACCIÓN',
            description: 'Respira antes de hablar. Haz la pregunta con voz clara. Tu objetivo es solo interactuar. Escucha la respuesta, no es necesario extender la conversación. ¡Lo lograste!'
        }
    ]
  },

  // Aventuras de Crecimiento
  {
    id: 'm28',
    title: 'Reintenta una acción que te costó',
    description: 'Reintentar una acción que salteaste o sentiste que te costó mucho en el pasado.',
    type: 'interactive',
    category: 'aventuras-de-crecimiento',
    why: 'La resiliencia no es no fallar, es volver a intentarlo. Esto fortalece tu auto-confianza más que 10 éxitos seguidos.',
    reward: 'Un paso más, a tu ritmo',
    steps: [
        { 
          title: 'Paso 1: IDENTIFICAR Y REEVALUAR',
          description: 'Recordá una acción que hayas evitado con "No hoy, gracias". Leela de nuevo. ¿Te sentís un 1% más preparado hoy?'
        },
        {
          title: 'Paso 2: INTENTAR EL PRIMER PASO',
          description: 'Intentá solo el primer paso de esa misión. Si sale bien, genial. Si no, no pasa nada. Cualquier avance, por mínimo que sea, es un éxito.'
        }
    ]
  },
  {
    id: 'm32',
    title: 'Ve al cine solo',
    description: 'Ir al cine a ver una película solo, como un acto de independencia.',
    type: 'interactive',
    category: 'aventuras-de-crecimiento',
    why: 'Disfrutar de tu propia compañía en un espacio público es un superpoder que aniquila la dependencia y el "qué dirán".',
    reward: 'Una cita con vos mismo/a',
    steps: [
        { 
          title: 'Paso 1: ELEGIR Y COMPRAR',
          description: 'Buscá la cartelera y elegí una película que VOS quieras ver. Comprá la entrada online para evitar la fila y la interacción.'
        },
        {
          title: 'Paso 2: IR Y DISFRUTAR',
          description: 'Llegá al cine, andá directo a tu asiento. El celular puede ser tu escudo si lo necesitás. Disfrutá la película. ¡Felicitaciones por tu cita con vos mismo!'
        }
    ]
  },
  {
    id: 'm43',
    title: 'Rincón de conquista',
    description: 'Organizar un espacio personal muy pequeño para sentir control sobre el entorno.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    reward: 'Un rincón en orden',
    steps: [
        {
            title: 'Paso 1: ELEGIR Y RETIRAR',
            description: 'Elige un área minúscula y muy específica (una esquina de tu mesa, un solo cajón). Retira solo 3 objetos de esa área.'
        },
        {
            title: 'Paso 2: DECIDIR Y REUBICAR',
            description: 'Decide el destino de cada uno (guardar, tirar, reubicar). Coloca uno de esos 3 objetos en su lugar definitivo. ¡Siente la satisfacción de la decisión!'
        }
    ]
  },
  {
    id: 'm44',
    title: 'Expedición Digital Segura',
    description: 'La curiosidad es un músculo. Hoy vamos a ejercitarlo de una forma segura y controlada, expandiendo un poco tu mundo sin salir de tu zona de confort.',
    type: 'interactive',
    category: 'aventuras-de-crecimiento',
    why: 'Explorar activamente un tema de interés, por pequeño que sea, te reconecta con el placer de aprender y te demuestra que puedes dirigir tu propia atención hacia algo nuevo.',
    reward: 'Nuevos conocimientos',
    steps: [
        { 
          title: 'Paso 1: Elige tu aventura',
          description: 'Elige un tema que te genere curiosidad, el que te parezca más fácil o interesante hoy.'
        },
        { 
          title: 'Paso 2: Sumérgete (por poco tiempo)',
          description: 'Abre YouTube o un buscador. Busca un video corto (5-10 min) o un artículo sobre ese tema. Pon un temporizador si te ayuda a no sentir que es una tarea infinita.'
        },
        { 
          title: 'Paso 3: Reflexión final',
          description: 'No hay respuesta correcta sobre lo que sentiste. El objetivo era solo explorar lo desconocido, y eso ya lo hiciste. ¡Un paso más!'
        },
    ]
  },
  {
    id: 'm45',
    title: 'Micro-fiesta privada (2 min)',
    description: 'Poné una canción que te guste y mové el cuerpo 30 segundos. No es ejercicio, es un desahogo para desbloquear la energía.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'A veces, el cuerpo necesita un sacudón para que la mente le siga. Esta es una forma de liberar tensión sin la presión de una rutina de ejercicio formal.',
    reward: 'Energía en movimiento',
    steps: [
        { 
          title: 'Paso 1: ELEGIR Y REPRODUCIR',
          description: 'Elegí una canción que te de energía o te traiga buenos recuerdos y ponela a un volumen que te guste.'
        },
        { 
          title: 'Paso 2: MOVER Y LIBERAR',
          description: 'Cerrá los ojos si querés y simplemente movete. Saltá, bailá, sacudí los brazos. No hay forma incorrecta de hacerlo. Cuando termine, respira hondo. ¡Cortaste la inercia!'
        }
    ]
  },
  {
    id: 'm46',
    title: 'Apadrina una planta (5 min)',
    description: 'Elige una planta que ya tengas o consigue una pequeña. Hoy tu misión es solo observarla y darle un poco de agua.',
    type: 'interactive',
    category: 'aventuras-de-crecimiento',
    why: 'Cuidar de otro ser vivo, incluso uno tan simple como una planta, crea un sentido de propósito y responsabilidad suave. Verla crecer es un recordatorio visual de tu constancia.',
    reward: 'Conexión natural',
    steps: [
        { 
          title: 'Paso 1: OBSERVAR',
          description: 'Acércate a tu planta. Si no tienes, puede ser una ramita en un vaso con agua. Observala de cerca: sus hojas, sus colores, su forma.'
        },
        { 
          title: 'Paso 2: CUIDAR',
          description: 'Tocá la tierra. ¿Está seca? Si es así, ponle un poco de agua. ¡Misión cumplida! Has establecido un pacto de cuidado.'
        }
    ]
  },
  {
    id: 'm47',
    title: 'Botón de Reinicio (3 min)',
    description: 'Un ritual rápido para resetear un mal momento o una mala racha durante el día. Te da permiso para empezar de nuevo, ahora mismo.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'No tienes que esperar a mañana para sentirte mejor. Este ritual corta el ciclo de un mal momento y te da una nueva oportunidad, reforzando tu capacidad de cambiar tu estado de ánimo.',
    reward: 'Día reseteado',
    steps: [
        { 
          title: 'Paso 1: CAMBIO FÍSICO',
          description: 'Andá al baño o a la cocina. Lavate las manos y la cara con agua fría. Si puedes, cámbiate la remera. Es un cambio simbólico de "piel".'
        },
        { 
          title: 'Paso 2: CAMBIO DE AIRE',
          description: 'Abrí una ventana y respira profundo tres veces. ¡Listo! Estás en un nuevo momento. El anterior ya pasó.'
        }
    ]
  },
  
  // Generic - Fallback
  {
    id: 'g1',
    title: 'Acción Sorpresa: Romper el Hielo',
    description: 'Bebe un vaso de agua ahora mismo.',
    type: 'interactive',
    category: 'generic',
    why: 'Es la forma más rápida de reactivar tu cuerpo y mente, una victoria instantánea para empezar.',
    steps: [
        { title: 'Levantate.'},
        { title: 'Andá a la cocina.'},
        { title: 'Servite un vaso de agua.'},
        { title: 'Tomátelo. ¡Listo!'}
    ]
  }
];

    
