# Permission Firewall

Permission Firewall is a lightweight, privacy-focused browser extension that blocks
camera, microphone, and location access by default.

The extension helps protect users from unnecessary or unwanted hardware permission
requests by enforcing privacy-first defaults at the browser level.

---

## Features

- Blocks camera access globally
- Blocks microphone access globally
- Blocks geolocation access globally
- Lightweight and fast
- Works fully offline
- No ads, no tracking, no analytics

---

## Motivation

Modern browsers allow websites to request sensitive permissions such as camera,
microphone, and location. While browsers provide manual controls, these controls
require users to react after a request is made and are often scattered across
multiple settings pages.

Permission Firewall was created to provide a simple, centralized way to enforce
default-deny behavior for sensitive permissions.

---

## Technology Stack

- Manifest V3
- Vanilla JavaScript
- HTML and CSS
- Browser Content Settings API

---

## Supported Browsers

- Google Chrome
- Microsoft Edge
- Mozilla Firefox (planned)

---

## Important Note on Browser Behavior

Due to browser security design, permission request popups may still appear when a
website attempts to access the camera, microphone, or location.

Even if a prompt is shown, access is always blocked unless the user explicitly
changes the permission. This behavior is enforced by the browser and cannot be
overridden by extensions.

---

## Testing

The extension can be tested using the following websites:

- https://browserleaks.com/geo
- https://webcamtests.com
- https://mic-test.com

---

## Installation (Developer Mode)

1. Open `chrome://extensions`
2. Enable Developer Mode
3. Click “Load unpacked”
4. Select the `permission-firewall` project folder

---

## Project Status

- Default permission blocking implemented
- Temporary per-site permission support planned
- Permission activity logging planned
- Firefox compatibility planned

---

## License

This project is licensed under the MIT License.

