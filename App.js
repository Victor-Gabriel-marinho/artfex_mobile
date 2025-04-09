import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  return (
    <KeyboardAvoidingView>
      <View>
        <Image
        source = {require('./assets/logo.png')}
        />
      </View>

      <View>
        <TextInput
        placeholder='Email'
        autoCorrect={false}
        onChangeText={() => {}}
        />

      </View>

      <View>

        <TextInput
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={() => {}}
        />

      </View>

      <TouchableOpacity>
        <Text>
          Acessar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>
          Criar conta
        </Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )

}
