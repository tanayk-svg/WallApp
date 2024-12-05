import { SplitView } from '@/components/SplitView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    const theme = useColorScheme() ?? "light"; 
  return (
    <Tab.Navigator style = {{flex:1,}}
      screenOptions={{
        tabBarActiveTintColor:Colors[theme].text,
        tabBarStyle: {
          backgroundColor: theme === "light" ? Colors.light.background : Colors.dark.background,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "red",
          height:5
        }
    }}>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}
function LibraryScreen() {
  const wallpapers = useLibraryWallpapers();
  const theme = useColorScheme() ?? "light";
   
  return (
    <View
      style={{ flex: 1, backgroundColor: theme == "light" ? "white" : "black" }}
    >
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}

function LikedScreen(){
  const wallpapers = useLikedWallpapers();
  const theme = useColorScheme() ?? 'light';
   return (
     <View style={{flex:1,backgroundColor: theme =="light"?"white":"black"}}>
       <SplitView wallpapers={wallpapers} />
     </View>
   );
}
function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers();
  const theme = useColorScheme() ?? "light";
   return (
    <View
      style={{ flex: 1, backgroundColor: theme == "light" ? "white" : "black" }}
    >
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    
  }
})