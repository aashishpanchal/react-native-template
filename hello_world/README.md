This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Tech Stack

- **React Native** 0.85 (New Architecture)
- **React** 19.2
- **TypeScript** 5.x
- **Bun** as package manager
- **ESLint** 9 (flat config)
- **Prettier** for code formatting
- **Jest** for testing
- **Taskfile** for task automation

## Project Structure

```
src/
├── app.tsx              # Root component
├── consts/
│   ├── colors.ts        # Light/dark color palette
│   └── assets.ts        # Font & image constants
└── widgets/
    ├── header.tsx        # Logo with spin animation
    ├── feature-list.tsx  # Feature cards
    ├── quick-tips.tsx    # CLI commands reference
    └── footer.tsx        # Footer text
```

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Prerequisites

- Node.js >= 22.11.0
- [Bun](https://bun.sh)
- [Task](https://taskfile.dev) (optional, for task runner)
- Xcode (for iOS)
- Android Studio (for Android)

## Step 1: Install Dependencies

```sh
# Using Task
task setup:all

# OR manually
bun install --frozen
```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using Task
task dev:start

# OR using Bun
bun start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using Task
task android:run

# OR using Bun
bun run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

```sh
# Using Task
task ios:pod

# OR manually
bundle install
cd ios && bundle exec pod install
```

Then run the app:

```sh
# Using Task
task ios:run

# OR using Bun
bun run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 4: Modify your app

Now that you have successfully run the app, let's make changes!

Open `src/app.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Available Commands

Run `task --list-all` to see all commands.

| Group       | Command             | Description                  |
| ----------- | ------------------- | ---------------------------- |
| **setup**   | `setup:all`         | Complete project setup       |
|             | `setup:deps`        | Install Node.js dependencies |
|             | `setup:assets`      | Link fonts and assets        |
| **dev**     | `dev:start`         | Start Metro bundler          |
|             | `dev:reset-clean`   | Start Metro with clean cache |
| **lint**    | `lint:check`        | Run ESLint                   |
|             | `lint:format`       | Format with Prettier         |
|             | `lint:types`        | TypeScript type check        |
|             | `lint:test`         | Run Jest tests               |
| **android** | `android:run`       | Run on Android               |
|             | `android:build-apk` | Build release APK            |
|             | `android:build-aab` | Build AAB for Play Store     |
|             | `android:release`   | Build APK + AAB              |
|             | `android:clean`     | Clean Gradle build           |
| **ios**     | `ios:run`           | Run on iOS                   |
|             | `ios:pod`           | Install CocoaPods            |
| **diag**    | `diag:info`         | RN environment info          |
|             | `diag:doctor`       | Run diagnostics              |
|             | `diag:status`       | Project status               |
|             | `diag:devices`      | List simulators/devices      |
|             | `diag:clean`        | Clean build artifacts        |

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Author

**Aashish Panchal** - [aipanchal51@gmail.com](mailto:aipanchal51@gmail.com)
