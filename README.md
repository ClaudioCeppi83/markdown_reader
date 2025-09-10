# Markdown Reader

**Version:** 1.0.0

A minimalist desktop Markdown viewer and editor built with web technologies and packaged for cross-platform use.

## Features

* **Dual-Panel Layout:** Edit Markdown on the left and see the rendered HTML preview on the right.
* **Real-time Preview:** Your Markdown is converted to HTML and displayed instantly as you type.
* **Syntax Highlighting:** Code blocks in the preview are automatically highlighted.
* **File Operations:** Open local Markdown files (`.md`, `.markdown`, `.txt`), save your current work, and start new documents.
* **Theme Switching:** Choose between Light, Dark, and System themes. Your preference is saved.
* **Cross-Platform Executables:** Available as an installer for Windows (.exe) and a self-contained executable for Linux (.AppImage).

## Changelog

### [1.0.0] - 2025-09-10

* **Added:** Cross-platform packaging using Electron for Windows (.exe installer) and Linux (.AppImage executable).

### [0.2.1] - 2025-09-08

* **Changed:** Adjusted the color palette for both light and dark themes to improve contrast and visual hierarchy based on UI/UX feedback.

### [0.2.0] - 2025-09-08

* **Added:** Theme switcher with Light, Dark, and System modes.
* **Added:** User's theme preference is saved in `localStorage`.
* **Added:** Custom dropdown menu for theme selection with a selected theme indicator.
* **Changed:** The default theme is now based on the user's system preference.

### [0.1.1] - 2025-09-08

* **Added:** "Save File" functionality to save the editor content to a local file.
* **Added:** "New File" functionality to clear the editor and start a new document.
* **Added:** Confirmation dialogs to prevent data loss when there are unsaved changes.

### [0.1.0] - (Initial Release)

* **Added:** Core MVP features.
* **Added:** Dual-panel layout with a Markdown editor and a real-time preview.
* **Added:** Functionality to open local Markdown files (`.md`, `.markdown`, `.txt`).
* **Added:** Syntax highlighting for code blocks.
