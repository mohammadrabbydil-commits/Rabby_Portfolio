import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Lets the last card fill its row when it would otherwise sit alone, so the
 * grid stays balanced however many groups are in the data file.
 */
function lastCardSpan(index: number, total: number): string | undefined {
  if (index !== total - 1) return undefined;
  const twoColumnSpan = total % 2 === 1 ? "sm:col-span-2" : undefined;
  const threeColumnSpan = total % 3 === 1 ? "lg:col-span-3" : "lg:col-span-1";
  return cn(twoColumnSpan, threeColumnSpan);
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="The toolkit behind the work."
      className="bg-paper-deep"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.category}
            delay={(index % 3) * 0.06}
            className={cn(
              "rounded-sm border border-rule bg-paper p-6 sm:p-7",
              lastCardSpan(index, skillGroups.length),
            )}
          >
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              {group.category}
            </h3>
            <TagList items={group.skills} label={group.category} className="mt-5" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
