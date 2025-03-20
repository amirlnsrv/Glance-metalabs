import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={169}
    height={404}
    viewBox="0 0 169 483"
    backgroundColor="#dedede"
    foregroundColor="#f6f6f6"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="169" height="216" />
    <rect x="0" y="238" rx="0" ry="0" width="169" height="38" />
    <rect x="0" y="290" rx="0" ry="0" width="85" height="29" />
    <rect x="1" y="343" rx="0" ry="0" width="85" height="25" />
    <rect x="0" y="385" rx="8" ry="8" width="164" height="40" />
  </ContentLoader>
);
