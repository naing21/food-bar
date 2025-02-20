
export interface IMenu {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ICart extends IMenu {
  quantity: number;
}