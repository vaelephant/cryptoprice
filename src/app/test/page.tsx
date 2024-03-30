
"use client"

import React, { useEffect, useRef, FC, memo } from 'react';

const TradingViewWidget: FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "600",
            "height": "400",
        "autosize": true,
        "symbol": "BINANCE:FILUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "zh_CN",
        "enable_publishing": false,
        "withdateranges": true,
        "allow_symbol_change": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }
  }, []);

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



function TradingViewWidget_zep() {
    const container = useRef();
  
    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "width": "600",
            "height": "400",
            "autosize": true,
            "symbol": "MEXC:ZEPHUSDT",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "zh_CN",
            "enable_publishing": false,
            "withdateranges": true,
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      },
      []
    );
  
    return (
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        <div className="tradingview-widget-copyright"><a href="https://cn.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">在TradingView上跟踪所有市场</span></a></div>
      </div>
    );
  }



  
  



  function TradingViewWidget_xmr() {
    const container = useRef();
  
    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "width": "600",
            "height": "400",
            "symbol": "KRAKEN:XMRUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "zh_CN",
            "enable_publishing": false,
            "gridColor": "rgba(0, 0, 0, 0.06)",
            "hide_legend": true,
            "withdateranges": true,
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      },
      []
    );
  
    return (
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://cn.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">在TradingView上跟踪所有市场</span></a></div>
      </div>
    );
  }

  

  function TradingViewWidget_epk() {
    const container = useRef();
  
    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "width": "600",
            "height": "400",
            "symbol": "GATEIO:AIEPKUSDT",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "zh_CN",
            "enable_publishing": false,
            "gridColor": "rgba(0, 0, 0, 0.06)",
            "hide_legend": true,
            "withdateranges": true,
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      },
      []
    );
  
    return (
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://cn.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">在TradingView上跟踪所有市场</span></a></div>
      </div>
    );
  }

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-4">
    <div>
      <TradingViewWidget />
    </div>
    <div>
      <TradingViewWidget_zep />
    </div>
    <div>
      <TradingViewWidget_xmr />
    </div>
    <div>
      <TradingViewWidget_epk />
    </div>
  </div>
    
  )
}
