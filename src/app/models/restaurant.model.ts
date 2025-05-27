export interface Restaurant {
  _id: string;
  name: string;
  city: string;
  rating: number;
  cuisine: string[];
  priceRange: {
    min: number;
    max: number;
  };
  features: {
    outdoorSeating: boolean;
    familyFriendly: boolean;
    liveMusic: boolean;
    wheelchairAccess: boolean;
  };
  tags: string[];
  contact: {
    phone: string;
    email: string;
  };
  location: {
    coordinates: [number, number];
    address: {
      line1: string;
      line2: string | null;
      zipcode: string;
    };
  };
  availableTables: number | null;
  revenue: string;
  menu: {
    item: string;
    price: number;
  }[];
  createdAt: string;
  updatedAt: string;
}
