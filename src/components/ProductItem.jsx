import {StyleSheet,Text, View} from 'react-native'
import Card from './Card';
const ProductItem=({product})=>{
    return(
       <Card>
        <Text style={styles.text}>{product.title}</Text>
       </Card>
    )
}

export default ProductItem;

const styles = StyleSheet.create({text:{fontSize:25}})