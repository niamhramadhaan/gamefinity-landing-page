import LegalPage from '../components/LegalPage'

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="12 June 2026">
      <p>
        This policy explains what PT Gamefinity Indonesia collects when you use our sites and the
        embeddable Gamefinity engine, why we collect it, and the choices you have. We keep it short
        because we collect less than most.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Account basics: a display name and the email you sign in with.</li>
        <li>Usage signals: which games, episodes, and rooms you open, so we can recommend better ones.</li>
        <li>Device and log data: browser type, approximate region, and error reports.</li>
      </ul>

      <h2>What we don't do</h2>
      <p>
        We don't sell your personal data, and we don't run third-party ad trackers inside the engine.
        Partner apps that embed Gamefinity see aggregate engagement, never your private messages.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Account data stays until you delete your account. Raw usage logs are aggregated after 90 days.
        You can request a copy or deletion of your data at any time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about your data? Email <a href="mailto:privacy@gamefinity.id">privacy@gamefinity.id</a>
        {' '}and a real person will answer.
      </p>
    </LegalPage>
  )
}
