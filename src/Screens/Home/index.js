import React from "react";
import { HomeComponent } from "./style";
import Actions from "./Actions";
import Header from "./Header";
import { Search } from "../../Components";

function Home() {
  return (
    <HomeComponent>
      <Actions />
      <Header />
      <Search />
    </HomeComponent>
  );
}

export default Home;
