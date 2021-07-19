import { useDispatch, useSelector } from 'react-redux';
import { increaseUSDBalance, decreaseUSDBalance } from '../../state management/usd/usdBalanceActions';
import { btcBalanceSelector } from '../../state management/btc/btcBalanceSelector';
import { usdBalanceSelector } from '../../state management/usd/usdBalanceSelector';
import './index.css';
import Button from '../../components/Button';


const MyWallet = () => {

    const dispatch = useDispatch();
    const btcBalance = useSelector(btcBalanceSelector);
    const usdBalance = useSelector(usdBalanceSelector);
    
    const handleWithdrawal = () => { 
        usdBalance >= 100? dispatch(decreaseUSDBalance) : alert('Nothing to withdraw');
    }

    return (
        <div className='main-content_container'>
            <span>Your Bitcoin wallet</span>
            <span>{`You now own ${btcBalance} Bitcoins`}</span>
            <div className='wallet-buttons-container'>
                <Button onClick={() => { dispatch(increaseUSDBalance) }}>Deposit 100$</Button>
                <Button onClick={handleWithdrawal}>Widthrawal 100$</Button>
            </div>
        </div>
    );

};

export default MyWallet;