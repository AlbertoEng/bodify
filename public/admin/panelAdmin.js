

(async function(){
    
    const result = await axios.get('http://localhost:3000/admin/invitados');
    const { data: invitados } = result;
    console.log(invitados)
    const body = document.getElementsByTagName('body');
    const container = document.createElement('div');
    container.className = 'container';
    const cajaTextoNombre = document.createElement('input');
    cajaTextoNombre.placeholder = 'Nombre';
    cajaTextoNombre.classList = 'cajaTextoNombre';
    cajaTextoNombre.name = 'nombre';
    const cajaTextoApellido = document.createElement('input');
    cajaTextoApellido.placeholder = 'Apellido';
    cajaTextoApellido.classList = 'cajaTextoApellido';
    cajaTextoApellido.name = 'apellido';
    const boton = document.createElement('button');
    boton.innerText = 'Agregar nuevo Invitado'
    boton.classList = 'boton'
    body[0].appendChild(cajaTextoNombre);
    body[0].appendChild(cajaTextoApellido);
    body[0].appendChild(boton);
    body[0].appendChild(container);


    boton.addEventListener('click', async (e)=>{
        const result = await axios.post('http://www.goweddings.net/admin/agregarNuevo',{
            nombre: cajaTextoNombre.value,
            apellido: cajaTextoApellido.value
        })
        location.reload();
    })

    invitados.map(( invitado )=>{
        let invitadoParrafo = document.createElement('p');
        invitadoParrafo.innerText = `${invitado.id} ${invitado.nombre} ${invitado.apellido}`;
        
        container.appendChild(invitadoParrafo);
    })


    

}())



