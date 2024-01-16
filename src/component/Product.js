import {Image, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Platform} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from 'expo-checkbox';


export default function Product(props) {
    const {changeScreen} = props
    const {returnPage} = props
    const {produit} = props
    const {changeProduct} = props
    const {detail} = props
    return (
        <TouchableOpacity onPress={() => changeScreen('detail', returnPage ,produit.id)} style={style.listItem}>
            <Image source={{uri : produit.imageUrl}} style={style.img} resizeMode="cover"/>
            <View style={[style.flexrow, style.header]}>
                <Text>{produit.nom}</Text>
                <Text>{produit.prix}</Text>
            </View>
            <View style={style.flexrow}>
                {detail ?  <Text style={style.desc}>{produit.longDescription}</Text> : <Text style={style.desc}>{produit.description}</Text>}
                <View>
                    {Platform.OS === 'web' ? (
                        <TouchableWithoutFeedback onPress={(e) => {
                            e.preventDefault();
                            changeProduct(produit.id);
                        }}>

                            <Checkbox value={produit.selected}/>
                        </TouchableWithoutFeedback>
                        ):(
                        <Checkbox value={produit.selected} onValueChange={(e) => {
                            changeProduct(produit.id);
                        }}/>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    listItem: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 20,
    },
    flexrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
    },
    img: {
        width: "100%",
        height: 100
    },
    header: {
        marginBottom: 10,
        marginTop: 5,
    },
    desc:{
        width: "80%"
    }
})
