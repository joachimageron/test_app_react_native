import React from "react";
import {Text, View, StyleSheet, TextInput, Image, ScrollView, Button} from "react-native";
import ButtonA from "./ButtonA";
import Movie from "./Movie";

export default function Component() {
    const [inputValue, onChangeInputValue] = React.useState('');

    return (
        <View style={{width: "80%", alignItems: "center"}}>
            <Text>{inputValue}</Text>
            <View>
                <Image
                    style={style.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>

            <TextInput
                style = {style.textInput}
                value={inputValue}
                onChangeText={onChangeInputValue}
                placeholder={'écrivez tu texte ici'}
            />
            <ButtonA />
            <Movie/>
        </View>
    );


}
const style = StyleSheet.create({
    imgContainer :{
        alignItems: "center",
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: "center"
    },
})