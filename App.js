import {View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from "./src/views/Home";
import Panier from "./src/views/Panier";
import Detail from "./src/views/Detail";
import Commande from "./src/views/Commande";

const tabProduits = require("./src/data/tabProduits.json")
console.log(tabProduits)

export default function App() {
   const [currentPage, setCurrentPage] = useState("home")
   const [parametre, setparametre] = useState("")
   const changeScreen = (screenName, parametre) => {
      setCurrentPage(screenName);
      setparametre(parametre)
   }
   const [produits, setproduits] = useState(tabProduits);
   const changeProduct = async (id) => {
      const p = [...produits.map(produit =>
         produit.id === id ? (
            {...produit, selected: !produit.selected}
         ) : (
            produit)
      )]
      setproduits(p)
      await AsyncStorage.setItem('products', JSON.stringify(p));
   }
   useEffect(() => {
      const setProducts = async () => {
         try {
            let products = await JSON.parse(await AsyncStorage.getItem('products'))
            products === null ? await AsyncStorage.setItem('products', JSON.stringify(tabProduits)) : setproduits(products)
            console.log('sync faite')
         } catch (e) {
            alert(e)
         }
      }
      setProducts()
   }, [])


   return (
      <View>
         {currentPage === 'home' &&
            <Home produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
         {currentPage === 'panier' &&
            <Panier produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
         {currentPage === 'detail' &&
            <Detail parametre={parametre} produits={produits} changeProduct={changeProduct}
                    changeScreen={changeScreen}/>}
         {currentPage === 'commande' &&
            <Commande changeScreen={changeScreen}/>}
      </View>
   );
}

