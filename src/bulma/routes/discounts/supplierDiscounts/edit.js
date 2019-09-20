const SupplierDiscountEdit = () => import('../../../pages/discounts/supplierDiscounts/Edit.vue');

export default {
    name: 'discounts.supplierDiscounts.edit',
    path: ':supplierDiscount/edit',
    component: SupplierDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Discount',
    },
};
