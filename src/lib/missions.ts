
import { Mission } from './types';

export const missions: Mission[] = [
  // MODO EN CASA
  // Supervivencia Culinaria
  {
    id: 'm1',
    title: 'OPERACIÓN HORNALLA',
    description: 'Misión de Activación de Zona de Cocción. Objetivo: hervir agua en una olla de forma segura.',
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
        title: 'Paso 2: GIRAR PERILLA',
        description: 'Para encender, usualmente debes presionar la perilla hacia adentro y luego girarla en sentido anti-horario. Si no gira, no fuerces y aborta la misión.',
      },
      {
        title: 'Paso 3: ACCIONAR ENCENDEDOR',
        description: 'Si es automático, oirás un "click-click-click" y verás la llama. Si es manual, acerca con mucho cuidado un fósforo o encendedor. Si te da miedo, pide ayuda a un adulto.',
      },
      {
        title: 'Paso 4: AJUSTAR LLAMA',
        description: 'Una llama azul es óptima. Si es amarilla o naranja, podría haber un problema (PELIGRO). Apaga todo, ventila y avisa a un adulto. Si es azul, ajústala a un nivel medio.',
      },
      {
        title: 'Paso 5: COLOCAR OLLA CON AGUA',
        description: 'Llena una olla con agua (dejando 3/4 de espacio libre) y colócala con cuidado sobre la hornalla encendida. ¡Misión cumplida! Has dominado el fuego.',
      },
    ],
  },
  {
    id: 'm2',
    title: 'Arroz sin engrudo (20 min)',
    description: 'Prepara tu primer arroz.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Aprender a preparar un alimento básico te da independencia y te conecta con un ritual universal.',
    reward: 'Tu primer arroz',
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
    title: 'Prepara tu primer mate (5 min)',
    description: 'Prepara tu primer mate.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Participar en un ritual cultural te conecta con otros y te ofrece un momento de pausa y reflexión.',
    reward: 'Compañero del mate',
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
    id: 'm29',
    title: 'Cocina un huevo frito (5 min)',
    description: 'Cocina un huevo frito sin que se queme ni se rompa la yema.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Dominar una receta simple te da un rápido retorno de inversión en confianza culinaria.',
    reward: 'Huevo en su punto',
    steps: [
      { title: 'Poné una sartén a fuego medio con un chorrito de aceite.' },
      { title: 'Rompé el huevo en un tazón pequeño primero (así no caen cáscaras).' },
      { title: 'Verté el huevo con cuidado en la sartén caliente.' },
      { title: 'Cociná 2-3 minutos hasta que la clara esté blanca y firme. La yema debe quedar líquida.' },
      { title: 'Sácalo con una espátula. ¡Listo!' }
    ]
  },
  {
    id: 'm38',
    title: 'PILOTO DE ABASTECIMIENTO (15 min)',
    description: 'Un paso esencial para cuidar tu energía y autonomía. Prepara un snack simple, cómelo y limpia lo que usaste.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Tomar control de tu alimentación, aunque sea con algo mínimo, es un acto de auto-cuidado fundamental. Te demuestra que sos capaz de proveer para vos mismo y nutrirte intencionalmente, rompiendo el ciclo de la pasividad.',
    reward: 'Autonomía en la cocina',
    steps: [
        {
            title: 'DEFINIR OBJETIVO NUTRICIONAL',
            description: 'Elige un snack o comida sencilla que no requiera fuego, como: una manzana, un yogur, una tostada con algo, un sándwich simple.\n¿No se te ocurre nada? [AYUDA EXTRA]: "Piensa en lo más fácil y rápido que tengas a mano. Una fruta es un buen punto de partida."',
        },
        {
            title: 'INVENTARIO DE RECURSOS',
            description: 'Identifica y reúne todos los ingredientes y los pocos utensilios necesarios (ej: si es una manzana, solo necesitas la manzana y quizá un cuchillo; si es un sándwich, pan, queso, jamón, un cuchillo y un plato).\n¿No encuentras algo? [SOLUCIÓN]: "No busques la perfección. Usa lo que tengas. Si te falta algo, elige otra opción de snack."',
        },
        {
            title: 'PROTOCOLO DE PREPARACIÓN (MÉTODO SIMPLE)',
            description: 'Prepara tu snack/comida siguiendo los pasos básicos:\n- Si es fruta: lava y corta (o come directo).\n- Si es tostada: tuesta el pan, unta algo.\n- Si es sándwich: pon los ingredientes entre panes.\n¿Te sientes nervioso con el cuchillo? [AYUDA EXTRA]: "Si es necesario, puedes saltar el paso de cortar y elegir algo que no lo necesite. Tu seguridad es lo primero."',
        },
        {
            title: 'CONSUMO CONSCIENTE',
            description: 'Siéntate en un lugar tranquilo (tu habitación, el sillón). Disfruta tu creación. Presta atención a los sabores, las texturas y cómo te sientes al nutrirte.\n¿Te cuesta concentrarte? [AYUDA EXTRA]: "No es un examen. Simplemente mastica lentamente y nota el sabor. Es un momento solo para ti."',
        },
        {
            title: 'LOGÍSTICA DE LIMPIEZA',
            description: 'Lava el plato y/o utensilio que usaste inmediatamente después de terminar de comer. Sécalo y guárdalo.\n¿Te da pereza? [AYN]: "Un minuto ahora te ahorra un dolor de cabeza después. Es parte de la victoria. ¡No dejes cabos sueltos!"',
        },
    ]
  },
  
  // Rescate de Territorio
  {
    id: 'm3_v2',
    title: 'OPERACIÓN "ESPEJO LÍQUIDO"',
    description: 'Tomar control de un pequeño fragmento de tu entorno, realizando una micro-limpieza que genere una victoria visual y reduzca la ansiedad.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Ver la pileta más limpia cambia la sensación general del lugar. Es un impacto visual inmediato que le demuestra a tu cerebro que podés generar orden a partir del caos, un pequeño pero poderoso acto de control.',
    reward: 'Pileta despejada',
    alternativeMissionId: 'm43',
    steps: [
        {
            title: 'IDENTIFICAR TUS "OBJETIVOS PRIORITARIOS" (3 PLATOS/UTENSILIOS CUALESQUIERA)',
            description: 'No mires el resto de la pileta, solo concéntrate en esos 3. ¿Los tienes claramente identificados?\n[AYUDA EXTRA]: "Solo 3. Los que estén más accesibles. No necesitas un arsenal, solo un foco láser."',
        },
        {
            title: 'REUNIR TU "KIT DE LIMPIEZA" (ESPONJA, DETERGENTE, AGUA)',
            description: '¿Tienes todo a mano antes de empezar la operación?\n[SOLUCIÓN]: "Organiza tu estación de trabajo primero. Un \'arsenal\' a mano facilita el ataque."',
        },
        {
            title: 'EJECUTAR LA "TÉCNICA DE REFLEJO" (LAVAR CADA UNO CON CONCENTRACIÓN)',
            description: 'Siente el agua, el jabón, la textura del objeto. No es una tarea, es un micro-ritual de limpieza consciente.',
        },
        {
            title: 'ASEGURAR EL "ÁREA DE SECADO" (COLOCARLOS EN EL SECAPLATOS/SECADORA)',
            description: 'Verifica que no queden rastros de "enemigo mugre". La misión se cumple al verlos limpios y en su lugar.',
        },
        {
            title: 'INSPECCIÓN FINAL',
            description: 'Observa la diferencia. Disfruta de la mini-victoria. ¡Buen trabajo!',
        }
    ]
  },
  {
    id: 'm4',
    title: 'OPERACIÓN LAVARROPAS',
    description: 'Protocolo de Higiene Textil. Objetivo: poner una tanda de ropa en el lavarropas y dejarla lista para tender.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Este es un paso fundamental para tu autonomía. Puede que siempre lo haya hecho alguien más, o que te parezca una tarea complicada. Estamos acá para desglosarlo y que lo hagas a tu ritmo.',
    reward: 'Ropa en proceso',
    steps: [
        {
            title: 'Paso 1: RECOPILAR SUMINISTROS',
            description: 'Reúne tu ropa sucia en una canasta o bolsa. Ten a mano el detergente. Si vas a separar por color (opcional), hazlo ahora.'
        },
        {
            title: 'Paso 2: CARGAR EL LAVARROPAS',
            description: 'Abre la puerta del lavarropas. Introduce la ropa sin apretarla demasiado. Debe quedar espacio para que el agua circule.'
        },
        {
            title: 'Paso 3: AÑADIR DETERGENTE',
            description: 'Busca el compartimento para el detergente. Vierte una dosis mínima (una tapa suele ser suficiente). Menos es más.'
        },
        {
            title: 'Paso 4: SELECCIONAR CICLO',
            description: 'Cierra la puerta. Elige un ciclo simple como "Normal", "Diario" o "Rápido". Usa temperatura fría (o 30°) para no dañar la ropa.'
        },
        {
            title: 'Paso 5: INICIAR EL CICLO',
            description: 'Presiona el botón de "Inicio". Oirás cómo empieza a llenarse de agua. ¡La máquina hará el resto! Tu misión ha terminado con éxito.'
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
        { title: 'Sacudí la almohada y ponela en la cabecera.'},
        { title: 'Tomá la sábana de arriba y estirala hasta cubrir la cama.'},
        { title: 'Hacé lo mismo con el acolchado o la frazada.'},
        { title: '¡Listo! Tu cuarto ya se ve un 50% más ordenado.'}
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
        { title: 'Elegí un único lugar pequeño: una silla, una mesa, un estante.'},
        { title: 'Sacá todo de ahí.'},
        { title: 'Tirá lo que es basura.'},
        { title: 'Guardá lo que tiene un lugar.'},
        { title: 'Dejá ahí solo lo que debe estar ahí. ¡Listo!'}
    ]
  },
   {
    id: 'm17',
    title: 'Descongela el freezer',
    description: 'Descongelar el freezer sin causar una inundación ni usar un secador de pelo.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Enfrentar una tarea doméstica grande te demuestra que podés manejar proyectos más complejos de lo que creés.',
    reward: 'Un rincón en orden',
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
    title: 'Saca la basura',
    description: 'Saca los residuos sin posponer para liberar espacio físico y mental.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Completar una tarea rutinaria de inmediato rompe el ciclo de la procrastinación y libera espacio mental.',
    reward: 'Espacio liberado',
    steps: [
        { title: 'Atá la bolsa de basura actual.'},
        { title: 'Sacala del tacho.'},
        { title: 'Llevala al contenedor de la calle.'},
        { title: 'Poné una bolsa nueva en el tacho. ¡Acción cumplida!'}
    ]
  },
  {
    id: 'm36',
    title: 'PROTOCOLO "DESPERTAR CON PROPÓSITO"',
    description: 'Iniciar el día con una micro-victoria consciente, sentando las bases de la proactividad y el control personal.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Hacer estas tres cosas a propósito, incluso si ya las hacés, establece un tono de intención para tu día. Es una forma de decir "yo controlo el inicio de mi día". Es una victoria triple antes de empezar.',
    reward: 'Primer paso del día',
    steps: [
      {
        title: 'DESACTIVAR LA ALARMA Y PONER AMBOS PIES EN EL PISO',
        description: 'No pienses, solo reacciona al sonido. ¿Lo hiciste al primer intento?\n[SOLUCIÓN]: "No importa. Intenta concentrarte en el sonido y la sensación de tus pies en el suelo. Cada intento cuenta."'
      },
      {
        title: 'DIRIGIRTE AL "PUNTO DE HIDRATACIÓN" (VASO DE AGUA CERCA)',
        description: '¿Tu vaso de agua estaba listo desde anoche?\n[AYUDA EXTRA]: "Prepara un vaso de agua junto a tu cama cada noche. Es tu primer combustible táctico para mañana, un micro-paso que facilita la misión."'
      },
      {
        title: 'BEBER EL AGUA LENTAMENTE, SINTIENDO LA HIDRATACIÓN',
        description: 'Concéntrate en la sensación del agua al entrar en tu cuerpo. Este es tu ritual personal de inicio de operación.'
      },
      {
        title: 'NOMBRAR MENTALMENTE 1 COSA POR LA QUE ESTÉS AGRADECIDO HOY (LA QUE SEA)',
        description: 'Puede ser algo simple: la almohada, el silencio, la música que escuchaste. Sin juicio, solo observación.'
      },
      {
        title: 'INSPECCIÓN FINAL',
        description: '¡Misión cumplida! Tu día no empezó por accidente, empezó porque tú lo decidiste. Siente esa pequeña pero poderosa sensación de control.'
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
            title: 'IDENTIFICAR ZONA DE IMPACTO',
            description: 'Elige un área pequeña y definida que te genere algo de resistencia o desorden (ej: tu mesa de noche, un sector de tu escritorio, la parte superior de un mueble pequeño).\nSi no sabes → [AYUDA EXTRA]: "No busques el caos total. Apunta a un \'mini-territorio\' que te parezca manejable. La victoria en lo pequeño suma."',
        },
        {
            title: 'EVACUACIÓN TOTAL',
            description: 'Retira completamente todos los objetos de la superficie elegida. Ponlos en un lugar temporal cercano (ej: el suelo al lado, otra silla).\n¿Cuesta sacarlo todo? [SOLUCIÓN]: "No pienses, solo saca. Es una evacuación temporal. Volverá lo que sea esencial."',
        },
        {
            title: 'LIMPIAR LA SUPERFICIE',
            description: 'Con un paño, toallita, o incluso un papel, limpia el polvo o la suciedad de la superficie recién despejada.\n¿Sin paño? [AYUDA EXTRA]: "Usa un trozo de papel de cocina o un calcetín viejo. La perfección no es el objetivo, la acción sí."',
        },
        {
            title: 'CLASIFICAR OBJETOS (DECISIÓN CRÍTICA)',
            description: 'Toma cada objeto que sacaste y decide: ¿Lo necesito o lo uso regularmente? ¿Me trae alegría o es funcional? Crea tres pilas: "Va de nuevo aquí", "Va a otro lado (guardar)", "Descartar/Donar".\n¿Dudas mucho? [PELIGRO/SOLUCIÓN]: "Si lo dudas más de 5 segundos, probablemente no lo necesitas. Sé brutalmente honesto contigo mismo. Menos es más en este ritual."',
        },
        {
            title: 'REORGANIZACIÓN ESTRATÉGICA',
            description: 'Vuelve a colocar solo los objetos de la pila "Va de nuevo aquí" en el espacio ordenado. Lleva los objetos de la pila "Va a otro lado" a su lugar correcto. Deshazte inmediatamente de los objetos de la pila "Descartar/Donar".\n¿Te sientes abrumado por la pila de \'Descartar\'? [AYUDA EXTRA]: "Solo déjala junto al tacho de basura o la puerta. El simple hecho de separarlos ya es una victoria. Mañana te encargas de la \'eliminación final\'."',
        },
    ]
  },
  {
    id: 'm39',
    title: 'GUARDIÁN DE LA VESTIMENTA (20 min)',
    description: 'Una secuencia para organizar un área clave de tu autonomía personal.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Organizar tu ropa o un cajón personal es un acto de empoderamiento y auto-organización. Te permite visualizar tus pertenencias, tomar decisiones sobre ellas y mantener un orden que reduce el estrés diario y la "pasividad". Es un entrenamiento para la toma de decisiones y la auto-organización, habilidades vitales para la independencia. Cada prenda que doblas y guardas en su lugar es un pequeño paso hacia un "yo" más capaz y en control.',
    reward: 'Un cajón más claro',
    steps: [
        {
            title: 'DELIMITAR ZONA DE ORDEN',
            description: 'Selecciona un cajón (de ropa interior, remeras, etc.), una pila de ropa suelta o una sección pequeña de tu armario. No intentes ordenar todo el armario de golpe.\n¿Cuesta elegir? [AYUDA EXTRA]: "Empieza por el cajón que más uses o que más \'ruido\' visual te genere. Una \'mini-batalla\' para ganar la \'guerra del orden\'."',
        },
        {
            title: 'EVACUACIÓN TOTAL',
            description: 'Saca absolutamente todo el contenido y ponlo en una superficie plana y limpia (tu cama, una mesa). Deja el cajón/espacio completamente vacío.\n¿Te sientes abrumado? [SOLUCIÓN]: "No mires la pila, concéntrate en el espacio vacío que acabas de crear. ¡Eso es un lienzo en blanco para tu éxito!"',
        },
        {
            title: 'DECISIÓN CRÍTICA (PRENDA POR PRENDA)',
            description: 'Toma cada prenda/objeto. Pregúntate: "¿Lo usé en los últimos 6 meses? ¿Me queda bien? ¿Me sirve? ¿Me gusta?"\nCrea tres pilas en tu superficie: "Guardar aquí", "Reubicar", "Descartar".\n¿Dudas en descartar? [PELIGRO/SOLUCIÓN]: "Si dudas más de 5 segundos, probablemente no lo necesitas. La regla de los 6 meses es tu aliada. Sé honesto contigo mismo."',
        },
        {
            title: 'LIMPIEZA DE BASE',
            description: 'Con un paño, toallita, o un papel, limpia el interior del cajón o el espacio vacío que has delimitado.\n¿No tienes productos de limpieza? [AYUDA EXTRA]: "Con un trapo húmedo es suficiente. El objetivo es eliminar el polvo y la suciedad superficial. ¡Un lienzo limpio para tu obra maestra!"',
        },
        {
            title: 'REORGANIZACIÓN ESTRATÉGICA',
            description: 'Vuelve a colocar solo los ítems de la pila "Guardar aquí". Dóblalos o acomódalos de forma lógica para ti (por color, tipo de prenda).\nLleva los objetos de la pila "Reubicar" a su lugar correcto (al cesto de ropa sucia, a otro cajón, etc.).\nDeshazte inmediatamente de los objetos de la pila "Descartar".\n¿Te cuesta doblar? [AYUDA EXTRA]: "No necesitas ser un experto. Un doblez simple y apilado es suficiente. La clave es que no formen un caos visual."',
        },
    ]
  },
  
  // Dominio Digital
  {
    id: 'm22',
    title: 'Envía un email de consulta',
    description: 'Enviar una consulta a un servicio técnico o administrativo por email.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Usar la comunicación escrita te permite pensar y editar, eliminando la presión de la respuesta inmediata.',
    reward: 'Consulta enviada',
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
        description: '¡Acción cumplida! Delegaste el problema. Ahora la respuesta está en su cancha. Diste un paso importante para resolver algo que te trababa.'
      }
    ]
  },
  {
    id: 'm33',
    title: 'Crea tu primer CV',
    description: 'Crear tu primer CV usando una plantilla simple, aunque no tengas experiencia laboral.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Plasmar tus (pocas o muchas) experiencias en un documento te ayuda a ver tu propio valor y potencial.',
    reward: 'Consulta enviada',
    steps: [
      {
        title: 'Paso 1: Buscá una plantilla',
        description: 'No empieces de cero. Entrá a Google Docs, Canva o Word y buscá "plantilla de CV para principiantes". Elegí la más limpia y simple.'
      },
      {
        title: 'Paso 2: Datos de Contacto',
        description: 'Rellená lo fácil: Tu nombre completo, un email (que suene profesional), tu número de teléfono y tu ciudad. No es necesaria la dirección exacta.'
      },
      {
        title: 'Paso 3: El Resumen (Opcional pero potente)',
        description: 'Escribí 2 o 3 líneas sobre vos. Ejemplo: "Estudiante proactivo con ganas de aprender sobre [área de interés]. Busco una primera oportunidad para aplicar mis habilidades de [menciona algo en lo que seas bueno, aunque sea un juego]".'
      },
      {
        title: 'Paso 4: Experiencia (¡Todo cuenta!)',
        description: '¿No tenés trabajo formal? No importa. Poné cualquier cosa: "Ayudante en el negocio familiar", "Administrador de un server de Discord", "Vendedor de artículos por internet". Lo que sea.'
      },
      {
        title: 'Paso 5: Educación y Habilidades',
        description: 'Poné tu nivel de estudios (secundario completo, etc.) y en habilidades, poné cosas reales: "Manejo de Office/Google Docs", "Inglés: Nivel Lectura", "Buena comunicación en entornos digitales".'
      },
      {
        title: 'Paso 6: ¡Tenés un CV!',
        description: 'Guardalo como PDF. No tiene que ser perfecto, solo existir. ¡Felicitaciones, acabás de crear una herramienta clave para tu futuro!'
      }
    ]
  },

  // Finanzas Ninja
  {
    id: 'm23',
    title: 'Revisa tu saldo bancario',
    description: 'Revisar tu saldo bancario online sin juzgar el número, solo para informarte.',
    type: 'interactive',
    category: 'finanzas-ninja',
    why: 'Mirar tus finanzas de frente, aunque sea por 5 segundos, disminuye el poder que la incertidumbre tiene sobre vos.',
    reward: 'Información es poder',
    steps: [
        { title: 'Abrí la app de tu banco o la página web.'},
        { title: 'Ingresá con tu usuario y contraseña.'},
        { title: 'Buscá el número de tu saldo. No tenés que hacer nada más.'},
        { title: 'Cerrá la sesión. ¡Listo! Ya tenés más información que antes.'}
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
        title: 'Paso 1: La Factura',
        description: 'Encontrá una factura que necesites pagar. Puede ser de tu celular, un servicio, etc. Buscá el código de pago electrónico o el código de barras.'
      },
      {
        title: 'Paso 2: La App de Pago',
        description: 'Abrí la app de tu banco o una billetera virtual (como Mercado Pago). Buscá la sección de "Pagar Servicios".'
      },
      {
        title: 'Paso 3: Escanear o Ingresar',
        description: 'La app te dará la opción de escanear el código de barras con tu cámara o de ingresar el número manualmente. Elegí la que te sea más fácil.'
      },
      {
        title: 'Paso 4: Confirmar y Pagar',
        description: 'La app reconocerá la factura y te mostrará el monto. Verificá que sea correcto y presioná "Pagar".'
      },
      {
        title: 'Paso 5: ¡Deuda Aniquilada!',
        description: '¡Felicitaciones! Acabás de resolver un trámite de adulto desde tu celular. Guardá el comprobante digital y disfrutá de tu nueva autonomía.'
      }
    ]
  },

  // Laboratorio Mental
  {
    id: 'm5',
    title: 'Levántate e hidrátate (1 min)',
    description: 'Levantate y bebe un vaso de agua al sonar la alarma. Sin posponer.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Romper el ciclo de postergación con una acción física simple entrena tu "músculo" de la voluntad.',
    reward: 'Cuerpo en movimiento',
    steps: [
        { title: 'Cuando suene la alarma, sentate en la cama.'},
        { title: 'Poné los dos pies en el suelo.'},
        { title: 'Levantate. No pienses, solo hacelo.'},
        { title: 'Caminá a la cocina y tomá un vaso de agua. ¡Ganaste!'}
    ]
  },
  {
    id: 'm6',
    title: 'Bebe un vaso de agua (1 min)',
    description: 'Bebe un vaso de agua al despertar, antes de tocar el celular.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Es la forma más rápida de reactivar tu cuerpo y mente después de horas de ayuno.',
    reward: 'Primer cuidado del día',
    steps: [
        { title: 'Tené un vaso de agua al lado de tu cama desde la noche anterior.'},
        { title: 'Al despertar, antes de mirar el celular, tómalo.'},
        { title: 'Bébelo tranquilamente. ¡Listo! Tu cuerpo te lo agradece.'}
    ]
  },
  {
    id: 'm12',
    title: 'Cepíllate los dientes (3 min)',
    description: 'Cepíllate los dientes como un acto de autocuidado consciente.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Es un acto de autocuidado básico que envía una señal a tu cerebro de que mereces atención y limpieza.',
    reward: 'Un momento para vos',
    steps: [
        { title: 'Poné pasta en el cepillo.'},
        { title: 'Cepillá los dientes de arriba y abajo por fuera.'},
        { title: 'Cepillá por dentro y las muelas.'},
        { title: 'Enjuagate bien. ¡Sonrisa lista!'}
    ]
  },
  {
    id: 'm13',
    title: 'Ponte ropa limpia (2 min)',
    description: 'Ponte ropa limpia, aunque no salgas de casa, para cambiar tu estado mental.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Cambiar el pijama por ropa te ayuda a diferenciar entre descanso y actividad, preparando tu mente para el día.',
    reward: 'Listo/a para el día',
    steps: [
        { title: 'Sacate el pijama.'},
        { title: 'Elegí una remera y un pantalón limpios.'},
        { title: 'Ponételos. No tiene que ser ropa de calle, solo limpia.'},
        { title: '¡Listo! Ya cambiaste el chip del modo "dormir" al modo "estar".'}
    ]
  },
  {
    id: 'm16',
    title: 'Apaga pantallas 1h antes de dormir',
    description: 'Desconéctate de las pantallas para conectar con tu descanso.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Regular tus ciclos de sueño es el hack de productividad más potente que existe.',
    reward: 'Preparando el descanso',
    steps: [
        { title: 'Poné una alarma 1 hora antes de tu hora de dormir habitual.'},
        { title: 'Cuando suene, dejá el celular, la compu o la tele.'},
        { title: 'Hacé algo analógico: leé un libro, escuchá música, ordená algo.'},
        { title: '¡Listo! Estás preparando a tu cerebro para un descanso de calidad.'}
    ]
  },
  {
    id: 'm24',
    title: 'Ducha express de 5 minutos',
    description: 'Ducha express de 5 minutos usando un timer para energizarte.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Completar una tarea básica con un límite de tiempo te energiza y te da una sensación de eficiencia.',
    reward: 'Energía renovada',
    steps: [
        { title: 'Poné un cronómetro de 5 minutos en tu celular.'},
        { title: 'Metete a la ducha y dale play.'},
        { title: 'Mojate, enjabonate, enjuagate. ¡A buen ritmo!'},
        { title: 'Salí antes de que suene la alarma. ¡Victoria express!'}
    ]
  },
  {
    id: 'm25',
    title: 'Come 1 fruta y 1 vaso de agua',
    description: 'Ingerir 1 fruta y 1 vaso de agua como un combo de energía rápida.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Es el combo de energía y cuidado más simple y efectivo que existe. Le estás dando a tu cuerpo combustible de calidad.',
    reward: 'Combustible para el cuerpo',
    steps: [
        { title: 'Elegí cualquier fruta que tengas a mano.'},
        { title: 'Lavala bien.'},
        { title: 'Cométela.'},
        { title: 'Tomá un vaso de agua. ¡Cuerpo recargado!'}
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
        title: 'Paso 1: Hacé una pausa y respira',
        description: 'No importa dónde estés. Detente un momento. Toma una respiración profunda y lenta para empezar.'
      },
      {
        title: 'Paso 2: Observa 5 cosas',
        description: 'Mira a tu alrededor y nombra mentalmente 5 objetos que puedas ver. Pueden ser cualquier cosa: una lapicera, una silla, una mancha en la pared, una nube, tu propia mano. Solo obsérvalos.'
      },
      {
        title: 'Paso 3: Siente 4 cosas',
        description: 'Ahora, presta atención a tu sentido del tacto. Identifica 4 cosas que puedas sentir. Por ejemplo: la textura de tu ropa, la silla bajo tu peso, la temperatura del aire, tus pies en el suelo.'
      },
      {
        title: 'Paso 4: Escucha 3 cosas',
        description: 'Cierra los ojos si te ayuda. Concéntrate en 3 sonidos que puedas oír. Puede ser el sonido de un auto a lo lejos, el zumbido de un aparato electrónico, tu propia respiración.'
      },
      {
        title: 'Paso 5: Huele 2 cosas',
        description: 'Concéntrate en tu olfato. ¿Qué puedes oler? Quizás el aroma del café, el perfume de alguien, o simplemente el olor neutro de la habitación. Si no hueles nada, intenta recordar un olor que te guste.'
      },
       {
        title: 'Paso 6: Saborea 1 cosa',
        description: 'Finalmente, presta atención a tu sentido del gusto. Nombra 1 cosa que puedas saborear. Puede ser el gusto que quedó de tu última comida, o simplemente la sensación de tu propia boca. ¡Listo! Volviste al presente.'
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
        { title: 'Tomá un papel y un lápiz.'},
        { title: 'Escribí una sola cosa que te esté preocupando mucho.'},
        { title: 'Leelo una vez. Después, rompelo en muchos pedazos.'},
        { title: 'Tirá los pedazos a la basura. ¡Carga liberada!'}
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
        { title: 'Hacé una pausa y pensá: ¿qué te hizo sentir mal hoy o ayer?'},
        { title: 'Identificá una sola cosa. Sé específico. Ejemplo: "Pensar en llamar a X persona".'},
        { title: 'Anotalo en un papel o en el celu. No tenés que hacer nada más.'},
        { title: '¡Listo! Le pusiste nombre. Ya no es una nube abstracta.'}
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
        { title: 'Ponete zapatillas cómodas.'},
        { title: 'Elegí un podcast o una lista de música que te guste.'},
        { title: 'Salí a caminar. No importa la velocidad ni la distancia, solo movete por 30 minutos.'},
        { title: '¡Listo! Generaste endorfinas y despejaste la mente.'}
    ]
  },
  
  // MODO EXPLORADOR
  // Primeros Pasos
  {
    id: 'm7',
    title: 'Sal a la puerta (5 min)',
    description: 'Pisa la calle solo para observar el entorno, sin ninguna otra meta.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Exponerte al entorno sin un objetivo reduce la ansiedad de "tener que hacer algo" afuera.',
    reward: 'Primer contacto con el exterior',
    steps: [
        { title: 'Salí a la puerta de tu casa.'},
        { title: 'Quedate ahí parado 1 minuto. Solo mirá a tu alrededor.'},
        { title: 'Caminá hasta la esquina. Volvé.'},
        { title: '¡Listo! Te expusiste al mundo exterior y sobreviviste. ¡Es un gran paso!'}
    ]
  },
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
        title: 'Paso 1: El Objetivo',
        description: 'Vamos a definir qué vas a comprar. Una sola cosa simple. ¿Una gaseosa? ¿Unas galletitas? Tener un objetivo claro reduce la incertidumbre. Pensalo y cuando estés listo, seguimos.',
      },
      {
        title: 'Paso 2: La Preparación',
        description: 'Ok, ahora lo básico para salir al mundo: agarrá tu billetera o el medio de pago, las llaves y tu celular.\n\nUn truco: si te ayuda a bajar la ansiedad, ponete auriculares. No hace falta ni que pongas música, a veces solo tenerlos puestos actúa como un escudo social. ¿Todo listo?',
      },
      {
        title: 'Paso 3: La Entrada Triunfal (a tu ritmo)',
        description: 'Caminá hacia el kiosco. Al llegar a la puerta, respira hondo. Tu única misión ahora es encontrar tu objetivo. Ignorá todo lo demás. No tenés que saludar si no querés, solo entrá.',
      },
      {
        title: 'Paso 4: Modo Búsqueda',
        description: 'Una vez adentro, activate en "modo búsqueda". Recorré el lugar con la vista hasta encontrar tu producto. Concéntrate solo en las etiquetas y los estantes. Ya casi lo tenés.',
      },
      {
        title: 'Paso 5: La Transacción (¡El Final Boss!)',
        description: 'Andá a la caja. Poné el producto en el mostrador. La persona te va a decir el precio. Vos solo tenés que pagar. No es necesario decir nada más que "gracias" si te sentís cómodo. Es un intercambio, no una audición.',
      },
      {
        title: 'Paso 6: ¡Escape Exitoso!',
        description: '¡Lo lograste! Saliste con tu botín. Te enfrentaste al mundo exterior en una acción comercial y ganaste. Tomate un segundo para sentir esta victoria. ¡Excelente trabajo!',
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
    reward: 'Misión de abastecimiento',
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
        description: 'Toca el timbre un poco antes de tu parada de destino. Baja con calma. ¡Acción cumplida! Has conquistado el transporte público.'
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
    reward: 'Misión de abastecimiento',
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
        title: 'Paso 4: La La Llegada',
        description: 'La app te avisará cuando estés cerca. Prestá atención a los números de las calles o a los nombres de los edificios para encontrar el lugar exacto.'
      },
      {
        title: 'Paso 5: ¡Destino Conquistado!',
        description: 'Llegaste. No solo al consultorio, sino a un nuevo nivel de autonomía. ¡Excelente trabajo de navegación!'
      }
    ]
  },

  // Interacciones Humanas
  {
    id: 'm8',
    title: 'Di "buen día" o "gracias"',
    description: 'Decir "buen día" o "gracias" en una tienda o al recibir algo.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Esta micro-interacción activa las neuronas espejo y te recuerda que eres parte de una comunidad.',
    reward: 'Un gesto amable',
    steps: [
        { title: 'Al entrar a un negocio, decí "buen día" o "buenas tardes".'},
        { title: 'Cuando te den algo, decí "gracias".'},
        { title: 'No tenés que esperar respuesta. ¡Ya cumpliste!'}
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
        { title: 'Elegí a un amigo o familiar con quien no hablás hace rato.'},
        { title: 'Abrí su chat.'},
        { title: 'Escribí "Hola [nombre], ¿cómo andas? Hace mucho no hablamos."'},
        { title: 'Enviá. No esperes respuesta inmediata. ¡Ya diste el paso!'}
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
    id: 'm31',
    title: 'Di "no" a algo pequeño',
    description: 'Decir "no" a un pequeño pedido o invitación sin sentirte culpable.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Aprender a poner límites es la habilidad de autocuidado más importante. Protege tu tiempo y energía.',
    reward: 'Tu tiempo es tuyo',
    steps: [
        { title: 'La próxima vez que te pidan algo que no querés hacer, hacé una pausa.'},
        { title: 'Decí una frase amable pero firme. Ej: "Gracias por pensar en mí, pero hoy no puedo."'},
        { title: 'No des excusas largas. Un "no" simple es suficiente.'},
        { title: '¡Listo! Defendiste tu tiempo y tu energía. Es una victoria enorme.'}
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
        { title: 'Recordá una acción que hayas evitado con "No hoy, gracias".'},
        { title: 'Leela de nuevo. ¿Te sentís un 1% más preparado hoy?'},
        { title: 'Intentá solo el primer paso. Si sale bien, seguí. Si no, no pasa nada.'},
        { title: 'Cualquier avance, por mínimo que sea, es un éxito.'}
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
        { title: 'Buscá la cartelera y elegí una película que VOS quieras ver.'},
        { title: 'Comprá la entrada online para evitar la fila.'},
        { title: 'Llegá al cine, andá directo a tu asiento. El celular es tu escudo si lo necesitás.'},
        { title: 'Disfrutá la película. ¡Felicitaciones por tu cita con vos mismo!'}
    ]
  },
  {
    id: 'm40',
    title: 'OPERACIÓN "HORIZONTE CERO"',
    description: 'Reconectar con el exterior sin presión, gestionando la ansiedad de salir.',
    type: 'interactive',
    category: 'primeros-pasos',
    reward: 'Horizonte a la vista',
    steps: [
        {
            title: 'UBICAR TU PUNTO DE OBSERVACIÓN SEGURO (VENTANA/BALCÓN/PUERTA CON LUZ)',
            description: '[AYUDA EXTRA]: "Encuentra el lugar más cercano donde veas el exterior, aunque sea una rendija."'
        },
        {
            title: 'ABRIR O ACERCARTE LO SUFICIENTE PARA SENTIR EL AIRE/VER EL CIELO',
            description: '[SOLUCIÓN]: "Abre un poco más o quédate un segundo más concentrado."'
        },
        {
            title: 'IDENTIFICAR Y NOMBRAR MENTALMENTE 3 COSAS EN EL EXTERIOR (CUALQUIERA)',
            description: 'Ej: un árbol, una nube, un auto rojo, una persona lejana. No hay juicio, solo observación.'
        },
        {
            title: 'RESPIRAR PROFUNDO 3 VECES INHALANDO AIRE FRESCO',
            description: 'Concéntrate en la sensación del aire al entrar y salir de tu cuerpo.'
        }
    ]
  },
  {
    id: 'm41',
    title: 'PROTOCOLO "ACTIVACIÓN MATUTINA"',
    description: 'Establecer un micro-hábito de autocuidado para iniciar el día.',
    type: 'interactive',
    category: 'laboratorio-mental',
    reward: 'Mañana en marcha',
    steps: [
        {
            title: 'PREPARAR TU "KIT DE DESPERTAR" (VASO DE AGUA AL LADO DE LA CAMA)',
            description: '[AYUDA EXTRA]: "Hazlo ahora, es un paso clave para mañana. Pequeño esfuerzo, gran impacto."'
        },
        {
            title: 'AL SONAR LA ALARMA, PONER UN PIE FUERA DE LA CAMA',
            description: 'No pienses, solo reacciona al sonido.'
        },
        {
            title: 'LEVANTARTE Y TOMAR EL VASO DE AGUA',
            description: '[SOLUCIÓN]: "Intenta visualizarlo la noche anterior. Un pequeño truco."'
        },
        {
            title: 'BEBER EL AGUA LENTAMENTE, SINTIENDO LA HIDRATACIÓN',
            description: 'Conéctate con la sensación. Este es tu combustible.'
        }
    ]
  },
  {
    id: 'm42',
    title: 'DESAFÍO "MICRO-INTERACCIÓN"',
    description: 'Realizar una interacción social mínima y controlada para reducir la ansiedad.',
    type: 'interactive',
    category: 'interacciones-humanas',
    reward: 'Conexión iniciada',
    steps: [
        {
            title: 'ELEGIR UN "OBJETIVO SEGURO" (PERSONA CONFIABLE O CONOCIDA)',
            description: '[AYUDA EXTRA]: "Piensa en un tendero, un vecino, alguien con quien no haya mucha presión."'
        },
        {
            title: 'FORMULAR UNA PREGUNTA O SALUDO SIMPLE Y NEUTRAL',
            description: 'Ej: "¿Cómo estás?", "¿Qué tal tu día?", "Hola." (Si es online: un emoji de saludo 👋).'
        },
        {
            title: 'REALIZAR LA PREGUNTA/SALUDO (EN PERSONA: MIRADA BREVE, VOZ CLARA)',
            description: 'Respira antes de hablar. Es solo un momento.'
        },
        {
            title: 'ESCUCHAR LA RESPUESTA (NO ES NECESARIO EXTENDER LA CONVERSACIÓN)',
            description: 'Tu objetivo era interactuar. Lo lograste.'
        }
    ]
  },
  {
    id: 'm43',
    title: 'OPERACIÓN "RINCÓN DE CONQUISTA"',
    description: 'Organizar un espacio personal muy pequeño para sentir control sobre el entorno.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    reward: 'Un rincón en orden',
    steps: [
        {
            title: 'ELEGIR UN ÁREA MINÚSCULA Y MUY ESPECÍFICA',
            description: 'Ej: una esquina de tu mesa de noche, un solo cajón, un estante pequeño, el espacio debajo de tu cama.'
        },
        {
            title: 'RETIRAR 3 OBJETOS CUALESQUIERA DE ESA ÁREA',
            description: 'Solo 3. No más. No los juzgues, solo muévelos.'
        },
        {
            title: 'DECIDIR EL DESTINO DE CADA UNO (GUARDAR/TIRAR/REUBICAR)',
            description: '[AYUDA EXTRA]: "Si no lo usaste en 6 meses y no tiene valor sentimental, considera una \'caja de decisión\' para revisar en 1 mes."'
        },
        {
            title: 'COLOCAR UNO DE ESOS 3 OBJETOS EN SU LUGAR DEFINITIVO O EN SU NUEVO DESTINO',
            description: 'Solo uno. Siente la satisfacción de la decisión.'
        }
    ]
  },
  {
    id: 'm44',
    title: 'PROTOCOLO "GESTIÓN DE ENERGÍA"',
    description: 'Interrumpir una actividad prolongada (como juegos o redes) con una pausa activa para recargar la atención y evitar la pasividad.',
    type: 'interactive',
    category: 'laboratorio-mental',
    reward: 'Pausa consciente',
    steps: [
        {
            title: 'IDENTIFICAR UNA ACTIVIDAD DE "ABSORCIÓN" QUE ESTÉS HACIENDO',
            description: 'Ej: Jugar videojuegos, ver series, navegar en el móvil.'
        },
        {
            title: 'PONER PAUSA AL JUEGO O SALIR DE LA APLICACIÓN (SÓLO POR 90 SEGUNDOS)',
            description: 'Es una pausa táctica, no un adiós.'
        },
        {
            title: 'REALIZAR UNA "ACCIÓN DE DESBLOQUEO" FÍSICA Y SIMPLE',
            description: 'Ej: Levantarte y estirar los brazos, ir por un vaso de agua, mirar por la ventana 30 segundos, dar 5 pasos por la habitación.'
        },
        {
            title: 'VOLVER A LA ACTIVIDAD SI LO DESEAS (O NO, LA ELECCIÓN ES TUYA)',
            description: 'La misión está cumplida al haber tomado la pausa consciente.'
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
