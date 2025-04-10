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
        { url: 'index.html', label: 'Inicio' },
        { url: 'about.html', label: 'Nosotros' },
        {
            label: 'Servicios',
            submenu: [
                { url: 'servicioAutos.html', label: 'Autos' },
                { url: 'servicioHoteles.html', label: 'Hoteles' },
                { url: 'servicioVuelos.html', label: 'Vuelos' },
                { url: 'servicioPaquetes.html', label: 'Paquetes' }
            ]
        },
        {
            label: 'Explorar',
            submenu: [
                { url: 'galeria.html', label: 'Galería' },
                { url: 'blog.html', label: 'Blog' },
                { url: 'faq.html', label: 'FAQ' }
            ]
        },
        { url: 'contacto.html', label: 'Contacto' }
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/index.html':
            pageData = indexPage;
            break;
        case '/about.html':
            pageData = aboutPage;
            break;
        case '/contacto.html':
            pageData = contactoPage;
            break;
        case '/galeria.html':
            pageData = galeriaPage;
            break;
        case '/blog.html':
            pageData = blogPage;
            break;
        case '/faq.html':
            pageData = faqPage;
            break;
        case '/servicioAutos.html':
            pageData = servicioAutosPage;
            break;
        case '/servicioHoteles.html':
            pageData = servicioHotelesPage;
            break;
        case '/servicioVuelos.html':
            pageData = servicioVuelosPage;
            break;
        case '/servicioPaquetes.html':
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
