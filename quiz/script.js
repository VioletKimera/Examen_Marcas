// Preguntas 

// He puesto que la respuesta correcta es SIEMPRE la primera del array, luego en el código se mezclan todas las opciones y guarda la posición de la respuesta correcta.
const preguntas = [
  {
    pregunta: "¿Cuál de estos youkai vive en la montaña youkai?",
    opciones: ["Kanako", "Nazrin", "Urumi", "Ringo"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Cómo se llama el mundo donde ocurre la saga Touhou?",
    opciones: ["Gensokyo", "Hyrule", "Yamatai", "Makai"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Cuál de estos youkai NO es un tengu?",
    opciones: ["Saki", "Aya", "Megumu", "Momiji"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Cuál de estas yokai tiene poderes de hielo?",
    opciones: ["Cirno", "Patchouli", "Youmu", "Rumia"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Quién es la sirvienta de la Mansión Escarlata?",
    opciones: ["Sakuya Izayoi", "Remilia Scarlet", "Flandre Scarlet", "Keine Kamishirasawa"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Quién controla las llamas del Infierno de los fuegos ardientes?",
    opciones: ["Utsuho", "Mokou", "Ichirin", "Eika"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Para que algo o álguien aparezca de forma repentina en Gensokyo tiene que...?",
    opciones: ["Ser olvidado en el mundo real", "Ser destruido en el mundo real", "Ser sacrificado en el mundo real", "Ser exorcitado en el mundo real"],
    indiceCorrecto: 0
  },
  {
    pregunta: "Un autobús llega a la Mansión Escarlata y en el se suben tres yokais, luego va a Hakugyokurou se baja un yokai y se sube media persona, por último, el autobús pasa por la casa de los Yakumo y se bajan dos entidades. ¿Cuántos pasajeros quedan? ",
    opciones: ["Cero, ¡No hay autobuses en Gensokyo!", "¡Solo queda media persona de pasajero!", "¡Queda un pasarejo!", "¡Quedan dos yokai!"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Quién es la líder de los espíritu bestia de águila en el Reino Animal?",
    opciones: ["Yuuma", "Saki", "Momoyo", "Chimata"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Quién de estos yokai se le conoce como 'La yokai de las grietas'?",
    opciones: ["Yukari", "Okina", "Alice", "Byakuren"],
    indiceCorrecto: 0
  },
  {
    pregunta: "¿Cual de estas yokai NO es una oni?",
    opciones: ["Seija", "Yuugi", "Suika", "Kasen"],
    indiceCorrecto: 0
  },
];

// Contadores
let puntaje = 0; //Puntos
let indicePregunta = 0; //Cuenta las preguntas que han pasado

// Datos jugador
let nombreJugador = "";
let edadJugador = "";

// Aleatoriza las preguntas para que salgan de forma random
const preguntasMezcladas = preguntas.sort(() => Math.random() - 0.5);

// Función para iniciar el juego tras pedir datos
function iniciarJuego() {
  const inputNombre = document.getElementById("nombre-jugador");
  const inputEdad = document.getElementById("edad-jugador");

  nombreJugador = inputNombre.value.trim();
  edadJugador = inputEdad.value.trim();

  if (nombreJugador === "" || edadJugador === "") {
    alert("Por favor, introduce tu nombre y edad.");
    return;
  }
 //Transforma la edad a número por que no consigo compararlo de otra forma
  const edadNum = parseInt(edadJugador, 10);
  if (isNaN(edadNum) || edadNum <= 0) {
    alert("Por favor, introduce una edad válida.");
    return;
  }

  // Variedad según la edad y tal, detalle extra si se pone una edad fuera de lo normal
  if (edadNum < 18) {
    alert("¿Eres menor de edad? Las hadas no suelen ser muy inteligentes, buena suerte.");
  } else if (edadNum < 100) {
    alert("¡Eres mayor de edad! Aunque no tan viejo como un Yokai, ¡Disfruta el quiz!");
  } else
  alert("Espera... ¿Eres un Yokai? No necesitas suerte, que te diviertas.")

  // Oculta la pantalla de inicio y muestra el quiz
  document.getElementById("pantalla-inicio").classList.add("oculto");
  document.getElementById("contenedor-quiz").classList.remove("oculto");

  mostrarPregunta();
}

function mostrarPregunta() { // muestra las preguntas, es la función tocha
  if (indicePregunta >= preguntasMezcladas.length) { // Para el juego cuando no hay más preguntas y muestra la puntuación
    finalizarJuego();
    return;
  }

  // Muestra el menú de juego, la pregunta, opciones y el resultado. 
  const q = preguntasMezcladas[indicePregunta];
  const preguntaDiv = document.getElementById("texto-pregunta");
  const opcionesDiv = document.getElementById("contenedor-opciones");
  const resultadoDiv = document.getElementById("mensaje-resultado");

  // Para "limpiar" el menú de juego
  preguntaDiv.textContent = q.pregunta;
  opcionesDiv.innerHTML = "";
  resultadoDiv.textContent = "";

  // Para ordenar de forma random las respuestas
  const opcionesMezcladas = q.opciones.map((texto, i) => ({ texto, i }));
  opcionesMezcladas.sort(() => Math.random() - 0.5);

  let posicionCorrecta = -1; // guarda la posición de la respuesta correcta una vez se ha aleatorizado

  // El for recorre todas las opciones para encontrar la correcta
  for (let i = 0; i < opcionesMezcladas.length; i++) {
    if (opcionesMezcladas[i].i === q.indiceCorrecto) {
      posicionCorrecta = i;
    }

    // Los botones
    const boton = document.createElement("button");
    boton.textContent = opcionesMezcladas[i].texto;

    // Esto hace que cuando se seleccione se compruebe si has acertado o no
    boton.onclick = () => {
      if (i === posicionCorrecta) {
        resultadoDiv.textContent = "✨ ¡Correcto! ✨";
        puntaje++; // suma punto
      } else {
        resultadoDiv.textContent = `💥 Incorrecto. La respuesta correcta era: ${q.opciones[q.indiceCorrecto]}`;
      }

      indicePregunta++;
      setTimeout(mostrarPregunta, 2000);
    };

    const divOpcion = document.createElement("div");
    divOpcion.className = "opcion";
    divOpcion.appendChild(boton);
    opcionesDiv.appendChild(divOpcion);
  }
}

function finalizarJuego() {
  // Oculta el quiz y muestra ranking
  document.getElementById("contenedor-quiz").classList.add("oculto");

  // Guardar en ranking localStorage 
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  ranking.push({ nombre: nombreJugador, edad: edadJugador, puntaje: puntaje });
  ranking.sort((a, b) => b.puntaje - a.puntaje);
  localStorage.setItem("ranking", JSON.stringify(ranking));

  mostrarRanking(ranking);
}

// muestra el ranking
function mostrarRanking(ranking) {
  const listaRanking = document.getElementById("lista-ranking");
  listaRanking.innerHTML = "";

  ranking.forEach((jugador, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${jugador.nombre} (Edad: ${jugador.edad}) — ${jugador.puntaje} pts`;
    listaRanking.appendChild(li);
  });

  document.getElementById("seccion-ranking").classList.remove("oculto");
}
