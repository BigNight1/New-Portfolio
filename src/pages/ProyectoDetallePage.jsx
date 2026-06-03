import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer.jsx";

const ProyectoDetallePage = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();

  const projects = useMemo(() => {
    const data = t("ProjectsDetail.items", { returnObjects: true });
    return Array.isArray(data) ? data : [];
  }, [t, i18n.language]);

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [projects, slug]
  );

  useEffect(() => {
    const title = project
      ? `${project.name} | BIGNIGHT.DEV`
      : `${t("ProjectsDetail.not_found_title")} | BIGNIGHT.DEV`;
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        project?.summary || t("ProjectsDetail.not_found_description")
      );
    }
  }, [project, t]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-28 flex flex-col justify-between">
      <main className="w-full">
        <section className="max-w-[980px] mx-auto px-6 md:px-10 pb-20 md:pb-24">
          <div className="border-t border-slate-300 dark:border-slate-800 pt-10 md:pt-14">
            <p className="uppercase tracking-[0.30em] text-[10px] font-semibold text-violet-600 dark:text-violet-400 mb-5">
              {t("ProjectsDetail.badge")}
            </p>

            {!project ? (
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                  {t("ProjectsDetail.not_found_title")}
                </h1>
                <p className="mt-5 text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {t("ProjectsDetail.not_found_description")}
                </p>
                <Link
                  to="/proyectos"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  {t("ProjectsDetail.back_to_projects")}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ) : (
              <article>
                <header className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                    {project.name}
                  </h1>
                  <p className="mt-5 mx-auto max-w-3xl text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                  {project.website && project.website !== "#" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                      {project.website}
                    </a>
                  )}
                </header>

                <div className="mt-12 border-t border-slate-300 dark:border-slate-800 pt-8">
                  <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={project.heroImage}
                      alt={project.heroAlt || project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {Array.isArray(project.tech) &&
                    project.tech.map((techItem, index) => (
                      <span
                        key={index}
                        className="text-xs uppercase tracking-[0.18em] px-3 py-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {techItem}
                      </span>
                    ))}
                </div>

                <Link
                  to="/proyectos"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  {t("ProjectsDetail.back_to_projects")}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProyectoDetallePage;
