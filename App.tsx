import * as React from 'react';
import { useState, useCallback } from 'react';
import './style.css';


export default function App(props) {
  // クリックしたタブのIDを保持する
  const [state, setState] = useState({
    tab: 'panel1',
  });
  // クリックしたときのイベントハンドラーです。
  const handleClick = (event) => {
    // イベント発生源の要素を取得
    const element = event.currentTarget;

    // aria-controls 属性の値を取得
    const tabState = element.getAttribute('aria-controls');

    // プロパティーを更新
    setState({
      tab: tabState,
    });
  };
  return (

    <div>
      <ul role="tablist">

          <button
            role="tab"
            aria-controls="panel1"
            aria-selected={state.tab === 'panel1'}
            onClick={handleClick}
          >
            カベルネ・ソーヴィニョン
          </button>

          <button
            role="tab"
            aria-controls="panel2"
            aria-selected={state.tab === 'panel2'}
            onClick={handleClick}
          >
            メルロー
          </button>

          <button
            role="tab"
            aria-controls="panel3"
            aria-selected={state.tab === 'panel3'}
            onClick={handleClick}
          >
            ピノ・ノワール
          </button>

      </ul>
      <div role="tabpanel" id="panel1" aria-hidden={state.tab !== 'panel1'}>
        カベルネ・ソーヴィニョンはブドウの一品種。赤ワインの中でも渋くて重い味わいが特徴です。
      </div>
      <div role="tabpanel" id="panel2" aria-hidden={state.tab !== 'panel2'}>
        メルローはブドウの一品種。味はカベルネ・ソーヴィニョンほど酸味やタンニンは強くなく、芳醇でまろやかで繊細な味わいです。
      </div>
      <div role="tabpanel" id="panel3" aria-hidden={state.tab !== 'panel3'}>
        ピノ・ノワールはブドウの一品種。カベルネ・ソーヴィニョンと対照的で比較的軽口な味わいです。
      </div>
    </div>
  );
}

