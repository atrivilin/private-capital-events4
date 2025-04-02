import { useState } from "react";

const mockInvites = ["approved@email.com"];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
    setApproved(mockInvites.includes(email));
  };

  const handleAccess = () => {
    if (approved) setAccessGranted(true);
  };

  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/test_00g5mG4lxbzVc7a9AA";
  };

  return (
    <div style={{ background: 'black', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem' }}>Private Capital Events</h1>
      <p>Exclusive dealmaking events in Toronto & NYC. Powered by elite sponsors. Built for next-gen millionaires.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ color: 'black', padding: '0.5rem', marginTop: '1rem', width: '300px' }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        {submitted ? "Submitted ✅" : "Request Invite"}
      </button>
      {submitted && (
        <div style={{ marginTop: '1rem' }}>
          {approved ? (
            <>
              <p>✅ Approved! Access granted.</p>
              <button onClick={handleAccess} style={{ padding: '0.5rem 1rem', marginTop: '0.5rem' }}>
                Access Event Dashboard
              </button>
            </>
          ) : (
            <p>⏳ Awaiting approval. We’ll email you once approved.</p>
          )}
        </div>
      )}
      {accessGranted && (
        <div style={{ background: 'white', color: 'black', padding: '1rem', marginTop: '2rem' }}>
          <h2>🛠️ Admin: Invited Guests Dashboard</h2>
          <ul>
            <li>✔️ approved@email.com</li>
            <li>👤 Add new invitees manually</li>
            <li>📤 Send custom invite links</li>
            <li>💬 Manage RSVPs & ticket status</li>
          </ul>
          <button onClick={handleCheckout} style={{ padding: '0.5rem 1rem', marginTop: '1rem', background: 'green', color: 'white' }}>
            Buy Event Ticket
          </button>
        </div>
      )}
    </div>
  );
}
