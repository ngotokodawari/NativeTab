import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { useContext } from 'react';
import { UserVisible } from './index';
// 参考URL　https://ics.media/entry/17109/
export default function App() {
  const isVisible = useContext(UserVisible); // 表示・非表示フラグ
  // クリックしたタブのIDを保持する
  const [state, setState] = useState({ tabNumber: '1' }); // デフォルト値

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
    // イベントを発火
    switch (state.tabNumber) {
      case '1':
        onTab1Event;
      case '2':
        onTab2Event;
      case '3':
        onTab3Event;
    }
  };
  // イベントハンドラ
  const onTab1Event = (event) => {};
  const onTab2Event = (event) => {};
  const onTab3Event = (event) => {};
  const onHelpEvent = (event) => {};

  return (
    <div>
      <ul role="tablist">
        {OneTab(state, handleClick, true, '1', 'A画面')}
        {OneTab(state, handleClick, true, '2', 'B画面')}
        {OneTab(state, handleClick, false, '3', 'C画面')}
        {HelpLink(onHelpEvent)}
      </ul>
      <p>Context Value = {isVisible}</p>
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
function OneTab(state, handle, visible: boolean, value, title) {
  return (
    // visibilityプロパティを使う理由：非表示でも周辺の表示には影響しないため
    <button
      role="tab"
      aria-controls={value.toString()}
      aria-selected={state.tabNumber === value}
      onClick={handle}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      {title}
    </button>
  );
}
function HelpLink(onHelpEvent) {
  return (
    <a
      href="https://news.yahoo.co.jp/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onHelpEvent}
    >
      {' '}
      {/* 別タブで開く */}
      ヘルプ
    </a>
  );
}
