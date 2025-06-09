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
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I'm a passionate Computer Science Engineering student at AIT with expertise in
            MERN Stack, AWS, Salesforce CRM, Data Science, and AI/ML. My journey spans
            from building robust web applications with React.js and Next.js to developing
            innovative IoT solutions and implementing AI-powered testing frameworks.
            With hands-on experience in cloud technologies, OCR systems, and image processing,
            I've successfully delivered projects ranging from disaster recovery systems to
            smart healthcare solutions. Currently pursuing my B.E. with a CGPA of 8.79,
            I'm actively contributing to the tech community through hackathons and open-source projects.
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
            8.79{" "}
            <sub className="font-semibold text-base">CGPA (B.E. CSE)</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=KushalJetty&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=KushalJetty&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,java,c,js,react,nextjs,nodejs,django,flask,aws,mongodb,mysql,postgres,selenium,git,github,html,css,tailwind,bootstrap,figma,vscode,linux,docker`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=KushalJetty&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Kushal Jetty"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div className="w-full h-auto bg-background/50 backdrop-blur-sm border border-accent/30 rounded-lg p-6">
            <h3 className="text-accent font-semibold text-lg mb-4">Achievements & Experience</h3>
            <ul className="text-foreground text-sm space-y-2">
              <li>• Intern at HAL (Digital Signature Project)</li>
              <li>• Intern at StreamzAI (Testing Framework)</li>
              <li>• National/Inter Level Hackathon Wins</li>
              <li>• IEEE Conference Volunteer</li>
              <li>• Hackathon Coordinator</li>
              <li>• First Place in Debugging Competition</li>
              <li>• 150+ DSA Problems Solved on GeeksforGeeks</li>
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div className="w-full h-auto bg-background/50 backdrop-blur-sm border border-accent/30 rounded-lg p-6">
            <h3 className="text-accent font-semibold text-lg mb-4">Education</h3>
            <div className="text-foreground text-sm space-y-3">
              <div>
                <p className="font-semibold">B.E. Computer Science Engineering</p>
                <p className="text-muted">AIT (2021–2025) • CGPA: 8.79</p>
              </div>
              <div>
                <p className="font-semibold">PUC</p>
                <p className="text-muted">Shri Sai Angels College (2021) • 90.83%</p>
              </div>
              <div>
                <p className="font-semibold">SSLC</p>
                <p className="text-muted">St. Mary's High School (2019) • 90.88%</p>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0"}>
          <div className="w-full h-auto bg-background/50 backdrop-blur-sm border border-accent/30 rounded-lg p-6">
            <h3 className="text-accent font-semibold text-lg mb-4">Hobbies & Interests</h3>
            <div className="text-foreground text-sm">
              <p>When I'm not coding, you can find me playing chess, swimming, or exploring the latest trends in AI and machine learning. I enjoy participating in hackathons and contributing to open-source projects, always looking for new challenges to expand my skillset.</p>
            </div>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
