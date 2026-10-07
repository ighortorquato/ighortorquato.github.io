import { Document, Page, Text, View, Link, StyleSheet } from '@react-pdf/renderer';
import { experience, skillGroups, education, projects, loc } from '@/lib/data';
import { translations, Lang } from '@/lib/translations';

const ACCENT = '#6d4fd1';
const INK = '#1a1a1f';
const MUTED = '#5b5b63';

// data.ts keeps company names as single (non-bilingual) strings; translate the Portuguese-specific ones for the EN resume.
const enOverrides: Record<string, string> = {
  'Rede de Farmácias Estrela': 'Estrela Pharmacy Chain',
  'Tribunal de Justiça do Estado do Paraná · Estágio': 'Paraná State Court of Justice · Internship',
};

const tr = (value: string, lang: Lang) => (lang === 'en' ? (enOverrides[value] ?? value) : value);

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 9.5, color: INK, fontFamily: 'Helvetica', lineHeight: 1.45 },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', color: INK, lineHeight: 1.2 },
  title: { fontSize: 12, color: ACCENT, fontFamily: 'Helvetica-Bold', marginTop: 6, lineHeight: 1.2 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, gap: 10 },
  contactItem: { fontSize: 9, color: MUTED },
  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottom: '1 solid #ddd',
    paddingBottom: 4,
    marginBottom: 8,
  },
  itemRow: { marginBottom: 10 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  itemTitle: { fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: INK },
  itemSub: { fontSize: 9.5, color: ACCENT, fontFamily: 'Helvetica-Bold' },
  itemMeta: { fontSize: 8.5, color: MUTED },
  itemDesc: { fontSize: 9, color: INK, marginTop: 3 },
  itemStack: { fontSize: 8, color: MUTED, marginTop: 3, fontFamily: 'Helvetica-Oblique' },
  skillGroup: { marginBottom: 6, flexDirection: 'row' },
  skillLabel: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: INK, width: 90 },
  skillValue: { fontSize: 9, color: MUTED, flex: 1 },
});

export default function ResumeDocument({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <Document title={`Ighor Torquato dos Santos — ${t.hero.role}`}>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.name}>Ighor Torquato dos Santos</Text>
          <Text style={styles.title}>{t.hero.role}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>ighortorquato@gmail.com</Text>
            <Text style={styles.contactItem}>{t.about.chipLoc}</Text>
            <Link src="https://ighortorquato-cv.vercel.app" style={styles.contactItem}>
              ighortorquato-cv.vercel.app
            </Link>
            <Link src="https://www.linkedin.com/in/ighor-torquato-dos-santos-87050b13b/" style={styles.contactItem}>
              linkedin.com/in/ighor-torquato-dos-santos-87050b13b
            </Link>
            <Link src="https://github.com/ighortorquato" style={styles.contactItem}>
              github.com/ighortorquato
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about.title}</Text>
          {t.about.paragraphs.map((para) => (
            <Text key={para} style={styles.itemDesc}>
              {para}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience.title}</Text>
          {experience.map((exp) => (
            <View key={exp.company} style={styles.itemRow} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {exp.role[lang]} · {tr(exp.company, lang)}
                </Text>
                <Text style={styles.itemMeta}>{exp.period[lang]}</Text>
              </View>
              <Text style={styles.itemMeta}>{exp.location[lang]}</Text>
              {exp.bullets[lang].map((b) => (
                <Text key={b} style={styles.itemDesc}>
                  • {b}
                </Text>
              ))}
              <Text style={styles.itemStack}>{exp.stack.map((s) => loc(s, lang)).join(' · ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.projects.title}</Text>
          {projects.map((p) => (
            <View key={p.id} style={styles.itemRow} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {p.name}
                  {p.isFeatured ? ` · ${t.projects.featured.replace('★ ', '')}` : ''}
                </Text>
                {p.demo || p.github ? (
                  <Link src={(p.demo ?? p.github)!} style={styles.itemMeta}>
                    {p.demo ? 'Demo' : 'GitHub'}
                  </Link>
                ) : null}
              </View>
              <Text style={styles.itemDesc}>{p.description[lang]}</Text>
              <Text style={styles.itemStack}>{p.stack.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{t.ai.title}</Text>
          <Text style={styles.itemDesc}>{t.ai.intro}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.skills.title}</Text>
          {skillGroups.map((group) => (
            <View key={group.key} style={styles.skillGroup}>
              <Text style={styles.skillLabel}>{t.skills.groups[group.key as keyof typeof t.skills.groups]}</Text>
              <Text style={styles.skillValue}>{group.skills.map((s) => loc(s, lang)).join(', ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{t.education.title}</Text>
          {education.map((edu) => (
            <View key={edu.institution} style={styles.itemRow} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {edu.degree[lang]} · {edu.institution}
                </Text>
                <Text style={styles.itemMeta}>{edu.period[lang]}</Text>
              </View>
              <Text style={styles.itemMeta}>{edu.tag[lang]}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
