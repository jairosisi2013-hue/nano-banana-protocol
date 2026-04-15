

## Diagnóstico

El problema es que `vite.config.ts` tiene `base: '/nano-banana-protocol/'` fijo. Esto funciona en GitHub Pages (donde la URL es `usuario.github.io/nano-banana-protocol/`), pero rompe el preview de Lovable (que corre en `/`). Todos los assets (JS, CSS) se buscan bajo `/nano-banana-protocol/` que no existe en Lovable.

## Plan

**1. Hacer `base` condicional en `vite.config.ts`**

Usar `base` solo en producción (build), no en desarrollo:

```ts
base: mode === 'production' ? '/nano-banana-protocol/' : '/',
```

Esto hace que:
- En **desarrollo/preview** de Lovable → `base = '/'` → funciona correctamente
- En **build para GitHub Pages** → `base = '/nano-banana-protocol/'` → funciona correctamente

**Archivo a modificar:** `vite.config.ts` (1 línea)

