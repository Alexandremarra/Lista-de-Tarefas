import { Image } from 'expo-image';
import { StatusBar, FlatList, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity,  } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Navbar from '@/components/navbar';
// import { DATA } from '@/components/SecondComponent';

export default function HomeScreen() {
  return (
  
    <View>
      <Navbar/>
      <TextInput
        placeholder="Digite seu nome"
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 20,
        }}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
