import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export default function AlunoForm() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function salvar(){
        alert('Nome Preenchido' + nome)
    }
    
    const handleCadastro = () => {
    console.log(`Nome: ${nome}, Email: ${email}`);
};

    return (
        <View style={styles.container}>
            <Text variant='titleLarge' style={{ marginTop: 10 }}>
                Informe os Dados:
            </Text>

            <TextInput 
                label='Nome'
                style={styles.input}
                mode='outlined'
                value={nome}
                onChangeText={setNome}
            />

            <Button
                style={styles.input}
                mode='contained'
                icon='plus'
                onPress={salvar}
            >
                salvar
            </Button>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input:{
        width: '90%' ,
        marginTop: 10
    }
})