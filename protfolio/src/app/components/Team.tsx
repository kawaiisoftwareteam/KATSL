import React from "react";
import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
  const members = [
    {
      name: "Kenshin Sato",
      role: "Founder & Managing Director",
      bio: "Over 15 years of experience building mission-critical systems. Kenshin sets our technological direction and oversees the scaling of our enterprise solutions.",
      image: "/team_kenshin.png",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Aria Tanaka",
      role: "Chief Technology Officer",
      bio: "Specialist in AI systems, high-throughput cloud pipelines, and vector integrations. Aria leads our engineering team to solve complex technical challenges.",
      image: "/team_aria.png",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ren Takahashi",
      role: "Chief Design Officer",
      bio: "Passionate about human-centered interfaces and branding. Ren crafts digital design systems that make enterprise software intuitive, beautiful, and engaging.",
      image: "/team_ren.png",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Yuki Watanabe",
      role: "Principal Software Architect",
      bio: "Expert in cross-platform mobile architectures and modern API design. Yuki guides the development of lightweight, highly performant client applications.",
      image: "/team_yuki.png",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team" className={`${styles.team} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Our Team</h2>
          <span className={styles.titleLine}></span>
          <p className={styles.subtitle}>
            Meet the engineers, designers, and strategists behind Kawaii Advance Technology & Software Ltd. (KATSL). We are dedicated to building robust digital infrastructure.
          </p>
        </div>

        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.memberImage}
                  style={{ objectFit: "cover" }}
                  priority={index < 2} // priority load first couple of images
                />
              </div>

              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={member.role === "Founder & Managing Director" ? styles.memberRole : styles.memberRole}>
                  {member.role}
                </span>
                <p className={member.bio === "" ? "" : styles.memberBio}>{member.bio}</p>

                <div className={styles.socials}>
                  <a href={member.linkedin} className={styles.socialLink} aria-label={`${member.name}'s LinkedIn`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href={member.github} className={styles.socialLink} aria-label={`${member.name}'s GitHub`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href={member.twitter} className={styles.socialLink} aria-label={`${member.name}'s Twitter`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
