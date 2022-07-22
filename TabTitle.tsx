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
    /* タブをクリック時のイベント */
    //setActive(!active); // タブをクリックするたびに活性、非活性を切り替える
    setActive(true);
  };
  //  1.親に自分がクリックされたことを通知する
  //　2.親から子の関数を呼び、他の子タブをnegativeにする

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
