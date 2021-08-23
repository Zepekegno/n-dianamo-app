// Example to make Section List in React Native
// https://aboutreact.com/react-native-sectionlist/

// import React in our code
import { SCREEN_WIDTH } from 'App';
import { BLACK_COLOR, CRIMSON_COLOR, RED_COLOR, WHITE_COLOR } from 'colors/ConstantColors';
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,

  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Button, Card, Input, ListItem } from 'react-native-elements';
import { ListUser } from 'utils/Listuser';
import { ScrollView } from 'react-native-gesture-handler';

export const Profile = ({ navigation, route }) => {
  const USER = ListUser.filter((user) => user.id == 1)[0]
  const [display, setDispaly] = useState('none')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top  */}
        <ListItem bottomDivider={true}>
          <ListItem.Content>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: WHITE_COLOR,
              padding: 10,
              shadowColor: BLACK_COLOR,
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.9
            }}>
              <View style={{ width: 120, height: 120 }}>
                <Image source={USER.image} style={{
                  width: null,
                  height: null,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 100
                }} />
              </View>
              <View style={{ marginHorizontal: 10, }}>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{`${USER.firstName} ${USER.lastName}`}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{USER.age} ans</Text>
                <Button
                  title="Changer"
                  buttonStyle={{ backgroundColor: CRIMSON_COLOR }}
                  titleStyle={{ marginHorizontal: 8, textTransform: 'uppercase' }}
                  containerStyle={{
                    borderRadius: 10,
                    marginTop: 10,
                    backgroundColor: 'green'
                  }}
                  iconRight icon={<Icons name="camera" size={25} color={WHITE_COLOR} />} />
              </View>
            </View>
          </ListItem.Content>
        </ListItem>
        {/* About */}
        <ListItem>
          <ListItem.Content>
            <ListItem.Title ellipsizeMode='head' selectable={false} style={{ fontSize: 20 }}>About You</ListItem.Title>
            <Input placeholder="Dites un mot" autoCorrect multiline maxLength={1000} />
          </ListItem.Content>
        </ListItem>
        {/* Password */}
        <ListItem>
          <ListItem.Content>
            <ListItem.Title ellipsizeMode='head' selectable={false} style={{ fontSize: 20 }}>Set Your Password</ListItem.Title>
            <Input placeholder="Set Password" secureTextEntry />
          </ListItem.Content>
        </ListItem>
        {/* Email set */}
        <ListItem>
          <ListItem.Content>
            <ListItem.Title ellipsizeMode='head' selectable={false} style={{ fontSize: 20 }}>Email</ListItem.Title>
            <Input placeholder="example@gmail.com"
              rightIcon clearButtonMode="while-editing"
              autoCompleteType="email" />
          </ListItem.Content>
        </ListItem>
        {/* Phone Number set */}
        <ListItem>
          <ListItem.Content>
            <ListItem.Title ellipsizeMode='head' selectable={false} style={{ fontSize: 20 }}>Telephone</ListItem.Title>
            <Input placeholder="+224 669 12 76 96"
              rightIcon clearButtonMode="while-editing"
              autoCompleteType="tel" />
          </ListItem.Content>
        </ListItem>

        {/* Card Status */}
        <ListItem>
          <ListItem.Content>
            <ListItem.Title ellipsizeMode='head' selectable={false} style={{ fontSize: 20 }}>Status</ListItem.Title>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 200 }}>
                <Card>
                  <Card.Image source={USER.image} />
                  <Button title="voir" titleStyle={{ marginHorizontal: 8, textTransform: 'uppercase' }} iconRight icon={<Icons name='eye' size={25} color={WHITE_COLOR} />} />
                </Card>
              </View>
              <View style={{ width: 200 }}>
                <Card>
                  <Card.Image source={USER.image} />
                  <Button title="voir" titleStyle={{ marginHorizontal: 8, fontFamily: 'comic sans-serif', textTransform: 'uppercase' }} iconRight icon={<Icons name='eye' size={25} color={WHITE_COLOR} />} />
                </Card>
              </View>
            </View>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    padding: 10,
  },
});