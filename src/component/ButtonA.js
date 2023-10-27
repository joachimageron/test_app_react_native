import {Button, View} from "react-native";

export default function ButtonA(){
    const handleClick = () => {
        alert("trop bien !")
    }

    return (
        <View>
        <Button title="Click me!" onPress={handleClick}/>
        </View>
    )
}