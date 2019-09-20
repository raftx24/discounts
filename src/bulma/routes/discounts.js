import routeImporter from '@core-modules/importers/routeImporter';

const routes = routeImporter(require.context('./discounts', false, /.*\.js$/));
const RouterView = () => import('@core-pages/Router.vue');

export default {
    path: '/discounts',
    component: RouterView,
    meta: {
        breadcrumb: 'discounts',
    },
    children: routes,
};
