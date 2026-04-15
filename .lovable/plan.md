
Diagnóstico
- Lo más probable es que no falle la landing en sí, sino el despliegue en GitHub Pages.
- Tu captura está completamente blanca; como `src/index.css` define fondo oscuro, eso indica que el bundle de Vite no está cargando.
- En preview no aparecen errores fatales de React, solo warnings de refs, así que el problema principal no parece venir de `Hero`, `Match`, `Protocol` o `Footer`.
- `vite.config.ts` ya tiene `base: '/nano-banana-protocol/'`, pero eso solo funciona si la URL real de GitHub Pages es exactamente `https://usuario.github.io/nano-banana-protocol/`.
- `index.html` apunta a `./src/main.tsx`, lo cual está bien para desarrollo con Vite, pero no sirve si GitHub Pages publica el repositorio fuente sin compilar.
- `src/App.tsx` usa `BrowserRouter` sin `basename`, así que una subruta como `/nano-banana-protocol/` puede romper la resolución de rutas.
- Si estás pegando un enlace `github.com/...`, ese es el repositorio, no la web desplegada. La URL correcta de Pages debe ser la de `github.io`.

Plan de implementación
1. Confirmar la base real del despliegue
   - Si el repo se llama `nano-banana-protocol`, se mantiene `base: '/nano-banana-protocol/'`.
   - Si el repo tiene otro nombre, ajustar `base` para que coincida exactamente con ese nombre, o usar `/` si es un user site.

2. Hacer el router compatible con GitHub Pages
   - En `src/App.tsx`, cambiar a `BrowserRouter basename={import.meta.env.BASE_URL}`.
   - Corregir enlaces que hoy apuntan a raíz fija, sobre todo `src/pages/NotFound.tsx` (`href="/"`) y cualquier regreso al home para que respeten la subruta.

3. Corregir el método de publicación
   - Añadir despliegue de GitHub Pages con GitHub Actions para compilar y publicar `dist/`.
   - No publicar el repositorio fuente tal cual, porque `./src/main.tsx` no puede ejecutarse directamente en Pages.

4. Mantener `index.html` como entrada de Vite, no como salida final
   - El cambio a ruta relativa ya ayuda en desarrollo.
   - La solución real en GitHub Pages es servir el `dist/index.html` generado por `vite build`.

5. Validación final
   - Abrir la URL real de GitHub Pages.
   - Verificar que cargue en `/nano-banana-protocol/`.
   - Probar refresh, navegación al inicio y anchors como `#match`, `#primer-paso`, `#crecimiento` y `#protocol`.

Archivos a tocar
- `src/App.tsx`
- `src/pages/NotFound.tsx`
- `src/components/Navbar.tsx` (si ajustamos enlaces al inicio/base)
- `.github/workflows/deploy.yml` (nuevo)
- opcional: `README.md` con pasos de publicación

Detalle técnico
```text
Repo fuente
  index.html -> ./src/main.tsx
  Esto funciona con Vite dev, no como hosting estático final.

Build correcto
  vite build -> dist/index.html + dist/assets/*

GitHub Pages debe servir:
  dist/
No:
  el repo fuente sin compilar
```

Resultado esperado
- La página deja de verse en blanco porque GitHub Pages cargará el bundle compilado.
- Las rutas funcionarán correctamente dentro de la subcarpeta del repositorio.
- Los enlaces al inicio no enviarán al dominio raíz por error.
