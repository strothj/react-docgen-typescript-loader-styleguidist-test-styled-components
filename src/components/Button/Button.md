```ts
const theme = require("../../theme");
const { ThemeProvider } = require("../../themed-components");
const { PrimaryButton } = require("./Button");

<ThemeProvider theme={theme}>
  <PrimaryButton text="Hit me" />
</ThemeProvider>;
```
