import { useDispatch, useSelector } from 'react-redux';
import { formatMoney } from '../../helpers/formatMoney';
import { buyBTC } from '../../state management/btc/btcBalanceActions';
import { priceSelector } from '../../state management/price/priceSelector';
import { updateUSDBalance } from '../../state management/usd/usdBalanceActions';
import { usdBalanceSelector } from '../../state management/usd/usdBalanceSelector';
import Button from '../../components/Button';


const BuyBitcoin = () => {

    const dispatch = useDispatch();
    const usdBalance = useSelector(usdBalanceSelector);
    const price = useSelector(priceSelector);

    const handleBuyClick = () => {
        if (usdBalance >= price) {
            dispatch(updateUSDBalance(-price));
            dispatch(buyBTC);
        }
        else alert('You haven\'t got enough money');
    }

    return (
        <div className='main-content_container'>
            <span> {'Bitcoin price is ' + formatMoney(price) + '$'}</span>
            <span className='centered-text'>
                {price < 10000
                    ?
                    'Prices are low, buy more!'
                    :
                    'Prices are high, are you sure that you want to buy?'
                }
            </span>
            <Button onClick={handleBuyClick}>Buy 1 Bitcoin </Button>
        </div>
    );
};

export default BuyBitcoin;