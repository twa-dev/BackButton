## MainButton
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) Back Button.

```
npm i @twa-dev/mainbutton
```

### Motivation
TWA SDK contains interface to control [MainButton](https://core.telegram.org/bots/webapps#backbutton). It's written in imperative way:

```js
const BackButton = window.Telegram.WebApp.BackButton;

BackButton.show();
BackButton.onClick(() => window.history.back());
```

It's not the best way to write code, especially if you use libraries like React. 

This package exports React component that wraps TWA BackButton SDK:

```js
import BackButton from '@twa-dev/backbutton';

<BackButton onClick={() => window.history.back()} />
```

### Demo
[@MainButtonDemoBot](https://t.me/MainButtonDemoBot)

[Codesandbox](https://codesandbox.io/s/main-button-demo-732l5z)
