export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-white">Scriptorium AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Acceder
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">Edición Institucional • Operativo • v2.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Transcripción y análisis de</span>
            <br />
            <span className="text-blue-400">documentos con IA</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Convierte documentos manuscritos, PDFs y archivos de texto en transcripciones digitales.
            Genera resúmenes automáticos, extrae tags y analiza contenido con inteligencia artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Probar Gratis
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20" id="features">
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-gray-600 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Transcripción de Documentos</h3>
            <p className="text-gray-400">
              Convierte documentos manuscritos, PDFs, TIFF y JPEG a texto digital con alta precisión.
              Sube hasta 50 archivos simultáneamente.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-gray-600 transition-colors">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Análisis y Resúmenes</h3>
            <p className="text-gray-400">
              Genera resúmenes automáticos (sinopsis, corto, detallado), extrae palabras clave
              y analiza intervinientes en los documentos.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-gray-600 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Q&A Interactivo</h3>
            <p className="text-gray-400">
              Realiza preguntas directas sobre el contenido de los documentos y obtén respuestas
              contextuales basadas en el análisis de IA.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-32 text-center" id="demo">
          <h2 className="text-3xl font-bold mb-8 text-white">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sube tus documentos</h3>
              <p className="text-gray-400">PDF, Word, TXT o manuscritos escaneados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">IA procesa el contenido</h3>
              <p className="text-gray-400">Transcripción y análisis automático</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Obtén resultados</h3>
              <p className="text-gray-400">Transcripciones, resúmenes y análisis</p>
            </div>
          </div>
        </div>

        {/* Status Dashboard */}
        <div className="mt-32 bg-gray-800 border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Estado del Sistema</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-400 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                Servicios Operativos
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>✓ Motor de transcripción IA</div>
                <div>✓ Análisis de documentos</div>
                <div>✓ Generación de resúmenes</div>
                <div>✓ Extracción de metadatos</div>
                <div>✓ Sistema Q&A interactivo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                Formatos Soportados
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• PDF, DOC, DOCX, TXT</div>
                <div>• TIFF, JPEG (manuscritos)</div>
                <div>• Múltiples idiomas</div>
                <div>• Hasta 50 archivos por lote</div>
                <div>• Exportación a PDF</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Scriptorium AI • Edición Institucional • scriptoriumia.eu
          </p>
        </div>
      </div>
    </div>
  )
}