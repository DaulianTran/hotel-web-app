import React, { useState } from 'react';

export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === 'Tab' ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 text-slate-500 flex flex-row justify-start gap-2">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab key={`tab-{i}`} currentTab={i} activeTab={activeTab} setActiveTab={setActiveTab}>
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? 'visible' : 'hidden'}`}>
              {React.createElement(item.props.component)}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-5 py-3 cursor-pointer min-w-60 text-center	
      ${activeTab === currentTab ? 'text-blue-600 font-semibold border-b border-blue-600' : ' text-slate-500'}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = 'Tab';
