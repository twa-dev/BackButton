> **DEPRECATED**
> 
> `BackButton` moved to [@twa-dev/sdk](https://github.com/twa-dev/sdk#React). This repo and corresponding npm-package are deprecated.

## BackButton
[![npm version](https://img.shields.io/npm/v/@twa-dev/backbutton)](https://www.npmjs.com/package/@twa-dev/backbutton)

React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) Back Button.

```
npm i @twa-dev/backbutton
```

### Motivation
TWA SDK contains an interface that controls [BackButton](https://core.telegram.org/bots/webapps#backbutton). It's written in imperative way:

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
[@BackButtonDemoBot](https://t.me/BackButtonDemoBot)

[Codesandbox](https://codesandbox.io/s/back-button-demo-lpc0rv)
