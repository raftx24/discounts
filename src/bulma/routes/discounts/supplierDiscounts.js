import routeImporter from '@core-modules/importers/routeImporter';

const routes = routeImporter(require.context('./supplierDiscounts', false, /.*\.js$/));
const RouterView = () => import('@core-pages/Router.vue');

export default {
    path: 'supplierDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'supplier',
        route: 'discounts.supplierDiscounts.index',
    },
    children: routes,
};
