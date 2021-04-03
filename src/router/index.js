import VueRouter from 'vue-router'
import About from '../views/About'
import Home from "../views/Home"
import Services from "@/views/Services";
import Contact from "@/views/Contact";
// import NotFound from ""

export default  new VueRouter({
    routes:[
        {
            path: '/home',
            name: 'home',
            component: Home
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