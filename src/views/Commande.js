import {Button, Text, View} from "react-native";

export default function Commande(props){
    const {changeScreen} = props
    const {produits} = props

    return(
        <View>
            <Text>Merci pour votre commande</Text>
           <Button title={"Go to Panier (" + produits.filter(produit => produit.selected).length +")"} onPress={() => changeScreen('panier')} />
        </View>
    )
}
