/**
 * Anbindung an die ecore CRM REST API (https://finsion.ecore.ch/api/v1).
 * Flow: Login (Bearer-Token) -> Lead erstellen -> Logout.
 *
 * Zugangsdaten werden ausschliesslich serverseitig über Env-Variablen
 * gelesen (technischer Benutzer, anzulegen unter Administration -> Benutzer):
 *   ECORE_API_BASE_URL  (optional, Default unten)
 *   ECORE_API_EMAIL
 *   ECORE_API_PASSWORD
 *   ECORE_ADVISOR_NO    (optional)
 */

const BASE_URL =
  process.env.ECORE_API_BASE_URL?.replace(/\/$/, "") ||
  "https://finsion.ecore.ch/api/v1";

export type EcoreLeadPayload = {
  leadNo?: string;
  advisorNo?: string;
  customerType: "Privat" | "Firma";
  gender: "männlich" | "weiblich";
  lastName: string;
  firstName: string;
  companyName?: string;
  dob?: string; // YYYY-MM-DD
  yob?: number; // YYYY
  nationality?: string; // ISO-2
  email?: string;
  phone1?: string;
  phone2?: string;
  addressStreet?: string;
  addressNo?: string;
  addressAddon?: string;
  addressZip?: string;
  addressCity?: string;
  recommendedBy?: string;
  relationToRec?: string;
  source?: string;
  sourceLabel?: string;
  profession?: string;
  note?: string;
};

type LoginResponse = {
  success: boolean;
  token?: string;
  message?: string;
};

type LeadResponse = {
  success?: boolean;
  message?: string;
  id?: string;
  errors?: Record<string, string[]>;
};

export class EcoreError extends Error {
  constructor(
    message: string,
    readonly fieldErrors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "EcoreError";
  }
}

function isConfigured(): boolean {
  return Boolean(process.env.ECORE_API_EMAIL && process.env.ECORE_API_PASSWORD);
}

async function login(): Promise<string> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email: process.env.ECORE_API_EMAIL,
      password: process.env.ECORE_API_PASSWORD,
    }),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as LoginResponse;
  if (!res.ok || !data.success || !data.token) {
    throw new EcoreError(data.message || "Login bei ecore fehlgeschlagen.");
  }
  return data.token;
}

async function logout(token: string): Promise<void> {
  await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    cache: "no-store",
  }).catch(() => undefined);
}

/**
 * Erstellt einen Lead. Gibt die ecore-Lead-ID zurück.
 * Wirft EcoreError mit fieldErrors bei Validierungsfehlern.
 * Falls keine Zugangsdaten konfiguriert sind, wird übersprungen (null).
 */
export async function createEcoreLead(
  payload: EcoreLeadPayload,
): Promise<string | null> {
  if (!isConfigured()) {
    console.warn(
      "[ecore] Kein ECORE_API_EMAIL/PASSWORD gesetzt – Lead wird NICHT ans CRM übermittelt.",
    );
    return null;
  }

  const token = await login();
  try {
    const res = await fetch(`${BASE_URL}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const data = (await res.json().catch(() => ({}))) as LeadResponse;
    if (!res.ok || data.success === false) {
      throw new EcoreError(
        data.message || "Lead konnte nicht erstellt werden.",
        data.errors,
      );
    }
    return data.id ?? null;
  } finally {
    await logout(token);
  }
}
