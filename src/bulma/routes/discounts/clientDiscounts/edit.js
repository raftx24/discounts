const ClientDiscountEdit = () => import('../../../pages/discounts/clientDiscounts/Edit.vue');

export default {
    name: 'discounts.clientDiscounts.edit',
    path: ':clientDiscount/edit',
    component: ClientDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Discount',
    },
};
