import { Wallpaper } from "@/hooks/useWallpapers";
import { StyleSheet, Image, View, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import {Ionicons} from "@expo/vector-icons"
import { Colors } from "@/constants/Colors";


export function ImageCard({ wallpaper, onPress }: { wallpaper: Wallpaper, onPress: () => void; }) {
    const theme = useColorScheme() ?? "light";
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
          <View style={styles.imageContainer}>
            <Ionicons name="heart-outline" size={20} color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    justifyContent:"center"
  },
  image: {
    flex: 1,
    height: 255,
    borderRadius: 20,
  },
  label: {
    color: "white",
    fontSize:16
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
  },
});
