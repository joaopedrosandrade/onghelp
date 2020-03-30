import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {  View,  Image,Text,TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Detail(){
    const navigation = useNavigation();
    const message = 'Ola ONG, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha" com o valor de  R$ 120 reais';
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Bla',
            recipients: ['joao@gmail.com'],
            body: message,
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5533999995100?text=${message}`);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop: 0}]}>Ong:</Text>
                    <Text style={styles.incidentValue}>APAsD</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Aquix é a descrição</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>120 reais</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dias</Text>
                <Text style={styles.heroTitle}>Seja Heroi</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}