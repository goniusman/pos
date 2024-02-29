import { Icon } from "@iconify/react";

import { SideNavItem } from "../types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon icon="lucide:layout-dashboard" width="20" height="20" />,
  },
  {
    title: "Product",
    path: "#",
    icon: <Icon icon="lucide:gantt-chart-square" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Category", path: "/product/category" },
      { title: "Product List", path: "/product/product-list" },
      { title: "Add Product", path: "/product/add-product" },
      { title: "Print Barcode", path: "/product/print-barcode" },
      { title: "Adjustment List", path: "/product/adjustment-list" },
      { title: "Add Adjustment", path: "/product/add-adjustment" },
      { title: "Stock Count", path: "/product/stock-count" },
    ],
  },
  {
    title: "Purchase",
    path: "#",
    icon: <Icon icon="lucide:credit-card" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Purchase", path: "/purchase/add-purchase" },
      { title: "Purchase List", path: "/purchase/purchase-list" },
    ],
  },
  {
    title: "Sale",
    path: "#",
    icon: <Icon icon="lucide:shopping-cart" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Sale", path: "/sale/add-sale" },
      { title: "Sale List", path: "/sale/sale-list" },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="20" height="20" />,
  },
  {
    title: "WooCommerce",
    path: "#",
    icon: <Icon icon="lucide:shopping-basket" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Category", path: "/woocommerce/category" },
      { title: "Products", path: "/woocommerce/products" },
      { title: "Add Product", path: "/woocommerce/add-product" },
      { title: "Orders", path: "/woocommerce/orders" },
      { title: "Customers", path: "/woocommerce/customers" },
      { title: "Reports", path: "/woocommerce/reports" },
      { title: "Coupons", path: "/woocommerce/coupons" },
      { title: "Shipping", path: "/woocommerce/shipping" },
    ],
  },
];
