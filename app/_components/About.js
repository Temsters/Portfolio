"use client";

export default function About() {

  //Education stored as an array of objects with degree, school, and year properties.
  const education = [
    {
      degree: "Bachelor of Technology - Software Development",
      school: "Southern Alberta Institute of Technology (SAIT)",
      period: "Fall 2026 - Present",
      gpa:null,
      badge: null

    },
    {
      degree: "Software Development Diploma",
      school: "Southern Alberta Institute of Technology (SAIT)",
      period: "2024 - 2026",
      gpa:"GPA: 3.93",
      badge: "Trojan of the Year"

    }
  ];

  return (
    <section id="about" className="min-h-screen w-full bg-[linear-gradient(180deg,_var(--midnight)_0%,_var(--navy)_100%)] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">About Me</h2>
        <div className="w-16 h-1 bg-[var(--surface)] rounded-3xl mb-10" />
        <div className="flex flex-col sm:flex-row gap-6">

          {/* Left - Bio */}
          <div className="flex-1 max-h-full rounded-xl border border-white/10 bg-[linear-gradient(135deg,_rgba(127,231,227,0.25)_0%,_rgba(41,182,209,0.25)_100%)] p-4 shadow-[0_10px_30px_rgba(2,8,18,0.2)]">
            <p>I&apos;m a software development student and varsity athlete who believes that discipline off the court builds discipline in code. 
              I work across full-stack development, using technology to solve real-world business solutions. 
              I led a team through a smart building analytics platform learning that good software, like good volleyball, requires a great team effort which I truly value.
            </p>
          </div>

          {/* Right - Education */}
          <div className="flex-1 rounded-xl border border-[var(--surface)]/40 bg-[#020812]/80 p-4 flex flex-col gap-4 shadow-[0_10px_30px_rgba(2,8,18,0.25)]">
            <p className="text-lg font-semibold text-white">Education</p>
            {education.map((edu, i) => (
              <div key={i} className="rounded-md border border-blue-500/40 bg-[#0A1F3A] p-4">
                <p className="font-bold text-white text-sm leading-snug">{edu.degree}</p>
                <p className="text-[var(--surface)] text-sm mt-1">{edu.school}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-white/50 text-xs">{edu.period}</p>
                  {edu.gpa && <p className="text-white/50 text-xs">{edu.gpa}</p>}
                </div>
                {edu.badge && (
                  <span className="inline-block mt-2 text-xs bg-[rgba(127,231,227,0.2)] text-[var(--surface)] border border-[var(--surface)]/40 rounded-full px-2 py-0.5">
                    🏆 {edu.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}