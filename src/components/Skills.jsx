import { skills } from "../data/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-[#111827]/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Kemampuan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proficiency Skills</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Teknologi yang saya kuasai dan gunakan sehari-hari dalam pengembangan proyek.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0A0A0F] rounded-xl p-4 border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col items-center text-center gap-2"
            >
              <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
              <span className="font-medium text-white text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
