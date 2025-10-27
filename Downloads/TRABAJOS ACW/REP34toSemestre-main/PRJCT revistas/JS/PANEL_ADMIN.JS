//DB ficticia de administradores

const administradores = [{ correo: "maria@example.com" }, { correo: "juanx@gmail.com" }]




//mas datos de prueba, son pocos por tema de practicidad y aun asi no esta completo como seria la tabla de la db

const rependientes = [
    {
        id: "revista1",
        titulo: "Avances en Biotecnología Moderna",
        autor: "Dra. Ana Morales",
        universidad: "Universidad Nacional de Ciencias",
        categoria: "Ciencias",
        resumen: "Un análisis sobre los nuevos métodos de ingeniería genética aplicados a la medicina moderna.",
        archivo: "archivos/revista1.pdf"
        , fecha: "10/10/10"
        , resumen: "Breve revisión de técnicas recientes en edición genética y su aplicación clínica, con énfasis en retos éticos y perspectivas terapéuticas."
        , portada: "ASSETS/rev1.jpg"
    },
    {
        id: "revista2",
        titulo: "Sociedades Digitales y Cultura Global",
        autor: "Dr. Luis Herrera",
        universidad: "Universidad de Estudios Sociales",
        categoria: "Sociales",
        resumen: "Explora cómo la digitalización ha modificado las interacciones humanas y los valores culturales.",
        archivo: "archivos/revista2.pdf"
        , fecha: "10/10/10"
        , resumen: "Análisis de cómo las plataformas digitales transforman la comunicación y la identidad colectiva, y su impacto en la participación ciudadana."
        , portada: "ASSETS/rev3.jpg"
    },
    {
        id: "revista3",
        titulo: "Energías Renovables en América Latina",
        autor: "Ing. Camila Rojas",
        universidad: "Instituto Tecnológico Andino",
        categoria: "Ingeniería",
        resumen: "Revisión de los avances y desafíos en la implementación de energías limpias en el continente.",
        archivo: "archivos/revista3.pdf"
        , fecha: "10/10/10"
        , resumen: "Estudio conciso de proyectos eólicos y solares destacados, barreras para la implementación y recomendaciones para políticas regionales."
        , portada: "./ASSETS/rev2.jpg"
    }
];


const aprobado = [
    {
        id: "revista1",
        titulo: "Avances en Biotecnología Moderna",
        autor: "Dra. Ana Morales",
        universidad: "Universidad Nacional de Ciencias",
        categoria: "Ciencias",
        resumen: "Un análisis sobre los nuevos métodos de ingeniería genética aplicados a la medicina moderna.",
        archivo: "archivos/revista1.pdf"
        , fecha: "10/10/10"
        , resumen: "Breve revisión de técnicas recientes en edición genética y su aplicación clínica, con énfasis en retos éticos y perspectivas terapéuticas."
        , portada: "ASSETS/rev1.jpg"
    },
    {
        id: "revista2",
        titulo: "Sociedades Digitales y Cultura Global",
        autor: "Dr. Luis Herrera",
        universidad: "Universidad de Estudios Sociales",
        categoria: "Sociales",
        resumen: "Explora cómo la digitalización ha modificado las interacciones humanas y los valores culturales.",
        archivo: "archivos/revista2.pdf"
        , fecha: "10/10/10"
        , resumen: "Análisis de cómo las plataformas digitales transforman la comunicación y la identidad colectiva, y su impacto en la participación ciudadana."
        , portada: "ASSETS/rev3.jpg"
    },
    {
        id: "revista3",
        titulo: "Energías Renovables en América Latina",
        autor: "Ing. Camila Rojas",
        universidad: "Instituto Tecnológico Andino",
        categoria: "Ingeniería",
        resumen: "Revisión de los avances y desafíos en la implementación de energías limpias en el continente.",
        archivo: "archivos/revista3.pdf"
        , fecha: "10/10/10"
        , resumen: "Estudio conciso de proyectos eólicos y solares destacados, barreras para la implementación y recomendaciones para políticas regionales."
        , portada: "./ASSETS/rev2.jpg"
    }
];



//por cada revista que concida con el ID, osea 1, se modificara el html plantilla para adaptarlo a la informacion de la revista seleccionada



function isadmin() {

    //Comprueba si hay sesion activa

    const usuario = localStorage.getItem("usuario");

    console.log(usuario);

    if (!usuario) {

        alert("No hay sesion activa")

        window.location.replace("INICIO.HTML")

        return false;
    }

    //busca en una lista privilegiada de usuarios

    for (indice in administradores) {

        if (administradores[indice].correo == usuario) {

            alert("sesion de administrador iniciado como " + usuario);

            return true;

        }
    }

    //si el correo no se encuentra entre los privilegiados lanza el mensaje

    alert("no es administrador")
    window.location.replace("INDEX.HTML")
    return false;

}


function pendientes() {



    let cuerpotabla = document.getElementById("pendientes");

    rependientes.forEach(re => {

        const cuerpo = document.createElement("tr");

        cuerpo.innerHTML = `


        <td>${re.id}</td>
        <td>${re.titulo}</td>
        <td>${re.autor}</td>
        <td>${re.fecha}</td>
        <td>${re.categoria}</td>
        <td>${re.universidad}</td>
        <td><a href="${re.archivo}">PDF</a></td>
        <td><a href="${re.portada}">PORTADA</a></td>

  
        
        `

        cuerpotabla.appendChild(cuerpo)


    }
    )






}

function aprobados() {


}