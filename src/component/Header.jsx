import { useEffect, useState } from "react";
import "./Header.css";

/* ---------- Icons (colored, retro style) ---------- */
const icons = {
    linkedin: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="2" y="2" width="28" height="28" fill="#0a66c2" stroke="#000" />
            <rect x="7" y="13" width="4" height="12" fill="#fff" />
            <rect x="7" y="7" width="4" height="4" fill="#fff" />
            <path d="M14 13h4v2c.8-1.4 2.2-2.3 4.2-2.3 3.4 0 4.8 2.1 4.8 5.6V25h-4v-6c0-1.7-.6-2.7-2-2.7s-3 1-3 3V25h-4z" fill="#fff" />
        </svg>
    ),
    github: (
        <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
                fill="#111"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <defs>
                <linearGradient id="rt-ig" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#fdb44b" />
                    <stop offset=".5" stopColor="#e1306c" />
                    <stop offset="1" stopColor="#7b3fd6" />
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#rt-ig)" stroke="#000" />
            <circle cx="16" cy="16" r="6" fill="none" stroke="#fff" strokeWidth="2.4" />
            <circle cx="23" cy="9" r="1.7" fill="#fff" />
        </svg>
    ),
    tiktok: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="2" y="2" width="28" height="28" fill="#111" stroke="#000" />
            <path d="M18 7v12.5a3.5 3.5 0 1 1-3.5-3.5" fill="none" stroke="#25f4ee" strokeWidth="3" transform="translate(-1.2 .8)" />
            <path d="M18 7v12.5a3.5 3.5 0 1 1-3.5-3.5" fill="none" stroke="#fe2c55" strokeWidth="3" transform="translate(1.2 -.8)" />
            <path d="M18 7v12.5a3.5 3.5 0 1 1-3.5-3.5M18 7c.4 2.6 2.4 4.4 5.2 4.6" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
    ),
    telegram: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="#2aabee" stroke="#000" />
            <path d="M7 15.6l15.5-6c.7-.3 1.3.2 1.1 1.1L21 22.4c-.2.8-.7 1-1.4.6l-4-2.9-1.9 1.9c-.2.2-.4.4-.8.4l.3-4.1 7.4-6.7c.3-.3-.1-.4-.5-.2l-9.2 5.8-4-1.2c-.9-.3-.9-.9.2-1.3z" fill="#fff" />
        </svg>
    ),
    whatsapp: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3a13 13 0 0 0-11 19.8L3.2 29l6.4-1.7A13 13 0 1 0 16 3z" fill="#25d366" stroke="#000" />
            <path d="M11.2 9.5c.5-.4 1.2-.3 1.5.3l1 2.2c.2.4.1.8-.2 1.1l-.8.9c.9 1.7 2.3 3 4.1 3.9l1-1c.3-.3.7-.4 1.1-.2l2.2 1c.6.3.8 1 .4 1.5-.8 1.2-2 1.9-3.4 1.7-4.3-.6-8-4.2-8.6-8.5-.2-1.3.4-2.4 1.7-2.9z" fill="#fff" />
        </svg>
    ),
    website: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="13" fill="#4aa3e8" />
            <path d="M9 9c3 0 4 2 6 2s2 3 0 4-1 3-3 4-1 4-3 3-4-5-4-8 1-5 4-5z" fill="#3fa34d" />
            <path d="M20 6c2 0 4 2 4 4s-2 2-3 4-1 4-3 5-2-3-1-5 0-3 0-5 1-3 3-3z" fill="#3fa34d" />
            <circle cx="16" cy="16" r="13" fill="none" stroke="#000" />
        </svg>
    ),
    hobby: (
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3C8.8 3 3 8.4 3 15c0 6.2 5 11 10.5 11 2 0 2.5-1.4 1.6-2.7-1-1.5-.2-3.3 1.8-3.3H22c3.9 0 7-2.4 7-6C29 8 23.5 3 16 3z" fill="#e8c27a" stroke="#000" />
            <circle cx="9.5" cy="14" r="2" fill="#e22" />
            <circle cx="14" cy="9" r="2" fill="#2a5" />
            <circle cx="20.5" cy="9.5" r="2" fill="#26d" />
            <circle cx="24" cy="15" r="2" fill="#f2c200" />
        </svg>
    ),
};

/* ---------- Data ---------- */
const LINKS = [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/temurbek-alisherov-42a5b23b3" },
    { id: "github", label: "GitHub", href: "https://github.com/TemurbekCode" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/talshrv" },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@alshrvt?_r=1&_t=ZS-99dZq5ftVaS" },
    { id: "telegram", label: "Telegram", href: "https://t.me/talshrvy" },
    // TODO: replace YOUR_PHONE_NUMBER (digits only, with country code, e.g. 998901234567)
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/YOUR_PHONE_NUMBER" },
    { id: "website", label: "Website", href: "https://byalisherov.netlify.app/" },
    { id: "hobby", label: "Hobbies", href: "https://pixelvibes.vercel.app/" },
];

const EMAIL = "temurbekalisherov82@gmail.com";

function Header() {
    const [now, setNow] = useState(() => new Date());
    const [minimized, setMinimized] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    // live clock
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    // Escape closes the dialog
    useEffect(() => {
        if (!dialogOpen) return;
        const onKey = (e) => e.key === "Escape" && setDialogOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [dialogOpen]);

    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = now.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

    return (
        <header className="rt-desktop">
            <main
                className={`rt-window${minimized ? " is-min" : ""}`}
                aria-label="Temur Alisherov profile card"
            >
                {/* Title bar */}
                <div className="rt-titlebar">
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                        <rect x="1" y="2" width="14" height="12" fill="#c0c0c0" stroke="#000" />
                        <rect x="2" y="3" width="12" height="3" fill="#000080" />
                        <rect x="3" y="8" width="6" height="1" fill="#000" />
                        <rect x="3" y="10" width="9" height="1" fill="#000" />
                    </svg>
                    <span className="rt-title">temur.exe</span>
                    <button
                        type="button"
                        className="rt-tbtn"
                        aria-label="Minimize"
                        onClick={() => setMinimized((v) => !v)}
                    >
                        -
                    </button>
                    <button type="button" className="rt-tbtn" aria-label="Maximize" tabIndex={-1}>
                        &#9634;
                    </button>
                    <button
                        type="button"
                        className="rt-tbtn"
                        aria-label="Close"
                        onClick={() => setDialogOpen(true)}
                    >
                        &#215;
                    </button>
                </div>

                <div className="rt-menubar" aria-hidden="true">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Help</span>
                </div>

                <div className="rt-body">
                    {/* Profile */}
                    <section className="rt-profile rt-sunken">
                        <div className="rt-photo rt-raised">
                            <img src="/image.png" alt="Temur Alisherov" />
                        </div>
                        <div className="rt-who">
                            <h1>Temur Alisherov</h1>
                            <p>Software developer and builder</p>
                        </div>
                    </section>

                    {/* Links */}
                    <fieldset className="rt-group">
                        <legend>Find me on</legend>
                        <nav className="rt-icons" aria-label="Links">
                            {LINKS.map(({ id, label, href }) => (
                                <a
                                    key={id}
                                    className="rt-icon"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="rt-glyph">{icons[id]}</span>
                                    <span className="rt-label">{label}</span>
                                </a>
                            ))}
                        </nav>
                    </fieldset>

                    {/* Contact */}
                    <a className="rt-mail rt-raised" href={`mailto:${EMAIL}`}>
                        <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true">
                            <rect x=".5" y=".5" width="19" height="15" fill="#fff" stroke="#000" />
                            <path d="M1 1l9 8 9-8" fill="none" stroke="#000" />
                        </svg>
                        Send mail.exe
                    </a>

                    {/* Quote */}
                    <section className="rt-note rt-sunken" aria-label="Quote">
                        <div className="rt-np-title">note.txt</div>
                        <p className="rt-np-body">
                            Don't rely on AI. Build your own skills.
                            <span className="rt-caret" aria-hidden="true" />
                        </p>
                    </section>

                    {/* Status bar */}
                    <div className="rt-status">
                        <div className="rt-cell">
                            <span className="rt-dot" aria-hidden="true" />
                            Available for opportunities
                        </div>
                        <div className="rt-cell rt-cell-small" aria-hidden="true">
                            {date}
                        </div>
                    </div>
                </div>
            </main>

            {/* Taskbar */}
            <div className="rt-taskbar">
                <button
                    type="button"
                    className="rt-start rt-raised"
                    onClick={() => setMinimized(false)}
                >
                    <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true">
                        <rect x="0" y="1" width="7" height="6" fill="#f25022" />
                        <rect x="8" y="0" width="7" height="6" fill="#7fba00" />
                        <rect x="0" y="8" width="7" height="6" fill="#00a4ef" />
                        <rect x="8" y="7" width="7" height="6" fill="#ffb900" />
                    </svg>
                    Start
                </button>
                <div className="rt-task">
                    <span aria-hidden="true">&#9638;</span> temur.exe
                </div>
                <time className="rt-tray" dateTime={now.toISOString()}>
                    {time}
                </time>
            </div>

            {/* Error dialog */}
            {dialogOpen && (
                <div className="rt-overlay" role="alertdialog" aria-modal="true" aria-labelledby="rt-dlg-title">
                    <div className="rt-dialog rt-raised">
                        <div className="rt-titlebar">
                            <span className="rt-title" id="rt-dlg-title">Error</span>
                            <button
                                type="button"
                                className="rt-tbtn"
                                aria-label="Close dialog"
                                onClick={() => setDialogOpen(false)}
                            >
                                &#215;
                            </button>
                        </div>
                        <div className="rt-msg">
                            <div className="rt-err" aria-hidden="true">&#215;</div>
                            <p>temur.exe cannot be closed. It is still available for opportunities.</p>
                        </div>
                        <div className="rt-actions">
                            <button
                                type="button"
                                className="rt-ok rt-raised"
                                autoFocus
                                onClick={() => setDialogOpen(false)}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;