import React, { useCallback, useState } from 'react';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, index, setSelectedTab }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  const [active, setActive] = useState(false); // デフォルト値＝false
  const classToggle = () => {
    setActive(!active);
  };
  return (
    <button
      className={active ? 'positiveTab' : 'negativeTab'}
      onClick={classToggle}
    >
      {title}
    </button>
  );
};

export default TabTitle;
