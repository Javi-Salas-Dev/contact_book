const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    // console.log(claves)
    for(clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        // console.log(contacto.numero)
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('h3')
    let direccionContacto = document.createElement('h3')
    let iconEdit = document.createElement('span')
    let iconBorrar = document.createElement('span')
    let enlaceModificar = document.createElement('a')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconEdit.innerHTML = 'edit'
    iconBorrar.innerHTML = 'delete_forever'
    

    divContacto.classList.add('listado--contactos')
    iconEdit.classList.add('material-symbols-outlined', 'icono')
    iconBorrar.classList.add('material-symbols-outlined', 'icono')
    enlaceModificar.setAttribute('href', "edit_contact.html")

    // borrar contacto de storage y se refresque la pagina

    iconBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconEdit)
    divContacto.appendChild(enlaceModificar)
    divContacto.appendChild(iconBorrar)
    enlaceModificar.appendChild(iconEdit)
    

    parentNode.appendChild(divContacto)
}