export const servicioVuelosPage = {
    title: "Vuelos - Tecnitours",
    vuelos:{
        titulo: "Viaja para explorar el Mundo",
        descripcion: "De la mano de Tecnitours, haz realidad tus sueños de aventura y descubre nuevos destinos alrededor del mundo. Con nuestras opciones de vuelos, te llevamos a donde siempre has querido ir, brindándote seguridad, comodidad y atención personalizada en cada paso de tu viaje. Prepárate para volar y crear recuerdos inolvidables.",
        hero_panel_vuelo:{
            img: "/imgs/sección-vuelo/Paisaje.jpg",
            altText: "Paisaje tropical",
        },

        sugerencias:{
            titulo: "Destinos Populares",
            subtitulo: "Descubre Lugares",
            descripcion: "Explora los lugares que todos quieren visitar y déjate inspirar por la belleza de ciudades icónicas, paisajes espectaculares y culturas vibrantes. En Tecnitours, hemos seleccionado los destinos más populares para que comiences a planear tu próxima gran aventura."
        },

        formularioVuelo:{
            titulo: "✈️Programa tu Vuelo",
            campos:{
                inputs:[
                    {
                        id: "origen",
                        tipo: "text",
                        nombre: "origen",
                        etiqueta: "Desde:",
                        placeholder: "Ingrese Origen",
                    },
                    {
                        id: "destino",
                        tipo: "text",
                        nombre: "destino",
                        etiqueta: "Hacia:",
                        placeholder: "Ingrese Destino",
                    },
                    {
                        id: "personas",
                        tipo: "number",
                        nombre: "personas",
                        etiqueta: "Número de Pasajeros:",
                        placeholder: "No. de personas",
                    },
                ],
                fechas:[
                    {
                        id: "fecha_salida",
                        tipo: "date",
                        nombre: "fecha_salida",
                        etiqueta: "Fecha de Salida:",
                    },
                    {
                        id: "fecha_retorno",
                        tipo: "date",
                        nombre: "fecha_retorno",
                        etiqueta: "Fecha de Retorno:",
                    }
                ],
                select:{
                    id:"cmbTipoClase",
                    nombre: "cmbTipoClase",
                    etiqueta: "Clase:",
                    opciones:[
                        {valor:"Eco", texto:"Económica"},
                        {valor:"Eje", texto:"Ejecutiva"},
                        {valor:"1Cla", texto:"Primera Clase"}
                    ]
                }
            }
        },

        recomendaciones:[
            {
                img: "/imgs/sección-vuelo/París.jpg",
                altText: "París, Francia",
                loading: "lazy",
                rating: "★★★★★",
                referencia: "/pages/servicioVuelos.html#vuelos-hero",
                titulo: "Francia",
                subtitulo: "París",
                descripcion: "La Ciudad de la Luz te espera con su incomparable romanticismo, icónicos monumentos como la Torre Eiffel, el Louvre y sus encantadoras calles llenas de historia y arte. Vive la magia de París y su exquisita gastronomía."
            },
            {
                img: "/imgs/sección-vuelo/Orlando-Florida.jpg",
                altText: "Orlando-Florida, Estados Unidos",
                loading: "lazy",
                rating: "★★★★★",
                referencia: "/pages/servicioVuelos.html#vuelos-hero",
                titulo: "Estados Unidos",
                subtitulo: "Orlando-Florida",
                descripcion: "El corazón de la diversión en familia. Hogar de los parques temáticos más famosos del mundo, Orlando combina aventura, entretenimiento y sol, ofreciendo experiencias únicas para todas las edades."
            },
            {
                img: "/imgs/sección-vuelo/Venecia.jpg",
                altText: "Venecia, Italia",
                loading: "lazy",
                rating: "★★★★★",
                referencia: "/pages/servicioVuelos.html#vuelos-hero",
                titulo: "Italia",
                subtitulo: "Venecia",
                descripcion: "La ciudad flotante que parece sacada de un sueño. Recorre sus pintorescos canales en góndola, maravíllate con su arquitectura renacentista y disfruta de la singular belleza de este destino lleno de historia y romance."
            }
        ],

        paquete:{
            titulo: "Echa un vistazo a nuestros paquetes",
            subtitulo: "Paquetes Sugeridos",
            descripcion: "En Tecnitours, hemos diseñado paquetes de vuelo que se adaptan a tus necesidades y sueños. Ya sea que busques una escapada corta, unas vacaciones familiares o una aventura internacional, nuestros paquetes ofrecen la mejor selección de vuelos a destinos increíbles con comodidad, flexibilidad y precios competitivos. ¡Elige tu destino y comienza a volar hoy mismo!"
        },

        paquetesLista:[
            {
                img: "/imgs/servicios/paquete2.jpg",
                altText: "Paquete Aérero Roatán",
                loading: "lazy",
                titulo: "Escapada a la playa: 3 días y 2 noches de relax",
                descripcion: "Escápate a la tranquilidad del mar con nuestro paquete de 3 días y 2 noches en la playa. Disfruta de la brisa marina, relájate bajo el sol y recarga energías en un destino paradisíaco. Ideal para desconectar de la rutina y vivir una experiencia inolvidable junto al océano.",
                comments: "(20 comentarios)",
                rating: "★★★★★",
                precio: "$670 / $590",
                span: "*por persona",
                boton: "Reservar Ahora"
            },
            {
                img: "/imgs/servicios/paquete3.jpg",
                altText: "Paquete del Casabe",
                loading: "lazy",
                titulo: "Aventura en La Ceiba: 4 días y 3 noches de exploración",
                descripcion: "Descubre la magia de La Ceiba en nuestro paquete de 4 días y 3 noches. Rodeado de naturaleza exuberante, desde sus playas hasta sus parques nacionales, vivirás una experiencia llena de aventura, cultura y relajación. Disfruta de actividades emocionantes y del encanto único de esta ciudad caribeña, ideal para los amantes de la naturaleza y los viajes llenos de descubrimientos.",
                comments: "(15 comentarios)",
                rating: "★★★★☆",
                precio: "$345",
                span: "*por persona",
                boton: "Reservar Ahora"
            },
            {
                img: "/imgs/servicios/Paquete4.jpeg",
                altText: "Paquete Disney",
                loading: "lazy",
                titulo: "Magia en Disneyland",
                descripcion: "Descubre el mundo encantado de Disneyland California, donde la magia cobra vida. Vive la emoción de los parques temáticos, conoce a tus personajes favoritos y disfruta de atracciones únicas que solo Disney puede ofrecer. Una experiencia mágica y llena de diversión para toda la familia, ideal para crear recuerdos que perdurarán toda la vida.",
                comments: "(35 comentarios)",
                rating: "★★★★★",
                precio: "$759",
                span: "*por persona",
                boton: "Reservar Ahora"
            }
        ]
    }
} 