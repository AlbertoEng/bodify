(async function () {
    // 19.101330, -104.304123
    // 19.158554, -104.340916
    const ubicacionCeremonia = [-104.304123, 19.101330];
    const ubicacionRecepcion = [-104.340916, 19.158554];

    // fecha limite
    let fechaLimiteConfirmacion = false;

    // DOM variables
    let mostrarMapaCeremonia = document.getElementById('abrir_mapa_ceremonia');
    let mostrarMapaRecepcion = document.getElementById('abrir_mapa_recepcion');
    let quitarMapa = document.getElementById('button_salir_map');


    let contenedor_form = document.getElementsByClassName('form-invitados');
    let container_form = document.getElementsByClassName('container-form');


    //2022, 10, 19
    let fechaLimite = new Date(2022, 9, 20, 23, 59, 59, 00);

    // test
    let test = new Date(2022, 9, 10, 21, 28, 30, 00);

    let tiempoRestante;
    let tiempoLimiteConfirmar;

    setInterval(() => {
        let fechaActual = new Date();
        let fechaBoda = new Date(2022, 10, 19, 18, 00, 00, 00);
        let duration = moment.duration(fechaBoda - fechaActual);
        tiempoRestante = fechaBoda - fechaActual;
        tiempoLimiteConfirmar = fechaLimite -fechaActual;


        if(tiempoLimiteConfirmar < 0){
            fechaLimiteConfirmacion = true
            container_form[0].style.display = 'none'
            console.log('listo ok')
        }

        let segRestantes = Math.floor(tiempoRestante / 1000);
        let dias = Math.floor(segRestantes / 86400);
        let horas = Math.floor((segRestantes - dias * 86400) / 3600);
        let minutos = Math.floor((segRestantes - dias * 86400 - horas * 3600) / 60);
        let segundos = Math.floor(segRestantes - dias * 86400 - horas * 3600 - minutos * 60);

        dias_restantes.innerHTML = dias + '<span>DIAS</span>';
        horas_restantes.innerHTML = horas + '<span>HORAS</span>';
        minutos_restantes.innerHTML = minutos + '<span>MINUTOS</span>';
        segundos_restantes.innerHTML = duration.seconds() + '<span>SEGUNDOS</span>';
    }, 1000)


    // console.log(window.location.href)

    if (!fechaLimiteConfirmacion) {
        console.log('pase aqui')
        let refId = window.location.pathname.replace('/paolayeduardo/', '');
        try {
            const lista = await axios.get(`http://www.goweddings.net/admin/lista-invitados/obtenerInvitadosByGrupo/${refId}`);
            let htmlInvitados = ''
            lista.data.map((invitado) => {
                htmlInvitados += `<div class="contenedor-form">
                <p class="nombre-invitado">${invitado.nombre}</p>
                <input class="checkbox-confirmar" type="checkbox" ${invitado.confirmado ? 'checked' : ''} name=${invitado.id}>
            </div>`
            })

            htmlInvitados += ` <div class="container-button">
            <input class="boton" type="submit" value="Confirmo Asistencia">
        </div>`;

            contenedor_form[0].innerHTML = htmlInvitados;
            container_form[0].appendChild(contenedor_form[0]);
        } catch (error) {
            console.log(error);
        }
    } 


    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/albertoeng08/cl7fb5udo000c14pa6et09dos', // style URL
        center: ubicacionCeremonia, // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    // 19.129175668557522, -104.33342275025801
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });



    const marcadorCeremonia = new mapboxgl.Marker({
        color: "#CC7153",
        draggable: false
    }).setLngLat(ubicacionCeremonia).addTo(map);



    const marcadorRecepcion = new mapboxgl.Marker({
        color: "#CC7153",
        draggable: false
    }).setLngLat(ubicacionRecepcion).addTo(map);



    mostrarMapaCeremonia.addEventListener('click', (e) => {
        e.stopPropagation();
        map.setCenter(ubicacionCeremonia);
        contenedor_mapa.style.visibility = "visible";
        map.setZoom(15);
    })
    mostrarMapaRecepcion.addEventListener('click', (e) => {
        e.stopPropagation();
        map.setCenter(ubicacionRecepcion);
        contenedor_mapa.style.visibility = "visible";
        map.setZoom(15);
    })
    quitarMapa.addEventListener('click', (e) => {
        contenedor_mapa.style.visibility = "hidden";
    })














})()