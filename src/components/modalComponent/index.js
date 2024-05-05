import React from 'react';
import {View, Text, Modal, StyleSheet, Image, Pressable} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import Button from '../button';

function ModalComponent({modalVisible, title, subTitle}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.imageHeightAndWidth}
            source={appIcons.tickIcon}
          />
          <Text style={styles.textHeading}>
            {title ? title : ' Successfully Requested'}
          </Text>
          <Text style={styles.detail}>
            {subTitle
              ? subTitle
              : ' Curabitur facilisis pulvinar nunc, vitae varius velit. Curabitur vitae venenatis lorem. Suspendisse potenti.'}
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
}

function ModalAlert({
  modalVisible,
  subTitle,
  setModalVisible,
  onPressOne,
  onPressTwo,
  titleOne,
  titleTwo,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={[styles.secondView]}>
        <View style={styles.secondModalView}>
          <Text style={styles.title}>
            {subTitle
              ? subTitle
              : 'Are you sure there is no part that requires Maintenance?'}
          </Text>
          <View style={styles?.buttonView}>
            <View style={[styles.buttonWith, {marginRight: widthPixel(13)}]}>
              <Button
                containerStyle={{
                  borderWidth: widthPixel(1),
                  borderColor: colors.theme,
                }}
                themeColor={colors?.white}
                style={{color: colors?.theme}}
                marginBottom={heightPixel(1)}
                onPress={onPressOne}
                children={titleOne}
              />
            </View>
            <View style={styles?.buttonWith}>
              <Button
                marginBottom={heightPixel(1)}
                onPress={onPressTwo}
                children={titleTwo}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function ModalAdveristedModal({modalVisible, setModalVisible, link, copy}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={[styles.secondView]}>
        <View style={styles.thirdModalView}>
          <View style={styles.linksView}>
            <Image style={styles.linkIcon} source={appIcons.facebookIcon} />
            <Image style={styles.linkIcon} source={appIcons.twitterIcon} />
            <Image style={styles.linkIcon} source={appIcons.instagramIcon} />
            <Image style={styles.linkIcon} source={appIcons.linkedinIcon} />
          </View>
          <View
            style={{
              paddingTop: heightPixel(20),
              paddingBottom: heightPixel(8),
            }}>
            <Text style={styles.linkHeading}>Embed URL</Text>
          </View>
          <View style={styles.linkView}>
            <Text style={styles.linkText}>{link}</Text>
            <Pressable onPress={copy} style={styles.linkCopyButton}>
              <Text style={styles.linkButtonText}>Copy</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function ModalSuccess({
  modalVisible,
  setModalVisible,
  onPress,
  title,
  icon,
  subTitle,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onPress}>
      <View style={[styles.secondView]}>
        <View style={styles.fourthModalView}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
            }}>
            <Pressable onPress={onPress}>
              <Image style={styles.crossIcon} source={appIcons.cross} />
            </Pressable>
          </View>
          <Image style={styles.successImage} source={icon} />
          <Text style={styles.successText}>{title}</Text>
          <Text
            style={[
              styles.successText,
              {
                fontSize: responsiveFontSize(1.5),
                width: '72%',
                lineHeight: heightPixel(20),
              },
            ]}>
            {subTitle}
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: widthPixel(20),
  },
  secondView: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    justifyContent: 'center',
    paddingHorizontal: widthPixel(20),
  },
  modalView: {
    paddingHorizontal: widthPixel(20),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  secondModalView: {
    paddingHorizontal: widthPixel(33),
    paddingVertical: heightPixel(24),
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: widthPixel(12),
  },
  imageHeightAndWidth: {
    height: heightPixel(124),
    width: widthPixel(124),
    resizeMode: 'contain',
    marginBottom: heightPixel(20),
  },
  textHeading: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    marginBottom: heightPixel(8),
  },
  detail: {
    color: colors.placeHolderColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    textAlign: 'center',
  },
  title: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
    lineHeight: heightPixel(27),
    textAlign: 'center',
    marginBottom: heightPixel(18),
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWith: {
    width: '40%',
  },
  linkView: {
    backgroundColor: colors?.theme,
    paddingVertical: heightPixel(7),
    paddingHorizontal: widthPixel(12),
    borderRadius: widthPixel(12),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  linkHeading: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.6),
    color: colors?.placeHolderColor,
  },
  linkText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.3),
    color: colors?.white,
    width: '75%',
  },
  linkCopyButton: {
    backgroundColor: colors?.white,
    paddingVertical: heightPixel(8),
    paddingHorizontal: widthPixel(16),
    borderRadius: widthPixel(12),
    marginLeft: widthPixel(12),
  },
  linkButtonText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.25),
    color: colors?.theme,
  },
  linksView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  linkIcon: {
    height: heightPixel(50),
    width: widthPixel(50),
    resizeMode: 'contain',
  },
  thirdModalView: {
    paddingHorizontal: widthPixel(22),
    paddingVertical: heightPixel(24),
    // alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: widthPixel(12),
  },
  fourthModalView: {
    paddingHorizontal: widthPixel(22),
    paddingVertical: heightPixel(24),
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: widthPixel(36),
  },
  crossIcon: {
    height: heightPixel(18),
    width: widthPixel(18),
    resizeMode: 'contain',
    tintColor: colors?.placeHolderColor,
  },
  successImage: {
    height: heightPixel(160),
    width: widthPixel(160),
    resizeMode: 'contain',
    marginBottom: heightPixel(20),
  },
  successText: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    marginBottom: heightPixel(9),
  },
});

export {ModalComponent, ModalAlert, ModalAdveristedModal, ModalSuccess};
