const formParticipantes = document.getElementById(´form-participantes`);
    const participantes = [ 
    {nombre: "Leonardo"},
    {nombre: "Alberto"},
    {nombre: "Ignacia"},
    {nombre: "karina"},
    {nombre: "Roberto"},
    {nombre: "Fernanda"}
    ];
    actualizarListaParticipantes();
    fuction actualizarListaParticipantes.innerHTML = ´´;
    participantes.ForEach((participante) => { 
        const nombre = document.createElement(´li`);
    elementolista.textContent = nombre;

ListaParticipantes.appendChild(elementoLista);
});
} 

    const ListaParticipantes = document.getElementById('lista-participantes`);
    const btnSortearAmigoSecreto = document.getElementById(btn-sortear-amigo-secreto`);
        const resultadoSorteo = document.getElementById(´resultado-sorteo`);

        let participantes = [];

        formParticipantes.addEventListener(´submit`,(e) => { 
            e.preventDefault(),
            }
