import { useDispatch, useSelector } from 'react-redux';
import { formatMoney } from '../../../helpers/formatMoney';
import { sellBTC } from '../../../state management/btc/btcBalanceActions';
import { btcBalanceSelector } from '../../../state management/btc/btcBalanceSelector';
import { priceSelector } from '../../../state management/price/priceSelector';
import { updateUSDBalance } from '../../../state management/usd/usdBalanceActions';
import Button from '../../components/Button';


const SellBitcoin = () => {

    const dispatch = useDispatch();
    const btcBalance = useSelector(btcBalanceSelector);
    const price = useSelector(priceSelector);

    const handleSellClick = () => {
        // btcBalance ? (dispatch(updateUSDBalance(price)), dispatch(sellBTC)) : alert('You haven\'t got any Bitcoins');
        if (btcBalance >= 1) {
            dispatch(updateUSDBalance(price));
            dispatch(sellBTC);
        }
        else alert('You haven\'t got any Bitcoins');
    }

    return (
        <div className='main-content_container'>
            <span> {'Bitcoin price is ' + formatMoney(price) + '$'}</span>
            <span>
                {price < 10000
                    ?
                    'Prices are low, are you sure you want to sell?'
                    :
                    'Prices are high, sell now!'
                }
            </span>
            <Button onClick={handleSellClick}>Sell 1 Bitcoin</Button>
        </div>
    );
};

export default SellBitcoin;