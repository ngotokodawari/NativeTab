import * as React from 'react';
import { useState, useCallback } from 'react';
import './style.css';

// 参考URL　https://ics.media/entry/17109/
export default function App(props) {
  // クリックしたタブのIDを保持する
  const [state, setState] = useState({ tab: 'panel1' }); // デフォルト値
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
          A画面
        </button>

        <button
          role="tab"
          aria-controls="panel2"
          aria-selected={state.tab === 'panel2'}
          onClick={handleClick}
        >
          B画面
        </button>

        <button
          role="tab"
          aria-controls="panel3"
          aria-selected={state.tab === 'panel3'}
          onClick={handleClick}
        >
          C画面
        </button>
        <a href="">ヘルプ</a>
      </ul>
      <div role="tabpanel" id="panel1" aria-hidden={state.tab !== 'panel1'}>
        A画面の内容
      </div>
      <div role="tabpanel" id="panel2" aria-hidden={state.tab !== 'panel2'}>
        B画面の内容
      </div>
      <div role="tabpanel" id="panel3" aria-hidden={state.tab !== 'panel3'}>
        C画面の内容
      </div>
    </div>
  );
}
