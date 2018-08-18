import { SheetsRegistry } from "react-jss";
import {
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  pallete: {
    primary: { main: blue[700] },
    secondary: { main: grey[700] }
  }
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

export default function getContext() {
  if (!process.browser) {
    return createPageContext();
  }
  if (!global.INIT_MATERAIAL_UI) {
    global.INIT_MATERAIAL_UI = createPageContext();
  }

  return global.INIT_MATERAIAL_UI;
}
