import { indexPage } from "./pages/indexPage";
import { aboutPage } from "./pages/aboutPage";
import { contactoPage } from "./pages/contactoPage";
import { galeriaPage } from "./pages/galeriaPage";
import { blogPage } from "./pages/blogPage";
import { faqPage } from "./pages/faqPage";
import { servicioAutosPage } from "./pages/servicioAutosPage";
import { servicioHotelesPage } from "./pages/servicioHotelesPage";
import { servicioVuelosPage } from "./pages/servicioVuelosPage";
import { servicioPaquetesPage } from "./pages/servicioPaquetesPage";

const commonData = {
    navigation: [
        { url: '/index.html', label: 'Inicio' },
        { url: '/about.html', label: 'Nosotros' },//AQUI TOCO DANIEL
        {
            label: 'Servicios',
            submenu: [
                { url: '/pages/servicioAutos.html', label: 'Autos' },
                { url: '/pages/servicioHoteles.html', label: 'Hoteles' },
                { url: '/pages/servicioVuelos.html', label: 'Vuelos' },
                { url: '/pages/servicioPaquetes.html', label: 'Paquetes' }
            ]
        },
        {
            label: 'Explorar',
            submenu: [
                { url: '/pages/galeria.html', label: 'Galería' },
                { url: '/pages/blog.html', label: 'Blog' },
                { url: '/pages/faq.html', label: 'FAQ' }
            ]
        },
        { url: '/pages/contacto.html', label: 'Contacto' }
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/index.html':
            pageData = indexPage;
            break;
        case '/about.html'://AQUI TODO DANIEL
            pageData = aboutPage;
            break;
        case '/pages/contacto.html':
            pageData = contactoPage;
            break;
        case '/pages/galeria.html':
            pageData = galeriaPage;
            break;
        case '/pages/blog.html':
            pageData = blogPage;
            break;
        case '/pages/faq.html':
            pageData = faqPage;
            break;
        case '/pages/servicioAutos.html':
            pageData = servicioAutosPage;
            break;
        case '/pages/servicioHoteles.html':
            pageData = servicioHotelesPage;
            break;
        case '/pages/servicioVuelos.html':
            pageData = servicioVuelosPage;
            break;
        case '/pages/servicioPaquetes.html':
            pageData = servicioPaquetesPage;
            break;
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}
