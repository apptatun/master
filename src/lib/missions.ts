
import { Mission } from './types';

export const missions: Mission[] = [
  // MODO EN CASA
  // Supervivencia Culinaria
  {
    id: 'm1',
    title: 'Activar la Hornalla (3 min)',
    description: 'Activa la zona de cocción para hervir agua.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Dominar una herramienta básica te da una sensación de control sobre tu entorno.',
    reward: 'Maestro del Fuego Controlado',
    steps: [
      {
        title: 'Paso 1: Pedir ayuda es de cracks. ¡Y es obligatorio si no estás seguro!',
        description: 'Esta acción involucra fuego y gas. La seguridad no es negociable. Si es tu primera vez, no estás 100% seguro o te da un mínimo de ansiedad, es fundamental que pidas ayuda a un adulto. No es una opción, es el paso más inteligente y valiente que podés dar. Demostrar que te cuidás es una victoria enorme.',
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
    description: 'Prepara tu primer arroz.',
    type: 'interactive',
    category: 'supervivencia-culinaria',
    why: 'Aprender a preparar un alimento básico te da independencia y te conecta con un ritual universal.',
    reward: 'Sobreviviente del Arroz',
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
    reward: 'Cebador de Leyenda',
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
    type: 'checkbox',
    category: 'supervivencia-culinaria',
    why: 'Dominar una receta simple te da un rápido retorno de inversión en confianza culinaria.',
    reward: 'Domador de Yemas',
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
    reward: 'Chef de Autonomía Lv.1',
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
    title: '🧼 Lava 3 platos',
    description: 'Elegí una de estas tareas simples:',
    type: 'checkbox',
    category: 'rescate-de-territorio',
    why: 'Porque ayer arrancaste con vos, hoy te metés un poco con el entorno. Ver la pileta más limpia cambia la sensación general del lugar. Te da una mínima estructura sin exigirte demasiado.',
    reward: 'Guardián del Orden',
    steps: [
        { title: 'Opción principal: Lavá 3 cosas de la pileta (platos, vasos, cubiertos, lo que haya).' },
        { title: 'Alternativa 1 (si no hay nada para lavar): Limpiá la bacha o la mesada.' },
        { title: 'Alternativa 2 (si no hay nada para lavar): Secá la pileta con un repasador o papel.' },
        { title: 'Alternativa 3 (si no hay nada para lavar): Ordená un poco lo que esté limpio (cubiertos, vasos, platos).' }
    ]
  },
  {
    id: 'm4',
    title: 'Lavarropas (5 min)',
    description: 'Inicia un ciclo de lavado.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Automatizar una tarea de cuidado personal te libera energía mental para otras cosas.',
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
            description: '¡Acción cumplida! Tu ropa está limpia gracias a vos. El siguiente paso es colgarla, pero eso es otra acción. ¡Disfrutá tu victoria!'
        }
    ]
  },
   {
    id: 'm9',
    title: 'Hacé tu cama (2 min)',
    description: 'Estira las sábanas.',
    type: 'checkbox',
    category: 'rescate-de-territorio',
    why: 'Es una "victoria de 2 minutos" que le ordena a tu cerebro que el día ya empezó. Es el primer paso para tomar control.',
    reward: 'Ingeniero/a de Camas',
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
    description: 'Elegí UNA sola cosa y ordenala (la silla con ropa, el escritorio).',
    type: 'checkbox',
    category: 'rescate-de-territorio',
    why: 'Concentrarte en un solo punto de mejora evita que te sientas abrumado por el desorden general.',
    reward: 'Exterminador/a de Caos',
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
    description: 'Descongelar el freezer sin causar una inundación.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Enfrentar una tarea doméstica grande te demuestra que podés manejar proyectos más complejos de lo que creés.',
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
    description: 'Saca los residuos sin posponer.',
    type: 'checkbox',
    category: 'rescate-de-territorio',
    why: 'Completar una tarea rutinaria de inmediato rompe el ciclo de la procrastinación y libera espacio mental.',
    reward: 'Expulsor de Residuos',
    steps: [
        { title: 'Atá la bolsa de basura actual.'},
        { title: 'Sacala del tacho.'},
        { title: 'Llevala al contenedor de la calle.'},
        { title: 'Poné una bolsa nueva en el tacho. ¡Acción cumplida!'}
    ]
  },
  {
    id: 'm36',
    title: 'Tu Ritual de Inicio (7 min)',
    description: 'Una secuencia de tres tareas para empezar el día con intención.',
    type: 'checkbox',
    category: 'rescate-de-territorio',
    why: 'Hacer estas tres cosas a propósito, incluso si ya las hacés, establece un tono de intención para tu día. Es una forma de decir "yo controlo el inicio de mi día". Es una victoria triple antes de empezar.',
    reward: 'Arquitecto/a Matutino/a',
    steps: [
        { title: 'Tarea 1: Abrí la ventana y corré la cortina.' },
        { title: 'Tarea 2: Hacé la cama (no tiene que quedar perfecta, solo estirada).' },
        { title: 'Tarea 3: Lavate la cara y los dientes.' }
    ]
  },
  {
    id: 'm37',
    title: 'Despeje Estratégico (10 min)',
    description: 'Una secuencia para tomar control de tu entorno más inmediato.',
    type: 'interactive',
    category: 'rescate-de-territorio',
    why: 'Cuando el entorno físico está desordenado, la mente puede sentirse igual. Ordenar un espacio, por pequeño que sea, es una victoria visible e inmediata. Es como limpiar el "campo de batalla" de tu día a día, y te demuestra que SÍ podés influir y cambiar tu ambiente, un acto poderoso contra la sensación de estar "trabado".',
    reward: 'Arquitecto de Mini-Espacios Lv.1',
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
            description: 'Toma cada objeto que sacaste y decide: ¿Lo necesito o lo uso regularmente? ¿Me trae alegría o es funcional? Crea tres pilas: "Va de nuevo aquí", "Va a otro lado (guardar)", "Descartar/Donar".\n¿Dudas mucho? [PELIGRO/SOLUCIÓN]: "Si lo dudas, probablemente no lo necesitas. Sé brutalmente honesto contigo mismo. Menos es más en este ritual."',
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
    reward: 'Estratega Textil Lv.1',
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
    description: 'Enviar una consulta a un servicio técnico o administrativo.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Usar la comunicación escrita te permite pensar y editar, eliminando la presión de la respuesta inmediata.',
    reward: 'Embajador/a Digital',
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
    description: 'Crear tu primer CV usando una plantilla simple.',
    type: 'interactive',
    category: 'dominio-digital',
    why: 'Plasmar tus (pocas o muchas) experiencias en un documento te ayuda a ver tu propio valor y potencial.',
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
    description: 'Revisar tu saldo bancario online.',
    type: 'checkbox',
    category: 'finanzas-ninja',
    why: 'Mirar tus finanzas de frente, aunque sea por 5 segundos, disminuye el poder que la incertidumbre tiene sobre vos.',
    reward: 'Vigilante Financiero',
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
    description: 'Paga una factura o servicio online por primera vez.',
    type: 'interactive',
    category: 'finanzas-ninja',
    why: 'Tomar control de una pequeña responsabilidad financiera reduce la ansiedad sobre "el dinero" y te empodera.',
    reward: 'Ninja de Pagos',
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
    description: 'Levantate e hidrátate.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Romper el ciclo de postergación con una acción física simple entrena tu "músculo" de la voluntad.',
    reward: 'Activador/a Corporal',
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
    description: 'Bebe un vaso de agua al despertar.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Es la forma más rápida de reactivar tu cuerpo y mente después de horas de ayuno.',
    reward: 'Maestro/a de la Hidratación',
    steps: [
        { title: 'Tené un vaso de agua al lado de tu cama desde la noche anterior.'},
        { title: 'Al despertar, antes de mirar el celular, tómalo.'},
        { title: 'Bébelo tranquilamente. ¡Listo! Tu cuerpo te lo agradece.'}
    ]
  },
  {
    id: 'm12',
    title: 'Cepíllate los dientes (3 min)',
    description: 'Cepíllate los dientes.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Es un acto de autocuidado básico que envía una señal a tu cerebro de que mereces atención y limpieza.',
    reward: 'Guardián de la Sonrisa',
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
    description: 'Ponte ropa limpia, aunque no salgas.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Cambiar el pijama por ropa te ayuda a diferenciar entre descanso y actividad, preparando tu mente para el día.',
    reward: 'Estratega de Vestuario',
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
    description: 'Desconéctate para conectar con tu descanso.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Regular tus ciclos de sueño es el hack de productividad más potente que existe.',
    reward: 'Guardián del Sueño',
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
    description: 'Ducha express de 5 minutos usando un timer.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Completar una tarea básica con un límite de tiempo te energiza y te da una sensación de eficiencia.',
    reward: 'Velocista Acuático/a',
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
    description: 'Ingerir 1 fruta y 1 vaso de agua.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Es el combo de energía y cuidado más simple y efectivo que existe. Le estás dando a tu cuerpo combustible de calidad.',
    reward: 'Nutricionista de Combate',
    steps: [
        { title: 'Elegí cualquier fruta que tengas a mano.'},
        { title: 'Lavala bien.'},
        { title: 'Cométela.'},
        { title: 'Tomá un vaso de agua. ¡Cuerpo recargado!'}
    ]
  },
  {
    id: 'm26',
    title: 'Ejercicio de anclaje (5 sonidos, 3 colores)',
    description: 'Nombrar 5 sonidos que oyes y 3 colores que ves.',
    type: 'interactive',
    category: 'laboratorio-mental',
    why: 'Este ejercicio te saca de tu cabeza y te ancla en el presente, cortando de raíz el espiral de ansiedad.',
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
    title: 'Escribe una preocupación y rómpela',
    description: 'Escribir una única preocupación en un papel y romperlo.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Externalizar un pensamiento le quita poder y el acto físico de destruirlo ofrece un cierre simbólico.',
    reward: 'Destructor/a de Preocupaciones',
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
    description: 'Identificar UNA situación o pensamiento que te genera ansiedad y anotarlo.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'Nombrar a tu "monstruo" le quita poder. Lo que se puede nombrar, se puede manejar.',
    reward: 'Detective Emocional',
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
    description: 'Caminar durante 30 minutos escuchando un podcast o música.',
    type: 'checkbox',
    category: 'laboratorio-mental',
    why: 'El movimiento físico es el antidepresivo natural más efectivo y accesible que existe.',
    reward: 'Explorador/a Urbano/a',
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
    description: 'Pisa la calle solo para observar.',
    type: 'checkbox',
    category: 'primeros-pasos',
    why: 'Exponerte al entorno sin un objetivo reduce la ansiedad de "tener que hacer algo" afuera.',
    reward: 'Vigilante de Vereda',
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
    description: 'Comprar 1 producto sin voz temblorosa.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Completar una transacción de bajo riesgo aumenta tu confianza para futuras interacciones.',
    reward: 'Comerciante Intrépido/a',
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
    description: 'Sube al transporte público en una hora de poco tráfico.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Dominar una ruta de transporte público te da autonomía y expande tu mapa mental de la ciudad.',
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
    description: 'Llegar a un consultorio usando GPS.',
    type: 'interactive',
    category: 'primeros-pasos',
    why: 'Aprender a confiar en una herramienta te quita la presión de tener que "saber" todo y reduce la ansiedad de perderte.',
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

  // Interacciones Humanas
  {
    id: 'm8',
    title: 'Di "buen día" o "gracias"',
    description: 'Decir "buen día" o "gracias".',
    type: 'checkbox',
    category: 'interacciones-humanas',
    why: 'Esta micro-interacción activa las neuronas espejo y te recuerda que eres parte de una comunidad.',
    reward: 'Diplomático/a Social',
    steps: [
        { title: 'Al entrar a un negocio, decí "buen día" o "buenas tardes".'},
        { title: 'Cuando te den algo, decí "gracias".'},
        { title: 'No tenés que esperar respuesta. ¡Ya cumpliste!'}
    ]
  },
  {
    id: 'm15',
    title: 'Reactivar Contacto (2 min)',
    description: 'Mándale un "hola, ¿cómo estás?" a alguien de confianza.',
    type: 'checkbox',
    category: 'interacciones-humanas',
    why: 'Iniciar el contacto te pone en una posición activa en tus relaciones, en lugar de pasiva.',
    reward: 'Reconector/a Social',
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
    description: 'Pedir un turno médico por teléfono.',
    type: 'interactive',
    category: 'interacciones-humanas',
    why: 'Superar la barrera de una llamada te entrena para interacciones más complejas y te da control sobre tu salud.',
    reward: 'Coordinador/a de Salud',
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
    type: 'checkbox',
    category: 'interacciones-humanas',
    why: 'Aprender a poner límites es la habilidad de autocuidado más importante. Protege tu tiempo y energía.',
    reward: 'Defensor/a de Límites',
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
    description: 'Reintentar una acción que salteaste o sentiste que te costó.',
    type: 'checkbox',
    category: 'aventuras-de-crecimiento',
    why: 'La resiliencia no es no fallar, es volver a intentarlo. Esto fortalece tu auto-confianza más que 10 éxitos seguidos.',
    reward: 'Fénix Resiliente',
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
    description: 'Ir al cine a ver una película solo.',
    type: 'checkbox',
    category: 'aventuras-de-crecimiento',
    why: 'Disfrutar de tu propia compañía en un espacio público es un superpoder que aniquila la dependencia y el "qué dirán".',
    reward: 'Cinéfilo/a Independiente',
    steps: [
        { title: 'Buscá la cartelera y elegí una película que VOS quieras ver.'},
        { title: 'Comprá la entrada online para evitar la fila.'},
        { title: 'Llegá al cine, andá directo a tu asiento. El celular es tu escudo si lo necesitás.'},
        { title: 'Disfrutá la película. ¡Felicitaciones por tu cita con vos mismo!'}
    ]
  },
  
  // Generic - Fallback
  {
    id: 'g1',
    title: 'Acción Sorpresa: Romper el Hielo',
    description: 'Bebe un vaso de agua ahora mismo.',
    type: 'checkbox',
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
