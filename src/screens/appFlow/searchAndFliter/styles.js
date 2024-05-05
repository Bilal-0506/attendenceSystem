import {StatusBar, StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel, wp} from '../../../services';

export const styles = StyleSheet.create({
  bottomSheetStyle: {
    flex: 1,
  },
  indicator: {
    height: 0,
  },
  bottomSheet: {
    padding: 0,
    borderRadius: 0,
  },
  scroll: {
    flexGrow: 1,
    paddingVertical: heightPixel(16),
    paddingHorizontal: widthPixel(20),
  },
});
