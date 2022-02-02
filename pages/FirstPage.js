import {View, Text, Button} from 'react-native';
import React from 'react';

import {styles} from '../components/Styles';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from './Logo';

const FirstPage = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Logo/>,
      headerRight: () => (
        <Button onPress={() => alert('Test :))')} title="Register" />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Ionicons name='home' size={50} color='indianred' />
          <Text style={styles.textTopStyle}>This is First Page</Text>
          
          <View>
            <Button
              title="Go To Second Page"
              onPress={() => navigation.navigate('SecondPage')}
            />
            <Button
              title="Go To Third Page"
              onPress={() => navigation.navigate('ThirdPage')}
            />
          </View>

          <View style={{bottom: 5, position: 'absolute'}}>
            <Text style={styles.textBottomStyle}>
              Thai-Nichi Institute of Technology
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
