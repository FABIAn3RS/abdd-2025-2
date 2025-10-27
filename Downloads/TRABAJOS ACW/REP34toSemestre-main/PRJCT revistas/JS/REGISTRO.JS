function validarregistro() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("correo").value;
    let birth = document.getElementById("birth").value;
    let cedula = document.getElementById("cedula").value;
    let password = document.getElementById("contrasena").value;
    let confirmarPassword = document.getElementById("confirmarContrasena").value;

    email = email.trim().toLowerCase();
    nombre = nombre.trim();
    birth = birth.trim();
    cedula = cedula.trim();
    password = password.trim();
    confirmarPassword = confirmarPassword.trim();

    const errores = [];

    function validarEmail(email) {
        if (!email) return { ok: false, msg: 'El correo es obligatorio.' };
        if (email.length > 255) return { ok: false, msg: 'El correo es demasiado largo.' };
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) return { ok: false, msg: 'Formato de correo inválido.' };
        return { ok: true };
    }

    function validarNombre(nombre) {
        if (!nombre) return { ok: false, msg: 'El nombre es obligatorio.' };
        if (nombre.length > 100) return { ok: false, msg: 'El nombre es demasiado largo.' };
        return { ok: true };
    }

    function validarFechaNacimiento(birth) {
        if (!birth) return { ok: false, msg: 'La fecha de nacimiento es obligatoria.' };
        const fecha = new Date(birth);
        const hoy = new Date();
        if (fecha >= hoy) return { ok: false, msg: 'La fecha de nacimiento no puede ser en el futuro.' };
        return { ok: true };
    }

    function validarCedula(cedula) {
        if (!cedula) return { ok: false, msg: 'La cédula es obligatoria.' };
        if (cedula.length !== 10) return { ok: false, msg: 'La cédula debe tener 10 dígitos.' };
        const cedulaRegex = /^\d+$/
        if (!cedulaRegex.test(cedula)) return { ok: false, msg: 'La cédula debe contener solo dígitos.' };
        return { ok: true };
    }

    function validarPassword(password, confirmarPassword) {
        if (!password) return { ok: false, msg: 'La contraseña es obligatoria.' };
        if (password.length < 6) return { ok: false, msg: 'La contraseña debe tener al menos 6 caracteres.' };
        if (password !== confirmarPassword) return { ok: false, msg: 'Las contraseñas no coinciden.' };
        return { ok: true };
    }

    const emailValidation = validarEmail(email);
    if (!emailValidation.ok) errores.push(emailValidation.msg);

    const nombreValidation = validarNombre(nombre);
    if (!nombreValidation.ok) errores.push(nombreValidation.msg);

    const fechaValidation = validarFechaNacimiento(birth);
    if (!fechaValidation.ok) errores.push(fechaValidation.msg);

    const cedulaValidation = validarCedula(cedula);
    if (!cedulaValidation.ok) errores.push(cedulaValidation.msg);

    const passwordValidation = validarPassword(password, confirmarPassword);
    if (!passwordValidation.ok) errores.push(passwordValidation.msg);

    if (errores.length > 0) {
        alert(errores.join('\n'));
        return false;
    }

    alert("Registro exitoso");

    return true;
}