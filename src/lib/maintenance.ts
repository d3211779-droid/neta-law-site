// Temporary site-wide maintenance mode. Flip this single flag to `false`
// (or delete src/proxy.ts) to instantly restore the full public site — no
// other code, content, routes, sitemap, robots, or Resend wiring is touched
// by this feature at all.
export const MAINTENANCE_MODE = true;

const CONTACT_PHONE = "050-7239180";
const CONTACT_PHONE_HREF = "0507239180";
const CONTACT_EMAIL = "nettabhlaw@gmail.com";

export function renderMaintenancePage(): string {
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>האתר בהכנה | נטע בן חמו – עורכת דין</title>
<link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@600;700&family=Heebo:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; }
  body {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f1e8;
    color: #1e2419;
    font-family: Heebo, -apple-system, "Segoe UI", Arial, sans-serif;
    padding: 32px 20px calc(32px + env(safe-area-inset-bottom)) 20px;
  }
  .card {
    width: 100%;
    max-width: 30rem;
    text-align: center;
  }
  .logo {
    width: 96px;
    height: auto;
    margin: 0 auto 28px auto;
    display: block;
  }
  h1 {
    font-family: "Frank Ruhl Libre", Georgia, serif;
    font-weight: 700;
    font-size: clamp(1.5rem, 4vw + 1rem, 2.25rem);
    line-height: 1.25;
    margin: 0 0 12px 0;
    color: #1e2419;
  }
  .wordmark {
    font-family: "Frank Ruhl Libre", Georgia, serif;
    font-weight: 600;
    font-size: 1.125rem;
    margin: 0 0 20px 0;
    color: #47542f;
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #6b6459;
    margin: 0 0 28px 0;
  }
  .contact {
    border-top: 1px solid #cbbfa9;
    padding-top: 24px;
  }
  .contact-title {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1e2419;
    margin: 0 0 12px 0;
  }
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  a {
    color: #47542f;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
  a:focus-visible {
    outline: 2px solid #47542f;
    outline-offset: 3px;
  }
  img { max-width: 100%; }
</style>
</head>
<body>
  <div class="card">
    <img class="logo" src="/images/logo.png" width="96" height="86" alt="נטע בן חמו - עורכת דין" />
    <h1>האתר נמצא כרגע בהכנה</h1>
    <p class="wordmark">משרד עו"ד נטע בן חמו</p>
    <p>האתר יעלה בקרוב.</p>
    <div class="contact">
      <p class="contact-title">ליצירת קשר:</p>
      <div class="contact-links">
        <a href="tel:${CONTACT_PHONE_HREF}">${CONTACT_PHONE}</a>
        <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      </div>
    </div>
  </div>
</body>
</html>`;
}
