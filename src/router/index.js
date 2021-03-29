import VueRouter from 'vue-router'
import About from '../components/About'
import header from "../components/header"
import Services from "@/components/Services";
import Contact from "@/components/Contact";
// import NotFound from ""

export default  new VueRouter({
    routes:[
        {
            path: '/home',
            name: 'home',
            component: header
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
        // Если ввел не корректный адрес
        // {
        //     path: '*',
        //     name: 'notFound',
        //     component: NotFound
        // }

    ]

})