export const generateGuid = () => {
  const S4 = () => {
    return ((( 1 + Math.random() ) * 0x10000) | 0).toString(16).substring(1);
  };

  return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
};

export const isMediumViewport = () => {
  return window.matchMedia('screen and (min-width: 989px)').matches;
}
