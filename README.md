# Baloo Adventure — PWA 🐕✈️

Juego Flappy-Bird style protagonizado por Baloo. Vuela en avioneta esquivando pilares de metal. Los lasers verdes los podés cruzar — ¡eso te da puntos!

## Controles

| Plataforma | Control |
|------------|---------|
| Desktop | `Espacio` o clic |
| Mobile | Toque en la pantalla |

## Mecánicas

- La avioneta cae por gravedad constantemente
- Cada toque/espacio aplica un impulso hacia arriba
- Los **pilares grises** = muerte si los tocás
- El **laser verde** entre pilares = +1 punto si lo cruzás
- Tocar el suelo = muerte
- El **highscore** se guarda localmente en el dispositivo (localStorage)

## Archivos

```
/
├── index.html    ← Juego completo (Canvas + CSS + JS)
├── manifest.json ← Config PWA
├── sw.js         ← Service Worker (modo offline)
└── icons/        ← Íconos para homescreen
```

## Despliegue en GitHub Pages

1. Crea repo público `baloo-adventure-APP`
2. Sube `index.html`, `manifest.json`, `sw.js`
3. Crea carpeta `icons/` con los íconos
4. Activá GitHub Pages: Settings → Pages → rama main / raíz

## Íconos (obligatorio para instalar como app)

→ Ir a https://realfavicongenerator.net  
→ Subir PNG cuadrado 512×512 con la cara de Baloo  
→ Descargar ZIP y poner los íconos en la carpeta `icons/`

## Instalar en mobile

- **Android (Chrome)**: aparece botón "Instalar app" o menú ⋮ → Añadir a pantalla inicio
- **iOS (Safari)**: Compartir → "Añadir a pantalla de inicio"

## Diferencias con el original en Godot

| Godot | Web PWA |
|-------|---------|
| Sprites PNG de Baloo | Avioneta y Baloo dibujados en Canvas |
| Parallax con assets | Parallax con Canvas 2D (nubes, montañas) |
| Señales GDScript | Event Listeners JS |
| GameManager singleton | Estado global JS |
| AudioStreamPlayer | Web Audio API (opcional a agregar) |
| Pisos físicos | Detección manual Y + altura canvas |

## Nota

El juego es 100% client-side. No necesita backend. Funciona completamente offline una vez instalado como PWA.
