import {Button, ScrollView, Text, View} from "react-native";
import Product from "../component/Product";

export default function Panier(props) {
    const {changeScreen} = props
    const {changeProduct} = props
    const {produits} = props
    return (
        <View>
            <Text>Panier</Text>
            <Text>{produits.filter(produit => produit.selected).length}</Text>
            <ScrollView>
                {produits.map(produit =>(
                    produit.selected &&
                    <Product changeScreen={changeScreen} key={produit.id} produit={produit} changeProduct={()=>changeProduct(produit.id)}/>

                ))}
            </ScrollView>
            <Button title="Commander" onPress={() => changeScreen('commande')}/>
            <Button title="Go to Home" onPress={() => changeScreen('home')}/>
        </View>
    )
}