// saude.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity, 
  Alert,
} from 'react-native';

const Saude = () => {
  const [agua, setAgua] = useState('');
  const [horarioAgua, setHorarioAgua] = useState('');

  const [almoco, setAlmoco] = useState('');
  const [horarioAlmoco, setHorarioAlmoco] = useState('');

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const [glicose, setGlicose] = useState('');
  const [pressao, setPressao] = useState('');

  const calcularIMC = () => {
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    if (!pesoNumero || !alturaNumero) {
      Alert.alert('Erro', 'Digite peso e altura válidos');
      return;
    }

    const resultado = pesoNumero / (alturaNumero * alturaNumero);

    setImc(resultado.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Saúde e Bem Estar</Text>

      {/* Água */}
      <Text style={styles.label}>Quantidade de água bebida (ml)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2000"
        keyboardType="numeric"
        value={agua}
        onChangeText={setAgua}
      />

      <Text style={styles.label}>Horário que bebeu água</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 14:30"
        value={horarioAgua}
        onChangeText={setHorarioAgua}
      />

      {/* Almoço */}
      <Text style={styles.label}>O que almoçou</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Arroz, feijão e frango"
        value={almoco}
        onChangeText={setAlmoco}
      />

      <Text style={styles.label}>Horário do almoço</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12:00"
        value={horarioAlmoco}
        onChangeText={setHorarioAlmoco}
      />

      {/* Peso e Altura */}
      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 70"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.label}>Altura (m)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* Botão IMC */}
      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.botaoTexto}>Calcular IMC</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Resultado do IMC</Text>
      <TextInput
        style={styles.input}
        editable={false}
        value={imc}
        placeholder="Seu IMC aparecerá aqui"
      />

      {/* Glicose */}
      <Text style={styles.label}>Nível de glicose</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 95"
        keyboardType="numeric"
        value={glicose}
        onChangeText={setGlicose}
      />

      {/* Pressão */}
      <Text style={styles.label}>Pressão sanguínea</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12/8"
        value={pressao}
        onChangeText={setPressao}
      />
    </ScrollView>
  );
};

export default Saude;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#222',
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
    color: '#333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});