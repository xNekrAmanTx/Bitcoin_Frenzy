// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { priceSelector } from './state management/price/priceSelector';
import { usdBalanceSelector } from './state management/usd/usdBalanceSelector';
import { increasePrice, decreasePrice } from './state management/price/priceActions';
import { increaseUSDBalance, decreaseUSDBalance, updateUSDBalance } from './state management/usd/usdBalanceActions';
import { buyBTC, sellBTC } from './state management/btc/btcBalanceActions';
import { btcBalanceSelector } from './state management/btc/btcBalanceSelector';
import { historySelector } from './state management/history/historySelector';
import { Switch, Route } from 'react-router-dom';
import { routes } from './constants/routes';
import Layout from './UI/components/Layout';


function App() {

  const usdBalance = useSelector(usdBalanceSelector);
  const dispatch = useDispatch();
  const history = useSelector(historySelector);
  const btcBalance = useSelector(btcBalanceSelector);
  const price = useSelector(priceSelector);

  // console.log(history);

  // console.log(price);
  // console.log(usdBalance);

  return (
    
    <Layout/>

    // <div className="App">
    //   <>
    //     <div> {'BitCoin Price = ' + price + '$'}</div>
    //     <br /><br /><br />
    //     <div>{'USD Balance = ' + usdBalance + '$'}</div>
    //     <br /><br /><br />
    //     <div>{'BTC Balance = ' + btcBalance + ' BTC'}</div>
    //     <button onClick={() => { dispatch(increasePrice) }}>Increase Bitcoin Price</button>
    //     <button onClick={() => { dispatch(decreasePrice) }}>Decrease Bitcoin Price</button>
    //     <button onClick={() => { dispatch(increaseUSDBalance) }}>Deposit</button>
    //     <button onClick={() => { dispatch(decreaseUSDBalance) }}>Widthrawal</button>
    //     <button onClick={() => { dispatch(updateUSDBalance(-price)); dispatch(buyBTC) }} > Purchase 1 Bitcoin </button>
    //     <button onClick={() => { dispatch(updateUSDBalance(price)); dispatch(sellBTC) }}>Sell 1 Bitcoin </button>
    //   </>
    //   <div style={{
    //     position: 'absolute',
    //     top: '1rem',
    //     right: '1rem',
    //     display: 'flex',
    //     flexDirection: 'column',
    //   }}>
    //     {history.map((el, i) => (
    //       <div key={+el.date} >
    //         <div>{+el.date}</div>
    //         <div>{el.message}</div>
    //       </div>
    //     )
    //     )}
    //   </div>
    // </div>
  );
}

export default App;
