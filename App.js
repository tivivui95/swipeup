import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    fadeOut();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <GestureRecognizer onSwipeUp={fadeIn}>
        {/* Screen after swipe */}
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
	    <Text>Hello, world!</Text>
      </Animated.View>

        {/* Screen before swipe */}
      <Animated.View style={[ styles.swipeCon, {opacity: fadeAnim2}]}>
      <View><Text style={styles.fadingText}>Swipe Up</Text></View>
      </Animated.View>


      </GestureRecognizer>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    backgroundColor: "powderblue",
    height: '100%',
    width: 350,
    position:'relative'
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    alignSelf: 'center'
  },
  swipeCon: {
    position:'absolute'
  }
});

export default App;