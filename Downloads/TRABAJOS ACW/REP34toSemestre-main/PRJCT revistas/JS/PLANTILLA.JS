//mas datos de prueba, son pocos por tema de practicidad y aun asi no esta completo como seria la tabla de la db

const revistas = [
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
    }
];

//por cada revista que concida con el ID, osea 1, se modificara el html plantilla para adaptarlo a la informacion de la revista seleccionada





function llenardatos() {

    //busca en el link de origen el id unico de la revista

    const params = new URLSearchParams(window.location.search);
    const idRevista = params.get("id");

    //llama al contenedor de la pagina de origen

    let conpadre = document.getElementById("contpadre");


    revistas.forEach(revista => {

        if (revista.id == idRevista) {


            const contenedorpadre = document.createElement("div");
            contenedorpadre.innerHTML = `
            
                        <h4>${revista.categoria}</h4>
                        <h1>${revista.titulo}</h1>
                        <h4>${revista.autor}</h4>
                        <h5>${revista.fecha}</h5><br>
                        <p>${revista.resumen}</p>
                        <h4>${revista.universidad}</h4>
                        <br>
                         <br>
                          <br>
                           <br>

                        <a href="${revista.archivo}">
                            <img src="ASSETS/UPLOADIMAGE.jpg"  class="UPLOADIMAGE">
                        </a>
            `

            conpadre.appendChild(contenedorpadre);



        }







    })






}