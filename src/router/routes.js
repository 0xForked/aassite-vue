import Public from '../layouts/public.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import NotFound from '../views/errors/404.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: '/about',
      component: Public,
      children: [
        {
            path: '',
            name: 'about',
            component: About
        },
      ]
    }
];

routes.push({
    path: '*',
    component: NotFound
})

export default routes