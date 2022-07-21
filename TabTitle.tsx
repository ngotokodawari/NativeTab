import React, { useCallback, useState } from 'react';

type Props = {
  title: string;
  index: number;
  visible: boolean; // タブの表示・非表示
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({
  title,
  index,
  visible,
  setSelectedTab,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  const [active, setActive] = useState(false); // デフォルト値＝false
  const classToggle = () => {
    setActive(!active); // タブをクリックするたびに活性、非活性を切り替える
  };
  if (visible)
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
