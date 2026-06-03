import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Globe, 
  Laptop, 
  ShoppingBag, 
  Server, 
  Calendar, 
  DollarSign, 
  Send, 
  ShieldAlert,
  Database,
  Lock,
  Package,
  MessageSquare,
  Truck,
  FileText,
  Layers
} from "lucide-react";
import Footer from "../components/Footer.jsx";

const CalculadoraPage = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  
  // Form State
  const [projectType, setProjectType] = useState(""); // landing, app, ecommerce, backend
  const [selectedFeatures, setSelectedFeatures] = useState([]); // payment, admin, auth, etc.
  const [timeline, setTimeline] = useState("standard"); // fast, standard, flexible
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pricing Rules
  const pricingConfig = {
    basePrice: {
      landing: 150,
      app: 250,
      ecommerce: 800,
      backend: 500
    },
    features: {
      landing: {
        contact_form: 50,
        seo: 80,
        i18n: 100,
        blog: 150,
        social_integration: 50
      },
      app: {
        auth: 150,
        admin: 300,
        payment: 200,
        inventory: 250,
        realtime: 150,
        api_integration: 150
      },
      ecommerce: {
        payment: 200,
        admin: 300,
        inventory_sync: 200,
        coupons: 100,
        shipping: 150,
        i18n: 100
      },
      backend: {
        db_design: 150,
        auth_jwt: 150,
        swagger: 100,
        payment_webhooks: 200,
        cron_jobs: 100
      }
    },
    timeline: {
      fast: 150,
      standard: 0,
      flexible: -50
    }
  };

  // Calculate Price dynamically
  const totalPrice = useMemo(() => {
    if (!projectType) return 0;
    
    let price = pricingConfig.basePrice[projectType] || 0;
    
    selectedFeatures.forEach(feature => {
      price += pricingConfig.features[projectType]?.[feature] || 0;
    });
    
    price += pricingConfig.timeline[timeline] || 0;
    
    return price < 0 ? 0 : price;
  }, [projectType, selectedFeatures, timeline]);

  const handleTypeSelect = (type) => {
    setProjectType(type);
    setSelectedFeatures([]); // Limpia la selección anterior al cambiar de tipo
    setStep(2);
  };

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData({
      ...leadData,
      [name]: value
    });
  };

  const handleNext = () => {
    if (step === 1 && !projectType) return;
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leadData.name || !leadData.email || !leadData.phone) {
      alert("Por favor completa los campos requeridos.");
      return;
    }

    // Build the WhatsApp message
    const projectTypeName = t(`Calculadora.project_types.${projectType}.title`);
    const timelineName = t(`Calculadora.timelines.${timeline}`);
    const featuresList = selectedFeatures.map(f => t(`Calculadora.features.${projectType}.${f}`)).join(", ");
    
    const message = `Hola Edu, utilicé tu calculadora de presupuesto en bignight.dev.\n\n*Detalles del Proyecto:*\n- *Tipo:* ${projectTypeName}\n- *Características:* ${featuresList || "Ninguna adicional"}\n- *Plazo:* ${timelineName}\n- *Presupuesto Estimado:* $${totalPrice} USD\n\n*Datos de Contacto:*\n- *Nombre:* ${leadData.name}\n- *Email:* ${leadData.email}\n- *WhatsApp:* ${leadData.phone}\n- *Descripción:* ${leadData.desc || "Ninguna"}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/51965728013?text=${encodedMessage}`;
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappLink, "_blank");
    setIsSubmitted(true);
  };

  const projectTypesList = [
    { id: "landing", icon: Globe, color: "from-cyan-400 to-blue-500" },
    { id: "app", icon: Laptop, color: "from-indigo-500 to-purple-600" },
    { id: "ecommerce", icon: ShoppingBag, color: "from-emerald-400 to-teal-500" },
    { id: "backend", icon: Server, color: "from-amber-400 to-orange-500" }
  ];

  const featuresMapping = {
    landing: [
      { id: "contact_form", icon: FileText },
      { id: "seo", icon: Globe },
      { id: "i18n", icon: Globe },
      { id: "blog", icon: FileText },
      { id: "social_integration", icon: MessageSquare }
    ],
    app: [
      { id: "auth", icon: Lock },
      { id: "admin", icon: Laptop },
      { id: "payment", icon: DollarSign },
      { id: "inventory", icon: Package },
      { id: "realtime", icon: MessageSquare },
      { id: "api_integration", icon: Layers }
    ],
    ecommerce: [
      { id: "payment", icon: DollarSign },
      { id: "admin", icon: Laptop },
      { id: "inventory_sync", icon: Database },
      { id: "coupons", icon: DollarSign },
      { id: "shipping", icon: Truck },
      { id: "i18n", icon: Globe }
    ],
    backend: [
      { id: "db_design", icon: Database },
      { id: "auth_jwt", icon: Lock },
      { id: "swagger", icon: FileText },
      { id: "payment_webhooks", icon: Layers },
      { id: "cron_jobs", icon: Calendar }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Navigation */}
        <Link 
          to="/servicio" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("ServicioPage.back_to_home")}
        </Link>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 dark:text-white mb-3 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("Calculadora.title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("Calculadora.subtitle")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full mb-10 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Form Container */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-gray-200/50 dark:border-slate-700/50 rounded-3xl p-6 sm:p-10 shadow-xl mb-12">
          
          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {t("Calculadora.step1_title")}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("Calculadora.step1_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypesList.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => handleTypeSelect(type.id)}
                      className={`relative overflow-hidden text-left p-6 rounded-2xl border transition-all duration-300 ${
                        isSelected 
                          ? "border-cyan-400 ring-2 ring-cyan-400/20 bg-cyan-50/20 dark:bg-cyan-900/10" 
                          : "border-gray-200/60 dark:border-slate-700/60 hover:border-cyan-400/50 bg-gray-50/50 dark:bg-slate-900/40"
                      }`}
                    >
                      <div className="flex gap-4 items-start">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${type.color} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                            {t(`Calculadora.project_types.${type.id}.title`)}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {t(`Calculadora.project_types.${type.id}.desc`)}
                          </p>
                          <span className="inline-block mt-3 text-sm font-black text-cyan-600 dark:text-cyan-400 bg-cyan-100/40 dark:bg-cyan-950/40 px-2.5 py-0.5 rounded-full">
                            Base: ${pricingConfig.basePrice[type.id]} USD
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: ADDITIONAL FEATURES */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {t("Calculadora.step2_title")}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("Calculadora.step2_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(featuresMapping[projectType] || []).map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  const Icon = feat.icon;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`relative flex items-center justify-between text-left p-5 rounded-2xl border transition-all duration-300 ${
                        isSelected 
                          ? "border-indigo-400 ring-2 ring-indigo-400/20 bg-indigo-50/20 dark:bg-indigo-900/10" 
                          : "border-gray-200/60 dark:border-slate-700/60 hover:border-indigo-400/50 bg-gray-50/50 dark:bg-slate-900/40"
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                          isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "border-gray-300 dark:border-slate-600"
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        {Icon && <Icon className="w-4 h-4 text-gray-400 dark:text-slate-400" />}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t(`Calculadora.features.${projectType}.${feat.id}`)}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap bg-indigo-100/50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-full">
                        +${pricingConfig.features[projectType]?.[feat.id]} USD
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons inside card */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                >
                  {t("Calculadora.btn_prev")}
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-sm font-bold text-white transition-all"
                >
                  {t("Calculadora.btn_next")}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: TIMELINE */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {t("Calculadora.step3_title")}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("Calculadora.step3_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(pricingConfig.timeline).map((timeKey) => {
                  const isSelected = timeline === timeKey;
                  const priceImpact = pricingConfig.timeline[timeKey];
                  return (
                    <button
                      key={timeKey}
                      onClick={() => setTimeline(timeKey)}
                      className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                        isSelected 
                          ? "border-emerald-400 ring-2 ring-emerald-400/20 bg-emerald-50/20 dark:bg-emerald-900/10" 
                          : "border-gray-200/60 dark:border-slate-700/60 hover:border-emerald-400/50 bg-gray-50/50 dark:bg-slate-900/40"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-gray-800 dark:text-white text-base">
                        {t(`Calculadora.timelines.${timeKey}`)}
                      </h3>
                      <span className={`inline-block mt-3 text-xs font-bold px-2 py-0.5 rounded-full ${
                        priceImpact > 0 
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400" 
                          : priceImpact < 0 
                            ? "bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-400"
                            : "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
                      }`}>
                        {priceImpact > 0 && `+$${priceImpact} USD`}
                        {priceImpact < 0 && `-$${Math.abs(priceImpact)} USD (Descuento)`}
                        {priceImpact === 0 && "Sin costo adicional"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons inside card */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                >
                  {t("Calculadora.btn_prev")}
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-sm font-bold text-white transition-all"
                >
                  {t("Calculadora.btn_next")}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: LEAD GENERATION & SUMMARY */}
          {step === 4 && (
            <div className="space-y-8">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {t("Calculadora.step4_title")}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("Calculadora.step4_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                
                {/* Price Display Widget */}
                <div className="md:col-span-2 flex flex-col justify-center items-center p-6 bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-slate-950 dark:to-indigo-950 rounded-2xl text-white text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />
                  <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">
                    {t("Calculadora.estimated_price")}
                  </span>
                  <div className="flex items-center text-5xl sm:text-6xl font-black text-cyan-300 mb-2">
                    <span className="text-3xl font-medium">$</span>
                    <span>{totalPrice}</span>
                  </div>
                  <span className="text-xs text-indigo-300">
                    USD * (Estimado básico)
                  </span>
                  
                  {/* Small badge list */}
                  <div className="w-full border-t border-indigo-900/50 mt-5 pt-4 text-left space-y-1.5 text-xs text-indigo-200">
                    <div className="flex justify-between">
                      <span>Base:</span>
                      <span className="font-semibold">${pricingConfig.basePrice[projectType]} USD</span>
                    </div>
                    {selectedFeatures.length > 0 && (
                      <div className="flex justify-between">
                        <span>Extras ({selectedFeatures.length}):</span>
                        <span className="font-semibold">+${selectedFeatures.reduce((acc, curr) => acc + (pricingConfig.features[projectType]?.[curr] || 0), 0)} USD</span>
                      </div>
                    )}
                    {pricingConfig.timeline[timeline] !== 0 && (
                      <div className="flex justify-between">
                        <span>Plazo:</span>
                        <span className="font-semibold">{pricingConfig.timeline[timeline] > 0 ? "+" : ""}${pricingConfig.timeline[timeline]} USD</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form inputs */}
                <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t("Calculadora.placeholder_name")}
                      value={leadData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-900/40 text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Correo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={t("Calculadora.placeholder_email")}
                        value={leadData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-900/40 text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+51 999 999 999"
                        value={leadData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-900/40 text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Descripción breve de tu idea
                    </label>
                    <textarea
                      name="desc"
                      rows="3"
                      placeholder={t("Calculadora.placeholder_desc")}
                      value={leadData.desc}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-900/40 text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between pt-4 gap-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-6 py-3 rounded-full border border-gray-300 dark:border-slate-600 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all whitespace-nowrap"
                    >
                      {t("Calculadora.btn_prev")}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-sm font-bold text-white transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t("Calculadora.btn_submit")}</span>
                    </button>
                  </div>
                </form>

              </div>

              {isSubmitted && (
                <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium">
                    ¡Gracias! Tu cotización ha sido generada. Se abrirá WhatsApp para que me envíes los detalles del proyecto y podamos agendar una llamada.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default CalculadoraPage;
