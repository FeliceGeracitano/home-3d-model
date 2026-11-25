# Home 3D model

Modello 3D interattivo di un appartamento, fatto con [Three.js](https://threejs.org/).
Viste 3D, Pianta e Cammina, scelta di arredi e finiture, luce di giorno con l'ora del sole e modalità Notte
con le lampade accendibili una per una (temperatura di colore e dimmer).

## Requisiti

- Node.js 18 o superiore (consigliato 20, vedi `.nvmrc`)

## Comandi

```bash
npm install        # installa le dipendenze (una volta)
npm run dev        # sviluppo in locale su http://localhost:5173, con ricarica automatica
npm run build      # build di produzione nella cartella dist/
npm run preview    # serve la build di dist/ su http://localhost:4173, per controllarla
```

## Struttura

```
index.html            pagina e menu
src/main.js           tutta la scena: pianta, muri, arredi, luci, interazioni
src/style.css         stile del menu e dei pannelli
src/assets/           texture (parquet, gres Calacatta Viola)
vite.config.js        configurazione di Vite
amplify.yml           build per AWS Amplify Hosting
```

`src/main.js` è un unico file grande (circa 4.600 righe): è il codice del modello così com'è nato, non ancora
diviso in moduli.

## Deploy su AWS Amplify

Il file `amplify.yml` è già pronto: Amplify esegue `npm ci` e `npm run build` e pubblica la cartella `dist/`.

1. In Amplify Hosting crea una nuova app e collega questa repository e il branch da pubblicare.
2. Amplify legge `amplify.yml` da solo: non serve cambiare le impostazioni di build.
3. Ogni push sul branch collegato fa partire una nuova build.

La build usa percorsi relativi (`base: './'` in `vite.config.js`), quindi funziona anche in una sottocartella.

## Note

- Le scelte fatte nel menu (arredi, colori, qualità, luci) restano salvate nel browser (`localStorage`).
- I font arrivano da Google Fonts; tutto il resto è nella build.
- Il modello contiene le misure reali della casa: valuta se tenere privata la repository e protetto il sito.
