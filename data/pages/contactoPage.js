export const contactoPage = {
    title: "Contacto - Tecnitours",
    contacto: {
        titulo: "¿Listo para tu próximo viaje?",
        subtitulo: "Contacta con nuestros asesores de viaje",
        heroPanel: {
            desktop: "/imgs/heroPanel/contact-hero.jpg",
            tablet: "/imgs/heroPanel/contact-hero.jpg",
            mobile: "/imgs/heroPanel/contact-hero.jpg",
            altText: "Contáctanos - Tecnitours"
        },
        informacion: {
            titulo: "Información de Contacto",
            contactos: [
                {
                    tipo: "Teléfono",
                    valor: "(+504) 2239-3157/56",
                    icono: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>'
                },
                {
                    tipo: "WhatsApp",
                    valor: "9954-8435",
                    icono: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>'
                },
                {
                    tipo: "Dirección",
                    valor: "Boulevard Suyapa, Hotel Plaza Florencia, Zona comercial, cubículo Número 0",
                    icono: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
                }
            ]
        },
        mapa: {
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.899462650137!2d-87.18421017842128!3d14.085293023980482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa30232b1867b%3A0xd2b2d0f13c21cb21!2sTecnitours!5e0!3m2!1ses-419!2shn!4v1731968360488!5m2!1ses-419!2shn"
        },
        formulario: {
            titulo: "¿Cómo podemos ayudarte?",
            subtitulo: "Cuéntanos sobre el viaje que deseas realizar",
            campos: {
                inputs: [
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
                    }
                ],
                select: {
                    id: "travel-type",
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
                textarea: {
                    id: "message",
                    nombre: "message",
                    etiqueta: "Detalles del viaje:",
                    placeholder: "Cuéntanos los detalles de tu viaje ideal: destino, fechas tentativas, número de personas, preferencias"
                }
            },
            botonEnviar: "Enviar mensaje"
        }
    }
}