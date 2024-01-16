import {Button, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Svg, {Path, Polyline} from 'react-native-svg';


export default function PageHeader(props) {
   const changeScreen = props.changeScreen;
   const currentPage = props.currentPage;
   const returnPage = props.returnPage;
   const produits = props.produits;
   return (
      <View id={"truc"} style={styles.headerContainer}>
         <TouchableOpacity onPress={() => changeScreen('home')}>
            <Svg style={styles.returnArrow} viewBox="0 0 512 512">
               <Polyline
                  points="328 112 184 256 328 400"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
               />
            </Svg>
         </TouchableOpacity>

         <Text style={styles.pageTitle}>{currentPage}</Text>

         <TouchableOpacity style={styles.panierContainer} onPress={() => changeScreen("panier")}>
            <Svg style={styles.panierSvg} xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 512 512">
               <Path
                  d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Z"/>
            </Svg>
            {produits?.filter(produit => produit.selected).length > 0 &&
               <View style={styles.panierCount}>
                  <Text>{produits.filter(produit => produit.selected).length}</Text>
               </View>
            }
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   headerContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: "row",
      height: 50,
      marginBottom: 10,
      width: "100%",
   },
   returnArrow: {
      width: 35,
      height: 35,
      margin: 15,
   },
   pageTitle: {
      fontSize: 30,
      fontWeight: "bold",
   },
   panierContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 30,
      width: 30,
      zIndex: 10,
      marginRight: 20,
   },
   panierSvg: {
      width: 30,
      height: 30,
   },
   panierCount: {
      position: "absolute",
      top: -3,
      right: -3,
      backgroundColor: "red",
      borderRadius: 50,
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
   }
});
