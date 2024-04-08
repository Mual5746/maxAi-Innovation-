
# MaxAi & Innovation 

## Instruktioner

### Klona projektet

Använd följande kommando för att klona projektet till din lokala maskin:

```bash
git clone <URL till projektet>
```

### Installera npm-paket

Navigera till projektets rotkatalog och kör följande kommando för att installera alla nödvändiga npm-paket:

```bash
npm install
```

### Starta applikationen

När alla paket har installerats kan du starta applikationen med följande kommando:

```bash
npm start
```

Applikationen kommer att köras på [http://localhost:3000](http://localhost:3000) i din webbläsare.

### Arbeta i en annan branch

För att skapa och växla till en ny gren (branch), använd följande kommandon:

```bash
git checkout -b <namn på den nya grenen>
```

### Pusha koden till GitHub

När du är klar med dina ändringar och vill ladda upp dem till GitHub, använd följande kommandon:

```bash
git add .
git commit -m "Beskrivning av dina ändringar"
git push origin <namn på den aktuella grenen>
```
```

Detta kommer att visa upp instruktionerna i en kodblocksstil på din hemsida. Du kan kopiera och klistra in denna kod i din Readme.md-fil för din React-hemsida.
Detta kommer att visa upp instruktionerna i en kodblocksstil på din hemsida. Du kan kopiera och klistra in denna kod i din Readme.md-fil för din React-hemsida.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
