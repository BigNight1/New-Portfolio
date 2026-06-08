import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import Footer from "../components/Footer.jsx";

const ContactoPage = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitting: true, success: false, error: false });

    // SIMULATED SENDING (To be configured by user with EmailJS, Web3Forms, etc.)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, success: true, error: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 flex flex-col justify-between">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120px,rgba(99,102,241,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_120px,rgba(167,139,250,0.12),transparent_55%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 w-full flex-1 flex flex-col justify-center mb-16 relative z-10">
        
        {/* Header navigation */}
       

        <div className="w-full">
          {/* Title & Subtitle matching the beautiful design */}
          <div className="mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-violet-700 dark:text-violet-400 mb-4 tracking-tight leading-none">
              {t("Contacto.title")}
            </h1>
            <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 max-w-2xl font-bold leading-relaxed">
              {t("Contacto.subtitle")}
            </p>
          </div>

          {/* Form container */}
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Name Field */}
              <div className="flex flex-col">
                <label 
                  htmlFor="name" 
                  className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2"
                >
                  {t("Contacto.label_name")}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("Contacto.placeholder_name")}
                  className="border-b border-slate-400 dark:border-slate-500 bg-transparent py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:border-violet-600 dark:focus:border-violet-400 focus:outline-none transition-colors w-full text-base sm:text-lg"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label 
                  htmlFor="email" 
                  className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2"
                >
                  {t("Contacto.label_email")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("Contacto.placeholder_email")}
                  className="border-b border-slate-400 dark:border-slate-500 bg-transparent py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:border-violet-600 dark:focus:border-violet-400 focus:outline-none transition-colors w-full text-base sm:text-lg"
                />
              </div>

            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label 
                htmlFor="message" 
                className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2"
              >
                {t("Contacto.label_message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("Contacto.placeholder_message")}
                className="border-b border-slate-400 dark:border-slate-500 bg-transparent py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:border-violet-600 dark:focus:border-violet-400 focus:outline-none transition-colors w-full text-base sm:text-lg resize-none"
              />
            </div>

            {/* Form feedback status alerts */}
            {status.success && (
              <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 dark:text-emerald-400 transition-all">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">{t("Contacto.success_title")}</h4>
                  <p className="text-xs sm:text-sm mt-0.5">{t("Contacto.success_message")}</p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-600 dark:text-rose-400 transition-all">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm font-medium">{t("Contacto.error_message")}</p>
              </div>
            )}

            {/* Shoot Button matching target design precisely */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status.submitting}
                className="group relative inline-flex items-center justify-between border border-violet-600 dark:border-violet-400 text-violet-700 dark:text-violet-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-slate-950 font-bold uppercase tracking-widest text-xs px-10 py-5 transition-all duration-300 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed select-none"
              >
                <span className="mr-8">
                  {status.submitting ? t("Contacto.sending") : t("Contacto.btn_submit")}
                </span>
                <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                  ──→
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ContactoPage;
