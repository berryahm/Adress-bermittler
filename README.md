# Finsion – Landingpage für Adressübermittler

Statische Landingpage (Next.js 16 + TypeScript + Tailwind v4), auf die potenzielle
Versicherungs­interessenten via Flyer-QR-Code oder von der Webseite eines
Adress­übermittlers gelangen. Sie hinterlassen über das Kontaktformular die im
Konzept "Adressvermittlung (abschliessend)" definierten Datenfelder. Finsion
kontaktiert sie anschliessend innert 7 Kalender­tagen (gemäss Vereinbarung
Ziff. 4.1).

## Erfasste Datenfelder (abschliessend)

- Kontaktangaben: Vorname, Nachname, Strasse/Nr., PLZ, Ort, Telefon, E-Mail
- Geburtsdatum (zur Identifikation)
- Versicherungsbereich(e), für die sich die Person interessiert
- Einwilligung "Kunde wünscht kontaktiert zu werden"

Keine Freitext-Felder, keine Gesundheits- oder Vertragsdaten – konform zum
übergebenen Konzept.

## Tracking des Adressübermittlers

URL-Parameter `?ref=<Vertriebspartner-Nr.>` wird als Hidden Field mitgesendet
und im Server-Log unter dem Schlüssel `referrer` mit gespeichert. Beispiel:

```
https://landing.finsion.ch/?ref=AU-12345
```

## Lokale Entwicklung

```bash
npm run dev
# → http://localhost:3000
```

## Anbindung an Mail / CRM

Aktuell werden eingehende Leads in `src/app/actions.ts` per `console.info`
geloggt (Eintrag `[finsion-lead] {...}`). Für die Produktion bitte dort eine
Anbindung an Resend / SMTP / Webhook / CRM ergänzen.

## Rechtliches

- `/datenschutz` – Datenschutzerklärung
- `/impressum` – Impressum

Beide Seiten enthalten Platzhalter-Texte, die vor Live-Gang juristisch
überprüft werden sollten.

## Deployment

Standard Next.js, deploybar auf Vercel ohne weitere Konfiguration.
