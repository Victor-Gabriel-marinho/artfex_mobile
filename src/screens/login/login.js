import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, ScrollView, registerCallableModule, Linking, } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import register from '../register/register';


export default function login(){
  return (

      <KeyboardAvoidingView style = {styles.background}>
      
        <View style = {styles.main}>
          <View style = {styles.logo}>
            <Image
            style = {styles.img}
            source = {require('../../../assets/logo-svg.png')}
            />
          </View>
          <View style = {styles.title}>
            <Text style = {styles.tt} >
              Faça seu login
            </Text>
          </View>
          <View style = {styles.inputs_container}>
            <TextInput
            style = {styles.inputs}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style = {styles.inputs}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TouchableOpacity style = {styles.btn_submit}>
              <Text style = {styles.submit_text}>
                Acessar
              </Text>
            </TouchableOpacity>
            <View style = {styles.line}>
            </View>
            <Text>
              Não tem uma conta ?
              <Link style = {styles.btn_register} screen={register}>
                <Text style = {styles.register_text}>
                  Clique aqui
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    
  )

}


const styles = StyleSheet.create({
  main : {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  
  },
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tt: {
    color: "#082621",
    fontSize: 30,
  },
  title:{
    width: '80%',
    height: '8%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#F2994B',
    marginBottom: 40,
  },
  inputs_container:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '40%',
  },
  img:{
    width: 50,
    height: 60,
    tintColor: 'white',
  },
  inputs:{
    width: '100%',
    marginBottom: '30',
    fontSize: 17,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    },
  btn_submit:{
    backgroundColor: '#F2994B',
    width: '100%',
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,    
  },
  submit_text:{
    color: '#FFF',
    fontSize: 17,
  },
  btn_register:{
  },
  register_text: {
    color: '#F2994B',
    fontSize: 16,
  },
  line: {

    borderBottomWidth: 1,
    display: 'flex',
    width: '100%',
    height: '15%',
    borderBottomColor: '#ccc',
    marginBottom: 20,
  }

})