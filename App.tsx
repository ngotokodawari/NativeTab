import * as React from 'react';
import './style.css';
import Tab from './Tab';
import Tabs from './Tabs';

export default function App(props) {
  return (
    <div className="box-containar">
      <Tabs>
        <Tab title="初期画面" visible="true"></Tab>
        <Tab title="その他" visible="true"></Tab>
        <Tab title="非表示" visible="false"></Tab>
      </Tabs>
      <div className="box" style={{ alignSelf: 'flex-end' }}>
      <a href="https://www.yahoo.co.jp/" target="_blank" rel="noopener">help</a>
      </div>
    </div>
  );
}
