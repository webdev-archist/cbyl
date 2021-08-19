import type { ReactNode } from "react";
import React from 'react';
import { Icon } from ".";

interface ListProps {
  items: Array<string | Array<ReactNode | (string | ReactNode)>>
}

export function List(props: ListProps) {
  const { items } = props;

  return <div className="List p-10px">
    {items.map((item, index) => <li key={item[0]?.toString()} className="List-item flex align-center mb-15px">
      <div className="List-item-icon">
        {!Array.isArray(item) ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="black" />
        </svg> : typeof item[0] === "string" ? <Icon icon={item[0]} /> : item[0]
        }
      </div>
      <div className="List-item-content body-1 ml-10px">
        {!Array.isArray(item) ? item : item[1]}
      </div>
    </li>)}
  </div>
}