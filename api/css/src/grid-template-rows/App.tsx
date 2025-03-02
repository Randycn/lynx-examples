import { root } from "@lynx-js/react";
import "./index.scss";

const GridTemplateRow = () => {
  const titleStyle = {
    fontSize: "40rpx" as const,
    fontWeight: "700" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-template-rows: 50px 50px 50px;</text>
      <view className="container" style={{ gridTemplateRows: "50px 50px 50px" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-template-rows: 1fr 100px 1fr;</text>
      <view className="container" style={{ gridTemplateRows: "1fr 100px 1fr" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-template-rows: 1fr 1fr 2fr;</text>
      <view className="container" style={{ gridTemplateRows: "1fr 1fr 2fr" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>
    </>
  );
};

root.render(<GridTemplateRow />);
