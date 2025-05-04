import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App(){
  return (
    <KeyboardAvoidingView style = {styles.background}>
      <View style = {styles.logo}>
        <Image
        style = {styles.img}
        source = {require('./assets/logo-svg.png')}
        />
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

        <TouchableOpacity style = {styles.btn_register}>
          <Text style = {styles.submit_text}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )

}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2994B'
  },
  logo:{
    flex: 1,
    justifyContent: 'center',

  },
  inputs_container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: -100,
  },
  img:{
    width: 210,
    height: 250,
  },
  inputs:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: '15',
    color: '#222',
    fontSize: 17,
    borderRadius: 20,
    padding: 10,
  },
  btn_submit:{
    backgroundColor: '#3F8B3C',
    width: '90%',
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 20,
  },
  submit_text:{
    color: '#FFF',
    fontSize: 17,
  },
  btn_register:{
    marginTop: 10,
    backgroundColor: '#F2541D',
    width: '90%',
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 20,
  },

})
