import { root } from "@lynx-js/react";
import "./index.scss";

const Display = () => {
  const fixedAreaStyle = {
    width: "50%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <text>flex</text>
        <view className="container" style={{ display: "flex" }}>
          <text className="item">1</text>
          <text className="item">2</text>
        </view>

        <text>linear</text>
        <view className="container" style={{ display: "linear", linearDirection: "row" }}>
          <text className="item">1</text>
          <text className="item">2</text>
        </view>

        <text>relative</text>
        <view className="container" style={{ display: "relative" }}>
          <text className="item" style={{ relativeId: "1" }}>1</text>
          <text className="item" style={{ relativeRightOf: "1" }}>2</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Display />);
