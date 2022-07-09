const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarContacto = document.querySelector('.btn--agregarContacto');

const listado = document.querySelector('.listado');

const db = window.localStorage;


btnAgregarContacto.onclick = () => {
        let  contacto = {
            id: Math.random(1,100),
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value,
        }
    // console.log(contacto);

    guardarContacto(db, contacto);
}

cargarContactos(db, listado)