import MyWallet from '../pages/MyWallet';
import BuyBitcoin from '../pages/BuyBitcoin';
import SellBitcoin from '../pages/SellBitcoin';
import BitcoinPrice from '../pages/BitcoinPrice';

export const routes = [
    {
        id:0,
        path: ['/', '/wallet'],
        Component: MyWallet,
    },
    {
        id:1,
        path: '/buy',
        Component: BuyBitcoin,
    },
    {
        id:2,
        path: '/sell',
        Component: SellBitcoin,
    },
    {
        id:3,
        path: '/bitcoin',
        Component: BitcoinPrice,
    },
    {
        id:3,
        path: '/bitcoin',
        Component: BitcoinPrice,
    },
];
