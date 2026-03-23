"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Python", "Java", "Solidity", "Javascript", "Golang", "PHP", "SQL", "HTML & CSS"]
  },
  {
    title: "Frontend development",
    skills: ["React", "Angular", "Tailwind", "Next.js"]
  },
  {
    title: "Backend development",
    skills: ["MERN Stack", "Django Framework", "Flask", "REST api", "websocket"]
  },
  {
    title: "Cloud & CRM",
    skills: ["Amazon Web Services (AWS)", "Google cloud platform", "Salesforce CRM"]
  },
  {
    title: "Data Science & ML",
    skills: ["Numpy", "Pandas", "Matplotlib", "Scikit-learn", "Langchain", "LangGraph", "OCR", "Image Processing", "MCP"]
  },
  {
    title: "Automation & Testing",
    skills: ["Selenium", "Playwright"]
  },
  {
    title: "Development & Operations",
    skills: ["Git", "Bash", "Docker", "Kubernetes"]
  },
  {
    title: "Others",
    skills: ["ubuntu", "Claude cli", "ollama", "JIRA", "Scrum", "Agile development"]
  }
];

const experiences = [
  {
    role: "Member of Technical Staff",
    company: "StreamzAI",
    date: "Aug 2025 – Present",
    desc: "Developing scalable backend systems and REST APIs. Leveraging LangChain and image processing to build intelligent automation frameworks within an Agile environment."
  },
  {
    role: "Technical Intern",
    company: "StreamzAI",
    date: "Feb 2025 – July 2025",
    desc: "Focused on web automation and testing frameworks using Flask and Playwright."
  },
  {
    role: "Research & Development Intern",
    company: "HAL",
    date: "Apr 2024 – May 2024",
    desc: "Engineered an offline digital signature system using SHA-256 and public-private key cryptography for secure document authentication."
  }
];

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Member of Technical Staff & AI Enthusiast
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I'm a passionate Computer Science Engineering graduate from AIT with a CGPA of 8.83,
            currently working as a Member of Technical Staff at StreamzAl. My expertise spans across
            Backend Development (Python, Golang, MERN), Cloud Infrastructure (AWS, GCP), and AI/ML
            (Langchain, LangGraph, Computer Vision). I have led and contributed to projects like
            AI-powered CI/CD testing frameworks and secure digital signature systems. With hands-on
            experience in automation, DevOps, and blockchain (Solidity), I continue to push boundaries
            through my open-source contributions, research publications, and award-winning hackathon performances.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            150+ <sub className="font-semibold text-base">DSA Problems Solved</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">Years Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=KushalJetty&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=KushalJetty&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=KushalJetty&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full flex-col items-start"}>
          <h3 className="text-accent font-semibold text-2xl mb-8 w-full">TECHNICAL SKILLS</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 text-sm font-medium bg-background/50 border border-white/10 rounded-full hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(254,254,91,0.4)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ItemLayout>


        <div className={"col-span-full custom-bg p-6 sm:p-8 rounded-xl flex-col items-center overflow-hidden"}>
          <h3 className="text-accent font-semibold text-2xl mb-12 w-full text-center">EXPERIENCE</h3>
          <div className="w-full relative py-8 max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full"></div>

            <div className="w-full space-y-12 md:space-y-20">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative w-full flex flex-col md:flex-row justify-center items-start md:items-start">
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute left-[15px] md:left-1/2 top-6 md:top-8 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent border-4 border-background shadow-[0_0_15px_rgba(254,254,91,0.6)] z-10"
                    ></motion.div>

                    {/* Card container */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                      className={`w-full md:w-[45%] pl-12 md:pl-0 flex flex-col ${isLeft ? 'md:mr-auto justify-center md:items-end text-left md:text-right' : 'md:ml-auto justify-center md:items-start text-left'}`}
                    >
                      <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} mb-2`}>
                        <h4 className="font-semibold text-lg md:text-xl text-foreground">{exp.role}</h4>
                        <span className="text-accent font-medium text-sm md:text-base">{exp.company}</span>
                        <span className="text-xs text-muted mt-2 inline-block bg-white/5 py-1.5 px-4 rounded-full border border-white/10 shadow-sm">{exp.date}</span>
                      </div>
                      <p className={`text-sm text-foreground/80 mt-3 md:mt-4 bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-default relative`}>
                        {exp.desc}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ItemLayout className={"col-span-full md:col-span-6 flex-col items-start"}>
          <h3 className="text-accent font-semibold text-lg mb-4 w-full">Education</h3>
          <div className="text-foreground text-sm space-y-4 w-full">
            <div>
              <p className="font-semibold">B.E. Computer Science Engineering</p>
              <p className="text-muted">Adichunchanagiri Institute of Technology (2021–2025) • CGPA: 8.83</p>
            </div>
            <div>
              <p className="font-semibold">PUC</p>
              <p className="text-muted">Sri Sai Angels Pre-University College (2021) • 90.83%</p>
            </div>
            <div>
              <p className="font-semibold">SSLC</p>
              <p className="text-muted">St. Mary's High School (2019) • 90.88%</p>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 flex-col items-start"}>
          <h3 className="text-accent font-semibold text-lg mb-4 w-full">Certificates & Achievements</h3>
          <ul className="text-foreground text-sm space-y-2 w-full list-disc pl-4">
            <li>1st Place Winner - National Level Hackathon</li>
            <li>1st Place Winner - IoT Innovation (Get-Set-Pill)</li>
            <li>1st Place Winner - Debugging Competition</li>
            <li>150+ DSA Problems Solved on GeeksforGeeks</li>
            <li>IEEE International Conference Volunteer</li>
          </ul>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 flex-col items-start"}>
          <h3 className="text-accent font-semibold text-lg mb-4 w-full">Publications</h3>
          <ul className="text-foreground text-sm space-y-2 w-full list-disc pl-4">
            <li><a href="https://www.ijert.org/intelligent-diagnosis-and-classification-of-gastrointestinal-ailments-using-endoscopic-imaging-and-deep-learning">Gastrointestinal Disease detection from endoscopic images using deep learning techniques.</a></li>
            <li><a href="https://link.springer.com/chapter/10.1007/978-3-032-13544-5_28">CodeSourcerer: A Proxy-Based Test Generation System for GitHub CI/CD Pipelines. </a></li>
          </ul>
        </ItemLayout>
        <ItemLayout className={"col-span-full flex-col items-start"}>
          <h3 className="text-accent font-semibold text-lg mb-4 w-full">Hobbies & Interests</h3>
          <div className="text-foreground text-sm w-full">
            <p>When I'm not coding, you can find me playing chess, swimming, or exploring the latest trends in AI and machine learning. I enjoy participating in hackathons and contributing to open-source projects, always looking for new challenges to expand my skillset.</p>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
