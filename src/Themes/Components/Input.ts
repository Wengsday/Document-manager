export const Input = {
  variants: {
    outline: {
      field: {
        bg: "white",
        padding: "12px 16px",
        fontSize: "16px",
        border: "none",
        _focus: { border: "2px solid #7b61ff" }
      }
    },
    counter: {
      field: {
        bg: "white",
        maxWidth: "50px",
        textAlign: "center"
      }
    }
  },
  defaultProps: {
    size: "lg"
  }
};
