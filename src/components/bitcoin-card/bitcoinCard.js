import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './bitcoinCard.css';

export const BitcoinCard = props => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>
        {props.data.code}
      </IonCardSubtitle>
      <IonCardTitle>
        {props.data.rate_float}
      </IonCardTitle>
    </IonCardHeader>
  </IonCard>
);
