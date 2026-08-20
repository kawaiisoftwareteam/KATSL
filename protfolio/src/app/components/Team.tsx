import React from "react";
import Image from "next/image";
import { optimizedBlur, optimizedSrc } from "@/lib/site-images";
import styles from "./Team.module.css";

export default function Team({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const members = [
    {
      name: "Dewan Samir",
      role: "Chief Executive Officer",
      bio: "CEO of Kawaii Group spanning Information Technology, Human Resources, Manpower Export, Apparel, Automobile, Real Estate, and Consultant for Foreign Direct Investments & Trading in Bangladesh.",
      image: "/Dewan Samir.jpeg",
      linkedin: "https://www.linkedin.com/in/dewan-samir/",
      email: "dewan.samir2010@gmail.com",
    },
  ];

  return (
    <section id="team" className={`${styles.team} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <Heading className={styles.title}>Our Team</Heading>
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
                  src={optimizedSrc(member.image)}
                  alt={member.name}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={optimizedBlur(member.image)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className={styles.memberImage}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={member.role === "Founder & Managing Director" ? styles.memberRole : styles.memberRole}>
                  {member.role}
                </span>
                <p className={member.bio === "" ? "" : styles.memberBio}>{member.bio}</p>

                <div className={styles.socials}>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label={`${member.name}'s LinkedIn`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className={styles.socialLink} aria-label={`Email ${member.name}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
