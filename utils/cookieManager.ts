// Cookie management utilities

/**
 * Set a cookie with the given name, value and expiration days
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof window === 'undefined') return;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof window === 'undefined') return null;

  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

/**
 * Delete a cookie by name
 */
export function deleteCookie(name: string): void {
  if (typeof window === 'undefined') return;

  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

/**
 * Get the cookie consent settings
 */
export function getCookieConsent(): string | null {
  if (typeof window === 'undefined') return null;

  return localStorage.getItem('cookieConsent');
}

/**
 * Check if user has given consent to cookies
 */
export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false;

  return localStorage.getItem('cookieConsent') !== null;
}

/**
 * Check if user has given consent to all cookies
 */
export function hasFullConsent(): boolean {
  if (typeof window === 'undefined') return false;

  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;

  try {
    const settings = JSON.parse(consent);
    return settings.preferences && settings.analytics && settings.marketing;
  } catch (e) {
    return false;
  }
}

/**
 * Check if user has given consent to essential cookies only
 */
export function hasEssentialConsent(): boolean {
  if (typeof window === 'undefined') return false;

  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;

  try {
    const settings = JSON.parse(consent);
    return settings.essential && !settings.preferences && !settings.analytics && !settings.marketing;
  } catch (e) {
    return false;
  }
}

/**
 * Check if user has given consent to a specific category of cookies
 */
export function hasCategoryConsent(category: string): boolean {
  if (typeof window === 'undefined') return false;

  // Essential cookies are always allowed
  if (category === 'essential') return true;

  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;

  try {
    const settings = JSON.parse(consent);
    return settings[category] === true;
  } catch (e) {
    return false;
  }
}
