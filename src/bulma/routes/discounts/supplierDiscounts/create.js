const SupplierDiscountCreate = () => import('../../../pages/discounts/supplierDiscounts/Create.vue');

export default {
    name: 'discounts.supplierDiscounts.create',
    path: 'create',
    component: SupplierDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Supplier Discount',
    },
};
