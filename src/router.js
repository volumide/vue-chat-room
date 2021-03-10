import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ChatRoom from './components/ChatRoom'
import Profile from './components/Profile'
const routes = [
    {
        path: '/signin',
        component: Login,
    },
    {
        path: '/sign-up',
        component: SignUp,
    },
    {
        path: '/chat-room',
        component: ChatRoom
    },
    {
        path: '/profile',
        component: Profile
    }

]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route