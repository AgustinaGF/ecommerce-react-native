import { View, Text } from "react-native";
import Header from "../src/components/Header";
import ItemListCategories from "./ItemListCategories";
import Categories from "../src/components/Categories";

function Home({setCategorySelected}) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Inicio"} />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
}

export default Home;
