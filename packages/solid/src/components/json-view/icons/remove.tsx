import { Component, JSX, splitProps } from "solid-js";

import { defaultIconStyle } from "./get-icon-style";

const Remove: Component<JSX.HTMLAttributes<HTMLSpanElement>> = props => {
  const [style, rest] = splitProps(props, ["class"]);
  return (
    <span {...rest}>
      <svg
        class={`${defaultIconStyle()} ${style.class}`}
        viewBox="0 0 40 40"
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <path d="m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
        </g>
      </svg>
    </span>
  );
};

export default Remove;
