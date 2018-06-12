export interface ThemeInterface {
  button: {
    height: number;
    lineHeight: number;
    fontSize: string;
    borderRadius: string;
    primary: {
      background: string;
      color: string;
      hover: {
        background: string;
      };
    };
    secondary: {
      border: string;
      background: string;
      color: string;
      hover: {
        borderColor: string;
        background: string;
        color: string;
      };
    };
    disabled: {
      border: string;
      background: string;
      color: string;
      opacity: number;
      pointerEvents: string;
    };
  };
}

const theme: ThemeInterface = {
  button: {
    height: 40,
    lineHeight: 1.5,
    fontSize: "13px",
    borderRadius: "100px",
    primary: {
      background: "#ff6400",
      color: "#fff",
      hover: {
        background: "#ee5d00",
      },
    },
    secondary: {
      border: "#fff",
      background: "transparent",
      color: "#fff",
      hover: {
        borderColor: "#ff6400",
        background: "#ff6400",
        color: "#fff",
      },
    },
    disabled: {
      border: "#6b6b6b",
      background: "transparent",
      color: "#6b6b6b",
      opacity: 1,
      pointerEvents: "none",
    },
  },
};

export default theme;
