export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const menuItems = [
  {
    id: 1,
    name: 'Pad Thai',
    price: 10.99,
    description: 'Stir-fry dish made with rice noodles'
  },
  {
    id: 2,
    name: 'Green Curry',
    price: 11.99,
    description: 'Combination of green curry paste, green chillies, etc'
  },
  {
    id: 3,
    name: 'Thai Iced Tea',
    price: 3.99,
    description: 'Refreshing drink made of brewed black tea and spices'
  }
];
