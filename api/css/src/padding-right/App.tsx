import { root } from "@lynx-js/react";
import "./index.scss";

import imageUrl from "../../resource/lynx.png";

const PaddingRight = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
    background: "white",
  };

  const contentStyle = {
    paddingLeft: "10px",
    paddingRight: "30px",
  };

  return (
    <view className="con" style={contentStyle}>
      <text className="intro2">2</text>
    </view>
  );
};

root.render(<PaddingRight />);
