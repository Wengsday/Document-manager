/* Typography Type sclaes */

export type TypeScale = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

export type TypeScales = {
  "typography-12px-400": TypeScale;
  "typography-12px-500": TypeScale;
  "typography-14px-500": TypeScale;
  "typography-16px-400": TypeScale;
  "typography-16px-500": TypeScale;
  "typography-16px-700": TypeScale;
  "typography-16px-900": TypeScale;
  "typography-22px-700": TypeScale;
  "typography-20px-500": TypeScale;
};

export const TYPESCALES: TypeScales = {
  "typography-12px-400": {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14px"
  },
  "typography-12px-500": {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14px"
  },
  "typography-14px-500": {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "14px"
  },
  "typography-16px-400": {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19px"
  },
  "typography-16px-500": {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "19px"
  },
  "typography-16px-700": {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px"
  },
  "typography-16px-900": {
    fontSize: "16px",
    fontWeight: 900,
    lineHeight: "19px"
  },
  "typography-20px-500": {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "25px"
  },
  "typography-22px-700": {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "25px"
  }
};
