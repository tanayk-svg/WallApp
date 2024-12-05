import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Appearance, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <Header />
        <LoginButtons />
        <ThemeSelector />
        <ThemedView style={{ margin: 50 }}>
          <ThemedText style={{ textAlign: "center", fontSize: 12 ,bottom:0}}>
            Panels 2024
          </ThemedText>
          <ThemedText style={{ textAlign: "center", fontSize: 12 ,bottom:0}}>
            Panels Wallpaper Mobile App LLC
          </ThemedText>
        </ThemedView>
        <About />
      </ThemedView>
    </SafeAreaView>
  );
}
function About() {
  return (
    <ThemedView style={styles.topbar}>
      <ThemedText style={styles.textBig }>About</ThemedText>
      <View style={{marginTop:10 }}>
        <Pressable>
          <ThemedText style ={{margin:10,fontSize:18}}>Account</ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style ={{margin:10,fontSize:18}}>Privacy Policy</ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style ={{margin:10,fontSize:18}}>Terms of Service</ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style ={{margin:10,fontSize:18}}>Licenses</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}
function Header() {
  return (
    <ThemedView style={styles.topbar}>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
  );
}
function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={" Sign in"}
        icon={
          <Ionicons
            name="logo-google"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
      <AuthButton
        label={" Sign in"}
        icon={
          <Ionicons
            name="logo-apple"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
    </>
  );
}

function AuthButton({ label, icon }: { label: string; icon: any }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        marginHorizontal: 40,
        marginVertical: 5,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.icon : Colors.dark.icon,
      }}
    >
      {icon}

      <ThemedText
        style={{
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {label}
      </ThemedText>
    </Pressable>
  );
}
function ThemeSelector() {
  return (
    <ThemedView style={styles.topbar}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <View style={styles.themeSelectorContainer}>
        <ThemeButton title={"System"} selected={false} colorScheme={null} />
        <ThemeButton title={"Light"} selected={false} colorScheme={"light"} />
        <ThemeButton title={"Dark"} selected={false} colorScheme={"dark"} />
      </View>
    </ThemedView>
  );
}
function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  title: string;
  selected: boolean;
  colorScheme: "light" | "dark" | null | undefined;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        flex: 0.3,
        backgroundColor:
          theme === "light" ? Colors.light.icon : Colors.dark.icon,
      }}
      onPress={() => Appearance.setColorScheme(colorScheme)}
    >
      <ThemedText
        style={{
          width: "100%",
          textAlign: "center",
          color: theme === "light" ? "white" : "black",
        }}
      >
        {title}
      </ThemedText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "800",
  },
  topbar: {
    padding: 20,
  },
  themeSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
