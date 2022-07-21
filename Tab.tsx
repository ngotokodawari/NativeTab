import React from 'react';

type Props = {
  title: string;
  visible: boolean; // タブの表示・非表示
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
