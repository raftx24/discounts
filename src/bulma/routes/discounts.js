import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./discounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: '/discounts',
    component: RouterView,
    meta: {
        breadcrumb: 'discounts',
    },
    children: routes,
};
