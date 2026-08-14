"use client";

import { SiPython, SiDotnet, SiOpenjdk, SiJavascript, SiFirebase, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMariadb, SiDocker, SiVercel, SiGit, SiMysql, SiCss, SiHtml5, SiFigma, SiChartdotjs } from "react-icons/si";
import { Cloud, Bot, TrendingUp, LayoutDashboard } from "lucide-react";

export default function Skills() {

  // Skills grouped by category
  const skills = {
    "Programming Languages": [
      { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
      { name: "C#", icon: <SiDotnet size={24} color="#512BD4" /> },
      { name: "Java", icon: <SiOpenjdk size={24} color="#ED8B00" /> },
    ],
    "Frontend Development": [
      { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={24} color="#ffffff" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#06B6D4" /> },
      { name: "HTML5", icon: <SiHtml5 size={24} color="#E34F26" /> },
      { name: "CSS", icon: <SiCss size={24} color="#1572B6" /> },
      { name: "Chart.js", icon: <SiChartdotjs size={24} color="#FF6384" /> },
    ],
    "Backend Development": [
      { name: "Node.js", icon: <SiNodedotjs size={24} color="#ffffff" /> },
      { name: "MariaDB", icon: <SiMariadb size={24} color="#003545" /> },
      { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
      { name: "Firebase", icon: <SiFirebase size={24} color="#FFCA28" /> },
    ],
    "Cloud & Deployment": [
      { name: "Azure", icon: <Cloud size={24} color="#0078D4" /> },
      { name: "Docker", icon: <SiDocker size={24} color="#2496ED" /> },
      { name: "Vercel", icon: <SiVercel size={24} color="#ffffff" /> },
    ],
    "AI & Tools": [
      { name: "OpenAI", icon: <Bot size={24} color="#10A37F" /> },
      { name: "Prophet", icon: <TrendingUp size={24} color="#22C55E" /> },
      { name: "Git", icon: <SiGit size={24} color="#F05032" /> },
      { name: "Jira", icon: <LayoutDashboard size={24} color="#0052CC" /> },
      { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },
    ],
  };

  return (
    <section id="skills" className="min-h-screen w-full bg-[linear-gradient(180deg,_var(--navy)_0%,_var(--deep-blue)_100%)] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Skills</h2>
        <div className="w-16 h-1 bg-[var(--surface)] rounded-3xl mb-10" />

        <div className="space-y-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <div className="mb-3 inline-flex rounded-full border border-[var(--surface)]/40 bg-[rgba(127,231,227,0.12)] px-4 py-2 text-sm font-medium text-[var(--surface)]">
                {category}
              </div>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 rounded-lg border border-white/15 bg-[#020812]/90 px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(127,231,227,0.08),0_8px_24px_rgba(2,8,18,0.28)] transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(127,231,227,0.18),0_10px_28px_rgba(41,182,209,0.18)]">
                    <span className="flex items-center justify-center">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}