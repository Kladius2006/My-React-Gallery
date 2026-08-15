import { StatusBar } from 'expo-status-bar';
import { useAudioPlayer } from 'expo-audio';
import { useState } from 'react';
import { Text, View, Image, useWindowDimensions, TouchableOpacity, Modal, ScrollView } from 'react-native';
import images from './data/Image';
import audio from './data/Audio';
import styles from './data/Style';

export default function App() {
  const {width, height} = useWindowDimensions();
  const imageSize = (width - 40)/ 3;
  const [selectedImage, setSelectedImage] = useState<number|{uri: string}|null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const player = useAudioPlayer(null);
  const openImage = (
    image: number | { uri: string },
    index: number
  ) => {
    player.pause();
    player.seekTo(0);

    setSelectedImage(image);
    setModalVisible(true);

    const selectedAudio = audio[index];

    if (selectedAudio !== null && selectedAudio !== undefined) {
      player.replace(selectedAudio);
      player.play();
    }
  };

  const closeModal = () => {
    player.pause();
    player.seekTo(0);
    setModalVisible(false);
    setSelectedImage(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Gallery</Text>
      <StatusBar style="auto" />

      <ScrollView>
        <View style={styles.RowContainer}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openImage(image, index)}
            >
              <Image
                source={image}
                style={[
                  styles.ImageContainer,
                  {
                    width: imageSize,
                    height: imageSize,
                  },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.ModalContainer}
          onPress={closeModal}
        >
          {selectedImage&&(
            <Image
              source={selectedImage}
              style={styles.FullImage}
              resizeMode='contain'
            />
          )}

        </TouchableOpacity>
      </Modal>

    </View>
  );
}