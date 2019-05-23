import React from 'react';
import './App.css';
import { getData } from './api/bitcoinRestApi';
import { IonApp, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { LoadingCard } from './components/loading-card/loadingCard';
import { BitcoinCard } from './components/bitcoin-card/bitcoinCard';

export default class App extends React.Component {
  state = {
    bitcoinInfo: {},
    loading: true,
  };

  async componentDidMount() {
    const bitcoinInfo = await getData();
    this.setState({
      bitcoinInfo,
      loading: false,
    }, () => console.log('state', this.state));
  }

  static createLoadingCards() {
    return (
      <>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </>
    );
  }

  createBitCoinCards() {
    const { bitcoinInfo } = this.state;
    return Object.keys(bitcoinInfo.bpi)
      .map((item, index) =>
        <BitcoinCard key={index}
                     data={bitcoinInfo.bpi[item]}/>);
  }

  render() {
    const { bitcoinInfo, loading } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>BitCoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <section className='bit-coin__header'>
            <IonIcon name='logo-bitcoin' className='bit-coin__logo'/>
          </section>
          {
            loading === true
              ? App.createLoadingCards()
              : this.createBitCoinCards()
          }

          <section className='bit-coin__disclaimer'>
            <p>{bitcoinInfo.disclaimer}</p>
          </section>
        </IonContent>
      </IonApp>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
