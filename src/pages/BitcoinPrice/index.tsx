import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../../helpers/formatMoney";
import { decreasePrice, increasePrice } from "../../state management/price/priceActions";
import { priceSelector } from "../../state management/price/priceSelector";
import Button from "../../components/Button";
import './index.css';

const BtcoinPrice = () => {

    const dispatch = useDispatch();
    const price = useSelector(priceSelector);

    const handleDecreaseClick = (): void => {
        price > 1000 ? dispatch(decreasePrice) : alert('Impossible to decrease Bitcoin price')
    }


    return (
        <div className='main-content_container'>
            <span className='main-content_container__text centered-text'> {'Bitcoin price is ' + formatMoney(price) + '$'}</span>
            <div className="btc-change-button-container">
                <Button onClick={() => { dispatch(increasePrice) }}>{'Increase Bitcoin\n Price (+1,000)'}</Button>
                <Button onClick={handleDecreaseClick}>{'Decrease Bitcoin\n Price (-1,000)'}</Button>
            </div>
        </div>
    )

};

export default BtcoinPrice;