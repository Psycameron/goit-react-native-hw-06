import { useState } from "react";

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BackgroundImage from "../../assets/images/bg.jpg";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocusedInput, setIsFocusedInput] = useState("");

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmitForm = () => {
    keyboardHide();
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
  };

  const handleInputFocus = (inputName) => {
    setIsFocusedInput(inputName);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formWrapper,
                marginTop: isShowKeyboard ? 273 : 323,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={[
                  styles.input,
                  isFocusedInput === "email" && styles.inputFocused,
                ]}
                placeholder="Адреса електронної пошти"
                value={state.email}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus("email");
                }}
                onBlur={() => {
                  handleInputFocus("");
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
                }}
              />
              <TextInput
                style={[
                  styles.input,
                  styles.lastInput,
                  isFocusedInput === "password" && styles.inputFocused,
                ]}
                placeholder="Пароль"
                value={state.password}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus("password");
                }}
                onBlur={() => {
                  handleInputFocus("");
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}
              />
              <Text
                style={styles.showPass}
                onPress={() => {
                  setIsShowPassword((prevState) => !prevState);
                }}
              >
                {isShowPassword ? "Показати" : "Сховати"}
              </Text>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => onSubmitForm()}
              >
                <Text style={styles.textButton}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.toRegistrationWrapper} activeOpacity={0.7}>
                <Text style={styles.textLink}>Немає акаунту?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={[styles.textLink, styles.link]}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  formWrapper: {
    alignItems: "center",

    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 33,

    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
  lastInput: {
    marginBottom: 43,
  },
  inputFocused: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  showPass: {
    position: "absolute",
    top: 308,
    right: 32,

    fontFamily: "Roboto",
    lineHeight: 19,
    fontSize: 16,
    color: "#1B4371",
  },
  showPass: {
    position: "absolute",
    top: 182,
    right: 32,

    fontFamily: "Roboto",
    lineHeight: 19,
    fontSize: 16,
    color: "#1B4371",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textButton: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  toRegistrationWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  textLink: {
    fontFamily: "Roboto",

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
  link: {
    textDecorationLine: "underline",
  },
});
