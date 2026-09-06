// Project catalogue. Entries that carry a `caseStudy` get their own
// /projects/<slug> page; the rest render as cards only.

export interface GalleryShot {
  src: string;
  caption: string;
  /** Intrinsic size of the file — set on the <img> so the grid reserves space. */
  width: number;
  height: number;
  /** Spans the full grid width instead of a single column. */
  wide?: boolean;
}

export interface CaseStudy {
  /** One-line hook under the title on the detail page. */
  tagline: string;
  /** Search-result title — keep it under ~60 characters before the site suffix. */
  seoTitle: string;
  /** Meta description — keep it under ~155 characters. */
  seoDescription: string;
  /** Wide hero image for the detail page. */
  hero: string;
  heroWidth: number;
  heroHeight: number;
  /** "At a glance" table. */
  meta: { label: string; value: string }[];
  /** Intro paragraphs. */
  overview: string[];
  /** Grouped feature lists. */
  features: { title: string; items: string[] }[];
  /** The genuinely hard parts, written out. */
  challenges: { title: string; body: string }[];
  /** Tech stack, grouped by layer. */
  stack: { title: string; items: string[] }[];
  /** Headline numbers. */
  scale: { value: string; label: string }[];
  /** Optional external links — live site, store listing, repo. */
  links?: { label: string; href: string }[];
  /** Portrait phone captures tile 4-up; desktop captures tile 2-up. */
  galleryLayout: 'phone' | 'desktop';
  gallery: GalleryShot[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: 'web' | 'mobile';
  caseStudy?: CaseStudy;
}

/** Portrait phone capture, 560px wide — height varies with the device aspect. */
const phone = (src: string, caption: string, height = 1212): GalleryShot => ({
  src,
  caption,
  width: 560,
  height,
});

export const projects: Project[] = [
  {
    slug: 'steppy',
    title: 'Steppy',
    description:
      'A cross-platform step-tracking app that turns a daily walking goal into a collectible pet game. Reads native health data, sells monthly content packs through verified in-app purchases, and ships with its own admin tooling.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'RevenueCat'],
    image: '/screens/steppy/cover.jpg',
    category: 'mobile',
    caseStudy: {
      tagline: 'Walking earns you virtual pets — and every pet gets a room you decorate by hand.',
      seoTitle: 'Steppy — React Native Step Tracker & Pet Game',
      seoDescription:
        'A React Native and Supabase step tracker where walking earns virtual pets — native health data, verified in-app purchases, and built-in admin tooling.',
      hero: '/screens/steppy/cover.jpg',
      heroWidth: 1440,
      heroHeight: 665,
      meta: [
        { label: 'Platform', value: 'iOS + Android' },
        { label: 'Role', value: 'Full-stack mobile developer' },
        { label: 'Type', value: 'Client project' },
        { label: 'Timeline', value: '2026' },
        { label: 'Status', value: 'iOS submitted to the App Store · Android via EAS' },
      ],
      overview: [
        `Steppy turns a daily step goal into a collectible game. The app reads step counts straight from the phone's health platform — HealthKit on iOS, Health Connect on Android — and rewards consistent walking with virtual pets. Hit your goal enough days in a row and a new animal arrives, delivered in a sack the player opens.`,
        `Each pet gets its own home, which the player decorates: furniture is dragged into place freely, layered front-to-back, and saved per pet. Pets can be dressed in hats, and rooms re-skinned with wallpapers and floors. Two in-app currencies are earned by walking and spent in the shop, alongside a monthly Seasonal Pack sold as a real in-app purchase.`,
        `Around that core sits a full social and progression layer: friends and leaderboards, gift-sending, a daily trivia card, a streak calendar, a world map of walking progress, and push notifications.`,
        `What makes the project unusual is how much of it is content, not code. Pets, hats, furniture, wallpapers, categories, seasonal packs and new-player gift bundles are all database-driven and managed from admin screens built into the app itself — so the client adds new content and tunes how every item sits on every animal without a developer or an app-store release.`,
      ],
      features: [
        {
          title: 'Step tracking & progression',
          items: [
            'Native health integration on both platforms (HealthKit / Health Connect)',
            'Background step syncing, so progress updates without opening the app',
            'Streak-based pet rewards with a calendar showing which day earned which pet',
            'Daily step goals, milestones, and two earned currencies',
          ],
        },
        {
          title: 'Pets & decoration',
          items: [
            'Drag-and-drop room decorator with free positioning, depth layering and room boundaries',
            'Per-pet saved layouts',
            'Hats with per-species fitting, including flip poses and behind/in-front rendering',
            'Wallpapers, floors and a categorised furniture catalog',
          ],
        },
        {
          title: 'Social',
          items: [
            'Friends, leaderboards, and progress comparison',
            'Gift sending and a gift inbox',
            'System-wide announcements that can carry a gift with them',
            'Push notifications',
          ],
        },
        {
          title: 'Commerce',
          items: [
            'Monthly Seasonal Packs sold as a real in-app purchase (RevenueCat)',
            'Server-verified delivery — purchases granted by a webhook using a service-role key',
            'In-app shops for furniture, designs and hats',
          ],
        },
        {
          title: 'Onboarding',
          items: [
            'New players receive a starter pet paired with a curated furniture gift, presented as an animated housewarming celebration',
            'A game-style guided tutorial with spotlight coach marks that teaches dragging, tapping and decorating',
            "Features unlock progressively over a player's first days",
          ],
        },
        {
          title: 'Built-in admin tooling',
          items: [
            'Visual hat calibration — position, scale and rotate a hat on a pet by touch, then clone that fit across the whole roster',
            'Pet and furniture scaling tools',
            'Furniture category manager',
            'Welcome-gift bundle builder',
            'Broadcast notifications with attached gifts',
          ],
        },
      ],
      challenges: [
        {
          title: 'Native health data on two very different platforms',
          body: 'HealthKit and Health Connect expose steps in incompatible ways, with different permission models and different background behaviour. Both are wrapped behind one interface, with custom Expo config plugins to inject the native entitlements Expo does not ship.',
        },
        {
          title: 'A gesture-driven room decorator',
          body: 'Furniture is positioned by touch with free-form dragging, depth ordering, and boundaries that hold on any screen size — while the pet itself is independently draggable in the same space.',
        },
        {
          title: 'A content pipeline instead of hardcoded assets',
          body: 'Every cosmetic — pets, hats, furniture, wallpapers, categories, gift bundles — is a database row with an admin screen behind it. Adding a new animal or a seasonal collection is a content task, not a release.',
        },
        {
          title: 'Correctness enforced in the database, not just the app',
          body: 'Access control runs on row-level security policies; anything a client must not be trusted with — granting paid packs, awarding currency — is a SECURITY DEFINER function. Rules like "a pet wears exactly one variant of a hat" are held by partial unique indexes and triggers, so no client can violate them.',
        },
        {
          title: 'Server-verified in-app purchases',
          body: "A Supabase Edge Function receives RevenueCat's webhook, verifies a shared secret, and grants the pack server-side with a service-role key. The client's own grant path is best-effort only and ownership is confirmed by polling — so a tampered client cannot award itself paid content.",
        },
        {
          title: 'Full landscape support',
          body: "Every screen except the pet's room reflows for landscape, with safe-area handling for notches and gesture bars that move to the sides when the phone rotates.",
        },
      ],
      stack: [
        {
          title: 'Mobile',
          items: [
            'React Native 0.81',
            'Expo SDK 54 (New Architecture, Hermes)',
            'TypeScript',
            'Expo Router (typed routes)',
            'React Navigation',
          ],
        },
        {
          title: 'Native modules',
          items: [
            'HealthKit (react-native-health)',
            'Health Connect',
            'Custom Expo config plugins',
            'Background Fetch & Task Manager',
            'Expo Notifications + Notifee',
            'Sensors, Haptics, Screen Orientation',
          ],
        },
        {
          title: 'Animation & interaction',
          items: ['Reanimated', 'Animated API', 'PanResponder', 'Gesture Handler', 'Lottie', 'react-native-animatable'],
        },
        {
          title: 'Backend',
          items: [
            'Supabase PostgreSQL',
            'Row Level Security',
            'SECURITY DEFINER RPCs',
            'Realtime subscriptions',
            'Storage',
            'Edge Functions (Deno)',
          ],
        },
        {
          title: 'Payments',
          items: ['RevenueCat', 'App Store & Google Play IAP', 'Webhook-verified fulfilment'],
        },
        {
          title: 'Delivery',
          items: ['EAS Build & Submit', 'App Store Connect', 'Google Play Console'],
        },
      ],
      scale: [
        { value: '14', label: 'User-facing screens' },
        { value: '8', label: 'In-app admin tools' },
        { value: '34', label: 'Components' },
        { value: '12', label: 'Custom hooks' },
        { value: '50', label: 'Database migrations' },
        { value: '2', label: 'Edge functions' },
      ],
      galleryLayout: 'phone',
      gallery: [
        {
          src: '/screens/steppy/cover.jpg',
          caption:
            'Every pet gets a room the player decorates by hand — furniture dragged into place, hats fitted per species.',
          width: 1440,
          height: 665,
          wide: true,
        },
        phone('/screens/steppy/home-progress.jpg', 'Pet progress, the current streak and a daily trivia card on the home screen.'),
        phone('/screens/steppy/home-steps.jpg', "Two earned currencies, and the day's step count against the goal."),
        phone('/screens/steppy/home-world.jpg', 'Coins accumulate as steps are logged, with the next one always in sight.'),
        phone('/screens/steppy/my-pets.jpg', 'The reward for walking: a growing roster of animals, each stamped with the day it was earned.'),
        phone('/screens/steppy/collection-furniture.jpg', 'Owned furniture, with spares tracked separately so they can be gifted.'),
        phone('/screens/steppy/collection-designs.jpg', 'Wallpapers and floors re-skin any pet’s room.'),
        phone('/screens/steppy/collection-hats.jpg', 'Hats are fitted per species so they sit correctly on every animal.'),
        phone('/screens/steppy/send-gift.jpg', 'Spare items can be picked from the collection and sent to a friend.'),
        phone('/screens/steppy/world-shop.jpg', 'The shop hub: daily furniture, the design studio, and the current Seasonal Pack.'),
        phone('/screens/steppy/seasonal-pack.jpg', 'Monthly Seasonal Packs are a real in-app purchase, fulfilled server-side by a RevenueCat webhook.'),
        phone('/screens/steppy/shop-raccoon.jpg', "Raccoon's Shop rotates a fresh set of furniture every day."),
        phone('/screens/steppy/shop-flamingo.jpg', "Flamingo's Studio sells wallpapers and floors for the second currency."),
        phone('/screens/steppy/world-map.jpg', 'A world map charts walking progress across regions.'),
      ],
    },
  },
  {
    slug: 'scalemyplate',
    title: 'ScaleMyPlate',
    description:
      'A nutrition tracker that pairs with an IoT smart kitchen scale. The scale weighs and identifies the food and pushes it to the cloud; the app turns it into calories, macros, daily summaries and streaks — without the user typing anything.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'IoT'],
    image: '/screens/scalemyplate/cover.jpg',
    category: 'mobile',
    caseStudy: {
      tagline: 'Weigh it. Log it. Done — the scale does the part every other calorie app makes you guess.',
      seoTitle: 'ScaleMyPlate — IoT Smart Scale Nutrition App',
      seoDescription:
        'A React Native and Supabase nutrition tracker paired with an IoT kitchen scale — 14 Edge Functions serve both the mobile app and the device firmware.',
      hero: '/screens/scalemyplate/cover.jpg',
      heroWidth: 1600,
      heroHeight: 901,
      meta: [
        { label: 'Platform', value: 'iOS + Android (Expo, New Architecture)' },
        { label: 'Role', value: 'Full-stack mobile developer, solo' },
        { label: 'Type', value: 'Companion app for an IoT smart scale' },
        { label: 'Timeline', value: 'Jan – May 2026' },
        { label: 'Status', value: 'v1.1.0 · active development' },
      ],
      overview: [
        'ScaleMyPlate is a cross-platform mobile app built with React Native and a Supabase backend that acts as the companion app for an IoT smart kitchen scale.',
        'Most calorie-tracking apps make the user do the hard part: guessing portion sizes. ScaleMyPlate removes that step. The physical scale weighs the food, identifies it through a USDA food database lookup or a product barcode, and pushes the meal straight into the cloud — where the app picks it up. The user gets accurate calories, protein, carbs and fat without typing a thing, and can still log manually when the scale is not around.',
        'The app covers the full product surface: email and social authentication, guided onboarding, a QR-code flow to pair a phone with a physical scale, a daily nutrition dashboard, manual food entry, meal history with per-food editing, goal setting with weekly analytics, streak tracking, light and dark theming, and account management including a full cascading account deletion.',
        'On the backend I designed the PostgreSQL schema and built 14 Supabase Edge Functions that serve as a documented REST API — consumed both by the mobile app and directly by the IoT device firmware. Postgres triggers keep meal totals, daily summaries and streaks consistent automatically, so the nutrition maths never has to be duplicated between the device and the app. Every user-owned table is protected by Row Level Security.',
      ],
      features: [
        {
          title: 'Automatic logging',
          items: [
            'The IoT scale submits weighed meals straight to the cloud API',
            'QR-code device pairing links a phone to a physical scale',
            'Barcode scanning looks up packaged products via OpenFoodFacts',
            'Full-text USDA food search, ranked by popularity so common foods surface first',
          ],
        },
        {
          title: 'Manual logging & history',
          items: [
            'Add any food by serving size and actual consumed weight, with nutrition auto-scaled to the amount eaten',
            'Daily dashboard: calories-remaining ring, macro breakdown, last meal, quick actions',
            'Browse any past date, expand meals, and edit or delete individual food items',
            'Totals recalculate automatically on every change',
          ],
        },
        {
          title: 'Goals & progress',
          items: [
            'Set calorie, protein, carb and fat targets',
            'Weekly breakdowns — this week, last week, two weeks ago — with totals and daily averages',
            'Current and longest logging streaks, maintained by database triggers',
          ],
        },
        {
          title: 'App & account',
          items: [
            'Hand-built light and dark themes on a shared colour token system',
            'Custom SVG tab icons — no UI kit',
            'Password reset, personal details and notification preferences',
            'Full cascading account deletion',
          ],
        },
        {
          title: 'Database design',
          items: [
            'Nine core tables, every one under Row Level Security',
            'Auto-provisioning triggers create a profile, default goals and a streak row on signup',
            'A trigger chain recalculates meal totals, then the daily summary, then the streak on every food-item write',
            'Device pairing enforces a maximum of two profiles per scale with automatic slot assignment',
            'Food search uses a GIN full-text index plus a click-popularity counter for ranking',
          ],
        },
        {
          title: 'REST API surface',
          items: [
            'Food database — /barcode-lookup, /food-search, /food-click',
            'IoT meals — /iot-meal',
            'Profile — /profile-data, /food-item-edit, /food-item-delete, /goals-update, /device-user-create, /device-user-delete',
            'Device & account — /device-register, /device-update, /link-account, /account-delete',
          ],
        },
      ],
      challenges: [
        {
          title: 'Keeping two clients in sync',
          body: 'The scale and the app can both modify the same meal. Rather than duplicating nutrition maths in firmware and in the app, every derived value — meal totals, daily summaries, streaks — lives in Postgres triggers. One source of truth, and both clients stay correct for free.',
        },
        {
          title: 'Designing an API for hardware',
          body: 'The IoT device has no user session and limited memory, so /profile-data returns goals, streak, history and the current day’s meals in a single round trip instead of forcing the firmware to make five separate calls.',
        },
        {
          title: 'Portion accuracy',
          body: 'Nutrition is stored per reference serving and scaled by the actual weighed amount, so a 150 g portion of a food listed per 100 g is computed exactly. That is the whole reason the scale exists, so it had to be right.',
        },
        {
          title: 'A hand-built design system',
          body: 'No UI kit: custom SVG tab icons, a shared colour token system, and a complete light and dark theme implemented across roughly 9,000 lines of screen code.',
        },
      ],
      stack: [
        {
          title: 'Mobile',
          items: [
            'React Native 0.81',
            'React 19 (New Architecture)',
            'Expo SDK 54',
            'Expo Router (typed, file-based)',
            'TypeScript (strict)',
          ],
        },
        {
          title: 'Native & UI',
          items: [
            'Reanimated',
            'Gesture Handler',
            'React Native SVG',
            'expo-camera (QR + barcode)',
            'expo-auth-session + web-browser (OAuth)',
            'Haptics, Linear Gradient, Blur, AsyncStorage',
          ],
        },
        {
          title: 'Backend',
          items: [
            'Supabase PostgreSQL',
            'Supabase Auth',
            'Row Level Security',
            'Edge Functions (Deno) — 14 REST endpoints',
            'Postgres triggers for derived data',
            'GIN full-text index',
          ],
        },
        {
          title: 'Data sources',
          items: ['USDA FoodData Central', 'OpenFoodFacts', 'Cached in PostgreSQL'],
        },
        {
          title: 'Delivery',
          items: ['EAS Build & Submit', 'Expo Dev Client', 'ESLint (Expo config)'],
        },
      ],
      scale: [
        { value: '14', label: 'REST endpoints' },
        { value: '9', label: 'Tables under RLS' },
        { value: '2', label: 'Client types on one API' },
        { value: '2', label: 'Profiles per scale' },
        { value: '~9k', label: 'Lines of screen code' },
        { value: '1.1.0', label: 'App version' },
      ],
      galleryLayout: 'phone',
      gallery: [
        {
          src: '/screens/scalemyplate/cover.jpg',
          caption:
            'The scale weighs and identifies the food, then pushes the meal to the cloud — the app picks it up already counted.',
          width: 1600,
          height: 901,
          wide: true,
        },
        phone('/screens/scalemyplate/dashboard.jpg', 'Calories left, macro progress and the last meal at a glance.', 996),
        phone('/screens/scalemyplate/history.jpg', 'Browse any date and drill into individual meals and foods.', 996),
        phone('/screens/scalemyplate/goals.jpg', 'Weekly calorie and macro breakdowns measured against your targets.', 996),
        phone('/screens/scalemyplate/welcome.jpg', 'Guided onboarding introduces meal tracking, goals and scale pairing.', 1213),
        phone('/screens/scalemyplate/login.jpg', 'Email and password sign-in, with Google as a social option.', 1213),
        phone('/screens/scalemyplate/connect.jpg', 'A four-step QR flow links a phone to a physical scale.', 1213),
        phone('/screens/scalemyplate/product.jpg', 'Weighing in progress: the scale reads the portion and the app reflects it.', 996),
      ],
    },
  },
  {
    slug: 'sage',
    title: 'Sage',
    description:
      'A native iOS and Android app for Sage, an AI companion for reflection and wellbeing. Rebuilt from an existing web product and sharing its backend, so every account, conversation and subscription carried across untouched — including voice-to-voice conversation.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Claude API'],
    image: '/screens/sage/cover.jpg',
    category: 'mobile',
    caseStudy: {
      tagline: 'An AI companion you talk to — brought from the web to iOS and Android as a real native app, not a wrapped website.',
      seoTitle: 'Sage — Native AI Companion App for iOS & Android',
      seoDescription:
        'A React Native and Expo rebuild of an AI wellbeing companion, sharing the web product’s Supabase backend so accounts and subscriptions carry across.',
      hero: '/screens/sage/cover.jpg',
      heroWidth: 1600,
      heroHeight: 900,
      meta: [
        { label: 'Client', value: 'Inner Sage (UK)' },
        { label: 'Role', value: 'Sole mobile developer' },
        { label: 'Platform', value: 'iOS + Android (React Native, Expo)' },
        { label: 'Type', value: 'Native rebuild of an existing web product' },
        { label: 'Status', value: 'Built, in store submission' },
      ],
      links: [{ label: 'innersage.co.uk', href: 'https://innersage.co.uk' }],
      overview: [
        'Sage is an AI companion people talk to — by typing or by voice — for reflection, perspective and gentle accountability. The web product already existed; this project brought it to iOS and Android as a genuinely native app rather than a wrapped website.',
        'The brief was to match the web product exactly — same screens, same behaviour, same design language — while being a real native app. Nothing was wrapped in a webview.',
        'The existing Supabase backend, database and AI services were reused as-is, so users move between web and mobile with one account and one subscription. Where mobile genuinely needed something the web did not, the backend was extended rather than duplicated: push notifications, for example, had to learn to reach phones alongside browsers without changing anything the web relied on.',
        'Delivered in milestones, each one ending in a build the client installed and tested on their own device before the next began.',
      ],
      features: [
        {
          title: 'Conversation',
          items: [
            'Conversational AI chat with streaming replies',
            'Saved conversation history',
            'Voice-to-voice mode — speak to Sage, hear her reply, hands free',
            'Dictation for speaking a single message into the composer before sending',
          ],
        },
        {
          title: 'Reflection & wisdom',
          items: [
            'Journey events — log what is coming up, and Sage checks in before and after',
            'Daily wisdom and weekly insights, with a browsable archive',
            'Shareable cards that turn a piece of wisdom into a branded image',
          ],
        },
        {
          title: 'Platform integration',
          items: [
            'Push notifications across both platforms',
            'Subscriptions via in-app purchase, alongside the web’s existing billing',
            'Universal Links and App Links so email links open the app when installed',
          ],
        },
        {
          title: 'Personalisation & admin',
          items: [
            'Three themes and three text sizes, matching the web product',
            'Nickname and profile settings',
            'Granular notification controls',
            'Admin dashboard for the client',
          ],
        },
      ],
      challenges: [
        {
          title: 'Streaming AI replies on a platform that buffers them',
          body: 'React Native’s fetch buffers a response rather than exposing a readable stream, which makes server-sent events arrive all at once. Using the WinterCG fetch shipped with Expo gave a real ReadableStream, so replies type out as they are generated, exactly as on the web.',
        },
        {
          title: 'Voice conversation without a Web Audio API',
          body: 'The web detects when someone has stopped speaking using RMS amplitude from an AnalyserNode. React Native has no equivalent, so the same behaviour was rebuilt on the microphone’s dBFS metering — converting the web’s thresholds rather than re-inventing them, then calibrating to the room’s noise floor at the start of every call so it works in a quiet bedroom and a noisy café alike.',
        },
        {
          title: 'A platform-specific audio strategy',
          body: 'Speech is synthesised sentence by sentence to keep latency low. On Android each player instance holds a hardware media decoder from a small pool, and creating one per sentence exhausted it — after which the app’s audio was dead until the process was killed. On iOS the opposite was true: reusing one player introduced stuttering, because swapping its source is asynchronous there. The fix was to let each platform do what suits it, and to say so plainly in the code.',
        },
        {
          title: 'Encrypted sessions on a store with a size limit',
          body: 'The iOS keychain caps individual values well below the size of a session token. Sessions are encrypted with AES-256 whose key lives in the secure store and whose ciphertext lives in ordinary storage — a fresh key per write, so the same key is never reused.',
        },
        {
          title: 'One subscription, two payment systems',
          body: 'Neither app store permits Stripe for a subscription used inside an app, but the web product runs on Stripe and its existing subscribers had to keep working. Both now write to the same record and the backend grants access from that alone — so a subscription bought on the website unlocks the app, and one bought in the app unlocks the website, with neither system aware of the other.',
        },
        {
          title: 'Email links that open the app, not the browser',
          body: 'Verification and password-reset emails point at the website. Claiming those URLs through Universal Links and App Links means they open the app when it is installed, and the site when it is not — without changing a single email template.',
        },
      ],
      stack: [
        {
          title: 'App',
          items: [
            'React Native 0.86',
            'Expo SDK 57',
            'TypeScript',
            'Expo Router (file-based, typed)',
            'Zustand',
            'Reanimated',
          ],
        },
        {
          title: 'Backend',
          items: [
            'Supabase Postgres (existing, extended)',
            'Supabase Auth',
            'Row Level Security',
            'Edge Functions (Deno)',
          ],
        },
        {
          title: 'AI & voice',
          items: ['Claude API (conversation)', 'ElevenLabs (speech synthesis)', 'ElevenLabs (transcription)'],
        },
        {
          title: 'Payments & push',
          items: [
            'RevenueCat',
            'StoreKit',
            'Google Play Billing',
            'Stripe (existing web billing)',
            'Firebase Cloud Messaging',
            'APNs',
          ],
        },
        {
          title: 'Tooling',
          items: ['EAS Build', 'Gradle', 'Xcode toolchain'],
        },
      ],
      scale: [
        { value: '2', label: 'Platforms, natively' },
        { value: '0', label: 'Webviews' },
        { value: '1', label: 'Backend shared with the web app' },
        { value: '2', label: 'Billing systems, one entitlement' },
        { value: '6', label: 'External services integrated' },
        { value: '3', label: 'Themes and text sizes' },
      ],
      galleryLayout: 'phone',
      gallery: [
        {
          src: '/screens/sage/cover.jpg',
          caption: 'Three of Sage’s screens: the conversation, the weekly reflection, and the theme picker.',
          width: 1600,
          height: 900,
          wide: true,
        },
        phone('/screens/sage/chat.jpg', 'Replies stream in as they are generated, with the week’s insight pinned above the conversation.'),
        phone('/screens/sage/insights.jpg', 'Weekly reflections, with an archive and a share action.'),
        phone('/screens/sage/daily-wisdom.jpg', 'Daily wisdom arrives as a push notification and stays in a browsable list.'),
        phone('/screens/sage/journey-event.jpg', 'Log what is coming up and choose when Sage checks in — before and after.'),
        phone('/screens/sage/themes.jpg', 'Three themes and three text sizes, matching the web product exactly.'),
        phone('/screens/sage/notif-settings.jpg', 'Granular push controls, alongside the client’s admin dashboard entry point.'),
      ],
    },
  },
  {
    slug: 'amor',
    title: 'AMOR',
    description:
      'A React Native app where you can text or actually call an AI companion — real-time voice conversation with automatic speech detection, seven distinct personalities, and a Stripe-powered wallet that bills per second of talk time.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'OpenAI'],
    image: '/screens/amor/cover.jpg',
    category: 'mobile',
    caseStudy: {
      tagline: 'Talk to an AI companion that actually listens — tap once and have a hands-free conversation, no push-to-talk.',
      seoTitle: 'AMOR — AI Voice Companion App',
      seoDescription:
        'A React Native, Supabase and OpenAI companion app with hands-free voice calls, custom voice activity detection, seven personalities and per-second Stripe billing.',
      hero: '/screens/amor/cover.jpg',
      heroWidth: 1600,
      heroHeight: 900,
      meta: [
        { label: 'Platform', value: 'iOS + Android (React Native, Expo)' },
        { label: 'Role', value: 'Full-stack mobile developer, solo' },
        { label: 'Type', value: 'Client project, delivered in milestones' },
        { label: 'Timeline', value: 'Apr – Jul 2026 (~3.5 months)' },
        { label: 'Status', value: 'Feature-complete · prepared for store submission' },
      ],
      overview: [
        'AMOR is a mobile AI companion app for iOS and Android. The idea is simple: instead of typing at a chatbot, you can call it — tap once and have a natural, hands-free conversation, the way you would talk to a friend on the phone.',
        'I built the product end to end: the React Native front end, the Supabase backend and database schema, the server-side voice pipeline, the authentication and guest system, and the Stripe payment and wallet layer.',
        'The hard part of a voice app is not the AI — it is making the conversation feel natural. Most voice apps make you hold a button while you speak. AMOR does not. A custom Voice Activity Detection system continuously reads the microphone level and works out on its own when you have started speaking and when you have finished. It waits out short pauses, rejects background noise, and ends the recording precisely when you stop, so the loop is completely hands-free: you speak, it detects silence, it thinks, it replies, it listens again.',
        'Users can try the app instantly as a guest with small daily limits, then create an account — at which point all their guest conversations and call history are migrated into the new account by a single database function, so nothing is lost. Registered users get a wallet: chat messages cost a cent each, voice calls bill at $1.00/hour charged per second actually used, topped up with real Stripe payments.',
      ],
      features: [
        {
          title: 'Conversation',
          items: [
            'Text chat and hands-free voice calling with the same AI companion',
            'Seamless switching between chat mode and call mode mid-conversation',
            'A guided "first call" onboarding script that introduces the companion and learns the user’s name',
            'Full call history with replayable transcripts',
          ],
        },
        {
          title: 'Voice engine',
          items: [
            'Custom Voice Activity Detection — no push-to-talk; speech start and end are detected from live audio metering',
            'Tunable dB threshold, silence duration and minimum-speech guards',
            'Server-side pipeline: Whisper speech-to-text, GPT-4o-mini, OpenAI TTS',
            'Audio playback with a per-companion voice',
          ],
        },
        {
          title: 'AI personalities',
          items: [
            'Seven distinct companions — Luna, Aria, Alex, Marcus, Sienna, Theo and Iris',
            'Each with its own system prompt, personality profile, TTS voice and avatar',
            'An accent colour per companion that re-themes the UI',
            'Per-companion memory: each builds its own long-term context about the user',
          ],
        },
        {
          title: 'Accounts & data',
          items: [
            'Guest mode with device-based sessions — usable in seconds, no signup wall',
            'Email and password auth via Supabase, with real-time password-strength validation',
            'Forgot-password and reset flows over an amor:// deep link',
            'Automatic guest to registered-user data migration, and Row Level Security on every table',
          ],
        },
        {
          title: 'Payments',
          items: [
            'Stripe wallet with $4.99 / $9.99 / $19.99 top-up packages',
            'Per-second billing for voice calls, per-message billing for chat',
            'Server-verified, idempotent crediting — the Stripe secret key never leaves the backend',
            'Pricing driven from a pricing_config table, so rates change without an app update',
          ],
        },
        {
          title: 'Polish',
          items: [
            'Splash, onboarding carousel, auth gate and main app flow',
            'Three-tab layout (Chat · Calls · Account) with badges and active states',
            'Offline-tolerant local persistence via AsyncStorage',
            'Branded transactional emails, plus Privacy Policy, Terms and Help screens',
          ],
        },
      ],
      challenges: [
        {
          title: 'Making voice feel like a real call, not a walkie-talkie',
          body: 'Fixed-duration recording either cut people off mid-sentence or left awkward dead air. The VAD service samples the microphone’s metering level every 100 ms, requires roughly half a second of sustained speech before it counts as "the user is talking", then ends the turn after 1.5 s of silence. The result is a fully hands-free conversation loop with thresholds that can be tuned for noisy environments.',
        },
        {
          title: 'Running a paid AI pipeline from an app that cannot hold secrets',
          body: 'Every AI and payment call moved into Supabase Edge Functions. The client sends audio and gets audio back; the OpenAI and Stripe keys exist only as server secrets. This also made pricing changes and model swaps possible without shipping a new app build.',
        },
        {
          title: 'Letting people try the app without losing their history',
          body: 'Guests get a device-scoped session and small daily limits. The moment they sign up, a single migrate_guest_to_user() database function re-parents every conversation, message and call record to the new user ID — designed to be safe to run more than once.',
        },
        {
          title: 'Billing accurately for something measured in seconds',
          body: 'Wallet balance and every deduction live in Postgres behind SECURITY DEFINER RPCs, so the client can never write its own balance. Calls bill per second at an hourly rate read from a config table, and top-ups are credited only after the PaymentIntent is re-fetched from Stripe and verified for status, amount and owner — keyed by payment ID, so replays are harmless.',
        },
      ],
      stack: [
        {
          title: 'Mobile',
          items: ['React Native 0.81', 'React 19', 'Expo SDK 54 (New Architecture)', 'TypeScript', 'React Navigation', 'Reanimated'],
        },
        {
          title: 'Native modules',
          items: ['Expo AV (recording + playback)', 'Expo Speech', 'Expo Blur', 'Expo Linear Gradient', 'Expo Linking', 'AsyncStorage'],
        },
        {
          title: 'Backend',
          items: ['Supabase PostgreSQL', 'Supabase Auth', 'Row Level Security', 'Edge Functions (Deno)', 'SECURITY DEFINER RPCs'],
        },
        {
          title: 'AI',
          items: ['OpenAI Whisper (speech to text)', 'GPT-4o-mini (conversation)', 'OpenAI TTS (10 voices)'],
        },
        {
          title: 'Payments & delivery',
          items: ['Stripe PaymentIntents', '@stripe/stripe-react-native', 'Google Pay', 'EAS Build', 'Expo Dev Client'],
        },
      ],
      scale: [
        { value: '7', label: 'AI companion personalities' },
        { value: '20+', label: 'Tables under RLS' },
        { value: '2', label: 'Edge functions' },
        { value: '~40', label: 'TypeScript source files' },
        { value: '8', label: 'Milestones delivered' },
        { value: '100 ms', label: 'VAD sampling interval' },
      ],
      galleryLayout: 'phone',
      gallery: [
        {
          src: '/screens/amor/cover.jpg',
          caption: 'Companion selection, a live voice call, and the text conversation — the same companion across both modes.',
          width: 1600,
          height: 900,
          wide: true,
        },
        phone('/screens/amor/companions.jpg', 'Seven AI personalities, each with its own voice, character and accent colour.'),
        phone('/screens/amor/call-luna.jpg', 'A hands-free call in progress. "Listening…" means the VAD is waiting for you to finish speaking — no button to hold.'),
        phone('/screens/amor/chat.jpg', 'Text conversation, with remaining messages and call time shown live in the header.'),
        phone('/screens/amor/call-aria.jpg', 'Each companion re-themes the call screen with its own avatar and accent colour.'),
        phone('/screens/amor/auth.jpg', 'Guest mode removes the signup wall — and guest history is migrated intact if the user later registers.'),
        phone('/screens/amor/onboarding.jpg', 'The onboarding carousel introduces the companion before any account is required.'),
        phone('/screens/amor/onboarding-voice.jpg', 'Voice and chat are presented as one product, not two modes.'),
        phone('/screens/amor/account.jpg', 'Account settings, upgrade path and the legal screens required for store review.'),
      ],
    },
  },
  {
    slug: 'growsmart',
    title: 'GrowSmart',
    description:
      'A cross-platform mobile learning platform where students enroll in free or paid courses, complete lessons and auto-graded quizzes, track progress, and earn verifiable PDF certificates — while admins run the whole platform from a built-in panel.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Stripe'],
    image: '/screens/growsmart/cover.jpg',
    category: 'mobile',
    caseStudy: {
      tagline: 'A training authority’s courses, moved off scattered links into a real, trackable product — with certificates people can verify.',
      seoTitle: 'GrowSmart — Mobile Learning & Certification App',
      seoDescription:
        'A React Native, Expo and Supabase LMS with Stripe payments, auto-graded quizzes, PDF certificates and a built-in admin panel, enforced by 48 RLS policies.',
      hero: '/screens/growsmart/cover.jpg',
      heroWidth: 1600,
      heroHeight: 900,
      meta: [
        { label: 'Client', value: 'Education / training authority' },
        { label: 'Role', value: 'Full-stack mobile developer, solo' },
        { label: 'Platform', value: 'iOS + Android + web, one codebase' },
        { label: 'Scope', value: 'Student app + in-app admin panel' },
        { label: 'Status', value: 'v1.0.2 · production ready, store packs prepared' },
      ],
      overview: [
        'Small training institutes and course authorities usually have no learning platform of their own — they run on WhatsApp groups, shared drives and video links. The result is no progress tracking, no assessment, no proof of completion, and no secure access control on paid content.',
        'GrowSmart replaces all of that. Built with React Native and Expo for iOS, Android and web from a single TypeScript codebase, it gives students a structured path: browse published courses, enroll instantly in free ones or pay through Stripe Checkout for premium tracks, work through text and video lessons, and validate their understanding with auto-graded quizzes.',
        'Progress is tracked lesson by lesson, and once a course is completed the app issues a certificate with a unique verification ID that learners can preview, export as a PDF, and share straight from their phone.',
        'Behind the app sits Supabase and PostgreSQL, where access control is enforced at the database layer through 48 row-level security policies — paid lesson content simply is not readable by users who have not been enrolled through a verified payment. The same app ships a full admin panel, so the client runs the platform day to day without developer involvement.',
      ],
      features: [
        {
          title: 'Learning',
          items: [
            'Browse published courses with search and free/paid badges',
            'One-tap enrollment for free courses; Stripe Checkout for paid ones',
            'Text and video lessons with attached downloadable files',
            'Lesson-by-lesson progress tracking with a completion percentage',
          ],
        },
        {
          title: 'Assessment & certificates',
          items: [
            'Multiple-choice quizzes, auto-scored with a configurable passing score',
            'Per-question answer storage, attempt history and best score',
            'Certificates auto-issued on completion with a unique verification ID',
            'In-app preview, PDF export and native share sheet',
          ],
        },
        {
          title: 'Student experience',
          items: [
            'Dashboard with live stats — enrolled courses, lessons completed, quizzes passed, certificates earned',
            'Continue-learning shortcuts',
            'Profile with account details, avatar and theme toggle',
            'Full light/dark theming, system-aware and persisted',
          ],
        },
        {
          title: 'Admin panel (in-app)',
          items: [
            'Create, edit, publish and price courses; upload thumbnails from the gallery',
            'Add text or video lessons, control order, attach documents via document picker',
            'Quiz builder — questions, options, correct answers and passing score',
            'User management and full Stripe payment tracking',
          ],
        },
        {
          title: 'Auth & access',
          items: [
            'Email/password signup and login with email verification',
            'Forgot-password and reset over a growsmart:// deep link',
            'Role-based routing — one app, separate student and admin route groups',
            'Admin-only screens backed by admin-only database policies',
          ],
        },
        {
          title: 'Data model',
          items: [
            '11 tables including courses, lessons, quizzes, attempts, progress, certificates and payments',
            '48 row-level security policies',
            'Indexed foreign keys, updated_at triggers and cascading deletes',
            'An auth trigger that auto-creates a profile on signup',
          ],
        },
      ],
      challenges: [
        {
          title: 'Paid content that cannot be bypassed',
          body: 'Client-side "isEnrolled" checks are trivial to fake. Enrollment and payment verification happen server-side through an edge function and a Stripe webhook, and content access is enforced in RLS policies — so even a modified client cannot read paid lessons.',
        },
        {
          title: 'PDF certificates without a rendering backend',
          body: 'The certificate is generated from a styled HTML template and converted to a PDF on-device with expo-print — no server rendering cost, and it shares straight through the native share sheet.',
        },
        {
          title: 'Perceived performance',
          body: 'Every screen was running its own query, which made navigation feel slow. A centralised DataCacheContext bulk-fetches courses, lessons, enrollments, quizzes, attempts, certificates and payments at boot, then selectively refreshes after mutations — so screens open instantly and pull-to-refresh syncs the cache.',
        },
        {
          title: 'One codebase, two products',
          body: 'The student and admin experiences are built from separate route groups over a shared design system, with protected route guards keyed to the user’s role — so there is no second app to maintain.',
        },
        {
          title: 'Deep-link auth flows',
          body: 'Password reset and email verification links are handled inside the app through a custom growsmart:// scheme plus an Expo Linking callback route.',
        },
      ],
      stack: [
        {
          title: 'Frontend',
          items: ['React Native 0.81', 'React 19', 'Expo SDK 54', 'Expo Router 6 (typed routes)', 'TypeScript 5.9 (strict)', 'react-native-web'],
        },
        {
          title: 'UI & motion',
          items: ['React Navigation 7', 'Reanimated 4', 'Gesture Handler', 'Lucide React Native', 'Light/dark theming with shadow tokens'],
        },
        {
          title: 'Backend & data',
          items: ['Supabase PostgreSQL', 'Supabase Auth', 'Supabase Storage', '48 RLS policies', 'Deno Edge Functions', '7 versioned migrations'],
        },
        {
          title: 'Payments',
          items: ['Stripe Checkout', 'Stripe Webhooks', 'checkout.session.completed / expired handling'],
        },
        {
          title: 'Native modules',
          items: ['expo-print (PDF)', 'expo-sharing', 'expo-image-picker', 'expo-document-picker', 'react-native-webview', 'expo-web-browser', 'expo-linking'],
        },
        {
          title: 'Delivery',
          items: ['EAS Build', 'Supabase CLI migrations', 'ESLint + Prettier', 'Strict typecheck'],
        },
      ],
      scale: [
        { value: '11.5k+', label: 'Lines of TypeScript & SQL' },
        { value: '27', label: 'App screens' },
        { value: '11', label: 'Database tables' },
        { value: '48', label: 'Row-level security policies' },
        { value: '2', label: 'Edge functions' },
        { value: '3', label: 'Platforms from one codebase' },
      ],
      galleryLayout: 'phone',
      gallery: [
        {
          src: '/screens/growsmart/cover.jpg',
          caption: 'The course catalog, a completed course with its certificate, and the quiz engine.',
          width: 1600,
          height: 900,
          wide: true,
        },
        phone('/screens/growsmart/courses.jpg', 'The catalog, with free and paid badges and enrollment state shown per course.'),
        phone('/screens/growsmart/course-detail.jpg', 'A completed course: progress bar, earned certificate with its verification ID, quizzes and lessons.'),
        {
          src: '/screens/growsmart/certificate.jpg',
          caption: 'The generated certificate — rendered from an HTML template and exported to PDF on-device, with a unique ID and verification QR code.',
          width: 560,
          height: 541,
        },
        phone('/screens/growsmart/lesson-video.jpg', 'A video lesson played through a WebView, with mark-as-complete progress tracking.'),
        phone('/screens/growsmart/lesson-text.jpg', 'A text lesson with an attached document, viewable or downloadable in place.'),
        phone('/screens/growsmart/quiz-intro.jpg', 'Each quiz declares its question count, passing score and the learner’s attempts so far.'),
        phone('/screens/growsmart/quiz-question.jpg', 'Auto-graded multiple choice, with every answer stored per question.'),
        phone('/screens/growsmart/course-free.jpg', 'Free courses enroll in a single tap — no checkout step.'),
      ],
    },
  },
  {
    slug: 'athletica-roll-call',
    title: 'Athletica Roll Call',
    description:
      'A full-stack gym management platform for an outdoor fitness business in Adelaide. Members book sessions and follow meal plans, instructors run roll call, admins manage memberships and Stripe subscriptions — and the public marketing site runs from the same codebase and database.',
    tech: ['React 19', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    image: '/screens/athletica/cover.jpg',
    category: 'web',
    caseStudy: {
      tagline: 'One platform running an outdoor fitness business end to end — bookings, coaching, nutrition, a shop, Stripe billing, and the marketing site.',
      seoTitle: 'Athletica Roll Call — Full-Stack Gym Platform',
      seoDescription:
        'A React, Supabase and Stripe platform running an Adelaide fitness business — bookings, roll call, nutrition, e-commerce and its public marketing site.',
      hero: '/screens/athletica/cover.jpg',
      heroWidth: 1600,
      heroHeight: 707,
      meta: [
        { label: 'Client', value: 'Athletica — outdoor group fitness, Adelaide' },
        { label: 'Role', value: 'Sole developer' },
        { label: 'Scope', value: 'Member, instructor & admin app + marketing site' },
        { label: 'Timeline', value: 'Jan 2026 – ongoing' },
        { label: 'Status', value: 'Active development' },
      ],
      overview: [
        'Athletica is an outdoor group-fitness company running bootcamp-style sessions across multiple locations in Adelaide. They were coordinating members, attendance, rosters and payments across spreadsheets and messaging apps.',
        'I built a single platform to replace all of it. Members sign in to book sessions against their membership entitlements, follow assigned meal plans, log measurements and photos through a structured six-week challenge, and buy merchandise. Instructors run live roll call, build sessions from an exercise library, and track attendance. Admins manage memberships and pricing, staff and rosters, shop inventory and orders, and a tiered permission system that controls who can see what.',
        'Payments run on Stripe — recurring memberships, prepaid terms, session packs and shop orders — with a webhook-driven model where entitlements are only ever granted after Stripe confirms the money settled.',
        'The public marketing site is served from the same application, pulling coaches, locations, session times and live pricing straight from the admin database, so it cannot drift out of date.',
      ],
      features: [
        {
          title: 'Session booking & roll call',
          items: [
            'Members book against their membership entitlement',
            'Instructors run live roll call and mark attendance',
            'Capacity, session times and locations are all admin-managed',
            'Monthly calendar view with book-all and unbook-all actions',
          ],
        },
        {
          title: 'Membership & billing',
          items: [
            'Three membership tiers across monthly, 6-month and 12-month terms',
            'Weekly, fortnightly and 4-weekly billing options',
            'Session packs and casual sessions alongside subscriptions',
            'Self-service membership pausing with a minimum duration',
          ],
        },
        {
          title: 'Six Week Challenge',
          items: [
            'A structured transformation program with measurements and progress photos',
            'Check-ins and milestones',
            'Assigned meal plans per participant',
            'A coach-facing view of each participant',
          ],
        },
        {
          title: 'Nutrition system',
          items: [
            'Ingredient database with per-unit macro tracking (per 100 g, per biscuit, per egg)',
            'Recipe builder that calculates macros automatically',
            'Meal plan assembly and generated shopping lists',
            'Bulk CSV import for ingredients and recipes',
          ],
        },
        {
          title: 'Workouts, shop & community',
          items: [
            'Exercise library with media, used to compose sessions and assign them to programs',
            'Product catalogue, cart, discount codes and Stripe checkout',
            'Order management',
            'Groups, messaging, announcements, events and an activity-points system',
          ],
        },
        {
          title: 'Permissions & the public site',
          items: [
            'Six role levels from member through to critical admin',
            'Admin impersonation for support, plus two-factor authentication',
            'An animated, responsive marketing site — home, memberships, locations, about, FAQ, contact and legal',
            'Coaches, locations, session times and pricing pulled live from the database',
          ],
        },
      ],
      challenges: [
        {
          title: 'Payments where the browser has no authority',
          body: 'Nothing in the frontend can grant a membership or add session credits. The browser sends only a plan code, never an amount — prices are always looked up server-side, so a tampered request cannot buy a 20-pack for a dollar. Entitlements are written by a single Stripe webhook, only after Stripe confirms the payment settled. Every webhook event ID is recorded before any work happens, so Stripe’s at-least-once delivery cannot hand out the same session pack twice.',
        },
        {
          title: 'Security enforced in the database, not the UI',
          body: 'Access rules live in PostgreSQL Row Level Security policies, so they hold regardless of what the client sends. Anonymous visitors read purpose-built views that expose only public columns, keeping internal notes out of reach of the marketing site.',
        },
        {
          title: 'One codebase, two audiences',
          body: 'The marketing site and the application share a database but not a bundle — the public site is code-split, so someone reading the pricing page never downloads the admin application.',
        },
        {
          title: 'Accessibility built into the motion work',
          body: 'Every animation on the public site collapses to its finished state when a visitor has asked for reduced motion, including background video, which falls back to a still.',
        },
      ],
      stack: [
        { title: 'Frontend', items: ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS', 'Motion (Framer Motion)'] },
        { title: 'Backend & data', items: ['Supabase PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'Row Level Security', 'Vercel Serverless Functions'] },
        { title: 'Payments', items: ['Stripe Checkout', 'Customer Portal', 'Subscriptions', 'Webhooks'] },
        { title: 'Deployment', items: ['Vercel'] },
      ],
      scale: [
        { value: '~44k', label: 'Lines of TypeScript / TSX' },
        { value: '119', label: 'React components' },
        { value: '45', label: 'Database tables & views' },
        { value: '17', label: 'SQL migrations' },
        { value: '6', label: 'Serverless API endpoints' },
        { value: '6', label: 'Permission role levels' },
      ],
      galleryLayout: 'desktop',
      gallery: [
        {
          src: '/screens/athletica/cover.jpg',
          caption: 'The public marketing site, served from the same application as the member app.',
          width: 1600,
          height: 707,
          wide: true,
        },
        {
          src: '/screens/athletica/marketing-pricing.jpg',
          caption: 'Membership pricing on the public site — tiers and billing frequency come live from the admin database, so the page cannot go stale.',
          width: 1280,
          height: 627,
        },
        {
          src: '/screens/athletica/admin-dashboard.jpg',
          caption: 'The admin dashboard: member movement, per-location attendance averages and recent Stripe sales.',
          width: 1280,
          height: 718,
        },
        {
          src: '/screens/athletica/member-dashboard.jpg',
          caption: 'A member’s overview — sessions completed against entitlement, no-shows, streak and session bank.',
          width: 1280,
          height: 587,
        },
        {
          src: '/screens/athletica/booking.jpg',
          caption: 'Session booking by month, with capacity shown per session and booking limited to the member’s entitlement.',
          width: 1280,
          height: 594,
        },
        {
          src: '/screens/athletica/plans.jpg',
          caption: 'Plan selection across weekly, fortnightly and 4-weekly billing, with self-service membership pausing.',
          width: 1234,
          height: 846,
        },
        {
          src: '/screens/athletica/buy-sessions.jpg',
          caption: 'Session packs and casual sessions. The browser sends only a plan code — the price is always looked up server-side.',
          width: 1280,
          height: 707,
        },
        {
          src: '/screens/athletica/member-hub.jpg',
          caption: 'The member hub, linking journal, community, nutrition, shop and support.',
          width: 1280,
          height: 387,
        },
      ],
    },
  },
  {
    slug: 'heitmann-baleares',
    title: 'Heitmann Baleares',
    description:
      'A trilingual marketing site for a German construction company on Ibiza. Restructured mid-project from a single page into 30 statically generated pages across three languages, with localised URLs, full hreflang coverage and consent-gated analytics.',
    tech: ['Next.js 16', 'React 19', 'Framer Motion', 'i18n', 'Netlify'],
    image: '/screens/baleares/cover.jpg',
    category: 'web',
    caseStudy: {
      tagline: 'German precision on Ibiza — a motion-led site rebuilt mid-project from one page into thirty, in three languages.',
      seoTitle: 'Heitmann Baleares — Trilingual Next.js Site',
      seoDescription:
        'A trilingual Next.js marketing site for a German construction company on Ibiza — 30 static pages, full hreflang coverage and GDPR-compliant analytics.',
      hero: '/screens/baleares/cover.jpg',
      heroWidth: 1600,
      heroHeight: 710,
      meta: [
        { label: 'Client', value: 'Heitmann Baleares S.L., Ibiza' },
        { label: 'Role', value: 'Full design & development, solo' },
        { label: 'Scope', value: '30 static pages · 3 languages' },
        { label: 'Timeline', value: '2026 · ~2 months' },
        { label: 'Status', value: 'Live' },
      ],
      links: [{ label: 'heitmann-baleares.es', href: 'https://heitmann-baleares.es' }],
      overview: [
        'Heitmann Baleares builds and renovates high-end properties on Ibiza, bringing German engineering standards to the Balearic Islands. They needed a website that communicated that positioning to three separate audiences — German property owners, Spanish locals, and international clients — while meeting the strict privacy and legal requirements that apply to a German-owned company operating in the EU.',
        'The site was designed and built from scratch: an editorial, motion-led interface in a warm ivory and orange palette, with an arch motif running through the visual language as a nod to Mediterranean architecture.',
        'Midway through the project the structure was reworked from a single-page site into a fully routed multilingual architecture, so each section could rank independently in search — 30 statically generated pages across three languages, with localised URLs and complete hreflang coverage.',
        'There is no CMS and no UI framework: a hand-written CSS design system, with all content managed in a single typed translation layer.',
      ],
      features: [
        {
          title: 'Multilingual architecture',
          items: [
            'German, English and Spanish, each on their own URLs',
            'Localised slugs per language — /de/leistungen, /en/services, /es/servicios',
            'Automatic language detection from browser settings on first visit, with the visitor’s own choice always taking precedence',
            'A language switcher that moves to the same page in the target language',
          ],
        },
        {
          title: 'SEO',
          items: [
            '30 statically generated pages, each with a unique title, meta description and a single H1',
            'Complete hreflang coverage including x-default',
            'Canonical URLs, generated sitemap.xml and robots.txt',
            '301 redirects preserving previously indexed URLs',
          ],
        },
        {
          title: 'Privacy & compliance',
          items: [
            'Cookiebot consent banner in auto-blocking mode — no tracking script loads before consent',
            'Google Tag Manager gated behind that consent',
            'Trilingual legal pages: Impressum, Datenschutzerklärung and cookie policy',
            'An auto-updating cookie declaration',
          ],
        },
        {
          title: 'Contact & conversion',
          items: [
            'Multi-step contact form with service-selection chips',
            'Wired to Netlify Forms with email notifications',
            'Language-neutral submission values, so the backend receives consistent data regardless of the visitor’s language',
          ],
        },
        {
          title: 'Design & motion',
          items: [
            'Custom cursor, animated preloader and page transitions',
            'Scroll-driven reveals and an auto-scrolling tilted image collage in the hero',
            'An arch motif carried across hero, imagery and the loading screen',
            'Fully responsive, with prefers-reduced-motion respected throughout',
          ],
        },
      ],
      challenges: [
        {
          title: 'Restructuring a one-pager into a routed multilingual site',
          body: 'The site launched as a single page with anchor navigation. When SEO review showed that anchors cannot be indexed as separate pages, the architecture was rebuilt around a route registry driving localised slugs, static generation, hreflang metadata and redirects — without changing the visual design. Sections were redistributed so no content appears on more than one page, avoiding self-competing duplicate content.',
        },
        {
          title: 'Consent-gated analytics done properly',
          body: 'Rather than dropping in the tracking snippet as supplied, Cookiebot’s auto-blocking was loaded ahead of all application code so it can intercept trackers before they fire. The noscript half of the GTM snippet was deliberately omitted: it runs only when JavaScript is disabled, where consent cannot be collected — including it would have loaded tracking without permission.',
        },
        {
          title: 'Cutting first-load weight by 96%',
          body: 'First-load video weight went from 11 MB to 0.44 MB by re-encoding the hero clip (6.7 MB to 0.44 MB) and the showreel (4.5 MB to 1.27 MB) and correcting preload behaviour. The public directory dropped from 67 MB to 19 MB. The preloader moved from JavaScript-driven animation to CSS so it paints straight from the server HTML instead of waiting for hydration — removing a multi-second blank screen on first visits.',
        },
        {
          title: 'Edge-case URL handling',
          body: 'Repeated and trailing slashes (/de///qualitaet) resolve to canonical URLs, with handling at both the proxy layer and in the browser — necessary because the CDN normalises paths before application code ever sees them.',
        },
      ],
      stack: [
        { title: 'Framework', items: ['Next.js 16 (App Router)', 'React 19', 'Static generation', 'TypeScript translation layer'] },
        { title: 'Motion & UX', items: ['Framer Motion', 'Lenis smooth scrolling', 'Hand-written CSS design system', 'prefers-reduced-motion'] },
        { title: 'Hosting & forms', items: ['Netlify', 'Netlify edge proxy', 'Netlify Forms'] },
        { title: 'Compliance & analytics', items: ['Cookiebot (GDPR / TDDDG)', 'Google Tag Manager, consent-gated'] },
      ],
      scale: [
        { value: '30', label: 'Static pages, up from 4' },
        { value: '3', label: 'Languages with full hreflang' },
        { value: '96%', label: 'First-load media weight cut' },
        { value: '0.44 MB', label: 'Hero video, down from 6.7 MB' },
        { value: '19 MB', label: 'public/, down from 67 MB' },
        { value: '0', label: 'Trackers before consent' },
      ],
      galleryLayout: 'desktop',
      gallery: [
        {
          src: '/screens/baleares/cover.jpg',
          caption: 'The hero: an editorial headline against an auto-scrolling tilted collage of the company’s own project photography.',
          width: 1600,
          height: 710,
          wide: true,
        },
        {
          src: '/screens/baleares/services.jpg',
          caption: 'The service cards — renovation, pools, garden design and site supervision.',
          width: 1280,
          height: 569,
        },
        {
          src: '/screens/baleares/gallery.jpg',
          caption: 'A craftsmanship gallery showing sites in Ibiza from renovation through to finished surface.',
          width: 1280,
          height: 569,
        },
        {
          src: '/screens/baleares/contact-form.jpg',
          caption: 'The enquiry form: service-selection chips submit language-neutral values, so the backend gets consistent data in any language.',
          width: 805,
          height: 838,
        },
        {
          src: '/screens/baleares/group.jpg',
          caption: 'The Heitmann Group section, linking the Ibiza company to its sister businesses in Hamburg and the Middle East.',
          width: 1280,
          height: 474,
        },
        {
          src: '/screens/baleares/preloader.jpg',
          caption: 'The preloader, driven by CSS so it paints from the server HTML rather than waiting for hydration — the arch motif doubles as the progress bar.',
          width: 1280,
          height: 547,
        },
      ],
    },
  },
  {
    slug: 'stronghold-asset-management',
    title: 'Stronghold Asset Management',
    description:
      'A premium nine-page marketing site for a Hamburg real estate asset manager, built on a token-based design system that let the client compare four complete colour palettes live before choosing one.',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '/screens/stronghold/cover.jpg',
    category: 'web',
    caseStudy: {
      tagline: 'A corporate site for a German real estate asset manager — themed by tokens the client could re-colour live.',
      seoTitle: 'Stronghold Asset Management — React Corporate Site',
      seoDescription:
        'A nine-page React and TypeScript marketing site for a Hamburg real estate asset manager, built on a token-based design system with live palette switching.',
      hero: '/screens/stronghold/cover.jpg',
      heroWidth: 1600,
      heroHeight: 767,
      meta: [
        { label: 'Client', value: 'Stronghold Asset Management GmbH, Hamburg' },
        { label: 'Sector', value: 'Real estate · Financial services' },
        { label: 'Role', value: 'End-to-end build & client revisions' },
        { label: 'Scope', value: '9 pages + dynamic service detail pages' },
        { label: 'Timeline', value: '~2 months, iterative' },
      ],
      overview: [
        'Stronghold Asset Management GmbH is a Hamburg-based real estate asset manager overseeing €150M in assets and more than 5,000 units across 59 German locations, serving investors in Germany, Singapore, London and Luxembourg.',
        "The site covers the company's three core business lines — portfolio management, asset management, and property management and renovation — across nine pages, and includes a full case-study gallery for their in-house renovation service.",
        'My role was the end-to-end build: architecture, every page and component, copywriting adjustments, image sourcing and processing, and an ongoing feedback loop directly with the client.',
        'It was an iterative, client-driven project. The client reviewed live changes and sent rounds of written feedback — copy edits, photo replacements, section reordering, layout tweaks — which were implemented incrementally over roughly two months and confirmed back after each round.',
      ],
      features: [
        {
          title: 'Nine pages',
          items: [
            'Home, About Us, Services, Projects',
            'Why Us, Packages, Contact, Imprint',
            'Dynamic per-service detail pages',
          ],
        },
        {
          title: 'Renovation case studies',
          items: [
            'Room-by-room Before/After gallery with a drag-to-compare slider',
            'Full-screen lightbox viewer',
            'Categories for kitchen, living room, bathroom, and building & facade',
            'A separate "Completed Projects" section presenting renovations as narrative case studies — lead photo plus supporting grid',
          ],
        },
        {
          title: 'Motion & data display',
          items: [
            'An animated orbiting SVG diagram illustrating the three core business areas',
            'Scroll-triggered counters and animated statistics',
            'A milestone timeline with an SVG path that draws in on scroll',
            'A global-reach diagram connecting Hamburg, London, Luxembourg and Singapore',
          ],
        },
        {
          title: 'Conversion & content',
          items: [
            'Dynamic contact form',
            'Package comparison across Basic, Standard and Premium tiers',
            'A four-step "Path to Partnership" process section',
            'Landmark project grid sourced from the client’s own photography',
          ],
        },
      ],
      challenges: [
        {
          title: 'A token-based theme the client could drive',
          body: 'Rather than hardcoding hex values in components, every brand colour became a CSS custom property storing RGB channels (--c-navy-900: 11 31 77). Tailwind reads those tokens, so a palette change is a single file edit rather than a find-and-replace across the codebase.',
        },
        {
          title: 'Four palettes, compared live',
          body: 'Client feedback was that the original palette used too many bright, light sections for a premium financial-services brand. Instead of arguing it in mockups, a temporary in-app switcher let them flip between four complete colour palettes on the real site. Once one was approved, the switcher and unused palettes were removed, leaving one clean token file as the single source of truth.',
        },
        {
          title: 'Layouts hardened against translation',
          body: 'The site had to survive machine-translated content, where German compound words are far longer than their English equivalents. Text sizing and wrapping were tuned so long words could not break fixed-width layouts.',
        },
        {
          title: 'A before/after gallery built from real site photos',
          body: "Renovation photography came straight from the client's projects, in mixed sizes and alignments. Each pair was cropped and aligned so the drag-to-compare slider lines up, then compressed to keep the gallery fast.",
        },
        {
          title: 'Working in the client’s review loop',
          body: 'Rounds of written feedback arrived over about two months. Keeping the component structure and theme tokens clean is what made copy edits, photo swaps and section reordering cheap to apply each round rather than compounding into rework.',
        },
      ],
      stack: [
        { title: 'Core', items: ['React 18', 'TypeScript', 'Vite'] },
        { title: 'Styling', items: ['Tailwind CSS 3', 'CSS custom properties', 'RGB-channel colour tokens'] },
        { title: 'Motion', items: ['Framer Motion', 'Scroll reveals', 'Animated counters', 'Orbiting SVG diagram', 'SVG path drawing'] },
        { title: 'Routing', items: ['React Router 7', 'Dynamic service routes'] },
        { title: 'Assets', items: ['Client project photography', 'Manual cropping & alignment', 'Compression pipeline'] },
      ],
      scale: [
        { value: '9', label: 'Pages built' },
        { value: '4', label: 'Palettes prototyped live' },
        { value: '3', label: 'Core business lines' },
        { value: '4', label: 'Before/after categories' },
        { value: '59', label: 'German locations mapped' },
        { value: '~2 mo', label: 'Iterative client build' },
      ],
      galleryLayout: 'desktop',
      gallery: [
        {
          src: '/screens/stronghold/cover.jpg',
          caption: 'The homepage hero, set against the Hamburg skyline — navy and gold, with the brand’s core promises surfaced immediately below the fold.',
          width: 1600,
          height: 767,
          wide: true,
        },
        {
          src: '/screens/stronghold/services-orbit.jpg',
          caption: 'An animated orbiting SVG diagram ties the three core business areas together on the homepage.',
          width: 1280,
          height: 588,
        },
        {
          src: '/screens/stronghold/before-after.jpg',
          caption: 'The renovation gallery: real before/after pairs, filtered by room, each opening full-screen.',
          width: 1280,
          height: 681,
        },
        {
          src: '/screens/stronghold/global-reach.jpg',
          caption: 'A global-reach diagram links the Hamburg HQ to London, Luxembourg and Singapore.',
          width: 1280,
          height: 592,
        },
        {
          src: '/screens/stronghold/why-us-stats.jpg',
          caption: 'Six operational numbers along an SVG path that draws in as the section scrolls into view.',
          width: 1280,
          height: 600,
        },
        {
          src: '/screens/stronghold/projects-grid.jpg',
          caption: 'Landmark projects across Germany, cropped from the client’s own property photography.',
          width: 1280,
          height: 663,
        },
        {
          src: '/screens/stronghold/about-company.jpg',
          caption: 'The About page pairs the company story with counters for founding year, locations and units under management.',
          width: 1280,
          height: 664,
        },
        {
          src: '/screens/stronghold/history-timeline.jpg',
          caption: 'A milestone timeline traces the firm from its 2014 founding to €150M across 59 locations.',
          width: 1280,
          height: 584,
        },
        {
          src: '/screens/stronghold/process-steps.jpg',
          caption: 'Four clear steps from first conversation to active management.',
          width: 1280,
          height: 654,
        },
      ],
    },
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);

export const caseStudyProjects = projects.filter((p) => p.caseStudy);
