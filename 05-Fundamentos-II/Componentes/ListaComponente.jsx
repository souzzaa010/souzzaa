import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaCompenentes() {

    const listaCarros = ["Gol Quadrado", "Astra", "Azera", "Uno c/Escada", "Corolla", "Honda Civic"]



  return (
    <View style={styles.container}>

        { listaCarros.map(
            (carro) => <Text>{carro}</Text>
        ) 
        }

        { listaCarros.map(
            (carro) => {
                return (
                    <View style={styles.containerVerde}>
                        <Text>{carro}</Text>
                    </View>
                )
            }
        ) 
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 10
    },
    containerVerde: {
        backgroundColor: 'green',
        borderWidth: 5,
        padding: 10
    }
})