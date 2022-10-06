(async function () {
    // 19.101330, -104.304123
    // 19.158554, -104.340916
    const ubicacionCeremonia = [-104.304123, 19.101330];
    const ubicacionRecepcion = [-104.340916, 19.158554];

    // DOM variables
    let mostrarMapaCeremonia = document.getElementById('abrir_mapa_ceremonia');
    let mostrarMapaRecepcion = document.getElementById('abrir_mapa_recepcion');
    let quitarMapa = document.getElementById('button_salir_map');
    // console.log(window.location.href)
    let refId = window.location.pathname.replace('/paolayeduardo/', '');
    try {
        const lista = await axios.get(`http://www.goweddings.net/admin/lista-invitados/obtenerInvitadosByGrupo/${refId}`);
        console.log(lista)
    } catch (error) {

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





    setInterval(() => {
        let fechaActual = new Date();
        let fechaBoda = new Date(2022, 10, 19, 18, 00, 00, 00);
        let duration = moment.duration(fechaBoda - fechaActual);
        let tiempoRestante = fechaBoda - fechaActual;
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








})()