// navbar.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Navbar = () => {
  const handlePress = (page: string) => {
    console.log(`Abrindo página: ${page}`);
  };

  return (
    <View style={styles.container}>
      {/* Lado esquerdo */}
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Saúde e Bem Estar</Text>
      </View>

      {/* Lado direito */}
      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('Saúde')}
        >
          <Text style={styles.buttonText}>Saúde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('Academia')}
        >
          <Text style={styles.buttonText}>Academia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('Estudar')}
        >
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: width * 0.8, // 80% da largura da tela
    height: height * 0.2, // 20% da altura da tela
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
  },

  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});