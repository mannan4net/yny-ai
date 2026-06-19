import { motion } from "framer-motion";
import { teamData } from "@/data";

export function Leadership() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Leadership</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-sm font-medium text-accent">{member.title}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}