import routeImporter from '@core-modules/importers/routeImporter';

const routes = routeImporter(require.context('./clientDiscounts', false, /.*\.js$/));
const RouterView = () => import('@core-pages/Router.vue');

export default {
    path: 'clientDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'client',
        route: 'discounts.clientDiscounts.index',
    },
    children: routes,
};
