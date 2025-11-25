import { Pinecone } from '@pinecone-database/pinecone';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
import * as fs from 'fs/promises';
import * as path from 'path';

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// --- Configuración ---
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX = process.env.PINECONE_INDEX;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const DOCUMENT_FILE = 'documento_de_prueba.txt'; // Apunta al nuevo documento
const CHUNK_SIZE = 200; // Número de palabras (aproximado) por fragmento

// --- Validación de Variables de Entorno ---
if (!PINECONE_API_KEY || !PINECONE_INDEX || !GEMINI_API_KEY) {
  throw new Error('Una o más variables de entorno requeridas no están definidas. Revisa tu archivo .env.');
}

// --- Inicialización de Clientes ---
const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const embeddingModel = genAI.getGenerativeModel({ model: "embedding-001" });

/**
 * Divide el texto en fragmentos más pequeños.
 * @param text El texto a dividir.
 * @returns Un array de fragmentos de texto.
 */
function chunkText(text: string): string[] {
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += CHUNK_SIZE) {
    chunks.push(words.slice(i, i + CHUNK_SIZE).join(' '));
  }
  return chunks;
}

/**
 * Función principal para la ingesta de documentos.
 */
async function main() {
  console.log('Iniciando el proceso de ingesta para Scriptorium AI...');

  try {
    // 1. Obtener el índice de Pinecone
    console.log(`Accediendo al índice de Pinecone: "${PINECONE_INDEX}"...`);
    const index = pinecone.index(PINECONE_INDEX!);

    // 2. Leer y procesar el documento
    const filePath = path.resolve(process.cwd(), DOCUMENT_FILE);
    console.log(`Leyendo el documento: ${filePath}`);
    const content = await fs.readFile(filePath, 'utf-8');
    const chunks = chunkText(content);
    console.log(`Documento dividido en ${chunks.length} fragmento(s).`);

    // 3. Generar embeddings con la IA de Google (Gemini)
    console.log('Generando embeddings con la IA de Google (Gemini)...');
    const vectors = [];
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const result = await embeddingModel.embedContent(chunk);
      const embedding = result.embedding.values;
      
      vectors.push({
        id: `${path.basename(DOCUMENT_FILE)}-${i}`,
        values: embedding,
        metadata: {
          text: chunk,
          source: path.basename(DOCUMENT_FILE),
          project: 'scriptorium-ai' // Metadato extra para saber el origen
        },
      });
      console.log(`Embedding generado para el fragmento ${i + 1}/${chunks.length}`);
    }

    // 4. Subir los vectores a Pinecone
    console.log('Subiendo vectores a Pinecone...');
    await index.upsert(vectors);
    
    console.log('\n--- Proceso de ingesta completado con éxito ---');
    console.log(`Se han subido ${vectors.length} vectores al índice "${PINECONE_INDEX}".`);

  } catch (error: any) {
    console.error('\n--- Ocurrió un error durante el proceso de ingesta ---');
    console.error('Mensaje de error:', error.message);
    if (error.response) {
      console.error('Detalles de la respuesta:', error.response.data);
    }
    process.exit(1);
  }
}

// Ejecutar la función principal
main();
