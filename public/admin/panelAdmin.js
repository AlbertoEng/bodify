import axios from "axios";


(async function(){
    
    const devHost = 'localhost:3000'
    const productionHost = 'www.goweddings.net'


    const fiestas = await axios.get(`http://${devHost}/admin/fiestas`)

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
    const boton = document.createElement('button');
    boton.innerText = 'Agregar nuevo Invitado'
    boton.classList = 'boton'

    

    
    containerFormulario.appendChild(cajaTextoNombre);
    containerFormulario.appendChild(boton);
    
    
    body[0].appendChild(containerFormulario);
    body[0].appendChild(container);

    


    boton.addEventListener('click', async (e)=>{
        const result = await axios.post(`http://${devHost}/admin/agregarNuevo`,{
            nombre: cajaTextoNombre.value,
            
        })
        location.reload();
    })




    invitados.map(( invitado )=>{
        let invitadoItem = document.createElement('div');
        const botonEliminar = document.createElement('button');
        const botonEditar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar'
        botonEliminar.classList = 'botonEliminarInvitado'
        botonEditar.innerText = 'Editar'
        botonEditar.classList = 'botonEditarInvitado'
        invitadoItem.classList = 'itemContainer';
        invitadoItem.innerHTML = `<p>${invitado.id} ${invitado.nombre} ${invitado.apellido}</p>`;
        invitadoItem.appendChild(botonEliminar);
        invitadoItem.appendChild(botonEditar);
        container.appendChild(invitadoItem);
    })


    

}())



