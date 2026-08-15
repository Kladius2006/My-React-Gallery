import { StyleSheet } from "react-native";

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

export default styles;