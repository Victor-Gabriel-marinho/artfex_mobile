import {KeyboardAvoidingView, View, StyleSheet, Image} from "react-native"


export default function register(){
  return (
    <KeyboardAvoidingView style = {styles.background}>
      <View style = {styles.main}>
        <View style = {styles.logo}>
          <Image style = {styles.img} source = {require('../../../assets/logo-svg.png')}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

})