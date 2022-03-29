import './WidgetLg.css';

const WidgetLg = () => {
    const Button = ({ type }) => {
        return (
            <button className={'widgetLgButton ' + type}>{type}</button>
        )
    }
    return (
        <div className='widgetLg'>
            <h3 classBane="widgetLgTittle">
                Latest transactions
            </h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Ammount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' src='https://yt3.ggpht.com/ytc/AKedOLQHycxmUIxpRj3W-HFYv7oqg0cuynEYr9alctE7=s48-c-k-c0x00ffffff-no-rj' alt />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'><Button type='Approved' /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' src='https://yt3.ggpht.com/ytc/AKedOLQHycxmUIxpRj3W-HFYv7oqg0cuynEYr9alctE7=s48-c-k-c0x00ffffff-no-rj' alt />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'><Button type='Declined' /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' src='https://yt3.ggpht.com/ytc/AKedOLQHycxmUIxpRj3W-HFYv7oqg0cuynEYr9alctE7=s48-c-k-c0x00ffffff-no-rj' alt />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'><Button type='Pending' /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' src='https://yt3.ggpht.com/ytc/AKedOLQHycxmUIxpRj3W-HFYv7oqg0cuynEYr9alctE7=s48-c-k-c0x00ffffff-no-rj' alt />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'><Button type='Approved' /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg