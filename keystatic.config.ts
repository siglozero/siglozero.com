import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "siglozero",
      name: "siglozero.com",
    },
  },
  collections: {
    // ================================
    // CATEGORÍAS PRINCIPALES
    // ================================
    categorias: collection({
      label: "Categorías",
      slugField: "nombre",
      path: "content/categorias/*",
      format: { contentField: "descripcion" },
      schema: {
        nombre: fields.slug({
          name: fields.text({
            label: "Nombre",
            validation: { length: { min: 3, max: 50 } },
          }),
        }),
        titulo: fields.text({
          label: "Título para mostrar",
          defaultValue: "",
        }),
        descripcion: fields.text({
          label: "Descripción",
          multiline: true,
        }),
        icono: fields.text({
          label: "Ícono (FontAwesome)",
          defaultValue: "fa-folder",
        }),
        color: fields.select({
          label: "Color principal",
          options: [
            { label: "Rojo", value: "color-cinnabar" },
            { label: "Azul", value: "color-azure-radiance" },
            { label: "Verde", value: "color-apple" },
            { label: "Naranja", value: "color-web-orange" },
            { label: "Morado", value: "color-razzmatazz" },
          ],
        }),
        visible: fields.checkbox({
          label: "¿Mostrar en menú?",
          defaultValue: true,
        }),
        orden: fields.number({
          label: "Orden en el menú",
          defaultValue: 1,
        }),
      },
    }),
    // ================================
    // NOTICIAS
    // ================================
    noticias: collection({
      label: "Noticias",
      slugField: "title",
      path: "content/noticias/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: fields.text({
            label: "Título",
            validation: { length: { min: 5, max: 100 } },
          }),
        }),
        autor: fields.text({
          label: "Autor",
          defaultValue: "Redacción Siglo Zero",
        }),
        fecha: fields.date({
          label: "Fecha de publicación",
          defaultValue: { kind: "today" },
        }),
        categoriaPrincipal: fields.relationship({
          label: "Categoría Principal",
          collection: "categorias",
        }),
        subcategoria: fields.select({
          label: "Subcategoría",
          options: [
            // Local
            { label: "Mi Ciudad", value: "mi-ciudad" },
            { label: "Municipal", value: "municipal" },
            // Estado
            { label: "Gobierno del Estado", value: "gobierno-estado" },
            { label: "Congreso", value: "congreso" },
            // Nacional
            { label: "Política", value: "politica" },
            { label: "País", value: "pais" },
            // Seguridad
            { label: "Policiaca", value: "policiaca" },
            { label: "Accidentes", value: "accidentes" },
            // Opinión
            { label: "Editoriales", value: "editoriales" },
            // Columna Política
            { label: "Columna del Día", value: "columna-dia" },
            // Ciencia y Tecnología
            { label: "Smartphones", value: "smartphones" },
            { label: "IA", value: "ia" },
            { label: "Apps", value: "apps" },
            // Magazine
            { label: "Cine / Cartelera", value: "cine" },
            { label: "Moda", value: "moda" },
            { label: "Hogar", value: "hogar" },
            { label: "Vida Diaria", value: "vida-diaria" },
            { label: "Salud", value: "salud" },
            { label: "Cocina", value: "cocina" },
            { label: "Horóscopos", value: "horoscopos" },
            { label: "Chismógrafo", value: "chismografo" },
          ],
        }),
        imagen: fields.image({
          label: "Imagen destacada",
          directory: "img/news",
          publicPath: "/img/news",
        }),
        resumen: fields.text({
          label: "Resumen",
          multiline: true,
          validation: { length: { max: 200 } },
        }),
        contenido: fields.markdoc({
          label: "Contenido",
          options: {
            headings: ["h2", "h3", "h4"],
            lists: true,
            images: true,
            links: true,
            blockquote: true,
          },
        }),
        destacado: fields.checkbox({
          label: "¿Mostrar en carrusel principal?",
          defaultValue: false,
        }),
        importancia: fields.select({
          label: "Nivel de Importancia",
          options: [
            { label: "🔥 Alta (Carrusel Principal)", value: "alta" },
            { label: "📰 Media (Grid Principal)", value: "media" },
            { label: "📁 Baja (Archivo)", value: "baja" },
          ],
          defaultValue: "media",
        }),
        urgente: fields.checkbox({
          label: "¿Noticia Urgente? (Breaking News)",
          defaultValue: false,
        }),
        enPortada: fields.checkbox({
          label: "¿En portada de la sección?",
          defaultValue: false,
        }),
      },
    }),
  },
  ui: {
    brand: {
      name: "Siglo Zero",
      mark: "🗞️",
    },
  },
});