const buttonCommonProps = {
  height: "48px",
  borderRadius: "66px",
  padding: "12px 16px",
  fontWeight: 700,
  fontSize: "16px",
  _disabled: { bg: "gray.500", color: "gray.600" },
  _hover: { bg: "gray.500" },
  svg: {
    position: "absolute",
    left: "18px"
  }
};

export const Button = {
  baseStyle: {
    borderRadius: ".25rem",
    fontWeight: 400
  },
  variants: {
    primary: {
      ...buttonCommonProps,
      color: "white",
      bg: "purple.500"
    },
    secondary: {
      ...buttonCommonProps,
      bg: "white",
      color: "purple.500",
      border: "1px solid",
      borderColor: "purple.500",
      _disabled: { bg: "gray.500", color: "gray.600" }
    },
    icon: {
      height: "48px",
      borderRadius: 0,
      bg: "white",
      color: "purple.500",
      fill: "purple.500",
      _disabled: { opacity: 1, color: "gray.400" }
    }
  }
};
