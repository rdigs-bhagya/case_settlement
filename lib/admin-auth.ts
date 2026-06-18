export const ADMIN_EMAIL = "leads@landmarkdemand.com"
export const ADMIN_PASSWORD = "LandMarkLeads@2026"
export const ADMIN_SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 8
export const ADMIN_TOKEN_STORAGE_KEY = "adminToken"

export type AdminSession = {
  email: string
  authSignature: string
  issuedAt: number
  expiresAt: number
}

function getAdminAuthSignature(): string {
  return `${ADMIN_EMAIL}:${ADMIN_PASSWORD}`
}

export function createAdminSession(email: string): string {
  const issuedAt = Date.now()

  return JSON.stringify({
    email,
    authSignature: getAdminAuthSignature(),
    issuedAt,
    expiresAt: issuedAt + ADMIN_SESSION_MAX_AGE_MS,
  } satisfies AdminSession)
}

export function parseAdminSession(token: string | null): AdminSession | null {
  if (!token) {
    return null
  }

  try {
    const session = JSON.parse(token) as Partial<AdminSession>

    if (
      typeof session.email !== "string" ||
      typeof session.authSignature !== "string" ||
      typeof session.issuedAt !== "number" ||
      typeof session.expiresAt !== "number"
    ) {
      return null
    }

    return session as AdminSession
  } catch {
    return null
  }
}

export function isAdminSessionValid(token: string | null): boolean {
  const session = parseAdminSession(token)

  if (!session) {
    return false
  }

  if (session.email !== ADMIN_EMAIL) {
    return false
  }

  if (session.authSignature !== getAdminAuthSignature()) {
    return false
  }

  return Date.now() < session.expiresAt
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)
}