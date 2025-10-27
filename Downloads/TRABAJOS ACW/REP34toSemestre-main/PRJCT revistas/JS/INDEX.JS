// Datos de ejemplo para las revistas (estan incompletos para mas practicidad en el proyecyto)

revistas_ultimas = [
    { nombre: "Revista Ciencia", portada: "ASSETS/rev1.jpg", link: "PLANTILLA.HTML?id=revista1", categoria: "Ciencia" },
    { nombre: "Revista Arte", portada: "ASSETS/rev2.jpg", link: "PLANTILLA.HTML?id=revista2", categoria: "Arte" },
    { nombre: "Revista Tecnología", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista3", categoria: "Tecnología" },
    { nombre: "Revista Salud", portada: "ASSETS/rev4.jpg", link: "PLANTILLA.HTML?id=revista4", categoria: "Salud" },
    { nombre: "Revista Historia", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista5", categoria: "Historia" },
    { nombre: "Revista Literatura", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista6", categoria: "Literatura" }
];

revistas_populares = [

    { nombre: "Revista Salud", portada: "ASSETS/rev4.jpg", link: "PLANTILLA.HTML?id=revista7", categoria: "Salud" },
    { nombre: "Revista Historia", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista8", categoria: "Historia" },
    { nombre: "Revista Literatura", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista9", categoria: "Literatura" },
    { nombre: "El pensar humano", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista10", categoria: "Ciencia" },
    { nombre: "El pensar humano", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista11", categoria: "Historia" }

];




function actualizarPagina() {


    // Obtener referencias a las tablas en el HTML

    let tablaUltimas = document.getElementById("tabla_ultimos_articulos");
    let tablaPopulares = document.getElementById("tabla_revistas_populares");


    // Limpiar las tablas antes de actualizarlas

    tablaUltimas.innerHTML = "";
    tablaPopulares.innerHTML = "";


    // Rellenar las tablas con las revistas correspondientes

    revistas_ultimas.forEach(revista => {

        const lugar = document.createElement("th");

        lugar.innerHTML = `

            <a href="${revista.link}">
                <img src="${revista.portada}" alt="${revista.nombre}">
                <p>${revista.nombre}</p>
                <p>${revista.categoria}</p>
            </a>
        `;

        tablaUltimas.appendChild(lugar);


    });


    // Rellenar las tablas con las revistas correspondientes

    revistas_populares.forEach(revista => {

        const lugar1 = document.createElement("th");

        lugar1.innerHTML = `

            <a href="${revista.link}">
                <img src="${revista.portada}" alt="${revista.nombre}">
                <p>${revista.nombre}</p>
                <p>${revista.categoria}</p>
            </a>
        `;

        tablaPopulares.appendChild(lugar1);
    });

}