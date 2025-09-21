export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative overflow-hidden">
      {/* Fondo con patrón institucional */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Header Institucional Sofisticado */}
      <header className="relative z-50 glass-effect border-b border-slate-700/50 sticky top-0">
        <div className="container mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-30"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Scriptorium AI
                </h1>
                <p className="text-sm text-slate-400 font-medium">Enterprise Solutions</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#soluciones" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Soluciones
              </a>
              <a href="#instituciones" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Instituciones
              </a>
              <a href="#seguridad" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Seguridad
              </a>
              <a href="#soporte" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Soporte Enterprise
              </a>
              <button className="institutional-button-primary">
                Consulta Institucional
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section Institucional */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto text-center fade-in">

            {/* Badge institucional */}
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8 border border-slate-600/50">
              <div className="status-indicator status-operational"></div>
              <span className="text-slate-300 font-medium">
                Certificado para Administraciones Públicas • ISO 27001 • GDPR Compliant
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Digitalización Documental
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                de Fondos Históricos
              </span>
            </h1>

            {/* Subtítulo institucional */}
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Plataforma empresarial especializada en la transcripción masiva y análisis de documentos manuscritos
              para <strong className="text-white">bibliotecas nacionales</strong>, <strong className="text-white">archivos históricos</strong> y
              <strong className="text-white"> administraciones públicas</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="institutional-button-primary text-lg">
                Solicitar Demo Institucional
              </button>
              <button className="institutional-button-secondary text-lg">
                Descargar Caso de Estudio
              </button>
            </div>

            {/* Métricas institucionales */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-slate-400">Documentos Procesados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">200+</div>
                <div className="text-slate-400">Instituciones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">45</div>
                <div className="text-slate-400">Países</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Sección de Soluciones por Tipo de Institución */}
      <section id="soluciones" className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Soluciones por <span className="text-blue-400">Sector Institucional</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tecnología especializada adaptada a las necesidades específicas de cada tipo de institución patrimonial.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bibliotecas Nacionales */}
            <div className="institutional-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Bibliotecas Nacionales</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Digitalización masiva de manuscritos históricos, incunables y fondos patrimoniales.
                Procesamiento de hasta 10,000 documentos diarios con precisión del 99.7%.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Manuscritos medievales y renacentistas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Catalogación automática MARC21
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Metadatos Dublin Core
                </li>
              </ul>
            </div>

            {/* Archivos Históricos */}
            <div className="institutional-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Archivos Históricos</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Preservación digital de documentos administrativos, protocolos notariales y expedientes gubernamentales.
                Análisis de series documentales con IA especializada.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Protocolos notariales s. XVI-XX
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Expedientes administrativos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Análisis diplomático automático
                </li>
              </ul>
            </div>

            {/* Administraciones Públicas */}
            <div className="institutional-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Administraciones Públicas</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Modernización de archivos gubernamentales y digitalización de expedientes históricos.
                Cumplimiento estricto de normativas de protección de datos y seguridad.
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Expedientes gubernamentales
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Cumplimiento GDPR/LOPD
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Auditoría y trazabilidad completa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Sección de Capacidades Técnicas Enterprise */}
      <section id="instituciones" className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Capacidades <span className="text-emerald-400">Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tecnología de vanguardia diseñada para el procesamiento masivo y la preservación digital a largo plazo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Procesamiento a Escala Industrial</h3>
                  <p className="text-slate-300">
                    Infraestructura cloud que procesa hasta 50,000 documentos diarios con IA especializada en paleografía y diplomatica.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Estándares Internacionales</h3>
                  <p className="text-slate-300">
                    Cumplimiento total con OAIS, PREMIS, METS y estándares de preservación digital del sector cultural.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">IA Especializada en Patrimonio</h3>
                  <p className="text-slate-300">
                    Modelos entrenados específicamente en documentación histórica iberoamericana de los siglos XVI-XX.
                  </p>
                </div>
              </div>
            </div>

            <div className="institutional-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Especificaciones Técnicas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-slate-300">Velocidad de procesamiento</span>
                  <span className="text-white font-semibold">50,000 docs/día</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-slate-300">Precisión OCR manuscritos</span>
                  <span className="text-white font-semibold">99.7%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-slate-300">Formatos soportados</span>
                  <span className="text-white font-semibold">PDF, TIFF, JPEG, PNG</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-slate-300">Resolución máxima</span>
                  <span className="text-white font-semibold">600 DPI</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-slate-300">Idiomas soportados</span>
                  <span className="text-white font-semibold">Español, Latín, Catalán</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">SLA Uptime</span>
                  <span className="text-white font-semibold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Sección de Seguridad y Compliance */}
      <section id="seguridad" className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Seguridad y <span className="text-red-400">Compliance</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Máximos estándares de seguridad y cumplimiento normativo para instituciones públicas y patrimoniales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Certificaciones */}
            <div className="institutional-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certificaciones</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  ISO 27001:2013
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  SOC 2 Type II
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  GDPR Compliant
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  ENS (Esquema Nacional de Seguridad)
                </li>
              </ul>
            </div>

            {/* Infraestructura */}
            <div className="institutional-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Infraestructura</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Centros de datos UE
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Cifrado AES-256
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Backups 3-2-1
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Red privada virtual
                </li>
              </ul>
            </div>

            {/* Auditoría */}
            <div className="institutional-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Auditoría</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Trazabilidad completa
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Logs inmutables
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Informes automáticos
                </li>
                <li className="flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Control de acceso RBAC
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Dashboard de Estado del Sistema */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="institutional-card p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Estado del Sistema en Tiempo Real</h2>
              <p className="text-slate-300">Monitorización 24/7 de todos los servicios de la plataforma</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Servicios Operativos
                </h3>
                <div className="space-y-4">
                  {[
                    "Motor de Transcripción IA",
                    "Análisis Paleográfico",
                    "Generación de Metadatos",
                    "API Enterprise",
                    "Sistema de Auditoría",
                    "Backup y Recuperación"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                      <span className="text-slate-300">{service}</span>
                      <div className="flex items-center space-x-2">
                        <div className="status-indicator status-operational"></div>
                        <span className="text-emerald-400 font-semibold">Operativo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
                  <div className="status-indicator status-operational mr-3"></div>
                  Capacidades Enterprise
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Documentos procesados hoy", value: "12,847" },
                    { label: "Tiempo medio de procesamiento", value: "2.3 seg" },
                    { label: "Precisión promedio", value: "99.7%" },
                    { label: "Instituciones activas", value: "203" },
                    { label: "Almacenamiento utilizado", value: "2.4 TB" },
                    { label: "Uptime último mes", value: "99.97%" }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                      <span className="text-slate-300">{metric.label}</span>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Institucional */}
      <footer className="py-16 border-t border-slate-700/50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Scriptorium AI</h3>
                  <p className="text-slate-400">Enterprise Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Líder en digitalización documental para instituciones patrimoniales.
                Tecnología de IA especializada en preservación digital.
              </p>
              <div className="text-slate-500 text-sm">
                © 2024 Scriptorium AI Enterprise • scriptoriumia.eu
                <br />
                Certificado ISO 27001 • GDPR Compliant • ENS
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Bibliotecas Nacionales</li>
                <li>Archivos Históricos</li>
                <li>Administraciones Públicas</li>
                <li>Fondos Patrimoniales</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soporte Enterprise</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Consultoría Técnica</li>
                <li>Implantación Dedicada</li>
                <li>Soporte 24/7</li>
                <li>Formación Especializada</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}