import { Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

import {styles} from '../components/Styles'

const SecondPage = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, padding:15}}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>
                        This is the Second Page
                    </Text>
                    <Button
                        title="GO TO FIRST PAGE"
                        onPress={() => navigation.navigate('FirstPage')}
                    />
                    <Button
                        title="GO TO THIRD PAGE"
                        onPress={() => navigation.navigate('ThirdPage')}
                    />
                </View>
                <Text style={styles.textBottomStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        </SafeAreaView>
      );
};

export default SecondPage;
