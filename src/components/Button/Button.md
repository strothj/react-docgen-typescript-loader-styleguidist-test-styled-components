```js
const theme = require("../../theme").default;
const { ThemeProvider } = require("../../themed-components");
const { PrimaryButton } = require("./Button");

<ThemeProvider theme={theme}>
  <PrimaryButton text="Hit me" />
</ThemeProvider>
```
