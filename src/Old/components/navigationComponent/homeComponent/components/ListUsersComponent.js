import React from "react";
import { Animated, Dimensions, View, Image, PanResponder, Text, ImageBackground } from "react-native"
import { ListUser } from "utils/Listuser";
import { ImageItem, ItemItextLeft } from "./ImageViewComponent/ItemTextLef";
import { ImageView } from "./ImageViewComponent/ImageView";
import { ItemTextRight } from "./ImageViewComponent/ItemTextRight";
import { ImageInfo } from "./ImageViewComponent/ImageInfo";

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export class ListUsersComponent extends React.Component {

  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY()
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.likedOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.nopeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      }, ...this.position.getTranslateTransform()]
    }
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, status) => {
        this.position.setValue({ x: status.dx, y: status.dy })
      },
      onPanResponderRelease: (e, status) => {
        if (status.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: status.dy },
            useNativeDriver: true
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (status.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: status.dy },
            useNativeDriver: true
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true
          }).start()
        }
      }
    })
    this.state = {
      currentIndex: 0,
      listUsers: []
    }
  }

  componentDidMount = () => {
    this.setState({ listUsers: [...ListUser] })
  }

  renderUser = () => {
    return this.state.listUsers.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      } else if (i == this.state.currentIndex) {
        return (

          <ImageView
            panHandlers={this.panResponder.panHandlers}
            gesture={true}
            rotateAndTranslate={this.rotateAndTranslate}
            key={i} width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>

            <ItemItextLeft opacity={this.likedOpacity} />
            <ItemTextRight opacity={this.nopeOpacity} />

            <Image
              style={{
                flex: 1,
                resizeMode: 'cover',
                height: null,
                width: null,
                borderRadius: 20,
              }}
              source={item.image}>
            </Image>
            <ImageInfo data={item} />
          </ImageView>
        )
      } else {
        return (
          <ImageView
            nextCardScale={this.nextCardScale}
            nextCardOpacity={this.nextCardOpacity}
            gesture={false}
            key={i} width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>

            <Image
              style={{
                flex: 1,
                resizeMode: 'cover',
                height: null,
                width: null,
                borderRadius: 20,
              }}
              source={item.image}>
            </Image>
            <ImageInfo data={item} />
          </ImageView>
        )
      }
    }).reverse()
  }

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.renderUser()}
        </View>
      </View>
    )
  }
}