import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./clientDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'clientDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'client',
        route: 'discounts.clientDiscounts.index',
    },
    children: routes,
};
