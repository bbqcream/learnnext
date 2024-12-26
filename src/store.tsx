import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
  info: Restaurant;
  changeAddress(adress: Address): void; // 리턴 타입이 없을 경우 void
}



const Store: React.FC<OwnProps> = ({ info }) => {
  // 들어오는 값이 OwnProps이다.
  return <>{info.name}</>;
};

export default Store;
