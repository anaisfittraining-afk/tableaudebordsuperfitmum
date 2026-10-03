// ══════════════════════════════════════════════════════════════════════════════════════════════
// ── GUIDES NUTRITIONNELS co-NAÎTRE — modèles de base pour "🥗 Programme alimentaire" ───────────
// Repris des 3 guides Canva déjà utilisés en Onboarding (1400-1700 / 1700-2000 / 2000+ kcal),
// avec le branding co-NAÎTRE, prêts à assigner à une cliente comme un programme sportif. Chargé
// une seule fois par mealSeedTemplatesOnce() (voir tableau_superfitmum.html) tant que la bibliothèque
// de modèles est vide — n'écrase jamais un travail déjà commencé.
// ══════════════════════════════════════════════════════════════════════════════════════════════

var INTRO_8020 =
"Je veux te parler d'une approche géniale en matière d'alimentation : le 80/20.\n\n" +
"C'est super simple et ça te permet de garder un équilibre tout en te faisant plaisir. L'idée, c'est de viser à manger sain environ 80% du temps, et de te laisser une marge de 20% pour les petits plaisirs gourmands !\n\n" +
"Alors voilà comment ça marche : pour la majeure partie de ton assiette, on vise le top du top pour ta santé — des légumes frais, des protéines maigres, des bons gras comme ceux des avocats, et des féculents pleins de fibres. Tout ça pour booster ton énergie et te sentir au top !\n\n" +
"Ton assiette idéale : la moitié en légumes, un quart en protéines, un quart en féculents.\n\n" +
"Mais attends, c'est pas fini ! Les 20% restants, c'est pour toi, pour les moments où tu as envie de craquer un peu. Un petit dessert, un repas gourmand entre potes... Tout est permis ! L'important, c'est de savourer ces moments sans culpabilité.";

var GESTION_2020 =
"Il y a 2 façons d'utiliser ton 20% plaisir :\n\n" +
"1. En une seule fois\n" +
"Lorsque tu as une occasion spéciale (une soirée chez des amis, par exemple), où tu sais que tu vas pouvoir te permettre des écarts par rapport à ton plan habituel :\n" +
"– Anticipe et planifie : décide à l'avance comment tu vas utiliser tes 20% plaisir (un apéritif, le plat principal qui te fait vraiment envie, et pourquoi pas un dessert).\n" +
"– Profite pleinement : savoure chaque bouchée sans culpabilité, en te rappelant que c'est un moment exceptionnel.\n" +
"– Pas de privation : ne te prive pas avant ou après l'événement pour compenser. Retourne à tes habitudes saines dès le lendemain, sans culpabilité ni restriction.\n\n" +
"2. Réparti sur plusieurs jours de la semaine\n" +
"Si tu préfères répartir tes 20% plaisir sur la semaine :\n" +
"– Planifie des petites indulgences (un cookie après le dîner, un verre de vin le jeudi soir, une part de gâteau le dimanche...).\n" +
"– Contrôle les portions : satisfais tes envies sans excès, en restant consciente de ce que tu consommes.\n" +
"– Savoure sans culpabilité, tout en restant attentive à tes objectifs de santé globaux.\n\n" +
"En suivant ces conseils, tu peux utiliser ton 20% plaisir de manière équilibrée — en une seule fois ou réparti sur la semaine — tout en maintenant une alimentation globalement saine.";

var PLAN_ACTION =
"1. Respecte la répartition de tes apports caloriques sur la journée\n" +
"En respectant ton plan nutritionnel 100% personnalisé, en utilisant la méthode 80/20.\n\n" +
"2. Liste-moi tout ce que tu manges\n" +
"Je te demande d'être honnête avec toi et avec moi. Tout ce que tu manges doit apparaître dans ce tableau. Tu l'enverras à ta coach pendant les 4 premières semaines du coaching.\n\n" +
"3. Conscientise ta faim lors des craquages\n" +
"Pose-toi les questions : est-ce que j'ai vraiment faim ou c'est de la gourmandise ? Vais-je culpabiliser ou pas ?";

var EQUIV_COMMUNES =
"1 portion de laitage correspond à :\n" +
"– 200ml de lait demi-écrémé\n" +
"– 1 yaourt nature de 125g\n" +
"– 1 gros « petit-suisse » de 60g (ou 2 de 30g)\n" +
"– 125g de fromage blanc à 3% de MG\n" +
"Fromages : 40g de camembert = 30g de cantal = 40g de brie = 30g d'emmental = 40g de fromage au lait cru = 40g de Pont-l'Évêque = 40g de Livarot = 40g de chèvre en bûche • 30g de cantal, emmental, comté, tomme de Savoie, gouda, bleu, 20g de Saint-Paulin, fromage des Pyrénées • 30g de Munster • 50g de fromage fondu type Vache qui rit • 50g de carré frais / Saint-Môret\n\n" +
"1 équivalence féculent correspond à :\n" +
"– 100g (3 à 4 c. à soupe) de riz, pâtes cuits\n" +
"– 100g (4 à 5 c. à soupe) de légumes secs, semoule cuits\n" +
"– 50g de pain tradition (1/6 de baguette)\n" +
"– 2 pommes de terre moyennes (200g)\n" +
"– 4 biscottes (de 8g)\n" +
"– 55g de pain complet = 50g de pain aux céréales = 50g de baguette tradition = 40g de farine blanche\n" +
"– 40g de muesli\n" +
"– 40g de flocons d'avoine\n\n" +
"1 équivalence lipides correspond à :\n" +
"– 10ml d'huile\n" +
"– 15g de beurre ou de margarine de tournesol\n" +
"– 25g de crème fraîche épaisse\n" +
"– 15g de mayonnaise\n\n" +
"1 équivalence légumes correspond à :\n" +
"– 150g en entrée, soit 3-4 c. à soupe\n" +
"– 200 à 250g en accompagnement seul, soit 5-6 c. à soupe\n" +
"– Les légumineuses et les courges (lentilles, petits pois) comptent comme des féculents\n\n" +
"1 équivalence glucides correspond à :\n" +
"1 pomme ou 1 poire de 150g, 1 orange ou 2 clémentines • 1 pêche ou 2 brugnons • 2 abricots ou 2 prunes • 1/2 pamplemousse • 100g de cerises • 200g de fraises, framboises ou myrtilles • 300g de pastèque • 100g de raisins • 1 petite banane • 2 kiwis • 150g de compote sans sucre ajouté • 2 morceaux de sucre • 10g de sucre en poudre • 15g de confiture, miel, gelée • 100ml de boisson sucrée type soda • 15g de chocolat noir 70% (2 à 4 carrés) • 1 boule de glace (30g) • 15g de pâte à tartiner\n\n" +
"1 portion d'oléagineux et de fruits secs correspond à :\n" +
"10 amandes • 8 noisettes • 4 noix • 20 cacahuètes • 10 noix de cajou • 6 abricots secs • 8 pruneaux • 30 raisins secs";

var EXEMPLE_JOURS = [
  { label: 'Jour 1', pdj: "1 portion de yaourt grec faible en gras avec des baies et des amandes effilées. 1 œuf poché.", col1: "1 portion de fruits frais (pomme, poire, orange).", dej: "Salade de poulet grillé avec des légumes verts, des tomates, des concombres et une vinaigrette légère. 1 tranche de pain de blé entier.", col2: "1 portion de fromage cottage faible en gras.", din: "Filet de poisson cuit au four avec des légumes rôtis (courgettes, poivrons, carottes). 1 petite portion de quinoa cuit." },
  { label: 'Jour 2', pdj: "Smoothie protéiné avec du lait d'amande, des épinards, de la banane et de la poudre de protéines.", col1: "1 poignée de noix mélangées (noix, amandes, noix du Brésil).", dej: "Wrap à la dinde avec des légumes et de l'avocat dans une tortilla de blé entier. Crudités avec houmous.", col2: "1 portion de yaourt grec avec des graines de chia.", din: "Poulet sauté avec des légumes (brocoli, haricots verts, champignons) dans une sauce légère à base de bouillon de poulet." },
  { label: 'Jour 3', pdj: "Omelette aux légumes (poivrons, oignons, épinards). 1 tranche de pain de blé entier.", col1: "Bâtonnets de légumes avec houmous.", dej: "Salade de thon avec des légumes variés, des olives et une vinaigrette légère. Quinoa ou riz brun.", col2: "1 portion de yaourt grec avec des baies.", din: "Chili aux haricots noirs et à la dinde maigre, servi avec une petite quantité de riz brun." },
  { label: 'Jour 4', pdj: "1 portion de flocons d'avoine cuits avec des myrtilles et des noix. 1 verre de lait d'amande non sucré.", col1: "1 petite poignée de graines de tournesol.", dej: "Wrap de laitue avec du poulet rôti, des légumes grillés et de l'avocat. Carottes et céleri avec trempette au yogourt grec.", col2: "1 portion de yaourt grec avec une pincée de cannelle.", din: "Saumon cuit au four avec asperges grillées et quinoa aux herbes." },
  { label: 'Jour 5', pdj: "Smoothie aux épinards, banane, beurre d'amande et lait d'amande non sucré.", col1: "1 portion de bâtonnets de concombre et de poivron rouge.", dej: "Salade de poulet avec des légumes colorés, des noix et une vinaigrette légère. 1 petite portion de pain complet.", col2: "1 portion de fromage cottage avec des framboises.", din: "Poitrine de dinde grillée avec haricots verts sautés à l'ail et pommes de terre douces rôties." },
  { label: 'Jour 6', pdj: "2 œufs brouillés avec des épinards et des tomates. 1 tranche de pain de seigle.", col1: "1 portion de fruits (kiwi, fraises, etc.).", dej: "Bol de soupe de légumes avec une salade mixte. 1 portion de crackers de grains entiers.", col2: "Bâtonnets de légumes avec trempette à base de yogourt grec.", din: "Tacos de poisson avec tortillas de maïs, salsa aux tomates, salade de chou et guacamole." },
  { label: 'Jour 7', pdj: "1 portion de yaourt grec avec des baies et des graines de chia.", col1: "1 poignée d'amandes.", dej: "Salade de thon avec des légumes variés, des haricots rouges et une vinaigrette légère. Quinoa cuit.", col2: "1 petite portion de houmous avec des bâtonnets de carotte.", din: "Poitrine de poulet farcie aux épinards et au fromage cottage, accompagnée de brocoli vapeur." }
];

function _mealIntroSections() {
  return [
    { id: 'ms-intro', type: 'texte', titre: "Introduction — la méthode 80/20", corps: INTRO_8020 },
    { id: 'ms-2020', type: 'texte', titre: "Gérer tes 20% plaisir", corps: GESTION_2020 },
    { id: 'ms-action', type: 'texte', titre: "Plan d'action nutrition", corps: PLAN_ACTION }
  ];
}
function _mealExempleSection() {
  return { id: 'ms-exemple', type: 'repas', titre: "Exemple de menu sur 7 jours", intro: '', jours: EXEMPLE_JOURS.map(function(j, i) {
    return { id: 'mj-ex' + (i + 1), label: j.label, pdj: j.pdj, col1: j.col1, dej: j.dej, col2: j.col2, din: j.din };
  }) };
}

window.MEALPLAN_SEED_TEMPLATES = [
  {
    id: 'mtpl-1400-1700',
    nom: 'Plan nutritionnel 1400-1700 kcal',
    description: "Pour les clientes dont l'objectif calorique quotidien se situe entre 1400 et 1700 kcal — méthode 80/20, équivalences alimentaires et exemple de menu sur 7 jours.",
    accent: '#6B8F71',
    icone: '🥗',
    sections: _mealIntroSections().concat([
      {
        id: 'ms-conseils-1400', type: 'texte', titre: 'Conseils',
        corps: "Pèse les féculents et les lipides\nCela te prendra moins de 5 minutes par jour et te permettra de maîtriser aisément ce qui fait pencher la balance en défaveur de ta perte de poids.\nLes féculents ne doivent pas dépasser 50% de ton apport calorique, soit 835 cal.\n\n" +
          "Astuces :\n– Mâche plus (entre 30 et 40 mastications par bouchée)\n– Améliore la qualité de ton sommeil si possible\n– Augmente ton nombre de pas par jour (minimum 8000 pas)\n– Mange des crudités avant le repas\n– Concentre-toi sur la nourriture (évite de manger devant la TV)\n\n" +
          "Base : 1600 cal — 100g de protéines — minimum 850g de fruits et légumes."
      },
      {
        id: 'ms-journee-1400', type: 'repas', titre: 'Ton alimentation au quotidien', intro: '',
        jours: [{ id: 'mj-jour-1400', label: 'Chaque jour',
          pdj: "1 eq féculent\n1 eq glucide ou laitage\n1 eq lipide\n1 eq protéine\n1 boisson chaude sans sucre",
          col1: "1 fruit ou 1 laitage",
          dej: "1 eq protéine\n300 g de légumes\n1 eq féculent (si tu prends un laitage, diminue la portion de féculent à 0,5)\n1 eq lipide\n1 fruit",
          col2: "1 fruit ou 1 laitage\n1 eq protéine (le fromage blanc ou petit-suisse fait l'affaire)",
          din: "1 eq protéine\n250 g de légumes\n1 eq féculent\n1 eq lipide\n1 fruit" }]
      },
      { id: 'ms-equiv-1400', type: 'texte', titre: 'Les équivalences alimentaires', corps:
        "1 équivalence protéine correspond à :\n100g d'abats • 100g de viande maigre • 80g de faux-filet • 150g de poisson • 100g de mollusques ou 100g de crustacés • 100g de jambon blanc dégraissé découenné • 2 œufs • 130g de thon au naturel • 80g de maquereau\n\n" + EQUIV_COMMUNES
      },
      _mealExempleSection()
    ])
  },
  {
    id: 'mtpl-1700-2000',
    nom: 'Plan nutritionnel 1700-2000 kcal',
    description: "Pour les clientes dont l'objectif calorique quotidien se situe entre 1700 et 2000 kcal — méthode 80/20, équivalences alimentaires et exemple de menu sur 7 jours.",
    accent: '#3F5D46',
    icone: '🍽️',
    sections: _mealIntroSections().concat([
      {
        id: 'ms-conseils-1700', type: 'texte', titre: 'Conseils',
        corps: "Pèse les féculents et les lipides\nCela te prendra moins de 5 minutes par jour et te permettra de maîtriser aisément ce qui fait pencher la balance en défaveur de ta perte de poids.\nLes féculents ne doivent pas dépasser 60% de ton apport calorique, soit 1100 cal.\n\n" +
          "Astuces :\n– Mâche plus (entre 30 et 40 mastications par bouchée)\n– Améliore la qualité de ton sommeil si possible\n– Augmente ton nombre de pas par jour (minimum 8000 pas)\n– Mange des crudités avant le repas\n– Concentre-toi sur la nourriture (évite de manger devant la TV)\n\n" +
          "Ne consomme que des féculents complets, pas de sucre rapide, mange les légumes avant les féculents."
      },
      {
        id: 'ms-journee-1700', type: 'repas', titre: 'Ton alimentation au quotidien', intro: '',
        jours: [{ id: 'mj-jour-1700', label: 'Chaque jour',
          pdj: "1 eq féculent\n1 eq glucide ou laitage\n1 eq lipide\n1 eq protéine\n1 boisson chaude sans sucre",
          col1: "1 fruit ou 1 laitage\n1 eq oléagineux",
          dej: "1 eq protéine\n300 g de légumes\n1 eq féculent (si tu prends un laitage, diminue la portion de féculent à 0,5)\n1 eq lipide\n1 fruit",
          col2: "1 fruit ou 1 laitage\n1 eq protéine (le fromage blanc ou petit-suisse fait l'affaire)",
          din: "1 eq protéine\n250 g de légumes\n1 eq féculent\n1 eq lipide\n1 fruit" }]
      },
      { id: 'ms-equiv-1700', type: 'texte', titre: 'Les équivalences alimentaires', corps:
        "1 équivalence protéine correspond à :\n100g d'abats • 100g de viande maigre • 80g de faux-filet • 150g de poisson • 100g de mollusques ou 100g de crustacés • 100g de jambon blanc dégraissé découenné • 2 œufs • 130g de thon au naturel • 80g de maquereau\n\n" + EQUIV_COMMUNES
      },
      _mealExempleSection()
    ])
  },
  {
    id: 'mtpl-2000plus',
    nom: 'Plan nutritionnel 2000+ kcal',
    description: "Pour les clientes dont l'objectif calorique quotidien dépasse 2000 kcal — méthode 80/20, équivalences alimentaires (dont un détail protéines végétales/animales) et exemple de menu sur 7 jours.",
    accent: '#8C6E4A',
    icone: '🍲',
    sections: _mealIntroSections().concat([
      {
        id: 'ms-conseils-2000', type: 'texte', titre: 'Conseils',
        corps: "Pèse les féculents et les lipides\nCela te prendra moins de 5 minutes par jour et te permettra de maîtriser aisément ce qui fait pencher la balance en défaveur de ta perte de poids.\nLes féculents ne doivent pas dépasser 60% de ton apport calorique, soit 1200 cal (20% plaisir inclus).\n\n" +
          "Astuces :\n– Mâche plus (entre 30 et 40 mastications par bouchée)\n– Améliore la qualité de ton sommeil si possible\n– Augmente ton nombre de pas par jour (minimum 8000 pas) ou ajoute du vélo le matin\n– Mange des crudités avant le repas\n– Concentre-toi sur la nourriture (évite de manger devant la TV)\n\n" +
          "Ne consomme que des féculents complets, pas de sucre rapide, mange les légumes avant les féculents."
      },
      {
        id: 'ms-journee-2000', type: 'repas', titre: 'Ton alimentation au quotidien', intro: '',
        jours: [{ id: 'mj-jour-2000', label: 'Chaque jour',
          pdj: "1,5 eq féculent\n1 eq glucide ou laitage\n1 eq lipide\n1 eq protéine\n1 boisson chaude sans sucre",
          col1: "1 fruit et 1 laitage\n1 eq oléagineux",
          dej: "1 eq protéine\n300 g de légumes\n1,5 eq féculent (si tu prends un laitage, diminue la portion de féculent à 0,5)\n1 eq lipide\n1 fruit",
          col2: "1 fruit et 1 laitage\n1 eq protéine (le fromage blanc ou petit-suisse fait l'affaire)",
          din: "1 eq protéine\n250 g de légumes\n1 eq féculent\n1 eq lipide\n1 fruit" }]
      },
      { id: 'ms-equiv-2000', type: 'texte', titre: 'Les équivalences alimentaires', corps:
        "1 équivalence protéine correspond à :\n150g d'abats • 150g de viande maigre • 120g de faux-filet • 225g de poisson maigre • 150g de mollusques ou 100g de crustacés • 150g de jambon blanc dégraissé découenné • 2 œufs • 195g de thon au naturel • 120g de poisson gras\n\n" + EQUIV_COMMUNES
      },
      { id: 'ms-equiv2-2000', type: 'texte', titre: 'Varier tes sources de protéines', corps:
        "🌿 1 équivalence protéines végétales\n" +
        "Légumineuses : 100g de lentilles cuites (~9g de protéines) • 100g de pois chiches cuits (~8g) • 100g de haricots rouges cuits (~8g) • 100g de soja cuit (~12g)\n" +
        "Céréales & graines : 100g de quinoa cuit (~4g) • 100g de riz complet cuit (~2,5g) • 100g de flocons d'avoine (~13g) • 30g de graines de chia (~5g) • 30g de graines de courge (~8g)\n" +
        "Fruits à coque & oléagineux : 30g d'amandes (~6g) • 30g de noix de cajou (~5g) • 30g de cacahuètes (~7g) • 20g de beurre de cacahuète (~6g)\n" +
        "Soja & alternatives : 100g de tofu (~8g) • 100g de tempeh (~19g) • 100g de seitan (~21g)\n\n" +
        "🍖 1 équivalence protéines animales\n" +
        "Viandes & abats : 150g d'abats • 150g de viande maigre • 120g de faux-filet\n" +
        "Poissons & fruits de mer : 225g de poisson maigre • 150g de mollusques ou 150g de crustacés • 195g de thon au naturel • 120g de maquereau\n" +
        "Œufs & produits laitiers : 2 œufs (~12g) • 150g de jambon blanc dégraissé découenné • 150g de fromage blanc (~8g) • 150g de yaourt nature (~4g) • 30g de fromage (~7g)"
      },
      _mealExempleSection()
    ])
  }
];
