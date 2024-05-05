import Snackbar from 'react-native-snackbar';

export function GreenSnackbar(text) {
  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_SHORT,
    textColor: '#fff',
    backgroundColor: 'green',
    numberOfLines: 3,
  });
}

export function RedSnackbar(text) {
  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_SHORT,
    textColor: '#fff',
    backgroundColor: 'red',
    numberOfLines: 3,
  });
}
