import {
  getContactEmail,
  getContactMailtoHref,
  getContactPhoneDisplay,
  getContactPhoneTelHref,
  hasContactChannels,
} from "@/lib/site";
import { ContactEmailField } from "@/components/contact-email-field";

type ReachOutProps = {
  variant?: "prominent" | "compact" | "footer";
  /** Default mailto subject line */
  emailSubject?: string;
  className?: string;
};

function PhoneIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/** Phone + email from public env — primary path until Calendly / Lightspeed booking is wired. */
export function ReachOut({
  variant = "prominent",
  emailSubject = "Showroom visit",
  className = "",
}: ReachOutProps) {
  const phone = getContactPhoneDisplay();
  const tel = getContactPhoneTelHref();
  const email = getContactEmail();
  const mailtoQuick = getContactMailtoHref(emailSubject);

  if (!hasContactChannels()) {
    return (
      <div
        className={`rounded-2xl border border-dashed border-[var(--sl-border-strong)] bg-[color-mix(in_srgb,var(--sl-surface-tonal)_55%,transparent)] px-5 py-4 text-sm leading-relaxed text-[var(--sl-muted)] ${className}`}
      >
        <p className="font-medium text-[var(--sl-ink)]">Contact info</p>
        <p className="mt-2">
          Set{" "}
          <code className="rounded bg-[var(--sl-surface-warm)] px-1.5 py-0.5 text-xs text-[var(--sl-ink)]">
            NEXT_PUBLIC_CONTACT_PHONE
          </code>{" "}
          and/or{" "}
          <code className="rounded bg-[var(--sl-surface-warm)] px-1.5 py-0.5 text-xs text-[var(--sl-ink)]">
            NEXT_PUBLIC_CONTACT_EMAIL
          </code>{" "}
          in your environment to show call and email options on the live site.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <ul className={`flex flex-col gap-2 text-sm text-[var(--sl-muted)] ${className}`}>
        {phone && tel ? (
          <li>
            <a
              href={tel}
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--sl-accent)]"
            >
              <PhoneIcon className="shrink-0 opacity-70" />
              {phone}
            </a>
          </li>
        ) : null}
        {email && mailtoQuick ? (
          <li>
            <a
              href={mailtoQuick}
              className="inline-flex items-center gap-2 break-all transition-colors hover:text-[var(--sl-accent)]"
            >
              <MailIcon className="shrink-0 opacity-70" />
              {email}
            </a>
          </li>
        ) : null}
      </ul>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={`flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center ${className}`}
      >
        {phone && tel ? (
          <a
            href={tel}
            className="sl-btn-primary inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-semibold"
          >
            <PhoneIcon className="shrink-0 opacity-90" />
            {phone}
          </a>
        ) : null}
        {email && mailtoQuick ? (
          <a
            href={mailtoQuick}
            className="sl-btn-secondary inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-semibold"
          >
            <MailIcon className="shrink-0 opacity-80" />
            Email us
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        {phone && tel ? (
          <a
            href={tel}
            className="sl-reach-card group flex flex-col justify-between rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[var(--sl-shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--sl-shadow-card-hover)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sl-muted)]">
                Call
              </span>
              <span className="rounded-full border border-[var(--sl-border)] p-2 text-[var(--sl-primary)] transition-colors group-hover:border-[color-mix(in_srgb,var(--sl-primary)_22%,var(--sl-border))]">
                <PhoneIcon />
              </span>
            </div>
            <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-[var(--sl-ink)]">
              {phone}
            </p>
            <p className="mt-2 text-sm text-[var(--sl-muted)]">
              Fastest way to hold a time while we set up online booking.
            </p>
          </a>
        ) : null}
        {email && mailtoQuick ? (
          <a
            href={mailtoQuick}
            className="sl-reach-card group flex flex-col justify-between rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-[var(--sl-shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--sl-shadow-card-hover)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sl-muted)]">
                Write
              </span>
              <span className="rounded-full border border-[var(--sl-border)] p-2 text-[var(--sl-primary)] transition-colors group-hover:border-[color-mix(in_srgb,var(--sl-primary)_22%,var(--sl-border))]">
                <MailIcon />
              </span>
            </div>
            <p className="mt-6 break-all font-display text-lg font-semibold leading-snug tracking-tight text-[var(--sl-ink)] sm:text-xl">
              {email}
            </p>
            <p className="mt-2 text-sm text-[var(--sl-muted)]">
              Send questions, photos of your space, or a few times that work.
            </p>
          </a>
        ) : null}
      </div>
      {email ? (
        <div className="rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface-warm)]/60 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sl-muted)]">
            Draft in your mail app
          </p>
          <p className="mt-2 text-sm text-[var(--sl-muted)]">
            Add an optional note — we&apos;ll open your email client with it filled in.
          </p>
          <div className="mt-4">
            <ContactEmailField email={email} defaultSubject={emailSubject} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
