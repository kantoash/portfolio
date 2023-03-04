import { groq } from "next-sanity";
import React from "react";
import About from "../../components/About";
import ContactMe from "../../components/ContactMe";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { client } from "../../lib/sanity.client";
import { PageInfo, Project, Skill, Social } from "../../typing";
import { previewData } from "next/headers";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewPage from "../../components/PreviewPage";

const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
`;

const socialsQuery = groq`
  *[_type == "social"]
`;

const projectQuery = groq`
  *[_type == "project"]{
      ...,
      technologies[]->
  }
`;

const skillQuery = groq`
 *[_type == "skill"]
`;

export const revalidate = 30;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewPage />
      </PreviewSuspense>
    );
  }
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  const socials: Social[] = await client.fetch(socialsQuery);
  const projects: Project[] = await client.fetch(projectQuery);
  const skills: Skill[] = await client.fetch(skillQuery);

  return (
    <div className="bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="About" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
