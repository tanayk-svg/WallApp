import { Dimensions, View } from "react-native";
import { useWallpapers } from "@/hooks/useWallpapers";
import Carousel from "react-native-reanimated-carousel";
import { SplitView } from "@/components/SplitView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { Image } from "react-native";
import Animated, {
  configureReanimatedLogger,
  interpolate,
  ReanimatedLogLevel,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";

export default function explore() {
  const wallpapers = useWallpapers();
  const [ScrollY, setScrollY] = useState(0);
  const theme = useColorScheme() ?? "light";
  const width = Dimensions.get("window").width;
  const carouselsItems = useCarousel();
  const TOPBAR_HEIGHT = 350;

  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict:false,
  })

    const headerAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(
              ScrollY,
              [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
              [2, 1, 0]
            ),
          },
        ],
      };
    });


    const TextAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(
              ScrollY,
              [-TOPBAR_HEIGHT, TOPBAR_HEIGHT/2, TOPBAR_HEIGHT],
              [1, 1, 0]
            ),
          },
        ],
      };
    });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    > 
      <Animated.View style={{ height: TOPBAR_HEIGHT - (ScrollY*1) }}>
        <Carousel
          loop
          width={width}
          overscrollEnabled={true}
          autoPlay={true}
          autoPlayInterval={3000}
          height={TOPBAR_HEIGHT - ScrollY}
          data={carouselsItems}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={{ uri: carouselsItems[index].image }}
                  style={{ height: TOPBAR_HEIGHT }}
                />
              </View>
              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  zIndex: 10,
                  height: TOPBAR_HEIGHT / 2,
                  width: "100%",
                  bottom: 0,
                }}
              >
                <Animated.View style={TextAnimatedStyle}>
                  <ThemedText
                  style={{
                    paddingTop: TOPBAR_HEIGHT / 3,
                    fontSize: 30,
                    fontWeight: "600",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {carouselsItems[index].name}
                </ThemedText>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <SplitView
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
        wallpapers={wallpapers}
      />
    </View>
  );
}
