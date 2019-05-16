### Installation

```bash
yarn add rn-check-ios-device-type

npm i rn-check-ios-device-type
```

### Usage

```js
import checkIosDeviceType, { DEVICE_TYPES } from 'rn-check-ios-device-type';

function App() {
  const isIphoneXSMax = checkIosDeviceType(DEVICE_TYPES.IPHONEXSMAX); // return true or false
  ........
  ........
  ........
  ........
}
```

