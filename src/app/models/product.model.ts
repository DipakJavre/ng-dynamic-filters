export interface Product {
  _id: string;
  id: string;
  name: string;
  category: string;
  isActive: boolean;
  price: number;
  rating: number;
  releaseDate: string;   
  createdAt: string;   
  brand: string;
  features: string[];
  specifications: Specifications;
}

export interface Specifications {
  ram: string;
  storage: string;
  battery: string;
  capacity: string;
  energyRating: string;
  smartFeatures: boolean;
}
