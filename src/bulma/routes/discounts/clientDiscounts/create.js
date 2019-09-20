const ClientDiscountCreate = () => import('../../../pages/discounts/clientDiscounts/Create.vue');

export default {
    name: 'discounts.clientDiscounts.create',
    path: 'create',
    component: ClientDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Discount',
    },
};
