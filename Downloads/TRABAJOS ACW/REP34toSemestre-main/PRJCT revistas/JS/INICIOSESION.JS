//ESTO VENDRIA DE LA DB

let listas_de_usuarios =
    [{ correo: "juan@example.com", contrasena: "123456" },
    { correo: "maria@example.com", contrasena: "abcdef" },
    { correo: "pedro@example.com", contrasena: "ghijkl" }

    ];






function validarcredenciales() {

    let correoint = document.getElementById("correo").value;
    let contrasenaint = document.getElementById("contrasena").value;

    //FIN DE LA DB

    for (elements in listas_de_usuarios) {

        if (correoint == listas_de_usuarios[elements].correo && contrasenaint == listas_de_usuarios[elements].contrasena) {


            alert("Inicio de sesión exitoso");

            window.location.replace("INICIO.HTML");


            localStorage.setItem("usuario", correoint);




            return;

        }


    }

    alert("Correo o contraseña incorrectos");
    return;



}


function volverinico() {


    window.location.replace("INDEX.HTML");


}