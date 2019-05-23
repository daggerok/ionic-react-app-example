export const getData = async () => {
  try {
    console.log('fetching data from https://api.coindesk.com/v1/bpi/currentprice.json');
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    return await response.json();
  } catch (e) {
    console.log('oops', e);
  }
};
