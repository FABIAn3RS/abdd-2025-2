




function validacionEnvioRevista(formulario) {

    let titulo = formulario.titulo.value.trim();
    let autor = formulario.autor.value.trim();
    let resumen = formulario.resumen.value.trim();
    let universidad = formulario.universidad.value.trim();
    let categoria = formulario.categoria.value;
    let archivo = formulario.archivo.files[0];
    let portada = formulario.portada.files[0];

    alert(" Enviando datos...");

    const errores = [];

    if (!titulo) errores.push('El título es obligatorio.');
    else if (titulo.length < 3) errores.push('El título debe tener al menos 3 caracteres.');

    if (!autor) errores.push('El autor es obligatorio.');

    if (!resumen) errores.push('El resumen es obligatorio.');
    else if (resumen.length < 20) errores.push('El resumen debe tener al menos 20 caracteres.');

    if (!universidad) errores.push('La universidad es obligatoria.');

    if (!categoria || categoria === 'Sin categoria') errores.push('Seleccione una categoría.');

    if (!archivo) {
        errores.push('Adjunte un archivo (PDF).');
    } else {
        const tiposPermitidos = ['application/pdf'];
        const tamanioMax = 10 * 1024 * 1024; // 10 MB
        if (!tiposPermitidos.includes(archivo.type)) errores.push('El archivo debe ser PDF.');
        if (archivo.size > tamanioMax) errores.push('El archivo supera 10 MB.');
    }

    if (!portada) {
        errores.push('Adjunte una portada (imagen).');
    }
    else {
        const tiposImagenPermitidos = ['image/jpeg', 'image/png'];
        const tamanioMaxImagen = 5 * 1024 * 1024;
        if (!tiposImagenPermitidos.includes(portada.type)) errores.push('La portada debe ser JPG o PNG.');
        if (portada.size > tamanioMaxImagen) errores.push('La portada supera 5 MB.');
    }


    if (errores.length > 0) {
        alert("Se encontraron los siguientes errores:\n" + errores.join("\n"));
        return false;
    }



    alert("Formulario validado correctamente. Procediendo con el envío.");

    return true;



}

