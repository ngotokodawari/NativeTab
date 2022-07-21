import * as React from 'react';
import './style.css';
import Tab from './Tab';
import Tabs from './Tabs';

export default function App() {
  return (
    <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear">Pear is green</Tab>
    </Tabs>
  );
}
