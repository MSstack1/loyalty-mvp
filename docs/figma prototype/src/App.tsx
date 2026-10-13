import { createElement, InputHTMLAttributes, ReactNode, useState } from "react";

type IconName =
  | "activity"
  | "arrow"
  | "card"
  | "check"
  | "chevron"
  | "customers"
  | "download"
  | "gift"
  | "grid"
  | "help"
  | "home"
  | "logout"
  | "plus"
  | "qr"
  | "scan"
  | "settings"
  | "sparkles"
  | "stamp";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    activity: <path d="M4 15h3l2-7 4 11 2-7h5" />,
    arrow: <path d="m9 18 6-6-6-6" />,
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    customers: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />,
    gift: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M12 8v13M3 12h18M7.5 8C5 8 5 4 7.5 4 10 4 12 8 12 8s2-4 4.5-4S19 8 16.5 8" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.4 2.4 0 1 1 3.52 2.13c-.76.4-1.22.88-1.22 1.87M12 17h.01" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    logout: <path d="M10 17l5-5-5-5m5 5H3m11-9h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    qr: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h2M20 14h1" />
      </>
    ),
    scan: <path d="M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3M7 12h10" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1v.1h-4v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4h-.1v-4H3A1.7 1.7 0 0 0 4.6 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1v-.1h4V3A1.7 1.7 0 0 0 15.5 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.25.3.46.65.6 1 .1.32.14.65.14 1" />
      </>
    ),
    sparkles: <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM6 14l.8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14Zm12-2 .8 2.2L21 15l-2.2.8L18 18l-.8-2.2L15 15l2.2-.8L18 12Z" />,
    stamp: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return createElement("button", { className: `button ${className}`, onClick, type: "button" }, children);
}

function Heading({
  children,
  level = 1,
}: {
  children: ReactNode;
  level?: 1 | 2;
}) {
  return createElement(`h${level}`, null, children);
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return createElement("input", props);
}

function NavItem({
  active,
  icon,
  label,
}: {
  active?: boolean;
  icon: IconName;
  label: string;
}) {
  return (
    <Button className={`nav-item ${active ? "nav-item-active" : ""}`}>
      <Icon name={icon} size={19} />
      <span>{label}</span>
    </Button>
  );
}

const activity = [
  { initials: "SB", name: "Sofia Bianchi", action: "Espresso stamp added", time: "2 min ago", value: "+1", tone: "green" },
  { initials: "MR", name: "Matteo Rossi", action: "Caffè reward redeemed", time: "18 min ago", value: "Reward", tone: "plum" },
  { initials: "GC", name: "Giulia Conti", action: "Joined Amici del Caffè", time: "1 hr ago", value: "New", tone: "blue" },
  { initials: "LP", name: "Luca Parisi", action: "Cappuccino stamp added", time: "2 hrs ago", value: "+1", tone: "green" },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="brand">
      <div className={`brand-mark ${light ? "brand-mark-light" : ""}`}>
        <span />
        <span />
        <span />
      </div>
      <span className="brand-name">Tally</span>
    </div>
  );
}

function OwnerDashboard() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <BrandMark />
          <nav className="side-nav">
            <NavItem active icon="home" label="Overview" />
            <NavItem icon="customers" label="Customers" />
            <NavItem icon="card" label="Loyalty card" />
            <NavItem icon="activity" label="Activity" />
          </nav>
          <div className="nav-divider" />
          <nav className="side-nav">
            <NavItem icon="settings" label="Settings" />
            <NavItem icon="help" label="Help & support" />
          </nav>
        </div>
        <div className="profile">
          <div className="avatar avatar-photo">MC</div>
          <div className="profile-copy">
            <strong>Maya Chen</strong>
            <span>Caffè Bellini</span>
          </div>
          <Icon name="chevron" size={16} />
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand"><BrandMark /></div>
          <div className="view-toggle-spacer" />
          <Button className="icon-button"><Icon name="help" size={19} /></Button>
          <Button className="primary compact"><Icon name="qr" size={17} /> View join QR</Button>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <span className="eyebrow">MONDAY, 26 OCTOBER</span>
              <Heading>Good morning, Maya.</Heading>
              <p>Here’s how Caffè Bellini is doing today.</p>
            </div>
            <Button className="secondary"><Icon name="download" size={17} /> Download report</Button>
          </section>

          <section className="stats-grid">
            <Metric icon="customers" label="Total customers" value="248" delta="+12 this week" />
            <Metric icon="stamp" label="Stamps today" value="36" delta="+8% from yesterday" />
            <Metric icon="gift" label="Rewards redeemed" value="14" delta="This month" />
            <Metric icon="sparkles" label="Join conversion" value="68%" delta="+4% this month" />
          </section>

          <section className="dashboard-grid">
            <div className="panel chart-panel">
              <div className="panel-heading">
                <div>
                  <Heading level={2}>Programme activity</Heading>
                  <p>Stamps added over the last 7 days</p>
                </div>
                <Button className="filter-button">Last 7 days <Icon name="chevron" size={15} /></Button>
              </div>
              <div className="chart-summary">
                <strong>186</strong>
                <span className="positive-pill">↗ 12.4%</span>
                <span>vs previous period</span>
              </div>
              <div className="chart">
                <div className="axis">
                  <span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
                </div>
                <svg viewBox="0 0 620 190" preserveAspectRatio="none" aria-label="Weekly stamps chart">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--mint-strong)" stopOpacity=".24" />
                      <stop offset="100%" stopColor="var(--mint-strong)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="grid-line" d="M0 20H620M0 60H620M0 100H620M0 140H620M0 180H620" />
                  <path className="area" d="M0 150C35 148 50 118 85 123S140 144 177 125s55-78 95-69 48 55 88 58 57-30 90-43 59-4 85-28 57-30 85-25V190H0Z" />
                  <path className="line" d="M0 150C35 148 50 118 85 123S140 144 177 125s55-78 95-69 48 55 88 58 57-30 90-43 59-4 85-28 57-30 85-25" />
                  <circle className="chart-dot" cx="450" cy="71" r="5" />
                </svg>
                <div className="days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
              </div>
            </div>

            <div className="panel programme-panel">
              <div className="panel-heading">
                <div>
                  <Heading level={2}>Your loyalty card</Heading>
                  <p>Live and collecting stamps</p>
                </div>
                <span className="live-pill"><i /> Live</span>
              </div>
              <LoyaltyCard compact />
              <div className="programme-actions">
                <Button className="primary wide">Manage card <Icon name="arrow" size={17} /></Button>
                <Button className="secondary square"><Icon name="qr" size={19} /></Button>
              </div>
            </div>
          </section>

          <section className="panel activity-panel">
            <div className="panel-heading">
              <div>
                <Heading level={2}>Recent activity</Heading>
                <p>Latest customer and reward activity</p>
              </div>
              <Button className="text-button">View all <Icon name="arrow" size={16} /></Button>
            </div>
            <div className="activity-list">
              {activity.map((item) => (
                <div className="activity-row" key={item.name}>
                  <div className={`avatar avatar-${item.tone}`}>{item.initials}</div>
                  <div className="activity-person"><strong>{item.name}</strong><span>{item.action}</span></div>
                  <span className={`activity-value value-${item.tone}`}>{item.value}</span>
                  <span className="activity-time">{item.time}</span>
                  <Icon name="arrow" size={16} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function Metric({ icon, label, value, delta }: { icon: IconName; label: string; value: string; delta: string }) {
  return (
    <div className="metric-card">
      <div className="metric-top"><span className="metric-icon"><Icon name={icon} size={19} /></span><span className="more">•••</span></div>
      <p>{label}</p>
      <strong>{value}</strong>
      <span className="metric-delta">{delta}</span>
    </div>
  );
}

function LoyaltyCard({ compact = false, full = false }: { compact?: boolean; full?: boolean }) {
  const stamps = full ? 10 : compact ? 6 : 4;
  return (
    <div className={`loyalty-card ${compact ? "loyalty-card-compact" : ""}`}>
      <div className="coffee-bean bean-one" />
      <div className="coffee-bean bean-two" />
      <div className="card-brand">
        <div className="juniper-mark">B</div>
        <div><strong>CAFFÈ BELLINI</strong><span>TORREFAZIONE ITALIANA</span></div>
      </div>
      <div className="card-rule"><strong>{full ? "Il prossimo caffè è offerto" : "Il tuo rito quotidiano."}</strong><span>{full ? "Enjoy your next coffee on us." : "Nine coffees, then the tenth is on the house."}</span></div>
      <div className="stamps">
        {Array.from({ length: 10 }).map((_, index) => (
          <span className={index < stamps ? "stamped" : ""} key={index}>
            {index < stamps ? <Icon name={index === 9 ? "gift" : "check"} size={14} /> : index + 1}
          </span>
        ))}
      </div>
      <div className="card-progress"><span>{full ? "10 of 10 stamps" : `${stamps} of 10 stamps`}</span><span>{full ? "REWARD UNLOCKED" : `${10 - stamps} TO GO`}</span></div>
    </div>
  );
}

function CustomerJoin() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="customer-page">
      <header className="public-header">
        <BrandMark light />
        <span>Un caffè, come in Italia.</span>
      </header>
      <main className="join-main">
        <section className="join-story">
          <span className="join-eyebrow"><Icon name="sparkles" size={16} /> AMICI DEL CAFFÈ</span>
          <Heading>A little piece of Italy, every day.</Heading>
          <p>Join the Caffè Bellini family and collect a stamp with every espresso, cappuccino or caffè latte. Your tenth is on us.</p>
          <div className="join-perks">
            <div><span><Icon name="stamp" /></span><p><strong>Un timbro per ogni caffè</strong><br />Show your card when you order at the bar.</p></div>
            <div><span><Icon name="gift" /></span><p><strong>Il decimo lo offriamo noi</strong><br />Your tenth coffee is our treat.</p></div>
            <div><span><Icon name="card" /></span><p><strong>Keep it in Apple Wallet</strong><br />Your balance updates automatically.</p></div>
          </div>
        </section>
        <section className="join-card-wrap">
          {!joined ? (
            <div className="join-form-card">
              <div className="join-form-title">
                <div className="juniper-mark large">B</div>
                <div><Heading level={2}>Become an Amico</Heading><p>Benvenuto — it only takes a moment.</p></div>
              </div>
              <label>Full name<Input placeholder="e.g. Alex Morgan" /></label>
              <label>Email address<Input placeholder="alex@example.com" type="email" /></label>
              <label className="check-label"><Input type="checkbox" defaultChecked /><span>I agree to Caffè Bellini storing my details to run this loyalty programme.</span></label>
              <Button className="primary join-button" onClick={() => setJoined(true)}>Create my loyalty card <Icon name="arrow" size={18} /></Button>
              <p className="privacy">No spam. No apps. You can ask us to delete your details at any time.</p>
            </div>
          ) : (
            <div className="join-success">
              <span className="success-icon"><Icon name="check" size={26} /></span>
              <span className="eyebrow">YOU’RE ALL SET</span>
              <Heading level={2}>Benvenuto, Alex.</Heading>
              <p>Your first caffè on the house just got closer.</p>
              <LoyaltyCard />
              <Button className="wallet-button"><span className="apple">●</span><span>Add to<br /><strong>Apple Wallet</strong></span></Button>
              <Button className="text-button" onClick={() => setJoined(false)}>Back to join form</Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function StaffScanner() {
  const [state, setState] = useState<"scan" | "customer" | "success" | "reward">("scan");
  return (
    <div className="staff-page">
      <header className="staff-header">
        <BrandMark />
        <div className="staff-location"><span className="juniper-mark small">B</span><div><strong>Caffè Bellini</strong><span>Soho · Banco</span></div></div>
        <Button className="icon-button"><Icon name="logout" size={19} /></Button>
      </header>
      <main className="staff-main">
        {state === "scan" && (
          <>
            <span className="eyebrow">STAMP A CARD</span>
            <Heading>Pronto per la scansione</Heading>
            <p>Hold the customer’s Amici del Caffè QR code inside the frame.</p>
            <div className="scanner">
              <div className="scan-corners"><span /><span /><span /><span /></div>
              <div className="fake-qr"><Icon name="qr" size={90} /></div>
              <div className="scan-line" />
            </div>
            <Button className="primary staff-action" onClick={() => setState("customer")}><Icon name="scan" /> Simulate card scan</Button>
            <p className="camera-help">Camera not working? <strong>Enter card code</strong></p>
          </>
        )}
        {state === "customer" && (
          <div className="staff-result">
            <span className="customer-avatar">SB</span>
            <span className="eyebrow">CARD FOUND</span>
            <Heading>Sofia Bianchi</Heading>
            <p>Member since 14 September 2026</p>
            <div className="balance-card">
              <span>Current balance</span>
              <strong>9 <small>/ 10</small></strong>
              <div className="mini-stamps">{Array.from({ length: 10 }).map((_, i) => <i className={i < 9 ? "done" : ""} key={i}>{i < 9 && <Icon name="check" size={12} />}</i>)}</div>
              <p>One more stamp unlocks a caffè on the house</p>
            </div>
            <Button className="primary staff-action" onClick={() => setState("success")}><Icon name="plus" /> Add stamp</Button>
            <Button className="secondary staff-action" onClick={() => setState("scan")}>Cancel</Button>
          </div>
        )}
        {state === "success" && (
          <div className="staff-result success-result">
            <span className="success-burst"><Icon name="gift" size={42} /></span>
            <span className="eyebrow">STAMP ADDED</span>
            <Heading>Reward unlocked!</Heading>
            <p>Sofia has earned a caffè on the house.</p>
            <LoyaltyCard full />
            <Button className="primary staff-action" onClick={() => setState("reward")}><Icon name="gift" /> Redeem reward</Button>
            <Button className="secondary staff-action" onClick={() => setState("scan")}>Scan another card</Button>
          </div>
        )}
        {state === "reward" && (
          <div className="staff-result success-result">
            <span className="success-icon"><Icon name="check" size={32} /></span>
            <span className="eyebrow">REWARD REDEEMED</span>
            <Heading>Fatto!</Heading>
            <p>Sofia’s balance has reset to 0 of 10.</p>
            <div className="receipt">
              <div><span>Customer</span><strong>Sofia Bianchi</strong></div>
              <div><span>Reward</span><strong>Caffè offerto</strong></div>
              <div><span>Redeemed</span><strong>Just now</strong></div>
            </div>
            <Button className="primary staff-action" onClick={() => setState("scan")}><Icon name="scan" /> Scan next customer</Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<"owner" | "customer" | "staff">("owner");
  return (
    <div>
      <div className="prototype-switcher">
        <span>Prototype view</span>
        <Button className={view === "owner" ? "active" : ""} onClick={() => setView("owner")}><Icon name="grid" size={15} /> Business</Button>
        <Button className={view === "customer" ? "active" : ""} onClick={() => setView("customer")}><Icon name="card" size={15} /> Customer</Button>
        <Button className={view === "staff" ? "active" : ""} onClick={() => setView("staff")}><Icon name="scan" size={15} /> Staff</Button>
      </div>
      {view === "owner" && <OwnerDashboard />}
      {view === "customer" && <CustomerJoin />}
      {view === "staff" && <StaffScanner />}
    </div>
  );
}
