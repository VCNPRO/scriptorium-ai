'use client';

import { useState, useEffect } from 'react';

interface Document {
  id: string;
  filename: string;
  status: 'uploaded' | 'processing' | 'processed' | 'failed';
  uploadedAt: string;
  processedAt?: string;
  size: number;
  type: string;
  metadata?: {
    documentType?: string;
    historicalPeriod?: string;
    pages?: number;
    confidence?: number;
    language?: string;
  };
  billing?: {
    cost?: number;
    processingTime?: number;
  };
}

interface ProcessingResult {
  text: string;
  confidence: number;
  analysis: {
    summary: string;
    keywords: string[];
    entities: string[];
    paleographicAnalysis?: string;
  };
}

export default function Dashboard() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState<string | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [processingResult, setProcessingResult] = useState<ProcessingResult | null>(null);

  // Cargar documentos al inicializar
  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const response = await fetch('/api/documents');
      const data = await response.json();
      setDocuments(data.documents);
    } catch (error) {
      console.error('Error loading documents:', error);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('document', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        await loadDocuments(); // Recargar lista
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Error al subir el archivo');
    } finally {
      setUploading(false);
    }
  };

  const handleProcess = async (documentId: string) => {
    setProcessing(documentId);
    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentId }),
      });

      const result = await response.json();

      if (response.ok) {
        setProcessingResult(result.result);
        await loadDocuments(); // Recargar lista
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error processing:', error);
      alert('Error al procesar el documento');
    } finally {
      setProcessing(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-gray-100 mb-2">
            Scriptorium AI - Dashboard
          </h1>
          <p className="text-gray-400">
            Procesamiento de documentos históricos con IA especializada
          </p>
        </div>

        {/* Upload Section */}
        <div className="institutional-card p-6 rounded-lg mb-8">
          <h2 className="text-xl font-medium text-gray-100 mb-4">
            Subir Documento
          </h2>

          <div className="flex items-center gap-4">
            <input
              id="file-input"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.tiff,.doc,.docx"
              onChange={handleFileSelect}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600"
            />

            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="institutional-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Subiendo...' : 'Subir'}
            </button>
          </div>

          {selectedFile && (
            <div className="mt-4 text-sm text-gray-400">
              <p>Archivo seleccionado: {selectedFile.name}</p>
              <p>Tamaño: {formatFileSize(selectedFile.size)}</p>
              <p>Tipo: {selectedFile.type}</p>
            </div>
          )}
        </div>

        {/* Documents List */}
        <div className="institutional-card p-6 rounded-lg mb-8">
          <h2 className="text-xl font-medium text-gray-100 mb-4">
            Documentos ({documents.length})
          </h2>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-200">{doc.filename}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        doc.status === 'processed' ? 'bg-emerald-500/20 text-emerald-400' :
                        doc.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                        doc.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {doc.status}
                      </span>
                    </div>

                    <div className="text-sm text-gray-400 space-y-1">
                      <p>Subido: {new Date(doc.uploadedAt).toLocaleString('es-ES')}</p>
                      <p>Tamaño: {formatFileSize(doc.size)}</p>
                      {doc.metadata && (
                        <p>
                          {doc.metadata.documentType} • {doc.metadata.historicalPeriod} •
                          {doc.metadata.confidence && ` Confianza: ${(doc.metadata.confidence * 100).toFixed(1)}%`}
                        </p>
                      )}
                      {doc.billing?.cost && (
                        <p>Coste: €{doc.billing.cost.toFixed(3)}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {doc.status === 'uploaded' && (
                      <button
                        onClick={() => handleProcess(doc.id)}
                        disabled={processing === doc.id}
                        className="institutional-button-primary disabled:opacity-50"
                      >
                        {processing === doc.id ? 'Procesando...' : 'Procesar'}
                      </button>
                    )}

                    {doc.status === 'processed' && (
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className="institutional-button-secondary"
                      >
                        Ver Resultado
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {documents.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No hay documentos. Sube tu primer documento para comenzar.
              </div>
            )}
          </div>
        </div>

        {/* Processing Result Modal */}
        {processingResult && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="institutional-card p-6 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-gray-100">
                  Resultado del Procesamiento
                </h2>
                <button
                  onClick={() => setProcessingResult(null)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Confianza */}
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Confianza del OCR</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${processingResult.confidence * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">
                      {(processingResult.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Resumen */}
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Resumen</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {processingResult.analysis.summary}
                  </p>
                </div>

                {/* Palabras clave */}
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Palabras Clave</h3>
                  <div className="flex flex-wrap gap-2">
                    {processingResult.analysis.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Entidades */}
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Entidades Identificadas</h3>
                  <div className="space-y-1">
                    {processingResult.analysis.entities.map((entity, index) => (
                      <div key={index} className="text-sm text-gray-400">
                        • {entity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Análisis paleográfico */}
                {processingResult.analysis.paleographicAnalysis && (
                  <div>
                    <h3 className="font-medium text-gray-200 mb-2">Análisis Paleográfico</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {processingResult.analysis.paleographicAnalysis}
                    </p>
                  </div>
                )}

                {/* Texto transcrito */}
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Texto Transcrito</h3>
                  <div className="bg-gray-800 p-4 rounded border max-h-60 overflow-y-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-serif">
                      {processingResult.text}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}