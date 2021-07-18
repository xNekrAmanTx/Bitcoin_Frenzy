import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../../../helpers/formatDate';
import { historySelector } from '../../../../state management/history/historySelector';

const HistoryBar = () => {

    const history = useSelector(historySelector);

    return (
        <aside className='history-bar'>
            <div className='history-bar_display'>
                {history.map(el => (
                    <div className='message-container' key={+el.date} >
                        <div className='message-container__date'>{formatDate(el.date)}</div>
                        <div className='message-container__action'>{el.message}</div>
                    </div>
                )
                )}
            </div>
        </aside>
    );
};

export default HistoryBar;