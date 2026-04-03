import outsideImage from './outside.png'
import insideImagePrimary from './inside1.png'
import insideImageSecondary from './inside2.png'
import menuImagePrimary from './menu1.png'
import menuImageSecondary from './menu2.png'

export const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Traiteur', href: '#traiteur' },
  { label: 'Carte', href: '#suggestions' },
  { label: 'Epicerie', href: '#epicerie' },
  { label: 'Contact', href: '#contact' },
]

export const home = {
  kicker: 'Trattoria Moderna',
  title: ["Ma' Pia,", 'mercato italiano', "a la Cote d'Azur"],
  intro:
    "Epicerie fine, traiteur du jour et table de quartier dans une meme adresse. Une maison italienne contemporaine, chaleureuse et vive.",
  primaryAction: { label: 'Voir la carte', href: '#suggestions' },
  heroImage: outsideImage,
  heroAlt: "Devanture exterieure de Ma' Pia",
}

export const traiteur = {
  kicker: 'Traiteur & catering',
  title: 'Cuisine du jour, service de maison',
  intro:
    "Chaque semaine, la cuisine compose une selection courte de plats a emporter ou a partager. Pour les evenements, Ma' Pia prepare des menus sur mesure avec la meme exigence qu'au comptoir.",
  image: insideImagePrimary,
  notes: [
    'Produits de saison et recettes italiennes sans surcharge.',
    "Commande simple pour dejeuners d'equipe, receptions et repas de famille.",
    'Formats petite, moyenne et grande planche pour aperitivo sur place.',
  ],
}

export const traiteurSpecials = [
  {
    title: 'Vitello Tonnato',
    description: 'Veau tranche finement, creme tonnata, capres et citron.',
    price: '12,50 EUR',
    image: menuImagePrimary,
  },
  {
    title: 'Agnolotti Piemontese',
    description: 'Beurre a la sauge, creme legere et parmesan.',
    price: '12,50 EUR',
    image: menuImageSecondary,
  },
  {
    title: 'Pizzanino',
    description: 'Sandwich chaud a base de pate a pizza, garniture du jour.',
    price: '9,50 EUR',
    image: menuImagePrimary,
  },
]

export const comptoirMenu = {
  antipasti: [
    'Vitello tonnato',
    'Flan de legumes, bagna cauda',
    'Salade russe',
    'Flan de legumes, fondue au fromage',
  ],
  plats: [
    'Raviole della Val Varaita, beurre noisette, creme et parmesan',
    'Agnolotti Piemontese, beurre a la sauge',
    'Suggestion du jour selon ardoise',
  ],
  desserts: ['Tiramisu', 'Bonet piemontais'],
  pizzaninoChoices: [
    'Mortadella, stracciatella et eclats de pistache',
    'Prosciutto cotto, tomme fraiche, tomate et roquette',
    'Coppa, tomme aux poivres, tomate et roquette',
    'Gorgonzola, mozzarella, chevre et roquette',
  ],
  takeaway: [
    'Pizzanino seul: 8,50 EUR',
    'Pizzanino + boisson: 12,00 EUR',
    'Pizzanino + dessert + boisson: 15,00 EUR',
  ],
}

export const wineMenu = {
  blancs: [
    { name: 'Langhe DOC Chardonnay 2023', price: '19,00 EUR' },
    { name: 'Langhe DOC Favorita 2024', price: '20,00 EUR' },
    { name: 'Arneis Borgogno Rivata', price: '21,00 EUR' },
    { name: 'Monferrato Bianco Traversa', price: '25,00 EUR' },
    { name: 'Favorita DOC', price: '26,00 EUR' },
    { name: 'Chardonnay DOC', price: '36,00 EUR' },
  ],
  roses: [
    { name: 'Rosato Piemontese DOC', price: '25,00 EUR' },
    { name: 'Spumante Rose Brut DOC', price: '28,00 EUR' },
  ],
  rouges: [
    { name: 'Dogliani DOCG', price: '18,00 EUR' },
    { name: "Barbera d'Alba", price: '20,00 EUR' },
    { name: "Dolcetto d'Acqui", price: '23,00 EUR' },
    { name: 'Brachetto', price: '23,00 EUR' },
    { name: 'Nebbiolo', price: '25,00 EUR' },
    { name: 'Barbera del Monferrato', price: '29,00 EUR' },
    { name: "Barbera d'Asti", price: '31,00 EUR' },
    { name: "Nebbiolo d'Alba", price: '31,00 EUR' },
    { name: 'Calosso DOC', price: '32,00 EUR' },
  ],
}

export const drinksMenu = [
  "Vin au verre 12,5 cl (Chardonnay ou Barbera d'Alba): 4,50 EUR",
  'Biere Moretti 33 cl: 4,50 EUR',
  'Spritz Aperol: 7,50 EUR',
  "Garibaldi (Campari + jus d'orange): 7,50 EUR",
  'San Pellegrino orange, limonade artisanale citronnee, Estathe citron ou peche, Lemon Soda, Coca Cola: 3,50 EUR',
  'Jus de peche, poire ou ACE: 3,50 EUR',
  'Eau 50 cl plate ou petillante: 2,00 EUR',
  'Cafe: 2,00 EUR | Cappuccino: 3,50 EUR | The ou infusion: 3,50 EUR',
]

export const aperitivoMenu = [
  'Antipasti selon ardoise: 5,00 EUR',
  'Pizzanino: 9,50 EUR',
  'Formule verre de vin + mini planche: 6,50 EUR',
  'Petite planche mixte (1 a 2 personnes): 10,00 EUR',
  'Moyenne planche mixte (2 a 3 personnes): 15,00 EUR',
  'Grande planche mixte (3 a 4 personnes): 20,00 EUR',
  'Dessert selon ardoise: 5,00 EUR',
]

export const dailySuggestions = [
  { day: 'Mardi', dish: 'Raviole della Val Varaita, beurre noisette et parmesan', price: '12,50 EUR' },
  { day: 'Mercredi', dish: 'Agnolotti Piemontese, beurre a la sauge', price: '12,50 EUR' },
  { day: 'Jeudi', dish: 'Pizzanino mortadella, stracciatella, pistache', price: '9,50 EUR' },
  { day: 'Vendredi', dish: 'Pizzanino prosciutto cotto, tomme fraiche, roquette', price: '9,50 EUR' },
  { day: 'Samedi', dish: 'Comptoir antipasti et planches mixtes aperitivo', price: '5,00 EUR a 20,00 EUR' },
  { day: 'Dimanche', dish: 'Service du matin et formule epicerie a emporter', price: '10h00 - 13h00' },
]

export const chefNote = {
  quote: "Nous travaillons exclusivement des produits italiens selon les arrivages.",
  text:
    "La carte est volontairement courte et vivante: elle evolue avec les produits du moment, du comptoir jusqu'aux assiettes du jour.",
  image: insideImageSecondary,
}

export const epicerieProducts = [
  {
    category: 'Pasta',
    title: 'Paccheri di Gragnano IGP',
    description: "Pates bronzees, sechees lentement, ideales pour ragu napolitain et sauces denses.",
    price: '7,90 EUR',
    tag: 'IGP',
    image: menuImagePrimary,
  },
  {
    category: 'Formaggi',
    title: 'Parmigiano Reggiano 24 mois',
    description: 'Texture friable, notes de fruits secs et bouillon, coupe fraiche a la commande.',
    price: '9,80 EUR / 200 g',
    tag: 'DOP',
    image: insideImageSecondary,
  },
  {
    category: 'Salumi',
    title: 'Prosciutto di Parma 18 mois',
    description: 'Jambon sec tranche fin, equilibre entre douceur lactee et persistance salee.',
    price: '8,90 EUR / 120 g',
    tag: 'DOP',
    image: insideImagePrimary,
  },
  {
    category: 'Dispensa',
    title: "Huile d'olive extra vierge Coratina",
    description: 'Premiere pression a froid, attaque poivree et finale herbe fraiche.',
    price: '22,00 EUR / 500 ml',
    tag: 'Pouilles',
    image: outsideImage,
  },
  {
    category: 'Conserve',
    title: 'Tomates San Marzano entieres',
    description: 'Chair dense et acidite fine, base ideale pour sauce pomodoro maison.',
    price: '4,60 EUR',
    tag: 'DOP',
    image: menuImageSecondary,
  },
  {
    category: 'Pasta',
    title: 'Orecchiette artisanales',
    description: 'Pates courtes des Pouilles, parfaites avec cime di rapa et anchois.',
    price: '6,40 EUR',
    tag: '',
    image: menuImagePrimary,
  },
  {
    category: 'Formaggi',
    title: 'Pecorino Romano affiné',
    description: "Fromage de brebis intense, parfait rape sur carbonara ou en copeaux d'aperitif.",
    price: '7,50 EUR / 180 g',
    tag: 'DOP',
    image: insideImageSecondary,
  },
  {
    category: 'Dolci',
    title: 'Cantucci aux amandes',
    description: 'Biscuits toscans croquants, a servir avec vin santo ou cafe espresso.',
    price: '6,20 EUR',
    tag: 'Toscana',
    image: menuImageSecondary,
  },
  {
    category: 'Dolci',
    title: 'Creme de pistache de Bronte',
    description: 'Pate onctueuse a tartiner, pistache sicilienne et sucre peu raffine.',
    price: '11,90 EUR',
    tag: 'Sicilia',
    image: menuImagePrimary,
  },
  {
    category: 'Vini',
    title: "Barbera d'Alba DOC",
    description: 'Rouge piemontais souple et epice, excellent sur charcuterie et pates saucee.',
    price: '20,00 EUR',
    tag: 'Piemonte',
    image: insideImagePrimary,
  },
  {
    category: 'Vini',
    title: 'Langhe Arneis DOC',
    description: 'Blanc sec floral et mineral, adapte aux antipasti et fromages frais.',
    price: '21,00 EUR',
    tag: 'Piemonte',
    image: insideImagePrimary,
  },
  {
    category: 'Salumi',
    title: 'Coppa stagionata',
    description: 'Affinage lent, gras marbre et epices douces, tranche fine au comptoir.',
    price: '7,80 EUR / 120 g',
    tag: '',
    image: insideImageSecondary,
  },
  {
    category: 'Dispensa',
    title: 'Pesto Genovese frais',
    description: 'Basilic, pignons, Parmigiano et huile evo, sans conservateur.',
    price: '8,90 EUR',
    tag: 'Liguria',
    image: insideImageSecondary,
  },
  {
    category: 'Conserve',
    title: "Filets d'anchois de Cetara",
    description: 'Conserves au sel et a l huile, umami net pour sauces, bruschette et salades.',
    price: '10,50 EUR',
    tag: 'Campania',
    image: menuImageSecondary,
  },
  {
    category: 'Dispensa',
    title: 'Vinaigre balsamique IGP Modena',
    description: 'Condiment dense et equilibre pour legumes grilles, parmesan et viandes blanches.',
    price: '12,50 EUR',
    tag: 'IGP',
    image: menuImageSecondary,
  },
]

export const contact = {
  address: ['Ma\' Pia Mercato Italiano', 'Paris, France'],
  hours: [
    'Lundi: ferme',
    'Mardi a Jeudi: 09:30 - 14:30 et 16:30 - 19:00',
    'Vendredi: 09:30 - 14:30 et 16:30 - 21:00',
    'Samedi: 09:30 - 15:30 et 16:30 - 19:00',
    'Dimanche: 10:00 - 13:00',
  ],
  email: 'ciao@mapia-mercato.it',
  phone: '',
  image: insideImageSecondary,
}
