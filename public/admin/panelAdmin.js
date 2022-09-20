

(async function(){
    
    const devHost = 'localhost:3000'
    const productionHost = 'www.goweddings.net'

    const result = await axios.get(`http://${devHost}/admin/invitados`);

    if(result.data){
        invitados = result.data;
    }
    const body = document.getElementsByTagName('body');
    const container = document.createElement('div');
    const containerFormulario = document.createElement('div');
    containerFormulario.className = 'formulario';
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

    
    containerFormulario.appendChild(cajaTextoNombre);
    containerFormulario.appendChild(cajaTextoApellido);
    containerFormulario.appendChild(boton);
    
    
    body[0].appendChild(containerFormulario);
    body[0].appendChild(container);

    


    boton.addEventListener('click', async (e)=>{
        const result = await axios.post(`http://${devHost}/admin/agregarNuevo`,{
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



