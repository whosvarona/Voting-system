let votes = {
    trump: 0,
    biden: 0,
    obama: 0
};

let states = [
    "California", "Texas", "Florida", "Nueva York", "Illinois", "Pennsylvania",
    "Ohio", "Georgia", "North Carolina", "Michigan"
];

let stateVotes = {
    trump: [],
    biden: [],
    obama: []
};

function votar(candidate) {
    // Incrementar el número de votos según el candidato
    votes[candidate]++;
    
    // Asignar un estado aleatorio a quien se le ha dado el voto
    let randomState = states[Math.floor(Math.random() * states.length)];
    
    if (!stateVotes[candidate].includes(randomState)) {
        stateVotes[candidate].push(randomState);
    }

    // Actualizar el texto en el HTML con el nuevo número de votos
    document.getElementById(`${candidate}-votes`).textContent = `Votos: ${votes[candidate]}`;

    // Mostrar mensaje de confirmación de voto
    document.getElementById('voto-confirmacion').textContent = "Su voto ha sido enviado.";
}

function mostrarGanador() {
    let totalVotos = votes.trump + votes.biden + votes.obama;
    let trumpPorcentaje = ((votes.trump / totalVotos) * 100).toFixed(2);
    let bidenPorcentaje = ((votes.biden / totalVotos) * 100).toFixed(2);
    let obamaPorcentaje = ((votes.obama / totalVotos) * 100).toFixed(2);
    
    // Mostrar quién ganó
    let ganador = "Empate";
    if (votes.trump > votes.biden && votes.trump > votes.obama) {
        ganador = "Dunald Trump";
    } else if (votes.biden > votes.trump && votes.biden > votes.obama) {
        ganador = "Joe Biden";
    } else if (votes.obama > votes.trump && votes.obama > votes.biden) {
        ganador = "Barack Obama";
    }

    // Actualizar la sección de resultados con porcentajes
    document.getElementById("resultado-final").innerHTML = `
        <h2>Resultado Final</h2>
        <p>${ganador} es el ganador.</p>
        <p>Dunald Trump: ${trumpPorcentaje}%</p>
        <p>Joe Biden: ${bidenPorcentaje}%</p>
        <p>Barack Obama: ${obamaPorcentaje}%</p>
    `;
    
    // Mostrar los estados donde ganó cada candidato
    let stateResultsHTML = `
        <h3>Estados ganados</h3>
        <p>Dunald Trump: ${stateVotes.trump.join(", ") || "Ninguno"}</p>
        <p>Joe Biden: ${stateVotes.biden.join(", ") || "Ninguno"}</p>
        <p>Barack Obama: ${stateVotes.obama.join(", ") || "Ninguno"}</p>
    `;
    document.getElementById("state-results").innerHTML = stateResultsHTML;

    // Limpiar el mensaje de confirmación de voto
    document.getElementById('voto-confirmacion').textContent = "";
}
