# Custom Fonts

This directory is for custom fonts used in the application.

## How to add new fonts:

1.  **Download the font files:** Download the `.ttf` font files for the font family you want to add. For example, for Roboto, you would download:
    *   `Roboto-Regular.ttf`
    *   `Roboto-Bold.ttf`
    *   `Roboto-Italic.ttf`
    *   `Roboto-BoldItalic.ttf`
    *   etc.

2.  **Place the files here:** Place the downloaded `.ttf` files directly into this directory (`/assets/fonts`).

3.  **Link the fonts:** Run the following command in your terminal to link the new font assets to the native projects:
    ```bash
    npx react-native-asset
    ```

4.  **Rebuild the app:** You will need to rebuild your application for the new fonts to be included.
    ```bash
    npm run android
    ```
    or
    ```bash
    npm run ios
    ```
