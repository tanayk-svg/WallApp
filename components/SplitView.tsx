import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { ImageCard } from "@/components/ImageCard";
import { useState } from "react";
import { FullWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { StyleSheet } from "react-native";
import DownloadPicture from "./BottomSheet";

export function SplitView({ wallpapers, onScroll }: {
  wallpapers: FullWallpaper[],
  onScroll?: (yOffset:number) => void;
 }) {
  const [selectedWallpaper, setselectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return (
    <>
      <FlatList
        onScroll={(e) => {
          let yOffset = e.nativeEvent.contentOffset.y;
          onScroll?.(yOffset);
        }}
        style={styles.imageContainer}
        data={wallpapers
          .filter((_, index) => index % 2 === 0)
          .map((_, index) => [wallpapers[index], wallpapers[index + 1]])}
        renderItem={({ item: [first, second] }) => (
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
              <ThemedView style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setselectedWallpaper(first);
                  }}
                  wallpaper={first}
                />
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
              <ThemedView style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setselectedWallpaper(second);
                  }}
                  wallpaper={second}
                />
              </ThemedView>
            </ThemedView>
          </ThemedView>
        )}
        keyExtractor={(item) => item[0].name}
      />
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setselectedWallpaper(null)}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
