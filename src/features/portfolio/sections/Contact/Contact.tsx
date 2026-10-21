import type { Personal } from '@type/portfolio'
import { CopyIcon, CheckIcon } from '@design/primitives/icons/icons'
import { stripProtocol, mapsUrl } from '@utils/contact'
import { COPY_ATTRS } from '@utils/copy'
import styles from './Contact.module.css'

interface ContactProps {
    heading: string
    personal: Personal
}

function Contact({ heading, personal }: ContactProps) {

    // Labels are the clickable surface; values stay plain text. External
    // links open in a new tab; mailto stays in-page.
    const rows: { label: string; value: string; href?: string; external: boolean }[] = [
        { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, external: false },
        { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, external: false },
        { label: 'Location', value: `${personal.location} · Open to relocate across India`, href: mapsUrl(personal.location), external: true },
        { label: 'GitHub', value: stripProtocol(personal.github), href: personal.github, external: true },
        { label: 'LinkedIn', value: stripProtocol(personal.linkedin), href: personal.linkedin, external: true },
    ]

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>{heading}</h2>

            <dl className={styles.list}>
                {rows.map((row) => (
                    <div key={row.label} className={styles.row}>
                        <dt className={styles.label}>
                            {row.href ? <a
                                href={row.href}
                                className={styles.labelLink}
                                target={row.external ? '_blank' : undefined}
                                rel={row.external ? 'noreferrer' : undefined}
                            >
                                {row.label}
                                <span className={styles.arrow} aria-hidden>↗</span>
                            </a> : <span>{row.label}</span>}
                        </dt>
                        <dd className={styles.value}>
                            <span className={styles.valueText}>{row.value}</span>
                            {row.href && <button
                                type="button"
                                className={styles.copyBtn}
                                {...{ [COPY_ATTRS.copy]: row.value }}
                                aria-label={`Copy ${row.label.toLowerCase()}`}
                            >
                                <CopyIcon className={styles.copyIcon} />
                                <CheckIcon className={styles.checkIcon} />
                            </button>}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

export default Contact
