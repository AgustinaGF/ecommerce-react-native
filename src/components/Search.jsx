import { StyleSheet, TextInput, View } from "react-native";
import {useState} from "react";

const Search = ({keyword,onSearch}) => {

  return (
    <View>
      <TextInput
        onChangeText={onSearch}
        style={styles.input}
        value={keyword}
        placeholder="Buscar Producto"></TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
    marginTop: 40,
  },
});
