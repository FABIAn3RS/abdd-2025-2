
// Simulación de respuesta del servidor basada en la decisión del usuario




let resultados = [
    { nombre: "Revista Ciencia", portada: "ASSETS/rev1.jpg", link: "PLANTILLA.HTML?id=revista1", categoria: "Ciencia" },
    { nombre: "Revista Arte", portada: "ASSETS/rev2.jpg", link: "PLANTILLA.HTML?id=revista2", categoria: "Arte" },
    { nombre: "Revista Tecnología", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista3", categoria: "Tecnología" },
    { nombre: "Revista Salud", portada: "ASSETS/rev4.jpg", link: "PLANTILLA.HTML?id=revista4", categoria: "Salud" },
    { nombre: "Revista Historia", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista5", categoria: "Historia" },
    { nombre: "Revista Literatura", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista6", categoria: "Literatura" },
    { nombre: "Revista Salud", portada: "ASSETS/rev4.jpg", link: "PLANTILLA.HTML?id=revista7", categoria: "Salud" },
    { nombre: "Revista Historia", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista8", categoria: "Historia" },
    { nombre: "Revista Literatura", portada: "ASSETS/rev3.jpg", link: "PLANTILLA.HTML?id=revista9", categoria: "Literatura" },
    { nombre: "El pensar humano", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista10", categoria: "Ciencia" },
    { nombre: "El pensar humano", portada: "ASSETS/rev5.jpg", link: "PLANTILLA.HTML?id=revista11", categoria: "Historia" }

];






function buscarRevistas() {

    // Obtiene los valores de los campos de búsqueda
    // y los normaliza para comparacion

    let decision = document.getElementById("RevBuscador").value;
    decision = decision.toLowerCase();
    decision = decision.trim();



    let decisionCategoria = document.getElementById("SelectorCategoria").value;


    console.log("Decision nombre: " + decision);
    console.log("Decision categoria: " + decisionCategoria);


    //crea una lista para almacenar las revistas encontradas


    let revistaencontrada = [];


    //en esta parte se filtra por los campos de busqueda y se hacen acciones segun los resultados


    //si no hay decision en ninguno de los dos campos , se muestran todos los resultados


    if (decision == "" && decisionCategoria == "Sin categoria") {

        alert("Mostrando todos los resultados");

        revistaencontrada = resultados;
    }

    //si hay decision en el campo de nombre pero no en categoria , se filtra por nombre


    if (decision && decisionCategoria == "Sin categoria") {

        alert("Buscando por nombre");


        for (let nombre of resultados) {

            if (nombre.nombre.toLowerCase() == decision) {

                revistaencontrada.push(nombre);



            }

        }


    }

    //si no hay decision en el campo de nombre pero si en categoria , se filtra por categoria


    if (decision == "" && decisionCategoria != "Sin categoria") {

        alert("Buscando por categoria");

        for (let categoria of resultados) {

            if (categoria.categoria == decisionCategoria) {

                revistaencontrada.push(categoria);

            }
        }
    }

    //si hay decision en ambos campos , se filtra por ambos

    if (decision && decisionCategoria != "Sin categoria") {


        alert("Buscando en ambos campos");


        for (let nombrecategoria of resultados) {


            if (nombrecategoria.nombre.toLowerCase() == decision && nombrecategoria.categoria == decisionCategoria) {

                revistaencontrada.push(nombrecategoria);

            }
        }
    }




    //HASTA AQUI ES UNA SIMULACION DE RESULTADOS , SE TIENE QUE CONECTAR CON BACKEND DE BASE DE DATOS PARA OBTENER RESULTADOS REALES



    //ESTA ES UNA FUNCION QUE RECOGE LOS RESULTADOS DE LA VARIABLE Y LOS MUESTRA EN PANTALLA



    const contenedorpadre = document.getElementById('contenedorResultados');

    contenedorpadre.innerHTML = '';

    revistaencontrada.forEach(r => {

        const objrevista = document.createElement('div');

        objrevista.innerHTML = `
        <div>
            <a href="${r.link}">
                <img src="${r.portada}" alt="${r.nombre}" width="50" height="100">
                <p>${r.nombre}</p>
                <p>${r.categoria}</p>
                
            </a>
        </div>
        `;

        contenedorpadre.appendChild(objrevista);
    });


    return false

}








