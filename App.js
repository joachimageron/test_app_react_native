import {View, StyleSheet, Dimensions, Platform, BackHandler} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Home from "./src/views/Home";
import Panier from "./src/views/Panier";
import Detail from "./src/views/Detail";
import Commande from "./src/views/Commande";

const tabProduits = require("./src/data/tabProduits.json")

export default function App() {
   const [currentPage, setCurrentPage] = useState("home")
   const [lastPage, setLastPage] = useState("home")
   const [parametre, setparametre] = useState("")
   const changeScreen = (screenName, currentPage, parametre) => {
      setCurrentPage(screenName);
      setLastPage(currentPage);
      setparametre(parametre)
   }
   const [produits, setProduits] = useState(tabProduits);
   const changeProduct = async (id) => {
      const p = [...produits.map(produit =>
         produit.id === id ? (
            {...produit, selected: !produit.selected}
         ) : (
            produit)
      )]
      setProduits(p)
      await AsyncStorage.setItem('products', JSON.stringify(p));
   }
   useEffect(() => {
      const setProducts = async () => {
         try {
            let products = await JSON.parse(await AsyncStorage.getItem('products'))
            products === null ? await AsyncStorage.setItem('products', JSON.stringify(tabProduits)) : setProduits(products)
            console.log('sync faite')
         } catch (e) {
            alert(e)
         }
      }
      setProducts()

      const backActionSetter = () => {
      if (Platform.OS === 'web') return;
      const backAction = () => {
         changeScreen(lastPage, currentPage)
         return true;
      }
      const backHandler = BackHandler.addEventListener(
         "hardwareBackPress",
         backAction
      );
      return () => backHandler.remove();
      }
        backActionSetter()
   }, [])

   console.log(Dimensions.get('window').width)
   return (
      <SafeAreaProvider>
         <SafeAreaView style={ styles.container }>
            {currentPage === 'home' &&
               <Home produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
            {currentPage === 'panier' &&
               <Panier produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
            {currentPage === 'detail' &&
               <Detail parametre={parametre} produits={produits} changeProduct={changeProduct}
                       changeScreen={changeScreen}/>}
            {currentPage === 'commande' &&
               <Commande changeScreen={changeScreen} produits={produits}/>}
         </SafeAreaView>
      </SafeAreaProvider>

   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffdfa',
        width: Dimensions.get('window').width,
    },
});

