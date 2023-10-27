
import {useState} from "react";
import Home from "./src/views/Home";
import Panier from "./src/views/Panier";
import {View} from "react-native";
import tabProduits from "./src/data/tabProduits";
import Detail from "./src/views/Detail";
import Commande from "./src/views/Commande";

export default function App()  {
  const [currentPage, setCurrentPage] = useState("home")
  const [parametre, setparametre] = useState("")
  const changeScreen = (screenName,parametre) => {
    setCurrentPage(screenName);
    setparametre(parametre)
  }

    const [produits, setproduits]  = useState(tabProduits);
    const changeProduct=(id)=>{setproduits([...produits.map(produit=>produit.id === id?{...produit,selected: !produit.selected}:produit)])}


    return (
      <View>
          {currentPage === 'home' && <Home produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
          {currentPage === 'panier' && <Panier produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
          {currentPage === 'detail' && <Detail parametre={parametre} produits={produits} changeProduct={changeProduct} changeScreen={changeScreen}/>}
          {currentPage === 'commande' && <Commande changeScreen={changeScreen}/>}
      </View>
  );
}

