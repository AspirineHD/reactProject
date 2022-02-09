import React, {useState, useEffect} from 'react';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ), 
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);

  //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า
  useEffect (()=>{
      //getData() for get data from backend
      const getData = async ()=>{
          const res = await axios.get('https://api.codingthailand.com/api/course')
          //alert(JSON.stringify(res.data.data)); //.data มาจากชื่อ Array ใน API
          setProduct(res.data.data);
      }

      getData();
  },[])

  return (
    <View>
      <FlatList
        //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
        data={ product }
        //keyExtractor คีย์หลัก
        keyExtractor={(item, index)=> item.id.toString()}
        //renderItem สำหรับ render UX/UI ที่จะให้ User มองเห็น
        renderItem={({item})=>(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: item.picture }} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Badge danger>
                    <Text>{item.view}</Text>
                </Badge>
              </Right>
            </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});