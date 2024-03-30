"use client";

import React, { useEffect, useRef, FC } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  locale?: string;
  interval?: string;
  theme?: string;
  style?: string;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  hide_volume?: boolean;
}

const CustomTradingViewWidget: FC<TradingViewWidgetProps> = ({
  symbol,
  locale = "zh_CN",
  interval = "30",
  theme = "dark",
  style = "1",
  allow_symbol_change = true,
  save_image = false,
  hide_volume = true
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        // "autosize": true,
        "width": "660",
        "height": "400",
        symbol,
        interval,
        "timezone": "Asia/Chongqin",
        theme,
        style,
        locale,
        "enable_publishing": false,
        "withdateranges": true,
        allow_symbol_change,
        save_image,
        "calendar": false,
        hide_volume,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }
  }, [symbol, interval, theme, style, locale, allow_symbol_change, save_image, hide_volume]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://cn.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">在TradingView上跟踪所有市场</span>
        </a>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <CustomTradingViewWidget symbol="BINANCE:FILUSDT" />
      </div>
      <div>
        <CustomTradingViewWidget symbol="MEXC:ZEPHUSDT" />
      </div>
      <div>
        <CustomTradingViewWidget symbol="KRAKEN:XMRUSD" />
      </div>
      <div>
        <CustomTradingViewWidget symbol="GATEIO:AIEPKUSDT" />
      </div>
    </div>
  );
}
