import React from "react";
import {Text, View} from "react-native";
export default function Movie() {
    const movies = [
        { id: 1, title: 'Star Wars' },
        { id: 2, title: 'Harry Potter' },
        { id: 3, title: 'Le Seigneur des Anneaux' },
    ]

    return (
        <View>
            {movies.map(movie =>(
                <Text key={movie.id}>{movie.title}</Text>
            ))}
        </View>
    )
}