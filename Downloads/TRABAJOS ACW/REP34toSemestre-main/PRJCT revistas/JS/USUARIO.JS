function sesionactiva() {

    let usuario = localStorage.getItem("usuario");


    if (!usuario) {

        alert("no se encuentra una sesion activa");

        window.location.replace("INICIO.HTML");

    }

}

function cerrarsesion() {


    localStorage.clear();
    alert("cerrandos sesion");
    window.location.replace("INDEX.HTML")



}

function paneladmin() {

    window.location.replace("Panel_admin.HTML")


}



