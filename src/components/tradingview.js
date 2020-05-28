import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';


const TradingView = () => {

    return (
        <TradingViewWidget
            width="920"
            height="450"
            symbol="NASDAQ:AAPL"
            interval=  "D"
            timezone="Etc/UTC"
            theme= "light"
            style="1"
            locale= "en"
            toolbar_bg="#f1f3f6"
            enable_publishing= "false"
            allow_symbol_change= "true"
            container_id= "tradingview_98c0d"
        />
        
    )
}

export default TradingView