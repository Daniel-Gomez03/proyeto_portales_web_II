export const contactoPage = {
    title: "Contacto - Tecnitours",
    contacto: {
        titulo: "¿Listo para tu próximo viaje?",
        subtitulo: "Contacta con nuestros asesores de viaje",
        heroPanel: {
            desktop: "../public/imgs/heroPanel/contact-hero.jpg",
            tablet: "../public/imgs/heroPanel/contact-hero.jpg",
            mobile: "../public/imgs/heroPanel/contact-hero.jpg",
            altText: "Contáctanos - Tecnitours"
        },
        informacion: {
            titulo: "Información de Contacto",
            contactos: [
                {
                    tipo: "Teléfono",
                    valor: "(+504) 2239-3157/56"
                },
                {
                    tipo: "WhatsApp",
                    valor: "9954-8435"
                },
                {
                    tipo: "Dirección",
                    valor: "Boulevard Suyapa, Hotel Plaza Florencia, Zona comercial, cubículo Número 0"
                }
            ]
        },
        mapa: {
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.899462650137!2d-87.18421017842128!3d14.085293023980482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa30232b1867b%3A0xd2b2d0f13c21cb21!2sTecnitours!5e0!3m2!1ses-419!2shn!4v1731968360488!5m2!1ses-419!2shn"
        },
        formulario: {
            titulo: "¿Cómo podemos ayudarte?",
            subtitulo: "Cuéntanos sobre el viaje que deseas realizar",
            campos: [
                {
                    id: "name",
                    tipo: "text",
                    nombre: "username",
                    etiqueta: "Nombre completo:",
                    placeholder: "Ingresa tu nombre"
                },
                {
                    id: "telefono",
                    tipo: "text",
                    nombre: "telefono",
                    etiqueta: "Teléfono:",
                    placeholder: "12345678"
                },
                {
                    id: "email",
                    tipo: "email",
                    nombre: "email",
                    etiqueta: "Correo electrónico:",
                    placeholder: "tucorreo@email.com"
                },
                {
                    id: "travel-type",
                    tipo: "select",
                    nombre: "travel-type",
                    etiqueta: "Tipo de viaje:",
                    opciones: [
                        { valor: "", texto: "Selecciona el tipo de viaje" },
                        { valor: "vacaciones", texto: "Vacaciones" },
                        { valor: "negocios", texto: "Viaje de negocios" },
                        { valor: "luna-miel", texto: "Luna de miel" },
                        { valor: "grupo", texto: "Viaje en grupo" },
                        { valor: "custom", texto: "Viaje personalizado" }
                    ]
                },
                {
                    id: "message",
                    tipo: "textarea",
                    nombre: "message",
                    etiqueta: "Detalles del viaje:",
                    placeholder: "Cuéntanos los detalles de tu viaje ideal: destino, fechas tentativas, número de personas, preferencias.."
                }
            ],
            botonEnviar: "Enviar mensaje"
        }
    }
}