import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";


const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    //console.log("handleSheetChanges", index);
  }, []);
  const theme = useColorScheme() ?? "light";
  // renders
  return (
    <BottomSheet
      snapPoints={["99%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{ flex: 1 }}>
          <Image style={styles.image} source={{ uri: wallpaper.url ?? "" }} />
          <View style={styles.topbar}>
            <Ionicons
              onPress={onClose}
              name="close-circle-sharp"
              size={26}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <View style={styles.topbarLeft}>
              <Ionicons
                name={"heart"}
                size={26}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
              <Ionicons
                name={"share-social-sharp"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton url = {wallpaper.url} />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};
function DownloadButton({url}:{url:string,}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
        try {
          const res = await FileSystem.downloadAsync(url, fileUri);
          const response = await MediaLibrary.requestPermissionsAsync(true)
          if (response) {
            MediaLibrary.createAssetAsync(fileUri)
            console.log("downloaded")
            alert("Image Saved")
          } else {
            console.error("permisson not granted")
          }
        } catch (err) {
          console.log("FS Err: ", err);
        }
      }}
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        marginHorizontal: 40,
        marginVertical: 20,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <Ionicons
        name="download"
        size={24}
        color={theme === "light" ? "white" : "black"}
        style={{ paddingRight: 6 }}
      />

      <Text
        style={{
          fontSize: 20,
          color: theme === "light" ? "white" : "black",
          fontWeight: "600",
        }}
      >
        Get Wallpaper
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "65%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  topbarLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "15%",
  },
  textContainer: {
    display: "flex",
  },
  text: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default DownloadPicture;
