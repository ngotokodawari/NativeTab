import * as React from 'react';
import { useState, useCallback } from 'react';
import './style.css';

// 参考URL　https://ics.media/entry/17109/
export default function App(props) {
  // クリックしたタブのIDを保持する
  const [state, setState] = useState({ tabNumber: '0' }); // デフォルト値
  // クリックしたときのイベントハンドラーです。
  const handleClick = (event) => {
    // イベント発生源の要素を取得
    const element = event.currentTarget;

    // aria-controls 属性の値を取得
    const tabState = element.getAttribute('aria-controls');

    // プロパティーを更新
    setState({
      tabNumber: tabState,
    });
  };
  return (
    <div>
      <ul role="tablist">
        <button
          role="tab"
          aria-controls="1"
          aria-selected={state.tabNumber === '1'}
          onClick={handleClick}
        >
          A画面
        </button>

        <button
          role="tab"
          aria-controls="2"
          aria-selected={state.tabNumber === '2'}
          onClick={handleClick}
        >
          B画面
        </button>

        <button
          role="tab"
          aria-controls="3"
          aria-selected={state.tabNumber === '3'}
          onClick={handleClick}
        >
          C画面
        </button>
        // 別タブで開く
        <a href="" target="_blank" rel="noopener noreferrer">
          ヘルプ
        </a>
      </ul>
      <div role="tabpanel" id="1" aria-hidden={state.tabNumber !== '1'}>
        A画面の内容
      </div>
      <div role="tabpanel" id="2" aria-hidden={state.tabNumber !== '2'}>
        B画面の内容
      </div>
      <div role="tabpanel" id="3" aria-hidden={state.tabNumber !== '3'}>
        C画面の内容
      </div>
    </div>
  );
}
