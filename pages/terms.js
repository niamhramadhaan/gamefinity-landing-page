import LegalPage from '../components/LegalPage'

export default function Terms() {
  return (
    <LegalPage title="Terms of service" updated="12 June 2026">
      <p>
        These terms cover your use of Gamefinity's websites and the embeddable engine. By using them
        you agree to what's below. If you're integrating on behalf of a company, a separate partner
        agreement takes priority where the two differ.
      </p>

      <h2>Using the service</h2>
      <ul>
        <li>Keep your account secure and don't share sign-in credentials.</li>
        <li>Don't attempt to break, overload, or reverse-engineer the engine.</li>
        <li>Content you upload must be yours to share and must follow local law.</li>
      </ul>

      <h2>Partner integrations</h2>
      <p>
        Embedding the engine requires an API key issued to your organisation. You're responsible for
        how the modules appear in your app and for the audience you serve them to. Revenue share and
        service levels are set in your partner agreement.
      </p>

      <h2>Availability</h2>
      <p>
        We work hard to keep the engine online, but we don't promise uninterrupted service. We may
        update or retire features, and we'll give partners reasonable notice before breaking changes.
      </p>

      <h2>Contact</h2>
      <p>
        For anything about these terms, email <a href="mailto:legal@gamefinity.id">legal@gamefinity.id</a>.
      </p>
    </LegalPage>
  )
}
