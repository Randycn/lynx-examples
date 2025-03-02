// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import "./index.scss";
import { ItemView } from "./baseView.jsx";

const ListContainer = () => {
  return (
    <list
      className="list-container"
      list-type="single"
      span-count={1}
      scroll-orientation="vertical"
      sticky={true}
    >
      {Array.from({ length: 40 }).map((item, index) => {
        if (index % 6 == 0) {
          return (
            <list-item
              className="sticky-top-item"
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
              full-span={true}
              sticky-top={true}
            >
              <text className="full-span-text">
                {`sticky-top-item-${index}`}
              </text>
            </list-item>
          );
        } else {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <ItemView index={index} />
            </list-item>
          );
        }
      })}
    </list>
  );
};

root.render(<ListContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
