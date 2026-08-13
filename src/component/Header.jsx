import "./Header.css";

function Header() {
    return (
        <header className="header">

            {/* Background decorations */}
            <div className="bg-glow bg-glow-1"></div>
            <div className="bg-glow bg-glow-2"></div>
            <div className="grid-overlay"></div>

            <main className="profile-card">

                {/* Profile */}
                <div className="profile-wrapper">
                    <div className="profile-ring">
                        <img
                            src="profile.jpg"
                            className="imgM"
                            alt="Temur Alisherov"
                        />
                    </div>

                    <span className="online-dot"></span>
                </div>

                {/* Name */}
                <h1 className="name">
                    Temur Alisherov
                </h1>

                <p className="role">
                    Software Developer <span>•</span>  Builder
                </p>

                {/* Socials */}
                <div className="socials">

                    {/* Row 1 */}
                    <ul className="social-row">

                        {/* LinkedIn */}
                        <li className="icon-content">
                            <a
                                data-social="linkedin"
                                aria-label="LinkedIn"
                                href="https://www.linkedin.com/in/temurbek-alisherov-42a5b23b3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                                </svg>
                            </a>
                        </li>

                        {/* GitHub */}
                        <li className="icon-content">
                            <a
                                data-social="github"
                                aria-label="GitHub"
                                href="https://github.com/TemurbekCode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </a>
                        </li>

                        {/* Instagram */}
                        <li className="icon-content">
                            <a
                                data-social="instagram"
                                aria-label="Instagram"
                                href="https://www.instagram.com/talshrv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                    />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </a>
                        </li>

                        {/* YouTube */}
                        <li className="icon-content">
                            <a
                                data-social="youtube"
                                aria-label="YouTube"
                                href="#"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.58 9.39.58 9.39.58s7.52 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                                </svg>
                            </a>
                        </li>

                    </ul>

                    {/* Row 2 */}
                    <ul className="social-row">

                        {/* Telegram */}
                        <li className="icon-content">
                            <a
                                data-social="telegram"
                                aria-label="Telegram"
                                href="https://t.me/talshrvy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M21.8 3.1 2.9 10.4c-1.29.52-1.28 1.24-.23 1.56l4.85 1.51 1.86 5.68c.23.63.12.88.78.88.51 0 .73-.23.99-.5l2.36-2.29 4.91 3.63c.9.5 1.55.24 1.78-.84l3.22-15.18c.34-1.33-.51-1.93-1.61-1.49zM8.27 13.14l10.95-6.9c.55-.33 1.05-.15.64.21l-8.86 7.99-.34 3.63-1.77-4.93-4.64-1.45 4.02-1.55z" />
                                </svg>
                            </a>
                        </li>

                        {/* WhatsApp */}
                        <li className="icon-content">
                            <a
                                data-social="whatsapp"
                                aria-label="WhatsApp"
                                href="https://wa.me/YOUR_PHONE_NUMBER"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20.5 3.5A11.3 11.3 0 0 0 12.1 0C5.9 0 0.9 5 0.9 11.2c0 2 .5 4 1.5 5.7L.8 23.8l7-1.8a11.2 11.2 0 0 0 4.3.9h.1c6.2 0 11.2-5 11.2-11.2 0-3-1.1-6-2.9-8.2z" />

                                    <path d="M8.2 6.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c-.1.1-.1.3 0 .5.5.9 1.2 1.6 2 2.1.2.1.4.2.5 0l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.6 0 .8-.4 1.5-.9 1.8-.5.3-1.2.4-2 .2-1.1-.3-2.5-1-3.8-2.2-1.3-1.2-2.2-2.6-2.5-3.7-.3-1-.2-1.8.2-2.5.2-.4.6-.7 1.1-.7z" />
                                </svg>
                            </a>
                        </li>

                        {/* Portfolio */}
                        <li className="icon-content">
                            <a
                                className="web-link"
                                href="https://portfolio-temurbek.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Portfolio"
                            >
                                <img
                                    src="web.png"
                                    className="globe"
                                    alt="Portfolio"
                                />
                            </a>
                        </li>

                    </ul>

                </div>

                {/* Contact */}
                <div className="contactt">
                    <a
                        href="mailto:temurbekalisherov82@gmail.com"
                        className="contact"
                    >
                        <span>Let's Connect</span>

                        {/* Mail icon */}
                        <svg
                            className="contact-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                x="3"
                                y="5"
                                width="18"
                                height="14"
                                rx="2"
                            />

                            <path d="m3 7 9 6 9-6" />
                        </svg>

                        <svg
                            className="arrow-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                        </svg>
                    </a>
                </div>

                {/* Divider */}
                <div className="divider">
                    <span></span>
                </div>

                {/* Quote */}
                <p className="p-head">
                    "Don't rely on AI — build your own skills."
                </p>

                <div className="bottom-label">
                    <span className="status-dot"></span>
                    Available for opportunities
                </div>

            </main>

        </header>
    );
}

export default Header;