export const servicioHotelesPage = {
    title: "Hoteles - Tecnitours",
    hoteles:{
        titulo: "Encuentra tu estadía ideal",
        descripcion: "Explora nuestra selección de hoteles cuidadosamente elegidos para brindarte comodidad y calidad en cada destino. Desde alojamientos acogedores hasta resorts de lujo, Tecnitours te conecta con opciones que se adaptan a tus necesidades y te acercan a vivir experiencias inolvidables. Haz de tu próximo viaje un recuerdo excepcional con la estadía perfecta",
        hero_panel_hotel:{
            img: "/imgs/heroPanel/hotel-hero.jpg",
            altText: "Atardecer en la Playa",
            enlaceDesc:"Más Opciones"
        },

        sliderHero:[
            {
                img: "/imgs/sección-hoteles/Hotel-Italia.jpg",
                altText: "Hotel en Italia",
                titulo: "Italia"
            },
            {
                img: "/imgs/sección-hoteles/Hotel-CanadaVancouver.jpg",
                altText: "Hotel en Canadá",
                titulo: "Canadá"
            },
            {
                img: "/imgs/sección-hoteles/Hotel-Suiza.png",
                altText: "Hotel en Suiza",
                titulo: "Suiza"
            },
            {
                img: "/imgs/sección-hoteles/Hotel-USA.jpg",
                altText: "Hotel en USA",
                titulo: "Estados Unidos"
            },
            {
                img: "/imgs/sección-hoteles/Hotel-JP.jpg",
                altText: "Hotel en Japón",
                titulo: "Japón"
            }
        ],

        formularioHotel:{
            campos:{
                inputs:[
                    {
                        id: "destino",
                        tipo: "text",
                        nombre: "destino",
                        etiqueta: "Destino:",
                        placeholder: "País, ciudad o región",
                        pattern: "[A-Za-z\´s]+",
                        title: "Solo se permiten letras y espacios",
                        descripcion: "¿A dónde se dirige?"
                    },
                ],
                select:{
                    id: "cmbTipoHabitacion",
                    nombre: "cmbTipoHabitacion",
                    etiqueta: "Tipo de Habitación:",
                    descripcion: "Seleccione el tipo de habitación",
                    opciones:[
                        {valor: "1", texto: "Sencilla"},
                        {valor: "2", texto: "Doble"},
                        {valor: "3", texto: "Triple"},
                        {valor: "4", texto: "Cuádruple"},
                        {valor: "5", texto: "Quíntuple"},
                        {valor: "6", texto: "Sextuple"},
                    ]
                }
            }
        },
        
        recomendaciones:[
            {
                img1: "/imgs/sección-hoteles/Indura Beach.jpg",
                img2: "/imgs/sección-hoteles/Indura Beach3.jpg",
                img3: "/imgs/sección-hoteles/Indura Beach4.jpg",
                altText: "Hotel Indura Beach",
                titulo: "Indura Beach & Golf Resort",
                location: "Tela, Honduras",
                precio: "$575.00"
            },
            {
                img1: "/imgs/sección-hoteles/Hilton.jpg",
                img2: "/imgs/sección-hoteles/Hilton2.jpg",
                img3: "/imgs/sección-hoteles/Hilton3.jpg",
                altText: "Hotel Hilton Vacation Club Grand",
                titulo: "Hilton Vacation Club Grand",
                location: "Orlando, Estados Unidos",
                precio: "$348.00"
            },
            {
                img1: "/imgs/sección-hoteles/Palma Real.jpg",
                img2: "/imgs/sección-hoteles/Palma Real 2.jpg",
                img3: "/imgs/sección-hoteles/Palma Real3.jpg",
                altText: "Hotel Palma Real",
                titulo: "Palma Real",
                location: "La Ceiba, Honduras",
                precio: "$255.00"
            },
            {
                img1: "/imgs/sección-hoteles/SinaVille.jpg",
                img2: "/imgs/sección-hoteles/SinaVille2.jpg",
                img3: "/imgs/sección-hoteles/SinaVille3.jpg",
                altText: "Hotel Sina De la Ville",
                titulo: "Sina De la Ville",
                location: "Milán, Lombardía, Italia",
                precio: "$428.00"
            },
            {
                img1: "/imgs/sección-hoteles/Mandarin Oriental.jpg",
                img2: "/imgs/sección-hoteles/Mandarin Oriental2.jpg",
                img3: "/imgs/sección-hoteles/Mandarin Oriental3.jpg",
                altText: "Hotel Mandarin Oriental",
                titulo: "Mandarin Oriental",
                location: "Santiago, Chile",
                precio: "$399.00"
            },
            {
                img1: "/imgs/sección-hoteles/Hotel Camino Real Antigua.jpg",
                img2: "/imgs/sección-hoteles/Hotel Camino Real Antigua2.jpg",
                img3: "/imgs/sección-hoteles/Hotel Camino Real Antigua3.jpg",
                altText: "Hotel Camino Real Antigua",
                titulo: "Hotel Camino Real Antigua",
                location: "Antigua Guatemala, Sacatepéquez, Guatemala",
                precio: "$291.00"
            }
        ]
    }
} 