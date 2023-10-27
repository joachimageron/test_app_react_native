import {Button, Text, View} from "react-native";

export default function Commande(props){
    const {changeScreen} = props

    return(
        <View>
            <Text>Merci pour votre commande</Text>
            <Button title="Go to Panier" onPress={() => changeScreen('panier')} />
        </View>
    )
}