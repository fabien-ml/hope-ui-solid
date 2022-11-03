/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/link.tsx
 */

import {
  createHopeComponent,
  hope,
  mergeThemeProps,
  STYLE_CONFIG_PROP_NAMES,
} from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";

import { AnchorStyleConfigProps, useAnchorStyleConfig } from "./anchor.runtime";

export interface AnchorProps extends AnchorStyleConfigProps {
  /** Whether the link should be opened in a new tab. */
  isExternal?: boolean;
}

/**
 * Anchors are accessible elements used primarily for navigation.
 * This component is styled to resemble a hyperlink and semantically renders an <a>.
 */
export const Anchor = createHopeComponent<"a", AnchorProps>(props => {
  props = mergeThemeProps("Anchor", {}, props);

  const [local, styleConfigProps, others] = splitProps(
    props,
    ["class", "isExternal"],
    STYLE_CONFIG_PROP_NAMES
  );

  const { baseClasses, styleOverrides } = useAnchorStyleConfig("Anchor", styleConfigProps);

  return (
    <hope.a
      class={clsx(baseClasses().root, local.class)}
      __css={styleOverrides().root}
      target={local.isExternal ? "_blank" : undefined}
      rel={local.isExternal ? "noopener noreferrer" : undefined}
      {...others}
    />
  );
});
