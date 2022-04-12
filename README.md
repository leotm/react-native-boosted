<p align="center">
  <img src="https://user-images.githubusercontent.com/1881059/159564299-70d98608-6526-4437-ab51-6dc719d541e2.jpg">
</p>

<h1 align="center">React Native Template / Boilerplate</h1>
<h3 align="center">Bleeding 🔪 Edge 🌉 Night<s>ly</s>mare 🌃 Edition</h3>
<h6 align="center">““”̿ ̿ ̿ ̿ ̿’̿’̵͇̿̿з=(*▽*)=ε/̵͇̿̿/̿ ̿ ̿ ̿ ̿’““</h6>
<h6 align="center">IDKFA</h6>

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.68.0-red.svg)](https://github.com/facebook/react-native/releases)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![Linter](https://badges.aleen42.com/src/eslint.svg)](#)
[![Formatter: prettier](https://img.shields.io/badge/Formatter-Prettier-f8bc45.svg)](#)
[![CI](https://github.com/leotm/react-native-template-new-architecture/actions/workflows/main.yml/badge.svg)](https://github.com/leotm/react-native-template-new-architecture/actions/workflows/main.yml)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/pulse)
[![Docs](https://img.shields.io/badge/Docs%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/wiki)
[![Project](https://img.shields.io/badge/Proj%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/projects/1)

## Setup

[Fresh M1](https://github.com/leotm/react-native-template-new-architecture/wiki/M1-Setup)

## Yarn

```sh
yarn set version berry # Globally, outside repo
yarn set version canary # Bonus, to keep up w Renovate bot
```

## Install

```sh
yarn
yarn setup # If bonus n/a
```

## Start

```sh
yarn start
```

## Silicon (M1) Macs

### iOS (arm64)

```sh
cd ios
pod install
..
yarn ios
```

_Or [iOS (Intel x86_64)](https://github.com/leotm/react-native-template-new-architecture/wiki/(New)-Architecture#building-for-ios-intel-x86_64-architecture)_

### Android

[Building-from-source#prerequisites](https://github.com/facebook/react-native/wiki/Building-from-source#prerequisites), but with [NDK 25.0.8221429 rc2](https://github.com/reactwg/react-native-releases/discussions/13#discussioncomment-2269256)

```
# android/local.properties
sdk.dir=/Users/<user>/Library/Android/sdk
ndk.dir=/Users/<user>/Library/Android/sdk/ndk/25.0.8221429
```

_Strip: ` rcX` suffix / (trailing) spaces / final final linebreak - otherwise `fcntl(): Bad file descriptor`_

Open [Android Studio - Preview release - Canary build](https://developer.android.com/studio/preview)
- Open Project, set the [JDK](https://github.com/leotm/react-native-template-new-architecture/wiki/Android#jdk)
- [SDK Manager > SDK Tools > NDK > ⬇️ 25.0.8221429 rc2](https://user-images.githubusercontent.com/1881059/158474758-c8c1412c-2f35-4d0d-abc7-6ba18c65827c.png)
- [Build only one ABI during development](https://reactnative.dev/docs/build-speed#build-only-one-abi-during-development-android-only)
- [Build all 4 default ABIs first](https://github.com/leotm/react-native-template-new-architecture/blob/master/android/gradle.properties#L33) with libraries like `react-native-screens` ([clean issue](https://github.com/reactwg/react-native-releases/discussions/13#discussioncomment-2254502) resolved) or `react-native-safe-area-context` till resolved
- Open e.g. `Pixel_3a_API_31_arm64-v8a` <s>[Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview)</s>
- Make Project
  
```sh
yarn android
```

### Troubleshooting

- _[Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)_
- _[New Architecture - Troubleshooting](https://reactnative.dev/docs/next/new-architecture-troubleshooting)_

## Storybook v6 alpha

[src/index.tsx](https://github.com/leotm/react-native-template-new-architecture/blob/master/src/index.tsx#L123)

```diff
- export default false ? StorybookUIRoot : App 
+ export default true ? StorybookUIRoot : App 
```
  
_Soon: [v6 rn storybook server](https://github.com/storybookjs/react-native/projects/2#card-68690945)_

## Storybook v5

[metro.config.js](https://github.com/leotm/react-native-template-new-architecture/blob/master/metro.config.js#L16)
  
```diff
-       inlineRequires: true
+       inlineRequires: false
# https://github.com/facebook/hermes/issues/135
# https://github.com/facebook/react-native/issues/31969
```

```sh
# @storybook/react-native-server v5
yarn storybook
```
  
```sh
yarn <android/ios>
```

## Node

_With [ts-node](https://github.com/TypeStrong/ts-node) and [curveball](https://github.com/curveball)_

```sh
yarn server
```
  
## Deno
  
```sh
brew install deno
```
  
```sh
yarn deno
```

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
