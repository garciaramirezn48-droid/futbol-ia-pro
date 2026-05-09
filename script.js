const API_KEY = "e02de64b82986b277a2b96879e7ca4b5";
const API_HOST = "v3.football.api-sports.io";

function cargarCalendario(){

let panel = document.getElementById("calendario");

panel.innerHTML = `

<h2>📅 Calendario Mayo y Junio</h2>

<h3>Jueves 8 Mayo</h3>
<div class="partido">13:30 Dortmund vs Frankfurt</div>
<div class="partido">14:00 Levante vs Osasuna</div>
<div class="partido">13:45 Lens vs Nantes</div>

<h3>Viernes 9 Mayo</h3>
<div class="partido">11:30 Liverpool vs Chelsea</div>
<div class="partido">14:00 Brighton vs Wolves</div>
<div class="partido">14:00 Fulham vs Bournemouth</div>
<div class="partido">14:00 Sunderland vs Manchester United</div>
<div class="partido">16:30 Manchester City vs Brentford</div>

<h3>Sábado 10 Mayo</h3>
<div class="partido">08:00 Burnley vs Aston Villa</div>
<div class="partido">10:30 West Ham vs Arsenal</div>
<div class="partido">14:00 Barcelona vs Real Madrid</div>
<div class="partido">14:00 PSG vs Brest</div>

<h3>Domingo 11 Mayo</h3>
<div class="partido">14:00 Tottenham vs Leeds</div>
<div class="partido">13:45 Napoli vs Bologna</div>

<h3>Lunes 12 Mayo</h3>
<div class="partido">14:30 Osasuna vs Atlético Madrid</div>

<h3>Martes 13 Mayo</h3>
<div class="partido">14:00 Manchester City vs Crystal Palace</div>
<div class="partido">14:30 Alavés vs Barcelona</div>

<h3>Miércoles 14 Mayo</h3>
<div class="partido">13:30 Real Madrid vs Oviedo</div>

<h3>Jueves 15 Mayo</h3>
<div class="partido">14:00 Aston Villa vs Liverpool</div>

<h3>Sábado 16 Mayo</h3>
<div class="partido">14:00 Barcelona vs Sevilla</div>
<div class="partido">11:30 Arsenal vs Burnley</div>

<h3>Domingo 17 Mayo</h3>
<div class="partido">10:00 Liverpool vs Tottenham</div>
<div class="partido">14:00 Real Madrid vs Valencia</div>

<h3>Domingo 24 Mayo</h3>
<div class="partido">16:00 River Plate vs Boca Juniors</div>

<h3>Sábado 30 Mayo</h3>
<div class="partido">14:00 Arsenal vs PSG Final Champions</div>

<h3>Domingo 31 Mayo</h3>
<div class="partido">10:00 Manchester City vs Manchester United</div>

<h3>Domingo 1 Junio</h3>
<div class="partido">16:00 Flamengo vs Palmeiras</div>
<div class="partido">18:00 River Plate vs Boca Juniors</div>

<h3>Lunes 2 Junio</h3>
<div class="partido">19:30 Millonarios vs Nacional</div>

<h3>Martes 3 Junio</h3>
<div class="partido">20:00 Junior vs América de Cali</div>

<h3>Miércoles 4 Junio</h3>
<div class="partido">18:10 Santa Fe vs Medellín</div>

<h3>Jueves 5 Junio</h3>
<div class="partido">20:15 Tolima vs Cali</div>

<h3>Viernes 6 Junio</h3>
<div class="partido">19:30 Atlético Nacional vs Junior</div>

<h3>Sábado 7 Junio</h3>
<div class="partido">20:00 América vs Millonarios</div>

<h3>Domingo 8 Junio</h3>
<div class="partido">17:00 Palmeiras vs Santos</div>

<h3>Lunes 9 Junio</h3>
<div class="partido">19:30 São Paulo vs Corinthians</div>

<h3>Martes 10 Junio</h3>
<div class="partido">16:00 River Plate vs Racing</div>

<h3>Miércoles 11 Junio</h3>
<div class="partido">18:30 Independiente vs Boca Juniors</div>

<h3>Jueves 12 Junio</h3>
<div class="partido">16:30 Fluminense vs Botafogo</div>

<h3>Viernes 13 Junio</h3>
<div class="partido">18:30 Cruzeiro vs Flamengo</div>

<h3>Sábado 14 Junio</h3>
<div class="partido">19:30 Santa Fe vs Tolima</div>

<h3>Domingo 15 Junio</h3>
<div class="partido">20:00 Medellín vs Nacional</div>

<h3>Lunes 16 Junio</h3>
<div class="partido">18:00 Boca Juniors vs San Lorenzo</div>

<h3>Martes 17 Junio</h3>
<div class="partido">20:15 River Plate vs Estudiantes</div>

<h3>Miércoles 18 Junio</h3>
<div class="partido">16:00 Palmeiras vs Corinthians</div>

<h3>Jueves 19 Junio</h3>
<div class="partido">18:30 Flamengo vs Vasco da Gama</div>

<h3>Viernes 20 Junio</h3>
<div class="partido">19:30 Millonarios vs América</div>

<h3>Sábado 21 Junio</h3>
<div class="partido">20:00 Junior vs Medellín</div>

<h3>Domingo 22 Junio</h3>
<div class="partido">17:00 River Plate vs Rosario Central</div>

<h3>Lunes 23 Junio</h3>
<div class="partido">19:30 Boca Juniors vs Racing</div>

<h3>Martes 24 Junio</h3>
<div class="partido">19:30 Nacional vs Santa Fe</div>

<h3>Miércoles 25 Junio</h3>
<div class="partido">20:00 Tolima vs Junior</div>

<h3>Jueves 26 Junio</h3>
<div class="partido">18:00 São Paulo vs Palmeiras</div>

<h3>Viernes 27 Junio</h3>
<div class="partido">20:15 Flamengo vs Fluminense</div>

`;

}

cargarCalendario();

function enviar(){

let texto = document.getElementById("texto").value.toLowerCase();

if(texto=="") return;

let mensajes = document.getElementById("mensajes");

mensajes.innerHTML += `<div class="user-msg">${texto}</div>`;

setTimeout(()=>{

let pick = "Más de 1.5 goles";
let resultado = `${1 + Math.floor(Math.random()*3)}-${Math.floor(Math.random()*3)}`;

if(texto.includes("river")) pick="River o empate";
if(texto.includes("boca")) pick="Boca o empate";
if(texto.includes("barcelona")) pick="Barcelona gana";
if(texto.includes("madrid")) pick="Ambos marcan";
if(texto.includes("flamengo")) pick="Flamengo gana";
if(texto.includes("nacional")) pick="Nacional gana";

mensajes.innerHTML += `
<div class="bot-msg">
📊 Analizando ${texto}<br>
🔥 Pick recomendado: ${pick}<br>
⚽ Resultado probable: ${resultado}<br>
📈 Confianza IA: ${82 + Math.floor(Math.random()*15)}%
</div>
`;

mensajes.scrollTop = mensajes.scrollHeight;

},800);

document.getElementById("texto").value="";

}