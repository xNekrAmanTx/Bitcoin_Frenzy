import { useDispatch, useSelector } from 'react-redux';
import { btcBalanceSelector } from '../../../../state management/btc/btcBalanceSelector';
import { priceSelector } from '../../../../state management/price/priceSelector';
import { usdBalanceSelector } from '../../../../state management/usd/usdBalanceSelector';
import BTCLOGO from '../../../../assets/images/bitcoin.svg'
import { formatMoney } from '../../../../helpers/formatMoney';

const Header = () => {

    const dispatch = useDispatch();
    const price = useSelector(priceSelector);
    const usdBalance = useSelector(usdBalanceSelector);
    const btcBalance = useSelector(btcBalanceSelector);

    return (
        <header className='white-on-blue'>
            <div className="left-header align-center">
                <span className="logo-container">
                    <object className='btc-logo' data={BTCLOGO} />
                </span>
                <span className="proj-name">BITCOIN FRENZY</span>
            </div>
            <div className='center-header align-center'> {'1 BITCOIN = ' + formatMoney(price) + '$'}</div>
            <div className='right-header-balance'>
                <div>{formatMoney(usdBalance) + ' $'}</div>
                <div>{formatMoney(btcBalance) + ' BITCOINS'}</div>
            </div>


        </header>
    );
};

export default Header;