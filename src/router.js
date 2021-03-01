import { createRouter, createWebHistory } from "vue-router";
import Calendar from './pages/Calendar'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'

const routes = [
    { path: '/calendar', component: Calendar },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;