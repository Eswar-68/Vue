import contact from '../components/home/contact.vue';
import productdetail from '@/components/product/productdetail.vue';
import productlist from '@/components/product/productlist.vue';
import { createRouter, createWebHistory } from "vue-router";
import signup from '../components/home/signup.vue';
import homepage from '../components/home/homepage.vue';
import notfound from '../components/layout/notfound.vue';
import noaccess from '@/components/layout/noaccess.vue';

function isAdmin() {
    // Check if user is admin
    const admin = false; // Simulate admin check
    return admin ? true : { name: 'noaccess' }; // Redirect to noaccess if not admin
}

function isAuthenticated() {
    // Check if user is authenticated
    const authenticated = true; // Simulate authentication check
    return authenticated ? true : false; // Redirect to signup if not authenticated
}

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', component: homepage, name: 'home'},
        {path: '/signup', component: signup, name: 'signup'},
        {path: '/contact', component: contact, name: 'contact'},
        {path: '/contact-us', redirect: { name: 'contact' }},
        {path: '/productlist', component: productlist, name: 'productlist', 
            // beforeEnter: (to, from) => {
            // // Check if user is authenticated
            // // Individual route guard
            // if (!isAuthenticated) {
            //     return { name: 'signup' };
            // }
            beforeEnter: [isAdmin, isAuthenticated] // Multiple guards
        },
        //componentId is optional
        {path: '/productdetail/:id/:componentId?', component: productdetail, name: 'productdetail'},
        {path: '/noaccess', component: noaccess, name: 'noaccess'},
        {path: '/:catchAll(.*)', component: notfound},
    ],
    linkExactActiveClass: 'active-link', // Custom class for active links
});

// router.beforeEach((to, from, next) => {
//     console.log(`Navigating to ${to.path} from ${from.path}`);
//     next();
// });


//global navigation guard
router.beforeEach((to, from) => {
    if (!isAuthenticated && to.name !== 'signup') {
        console.log(to.name);
        return { name: 'signup' };
    }
    return true;
});

export default router;