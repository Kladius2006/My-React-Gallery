import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, Modal, ScrollView } from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions();
  const imageSize = (width - 40)/ 3;
  const [selectedImage, setSelectedImage] = useState<number|{uri: string}|null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const images = [
    //require('./'),
    require('./assets/agnes-tachyon-uma-musume.gif'),
    {uri: 'https://i.redd.it/the-original-red-angry-bird-listening-meme-before-it-was-v0-dlfei8jnk2dg1.png?width=374&format=png&auto=webp&s=e081d3c2163943394808ae255fb609b9dbad26be'},
    require('./assets/4910f6f9ef46a008da8319295f9516a9.gif'),
    require('./assets/arknights-endfield.gif'),
    require('./assets/momoi-momoi-saiba.gif'),
    require('./assets/1000-aq.gif'),
    require('./assets/cat-transcend.gif'),
    require('./assets/dog-sims.gif'),
    require('./assets/evernight-lonely.gif'),
    require('./assets/oia-uia.gif'),
    require('./assets/polish-cow-cow.gif'),
    require('./assets/sad-crying-black-guy.gif'),
    require('./assets/seal-cute.gif'),
    require('./assets/sealyx-naked-gun.gif'),
    require('./assets/miyahaha-funny.gif'),
    require('./assets/default-dance-fortnite.gif'),
    require('./assets/hatsune-miku-honkai-star-rail.gif'),
    require('./assets/hatsune-miku-mesmerizer.gif'),
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Gallery</Text>
      <StatusBar style="auto" />

      <ScrollView>
        <View style={styles.RowContainer}>
          {images.map((image, index) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedImage(image);
                setModalVisible(true);
              }}
              key={index}
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
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.ModalContainer}
          onPress={() => setModalVisible(false)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
  },
  Text: {
    marginBottom: 20,
    fontSize: 25,
  },
  RowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',      // Allow items to wrap to the next row
    justifyContent: 'flex-start',
    padding: 10,
  },
  ImageContainer: {
    marginBottom: 5,
  },
  ModalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  justifyContent: 'center',
  alignItems: 'center',
  },
  FullImage: {
  width: '90%',
  height: '90%',
  },
});