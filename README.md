# GRAF TGN — App instal·lació

## Contingut de la carpeta
Tots aquests fitxers han d'estar a la mateixa carpeta:

```
index.html                      ← App principal
manifest.json                   ← Configuració PWA
sw.js                           ← Service worker (offline)
icon-192.svg                    ← Icona app
icon-512.svg                    ← Icona app gran
PRO_RH_001_v3_2025.pdf
MANUAL_ATRI_permisos_V3.pdf
TRAMITACIO_DIETES_DGOE_v2.pdf
FRM_RH_005_actualitzat.docx
```

---

## Opció 1 — Instal·lar com a PWA (recomanat, més fàcil)

### Android (Chrome)
1. Puja tots els fitxers a un servidor web (GitHub Pages, Netlify, servidor intern...)
2. Obre la URL amb Chrome al mòbil
3. Chrome mostrarà un banner "Afegir a la pantalla d'inici" → prem **Instal·la**
4. L'app apareixerà a la pantalla d'inici com una app nativa

### Localment sense servidor
Pots usar **Live Server** (VS Code) o `python -m http.server 8080` i accedir des del mòbil per IP local.

---

## Opció 2 — App Android nativa (.apk) amb Capacitor

### Requisits
- Node.js instal·lat
- Android Studio instal·lat

### Passos
```bash
# 1. Instal·lar Capacitor
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Inicialitzar
npx cap init "GRAF TGN" "cat.gencat.graftgn" --web-dir .

# 3. Afegir Android
npx cap add android

# 4. Copiar fitxers a l'app
npx cap copy

# 5. Obrir Android Studio
npx cap open android
# → Build → Generate Signed APK
```

---

## Opció 3 — WebView simple (APK mínim)

Si vols una APK molt senzilla sense Capacitor, pots usar **WebIntoApp** (https://webintoapp.com) o **GoNative.io** i apuntar a la URL del servidor.

---

*GRAF TGN — Grup d'Actuació Forestal de Tarragona*
