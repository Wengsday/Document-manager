import { extendTheme } from "@chakra-ui/react";
import { Button, Select, Tabs, Input } from "./Components";
import { TYPESCALES } from "./typography";

export const OnBoardingPrimaryProposal = "#7B61FF";
export const OnBoardingPrimaryActivation = "#19A4CF";

export const PrimaryText = "#3C3C3C";
export const SecondaryText = "#606060";
export const DisabledText = "#C2C2C2";
export const NotificationText = "#606060";
export const DarkGreyBG = "#DEDEDE";
export const LightGreyBG = "#F0F0F0";

export const SuccessColor = "#6FC79B";
export const Warning = "#F2B661";
export const Error = "#F62846";
export const White = "#FFFFFF";
export const Black = "#000000";

const theme = extendTheme({
  fonts: {
    body: "Roboto"
  },
  typography: TYPESCALES,
  textStyles: TYPESCALES,
  colors: {
    purple: {
      500: OnBoardingPrimaryProposal
    },
    blue: {
      500: OnBoardingPrimaryActivation
    },
    gray: {
      300: LightGreyBG,
      400: DarkGreyBG,
      500: DisabledText,
      600: SecondaryText,
      700: NotificationText,
      900: PrimaryText
    },
    white: White,
    black: Black,
    error: Error,
    warning: Warning,
    success: SuccessColor
  },
  components: {
    Button,
    Tabs,
    Select,
    Input
  },
  config: {
    cssVarPrefix: "saltpay"
  },
  styles: {
    global: {
      body: { background: LightGreyBG, scrollBehavior: "smooth" },
      a: { textDecoration: "none !important" }
    }
  }
});

export default theme;
