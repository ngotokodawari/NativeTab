import * as React from 'react';
import './style.css';
import Tab from './Tab';
import Tabs from './Tabs';

export default function App(props) {
  return (
    <div className="box-containar">
      <Tabs>
        <Tab title="初期画面" visible="true" onclick={handleSubmit}></Tab>
        <Tab title="その他" visible="true" onclick={handleSubmit}></Tab>
        <Tab title="非表示" visible="false" onclick={handleSubmit}></Tab>
      </Tabs>
      <div className="box-right" style={{ alignSelf: 'flex-end' }}>
        <a href="https://www.yahoo.co.jp/" target="_blank" rel="noopener">
          help
        </a>
      </div>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}
