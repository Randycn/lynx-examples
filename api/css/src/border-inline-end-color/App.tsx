import { root, useState } from "@lynx-js/react";
import "./index.scss";

const BorderInlineEndColor = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const textStyle = {
    borderInlineStartColor: "blue",
    borderInlineEndColor: "yellow",
  };

  return (
    <>
      <view className="con" bindtap={() => setRtl(!rtl)} style={containerStyle}>
        <text className="intro" style={textStyle}>1</text>
      </view>
      <text>Click above to switch, current {rtl ? "rtl" : "ltr"}</text>
    </>
  );
};

root.render(<BorderInlineEndColor />);
