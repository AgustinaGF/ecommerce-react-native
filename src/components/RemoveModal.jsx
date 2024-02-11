import { StyleSheet, Text, View, Pressable, Modal} from 'react-native'; 
 
 const RemoveModal=({
  modalVisible,
  cartItems,
  setCartItems,
  setModalVisible,
  itemSelected,
 })=>{
  console.log(modalVisible)
    const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false)
  };
  return(
  <Modal visible={modalVisible}  animationType="slide"
        transparent >
    <View>
      <Text>Queres Eliminar el producto?</Text>
      <Pressable onPress={()=>setModalVisible(false)}>
      <Text>No</Text>
      </Pressable>
       <Pressable onPress={removeItem}>
      <Text>Si</Text>
      </Pressable>
    </View>
  </Modal>
 )}

 export default RemoveModal