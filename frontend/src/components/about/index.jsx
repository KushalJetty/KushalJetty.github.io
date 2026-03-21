import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

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

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,java,c,js,react,tailwind,nodejs,django,flask,aws,gcp,mongodb,mysql,postgres,git,github,html,css,bash,ubuntu,docker,golang,solidity`}
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
          <h3 className="text-accent font-semibold text-lg mb-4 w-full">Experience</h3>
          <div className="w-full space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-1">
                <h4 className="font-semibold text-base text-foreground">Member of Technical Staff | StreamzAI</h4>
                <span className="text-xs text-muted">Aug 2025 – Present</span>
              </div>
              <p className="text-sm text-foreground/80 mt-1">Developing scalable backend systems and REST APIs. Leveraging LangChain and image processing to build intelligent automation frameworks within an Agile environment.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-1">
                <h4 className="font-semibold text-base text-foreground">Technical Intern | StreamzAI</h4>
                <span className="text-xs text-muted">Feb 2025 – July 2025</span>
              </div>
              <p className="text-sm text-foreground/80 mt-1">Focused on web automation and testing frameworks using Flask and Playwright.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-1">
                <h4 className="font-semibold text-base text-foreground">Research & Development Intern | HAL</h4>
                <span className="text-xs text-muted">Apr 2024 – May 2024</span>
              </div>
              <p className="text-sm text-foreground/80 mt-1">Engineered an offline digital signature system using SHA-256 and public-private key cryptography for secure document authentication.</p>
            </div>
          </div>
        </ItemLayout>

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
