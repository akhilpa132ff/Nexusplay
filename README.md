# NEXUSPLAY

NEXUSPLAY is an independent esports community project. Current development work is on **nexusplay-audit-and-fixes**.

## Current foundation
- Mobile-first neon game-selection homepage.
- Game hubs for BGMI, Free Fire MAX, Call of Duty: Mobile and Mobile Legends.
- Supabase email/password account flow.
- Player profile creation and editing.
- Profiles are private by default; discoverability is opt-in.
- PostgreSQL Row Level Security protects profile and player-game records.
- Browser code uses only a Supabase publishable key. Never put a secret/service-role key in this repository.

## Development status
Tournaments, groups, teams, player discovery, scrims, messages, notifications, AI, maps and rewards are not yet production features. Older pages are prototypes and are intentionally not linked from the new game-selection page.

## Supabase setup
The project URL and publishable key are configured in `assets/js/supabase.js`. Publishable keys are designed for public clients; database access is controlled by RLS.

For GitHub Pages email confirmation:
1. In Supabase Dashboard, open Authentication → URL Configuration.
2. Set the Site URL to the published NEXUSPLAY site URL.
3. Add the exact published `auth.html` URL as an allowed redirect URL.
4. Check Authentication → Providers → Email and leave email confirmation enabled.
5. Test signup with an email you control, then sign in and save a profile.

## Safety and launch requirements
- Do not collect home addresses, school names, phone numbers or exact live locations.
- Keep public profile discovery off by default.
- Add moderation, reporting, blocking, rate limits and age-appropriate community rules before public social features.
- Paid tournaments, payments and subscriptions must not be enabled until legal, age, guardian, publisher and payment requirements are reviewed.
- Do not use copyrighted game maps, logos or assets without permission.

## Test checklist
- Check homepage on narrow mobile and desktop viewports.
- Confirm every game card opens the matching hub.
- Confirm unauthenticated visitors are redirected from account to sign in.
- Test signup, email confirmation, sign-in, profile save, privacy toggle and sign-out.
- Verify RLS using anonymous and authenticated sessions.
- Run Supabase Security and Performance Advisors after schema changes.
