import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import api from '../Api/api';

export default function NovoUser() {
    const [txtNome, setTxtNome] = useState('');
    const [txtTel, setTxtTel] = useState(null);
    const [data_nasc, setData_nasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');
    const [estado_civil, setEstado_civil] = useState('');
    const [txtEmail, setTxtEmail] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    /** Altera o valor de setShowAlert para true */
    const handleShowAlert = () => {
        setShowAlert(true);
    };

    /** Altera o valor de setShowAlert para false */
    const hideAlert = () => {
        setShowAlert(false);
    };

    /**
     * Cria o componente Alert que é renderizado através do useEffect com o parâmetro showAlert
     */
    useEffect(() => {
        if (showAlert) {
            Alert.alert(
                'Atenção!',
                alertMessage,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            hideAlert();
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    }, [showAlert]);

    /**
     * * Função que realizada a requisição para inserção do cliente na API
    */
    const SalvarCliente = async (id) => {
        try {
            if (txtNome == '' || txtNome == null) {
                setAlertMessage('Preencha corretamente o campo nome!')
                handleShowAlert();
                return;
            }
            if (txtTel == '' || txtTel == null) {
                setAlertMessage('Preencha corretamente o campo Telefone')
                handleShowAlert();
                return;
            }
            if (data_nasc == '' || data_nasc == null) {
                setAlertMessage('Preencha corretamente o campo Data de nascimento')
                handleShowAlert();
                return;
            }
            if (cpf == '' || cpf == null) {
                setAlertMessage('Preencha corretamente o campo CPF')
                handleShowAlert();
                return;
            }
            if (sexo == '' || sexo == null) {
                setAlertMessage('Preencha corretamente o campo Sexo')
                handleShowAlert();
                return;
            }
            if (estado_civil == '' || estado_civil == null) {
                setAlertMessage('Preencha corretamente o campo Estado civil')
                handleShowAlert();
                return;
            }
            if (txtEmail == '' || txtEmail == null) {
                setAlertMessage('Preencha corretamente o campo Email')
                handleShowAlert();
                return;
            }


            const response = await api.post(`/user`, { NOME: txtNome.trim(), TELEFONE: txtTel.trim(), DATA_NASC: data_nasc.trim(), CPF: cpf.trim(), SEXO: sexo.trim(), ESTADO_CIVIL: estado_civil.trim(), EMAIL: txtEmail.trim() })
                .catch(function (error) {
                    if (error.response) {
                        console.error(error.response.data);
                        console.error(error.response.status);
                        console.error(error.response.headers);
                    } else if (error.request) {
                        if ((error.request._response).includes('Failed')) {
                            console.error("Erro ao conectar com a API");
                        }

                    } else {
                        console.error('Error:', error.message);
                    }
                    console.error(error.config);
                });
            console.log((response));
            if (response != undefined) {
                if (response.data[0].affectedRows == 1) {
                    setAlertMessage('Registro inserido com sucesso!')
                    setTxtNome('');
                    setTxtTel('');
                    setData_nasc('');
                    setCpf('');
                    setSexo('');
                    setEstado_civil('');
                    setTxtEmail('');
                    handleShowAlert();
                }
                else {
                    setAlertMessage('Ocorreu um erro ao inserir o registro');
                    handleShowAlert();
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ width: '80%' }}>
                <View style={styles.cardTitle}>
                    <Text style={styles.title}>Preencha os campos abaixo:</Text>
                </View>

                <Text>Nome:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={txtNome} onChangeText={setTxtNome} ></TextInput>

                <Text>Telefone:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={txtTel} onChangeText={setTxtTel}  ></TextInput>

                <Text>Data de nascimento:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={data_nasc} onChangeText={setData_nasc}  ></TextInput>

                <Text>CPF:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={cpf} onChangeText={setCpf}  ></TextInput>

                <Text>Sexo:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={sexo} onChangeText={setSexo}  ></TextInput>

                <Text>Estado civil:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={estado_civil} onChangeText={setEstado_civil}  ></TextInput>

                <Text>Email do cliente:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={txtEmail} onChangeText={setTxtEmail}  ></TextInput>
            </View>

            <TouchableOpacity
                onPress={() => {
                    SalvarCliente()
                }}
                style={[styles.alignVH, { width: '80%', height: 40, borderColor: 'black', backgroundColor: 'blue', borderRadius: 4 }]}>
                <Text style={{ color: 'white' }}>Salvar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //   justifyContent: 'center',
        gap: 10
    },
    alignVH: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5
    },
    alignLeft: {

        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'auto',
        paddingLeft: 45
    },
    cardTitle: {
        paddingBottom: 30,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});