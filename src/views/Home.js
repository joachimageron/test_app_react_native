import {useState} from "react";
import tabProduits from "../data/tabProduits.json";
import Product from "../component/Product";
import {ScrollView, View, StyleSheet, Text, Button} from "react-native";
import PageHeader from "../component/PageHeader";

export default function Home(props){
    const {changeScreen} = props
    const {changeProduct} = props
    const {produits} = props
    return (
        <View style={styles.container}>
            <PageHeader currentPage={"Home"} produits={produits} changeScreen={changeScreen}/>
            <ScrollView contentContainerStyle={styles.listeProduct} >
                {produits.map(produit =>(
                    <Product key={produit.id} produit={produit} detail={false} returnPage={'home'} changeProduct={()=>changeProduct(produit.id)} changeScreen={changeScreen}/>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listeProduct: {
        maxWidth: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
    }
});
