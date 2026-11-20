# Cambridge B2 First (FCE) - Reading & Use of English Simulator

Simulador interactivo del examen oficial **Cambridge English: B2 First (FCE)** para la prueba de **Reading and Use of English** (Partes 1 a 7). Diseñado con la estética académica de Cambridge, soporte táctil optimizado para iPad y cálculo oficial en la escala Cambridge English Scale (120–190).

## 🚀 Características Principales

- **Partes 1 a 7 Completas e Interactivas**:
  - **Parte 1 (Multiple-Choice Cloze)**: Selección táctil de opciones A, B, C, D con previsualización inline en el texto.
  - **Parte 2 (Open Cloze)**: Espacios interactivos para completar texto (conversión automática a mayúsculas).
  - **Parte 3 (Word Formation)**: Inserción de palabras derivadas mostrando la palabra raíz entre corchetes.
  - **Parte 4 (Key Word Transformations)**: Constructor de oraciones con contador dinámico de 2 a 5 palabras, verificación de inclusión de palabra clave y puntuación Cambridge (hasta 2 puntos por mitad acertada).
  - **Parte 5 (Reading Comprehension)**: Diseño a doble columna (split-screen) con texto y preguntas 31–36.
  - **Parte 6 (Gapped Text)**: Asignación interactiva de oraciones A–G en los huecos 37–42.
  - **Parte 7 (Multiple Matching)**: Textos de las secciones A–D con selector rápido para las 10 afirmaciones.
- **Resaltador Multicolores Táctil para iPad**:
  - Resalta cualquier pasaje con 4 colores pastel (Amarillo, Verde, Rosa, Celeste) o borrador.
  - Persistencia de marcas durante la sesión de estudio.
- **Cálculo Oficial del Puntaje (Cambridge English Scale)**:
  - Sub-puntaje de **Reading** (sobre 42 puntos brutos -> Escala 120–190).
  - Sub-puntaje de **Use of English** (sobre 28 puntos brutos -> Escala 120–190).
  - Puntaje Global promedio con calificación oficial:
    - **180 – 190**: Grade A (Nivel C1)
    - **173 – 179**: Grade B (Nivel B2)
    - **160 – 172**: Grade C (Aprobado B2)
    - **140 – 159**: Level B1
    - **< 140**: Fail
- **Corrección Detallada y Feedback de Errores**:
  - Comparación lado a lado de tu respuesta vs la respuesta oficial.
  - Marcado en **Rojo** para errores y **Verde** para aciertos.
  - Justificación y pista gramatical oficial para cada una de las 52 preguntas.
  - Filtro rápido para repasar solo los fallos.
- **Modelos de Examen Reales Pre-cargados**:
  - Examen Oficial Modelo 1 (Chauvet Cave, Seals, Brain Games, Chloe Kelling, Women's Boxing, Australia).
  - Examen Oficial Modelo 2 (Whale Watching, Pencil History, Olive Oil, Twilight Zone, Sleep Science, Working Holidays).
- **Responsive & Optimizado para iPad**:
  - Doble columna en horizontal / iPad landscape y alternador fluido en iPad vertical.
  - Guardado automático en `localStorage`.

## 🛠️ Tecnologías

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **Canvas Confetti**

## 💻 Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

## 🌐 Subir a GitHub y Despliegue en GitHub Pages

El proyecto ya incluye el workflow automatizado `.github/workflows/deploy.yml`:

1. Crea un repositorio en tu cuenta de GitHub (ej. `fce-simulator`).
2. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "feat: Simulador interactivo Cambridge B2 First"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings** -> **Pages** -> En **Source** selecciona **GitHub Actions**.
4. ¡Listo! Cada push compilará y actualizará tu web automáticamente.
