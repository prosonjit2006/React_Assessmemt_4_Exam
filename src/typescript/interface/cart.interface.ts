export interface CartItem {
  // id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
}

export interface CartState {
  isLoading: boolean;
  isError: string | null;
  cart: CartItem[];
  quantity: number;
}
