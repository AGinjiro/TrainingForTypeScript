//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log(
      'Function parameters sample 1: User is signed in !! Username is',
      username,
    );
    return true;
  } else {
    console.log('Function parameters sample 2: User is not signed in !!');
    return false;
  }
};

//レストパラメーターを持つ関数
export const sumProductsPrice = (...price: number[]): number => {
  return price.reduce((prevTotal, ProductPrice) => {
    return prevTotal + ProductPrice;
  }, 0);
};
