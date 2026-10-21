import type { Project } from '@type/portfolio'
import { assets } from '@assets'
import WorkCard from '@design/primitives/WorkCard/WorkCard'
import Logo from '@design/primitives/Logo/Logo'
import styles from './Projects.module.css'

interface ProjectsProps {
    heading: string
    items: Project[]
}

function Projects({ heading, items }: ProjectsProps) {
    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.list}>
                {items.map((item) => {
                    const head = (
                        <header className={styles.head}>
                            <div className={styles.primary}>
                                <h3 className={styles.name}>{item.name}</h3>
                                {item.context && (
                                    <p className={styles.context}>
                                        {item.logo && assets.companyLogo(item.logo) && (
                                            <Logo
                                                src={assets.companyLogo(item.logo)}
                                                alt=""
                                                className={styles.logo}
                                            />
                                        )}
                                        <span>{item.context}</span>
                                    </p>
                                )}
                            </div>
                            {item.links && item.links.length > 0 && (
                                <p className={styles.date}>
                                    {item.links.map((link) => (
                                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                            {link.label} ↗
                                        </a>
                                    ))}
                                </p>
                            )}
                        </header>
                    )
                    return (
                        <WorkCard
                            key={item.name}
                            head={head}
                            summary={item.summary}
                            detail={item.detail}
                            tech={item.tech}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
