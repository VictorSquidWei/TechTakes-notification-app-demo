# TechTakes Notify Demo (Expo Router)

A minimal React Native demo that mirrors the Tech Takes dark UI style and shows:
- **Login** (demo-only)
- **Dashboard** with "Ultimate" plan badge and **Predictions** list
- **Push notifications** (local) for "New Predictions Available"
- **Settings** with notification toggles

> No backend required. Any email/password logs in and tags your plan as **Ultimate**.

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

- `app/_layout.tsx` — Root layout (no nested NavigationContainer; uses Expo Router Stack).
- `app/(auth)/index.tsx` — Login screen.
- `app/(app)/_layout.tsx` — Tab navigation (Dashboard, Settings).
- `app/(app)/dashboard.tsx` — UI for greeting, Ultimate badge, predictions, and push trigger.
- `lib/notifications.ts` — Permissions + local notification helper.
- `components/Card.tsx` and `lib/theme.ts` — Basic card and colors to match style.

## Notes

- This schedules **local** notifications for demo purposes. Swap to FCM/APNs or OneSignal for production push.
- The "Ultimate" badge is set from the login route params; connect to your auth backend to reflect real packages.
- UI is intentionally compact to fit phones; extend with lists/graphs as needed.
