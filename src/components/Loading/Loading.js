import React from 'react';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return (
    <LottieView
      source={require('../../assets/animation/loading.json')}
      autoPlay={true}
    />
  );
};
export default Loading;
