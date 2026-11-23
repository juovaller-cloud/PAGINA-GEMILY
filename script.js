/* =====================================================================
   LECTURA CRÍTICA PARA LA CONCIENCIA SOCIAL Y LA INCLUSIÓN
   Todo el contenido está en CONFIG y MODULES. Edita textos, preguntas,
   opciones y explicaciones sin tocar el resto del código.
   Tipos de paso: read (lectura) · quiz (preguntas) · write (escritura) · self (autoevaluación)
   En cada pregunta: q = enunciado, o = opciones, c = índice de la correcta (desde 0),
   why = explicación, better = cómo mejorar el argumento (opcional).
   Las respuestas se guardan solo en la memoria de la página: nada se envía a internet.
   ===================================================================== */
const CONFIG = {
  titulo: "Lectura crítica para la conciencia social y la inclusión",
  subtitulo: "Lenguaje, migración y construcción de conciencia social",
  pregunta: "¿Cómo influye el lenguaje en la manera como construimos nuestras percepciones sobre los demás y en nuestra capacidad de convivir en una sociedad culturalmente diversa?",
  areas: [["l", "Lengua Castellana"], ["s", "Ciencias Sociales"], ["e", "Inglés A2"]]
};
const FICT = "Ejemplo didáctico ficticio: no corresponde a una noticia ni a una persona real.";
const TIPOS = ["Hecho", "Opinión", "Interpretación", "Generalización"];
const FAL = ["Generalización apresurada", "Falso dilema", "Apelación al miedo", "Ataque personal (ad hominem)"];

const MODULES = [
{ id: 1, title: "Comprender antes de juzgar", goal: "Reconocer cómo se construyen las percepciones sociales a través del lenguaje.", areas: ["l", "s"],
  steps: [
  { type: "read", area: "l", title: "Lectura: ¿quién es «de aquí»?", body: [
    "Migrar es cambiar de lugar de residencia, dentro de un país o hacia otro. Las personas migran por razones muy distintas: trabajo, estudio, familia, seguridad o la búsqueda de nuevas oportunidades. Por eso, hablar de «los migrantes» como si fueran un solo grupo oculta mucha información.",
    "La <b>identidad</b> es la manera en que una persona se reconoce a sí misma: su historia, su lengua, sus costumbres y sus relaciones. La <b>nacionalidad</b> es un vínculo jurídico con un Estado. El <b>sentido de pertenencia</b> es la sensación de ser parte de una comunidad. Las tres ideas se relacionan, pero no son lo mismo: alguien puede tener una nacionalidad y sentirse de otro lugar, o sentirse parte de varios.",
    "Las palabras que usamos para nombrar a los demás («invasores», «vecinos», «extranjeros», «compañeros») no son neutras: guían lo que pensamos antes de que revisemos los datos. Esta sesión propone <b>comprender antes de juzgar</b>."],
    ctx: "Ciencias Sociales: un territorio es un espacio habitado y construido por personas. La diversidad cultural aparece cuando en ese espacio conviven distintas lenguas, tradiciones y orígenes; la cohesión social depende de cómo se relacionan." },
  { type: "quiz", area: "l", title: "Hechos, opiniones, interpretaciones y generalizaciones", intro: "Un <b>hecho</b> se puede comprobar; una <b>opinión</b> expresa un gusto o valoración; una <b>interpretación</b> explica por qué ocurre algo y necesita pruebas; una <b>generalización</b> atribuye a todo un grupo lo que se observó en pocos casos.", fict: true, items: [
    { q: "«Según el censo del barrio, en Los Cedros viven 120 familias que llegaron de otros países entre 2019 y 2023.»", o: TIPOS, c: 0, why: "Es un hecho: se puede verificar consultando el censo. Fíjate en que indica fuente, lugar y fechas." },
    { q: "«Los vecinos nuevos hacen más agradable la calle.»", o: TIPOS, c: 1, why: "Es una opinión: expresa una valoración personal. Otra persona podría pensar distinto sin que ninguna esté 'equivocada' en datos." },
    { q: "«Si el comercio del barrio cambió, es porque llegó más gente de afuera.»", o: TIPOS, c: 2, why: "Es una interpretación: propone una causa. Puede ser cierta, pero habría que revisar otras explicaciones (precios, obras, nuevas tiendas)." },
    { q: "«Todos los migrantes buscan lo mismo.»", o: TIPOS, c: 3, why: "Es una generalización: la palabra 'todos' borra las diferencias entre personas con historias y motivos distintos." }]},
  { type: "quiz", area: "l", title: "Análisis de titulares", intro: "¿Qué hace el lenguaje de cada titular?", fict: true, items: [
    { q: "Titular ficticio: «Oleada de extranjeros invade la ciudad»", o: ["Informa con datos", "Usa palabras cargadas que exageran", "Presenta una causa comprobada"], c: 1, why: "«Oleada» e «invade» sugieren amenaza y no aportan cifras. El lenguaje crea una emoción antes que información.", better: "Un titular más preciso: «Llegan 800 personas extranjeras a la ciudad en 2023, según la alcaldía»." },
    { q: "Titular ficticio: «Aumentan 8 % las matrículas de estudiantes extranjeros, informa la Secretaría»", o: ["Informa con datos y fuente", "Usa palabras cargadas que exageran", "Generaliza sobre un grupo"], c: 0, why: "Incluye una cifra, un cambio medible y una fuente identificable. Se puede contrastar." },
    { q: "Titular ficticio: «Llegan migrantes y suben los robos»", o: ["Informa con datos y fuente", "Sugiere una causa sin evidencia", "Es una opinión declarada"], c: 1, why: "Une dos hechos con 'y' como si uno causara el otro. Dos cosas que ocurren al tiempo no siempre están relacionadas.", better: "Para afirmarlo se necesitarían estudios que comparen cifras de delitos y expliquen otras causas." }]},
  { type: "quiz", area: "l", title: "Comprensión e interpretación", intro: "Vuelve a la lectura inicial.", items: [
    { q: "¿Por qué la lectura dice que hablar de «los migrantes» oculta información?", o: ["Porque es una palabra prohibida", "Porque agrupa personas con motivos y vidas muy diferentes", "Porque todos migran por trabajo"], c: 1, why: "El texto explica que los motivos de migrar son diversos; una sola etiqueta los vuelve invisibles." },
    { q: "¿Qué diferencia hay entre nacionalidad y sentido de pertenencia?", o: ["Ninguna, son sinónimos", "La nacionalidad es un vínculo jurídico; la pertenencia es un sentimiento", "La pertenencia depende solo del pasaporte"], c: 1, why: "Una es legal y la otra es emocional y social; pueden coincidir o no." }]},
  { type: "write", area: "l", title: "Reflexión", prompts: [
    ["Recuerda una palabra que hayas oído para nombrar a un grupo de personas. ¿Qué imagen crea? ¿Qué información deja por fuera?", "Escribe aquí tu respuesta…"]] }]},

{ id: 2, title: "Analizar y cuestionar los argumentos", goal: "Desarrollar pensamiento crítico reconociendo falacias y recursos discursivos.", areas: ["l", "s"],
  steps: [
  { type: "read", area: "l", title: "Cuatro trampas del razonamiento", body: [
    "Un <b>argumento</b> ofrece razones para sostener una idea. Una <b>falacia</b> es un razonamiento que parece sólido pero no lo es. Conocerlas no sirve para 'ganar discusiones', sino para revisar mejor lo que leemos y lo que decimos.",
    "<b>Generalización apresurada:</b> sacar una conclusión sobre todo un grupo a partir de pocos casos. <i>Ejemplo: «Dos compañeros nuevos llegaron tarde; esos estudiantes son impuntuales.»</i>",
    "<b>Falso dilema:</b> presentar solo dos opciones cuando hay más. <i>Ejemplo: «O se cierra la frontera, o el país colapsa.»</i>",
    "<b>Apelación al miedo:</b> usar el temor en lugar de pruebas. <i>Ejemplo: «Si no actuamos hoy, mañana nadie estará a salvo.»</i>",
    "<b>Ataque personal (ad hominem):</b> descalificar a quien habla en vez de responder a lo que dice. <i>Ejemplo: «No le creas, ella ni siquiera nació aquí.»</i>"],
    ctx: "Ciencias Sociales: las generalizaciones sobre grupos sociales pueden convertirse en prejuicios (juicios previos sin evidencia) y, con el tiempo, en discriminación." },
  { type: "quiz", area: "l", title: "¿Qué tipo de razonamiento es?", intro: "Lee la afirmación, elige la falacia y revisa cómo mejorarla.", fict: true, items: [
    { q: "«Conocí a dos vendedores de otro país que cobraron caro; todos los extranjeros son abusivos.»", o: FAL, c: 0, why: "De dos casos se concluye sobre todo un grupo.", better: "«Dos vendedores cobraron caro. Habría que revisar más casos y precios antes de concluir algo.»" },
    { q: "«O aceptamos todas las propuestas de la alcaldía o no queremos el bienestar del barrio.»", o: FAL, c: 1, why: "Reduce el asunto a dos opciones; existen posturas intermedias, como aceptar unas propuestas y modificar otras.", better: "«Hay propuestas valiosas y otras que conviene ajustar; analicemos cada una.»" },
    { q: "«¡Cuidado! Si dejamos entrar a más gente, perderemos todo lo que tenemos.»", o: FAL, c: 2, why: "Busca asustar sin ofrecer datos: no dice qué se perdería, cuánto ni por qué.", better: "«Estudios sobre empleo y servicios muestran estos efectos: [datos]. Conviene planear así…»" },
    { q: "«Esa profesora propone intercambios culturales, pero ¿qué sabe ella si es muy joven?»", o: FAL, c: 3, why: "Ataca a la persona y no responde a su propuesta.", better: "«¿Qué beneficios y riesgos tiene la propuesta de intercambios? ¿Qué evidencia hay?»" }]},
  { type: "quiz", area: "s", title: "Discursos políticos y periodísticos", intro: "Analiza fragmentos de personajes imaginarios.", fict: true, items: [
    { q: "Un vocero ficticio del «Partido Horizonte» afirma: «Quien critique este plan de empleo está en contra del progreso del país.»", o: ["Falso dilema", "Apelación al miedo", "Ninguna falacia"], c: 0, why: "Solo permite estar a favor del plan o 'en contra del progreso'. Se puede apoyar el progreso y criticar un plan concreto.", better: "«Este plan tiene estas metas y estos costos; respondamos las críticas con datos.»" },
    { q: "Un editorial ficticio dice: «Los barrios con más migrantes son los más peligrosos, así que son un riesgo para todos.»", o: ["Generalización y causa sin evidencia", "Informa con rigor", "Ataque personal"], c: 0, why: "Agrupa a todas las personas migrantes y sugiere una causa sin comparar otros factores (pobreza, falta de iluminación, servicios).", better: "«Esta es la cifra de delitos por barrio; estos factores podrían explicarla.»" }]},
  { type: "write", area: "l", title: "Responsabilidad de comunicar", prompts: [
    ["¿Qué responsabilidad tiene quien publica o comparte información sobre un grupo de personas?", "Tu opinión argumentada…"],
    ["¿Qué consecuencias puede tener generalizar sobre un grupo social (en la escuela, en el barrio, en las redes)?", "Tu respuesta…"]] }]},

{ id: 3, title: "Construir una mirada propia", goal: "Integrar lo aprendido y prepararte para elaborar, en la siguiente fase, la revista digital colaborativa.", areas: ["l", "s", "e"],
  steps: [
  { type: "read", area: "s", title: "Dos discursos ficticios, una misma situación", body: [
    "<b>Situación (ficticia):</b> en el barrio Las Palmas abrió un centro comunitario donde se enseñan oficios y se celebran fiestas de distintas regiones y países.",
    "<b>Discurso A:</b> «El centro es un error. Desde que existe, el barrio está lleno de gente rara. Eso nunca termina bien.»",
    "<b>Discurso B:</b> «Según una encuesta del propio barrio (150 hogares), 62 % asiste a alguna actividad del centro. No sabemos aún si mejora la convivencia; por eso proponemos medirlo en seis meses.»"],
    ctx: "Ciencias Sociales: la cohesión social se construye con contacto, normas compartidas e información confiable." },
  { type: "quiz", area: "l", title: "Compara los discursos", fict: true, items: [
    { q: "¿Cuál discurso reconoce lo que aún no sabe?", o: ["A", "B", "Ambos"], c: 1, why: "B separa un dato (la encuesta) de lo que falta comprobar (el efecto en la convivencia). A afirma sin pruebas." },
    { q: "¿Qué recurso principal usa el discurso A?", o: ["Datos con fuente", "Lenguaje cargado y generalización", "Una propuesta de medición"], c: 1, why: "«Gente rara» y «eso nunca termina bien» descalifican sin evidencia." }]},
  { type: "quiz", area: "l", title: "¿Respaldado o por comprobar?", fict: true, intro: "Clasifica cada afirmación sobre el centro comunitario de Las Palmas.", items: [
    { q: "«62 % de 150 hogares encuestados asiste a alguna actividad.»", o: ["Respaldada por evidencia", "Requiere más comprobación"], c: 0, why: "Hay cifra, muestra y fuente. Aun así conviene preguntar cómo se hizo la encuesta." },
    { q: "«El centro redujo los conflictos entre vecinos.»", o: ["Respaldada por evidencia", "Requiere más comprobación"], c: 1, why: "No hay datos de conflictos antes y después. Es una hipótesis." },
    { q: "«A todos en el barrio les molesta el ruido de las fiestas.»", o: ["Respaldada por evidencia", "Requiere más comprobación"], c: 1, why: "«Todos» es una generalización; se podría preguntar a una muestra de vecinos." }]},
  { type: "write", area: "l", title: "Construye tu argumento", intro: "Elige una situación social que te interese (puede ser el centro de Las Palmas).", prompts: [
    ["Tesis: mi idea es que…", "Una oración clara"], ["Evidencia: lo sé porque…", "Datos, fuentes, ejemplos verificables"],
    ["Posible objeción: alguien podría decir que…", "Una mirada distinta"], ["Respuesta a la objeción y conclusión", "Cierra tu argumento"]] },
  { type: "write", area: "l", title: "Producción escrita (español)", intro: "Escribe un párrafo de 8 a 10 líneas con un titular responsable sobre la convivencia en un entorno culturalmente diverso. Evita generalizar y distingue hechos de opiniones.", prompts: [["Titular", "Un titular claro y sin exageraciones"], ["Párrafo", "Escribe tu texto…"]] },
  { type: "quiz", area: "e", title: "English A2: Identity and diversity", intro: "Read: <i>My name is Ana. I am from Colombia. In my class, there are students from different countries. We speak different languages, but we respect each other.</i>", items: [
    { q: "Where is Ana from?", o: ["Venezuela", "Colombia", "Spain"], c: 1, why: "The text says: “I am from Colombia.”" },
    { q: "Choose the sentence about living together:", o: ["We respect each other.", "I like pizza.", "My school is big."], c: 0, why: "“Respect each other” talks about convivencia (living together)." }]},
  { type: "write", area: "e", title: "English A2: Write", intro: "Useful words: <i>I am from… / I speak… / My friends are from… / I respect… / We are different, but…</i>", prompts: [["Write 3 or 4 short sentences about your identity and your classmates.", "My name is… I am from…"]] },
  { type: "self", area: "l", title: "Autoevaluación final", criteria: ["Distingo hechos, opiniones, interpretaciones y generalizaciones", "Reconozco falacias en un argumento", "Contrasto información antes de aceptarla", "Construyo un argumento con evidencia", "Me comunico en inglés sobre identidad y convivencia"],
    prompts: [["¿Qué aprendí en estas tres sesiones?", ""], ["¿Qué idea mía cuestioné o cambié?", ""], ["¿Qué necesito mejorar?", ""]],
    cierre: "En la siguiente fase elaborarán, en equipos, las cinco secciones de la revista digital colaborativa. Lleva tus argumentos, tus preguntas y tus criterios para evaluar información. <!-- EDITAR: nombra aquí las cinco secciones -->" }]}
];

/* ===================== LÓGICA (no necesitas editarla) ===================== */
const S = { m: null, s: 0, done: {}, ans: {}, txt: {} };
const $ = (id) => document.getElementById(id);
const AREA = { l: "Lengua Castellana", s: "Ciencias Sociales", e: "Inglés A2" };
const el = (h) => { const d = document.createElement("div"); d.innerHTML = h; return d.firstElementChild; };
const key = (...a) => a.join("-");
const prog = (m) => m.steps.filter((_, i) => S.done[key(m.id, i)]).length / m.steps.length;

function nav() {
  $("nav").innerHTML = MODULES.map((m) => `<button class="${S.m === m ? "on" : ""}" data-m="${m.id}">Módulo ${m.id}<i style="width:${prog(m) * 100}%"></i></button>`).join("");
  $("nav").querySelectorAll("button").forEach((b) => (b.onclick = () => go(MODULES[b.dataset.m - 1], 0)));
}
function go(m, s) { S.m = m; S.s = s; render(); scrollTo(0, 0); }

function render() {
  nav();
  const app = $("app");
  if (!S.m) return (app.innerHTML = cover(), app.querySelectorAll("[data-m]").forEach((b) => (b.onclick = () => go(MODULES[b.dataset.m - 1], 0))));
  const m = S.m, st = m.steps[S.s], k = key(m.id, S.s);
  if (st.type !== "quiz") S.done[k] = true;
  app.innerHTML = `<p class="prog">Módulo ${m.id}: ${m.title} · Actividad ${S.s + 1} de ${m.steps.length} · ${AREA[st.area]}</p>
   <section class="step ${st.type}"><h2>${st.title}</h2></section>
   <div class="bar"><button class="btn ghost" id="prev">Anterior</button><button class="btn" id="next">${S.s === m.steps.length - 1 ? "Terminar módulo" : "Siguiente"}</button></div>`;
  const box = app.querySelector(".step");
  if (st.intro) box.append(el(`<p>${st.intro}</p>`));
  if (st.fict) box.append(el(`<p class="fict">${FICT}</p>`));
  ({ read: drawRead, quiz: drawQuiz, write: drawWrite, self: drawSelf })[st.type](box, st, k);
  $("prev").onclick = () => (S.s ? go(m, S.s - 1) : (S.m = null, render()));
  $("next").onclick = () => (S.s < m.steps.length - 1 ? go(m, S.s + 1) : (S.m = null, render(), scrollTo(0, 0)));
}

function cover() {
  return `<section class="hero"><h1>${CONFIG.titulo}</h1><p class="sub">${CONFIG.subtitulo}</p>
   <div class="areas">${CONFIG.areas.map((a) => `<span class="tag ${a[0]}">${a[1]}</span>`).join("")}</div>
   <div class="guide"><b>Pregunta orientadora</b><br>${CONFIG.pregunta}</div></section>
   <div class="mods">${MODULES.map((m) => `<button class="mod" data-m="${m.id}"><h3>Sesión ${m.id}. ${m.title}</h3><p>${m.goal}</p>
   <div class="areas">${m.areas.map((a) => `<span class="tag ${a}">${AREA[a]}</span>`).join("")}</div><small>Avance: ${Math.round(prog(m) * 100)} %</small></button>`).join("")}</div>`;
}

function drawRead(box, st) {
  st.body.forEach((p) => box.append(el(`<p>${p}</p>`)));
  if (st.ctx) box.append(el(`<div class="ctx">${st.ctx}</div>`));
}

function drawQuiz(box, st) {
  st.items.forEach((it, i) => {
    const k = key(S.m.id, S.s, i), div = el(`<div class="item"><blockquote>${it.q}</blockquote><div class="opts"></div></div>`);
    it.o.forEach((o, j) => {
      const b = el(`<button>${o}</button>`);
      b.onclick = () => { S.ans[k] = j; paint(div, it, k); checkDone(st); };
      div.querySelector(".opts").append(b);
    });
    box.append(div);
    if (k in S.ans) paint(div, it, k);
  });
}
function paint(div, it, k) {
  const sel = S.ans[k], bs = div.querySelectorAll(".opts button");
  bs.forEach((b, j) => { b.disabled = true; if (j === it.c) b.classList.add("right"); else if (j === sel) b.classList.add("wrong"); });
  div.querySelector(".fb")?.remove();
  const ok = sel === it.c;
  div.append(el(`<div class="fb ${ok ? "ok" : "no"}"><b>${ok ? "Muy bien." : "Revisa esta respuesta."}</b> ${it.why}${it.better ? `<br><br><b>Cómo mejorarlo:</b> ${it.better}` : ""}</div>`));
}
function checkDone(st) { if (st.items.every((_, i) => key(S.m.id, S.s, i) in S.ans)) { S.done[key(S.m.id, S.s)] = true; nav(); } }

function field(box, k, label, ph) {
  box.append(el(`<label>${label}</label>`));
  const t = el(`<textarea rows="4" placeholder="${ph}"></textarea>`);
  t.value = S.txt[k] || ""; t.oninput = () => (S.txt[k] = t.value); box.append(t);
}
function drawWrite(box, st) { st.prompts.forEach((p, i) => field(box, key(S.m.id, S.s, i), p[0], p[1])); }

function drawSelf(box, st) {
  box.append(el(`<p>Marca qué tanto lograste cada aspecto.</p>`));
  st.criteria.forEach((c, i) => {
    const k = key("self", i);
    box.append(el(`<label>${c}</label>`));
    const s = el(`<select><option value="">Elige…</option><option>Aún me cuesta</option><option>Lo logro con ayuda</option><option>Lo logro solo/a</option><option>Puedo explicárselo a otros</option></select>`);
    s.value = S.txt[k] || ""; s.onchange = () => (S.txt[k] = s.value); box.append(s);
  });
  st.prompts.forEach((p, i) => field(box, key("selft", i), p[0], "Escribe aquí…"));
  box.append(el(`<div class="ctx">${st.cierre}</div>`));
  const d = el(`<button class="btn ghost">Descargar mis respuestas (.txt)</button>`);
  d.onclick = () => {
    const out = MODULES.flatMap((m) => m.steps.flatMap((s, si) => (s.prompts || []).map((p, i) => `${m.title} / ${s.title}\n${p[0]}\n${S.txt[key(m.id, si, i)] || "(sin respuesta)"}\n`))).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([out], { type: "text/plain" })); a.download = "mis-respuestas.txt"; a.click();
  };
  box.append(d);
}
$("home").onclick = (e) => { e.preventDefault(); S.m = null; render(); };
render();
