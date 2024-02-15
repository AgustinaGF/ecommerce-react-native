import {Text, View,FlatList, StyleSheet, Pressable} from "react-native"
import allProducts from './../src/data/products.json'
import ProductItem from "../src/components/ProductItem"
import Search from "../src/components/Search"
import { useEffect, useState } from "react"



function ItemListCategories({ category, setCategorySelected, setProductDetailId}) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
       <Pressable onPress={()=>setCategorySelected('')}>
        <Text>Inicio</Text>
      </Pressable>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} setProductDetailId={setProductDetailId}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:20
  },
});