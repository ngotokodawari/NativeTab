import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="box">
      {children.map((item, index, visible) => (
        <TabTitle
          key={index}
          title={item.props.title}
          index={index}
          visible={visible}
          setSelectedTab={setSelectedTab}
        />
      ))}

      {children[selectedTab]}
    </div>
    //※基本的にdivタグで囲んだ次の要素は改行されるため、横並びにはCSSの適用が必要となります
  );
};

export default Tabs;
