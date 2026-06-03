import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const ProyectosPage = () => {
  const { t } = useTranslation();

  const projects = useMemo(() => {
    const projectsData = t("ProjectsGrid.projects", { returnObjects: true });
    if (!Array.isArray(projectsData)) return [];
    return [...projectsData].sort((a, b) => a.order - b.order);
  }, [t]);

  const projectDetails = useMemo(() => {
    const detailsData = t("ProjectsDetail.items", { returnObjects: true });
    return Array.isArray(detailsData) ? detailsData : [];
  }, [t]);

  const toSlug = (value = "") =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    document.title = `${t("ProjectsPage.badge")} | BIGNIGHT.DEV`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("ProjectsPage.description"));
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 pt-28 flex flex-col justify-between">
      <main className="w-full">
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-14 pb-20 md:pb-24">
          <div className="border-t border-slate-300 dark:border-slate-800 pt-10 md:pt-14">
            <div className="max-w-4xl mx-auto text-center">
              <p className="uppercase tracking-[0.30em] text-[10px] font-semibold text-violet-600 dark:text-violet-400 mb-5">
                {t("ProjectsPage.badge")}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-[90px] leading-[0.9] font-black tracking-tight text-slate-900 dark:text-slate-100">
                {t("ProjectsPage.title")}
              </h1>
              <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t("ProjectsPage.description")}
              </p>
            </div>

            <div className="mt-14 border-t border-slate-300 dark:border-slate-800 pt-5 md:pt-7">
              <p className="uppercase tracking-[0.30em] text-[10px] font-semibold text-violet-600 dark:text-violet-400 mb-5 md:mb-7">
                {t("ProjectsPage.section_label")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 xl:gap-8">
                {projects.map((project) => {
                  const matchedDetail = projectDetails.find(
                    (detail) => detail.website === project.href
                  );
                  const projectSlug = matchedDetail?.slug || toSlug(project.name);

                  return (
                    <Link
                      key={project.order}
                      to={`/proyectos/${projectSlug}`}
                      className="group block overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
                      aria-label={`${t("ProjectsPage.view_project")}: ${project.name}`}
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={project.img}
                          alt={project.alt || project.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="p-5">
                        <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                          {project.name}
                        </h2>
                        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.description?.split(" ").slice(0, 20).join(" ")}...
                        </p>
                        <div className="mt-5 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                          <span className="uppercase tracking-[0.22em]">
                            {project.skills?.[0] || "Project"}
                          </span>
                          <span>{project.year || "2025"}</span>
                        </div>
                       
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProyectosPage;
