import {BackHandler, Button, Platform, ScrollView, Text, View, StyleSheet} from "react-native";
import Product from "../component/Product";
import {useEffect} from "react";
import PageHeader from "../component/PageHeader";

export default function Panier(props) {
   const {changeScreen} = props
   const {changeProduct} = props
   const {produits} = props
   const currentPage = 'panier'

   return (
      <View style={styles.container}>
         <PageHeader returnPage={'home'} currentPage={"Panier"} changeScreen={changeScreen}/>
         <View>
            <Text>{produits.filter(produit => produit.selected).length}</Text>
            <ScrollView>
               {produits.map(produit => (
                  produit.selected &&
                  <Product changeScreen={changeScreen} key={produit.id} produit={produit} detail={false}
                           changeProduct={() => changeProduct(produit.id)}/>

               ))}
            </ScrollView>
            <Button title="Commander" onPress={() => changeScreen('commande')}/>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
   },
});
