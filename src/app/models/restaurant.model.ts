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

export const RestaurantData = [
  {
    "_id": "1",
    "name": "Restaurant 1",
    "city": "Chennai",
    "rating": 4.2,
    "cuisine": [
      "North Indian",
      "Mughlai"
    ],
    "priceRange": {
      "min": 114,
      "max": 1442
    },
    "features": {
      "outdoorSeating": true,
      "familyFriendly": true,
      "liveMusic": true,
      "wheelchairAccess": false
    },
    "tags": [
      "coffee",
      "dessert",
      "quiet"
    ],
    "contact": {
      "phone": "+91-8751098154",
      "email": "contact71@restaurant1.com"
    },
    "location": {
      "coordinates": [
        18.9958,
        78.3259
      ],
      "address": {
        "line1": "509, Main Road",
        "line2": null,
        "zipcode": "984394"
      }
    },
    "availableTables": null,
    "revenue": "6831356782",
    "menu": [
      {
        "item": "Rasam Rice",
        "price": 464
      },
      {
        "item": "Pasta Alfredo",
        "price": 478
      },
      {
        "item": "Tandoori Chicken",
        "price": 222
      },
      {
        "item": "Masala Dosa",
        "price": 214
      }
    ],
    "createdAt": "2025-03-14T00:00:00",
    "updatedAt": "2025-01-14T00:00:00"
  },
  {
    "_id": "2",
    "name": "Restaurant 2",
    "city": "Hyderabad",
    "rating": 3.6,
    "cuisine": [
      "Continental",
      "Italian"
    ],
    "priceRange": {
      "min": 101,
      "max": 973
    },
    "features": {
      "outdoorSeating": true,
      "familyFriendly": false,
      "liveMusic": true,
      "wheelchairAccess": true
    },
    "tags": [
      "premium",
      "fine-dine",
      "gourmet"
    ],
    "contact": {
      "phone": "+91-8992513196",
      "email": "contact70@restaurant2.com"
    },
    "location": {
      "coordinates": [
        26.1228,
        82.1126
      ],
      "address": {
        "line1": "446, Main Road",
        "line2": null,
        "zipcode": "268035"
      }
    },
    "availableTables": null,
    "revenue": "2626177909",
    "menu": [
      {
        "item": "Tandoori Chicken",
        "price": 339
      },
      {
        "item": "Pasta Alfredo",
        "price": 172
      },
      {
        "item": "Rasam Rice",
        "price": 184
      },
      {
        "item": "Naan",
        "price": 342
      },
      {
        "item": "Chow Mein",
        "price": 394
      }
    ],
    "createdAt": "2024-03-27T00:00:00",
    "updatedAt": "2024-03-02T00:00:00"
  },
  {
    "_id": "3",
    "name": "Restaurant 3",
    "city": "Delhi",
    "rating": 4.7,
    "cuisine": [
      "Indian",
      "Chinese"
    ],
    "priceRange": {
      "min": 246,
      "max": 1312
    },
    "features": {
      "outdoorSeating": false,
      "familyFriendly": false,
      "liveMusic": true,
      "wheelchairAccess": false
    },
    "tags": [
      "non-veg",
      "rooftop",
      "buffet"
    ],
    "contact": {
      "phone": "+91-8627360265",
      "email": "contact86@restaurant3.com"
    },
    "location": {
      "coordinates": [
        15.4133,
        84.3093
      ],
      "address": {
        "line1": "876, Main Road",
        "line2": null,
        "zipcode": "423772"
      }
    },
    "availableTables": 9,
    "revenue": "4899300683",
    "menu": [
      {
        "item": "Butter Chicken",
        "price": 458
      },
      {
        "item": "Masala Dosa",
        "price": 462
      },
      {
        "item": "Tandoori Chicken",
        "price": 185
      }
    ],
    "createdAt": "2024-01-06T00:00:00",
    "updatedAt": "2024-08-16T00:00:00"
  },
  {
    "_id": "4",
    "name": "Restaurant 4",
    "city": "Chennai",
    "rating": 4.6,
    "cuisine": [
      "Continental",
      "Italian"
    ],
    "priceRange": {
      "min": 254,
      "max": 1032
    },
    "features": {
      "outdoorSeating": false,
      "familyFriendly": false,
      "liveMusic": false,
      "wheelchairAccess": false
    },
    "tags": [
      "premium",
      "fine-dine",
      "gourmet"
    ],
    "contact": {
      "phone": "+91-7460669264",
      "email": "contact79@restaurant4.com"
    },
    "location": {
      "coordinates": [
        27.9454,
        75.7968
      ],
      "address": {
        "line1": "861, Main Road",
        "line2": null,
        "zipcode": "574888"
      }
    },
    "availableTables": null,
    "revenue": "6652572493",
    "menu": [
      {
        "item": "Cappuccino",
        "price": 115
      },
      {
        "item": "Sushi",
        "price": 147
      },
      {
        "item": "Butter Chicken",
        "price": 481
      }
    ],
    "createdAt": "2025-03-08T00:00:00",
    "updatedAt": "2024-09-02T00:00:00"
  },
  {
    "_id": "5",
    "name": "Restaurant 5",
    "city": "Mumbai",
    "rating": 4.1,
    "cuisine": [
      "Mexican",
      "Thai"
    ],
    "priceRange": {
      "min": 224,
      "max": 729
    },
    "features": {
      "outdoorSeating": false,
      "familyFriendly": false,
      "liveMusic": false,
      "wheelchairAccess": false
    },
    "tags": [
      "non-veg",
      "rooftop",
      "buffet"
    ],
    "contact": {
      "phone": "+91-9056652413",
      "email": "contact90@restaurant5.com"
    },
    "location": {
      "coordinates": [
        18.3743,
        77.7909
      ],
      "address": {
        "line1": "401, Main Road",
        "line2": null,
        "zipcode": "543219"
      }
    },
    "availableTables": 9,
    "revenue": "3159702946",
    "menu": [
      {
        "item": "Paneer Tikka",
        "price": 347
      },
      {
        "item": "Naan",
        "price": 425
      },
      {
        "item": "Tandoori Chicken",
        "price": 364
      }
    ],
    "createdAt": "2024-05-19T00:00:00",
    "updatedAt": "2024-01-19T00:00:00"
  },
  {
    "_id": "6",
    "name": "Restaurant 6",
    "city": "Pune",
    "rating": 3.7,
    "cuisine": [
      "North Indian",
      "Mughlai"
    ],
    "priceRange": {
      "min": 244,
      "max": 1041
    },
    "features": {
      "outdoorSeating": false,
      "familyFriendly": false,
      "liveMusic": true,
      "wheelchairAccess": false
    },
    "tags": [
      "non-veg",
      "rooftop",
      "buffet"
    ],
    "contact": {
      "phone": "+91-7833097318",
      "email": "contact90@restaurant6.com"
    },
    "location": {
      "coordinates": [
        12.9452,
        73.5237
      ],
      "address": {
        "line1": "398, Main Road",
        "line2": null,
        "zipcode": "531322"
      }
    },
    "availableTables": 6,
    "revenue": "8990025631",
    "menu": [
      {
        "item": "Masala Dosa",
        "price": 375
      },
      {
        "item": "Biryani",
        "price": 209
      },
      {
        "item": "Cappuccino",
        "price": 282
      }
    ],
    "createdAt": "2024-05-26T00:00:00",
    "updatedAt": "2025-01-06T00:00:00"
  },
  // {
  //   "_id": "7",
  //   "name": "Restaurant 7",
  //   "city": "Delhi",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 121,
  //     "max": 1098
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9517538142",
  //     "email": "contact50@restaurant7.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       13.4676,
  //       76.8122
  //     ],
  //     "address": {
  //       "line1": "243, Main Road",
  //       "line2": null,
  //       "zipcode": "459647"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "5132956828",
  //   "menu": [
  //     {
  //       "item": "Cappuccino",
  //       "price": 306
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 215
  //     }
  //   ],
  //   "createdAt": "2024-06-19T00:00:00",
  //   "updatedAt": "2024-09-08T00:00:00"
  // },
  // {
  //   "_id": "8",
  //   "name": "Restaurant 8",
  //   "city": "Bangalore",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "North Indian",
  //     "Mughlai"
  //   ],
  //   "priceRange": {
  //     "min": 224,
  //     "max": 1224
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7872822207",
  //     "email": "contact49@restaurant8.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       15.3493,
  //       74.1145
  //     ],
  //     "address": {
  //       "line1": "818, Main Road",
  //       "line2": null,
  //       "zipcode": "549764"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "5721440683",
  //   "menu": [
  //     {
  //       "item": "Biryani",
  //       "price": 382
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 303
  //     }
  //   ],
  //   "createdAt": "2024-11-03T00:00:00",
  //   "updatedAt": "2024-05-16T00:00:00"
  // },
  // {
  //   "_id": "9",
  //   "name": "Restaurant 9",
  //   "city": "Pune",
  //   "rating": 3.6,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 124,
  //     "max": 1322
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-7993924721",
  //     "email": "contact44@restaurant9.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       17.6832,
  //       71.4033
  //     ],
  //     "address": {
  //       "line1": "450, Main Road",
  //       "line2": null,
  //       "zipcode": "690742"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "4192935185",
  //   "menu": [
  //     {
  //       "item": "Biryani",
  //       "price": 350
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 246
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 500
  //     }
  //   ],
  //   "createdAt": "2025-03-11T00:00:00",
  //   "updatedAt": "2024-06-06T00:00:00"
  // },
  // {
  //   "_id": "10",
  //   "name": "Restaurant 10",
  //   "city": "Chennai",
  //   "rating": 3.6,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 201,
  //     "max": 1400
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-9612612072",
  //     "email": "contact50@restaurant10.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       19.8602,
  //       72.0566
  //     ],
  //     "address": {
  //       "line1": "462, Main Road",
  //       "line2": null,
  //       "zipcode": "264651"
  //     }
  //   },
  //   "availableTables": 10,
  //   "revenue": "4089628418",
  //   "menu": [
  //     {
  //       "item": "Green Curry",
  //       "price": 490
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 441
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 288
  //     }
  //   ],
  //   "createdAt": "2024-11-17T00:00:00",
  //   "updatedAt": "2025-03-28T00:00:00"
  // },
  // {
  //   "_id": "11",
  //   "name": "Restaurant 11",
  //   "city": "Bangalore",
  //   "rating": 4.1,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 138,
  //     "max": 964
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7584921961",
  //     "email": "contact13@restaurant11.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       22.9176,
  //       84.514
  //     ],
  //     "address": {
  //       "line1": "83, Main Road",
  //       "line2": null,
  //       "zipcode": "866907"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "3264878472",
  //   "menu": [
  //     {
  //       "item": "Tiramisu",
  //       "price": 421
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 277
  //     }
  //   ],
  //   "createdAt": "2024-11-08T00:00:00",
  //   "updatedAt": "2024-10-26T00:00:00"
  // },
  // {
  //   "_id": "12",
  //   "name": "Restaurant 12",
  //   "city": "Mumbai",
  //   "rating": 4.2,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 271,
  //     "max": 1217
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7871509383",
  //     "email": "contact53@restaurant12.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       24.5896,
  //       82.4819
  //     ],
  //     "address": {
  //       "line1": "808, Main Road",
  //       "line2": null,
  //       "zipcode": "494505"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6193843579",
  //   "menu": [
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 274
  //     },
  //     {
  //       "item": "Tiramisu",
  //       "price": 481
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 423
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 335
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 485
  //     }
  //   ],
  //   "createdAt": "2024-01-13T00:00:00",
  //   "updatedAt": "2024-02-28T00:00:00"
  // },
  // {
  //   "_id": "13",
  //   "name": "Restaurant 13",
  //   "city": "Bangalore",
  //   "rating": 4.3,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 293,
  //     "max": 1369
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-8355790563",
  //     "email": "contact78@restaurant13.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       12.125,
  //       70.1165
  //     ],
  //     "address": {
  //       "line1": "784, Main Road",
  //       "line2": null,
  //       "zipcode": "882096"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "8318513604",
  //   "menu": [
  //     {
  //       "item": "Tiramisu",
  //       "price": 208
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 104
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 486
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 196
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 391
  //     }
  //   ],
  //   "createdAt": "2024-04-17T00:00:00",
  //   "updatedAt": "2024-10-16T00:00:00"
  // },
  // {
  //   "_id": "14",
  //   "name": "Restaurant 14",
  //   "city": "Bangalore",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 202,
  //     "max": 735
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7755367274",
  //     "email": "contact39@restaurant14.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       21.6619,
  //       71.1631
  //     ],
  //     "address": {
  //       "line1": "282, Main Road",
  //       "line2": null,
  //       "zipcode": "925196"
  //     }
  //   },
  //   "availableTables": 8,
  //   "revenue": "2003596573",
  //   "menu": [
  //     {
  //       "item": "Butter Chicken",
  //       "price": 383
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 418
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 353
  //     }
  //   ],
  //   "createdAt": "2025-05-06T00:00:00",
  //   "updatedAt": "2025-01-29T00:00:00"
  // },
  // {
  //   "_id": "15",
  //   "name": "Restaurant 15",
  //   "city": "Hyderabad",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Mexican",
  //     "Thai"
  //   ],
  //   "priceRange": {
  //     "min": 163,
  //     "max": 1433
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7629999824",
  //     "email": "contact52@restaurant15.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       20.7527,
  //       76.3574
  //     ],
  //     "address": {
  //       "line1": "813, Main Road",
  //       "line2": null,
  //       "zipcode": "944784"
  //     }
  //   },
  //   "availableTables": 9,
  //   "revenue": "2614378004",
  //   "menu": [
  //     {
  //       "item": "Masala Dosa",
  //       "price": 337
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 345
  //     }
  //   ],
  //   "createdAt": "2024-07-07T00:00:00",
  //   "updatedAt": "2024-06-15T00:00:00"
  // },
  // {
  //   "_id": "16",
  //   "name": "Restaurant 16",
  //   "city": "Delhi",
  //   "rating": 4.8,
  //   "cuisine": [
  //     "North Indian",
  //     "Mughlai"
  //   ],
  //   "priceRange": {
  //     "min": 186,
  //     "max": 818
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8186863584",
  //     "email": "contact48@restaurant16.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       15.4271,
  //       78.7033
  //     ],
  //     "address": {
  //       "line1": "338, Main Road",
  //       "line2": null,
  //       "zipcode": "907133"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6941229310",
  //   "menu": [
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 233
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 352
  //     }
  //   ],
  //   "createdAt": "2024-12-17T00:00:00",
  //   "updatedAt": "2025-05-19T00:00:00"
  // },
  // {
  //   "_id": "17",
  //   "name": "Restaurant 17",
  //   "city": "Delhi",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "Mexican",
  //     "Thai"
  //   ],
  //   "priceRange": {
  //     "min": 297,
  //     "max": 725
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9329741684",
  //     "email": "contact25@restaurant17.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       19.0739,
  //       82.3353
  //     ],
  //     "address": {
  //       "line1": "992, Main Road",
  //       "line2": null,
  //       "zipcode": "687029"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "7721964215",
  //   "menu": [
  //     {
  //       "item": "Sushi",
  //       "price": 221
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 460
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 377
  //     },
  //     {
  //       "item": "Butter Chicken",
  //       "price": 271
  //     }
  //   ],
  //   "createdAt": "2024-03-20T00:00:00",
  //   "updatedAt": "2024-01-26T00:00:00"
  // },
  // {
  //   "_id": "18",
  //   "name": "Restaurant 18",
  //   "city": "Delhi",
  //   "rating": 4.5,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 149,
  //     "max": 1188
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9291768510",
  //     "email": "contact93@restaurant18.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       14.5476,
  //       83.5936
  //     ],
  //     "address": {
  //       "line1": "521, Main Road",
  //       "line2": null,
  //       "zipcode": "140696"
  //     }
  //   },
  //   "availableTables": 2,
  //   "revenue": "4361140056",
  //   "menu": [
  //     {
  //       "item": "Cappuccino",
  //       "price": 226
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 358
  //     },
  //     {
  //       "item": "Sushi",
  //       "price": 311
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 172
  //     }
  //   ],
  //   "createdAt": "2024-06-07T00:00:00",
  //   "updatedAt": "2024-09-26T00:00:00"
  // },
  // {
  //   "_id": "19",
  //   "name": "Restaurant 19",
  //   "city": "Delhi",
  //   "rating": 4.0,
  //   "cuisine": [
  //     "North Indian",
  //     "Mughlai"
  //   ],
  //   "priceRange": {
  //     "min": 120,
  //     "max": 1316
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7141616805",
  //     "email": "contact79@restaurant19.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       25.7038,
  //       73.3777
  //     ],
  //     "address": {
  //       "line1": "275, Main Road",
  //       "line2": null,
  //       "zipcode": "458513"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "3067029886",
  //   "menu": [
  //     {
  //       "item": "Rasam Rice",
  //       "price": 405
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 178
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 336
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 409
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 224
  //     }
  //   ],
  //   "createdAt": "2024-12-06T00:00:00",
  //   "updatedAt": "2024-04-02T00:00:00"
  // },
  // {
  //   "_id": "20",
  //   "name": "Restaurant 20",
  //   "city": "Bangalore",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 171,
  //     "max": 849
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8549615480",
  //     "email": "contact98@restaurant20.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       27.8087,
  //       81.2784
  //     ],
  //     "address": {
  //       "line1": "431, Main Road",
  //       "line2": null,
  //       "zipcode": "161749"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6354961396",
  //   "menu": [
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 378
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 138
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 326
  //     }
  //   ],
  //   "createdAt": "2024-05-02T00:00:00",
  //   "updatedAt": "2024-12-03T00:00:00"
  // },
  // {
  //   "_id": "21",
  //   "name": "Restaurant 21",
  //   "city": "Delhi",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 146,
  //     "max": 1140
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8050908209",
  //     "email": "contact33@restaurant21.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       26.74,
  //       76.3792
  //     ],
  //     "address": {
  //       "line1": "528, Main Road",
  //       "line2": null,
  //       "zipcode": "110112"
  //     }
  //   },
  //   "availableTables": 8,
  //   "revenue": "5029421261",
  //   "menu": [
  //     {
  //       "item": "Naan",
  //       "price": 311
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 279
  //     }
  //   ],
  //   "createdAt": "2024-04-21T00:00:00",
  //   "updatedAt": "2025-05-14T00:00:00"
  // },
  // {
  //   "_id": "22",
  //   "name": "Restaurant 22",
  //   "city": "Chennai",
  //   "rating": 4.3,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 221,
  //     "max": 958
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8013754666",
  //     "email": "contact34@restaurant22.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       25.4706,
  //       72.8043
  //     ],
  //     "address": {
  //       "line1": "825, Main Road",
  //       "line2": null,
  //       "zipcode": "702550"
  //     }
  //   },
  //   "availableTables": 9,
  //   "revenue": "4997137479",
  //   "menu": [
  //     {
  //       "item": "Cappuccino",
  //       "price": 168
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 205
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 213
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 313
  //     }
  //   ],
  //   "createdAt": "2024-03-22T00:00:00",
  //   "updatedAt": "2025-04-17T00:00:00"
  // },
  // {
  //   "_id": "23",
  //   "name": "Restaurant 23",
  //   "city": "Bangalore",
  //   "rating": 4.0,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 121,
  //     "max": 990
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-8392465130",
  //     "email": "contact73@restaurant23.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       24.3955,
  //       80.85
  //     ],
  //     "address": {
  //       "line1": "589, Main Road",
  //       "line2": null,
  //       "zipcode": "621368"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "8732734940",
  //   "menu": [
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 432
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 341
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 342
  //     },
  //     {
  //       "item": "Sushi",
  //       "price": 470
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 209
  //     }
  //   ],
  //   "createdAt": "2024-05-24T00:00:00",
  //   "updatedAt": "2025-02-16T00:00:00"
  // },
  // {
  //   "_id": "24",
  //   "name": "Restaurant 24",
  //   "city": "Delhi",
  //   "rating": 4.6,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 236,
  //     "max": 1242
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7305276298",
  //     "email": "contact99@restaurant24.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       14.5253,
  //       84.7144
  //     ],
  //     "address": {
  //       "line1": "872, Main Road",
  //       "line2": null,
  //       "zipcode": "401813"
  //     }
  //   },
  //   "availableTables": 4,
  //   "revenue": "2167316073",
  //   "menu": [
  //     {
  //       "item": "Butter Chicken",
  //       "price": 321
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 280
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 220
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 488
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 181
  //     }
  //   ],
  //   "createdAt": "2024-10-03T00:00:00",
  //   "updatedAt": "2024-04-14T00:00:00"
  // },
  // {
  //   "_id": "25",
  //   "name": "Restaurant 25",
  //   "city": "Delhi",
  //   "rating": 4.6,
  //   "cuisine": [
  //     "Continental",
  //     "Italian"
  //   ],
  //   "priceRange": {
  //     "min": 221,
  //     "max": 862
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9477876745",
  //     "email": "contact44@restaurant25.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       18.1234,
  //       75.0401
  //     ],
  //     "address": {
  //       "line1": "814, Main Road",
  //       "line2": null,
  //       "zipcode": "580936"
  //     }
  //   },
  //   "availableTables": 6,
  //   "revenue": "2753326929",
  //   "menu": [
  //     {
  //       "item": "Sushi",
  //       "price": 213
  //     },
  //     {
  //       "item": "Butter Chicken",
  //       "price": 182
  //     }
  //   ],
  //   "createdAt": "2024-11-19T00:00:00",
  //   "updatedAt": "2024-01-23T00:00:00"
  // },
  // {
  //   "_id": "26",
  //   "name": "Restaurant 26",
  //   "city": "Chennai",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 282,
  //     "max": 1119
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9240099190",
  //     "email": "contact60@restaurant26.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       19.1261,
  //       83.3982
  //     ],
  //     "address": {
  //       "line1": "895, Main Road",
  //       "line2": null,
  //       "zipcode": "795454"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "3491224070",
  //   "menu": [
  //     {
  //       "item": "Naan",
  //       "price": 173
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 328
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 170
  //     }
  //   ],
  //   "createdAt": "2025-01-31T00:00:00",
  //   "updatedAt": "2024-04-19T00:00:00"
  // },
  // {
  //   "_id": "27",
  //   "name": "Restaurant 27",
  //   "city": "Delhi",
  //   "rating": 4.1,
  //   "cuisine": [
  //     "North Indian",
  //     "Mughlai"
  //   ],
  //   "priceRange": {
  //     "min": 231,
  //     "max": 1036
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9407081784",
  //     "email": "contact85@restaurant27.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       27.9889,
  //       82.8863
  //     ],
  //     "address": {
  //       "line1": "369, Main Road",
  //       "line2": null,
  //       "zipcode": "195970"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "2065081189",
  //   "menu": [
  //     {
  //       "item": "Masala Dosa",
  //       "price": 297
  //     },
  //     {
  //       "item": "Tiramisu",
  //       "price": 448
  //     }
  //   ],
  //   "createdAt": "2024-05-18T00:00:00",
  //   "updatedAt": "2024-10-08T00:00:00"
  // },
  // {
  //   "_id": "28",
  //   "name": "Restaurant 28",
  //   "city": "Mumbai",
  //   "rating": 4.6,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 159,
  //     "max": 1445
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-9675235402",
  //     "email": "contact77@restaurant28.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       21.0885,
  //       75.6238
  //     ],
  //     "address": {
  //       "line1": "127, Main Road",
  //       "line2": null,
  //       "zipcode": "901379"
  //     }
  //   },
  //   "availableTables": 5,
  //   "revenue": "9247761286",
  //   "menu": [
  //     {
  //       "item": "Green Curry",
  //       "price": 134
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 206
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 201
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 494
  //     }
  //   ],
  //   "createdAt": "2024-08-31T00:00:00",
  //   "updatedAt": "2025-04-10T00:00:00"
  // },
  // {
  //   "_id": "29",
  //   "name": "Restaurant 29",
  //   "city": "Pune",
  //   "rating": 3.6,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 130,
  //     "max": 918
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-8752135874",
  //     "email": "contact64@restaurant29.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       15.8533,
  //       82.9356
  //     ],
  //     "address": {
  //       "line1": "326, Main Road",
  //       "line2": null,
  //       "zipcode": "405280"
  //     }
  //   },
  //   "availableTables": 2,
  //   "revenue": "2212865483",
  //   "menu": [
  //     {
  //       "item": "Rasam Rice",
  //       "price": 322
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 409
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 224
  //     }
  //   ],
  //   "createdAt": "2024-10-27T00:00:00",
  //   "updatedAt": "2024-10-18T00:00:00"
  // },
  // {
  //   "_id": "30",
  //   "name": "Restaurant 30",
  //   "city": "Hyderabad",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 272,
  //     "max": 981
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-9530792565",
  //     "email": "contact22@restaurant30.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       26.3582,
  //       72.5474
  //     ],
  //     "address": {
  //       "line1": "768, Main Road",
  //       "line2": null,
  //       "zipcode": "553169"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "9934644114",
  //   "menu": [
  //     {
  //       "item": "Tiramisu",
  //       "price": 478
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 483
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 381
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 157
  //     },
  //     {
  //       "item": "Tiramisu",
  //       "price": 353
  //     }
  //   ],
  //   "createdAt": "2024-02-24T00:00:00",
  //   "updatedAt": "2024-05-05T00:00:00"
  // },
  // {
  //   "_id": "31",
  //   "name": "Restaurant 31",
  //   "city": "Delhi",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 196,
  //     "max": 1176
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9937280568",
  //     "email": "contact40@restaurant31.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       27.7771,
  //       82.8438
  //     ],
  //     "address": {
  //       "line1": "428, Main Road",
  //       "line2": null,
  //       "zipcode": "937107"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6092795847",
  //   "menu": [
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 186
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 363
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 476
  //     }
  //   ],
  //   "createdAt": "2025-02-24T00:00:00",
  //   "updatedAt": "2024-08-26T00:00:00"
  // },
  // {
  //   "_id": "32",
  //   "name": "Restaurant 32",
  //   "city": "Bangalore",
  //   "rating": 4.2,
  //   "cuisine": [
  //     "Continental",
  //     "Italian"
  //   ],
  //   "priceRange": {
  //     "min": 261,
  //     "max": 1321
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-8599376742",
  //     "email": "contact84@restaurant32.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       13.0222,
  //       82.8008
  //     ],
  //     "address": {
  //       "line1": "144, Main Road",
  //       "line2": null,
  //       "zipcode": "684717"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "2653275865",
  //   "menu": [
  //     {
  //       "item": "Cappuccino",
  //       "price": 284
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 175
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 126
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 135
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 289
  //     }
  //   ],
  //   "createdAt": "2024-02-18T00:00:00",
  //   "updatedAt": "2025-02-03T00:00:00"
  // },
  // {
  //   "_id": "33",
  //   "name": "Restaurant 33",
  //   "city": "Bangalore",
  //   "rating": 4.0,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 254,
  //     "max": 1108
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9675710565",
  //     "email": "contact97@restaurant33.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       17.5326,
  //       76.7692
  //     ],
  //     "address": {
  //       "line1": "729, Main Road",
  //       "line2": null,
  //       "zipcode": "937787"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6550775448",
  //   "menu": [
  //     {
  //       "item": "Tiramisu",
  //       "price": 220
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 356
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 169
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 138
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 383
  //     }
  //   ],
  //   "createdAt": "2024-10-09T00:00:00",
  //   "updatedAt": "2024-12-08T00:00:00"
  // },
  // {
  //   "_id": "34",
  //   "name": "Restaurant 34",
  //   "city": "Hyderabad",
  //   "rating": 4.8,
  //   "cuisine": [
  //     "Continental",
  //     "Italian"
  //   ],
  //   "priceRange": {
  //     "min": 229,
  //     "max": 1224
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7352742977",
  //     "email": "contact77@restaurant34.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       12.7303,
  //       71.1793
  //     ],
  //     "address": {
  //       "line1": "344, Main Road",
  //       "line2": null,
  //       "zipcode": "776492"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "3975722660",
  //   "menu": [
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 246
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 211
  //     }
  //   ],
  //   "createdAt": "2024-09-19T00:00:00",
  //   "updatedAt": "2024-09-25T00:00:00"
  // },
  // {
  //   "_id": "35",
  //   "name": "Restaurant 35",
  //   "city": "Delhi",
  //   "rating": 4.1,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 238,
  //     "max": 1153
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8001154645",
  //     "email": "contact42@restaurant35.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       25.0624,
  //       72.7246
  //     ],
  //     "address": {
  //       "line1": "721, Main Road",
  //       "line2": null,
  //       "zipcode": "891145"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "6924739113",
  //   "menu": [
  //     {
  //       "item": "Rasam Rice",
  //       "price": 468
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 138
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 142
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 140
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 354
  //     }
  //   ],
  //   "createdAt": "2025-04-11T00:00:00",
  //   "updatedAt": "2024-04-25T00:00:00"
  // },
  // {
  //   "_id": "36",
  //   "name": "Restaurant 36",
  //   "city": "Mumbai",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 246,
  //     "max": 1023
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7742498399",
  //     "email": "contact54@restaurant36.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       13.1932,
  //       84.1633
  //     ],
  //     "address": {
  //       "line1": "464, Main Road",
  //       "line2": null,
  //       "zipcode": "107763"
  //     }
  //   },
  //   "availableTables": 10,
  //   "revenue": "9823947941",
  //   "menu": [
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 143
  //     },
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 489
  //     }
  //   ],
  //   "createdAt": "2024-12-19T00:00:00",
  //   "updatedAt": "2024-04-17T00:00:00"
  // },
  // {
  //   "_id": "37",
  //   "name": "Restaurant 37",
  //   "city": "Bangalore",
  //   "rating": 4.9,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 100,
  //     "max": 1055
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-7747589763",
  //     "email": "contact97@restaurant37.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       25.2579,
  //       76.2782
  //     ],
  //     "address": {
  //       "line1": "462, Main Road",
  //       "line2": null,
  //       "zipcode": "970473"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "8610761542",
  //   "menu": [
  //     {
  //       "item": "Tiramisu",
  //       "price": 294
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 440
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 422
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 118
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 483
  //     }
  //   ],
  //   "createdAt": "2024-11-16T00:00:00",
  //   "updatedAt": "2024-08-03T00:00:00"
  // },
  // {
  //   "_id": "38",
  //   "name": "Restaurant 38",
  //   "city": "Chennai",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 109,
  //     "max": 1491
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8197151391",
  //     "email": "contact25@restaurant38.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       21.1223,
  //       78.8403
  //     ],
  //     "address": {
  //       "line1": "540, Main Road",
  //       "line2": null,
  //       "zipcode": "864466"
  //     }
  //   },
  //   "availableTables": 5,
  //   "revenue": "4945304236",
  //   "menu": [
  //     {
  //       "item": "Naan",
  //       "price": 299
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 231
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 437
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 297
  //     }
  //   ],
  //   "createdAt": "2025-05-03T00:00:00",
  //   "updatedAt": "2024-06-16T00:00:00"
  // },
  // {
  //   "_id": "39",
  //   "name": "Restaurant 39",
  //   "city": "Mumbai",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 131,
  //     "max": 1247
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8910500705",
  //     "email": "contact43@restaurant39.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       13.0807,
  //       73.5182
  //     ],
  //     "address": {
  //       "line1": "688, Main Road",
  //       "line2": null,
  //       "zipcode": "693135"
  //     }
  //   },
  //   "availableTables": 7,
  //   "revenue": "7178663424",
  //   "menu": [
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 285
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 368
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 167
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 164
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 217
  //     }
  //   ],
  //   "createdAt": "2025-01-17T00:00:00",
  //   "updatedAt": "2024-01-29T00:00:00"
  // },
  // {
  //   "_id": "40",
  //   "name": "Restaurant 40",
  //   "city": "Bangalore",
  //   "rating": 3.9,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 111,
  //     "max": 838
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-8951311960",
  //     "email": "contact47@restaurant40.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       19.2859,
  //       75.3531
  //     ],
  //     "address": {
  //       "line1": "657, Main Road",
  //       "line2": null,
  //       "zipcode": "252035"
  //     }
  //   },
  //   "availableTables": 1,
  //   "revenue": "8422526721",
  //   "menu": [
  //     {
  //       "item": "Biryani",
  //       "price": 286
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 321
  //     }
  //   ],
  //   "createdAt": "2024-05-19T00:00:00",
  //   "updatedAt": "2024-01-15T00:00:00"
  // },
  // {
  //   "_id": "41",
  //   "name": "Restaurant 41",
  //   "city": "Hyderabad",
  //   "rating": 4.2,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 236,
  //     "max": 1226
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-8318729336",
  //     "email": "contact99@restaurant41.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       23.6705,
  //       81.7301
  //     ],
  //     "address": {
  //       "line1": "408, Main Road",
  //       "line2": null,
  //       "zipcode": "551816"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "5186513956",
  //   "menu": [
  //     {
  //       "item": "Cappuccino",
  //       "price": 434
  //     },
  //     {
  //       "item": "Tiramisu",
  //       "price": 497
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 343
  //     },
  //     {
  //       "item": "Chow Mein",
  //       "price": 212
  //     },
  //     {
  //       "item": "Butter Chicken",
  //       "price": 212
  //     }
  //   ],
  //   "createdAt": "2024-05-18T00:00:00",
  //   "updatedAt": "2025-02-06T00:00:00"
  // },
  // {
  //   "_id": "42",
  //   "name": "Restaurant 42",
  //   "city": "Hyderabad",
  //   "rating": 4.1,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 242,
  //     "max": 1310
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7280476628",
  //     "email": "contact56@restaurant42.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       16.601,
  //       75.6644
  //     ],
  //     "address": {
  //       "line1": "228, Main Road",
  //       "line2": null,
  //       "zipcode": "768502"
  //     }
  //   },
  //   "availableTables": 4,
  //   "revenue": "3329077372",
  //   "menu": [
  //     {
  //       "item": "Butter Chicken",
  //       "price": 266
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 367
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 499
  //     }
  //   ],
  //   "createdAt": "2024-06-16T00:00:00",
  //   "updatedAt": "2025-05-19T00:00:00"
  // },
  // {
  //   "_id": "43",
  //   "name": "Restaurant 43",
  //   "city": "Hyderabad",
  //   "rating": 3.7,
  //   "cuisine": [
  //     "Indian",
  //     "Chinese"
  //   ],
  //   "priceRange": {
  //     "min": 116,
  //     "max": 1353
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7716613664",
  //     "email": "contact67@restaurant43.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       18.5273,
  //       80.7885
  //     ],
  //     "address": {
  //       "line1": "34, Main Road",
  //       "line2": null,
  //       "zipcode": "322106"
  //     }
  //   },
  //   "availableTables": 5,
  //   "revenue": "1724683435",
  //   "menu": [
  //     {
  //       "item": "Chow Mein",
  //       "price": 386
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 187
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 396
  //     }
  //   ],
  //   "createdAt": "2024-09-22T00:00:00",
  //   "updatedAt": "2024-08-15T00:00:00"
  // },
  // {
  //   "_id": "44",
  //   "name": "Restaurant 44",
  //   "city": "Delhi",
  //   "rating": 4.6,
  //   "cuisine": [
  //     "Continental",
  //     "Italian"
  //   ],
  //   "priceRange": {
  //     "min": 198,
  //     "max": 1444
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "non-veg",
  //     "rooftop",
  //     "buffet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7320324783",
  //     "email": "contact87@restaurant44.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       17.2044,
  //       81.6779
  //     ],
  //     "address": {
  //       "line1": "997, Main Road",
  //       "line2": null,
  //       "zipcode": "852089"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "5326220628",
  //   "menu": [
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 273
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 113
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 398
  //     },
  //     {
  //       "item": "Rasam Rice",
  //       "price": 410
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 247
  //     }
  //   ],
  //   "createdAt": "2025-04-20T00:00:00",
  //   "updatedAt": "2024-03-06T00:00:00"
  // },
  // {
  //   "_id": "45",
  //   "name": "Restaurant 45",
  //   "city": "Bangalore",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 160,
  //     "max": 1358
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9453026418",
  //     "email": "contact59@restaurant45.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       26.365,
  //       79.9834
  //     ],
  //     "address": {
  //       "line1": "470, Main Road",
  //       "line2": null,
  //       "zipcode": "553628"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "4208737927",
  //   "menu": [
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 284
  //     },
  //     {
  //       "item": "Tandoori Chicken",
  //       "price": 390
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 289
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 180
  //     },
  //     {
  //       "item": "Cappuccino",
  //       "price": 186
  //     }
  //   ],
  //   "createdAt": "2024-03-15T00:00:00",
  //   "updatedAt": "2025-01-29T00:00:00"
  // },
  // {
  //   "_id": "46",
  //   "name": "Restaurant 46",
  //   "city": "Delhi",
  //   "rating": 4.5,
  //   "cuisine": [
  //     "North Indian",
  //     "Mughlai"
  //   ],
  //   "priceRange": {
  //     "min": 156,
  //     "max": 803
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-7977074322",
  //     "email": "contact100@restaurant46.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       13.0867,
  //       81.7555
  //     ],
  //     "address": {
  //       "line1": "799, Main Road",
  //       "line2": null,
  //       "zipcode": "553028"
  //     }
  //   },
  //   "availableTables": 2,
  //   "revenue": "5008787665",
  //   "menu": [
  //     {
  //       "item": "Naan",
  //       "price": 198
  //     },
  //     {
  //       "item": "Green Curry",
  //       "price": 239
  //     }
  //   ],
  //   "createdAt": "2025-01-29T00:00:00",
  //   "updatedAt": "2024-04-21T00:00:00"
  // },
  // {
  //   "_id": "47",
  //   "name": "Restaurant 47",
  //   "city": "Mumbai",
  //   "rating": 4.4,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 115,
  //     "max": 1335
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "coffee",
  //     "dessert",
  //     "quiet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9082104721",
  //     "email": "contact87@restaurant47.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       27.394,
  //       73.5557
  //     ],
  //     "address": {
  //       "line1": "68, Main Road",
  //       "line2": null,
  //       "zipcode": "754667"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "5394891258",
  //   "menu": [
  //     {
  //       "item": "Naan",
  //       "price": 242
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 126
  //     }
  //   ],
  //   "createdAt": "2024-09-29T00:00:00",
  //   "updatedAt": "2024-05-11T00:00:00"
  // },
  // {
  //   "_id": "48",
  //   "name": "Restaurant 48",
  //   "city": "Hyderabad",
  //   "rating": 4.8,
  //   "cuisine": [
  //     "South Indian",
  //     "Tandoor"
  //   ],
  //   "priceRange": {
  //     "min": 269,
  //     "max": 732
  //   },
  //   "features": {
  //     "outdoorSeating": true,
  //     "familyFriendly": true,
  //     "liveMusic": true,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "spicy",
  //     "casual",
  //     "local"
  //   ],
  //   "contact": {
  //     "phone": "+91-8705835284",
  //     "email": "contact52@restaurant48.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       18.6409,
  //       82.856
  //     ],
  //     "address": {
  //       "line1": "169, Main Road",
  //       "line2": null,
  //       "zipcode": "444829"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "1412456774",
  //   "menu": [
  //     {
  //       "item": "Butter Chicken",
  //       "price": 391
  //     },
  //     {
  //       "item": "Masala Dosa",
  //       "price": 224
  //     },
  //     {
  //       "item": "Butter Chicken",
  //       "price": 407
  //     }
  //   ],
  //   "createdAt": "2024-12-05T00:00:00",
  //   "updatedAt": "2024-01-24T00:00:00"
  // },
  // {
  //   "_id": "49",
  //   "name": "Restaurant 49",
  //   "city": "Chennai",
  //   "rating": 4.0,
  //   "cuisine": [
  //     "Continental",
  //     "Italian"
  //   ],
  //   "priceRange": {
  //     "min": 235,
  //     "max": 829
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": true,
  //     "wheelchairAccess": false
  //   },
  //   "tags": [
  //     "premium",
  //     "fine-dine",
  //     "gourmet"
  //   ],
  //   "contact": {
  //     "phone": "+91-9139587527",
  //     "email": "contact36@restaurant49.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       23.5939,
  //       74.4923
  //     ],
  //     "address": {
  //       "line1": "122, Main Road",
  //       "line2": null,
  //       "zipcode": "702505"
  //     }
  //   },
  //   "availableTables": null,
  //   "revenue": "3690857061",
  //   "menu": [
  //     {
  //       "item": "Pasta Alfredo",
  //       "price": 112
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 494
  //     },
  //     {
  //       "item": "Biryani",
  //       "price": 489
  //     },
  //     {
  //       "item": "Paneer Tikka",
  //       "price": 405
  //     }
  //   ],
  //   "createdAt": "2024-03-20T00:00:00",
  //   "updatedAt": "2024-06-20T00:00:00"
  // },
  // {
  //   "_id": "50",
  //   "name": "Restaurant 50",
  //   "city": "Pune",
  //   "rating": 3.8,
  //   "cuisine": [
  //     "Japanese",
  //     "Korean"
  //   ],
  //   "priceRange": {
  //     "min": 257,
  //     "max": 1293
  //   },
  //   "features": {
  //     "outdoorSeating": false,
  //     "familyFriendly": false,
  //     "liveMusic": false,
  //     "wheelchairAccess": true
  //   },
  //   "tags": [
  //     "vegetarian",
  //     "family",
  //     "budget"
  //   ],
  //   "contact": {
  //     "phone": "+91-9091514487",
  //     "email": "contact96@restaurant50.com"
  //   },
  //   "location": {
  //     "coordinates": [
  //       26.0113,
  //       72.2465
  //     ],
  //     "address": {
  //       "line1": "819, Main Road",
  //       "line2": null,
  //       "zipcode": "685683"
  //     }
  //   },
  //   "availableTables": 9,
  //   "revenue": "2851754032",
  //   "menu": [
  //     {
  //       "item": "Sushi",
  //       "price": 432
  //     },
  //     {
  //       "item": "Naan",
  //       "price": 166
  //     },
  //     {
  //       "item": "Tiramisu",
  //       "price": 216
  //     }
  //   ],
  //   "createdAt": "2024-03-18T00:00:00",
  //   "updatedAt": "2024-12-03T00:00:00"
  // }
]


export const menuList = [
  { item: 'Tandoori Chicken', price: 339 },
  { item: 'Pasta Alfredo', price: 172 },
  { item: 'Rasam Rice', price: 184 },
  { item: 'Naan', price: 342 },
  { item: 'Chow Mein', price: 394 },
  { item: 'Paneer Butter Masala', price: 260 },
  { item: 'Chicken Biryani', price: 310 },
  { item: 'Vegetable Pulao', price: 180 },
  { item: 'Butter Naan', price: 60 },
  { item: 'Gobi Manchurian', price: 200 },
  { item: 'Samosa', price: 50 },
  { item: 'Fish Curry', price: 320 },
  { item: 'Mutton Rogan Josh', price: 390 },
  { item: 'Dosa', price: 110 },
  { item: 'Idli Vada', price: 95 },
  { item: 'Palak Paneer', price: 230 },
  { item: 'Aloo Paratha', price: 90 },
  { item: 'Dal Tadka', price: 150 },
  { item: 'Egg Curry', price: 200 },
  { item: 'Chicken Tikka', price: 350 },
  { item: 'Veg Fried Rice', price: 190 },
  { item: 'Spring Rolls', price: 160 },
  { item: 'Hakka Noodles', price: 210 },
  { item: 'Thukpa', price: 230 },
  { item: 'Masala Dosa', price: 130 },
  { item: 'Pav Bhaji', price: 120 },
  { item: 'Chole Bhature', price: 160 },
  { item: 'Rajma Chawal', price: 170 },
  { item: 'Kadai Paneer', price: 250 },
  { item: 'Pani Puri', price: 60 },
  { item: 'Sev Puri', price: 70 },
  { item: 'Mysore Masala Dosa', price: 140 },
  { item: 'Chicken Korma', price: 330 },
  { item: 'Veg Kofta', price: 240 },
  { item: 'Prawn Curry', price: 360 },
  { item: 'Fried Chicken', price: 300 },
  { item: 'Beef Steak', price: 410 },
  { item: 'Caesar Salad', price: 180 },
  { item: 'Greek Salad', price: 190 },
  { item: 'Lasagna', price: 280 },
  { item: 'Mac and Cheese', price: 200 },
  { item: 'Chicken Wings', price: 270 },
  { item: 'Garlic Bread', price: 100 },
  { item: 'Tomato Soup', price: 120 },
  { item: 'Hot and Sour Soup', price: 140 },
  { item: 'Tandoori Roti', price: 30 },
  { item: 'Momos', price: 150 },
  { item: 'Bhel Puri', price: 60 },
  { item: 'Vada Pav', price: 50 },
  { item: 'Cheese Sandwich', price: 130 },
];
