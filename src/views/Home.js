import {useState} from "react";
import tabProduits from "../data/tabProduits";
import Product from "../component/Product";
import {ScrollView, View, StyleSheet, Text, Button} from "react-native";

export default function Home(props){
    const {changeScreen} = props
    const {changeProduct} = props
    const {produits} = props
    return (
        <View style={styles.container}>
            <Text>Ma super app !!!</Text>

            <Text>{produits.filter(produit => produit.selected).length}</Text>

            <ScrollView contentContainerStyle={styles.listeProduct} >
                {produits.map(produit =>(
                    <Product key={produit.id} produit={produit} changeProduct={()=>changeProduct(produit.id)} changeScreen={changeScreen}/>
                ))}
            </ScrollView>

            <Button title="Go to Panier" onPress={() => changeScreen('panier')} />
            <Button title="Go to Detail" onPress={() => changeScreen('detail',"3")} />
        </View>
    );
}

const styles = StyleSheet.create({
    listeProduct: {
        maxWidth: 400,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#fff',
        justifyContent: 'flex-start',

    }
});
