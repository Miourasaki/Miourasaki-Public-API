// context.js

import React, { createContext, useState } from 'react';

// 创建一个全局状态的 Context
export const GlobalContext = createContext<any>(null);

// 创建一个 Provider 组件
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  // 定义全局状态和相应的更新函数
  const [count, setCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    // 使用 Context.Provider 包裹子组件，并传递全局状态和更新函数
    <GlobalContext.Provider value={{ count, setCount, showFooter, setShowFooter, todayCount, setTodayCount
    , showTerminal, setShowTerminal}}>
      {children}
    </GlobalContext.Provider>
  );
};
