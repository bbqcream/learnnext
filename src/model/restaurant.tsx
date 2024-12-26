export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">; // zipCode 빼고 들고오고 싶을 때
export type RestaurantOnlyCategory = Pick<Restaurant, "category">; // category만 들고오고 싶을 때

// export type ApiResponse<T>{
//   data:T[];
//   totalPage : number,
//   page:number
// }

// export type RestuarantResponse = ApiResponse<Restaurant>
// export type MenuResponse = ApiResponse<Menu>