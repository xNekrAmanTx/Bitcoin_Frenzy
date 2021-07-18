import MyWallet from '../UI/pages/MyWallet';
import BuyBitcoin from '../UI/pages/BuyBitcoin';
import SellBitcoin from '../UI/pages/SellBitcoin';
import BitcoinPrice from '../UI/pages/BitcoinPrice';
import { NOTFOUND } from 'dns';

export const routes = [
    {
        id:0,
        path: ['/', '/wallet'],
        Component: MyWallet
    },
    {
        id:1,
        path: '/buy',
        Component: BuyBitcoin
    },
    {
        id:2,
        path: '/sell',
        Component: SellBitcoin
    },
    {
        id:3,
        path: '/bitcoin',
        Component: BitcoinPrice
    },
    {
        id:3,
        path: '/bitcoin',
        Component: BitcoinPrice
    },
    // {
    //     id:4,
    //     Component: NOTFOUND,
    // },
];
