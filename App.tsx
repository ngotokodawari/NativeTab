import * as React from 'react';
import './style.css';
import Tab from './Tab';
import Tabs from './Tabs';

export default function App() {
  return (
    <div>
      <ul>
        <Tabs>
          <Tab title="初期画面"></Tab>
          <Tab title="その他"></Tab>
          <Tab title="非表示"></Tab>
        </Tabs>
        <a>help</a>
      </ul>
    </div>
  );
}
