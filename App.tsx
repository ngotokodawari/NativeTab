import * as React from 'react';
import './style.css';
import Tab from './Tab';
import Tabs from './Tabs';

export default function App(props) {
  return (
    <div>
      <ul>
        <Tabs>
          <Tab title="初期画面" visible="true"></Tab>
          <Tab title="その他" visible="true"></Tab>
          <Tab title="非表示" visible="false"></Tab>
        </Tabs>
        <a>help</a>
      </ul>
    </div>
  );
}
