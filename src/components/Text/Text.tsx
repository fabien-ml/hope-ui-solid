import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { useHopeTheme } from "@/contexts/HopeContext";

import { ElementType, PolymorphicComponentProps } from "../types";
import { commonProps } from "../utils";
import { textStyles, TextVariants } from "./Text.styles";

export type ThemeableTextOptions = Omit<TextVariants, "lineClamp">;

export type TextProps<C extends ElementType> = PolymorphicComponentProps<C, TextVariants>;

/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
export function Text<C extends ElementType = "p">(props: TextProps<C>) {
  const theme = useHopeTheme().components.Text;

  const [local, styleProps, others] = splitProps(props, commonProps, [
    "css",
    "size",
    "weight",
    "color",
    "align",
    "lineClamp",
    "secondary",
  ]);

  const classList = () => {
    const baseClass = textStyles(styleProps);

    return {
      [baseClass]: true,
      [local.class ?? ""]: true,
      [local.className ?? ""]: true,
      ...local.classList,
    };
  };

  return <Dynamic component={local.as ?? "p"} classList={classList()} {...others} />;
}
