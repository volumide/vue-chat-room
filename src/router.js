import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import SignUp from './components/SignUp'
const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/sign-up',
        component: SignUp,
    },

]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route