import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import Footer from "../components/Footer.jsx";

const ResumeSection = ({ title, children }) => (
  <div className="mt-5 block">
    <h2 className="font-serif text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100 border-b border-slate-900 dark:border-slate-100 pb-0.5 inline-block">
      {title}
    </h2>
    <div className="mt-2">{children}</div>
  </div>
);

const ResumeEntry = ({ title, period, meta, bullets }) => (
  <div className="mt-3 first:mt-0">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-[15px] leading-snug">
        {title}
      </h3>
      {period && (
        <span className="text-sm italic text-slate-600 dark:text-slate-400 shrink-0 sm:pl-4">
          {period}
        </span>
      )}
    </div>
    {meta && (
      <p className="mt-0.5 text-sm italic text-slate-600 dark:text-slate-400">
        {meta}
      </p>
    )}
    {Array.isArray(bullets) && bullets.length > 0 && (
      <ul className="mt-1.5 list-disc pl-5 space-y-1 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const ResumenPage = () => {
  const { t, i18n } = useTranslation();

  const resume = useMemo(() => {
    const data = t("Resume", { returnObjects: true });
    return typeof data === "object" && data !== null ? data : {};
  }, [t, i18n.language]);

  const pdfPath =
    i18n.language === "en"
      ? "/CV/CV_Edu_Armas_English.pdf"
      : "/CV/CV_Edu_Armas_Español.pdf";

  useEffect(() => {
    document.title = `${resume.header?.name || "CV"} | BIGNIGHT.DEV`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && resume.summary) {
      metaDescription.setAttribute("content", resume.summary);
    }
  }, [resume]);

  const experience = Array.isArray(resume.experience) ? resume.experience : [];
  const featuredProjects = Array.isArray(resume.featuredProjects)
    ? resume.featuredProjects
    : [];
  const technologies = Array.isArray(resume.technologies)
    ? resume.technologies
    : [];
  const education = Array.isArray(resume.education) ? resume.education : [];
  const certifications = Array.isArray(resume.certifications)
    ? resume.certifications
    : [];
  const languages = Array.isArray(resume.languages) ? resume.languages : [];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-28 flex flex-col justify-between">
      <main className="w-full">
        <article className="max-w-[820px] mx-auto px-5 sm:px-8 pb-8 md:pb-10">
          <div className="flex justify-end mb-3 gap-3 ">
            <a
              href={resume.header?.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-linkedin-plain colored"></i>
            </a>

            <a
              href={pdfPath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex no-underline items-center gap-1 text-sm font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              {resume.downloadLabel}
            </a>
          </div>

          <header className="text-center border-b border-slate-900 dark:border-slate-100 pb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">
              {resume.header?.name}
            </h1>
            <p className="mt-1 text-base text-slate-800 dark:text-slate-200">
              {resume.header?.role}
            </p>
            <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300">
              {resume.header?.location} · {resume.header?.phone} ·{" "}
              <a
                href={`mailto:${resume.header?.email}`}
                className="text-blue-700 dark:text-blue-400 underline"
              >
                {resume.header?.email}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href={resume.header?.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 underline"
              >
                {resume.header?.linkedinLabel}
              </a>
              {" · "}
              <a
                href={resume.header?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 underline"
              >
                {resume.header?.githubLabel}
              </a>
            </p>
          </header>

          <ResumeSection title={resume.sections?.profile}>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              {resume.summary}
            </p>
          </ResumeSection>

          <ResumeSection title={resume.sections?.experience}>
            {experience.map((item, index) => (
              <ResumeEntry
                key={index}
                title={item.title}
                period={item.period}
                meta={item.meta}
                bullets={item.bullets}
              />
            ))}
          </ResumeSection>

          <ResumeSection title={resume.sections?.featuredProjects}>
            {featuredProjects.map((item, index) => (
              <ResumeEntry
                key={index}
                title={item.title}
                period={item.period}
                meta={item.meta}
                bullets={item.bullets}
              />
            ))}
          </ResumeSection>

          <ResumeSection title={resume.sections?.technologies}>
            <div className="space-y-1 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {technologies.map((item, index) => (
                <p key={index}>
                  <span className="font-semibold">{item.category}:</span>{" "}
                  {item.items}
                </p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title={resume.sections?.education}>
            {education.map((item, index) => (
              <ResumeEntry
                key={index}
                title={item.title}
                period={item.period}
                meta={item.meta}
                bullets={item.bullets}
              />
            ))}
          </ResumeSection>

          <ResumeSection title={resume.sections?.certifications}>
            <div className="space-y-1">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm"
                >
                  <span className="text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                  {item.date && (
                    <span className="italic text-slate-600 dark:text-slate-400 shrink-0">
                      {item.date}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title={resume.sections?.languages}>
            <div className="space-y-1">
              {languages.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="font-medium">{item.language}</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </ResumeSection>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ResumenPage;
