import React, { useEffect, useRef } from "react";

const team = [
  { name: "Asadulloh", role: "CEO", photo: "/assets/team1.jpg" },
  {
    name: "Abdurahmon",
    role: "Head of AI & Web (6+ years)",
    photo: "/assets/team2.jpg",
  },
  {
    name: "Hikmatulloh",
    role: "Mobile Lead (8+ years)",
    photo: "/assets/team3.jpg",
  },
  {
    name: "Bunyodbek",
    role: "Backend and IOT Developer(6+ years)",
    photo: "/assets/team4.jpg",
  },
  {
    name: "Xushnudbek",
    role: "Flutter Developer (4+ years)",
    photo: "/assets/team5.jpg",
  },
  {
    name: "Diyorbek",
    role: "Frontend Developer (2+ years)",
    photo: "/assets/team6.jpg",
  },
  {
    name: "Jamshid",
    role: "PHP Developer (2+ years)",
    photo: "/assets/team6.jpg",
  },
  {
    name: "Qodirxon",
    role: "Frontend Developer (1+ years)",
    photo: "/assets/team6.jpg",
  },
];

export default function Team() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let id = setInterval(() => {
      el.scrollBy({ left: 260, behavior: "smooth" });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="team" className="py-16 bg-white/5">
      <h2 className="text-3xl font-semibold text-center">
        Our Team (Uzbekistan)
      </h2>
      <div ref={ref} className="mt-8 overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-8 w-max mx-auto">
          {team.map((m) => (
            <div key={m.name} className="shrink-0 w-[240px] text-center">
              <div className="mx-auto size-56 rounded-full overflow-hidden bg-slate-700">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 font-semibold">{m.name}</div>
              <div className="text-slate-400 text-sm">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
