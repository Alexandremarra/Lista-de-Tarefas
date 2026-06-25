import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Share, Alert } from 'react-native';

interface ShareModalProps {
  isVisible: boolean;
  onClose: () => void;
  taskTitle?: string;
}

export default function ShareModal({ isVisible, onClose, taskTitle }: ShareModalProps) {
  
  const handleShare = async () => {
    try {
      const message = taskTitle 
        ? `Ei! Olha essa tarefa da minha lista: "${taskTitle}". Bora concluir?`
        : 'Organize sua rotina com o meu app de Lista de Tarefas!';

      const result = await Share.share({
        message: message,
        // Se tiver um link web futuramente, pode adicionar aqui:
        // url: 'https://seusite.com', 
      });

      if (result.action === Share.sharedAction) {
        Alert.alert('Sucesso', 'Compartilhado com sucesso!');
        onClose();
      }
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível compartilhar no momento.');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <div style={styles.modalContainer}>
          <Text style={styles.title}>Compartilhar</Text>
          <Text style={styles.subtitle}>
            {taskTitle ? `Quer compartilhar a tarefa "${taskTitle}"?` : 'Compartilhe sua lista com seus amigos!'}
          </Text>

          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Abrir Opções de Envio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </div>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  shareButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});