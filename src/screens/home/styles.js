const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    //position: "absolute",
    //left: Platform.OS === "android" ? 40 : 50,
    //top: Platform.OS === "android" ? 35 : 60,
    width: 100,
    height: 100
  },
  text: {
    color: "#3b6bb9",
    bottom: 6,
    marginTop: 5
  }
};
