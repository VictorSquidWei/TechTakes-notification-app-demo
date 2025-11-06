# TechTakes Notify Demo (Expo Router)

## Quick Start

1. Install dependencies:
   ```bash
   npm i -g expo-cli # if needed
   npm install
   ```
2. Run the app:
   ```bash
   npx expo start
   ```
   - Press **i** for iOS Simulator, **a** for Android, or scan the QR with Expo Go.

3. Test push:
   - On **Dashboard**, tap **Send Test Push** to fire a local notification.
   - Tapping the notification deep-links back to the dashboard.

## Key Files

- `app/_layout.tsx` — Root layout .
- `app/(app)/dashboard.tsx` — UI for predictions.
- `components/Card.tsx` and `lib/theme.ts` — Basic card and colors to match style.

## Notes

- UI is intentionally compact to fit phones;
