import {Text, View,FlatList} from "react-native"
import allProducts from './../src/data/products.json'
import ProductItem from "../src/components/ProductItem"
import Search from "../src/components/Search"
import { useEffect, useState } from "react"

function ItemListCategories({ category }){
const [products,setProducts]=useState()
const [keyword,setKeyword]=useState()
    useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts)
    }
  }, []);

  return (
    <View>
      <Search keyword={keyword} onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ItemListCategories;