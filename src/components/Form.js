import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function Form(props) {
    const [cadastro, setCadastro] = useState({})

    return (
        <>
        <Text style={styles.title}>Formulário</Text>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu Nome Completo"
                value={cadastro}
                onChangeText={value => {
                    setCadastro({ ...cadastro, nome: value })
                }} />

            <Text style={styles.label}>CPF</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                value={cadastro}
                onChangeText={value => {
                    setCadastro({ ...cadastro, cpf: value })
                }}
                keyboardType='numeric' />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                value={cadastro}
                onChangeText={value => {
                    setCadastro({ ...cadastro, email: value })
                }}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu Telefone "
                value={cadastro}
                onChangeText={value => {
                    setCadastro({ ...cadastro, telefone: value })
                }}
                keyboardType='numeric'
            />

            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua Data de Nascimento "
                value={cadastro}
                onChangeText={value => {
                    setCadastro({ ...cadastro, dataNascimento: value })
                }}
            />
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={() => console.log(cadastro)}>
                    <Text style={styles.buttonText}>Enviar Formulário</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    label: {
        fontSize: 18,
        margin: 10,
        color: 'black'
    },
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin : 10
    },
    buttonText:{
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    button:{
        marginLeft: 100,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 200,
        height: 50
    }
})

export default Form

