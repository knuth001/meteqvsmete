export interface SwaggerProduct {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface SwaggerCategory {
  id: number;
  name: string;
  description: string;
}

export interface SwaggerOrder {
  id: number;
  orderNumber: string;
  status: string;
  total: number;
  items: SwaggerProduct[];
}

export interface SwaggerUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface SwaggerPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
