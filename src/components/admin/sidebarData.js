import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Tag,
  Truck,
  Plus,
  Edit,
  List
} from 'lucide-react';

export const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
  { 
    id: 'products', 
    label: 'Products', 
    icon: Package, 
    badge: '245',
    subItems: [
      { id: 'all-products', label: 'All Products', icon: List },
      { id: 'add-product', label: 'Add Product', icon: Plus },
      { id: 'edit-product', label: 'Edit Product', icon: Edit },
    ]
  },
  { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '12' },
  { id: 'customers', label: 'Customers', icon: Users, badge: '1.2k' },
  { id: 'categories', label: 'Categories', icon: Tag, badge: null },
  { id: 'shipping', label: 'Shipping', icon: Truck, badge: null },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
  { id: 'settings', label: 'Settings', icon: Settings, badge: null },
];