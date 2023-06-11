import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 63, justifyContent: "center" },
        headerTitleAlign: "center",
        headerStyle: { height: 68 },
        headerShadowVisible: {
          elevation: 1,
          backgroundColor: "#FFFFFF",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 27.18,
        },
        headerTitleStyle: {
          marginBottom: 11,
          fontSize: 17,
          lineHeight: 22,
          color: "#212121",
        },
        headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          tabBarIconStyle: { marginLeft: 45 },
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          headerRight: ({ focused, color }) => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: "Створити публікацію",
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("PostsScreen")}
                activeOpacity={0.6}
                style={{ paddingLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addButton}>
              <Ionicons name="md-add" size={size} color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  tabButton: {},
});
