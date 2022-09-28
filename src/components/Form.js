import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'


function Form(props) {
    const [cadastro, setCadastro] = useState({})

    function mostrar(cadastro) {
        if (cadastro != null && cadastro != {nome: ''}) {
            console.log(cadastro)
        } else{
            alert('O cadastro está vazio!')
        }
    }

    return (
        <>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Formulário</Text>
            </View>
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
                value={cadastro}
                style={styles.input}
                placeholder="Digite seu CPF"
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
                    onPress={() => mostrar(cadastro)}>
                    <Text style={styles.buttonText}>Enviar Formulário</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    titleArea: {
        backgroundColor: 'grey',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: '#FFF'
    },
    label: {
        fontSize: 18,
        margin: 10,
        color: 'grey'
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#FFF',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    button: {
        marginLeft: 100,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 200,
        height: 50
    }
})

export default Form

