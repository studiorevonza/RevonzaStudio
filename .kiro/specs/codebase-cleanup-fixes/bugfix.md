# Bugfix Requirements Document

## Introduction

This document captures the requirements for a set of bugs and code quality issues found in the Revonza Studio React + Vite + TypeScript project. The issues span the frontend (React components, routing, unused imports, debug logging) and the backend Express server (CORS conflicts, missing env validation, insecure data clearing). Left unaddressed, these issues cause full-page reloads instead of SPA navigation, production crashes when environment variables are absent, conflicting CORS headers, and unnecessary data loss for users. The fixes are grouped into two priority tiers.

---

## Bug Analysis

### Current Behavior (Defect)

**Priority 1 — Fix Now**

1.1 WHEN the app is built and deployed to Render THEN the system uses `VITE_BACKEND_URL=http://localhost:4000` (hardcoded in `.env`), causing all product API calls to target localhost and fail in production.

1.2 WHEN `Header.tsx` is compiled THEN the system imports `MessageCircle` from `lucide-react`, `LOGO_WHITE_URL`, and `LOGO_BLACK_URL` from constants — none of which are referenced anywhere in the component, adding unnecessary bundle weight.

1.3 WHEN a user clicks a Services or Company link in the Footer THEN the system performs a full browser page reload via `<a href="...">` instead of a React Router client-side navigation, breaking the SPA experience and resetting application state.

1.4 WHEN `ProjectDetailsPage.tsx` is running in production THEN the system emits `console.log('Zoom image clicked:', imageUrl)` on every image zoom interaction, leaking internal URLs to the browser console.

1.5 WHEN `main.tsx` executes the `clearSiteData` function THEN the system emits `console.log('Site data cleared successfully')` to the browser console in production.

1.6 WHEN `SEO.tsx` is compiled THEN the system imports `useEffect` from React, which is never called inside the component, adding a dead import.

**Priority 2 — Fix Soon**

1.7 WHEN the application is loaded THEN the system bundles all pages into a single chunk (`dist/assets/bundle.js`, ~1,159 KB / 306 KB gzip), exceeding the recommended 500 KB threshold and slowing initial page load.

1.8 WHEN `server.cjs` handles any HTTP request THEN the system applies CORS policy twice: once via the `cors()` middleware (lines 28–31) and again via manual `res.setHeader('Access-Control-Allow-Origin', '*')` in the security-headers middleware (lines 55–58), creating a conflict where the manual wildcard header overrides the specific-origin policy set by `cors()`.

1.9 WHEN `server.cjs` starts up and `RAZORPAY_KEY_ID` or `RAZORPAY_KEY_SECRET` environment variables are missing THEN the system instantiates `new Razorpay({...})` with `undefined` values, causing the server to crash at startup rather than failing gracefully.

1.10 WHEN a user reloads the page or closes the browser tab THEN the system fires `clearSiteData` via the `beforeunload` event listener, wiping all `localStorage`, `sessionStorage`, cookies, and cache storage — destroying any user session, cart, or preference data that may exist now or in the future.

---

### Expected Behavior (Correct)

**Priority 1 — Fix Now**

2.1 WHEN the app is built and deployed to Render THEN the system SHALL use an empty string or a relative URL for `VITE_BACKEND_URL` in `.env`, so that API calls resolve correctly in both local development (via Vite proxy or explicit override) and production.

2.2 WHEN `Header.tsx` is compiled THEN the system SHALL NOT import `MessageCircle`, `LOGO_WHITE_URL`, or `LOGO_BLACK_URL`, keeping the import list limited to symbols that are actually used.

2.3 WHEN a user clicks a Services or Company link in the Footer THEN the system SHALL use `<Link to="...">` from React Router for all internal navigation links, enabling client-side routing without a full page reload.

2.4 WHEN `ProjectDetailsPage.tsx` is running in production THEN the system SHALL NOT emit any `console.log` statements; the zoom handler SHALL set state silently.

2.5 WHEN `main.tsx` executes the `clearSiteData` function THEN the system SHALL NOT emit `console.log('Site data cleared successfully')` to the browser console.

2.6 WHEN `SEO.tsx` is compiled THEN the system SHALL NOT import `useEffect`, keeping the import to only `React` and the symbols that are used.

**Priority 2 — Fix Soon**

2.7 WHEN the application is loaded THEN the system SHALL use `React.lazy()` and `Suspense` to code-split page components, reducing the initial bundle to well under 500 KB and deferring page chunks until they are navigated to.

2.8 WHEN `server.cjs` handles any HTTP request THEN the system SHALL apply CORS policy exclusively through the `cors()` middleware; the manual `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers` headers in the security-headers middleware SHALL be removed.

2.9 WHEN `server.cjs` starts up THEN the system SHALL validate that `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are present before instantiating `Razorpay`; if either is missing, the server SHALL log a clear error and exit with a non-zero code rather than crashing with an obscure runtime error.

2.10 WHEN `main.tsx` initialises THEN the system SHALL NOT attach a `beforeunload` event listener that clears all site data; the aggressive data-clearing logic SHALL be removed to prevent accidental destruction of user session data.

---

### Unchanged Behavior (Regression Prevention)

3.1 WHEN a user navigates to any internal route via the Header navigation THEN the system SHALL CONTINUE TO use React Router `NavLink` for client-side navigation without a page reload.

3.2 WHEN the Header component renders THEN the system SHALL CONTINUE TO display the logo, navigation items, theme toggle, and "Let's Talk" CTA exactly as before.

3.3 WHEN the Footer renders THEN the system SHALL CONTINUE TO display external social links (`<a href>` with `target="_blank"`) and `mailto:` links using plain anchor tags, as these are external and do not benefit from React Router.

3.4 WHEN the Footer renders THEN the system SHALL CONTINUE TO use `<Link to>` for the Privacy Policy and Terms of Service links at the bottom, which are already correct.

3.5 WHEN `SEO.tsx` renders THEN the system SHALL CONTINUE TO produce all `<Helmet>` meta tags, Open Graph tags, Twitter Card tags, structured data, and geo tags exactly as before.

3.6 WHEN `ProjectDetailsPage.tsx` renders THEN the system SHALL CONTINUE TO support image zoom, carousel navigation, thumbnail selection, and the zoomed-image modal.

3.7 WHEN `server.cjs` receives a valid `/api/create-order` or `/api/verify-payment` request with all required fields THEN the system SHALL CONTINUE TO process Razorpay orders and payment verification correctly.

3.8 WHEN `server.cjs` receives a request from an allowed origin (`https://www.revonzastudio.tech`, `http://localhost:5173`) THEN the system SHALL CONTINUE TO respond with the correct CORS headers permitting that origin.

3.9 WHEN the application bundle is split with `React.lazy()` THEN the system SHALL CONTINUE TO render each page correctly with no visual or functional regressions.

3.10 WHEN `main.tsx` no longer contains the `beforeunload` listener THEN the system SHALL CONTINUE TO mount the React app and render `<App />` correctly.

---

## Bug Condition Pseudocode

### Priority 1 Bugs

```pascal
// 1. VITE_BACKEND_URL hardcoded to localhost
FUNCTION isBugCondition_BackendUrl(env)
  INPUT: env — the .env file contents
  OUTPUT: boolean
  RETURN env.VITE_BACKEND_URL = "http://localhost:4000"
END FUNCTION

FOR ALL env WHERE isBugCondition_BackendUrl(env) DO
  result ← productApiCall'(env)
  ASSERT result.resolves_in_production = true
END FOR

FOR ALL env WHERE NOT isBugCondition_BackendUrl(env) DO
  ASSERT productApiCall(env) = productApiCall'(env)
END FOR


// 2. Unused imports in Header.tsx
FUNCTION isBugCondition_UnusedImports(component)
  INPUT: component — Header.tsx AST
  OUTPUT: boolean
  RETURN component.imports CONTAINS "MessageCircle"
      OR component.imports CONTAINS "LOGO_WHITE_URL"
      OR component.imports CONTAINS "LOGO_BLACK_URL"
END FUNCTION

FOR ALL component WHERE isBugCondition_UnusedImports(component) DO
  result ← compile'(component)
  ASSERT result.unused_imports = []
END FOR


// 3. Footer <a href> instead of <Link to>
FUNCTION isBugCondition_FooterAnchor(link)
  INPUT: link — a navigation element in Footer
  OUTPUT: boolean
  RETURN link.isInternal = true AND link.element = "<a>"
END FUNCTION

FOR ALL link WHERE isBugCondition_FooterAnchor(link) DO
  result ← navigate'(link)
  ASSERT result.fullPageReload = false
END FOR

FOR ALL link WHERE NOT isBugCondition_FooterAnchor(link) DO
  ASSERT navigate(link) = navigate'(link)
END FOR


// 4 & 5. console.log in production
FUNCTION isBugCondition_ConsoleLog(action)
  INPUT: action — user or system action
  OUTPUT: boolean
  RETURN (action = "zoomImage" AND file = "ProjectDetailsPage.tsx")
      OR (action = "clearSiteData" AND file = "main.tsx")
END FUNCTION

FOR ALL action WHERE isBugCondition_ConsoleLog(action) DO
  result ← execute'(action)
  ASSERT result.consoleOutput CONTAINS NO log statements
END FOR


// 6. Unused useEffect in SEO.tsx
FUNCTION isBugCondition_UnusedUseEffect(component)
  INPUT: component — SEO.tsx AST
  OUTPUT: boolean
  RETURN component.imports CONTAINS "useEffect"
      AND component.body CONTAINS NO useEffect calls
END FUNCTION

FOR ALL component WHERE isBugCondition_UnusedUseEffect(component) DO
  result ← compile'(component)
  ASSERT result.unused_imports CONTAINS NOT "useEffect"
END FOR
```

### Priority 2 Bugs

```pascal
// 7. Bundle size
FUNCTION isBugCondition_BundleSize(build)
  INPUT: build — Vite production build output
  OUTPUT: boolean
  RETURN build.mainChunkSize > 500_000  // bytes
END FUNCTION

FOR ALL build WHERE isBugCondition_BundleSize(build) DO
  result ← build'(lazyLoaded)
  ASSERT result.mainChunkSize < 500_000
END FOR


// 8. CORS conflict
FUNCTION isBugCondition_CorsConflict(request)
  INPUT: request — HTTP request to server.cjs
  OUTPUT: boolean
  RETURN request.headers["Origin"] IS SET
END FUNCTION

FOR ALL request WHERE isBugCondition_CorsConflict(request) DO
  result ← handleRequest'(request)
  ASSERT result.headers["Access-Control-Allow-Origin"] SET_BY = "cors() middleware only"
END FOR


// 9. Razorpay crash on missing env vars
FUNCTION isBugCondition_RazorpayMissingEnv(env)
  INPUT: env — process.env at server startup
  OUTPUT: boolean
  RETURN env.RAZORPAY_KEY_ID = undefined
      OR env.RAZORPAY_KEY_SECRET = undefined
END FUNCTION

FOR ALL env WHERE isBugCondition_RazorpayMissingEnv(env) DO
  result ← startServer'(env)
  ASSERT result.exitCode != 0 AND result.errorMessage CONTAINS "RAZORPAY"
  ASSERT result.crash = false  // graceful exit, not unhandled exception
END FOR

FOR ALL env WHERE NOT isBugCondition_RazorpayMissingEnv(env) DO
  ASSERT startServer(env) = startServer'(env)
END FOR


// 10. Aggressive beforeunload clearing
FUNCTION isBugCondition_BeforeUnload(event)
  INPUT: event — browser beforeunload event
  OUTPUT: boolean
  RETURN event.type = "beforeunload"
END FUNCTION

FOR ALL event WHERE isBugCondition_BeforeUnload(event) DO
  result ← handleEvent'(event)
  ASSERT result.localStorageCleared = false
  ASSERT result.sessionStorageCleared = false
  ASSERT result.cookiesCleared = false
END FOR
```
