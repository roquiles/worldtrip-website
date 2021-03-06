import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "500": "#999999",
      "200": "#DADADA",
      "50": "#F5F8FA",
    },
    teal: {
      "800": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "teal.800",
      },
    },
  },
  components: {
    Divider: {
      baseStyle: {
        borderColor: "teal.800",
      },
    },
  },
});
