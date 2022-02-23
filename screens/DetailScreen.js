import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import axios from 'axios';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';

const DetailScreen = ({navigation, route}) => {

  const {id, title} = route.params;

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      //title:'เทส' //set แบบ Static
      title: title //set แบบ Dynamic
    })
  },[navigation])

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (id)=> {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course/' +id)
    setDetail(res.data.data);
    setLoading(false);
  }

  useFocusEffect (
    //useCallBack เอาไว้ Optimize ฟังชั่น เพื่อไม่ให้ re-render ของ child component
    React.useCallback(()=>{
      getData(id);
    },[id])
  );

  if(loading===true){
    return(
      <View styles={styles.container}>
        <ActivityIndicator color='blue' size='large'/>
      </View>
    )
  }

  const _onRefresh = ()=> {
    getData(id);
  }

  return (
    <View>
    <FlatList
      //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
      data={ detail }
      //keyExtractor คีย์หลัก
      keyExtractor={(item, index)=> item.ch_id.toString()}
      //pull to refresh ลากลงมาให้ดึงข้อมูลใหม่
      onRefresh={_onRefresh} //เรียก Function
      refreshing={loading} //ถ้า refreshing เป็น true คือจะรอให้ refresh data
      //renderItem สำหรับ render UX/UI ที่จะให้ User มองเห็น
      renderItem={({item, index})=>(
          <ListItem thumbnail>
            <Left>
              <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>{item.ch_detail}</Text>
            </Body>
            <Right>
              <Badge danger>
                  <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
      )}
    />
  </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
