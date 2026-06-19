export const ADMIN_SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 8;
export const ADMIN_TOKEN_STORAGE_KEY = "adminToken";

export function createAdminSession(token: string): string {
  // We simply return the token to be stored
  return token;
}

export function parseAdminSession(token: string | null): string | null {
  if (!token) {
    return null;
  }
  return token;
}

export function isAdminSessionValid(token: string | null): boolean {
  // A basic check to see if we have a token. 
  // True validation happens on the backend.
  if (!token || token.length < 10) {
    return false;
  }
  return true;
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
}