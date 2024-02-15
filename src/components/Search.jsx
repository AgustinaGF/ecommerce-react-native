import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {useState} from "react";
import { Entypo } from "@expo/vector-icons";

const Search = ({keyword,onSearch}) => {
  const [input, setInput] = useState("");

  // handleSearch va a realizar un filtrado de los productos utilizando el valor guardado en "input"
  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  //funcion que limpia el campo del input
  const removeInput = () => {
    setInput("");
  };
  return (
    <View style={styles.container}>
     
      <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onSearch}
        style={styles.input}
        value={keyword}
        placeholder="Buscar Producto"/>
          <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
        </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },

  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
  },
});
