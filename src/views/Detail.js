import {Button, View} from "react-native";
import Product from "../component/Product";

export default function Detail(props){
    const {changeScreen} = props
    const {changeProduct} = props
    const {produits} = props
    const {parametre} = props
    const produit = produits.find(e => e.id === parametre)
    return(
        <View>
            <Product key={produit.id} produit={produit} changeProduct={()=>changeProduct(produit.id)} changeScreen={changeScreen}/>
            <Button title="Go to Home" onPress={() => changeScreen('home')}/>
        </View>
    )
}