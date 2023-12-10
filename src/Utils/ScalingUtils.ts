import {Dimensions, Platform, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const {width, height} = Dimensions.get('window');
export const hasNotch =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTV &&
  (height === 780 ||
    width === 780 ||
    height === 812 ||
    width === 812 ||
    height === 844 ||
    width === 844 ||
    height === 852 ||
    width === 852 ||
    height === 896 ||
    width === 896 ||
    height === 926 ||
    width === 926 ||
    height === 932 ||
    width === 932);

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const getPercentage = (size: number) =>
  (size / guidelineBaseWidth) * 100;
export const getHeightPercentage = (size: number) =>
  (size / guidelineBaseHeight) * 100;
export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const sizeScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const getScaleSizeHeight = (size: number) => {
  return hp(getHeightPercentage(size) + '%');
};
export const getScaleSizeWidth = (size: number) => {
  return wp(getPercentage(size) + '%');
};

export const getScaleSizeWidthPx = (size: number) => {
  return wp(getPercentage(size) + '%') + 'px';
};

export const getPixelSize = (pixels: number) => {
  return Platform.select({
    ios: pixels,
    android: pixels,
  });
};

export function RFValue(fontSize: number) {
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    hasNotch || Platform.OS === 'android'
      ? standardLength - offset!
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / guidelineBaseHeight;
  return Math.round(heightPercent);
}

// import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const GuidelineBaseHeight = 844;
const GuidelineBaseWidth = 390;

const verticalFontScale = (size: any, floor = true, setMax = false) => {
  size = parseFloat(size);
  let result = (screenHeight / GuidelineBaseHeight) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

const horizontalFontScale = (size: any, floor = true, setMax = false) => {
  size = parseFloat(size);
  let result = (screenWidth / GuidelineBaseWidth) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

export const DIMENSION = {
  space: getScaleSizeWidthPx(10),
  borderWidth: getScaleSizeWidthPx(1),
  borderRadius: getScaleSizeWidthPx(2),
  dashSize: getScaleSizeWidthPx(3),
  borderRadiusCircle: getScaleSizeWidthPx(9999),
  buttonHeight: getScaleSizeWidthPx(50),
  buttonWidth: getScaleSizeWidthPx(340),
  paymentButtonWidth: getScaleSizeWidthPx(80),
  bottomButtonHeight: getScaleSizeWidthPx(95),
  carImageAndBadgeHeight: getScaleSizeWidthPx(65),
  carImageAndChatSuggestionHeight: getScaleSizeWidthPx(75),
  px: getScaleSizeWidthPx(25),
  p4: getScaleSizeWidthPx(4),
  p5: getScaleSizeWidthPx(5),
  p8: getScaleSizeWidthPx(8),
  p10: getScaleSizeWidthPx(10),
  p15: getScaleSizeWidthPx(15),
  p20: getScaleSizeWidthPx(20),
  p25: getScaleSizeWidthPx(25),
  p30: getScaleSizeWidthPx(30),
  p35: getScaleSizeWidthPx(35),
  p40: getScaleSizeWidthPx(40),
  p45: getScaleSizeWidthPx(45),
  p50: getScaleSizeWidthPx(50),
  p55: getScaleSizeWidthPx(55),
  p60: getScaleSizeWidthPx(60),
  p65: getScaleSizeWidthPx(65),
  p70: getScaleSizeWidthPx(70),
  p75: getScaleSizeWidthPx(75),
  p80: getScaleSizeWidthPx(80),
  p85: getScaleSizeWidthPx(85),
};

export const FONT_SIZE = {
  size10: verticalFontScale(11),
  size12: verticalFontScale(13),
  size14: verticalFontScale(15),
  size16: verticalFontScale(17),
  size18: verticalFontScale(19),
  size20: verticalFontScale(21),
  size22: verticalFontScale(23),
  size24: verticalFontScale(25),
  size26: verticalFontScale(27),
  size28: verticalFontScale(29),
  size30: verticalFontScale(31),
};

export const FONT_SIZE_PX = {
  size10: verticalFontScale(11) + 'px',
  size12: verticalFontScale(13) + 'px',
  size14: verticalFontScale(15) + 'px',
  size16: verticalFontScale(17) + 'px',
  size18: verticalFontScale(19) + 'px',
  size20: verticalFontScale(21) + 'px',
  size22: verticalFontScale(23) + 'px',
  size24: verticalFontScale(25) + 'px',
  size26: verticalFontScale(27) + 'px',
  size28: verticalFontScale(29) + 'px',
  size30: verticalFontScale(31) + 'px',
};
