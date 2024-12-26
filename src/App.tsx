import "./App.css";
import React, { useState } from "react";
import Store from "./store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "식당",
  category: "western",
  address: {
    city: "daegu",
    detail: "somewhere",
    zipCode: 23425634,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "steak" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="app">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="불고기피자"
        category="피자"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
