import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Label, Button, Icon, Form } from 'native-base';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { userStoreContext } from '../context/UserContext';

const validateSchema = Yup.object().shape({
    email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้่อง').required('กรุณากรอกอีเมลใหม่'),
    password: Yup.string().min(3,'รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป').required('กรุณาป้อนรหัสผ่าน'),
  });

const LoginScreen = ({navigation}) => {

    const userStore = React.useContext(userStoreContext);

    return (
        <Container>
          <Content padder>
          <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            //เมื่อคลิกที่ปุ่มให้ทำงานส่วนนี้
            onSubmit={async(values, { setSubmitting }) => {
              try {
                const url = 'https://api.codingthailand.com/api/login';
                const res = await axios.post(url,{
                  email : values.email,
                  password : values.password
                });
                //alert(JSON.stringify(res.data))
                //เก็บ Token ลงเครื่อง
                await AsyncStorage.setItem('@token', JSON.stringify(res.data));
                //get profile >> ให้ดูใน Postman ก่อน
                const urlProfile = 'https://api.codingthailand.com/api/profile';
                const resProfile = await axios.get(urlProfile,{
                  headers:{
                        Authorization : 'Bearer '+ res.data.access_token
                  }
                });
                //alert(JSON.stringify(resProfile.data.data.user));
                //เก็บข้อมูล Profile ลง AsyncStorage
                await AsyncStorage.setItem('@profile', JSON.stringify(resProfile.data.data.user));

                //get and update profile by Context(Global State)
                const profile = await AsyncStorage.getItem('@profile');
                userStore.updateProfile(JSON.parse(profile));

                alert('เข้าสู่ระบบเรียบร้อยแล้ว');
                navigation.navigate('Home');
              } catch (error) { //ถ้าใส่ข้อมูลไม่ถูกต้อง
                alert(error.response.data.message)
              } finally { //ให้ปุ่มสามารถกลับมากดหรือคลิกได้อีก
                setSubmitting(false)
              }
            }}
          >
            {/* errors ใช้สำหรับตรวจสอบ state (ถ้าผู้ใช้ไม่กรอกข้อมูลจะให้ error อะไรเกิดขึ้น) */}
            {/* touched เมื่อผู้ใช้ไปกดที่ name และเลื่อนเมาส์ออกไปด้านนอกช่อง input โดยไม่กรอกข้อมูล */}
            {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( 
              <Form>
              {/* กำหนดให้มีเส้นสีแดงถ้าผู้ใช้ไม่กรอกข้อมูลชื่อ */}
              <Item fixedLabel error={errors.email && touched.email?true:false}>
                <Label>Email</Label>
                <Input 
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType='email-address'
                />
                { errors.email && touched.email && <Icon name='close-circle'/> }
              </Item>
              {
                errors.email && touched.email && (
                  <Item>
                    <Label style={{color:'red'}}>{errors.email}</Label>
                  </Item>
                )
              }
              <Item fixedLabel last error={errors.password && touched.password?true:false}>
                <Label>Password</Label>
                <Input 
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  keyboardType='number-pad' //ให้คีย์บอร์ดแสดงเฉพาะตัวเลข
                  secureTextEntry={true} //ให้กรอกข้อมูลแล้วจะเป็นจุด
                />
                { errors.password && touched.password && <Icon name='close-circle'/> }
              </Item>
              {
                errors.password && touched.password && (
                  <Item>
                    <Label style={{color:'red'}}>{errors.password}</Label>
                  </Item>
                )
              }
              <Button 
                onPress = { handleSubmit } 
                disabled = { isSubmitting } //เปิดปิดปุ่มการทำงาน
                block large 
                style={{marginTop:30, backgroundColor:'#0096DA'}}
              >
                <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>เข้าสู่ระบบ</Text>
              </Button>
            </Form>
            )}
          </Formik>
          </Content>
        </Container>
      );
}

export default LoginScreen