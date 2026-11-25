// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROGRAMME ALIMENTAIRE — modèles de base, repris fidèlement du contenu des 5 guides Canva déjà
// utilisés en Onboarding (1400-1700 kcal, 1700-2000 kcal, +2000 kcal, Ramadan, Plan Booster),
// réécrits avec le branding co-NAÎTRE. Ce fichier ne sert qu'à SEEDER les modèles une seule fois
// (première ouverture de l'onglet Programme alimentaire) — après quoi tout vit dans localStorage
// (SFM_MEALPLAN_TEMPLATES_KEY) exactement comme les modèles de programme sportif, et Anaïs peut
// librement les modifier, dupliquer ou en créer de nouveaux depuis le tableau de bord.
// Structure d'un modèle : { id, nom, description, accent, icone, sections:[...] }
//   - section de type 'texte'  : { type:'texte',  titre, corps }               → paragraphe(s) libres
//   - section de type 'repas'  : { type:'repas',  titre, intro, jours:[...] }  → grille repas/jour(s)
//     jour : { id, label, pdj, col1, dej, col2, din }
// ══════════════════════════════════════════════════════════════════════════════════════════════
(function () {
  function s(id) { return 'ms_' + id; }
  function j(id, label, pdj, col1, dej, col2, din) {
    return { id: id, label: label || '', pdj: pdj || '', col1: col1 || '', dej: dej || '', col2: col2 || '', din: din || '' };
  }

  // ── Le menu-exemple de 7 jours est strictement identique dans les 3 guides "1400-1700",
  // "1700-2000" et "+2000" (seules les quantités-équivalences par repas changent) — on ne le tape
  // donc qu'une fois et on le réutilise pour les trois. ──
  var EXEMPLE_MENU_7J = [
    j('j1', 'Jour 1',
      "1 portion de yaourt grec faible en gras avec des baies et des amandes effilées.\n1 œuf poché.",
      "1 portion de fruits frais (pomme, poire, orange).",
      "Salade de poulet grillé avec des légumes verts, des tomates, des concombres et une vinaigrette légère.\n1 tranche de pain de blé entier.",
      "1 portion de fromage cottage faible en gras.",
      "Filet de poisson cuit au four avec des légumes rôtis (courgettes, poivrons, carottes).\n1 petite portion de quinoa cuit."),
    j('j2', 'Jour 2',
      "Smoothie protéiné avec du lait d'amande, des épinards, de la banane et de la poudre de protéines.",
      "1 poignée de noix mélangées (noix, amandes, noix du Brésil).",
      "Wrap à la dinde avec des légumes et de l'avocat dans une tortilla de blé entier.\nCrudités avec houmous.",
      "1 portion de yaourt grec avec des graines de chia.",
      "Poulet sauté avec des légumes (brocoli, haricots verts, champignons) dans une sauce légère à base de bouillon de poulet."),
    j('j3', 'Jour 3',
      "Omelette aux légumes (poivrons, oignons, épinards).\n1 tranche de pain de blé entier.",
      "Bâtonnets de légumes avec houmous.",
      "Salade de thon avec des légumes variés, des olives et une vinaigrette légère.\nQuinoa ou riz brun.",
      "1 portion de yaourt grec avec des baies.",
      "Chili aux haricots noirs et à la dinde maigre, servi avec une petite quantité de riz brun."),
    j('j4', 'Jour 4',
      "1 portion de flocons d'avoine cuits avec des myrtilles et des noix.\n1 verre de lait d'amande non sucré.",
      "1 petite poignée de graines de tournesol.",
      "Wrap de laitue avec du poulet rôti, des légumes grillés et de l'avocat.\nCarottes et céleri avec trempette au yaourt grec.",
      "1 portion de yaourt grec avec une pincée de cannelle.",
      "Saumon cuit au four avec asperges grillées et quinoa aux herbes."),
    j('j5', 'Jour 5',
      "Smoothie aux épinards, banane, beurre d'amande et lait d'amande non sucré.",
      "1 portion de bâtonnets de concombre et de poivron rouge.",
      "Salade de poulet avec des légumes colorés, des noix et une vinaigrette légère.\n1 petite portion de pain complet.",
      "1 portion de fromage cottage avec des framboises.",
      "Poitrine de dinde grillée avec haricots verts sautés à l'ail et pommes de terre douces rôties."),
    j('j6', 'Jour 6',
      "2 œufs brouillés avec des épinards et des tomates.\n1 tranche de pain de seigle.",
      "1 portion de fruits (kiwi, fraises, etc.).",
      "Bol de soupe de légumes avec une salade mixte.\n1 portion de crackers de grains entiers.",
      "Bâtonnets de légumes avec trempette à base de yaourt grec.",
      "Tacos de poisson avec tortillas de maïs, salsa aux tomates, salade de chou et guacamole."),
    j('j7', 'Jour 7',
      "1 portion de yaourt grec avec des baies et des graines de chia.",
      "1 poignée d'amandes.",
      "Salade de thon avec des légumes variés, des haricots rouges et une vinaigrette légère.\nQuinoa cuit.",
      "1 petite portion de houmous avec des bâtonnets de carotte.",
      "Poitrine de poulet farcie aux épinards et au fromage cottage, accompagnée de brocoli vapeur.")
  ];

  var METHODE_8020 = {
    id: s('t_8020'), type: 'texte', titre: 'La méthode 80/20',
    corps: "Le principe est simple : viser à manger sain environ 80 % du temps, et se garder une marge de 20 % pour les petits plaisirs gourmands — sans jamais culpabiliser.\n\n" +
      "Sur la majeure partie de l'assiette, on vise le top du top pour la santé : des légumes frais, des protéines maigres, de bons gras (avocat, huile d'olive, oléagineux) et des féculents complets riches en fibres.\n\n" +
      "Assiette idéale : la moitié en légumes, un quart en protéines, un quart en féculents.\n\n" +
      "Les 20 % restants sont pour les moments plaisir : un dessert, un repas gourmand entre amis... tout est permis, du moment que ça reste savouré sans culpabilité."
  };
  var GESTION_20 = {
    id: s('t_g20'), type: 'texte', titre: 'Gérer ses 20 % plaisir',
    corps: "Deux façons d'utiliser ses 20 % plaisir, au choix :\n\n" +
      "1. En une seule fois, pour une occasion spéciale (soirée entre amis, sortie...) :\n" +
      "• Anticiper et planifier à l'avance comment profiter de ce moment (apéritif, plat plaisir, dessert).\n" +
      "• Profiter pleinement de l'instant, sans culpabilité — c'est un moment exceptionnel.\n" +
      "• Ne pas se priver avant ni après pour « compenser » : reprendre ses habitudes saines dès le lendemain, sans restriction.\n\n" +
      "2. Réparties sur plusieurs jours de la semaine :\n" +
      "• Planifier de petites indulgences (un carré de chocolat, un verre de vin, une part de gâteau le dimanche...).\n" +
      "• Contrôler les portions pour satisfaire l'envie sans excès.\n" +
      "• Savourer sans culpabilité, en restant attentive à l'objectif global."
  };
  var PLAN_ACTION = {
    id: s('t_pa'), type: 'texte', titre: "Plan d'action nutrition",
    corps: "1. Respecter la répartition des apports caloriques sur la journée, en suivant le plan nutritionnel personnalisé et la méthode 80/20.\n\n" +
      "2. Noter tout ce qui est mangé, en toute honnêteté — ce suivi est à envoyer à la coach pendant les 4 premières semaines de coaching.\n\n" +
      "3. Conscientiser sa faim lors des craquages : est-ce vraiment de la faim ou de la gourmandise ? Est-ce que je vais culpabiliser ou pas ?"
  };
  function conseilsAstuces(extra) {
    return {
      id: s('t_ca'), type: 'texte', titre: 'Conseils & astuces',
      corps: "Pèse les féculents et les lipides — ça prend moins de 5 minutes par jour et ça permet de maîtriser facilement ce qui fait pencher la balance." + (extra ? ('\n' + extra) : '') + "\n\n" +
        "Astuces au quotidien :\n" +
        "• Mâcher plus (30 à 40 mastications par bouchée).\n" +
        "• Améliorer la qualité du sommeil autant que possible.\n" +
        "• Augmenter le nombre de pas par jour (minimum 8000 pas).\n" +
        "• Manger des crudités avant le repas.\n" +
        "• Se concentrer sur la nourriture — éviter les écrans pendant les repas."
    };
  }
  function equivalences(withVegetales) {
    var corps = "1 portion de laitage correspond à :\n" +
      "• 200 ml de lait demi-écrémé, 1 yaourt nature (125g), 1 gros « petit suisse » (60g), 125g de fromage blanc à 3 % de MG.\n" +
      "• Fromages : 40g de camembert / cantal / brie / emmental / Pont-l'Évêque / Livarot / chèvre en bûche ; 30g de comté, tomme de Savoie, gouda, bleu, Saint-Paulin ; 30g de Munster ; 50g de fromage fondu type Vache qui rit ; 50g de carré frais ou saint-morêt.\n\n" +
      "1 équivalence légumes correspond à :\n" +
      "• 150g en entrée (3-4 c. à s.), ou 200 à 250g en accompagnement seul (5-6 c. à s.).\n" +
      "• Les légumineuses et les courges (lentilles, petits pois) comptent comme des féculents.\n\n" +
      "1 équivalence protéines correspond à :\n" +
      "• 100g d'abats, 100g de viande maigre, 80g de faux-filet, 150g de poisson, 100g de mollusques ou crustacés, 100g de jambon blanc dégraissé découenné, 2 œufs, 130g de thon au naturel, 80g de maquereau.\n\n" +
      (withVegetales ? (
        "1 équivalence protéines végétales correspond à :\n" +
        "• Légumineuses : 100g de lentilles cuites (~9g), 100g de pois chiches cuits (~8g), 100g de haricots rouges cuits (~8g), 100g de soja cuit (~12g).\n" +
        "• Céréales & graines : 100g de quinoa cuit (~4g), 100g de riz complet cuit (~2,5g), 100g de flocons d'avoine (~13g), 30g de graines de chia (~5g), 30g de graines de courge (~8g).\n" +
        "• Fruits à coque & oléagineux : 30g d'amandes (~6g), 30g de noix de cajou (~5g), 30g de cacahuètes (~7g), 20g de beurre de cacahuète (~6g).\n" +
        "• Soja & alternatives : 100g de tofu (~8g), 100g de tempeh (~19g), 100g de seitan (~21g).\n\n"
      ) : '') +
      "1 équivalence féculent correspond à :\n" +
      "• 100g de riz ou pâtes cuits (3-4 c. à s.), 100g de légumes secs ou semoule cuits (4-5 c. à s.), 50g de pain tradition (1/6 de baguette), 2 pommes de terre moyennes (200g), 4 biscottes (8g), 55g de pain complet / pain aux céréales / 50g de baguette tradition / 40g de farine blanche, 40g de muesli, 40g de flocons d'avoine.\n\n" +
      "1 équivalence lipides correspond à :\n" +
      "• 10ml d'huile, 15g de beurre ou margarine de tournesol, 25g de crème fraîche épaisse, 15g de mayonnaise.\n\n" +
      "1 équivalence glucides / fruit correspond à :\n" +
      "• 1 pomme, 1 poire (150g), 1 orange ou 2 clémentines, 1 pêche ou 2 brugnons, 2 abricots ou 2 prunes, 1/2 pamplemousse, 100g de cerises, 200g de fraises/framboises/myrtilles, 300g de pastèque, 100g de raisins, 1 petite banane, 2 kiwis, 150g de compote sans sucre ajouté (ou, côté plaisir : 2 morceaux de sucre, 10g de sucre en poudre, 15g de confiture/miel/gelée, 100ml de boisson sucrée type soda, 15g de chocolat noir 70%, 1 boule de glace, 15g de pâte à tartiner).\n\n" +
      "1 portion d'oléagineux / fruits secs correspond à :\n" +
      "• 10 amandes, 8 noisettes, 4 noix, 20 cacahuètes, 10 noix de cajou, 6 abricots secs, 8 pruneaux, 30 raisins secs.";
    return { id: s('t_eq'), type: 'texte', titre: 'Les équivalences', corps: corps };
  }
  function exempleMenu() {
    return { id: s('t_menu'), type: 'repas', titre: 'Exemple de menu (7 jours)', intro: '', jours: EXEMPLE_MENU_7J };
  }

  var TPL_1400 = {
    id: 'mealtpl_1400_1700', nom: 'Plan nutritionnel 1400-1700 kcal', accent: '#3F5D46', icone: '🌿',
    description: 'Base du guide nutritionnel léger — déficit calorique doux.',
    sections: [
      METHODE_8020, GESTION_20, PLAN_ACTION, conseilsAstuces(),
      { id: s('t_repere1400'), type: 'repas', titre: 'Repères par repas', intro: "Environ 1600 kcal · ~100g de protéines · minimum 850g de fruits et légumes. Les féculents ne doivent pas dépasser 50 % de l'apport calorique, soit environ 835 kcal.",
        jours: [ j('jt', 'Jour type',
          "1 éq. féculent (complet) · 1 éq. glucide ou laitage · 1 éq. lipide · 1 éq. protéine · 1 boisson chaude sans sucre",
          "(10h) 1 fruit ou 1 laitage",
          "1 éq. protéine · 300g de légumes · 1 éq. féculent (0,5 si laitage en plus) · 1 éq. lipide · 1 fruit",
          "(16h) 1 fruit ou 1 laitage · 1 éq. protéine (fromage blanc ou petit-suisse)",
          "1 éq. protéine · 250g de légumes · 1 éq. féculent · 1 éq. lipide · 1 fruit") ] },
      equivalences(false), exempleMenu()
    ]
  };
  var TPL_1700 = {
    id: 'mealtpl_1700_2000', nom: 'Plan nutritionnel 1700-2000 kcal', accent: '#2F6B6A', icone: '🌾',
    description: 'Base du guide nutritionnel équilibré — maintien / légère perte.',
    sections: [
      METHODE_8020, GESTION_20, PLAN_ACTION, conseilsAstuces("Les féculents ne doivent pas dépasser 60 % de l'apport calorique, soit environ 1100 kcal."),
      { id: s('t_repere1700'), type: 'repas', titre: 'Repères par repas', intro: "Ne consommer que des féculents complets · pas de sucre rapide · manger les légumes avant les féculents.",
        jours: [ j('jt', 'Jour type',
          "1 éq. féculent (complet) · 1 éq. glucide ou laitage · 1 éq. lipide · 1 éq. protéine · 1 boisson chaude sans sucre",
          "(10h) 1 fruit ou 1 laitage + 1 éq. oléagineux",
          "1 éq. protéine · 300g de légumes · 1 éq. féculent (0,5 si laitage en plus) · 1 éq. lipide · 1 fruit",
          "(16h) 1 fruit ou 1 laitage · 1 éq. protéine (fromage blanc ou petit-suisse)",
          "1 éq. protéine · 250g de légumes · 1 éq. féculent · 1 éq. lipide · 1 fruit") ] },
      equivalences(false), exempleMenu()
    ]
  };
  var TPL_2000P = {
    id: 'mealtpl_2000plus', nom: 'Plan nutritionnel +2000 kcal', accent: '#B96A46', icone: '🔥',
    description: 'Base du guide nutritionnel renforcé — apport calorique plus élevé.',
    sections: [
      METHODE_8020, GESTION_20, PLAN_ACTION, conseilsAstuces("Les féculents ne doivent pas dépasser 60 % de l'apport calorique, soit environ 1200 kcal (20 % plaisir inclus). Astuce en plus : ajouter du vélo le matin si possible."),
      { id: s('t_repere2000'), type: 'repas', titre: 'Repères par repas', intro: "Ne consommer que des féculents complets · pas de sucre rapide · manger les légumes avant les féculents.",
        jours: [ j('jt', 'Jour type',
          "1,5 éq. féculent · 1 éq. glucide ou laitage · 1 éq. lipide · 1 éq. protéine · 1 boisson chaude sans sucre",
          "(10h) 1 fruit ET 1 laitage + 1 éq. oléagineux",
          "1 éq. protéine · 300g de légumes · 1,5 éq. féculent (0,5 si laitage en plus) · 1 éq. lipide · 1 fruit",
          "(16h) 1 fruit ET 1 laitage · 1 éq. protéine (fromage blanc ou petit-suisse)",
          "1 éq. protéine · 250g de légumes · 1 éq. féculent · 1 éq. lipide · 1 fruit") ] },
      equivalences(true), exempleMenu()
    ]
  };
  var TPL_RAMADAN = {
    id: 'mealtpl_ramadan', nom: 'Guide nutritionnel Ramadan', accent: '#5C3A5C', icone: '🌙',
    description: 'Alimentation, entraînement et récupération adaptés au jeûne du Ramadan.',
    sections: [
      { id: s('r_obj'), type: 'texte', titre: 'Objectifs', corps:
        "• Maintenir une alimentation équilibrée et adaptée au jeûne.\n" +
        "• Préserver la masse musculaire et éviter la fonte musculaire.\n" +
        "• Optimiser l'énergie pour ne pas subir de fatigue excessive.\n" +
        "• Continuer une activité physique adaptée." },
      { id: s('r_org'), type: 'texte', titre: 'Organisation des repas', corps:
        "Iftar (repas de rupture du jeûne) :\n" +
        "• Casser le jeûne avec trois dattes + 1 verre d'eau.\n" +
        "• Une soupe légère (chorba, velouté de légumes...).\n" +
        "• Un plat équilibré : protéines (poulet, viande maigre, poisson, œufs, légumineuses) + glucides lents à IG modéré (riz complet, patate douce, quinoa) + bonnes graisses (avocat, huile d'olive, amandes) + légumes en grande quantité.\n" +
        "• À éviter : plats frits, excès de sucre, sodas, excès de pain blanc.\n\n" +
        "Collation post-tarawih (facultatif mais conseillé) :\n" +
        "• Une source de protéines légères (yaourt grec, fromage blanc, shake protéiné).\n" +
        "• Une poignée d'oléagineux (amandes, noix).\n\n" +
        "Suhur (repas avant le jeûne, crucial) :\n" +
        "• Protéines lentes : œufs, fromage blanc, yaourt grec, amandes.\n" +
        "• Glucides complexes : flocons d'avoine, pain complet, banane.\n" +
        "• Hydratation : thé, eau, infusion.\n" +
        "• À éviter : sucre raffiné, viennoiseries, plats trop salés (risque de déshydratation)." },
      { id: s('r_ent'), type: 'texte', titre: "Organisation de l'entraînement", corps:
        "Meilleur timing :\n" +
        "• 1h avant l'iftar : entraînement léger à modéré (cardio basse intensité, musculation modérée).\n" +
        "• 1-2h après l'iftar : entraînement plus intense si l'énergie est là.\n\n" +
        "Type d'entraînement :\n" +
        "• Musculation légère à modérée : haltères, poids du corps, circuit.\n" +
        "• Cardio : marche rapide, vélo, HIIT léger.\n" +
        "• Stretching et mobilité : yoga, pilates.\n\n" +
        "À éviter : séances trop intenses en journée — risque de fatigue et de fonte musculaire." },
      { id: s('r_hyd'), type: 'texte', titre: 'Hydratation et sommeil', corps:
        "Hydratation :\n" +
        "• 1,5 à 2L d'eau entre l'iftar et le suhur.\n" +
        "• Infusion, eau de coco, eau citronnée pour reminéraliser.\n\n" +
        "Sommeil :\n" +
        "• Viser 6-7h de sommeil cumulé (sieste possible en journée)." },
      { id: s('r_pts'), type: 'texte', titre: 'Points clés pour la perte de poids', corps:
        "• Respecter un déficit calorique léger (pas trop strict, pour éviter la fatigue).\n" +
        "• Privilégier les protéines à chaque repas pour préserver la masse musculaire.\n" +
        "• Manger lentement et en conscience pour éviter de trop manger après le jeûne.\n" +
        "• Suivre ses progrès : se peser une fois par semaine, photos et mensurations." },
      { id: s('r_menu'), type: 'repas', titre: 'Post-Ramadan : reprise en douceur — menu type', intro: '',
        jours: [ j('pr', 'Jour type',
          "Option 1 : 2 œufs brouillés + 1 tranche de pain complet + ½ avocat, 1 fruit (kiwi, pomme, baies), 1 thé vert ou infusion.\nOption 2 : Skyr 3-5 % + 2 c. à s. de flocons d'avoine + graines de chia + fruits rouges, 1 poignée d'amandes.",
          "",
          "Option 1 : Blanc de poulet grillé ou tofu, légumes vapeur ou sautés (brocoli, carottes, poêlée de courgettes...), riz complet (ou quinoa ou patate douce), 1 c. à s. d'huile d'olive.\nOption 2 : Salade complète (lentilles + feta + concombre + tomates + huile d'olive + herbes fraîches), pain complet + fruit en dessert.",
          "Collation si besoin : 1 fruit + 1 poignée d'oléagineux, ou skyr + cannelle, ou smoothie (lait végétal + banane + beurre d'amande + graines de lin).",
          "Option 1 : soupe de légumes maison, 1 œuf dur ou 1 skyr, 1 tranche de pain complet.\nOption 2 : poêlée de légumes + filet de poisson ou tofu, compote de fruits sans sucre ajouté.") ] },
      { id: s('r_courses'), type: 'texte', titre: 'Liste de courses spéciale reprise', corps:
        "• Légumes et fruits frais : courgettes, carottes, brocoli, épinard, poivrons, pomme, banane, fruits rouges, kiwis, dattes.\n" +
        "• Protéines : œufs, blanc de poulet, thon, poisson, tofu, lentilles, pois chiches.\n" +
        "• Féculents complets : riz complet, quinoa, patate douce, pain complet, flocons d'avoine.\n" +
        "• Produits laitiers ou substituts : yaourt grec, skyr, lait végétal sans sucre ajouté.\n" +
        "• Bons gras : avocat, huile d'olive, huile de colza, amandes, noix, graines de chia.\n" +
        "• Divers : infusion, thé vert, épices (curcuma, cannelle), tahini, purée d'amande." },
      { id: s('r_routine'), type: 'texte', titre: 'Routine quotidienne — reconnexion bien-être', corps:
        "Matin :\n" +
        "• Se réveiller à heure fixe (± 30 min chaque jour).\n" +
        "• Un grand verre d'eau au réveil.\n" +
        "• Un moment pour soi (gratitude, respiration, prière, lumière naturelle).\n" +
        "• Petit-déjeuner complet.\n\n" +
        "Journée :\n" +
        "• Repas équilibrés avec légumes à chaque repas.\n" +
        "• Minimum 1,5L d'eau.\n" +
        "• 10 à 20 min de marche/mouvement.\n\n" +
        "Soir :\n" +
        "• Dîner léger avant 20h si possible.\n" +
        "• Déconnexion progressive (moins d'écran après 21h).\n" +
        "• Rituel détente : tisane, respiration, étirements.\n" +
        "• Coucher régulier pour retrouver un bon cycle circadien." }
    ]
  };
  var TPL_BOOSTER = {
    id: 'mealtpl_booster', nom: 'Plan Booster', accent: '#C05B4A', icone: '🚀',
    description: 'Relance métabolique courte, sur 7 jours en 3 étapes.',
    sections: [
      { id: s('b_intro'), type: 'texte', titre: 'Présentation', corps:
        "Ce programme se met en place quand le corps est en adaptation métabolique (phase de protection) — c'est complètement normal.\n\n" +
        "Il ne se met en place que quelques jours, pour donner un coup de boost au métabolisme. Il dure 7 jours au total, et peut être répété sur deux cycles." },
      { id: s('b_e1'), type: 'repas', titre: 'Étape 1 — 3 jours', intro: '',
        jours: [ j('e1', '', "40 à 50g de pain complet aux céréales + une fine couche de beurre de cacahuète, 1 skyr (100g), 1 thé/café sans sucre",
          "1 fruit",
          "200g de poisson blanc ou 150g de viande blanche, légumes verts à volonté (crudités, légumes cuits, soupe — sans oignon, carotte, pomme de terre), 1 c. à s. d'huile, de vinaigrette ou de crème de soja", "",
          "200g de poisson blanc ou 150g de viande, légumes verts à volonté (crudités, légumes cuits, soupe — sans oignon, carotte, pomme de terre), 1 c. à s. d'huile, de vinaigrette ou de crème de soja") ] },
      { id: s('b_e2'), type: 'repas', titre: 'Étape 2 — 2 jours', intro: '',
        jours: [ j('e2', '', "60g de pain complet aux céréales + une fine couche de beurre de cacahuète, 1 skyr (100g), 1 thé/café sans sucre",
          "1 fruit",
          "100g de viande blanche, légumes verts à volonté (sans oignon, carotte, pomme de terre), 1 c. à s. d'huile ou vinaigrette, 100g de féculent complet cuit, 1 fruit", "",
          "150g de viande, légumes verts à volonté, 1 c. à s. d'huile ou vinaigrette, 1 skyr (100g)") ] },
      { id: s('b_e3'), type: 'repas', titre: 'Étape 3 — 2 jours', intro: '',
        jours: [ j('e3', '', "60g de pain complet aux céréales + une fine couche de beurre de cacahuète, 1 skyr (100g), 1 thé/café sans sucre",
          "1 fruit",
          "100g de viande blanche, légumes verts à volonté (sans oignon, carotte, pomme de terre), 1 c. à s. d'huile ou vinaigrette, 100g de féculent complet cuit, 1 fruit", "",
          "100g de viande, légumes verts à volonté, 1 c. à s. d'huile ou vinaigrette, 100g de féculent complet cuit, 1 skyr (100g)") ] }
    ]
  };

  window.MEALPLAN_SEED_TEMPLATES = [TPL_1400, TPL_1700, TPL_2000P, TPL_RAMADAN, TPL_BOOSTER];
})();

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PLANS « REBOOST MÉNOPAUSE » — Phase 1, Phase 2 (Reboost ménopause) et Phase 3 (Ménopause active).
// Ajoutés une seule fois à la bibliothèque par mealAddExtraTemplatesOnce() (drapeau sfm2_mealplan_extra_v2),
// sans jamais toucher aux modèles déjà présents. Ensuite, tout se modifie depuis le tableau de bord.
// ══════════════════════════════════════════════════════════════════════════════════════════════
(function () {
  window.MEALPLAN_EXTRA_TEMPLATES = (window.MEALPLAN_EXTRA_TEMPLATES || []).concat([
 {
  "id": "mealtpl_phase1_reboost",
  "nom": "Phase 1 · Reboost ménopause",
  "accent": "#6F8F6C",
  "icone": "🌱",
  "description": "5 jours de détox alcaline pour purifier l'organisme, puis le menu des 10 jours et les recettes de la phase.",
  "sections": [
   {
    "id": "p1_intro",
    "type": "texte",
    "titre": "Programme · Phase 1 Reboost ménopause",
    "corps": "Le but de ces 5 premiers jours est de rendre votre organisme plus alcalin et de le purifier.\n\nLe plan alimentaire ci-dessous vous indique la marche à suivre pour ces 5 premiers jours.\n\nVous pouvez choisir les aliments que vous aimez à l'aide de la liste des aliments autorisés, ou simplement suivre les recettes adaptées fournies dans la partie Recettes (P'ti dej', Dej' et Dîner Phase 1).\n\nLes quantités précisées sont à adapter en fonction de votre faim. Vous devez être rassasiée en fin de repas."
   },
   {
    "id": "p1_m5",
    "type": "repas",
    "titre": "Menu des 5 premiers jours",
    "intro": "",
    "jours": [
     {
      "id": "p1_m5_j1",
      "label": "Jours 1 à 5",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 (voir les recettes) + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDej' Phase 1 (voir les recettes)",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Phase 1 (voir les recettes)"
     }
    ]
   },
   {
    "id": "p1_ind",
    "type": "texte",
    "titre": "Indications",
    "corps": "• Cuisson : vapeur, basse température (sous vide, à l'étouffée, à feu très doux, en mijoteuse, au bain-marie...).\n• Prendre le temps de manger (au moins 20 minutes) et avoir une bonne mastication.\n• Bien s'hydrater en buvant suffisamment entre les repas.\n• Prendre 1 cc de vinaigre de cidre avant les repas pour faciliter la digestion.\n• La constipation augmente l'acidité. Ajouter un probiotique, du magnésium ou de la vitamine C afin de faciliter le transit.\n• Penser aux infusions dans la matinée.\n• Ajouter 1 cc de beurre clarifié ou 1 CS d'huile TCM à votre café pour consolider l'apport en matières grasses. Vous pouvez utiliser cette boisson en cas de faim ou de fringale.\n• Ne pas manger entre les repas et ne pas faire de collations.\n• Mettre en place le mode de vie REBOOST."
   },
   {
    "id": "p1_ali",
    "type": "texte",
    "titre": "Les aliments autorisés",
    "corps": "Ces aliments sont :\n• Alcalinisants, afin de favoriser la détoxification des hormones (notamment les formes nocives d'œstrogènes) et la perte de poids.\n• Anti-inflammatoires, avec les oméga 3.\n• Riches en nutriments pour détoxifier le foie.\n• Pauvres en glucides pour stabiliser le taux d'insuline.\n\nSi possible, choisir des aliments d'origine biologique, frais et entiers, des protéines d'animaux sauvages plutôt que d'élevage, des œufs de poules élevées en plein air et des aliments provenant d'animaux nourris à l'herbe dans les pâturages plutôt qu'aux céréales.\n\nLÉGUMES\nAil, algues, asperge verte, aubergine, avocat, carotte, cébette, céleri, champignon, concombre, courgettes jaunes et vertes, épinards, fenouil, graines germées de luzerne, haricots verts et beurre, kimchi, légumes verts à feuille (laitue, blette, fane de betterave...), piment, jalapeno, pois mange-tout, poivron, pousse de bambou, radis, roquette, tomate.\n\nLÉGUMES ALCALINISANTS (détoxifient les formes nocives d'œstrogènes)\nBrocoli, chou de Bruxelles, chou cabus, chou-fleur, chou cavalier, chou kale.\n\nLÉGUMES QUI DÉTOXIFIENT LE FOIE\nCœur d'artichaut, oignon, ail et cébettes.\n\nHERBES AROMATIQUES ET ÉPICES\nBasilic (frais ou sec), cannelle en bâton, ciboulette fraîche, citron, citron vert, coriandre, estragon (frais ou sec), gingembre frais, laurier, menthe (fraîche ou séchée), moutarde, paprika, persil (frais ou sec), piment de la Jamaïque, piment rouge en flocons, poivre noir moulu, poudre d'ail, sel de mer.\n\nAROMATES QUI DÉTOXIFIENT LE FOIE\nCurcuma, origan, romarin, sauge, thym.\n\nPROTÉINES\nŒufs, poulet, dinde, bœuf, pancetta ou bacon (sans nitrates/nitrites), fromage de chèvre, poissons blancs (truite arc-en-ciel, tilapia, bar...), fruits de mer (crevettes, coquilles Saint-Jacques, huîtres), tofu, miso ou tempeh, protéines en poudre (collagène, protéines de pois ou de riz, avec moins de 3g de sucre par portion).\n\nFRUITS ET GRAINES OLÉAGINEUSES\nAmandes, purée/beurre d'amande, purée/beurre de noix de cajou, graines de chia, graines de courge, graines de lin, graines de sésame, graines de tournesol, noix, pistaches, olives.\n\nMATIÈRES GRASSES ET VINAIGRES\nBeurre clarifié (ghee) ou beurre biologique, huile d'avocat, huile d'olive vierge extra, huile de coco, huile de noix, huile de sésame, huile riche en TCM, vinaigre de cidre (non filtré), vinaigre de riz ou de coco.\n\nAUTRES\nBouillon d'os, câpres, crème de coco, crème fraîche, farine d'amande, levure nutritionnelle, maca en poudre, sauce curry rouge, sauce tamari, tahin.\n\nBOISSONS\nInfusion de camomille, infusion de cannelle, thé vert, thé chaï, café."
   },
   {
    "id": "p1_rec",
    "type": "texte",
    "titre": "Recommandations",
    "corps": "Pour rééquilibrer vos hormones, il faudra supprimer certains aliments.\n\nÉLIMINER LE SUCRE\nLe sucre ainsi que les édulcorants de synthèse affectent les hormones au quotidien. En grande quantité, c'est un puissant générateur d'inflammation. Il inhibe également les capteurs du cerveau qui empêchent les excès alimentaires...\n• Remplacer le sucre du thé/café par une petite quantité d'édulcorant naturel issu de la stévia, du xylitol ou du fruit du moine.\n• La cannelle ou l'extrait de vanille pure permettent également de pallier le besoin de goût sucré.\n\nÉLIMINER LES SODAS, MÊME LIGHT\nVous savez que les sodas ne sont pas bons pour la santé... mais les sodas light non plus !\nEn effet, ils contiennent de grandes quantités d'acide phosphorique, ce qui augmente le risque de fracture osseuse. Les sodas light sont donc très acides et peuvent même dissoudre l'émail des dents. Pour neutraliser cette acidité, le corps va puiser le calcium des os, ce qui entraîne une réduction de la densité minérale osseuse.\nDe plus, les édulcorants de synthèse présents dans ces sodas peuvent entraîner une prise de poids : ils déclenchent la résistance à l'insuline.\n\nÉLIMINER LE GLUTEN ET LES CÉRÉALES\nLe gluten est une protéine présente dans le blé, le seigle, l'orge, le malt, la levure de bière, dans certaines avoines, les chewing-gums, certains condiments (sauce soja, vinaigrettes), les cafés aromatisés, les soupes en conserve, les plats préparés...\n• Il convient donc de bien lire les étiquettes.\nLes aliments contenant du gluten peuvent perturber la digestion et les bactéries intestinales, car notre système digestif ne peut pas assimiler tout le gluten présent dans notre alimentation moderne.\n\nATTENTION AU CAFÉ ET À L'ALCOOL\nLe café a un pH de 5, il est donc moins acide qu'une boisson de type soda. De plus, il contient de nombreux antioxydants que le corps absorbe facilement.\nMais attention, l'excès de caféine entraîne une hausse du cortisol et d'autres hormones du stress, ce qui favorise la prise de poids.\n• Se limiter à 1 tasse par jour.\nLe thé vert est une véritable alternative au café, car il contient moins de caféine et apporte de nombreux antioxydants.\nL'alcool est une boisson qui a un effet dépressif et qui contient généralement beaucoup de sucre.\n• Même s'il est conseillé de boire un verre de vin rouge par jour à cause de l'antioxydant resvératrol, il est préférable de supprimer l'alcool pendant cette phase.\n\nAVOIR UNE BONNE HYDRATATION\nUne bonne hydratation permet d'avoir moins faim (la soif est souvent confondue avec la faim). Cela permet également aux reins d'éliminer les toxines et au foie de métaboliser les graisses avec plus d'efficacité.\nPour savoir si on boit assez, il suffit d'observer la couleur des urines : elles doivent être claires, non troubles et de couleur jaune pâle.\n• Il faut boire environ 1/30e de son poids idéal. Les apports d'eau sont bien sûr variables selon la température et l'activité physique.\nL'hydratation doit se faire entre les repas : lorsque l'on ingère des aliments, l'estomac sécrète des sucs digestifs. Les boissons diluent ces substances importantes et peuvent perturber la digestion.\n• Idéalement, vous pouvez boire 20 minutes avant le repas et 2h après ce dernier.\n\nAVOIR UNE BONNE MASTICATION\nUne bonne mastication aide la salive à dégrader la nourriture et facilite donc la digestion. Cela empêche les brûlures d'estomac, les ballonnements... Elle permet également de limiter les apports, car elle facilite la perception des signaux de satiété.\n• Mâcher chaque bouchée 20 à 30 fois et mastiquer en pleine conscience pour bien apprécier les aliments."
   },
   {
    "id": "p1_m10",
    "type": "repas",
    "titre": "Menu des 10 jours",
    "intro": "Petit déjeuner identique tous les jours ; déjeuner et dîner jour par jour.",
    "jours": [
     {
      "id": "p1_m10_j1",
      "label": "Jour 1",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade de pousses d’épinards, crevettes & noisettes",
      "col2": "",
      "din": "Poulet, champignons, coco"
     },
     {
      "id": "p1_m10_j2",
      "label": "Jour 2",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade de pousses d’épinards, avocat et oeufs mollets",
      "col2": "",
      "din": "Soupe crémeuse d’épinards + 150g de poulet cuit"
     },
     {
      "id": "p1_m10_j3",
      "label": "Jour 3",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Poulet pané, coco-amandes & carottes râpées",
      "col2": "",
      "din": "Cocotte de cabillaud, légumes au lait de coco"
     },
     {
      "id": "p1_m10_j4",
      "label": "Jour 4",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade tiède de poireaux et sardines",
      "col2": "",
      "din": "Emincé de boeuf au poivron"
     },
     {
      "id": "p1_m10_j5",
      "label": "Jour 5",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Wrap aux brocolis & oeufs",
      "col2": "",
      "din": "Wok de poulet aux poivrons"
     },
     {
      "id": "p1_m10_j6",
      "label": "Jour 6",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Taboulé de chou-fleur + 150g de boeuf grillé",
      "col2": "",
      "din": "Curry vert de julienne et haricots verts"
     },
     {
      "id": "p1_m10_j7",
      "label": "Jour 7",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade dinde avocat et tomates",
      "col2": "",
      "din": "Soupe de poireaux & radis noir + 2 oeufs"
     },
     {
      "id": "p1_m10_j8",
      "label": "Jour 8",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Bouillon légumes + smoothie",
      "col2": "",
      "din": "Bouillon légumes + smoothie"
     },
     {
      "id": "p1_m10_j9",
      "label": "Jour 9",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade de chou blanc, chèvre, jambon et noix",
      "col2": "",
      "din": "Bouillon légumes + smoothie"
     },
     {
      "id": "p1_m10_j10",
      "label": "Jour 10",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 1 + café ou infusion",
      "col1": "",
      "dej": "Salade de truite fumée",
      "col2": "",
      "din": "Soupe de légumes & dinde"
     }
    ]
   },
   {
    "id": "p1_cou",
    "type": "texte",
    "titre": "Liste de courses",
    "corps": "La liste de courses ci-dessous ne comprend pas les petits déjeuners ni les smoothies. Les ingrédients pour le bouillon de légumes sont prévus pour les 3 repas.\n\nLÉGUMES\n• 3 poignées de pousses d'épinards\n• 1.5 avocat\n• 2.5 citrons\n• 300g de carottes + 3.5\n• 1 petit poireau + 1 + 100g de blanc de poireau\n• 5 tomates cerises + 250g\n• 2 grandes feuilles de laitue\n• 200g de brocolis haché\n• 200g de champignons de Paris\n• 1 poivron rouge + 100g\n• 1 poivron vert\n• 100g de poivron jaune\n• 200g de chou-fleur\n• 2 tomates\n• 200g de chou blanc\n• 100g de céleri branche + 2 branches\n• 100g de radis noir\n• 200g d'haricots verts surgelés\n• 2.5 courgettes\n• 40g de chou chinois\n\nHERBES AROMATIQUES (fraîches ou surgelées)\n• Ciboulette\n• Persil\n• Coriandre\n• Basilic\n\nÉPICES / AROMATES\n• Vinaigre de cidre\n• Jus de citron\n• Curry\n• Échalotes, ail, oignon, oignon rouge\n• 2 CS de poivrons rouges en conserve\n• Romarin\n• Ail semoule\n• Piment\n• Paprika, curcuma\n• Moutarde\n• Sauce nuoc-mâm\n• 20 ml de jus de citron vert\n• 1 clou de girofle\n• Baies roses et genièvre\n• 10g de pâte de curry verte\n• Thym, laurier\n• Bouillon de légumes\n• Gingembre frais\n• Tamari\n\nVIANDE / POISSONS / ŒUFS / FROMAGE\n• 120g de crevettes roses\n• 7 œufs\n• 590g de blanc de poulet\n• 1 boîte de sardines à l'huile d'olive\n• 160g de steak de bœuf + 150g\n• 300g d'escalope de dinde\n• 120g de dés de jambon\n• 30g de fromage de chèvre\n• 80g de truite fumée\n• 150g de filet de julienne\n• 200g de cabillaud\n\nMATIÈRES GRASSES\n• Huile de cameline\n• Huile de noix\n• Huile d'olive\n• Huile de coco\n• Huile de sésame\n• 5 noisettes\n• 1 CS de tapenade noire\n• 5 cerneaux de noix + 2 CS de noix concassées\n• 15g de poudre d'amandes\n• 20g de noix de coco râpée\n• 2 CS de purée de sésame\n• 130g de crème de coco\n• 1 CS de pignons de pin + 20g\n• 2 CS de noix de macadamia\n• 20g de graines de courge\n• 2 CS de pistaches grillées\n• 150ml de lait de coco"
   },
   {
    "id": "p1_h_Petitsdéje",
    "type": "texte",
    "titre": "Recettes · Petits déjeuners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Eau chaude citronnée\n• Crêpes aux amandes\n• Flan coco\n• Yaourt graines de chia et cannelle\n• Pudding de chia au lait de coco et à l'avocat\n• Biscuits amandes, noisettes et cacao\n• Pancakes à l’avocat et graines\n• Omelette verte\n• Baconnais"
   },
   {
    "id": "p1_r10",
    "type": "texte",
    "titre": "Eau chaude citronnée",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 1 cc de jus de citron\n• 1 cc de vinaigre de cidre non filtré\n• Une pincée de poivre\n\nPRÉPARATION\n1. Mélanger le tout dans de l'eau chaude"
   },
   {
    "id": "p1_r11",
    "type": "texte",
    "titre": "Crêpes aux amandes",
    "corps": "Pour : 5 crêpes · Préparation : 5 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• 1 oeuf\n• 50g de purée d'amandes\n• 1 CS d'huile de coco\n• 1 pincée de sel\n\nPRÉPARATION\n1. Dans un mixeur ou à la main, mélanger l’oeuf, la purée d'amandes, 50ml d'eau, 1 cc d'huile de coco et le sel.\n2. Dans une poêle faire fondre un peu d'huile de coco, verser une louche de pâte et faire cuire la crêpe 30 seconde de chaque côté."
   },
   {
    "id": "p1_r12",
    "type": "texte",
    "titre": "Flan coco",
    "corps": "Pour : 2 flans · Préparation : 10 min · Cuisson : 40 min\n\nINGRÉDIENTS\n• 3 oeufs\n• 130ml de lait de coco\n• 50g de noix de coco râpée\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 180°C (th6).\n2. Fendre la gousse de vanille en 2 dans le sens de la longueur et récupérer les grains à l'aide de la pointe d'un couteau.\n3. Battre les oeufs, ajouter le lait de coco, la noix de coco râpée, la vanille et la cannelle.\n4. Verser dans 2 petits moules et cuire 40 minutes.\n5. Déguster tiède ou froid."
   },
   {
    "id": "p1_r13",
    "type": "texte",
    "titre": "Yaourt graines de chia et cannelle",
    "corps": "Pour : 2 personnes · Préparation : 4 h\n\nINGRÉDIENTS\n• 3 CS de graines de chia moulues\n• 40cl de lait végétal : amandes ou de coco\n• 1 cc de vanille en poudre\n• 1 cc de cannelle\n\nPRÉPARATION\n1. Dans un saladier, mélanger les graines de chia, le lait végétal, la vanille et la cannelle.\n2. Laisser reposer 10 min et mélanger de nouveau.\n3. Répartir dans 2 pots et réserver 4h au réfrigérateur."
   },
   {
    "id": "p1_r14",
    "type": "texte",
    "titre": "Pudding de chia au lait de coco et à l'avocat",
    "corps": "Pour : 2 personnes · Préparation : 2h\n\nINGRÉDIENTS\n• 1 avocat\n• 3 CS de graines de chia moulues\n• 3 CS de lait de coco\n• 2 CS de cacao en poudre\n• 2 cc de cannelle\n• 1 gousse de vanille\n• 1 CS d'huile de coco\n\nPRÉPARATION\n1. Dans un bol, verser les graines de chia, la cannelle, le lait de coco et 200ml d'eau.\n2. Remuer jusqu'à ce que le mélange devienne gélatineux (5 à 10 min).\n3. Réserver.\n4. Récupérer la chair de l'avocat.\n5. Dans un blinder, mixer l'avocat, l'huile de coco, le caco et les grains de vanille.\n6. Ajouter la préparation au chia, mixer de nouveau.\n7. Répartir dans 2 ramequins et réserver au réfrigérateur au minimum 2h."
   },
   {
    "id": "p1_r15",
    "type": "texte",
    "titre": "Biscuits amandes, noisettes et cacao",
    "corps": "Pour : 10 biscuits · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 25g de poudre de noisettes\n• 80g de poudre d'amandes\n• 1 cc de cacao cru en poudre\n• 2 oeufs\n• 1 CS d'huile de coco\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 170°C (th5)\n2. Mélanger tous les ingrédients.\n3. Etaler la pâte et former des cercles.\n4. Les déposer sur une feuille de papier cuisson et enfourner 15 min."
   },
   {
    "id": "p1_r16",
    "type": "texte",
    "titre": "Pancakes à l’avocat et graines",
    "corps": "Pour : 1 personne · Préparation : 5 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• ½ avocat bien mûr\n• 1 œuf (ou substitut végétal)\n• 1 CS de graines de lin moulues\n• 1 CS de purée de cajou ou d’amande\n• 1 pincée de vanille\n\nPRÉPARATION\n1. Mixer tous les ingrédients pour une pâte lisse.\n2. Cuire à la poêle anti-adhésive à feu doux (petits tas comme des pancakes).\n3. Déguster avec de la purée de noisette ou juste nature."
   },
   {
    "id": "p1_r17",
    "type": "texte",
    "titre": "Omelette verte",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 2 œufs\n• 1 poignée d'épinards frais\n• 1 CS d'huile d'olive ou de ghee\n• 1 CS de persil ou coriandre fraîchement ciselé\n• 1 filet de jus de citron\n• Sel, poivre\n\nPRÉPARATION\n1. Battre les œufs dans un bol avec une pincée de sel et de poivre.\n2. Chauffez l'huile dans un poêle antiadhésive.\n3. Faites revenir les épinards jusqu'à ce qu'ils ramollissent.\n4. Verser les œufs battus sur les épinards, saupoudrer d'herbes fraîches, et laisser cuire à feu doux jusqu'à ce que l'omelette soit prise.\n5. Servir avec un filet de citron."
   },
   {
    "id": "p1_r18",
    "type": "texte",
    "titre": "Baconnais",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 2 tranches de bacon\n• 1 oeuf\n• 1 tomates cocktail\n• 2 olives\n• 1/4 d’échalote\n• Sel, poivre\n\nPRÉPARATION\n1. Hacher grossièrement le bacon et le déposer dans un moule à muffin.\n2. Ajouter l’échalote, la tomates et les olives hachées.\n3. Casser l’oeuf dessus.\n4. Saler et poivrer.\n5. Cuire à 180°C pendant 12 à 15 minutes."
   },
   {
    "id": "p1_h_Déjeuners",
    "type": "texte",
    "titre": "Recettes · Déjeuners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Salade de pousses d’épinards, crevettes & noisettes\n• Salade de pousses de soja, crevettes, noix de macadamia\n• Salade tiède de poireaux et sardines\n• Poulet pané, coco-amandes & carottes râpées\n• Salade de pousses d’épinards, avocat et oeufs mollets\n• Salade d’endives aux anchois\n• Wrap aux brocolis & oeufs"
   },
   {
    "id": "p1_r20",
    "type": "texte",
    "titre": "Salade de pousses d’épinards, crevettes & noisettes",
    "corps": "Pour : 1 personne · Préparation : 10 min\n\nINGRÉDIENTS\n• 1 poignée de pousses d’épinards\n• 120g de crevettes roses\n• 5 noisettes\n• 1 CS d’huile de cameline\n• 1 CS de vinaigre de cidre\n• 1 CS de tapenade noire\n• Sel, poivre\n\nPRÉPARATION\n1. Rincer et sécher les pousses d’épinards.\n2. Décortiquer les crevettes et concasser les noisettes.\n3. Mettre tous les ingrédients dans un saladier.\n4. Dans un bol mélanger l’huile, le vinaigre et la tapenade.\n5. Saler, poivrer et verser sur la salade."
   },
   {
    "id": "p1_r21",
    "type": "texte",
    "titre": "Salade de pousses de soja, crevettes, noix de macadamia",
    "corps": "Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 50g de pousses de soja\n• 150g de concombre\n• 150g de crevettes roses cuites\n• 30g de noix de macadamia\n• 50g de crème de coco\n• 1/2 cc de curry en poudre\n• 1 pincée de piment\n• Le jus d'1/2 citron vert\n\nPRÉPARATION\n1. Rincer et égoutter les pousses de soja (si en conserve).\n2. Peler le concombre et le détailler en fins bâtonnets.\n3. Concasser grossièrement les noix de macadamia.\n4. Mélanger concombre, pousses de soja et noix de macadamia avec les crevettes.\n5. Dans un bol, mélanger la crème de coco avec le jus de citron vert, le curry et le piment.\n6. Verser sur la préparation aux crevettes.\n7. Mélanger et servir."
   },
   {
    "id": "p1_r22",
    "type": "texte",
    "titre": "Salade tiède de poireaux et sardines",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 1 boite de sardines à l’huile d’olive\n• 1 petit poireau\n• 5 tomates cerises\n• 1/2 échalote\n• Sel, poivre\n\nPRÉPARATION\n1. Laver et émincer finement le poireau.\n2. Le faire cuire 10 minutes à la vapeur.\n3. Couper les tomates cerises en 2.\n4. Hacher finement l’échalote.\n5. Egoutter grossièrement les sardines.\n6. Dans une assiette mettre les poireaux, les tomates cerises, l’échalote et déposer les sardines par dessus.\n7. Saler, poivrer si nécessaire."
   },
   {
    "id": "p1_r23",
    "type": "texte",
    "titre": "Poulet pané, coco-amandes & carottes râpées",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 130g de blanc de poulet\n• 15g de poudre d’amandes\n• 20g de noix de coco râpée\n• 1 oeuf\n• 1 CS d’huile de coco\n• 1 cc de curry\n• Sel, poivre\n• 200g de carottes\n• 1 CS d’huile d’olive\n• Jus de citron, ciboulette\n\nPRÉPARATION\n1. Dans une assiette creuse, mélanger la poudre d’amandes, la noix de coco râpée, le curry, saler et poivrer.\n2. Passer le poulet dans l’oeuf battu puis dans le mélange amandes.\n3. Faire chauffer 1 CS d’huile de coco dans une poêle et faire cuire le poulet 10 à 15 minutes.\n4. Râper les carottes et les assaisonner de jus de citron et huile d’olive.\n5. Saler, poivrer et parsemer de ciboulette."
   },
   {
    "id": "p1_r24",
    "type": "texte",
    "titre": "Salade de pousses d’épinards, avocat et oeufs mollets",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 6 min\n\nINGRÉDIENTS\n• 1 poignée de pousses d’épinards\n• 1/2 avocat\n• 2 oeufs\n• Le jus d’1/2 citron\n• 5 cerneaux de noix\n• 1 CS d’huile de noix\n• 1 CS de vinaigre de cidre\n• Sel, poivre\n\nPRÉPARATION\n1. Rincer et sécher les pousses d’épinards.\n2. Couper la chair de l’avocat en fines lamelles et les arroser de jus de citron.\n3. Dans un bol, mélanger l’huile, le vinaigre, saler et poivrer.\n4. Mélanger les pousses d’épinards avec l’avocat, les cerneaux de noix et la vinaigrette.\n5. Faire cuire les oeufs mollets, les écaler et servir avec la salade."
   },
   {
    "id": "p1_r25",
    "type": "texte",
    "titre": "Salade d’endives aux anchois",
    "corps": "Pour : 1 personne · Préparation : 10 min\n\nINGRÉDIENTS\n• 200g d’endives\n• 80g d’anchois à l’huile d’olive\n• 5 cerneaux de noix\n• 1 CS de câpres\n• 2 CS d’huile de noix ou cameline\n• 1 cc de tapenade\n\nPRÉPARATION\n1. Emincer les endives finement.\n2. Egoutter les anchois et les mélanger avec les endives.\n3. Ajouter les noix et les câpres.\n4. Dans un bol, émulsionner l’huile et la tapenade.\n5. Verser sur la salade et servir."
   },
   {
    "id": "p1_r26",
    "type": "texte",
    "titre": "Wrap aux brocolis & oeufs",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 2 oeufs\n• 2 CS de poivrons rouges en conserve\n• 2 grandes feuilles de laitue\n• 200g de brocolis haché\n• 1 CS de jus de citron\n• Ciboulette\n• 2 CS de purée de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Cuire les oeufs durs et les couper en tranches.\n2. Dans un saladier, mélanger la purée de sésame avec la ciboulette et le jus de citron.\n3. Ajouter le brocoli et mélanger. Réserver.\n4. Sur chaque feuille de laitue, répartir le mélange au brocoli, les oeufs et les poivrons grillés.\n5. Saler et poivrer.\n6. Rabattre les bords de la laitue sur la garniture et rouler en partant du bord."
   },
   {
    "id": "p1_h_Dîners",
    "type": "texte",
    "titre": "Recettes · Dîners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Poulet, champignons, coco\n• Soupe crémeuse d’épinards\n• Emincé de thon au sésame\n• Poêlée de poulet au chou\n• Cocotte de cabillaud, légumes au lait de coco\n• Wok de poulet aux poivrons\n• Emincé de boeuf au poivron"
   },
   {
    "id": "p1_r28",
    "type": "texte",
    "titre": "Poulet, champignons, coco",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 200g de champignons de Paris\n• 100g de crème de coco\n• 1 pincée de curry\n• 1 CS d’huile de coco\n• Sel, poivre\n\nPRÉPARATION\n1. Laver et couper les champignons en 4.\n2. Détailler le poulet en lanières.\n3. Dans une sauteuse, faire fondre l’huile de coco.\n4. Ajouter les champignons et faire revenir à feu doux pendant 5 minutes en remuant.\n5. Ajouter le poulet et poursuivre la cuisson 10 min à feu doux.\n6. En fin de cuisson, ajouter le curry et la crème de coco.\n7. Saler, poivrer, chauffer 2 à 3 min et servir."
   },
   {
    "id": "p1_r29",
    "type": "texte",
    "titre": "Soupe crémeuse d’épinards",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 5 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 1 belle poignée de pousses d’épinards frais\n• 1/2 avocat\n• 1 citron\n• 1/2 gousse d’ail\n• 1/2 oignon\n• 1 cc de romarin sec\n• 1 CS de pignons de pins\n• 2 CS de noix de macadamia\n\nPRÉPARATION\n1. Rincer les pousses d’épinards.\n2. Récupérer la chair de l’avocat.\n3. Presser le citron et hacher grossièrement l’ail et l’oignon.\n4. Mixer les pignons de pins et les noix de macadamia.\n5. Dans un mixer mettre tous les ingrédients avec 300ml d’eau.\n6. Mixer jusqu’à l’obtention d’une texture crémeuse.\n7. Déguster chaud ou froid."
   },
   {
    "id": "p1_r30",
    "type": "texte",
    "titre": "Emincé de thon au sésame",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• 150g de pavé de thon\n• 1 CS de graines de sésame\n• 1 CS d'huile d'olive\n• 1 petit poivron rouge\n• 1/2 avocat\n• 2 tomates cocktails\n• 1/2 citron\n• Coriandre ciselée\n• Sel, poivre\n\nPRÉPARATION\n1. Rincer le poivron et les tomates.\n2. Öter les pépins et couper la chair en tout petits dés.\n3. Couper l'avocat en dés et l'arroser de jus de citron.\n4. Mélanger les légumes avec l'huile d'olive et la coriandre, saler et poivrer.\n5. Poivrer le pavé de thon et le passer dans les graines de sésame.\n6. Saisir le thon dans une poêle antiadhésive, 2 minutes de chaque côté.\n7. Le couper en fines tranches.\n8. Déposer la salade dans une assiette et ajouter les tranches de thon."
   },
   {
    "id": "p1_r31",
    "type": "texte",
    "titre": "Poêlée de poulet au chou",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 150g d’émincé de poulet\n• 250g de chou pointu\n• 50g de tomates cerises\n• 25g de pesto vert\n• 25g de fromage de chèvre frais\n• 1 CS d’huile d’olive\n• Sel, poivre\n\nPRÉPARATION\n1. Retirer le trognon du chou et couper les feuilles en lanières.\n2. Faire chauffer l’huile dans une casserole et y faire revenir l’émincé de poulet. Saler et poivrer.\n3. Couper les tomates cerises en 4.\n4. Retirer le poulet de la casserole et ajouter le chou, les tomates et faire cuire pendant 5 minutes.\n5. Ajouter le pesto et le fromage frais, puis mélanger.\n6. Laisser mijoter 5 minutes.\n7. Ajouter le poulet et assaisonner à nouveau."
   },
   {
    "id": "p1_r32",
    "type": "texte",
    "titre": "Cocotte de cabillaud, légumes au lait de coco",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 30 min\n\nINGRÉDIENTS\n• 200g de cabillaud\n• 1/2 courgette\n• 1 tomate\n• 1/2 carotte\n• 40g de chou chinois\n• Coriandre\n• 1 cc de piment\n• 50ml de lait de coco\n• 1 CS d'huile d'olive\n• Sel, poivre\n\nPRÉPARATION\n1. Laver la courgette et la tomate, puis les couper en dés.\n2. Peler la carotte puis la couper en dés.\n3. Emincer finement le chou chinois.\n4. Dans une cocotte, faire chauffer l'huile d'olive puis ajouter tous les légumes.\n5. Faire cuire 5 minutes à feu doux en remuant.\n6. Ajouter le lait de coco, le piment, le sel et le poivre et laisser mijoter 20 minutes à feu doux.\n7. Couper le cabillaud en cubes et le placer dans la cocotte.\n8. Couvrir et poursuivre la cuisson pendant 5 minutes à feu doux. Retirer du feu, laisser reposer 5 minutes et servir."
   },
   {
    "id": "p1_r33",
    "type": "texte",
    "titre": "Wok de poulet aux poivrons",
    "corps": "Pour : 1 personne · Préparation : 40 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 100g de poivron jaune\n• 100g de poivron rouge\n• 1/2 oignon\n• 2 CS d'huile d'olive\n• Le jus d'1/2 citron\n• 1 cc de piment\n• 1 cc d'ail semoule\n• Persil\n• Sel, poivre\n\nPRÉPARATION\n1. Laver et couper les poivrons en lamelles fines.\n2. Emincer l'oignon et le blanc de poulet.\n3. Dans un saladier, mettre le poulet, les poivrons, les oignons, l'huile d'olive, le jus de citron, l'ail, le piment et le persil haché.\n4. Saler, poivrer et faire mariner pendant 30 minutes.\n5. Faire chauffer un wok, mettre le mélange de poulet et faire cuire pendant 15 minutes."
   },
   {
    "id": "p1_r34",
    "type": "texte",
    "titre": "Emincé de boeuf au poivron",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 1 poivron rouge\n• 1 poivron vert\n• 1/2 oignon\n• 160g de steak de boeuf\n• 30g de crème de coco\n• 1 CS d’huile d’olive\n• Sel, poivre\n\nPRÉPARATION\n1. Emincé le boeuf.\n2. Laver les poivrons, l’épépiner et le couper en lanières.\n3. Peler l’oignon et le couper en petits dés.\n4. Faire chauffer un peu d’huile dans une poêle et faire revenir le boeuf. Réserver.\n5. Ajouter le restant d’huile et faire revenir les dés d’oignon et les lamelles de poivron pendant 5 minutes.\n6. Ajouter la crème et laisser mijoter 10 minutes.\n7. Ajouter la viande et mélanger et faire réchauffer quelques minutes."
   }
  ]
 },
 {
  "id": "mealtpl_phase2_reboost",
  "nom": "Phase 2 · Reboost ménopause",
  "accent": "#D97A52",
  "icone": "⚡",
  "description": "Mise en cétose pour accélérer la combustion des graisses : jours 6 et 7, jeûne hydrique (jour 8), reprise progressive (jours 9 et 10).",
  "sections": [
   {
    "id": "p2_intro",
    "type": "texte",
    "titre": "Programme · Phase 2 Reboost ménopause",
    "corps": "Les 5 jours suivants vont permettre de mettre le corps en cétose afin d'accélérer la combustion des graisses.\n\nLe plan alimentaire ci-dessous vous indique la marche à suivre pour ces 5 jours.\n\nVous pouvez choisir les aliments que vous aimez à l'aide de la liste des aliments autorisés, ou simplement suivre les recettes adaptées fournies dans la partie Recettes (P'ti dej', Dej' et Dîner Phase 2).\n\nLes quantités précisées sont à adapter en fonction de votre faim. Vous devez être rassasiée en fin de repas."
   },
   {
    "id": "p2_m67",
    "type": "repas",
    "titre": "Menu des jours 6 et 7",
    "intro": "",
    "jours": [
     {
      "id": "p2_m67_j1",
      "label": "Jours 6 et 7",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 (voir les recettes) + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDej' Phase 2 (voir les recettes)",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Phase 2 (voir les recettes)"
     }
    ]
   },
   {
    "id": "p2_m8",
    "type": "repas",
    "titre": "Jour 8 — jeûne hydrique",
    "intro": "Le jour 8 est une journée de « jeûne hydrique » qui renforce la détoxification et augmente la cétose. Le jeûne accélère le passage en cétose, ce qui permet de perdre du poids et d'éliminer la résistance à l'insuline. Vous pouvez boire des infusions et/ou de l'eau dans la matinée et dans l'après-midi. Si vous avez faim le matin ou le midi, vous pouvez prendre 2 CS d'huile TCM, cela apaisera la faim.",
    "jours": [
     {
      "id": "p2_m8_j1",
      "label": "Jour 8",
      "pdj": "Eau chaude citronnée + smoothie Détox + café ou infusion",
      "col1": "",
      "dej": "Bouillon Phase 2 ou bouillon / soupe de légumes + smoothie Détox",
      "col2": "",
      "din": "Bouillon Phase 2 ou bouillon / soupe de légumes + smoothie Détox"
     }
    ]
   },
   {
    "id": "p2_m9",
    "type": "repas",
    "titre": "Jour 9 — reprise progressive",
    "intro": "Le jour 9, le jeûne hydrique continue jusqu'au repas de midi, avec le même petit déjeuner qu'au jour 8. L'alimentation de base est progressivement remise en place avec un repas le midi et un dîner léger, afin de favoriser la restauration des fonctions digestives.",
    "jours": [
     {
      "id": "p2_m9_j1",
      "label": "Jour 9",
      "pdj": "Eau chaude citronnée + smoothie Détox + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDej' Phase 2 (voir les recettes)",
      "col2": "",
      "din": "Bouillon Phase 2 ou bouillon / soupe de légumes + smoothie Détox"
     }
    ]
   },
   {
    "id": "p2_m10",
    "type": "repas",
    "titre": "Jour 10 — fin de la phase",
    "intro": "Dernier jour de la phase, avec la remise en place des déjeuners et dîners alcalinisants.",
    "jours": [
     {
      "id": "p2_m10_j1",
      "label": "Jour 10",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 (voir les recettes) + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDej' Phase 2 (voir les recettes)",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Phase 2 (voir les recettes)"
     }
    ]
   },
   {
    "id": "p2_ind",
    "type": "texte",
    "titre": "Indications",
    "corps": "• Cuisson : vapeur, basse température (sous vide, à l'étouffée, à feu très doux, en mijoteuse, au bain-marie...).\n• Prendre le temps de manger (au moins 20 minutes) et avoir une bonne mastication.\n• Bien s'hydrater en buvant suffisamment entre les repas.\n• Prendre 1 cc de vinaigre de cidre avant les repas pour faciliter la digestion.\n• Penser aux infusions dans la matinée.\n• Ajouter 1 cc de beurre clarifié ou 1 CS d'huile TCM à votre café pour consolider l'apport en matières grasses. Vous pouvez utiliser cette boisson en cas de faim ou de fringale.\n• Ne pas manger entre les repas et ne pas faire de collations.\n• Mettre en place le mode de vie REBOOST."
   },
   {
    "id": "p2_ali",
    "type": "texte",
    "titre": "Les aliments autorisés",
    "corps": "Ces aliments sont :\n• Alcalinisants, afin de favoriser la détoxification des hormones (notamment les formes nocives d'œstrogènes) et la perte de poids.\n• Anti-inflammatoires, avec les oméga 3.\n• Riches en nutriments pour détoxifier le foie.\n• Pauvres en glucides pour stabiliser le taux d'insuline.\n\nSi possible, choisir des aliments d'origine biologique, frais et entiers, des protéines d'animaux sauvages plutôt que d'élevage, des œufs de poules élevées en plein air et des aliments provenant d'animaux nourris à l'herbe dans les pâturages plutôt qu'aux céréales.\n\nLÉGUMES\nAil, algues, asperge verte, aubergine, avocat, carotte, cébette, céleri, champignon, concombre, courgettes jaunes et vertes, épinards, fenouil, graines germées de luzerne, haricots verts et beurre, kimchi, légumes verts à feuille (laitue, blette, fane de betterave...), piment, jalapeno, pois mange-tout, poivron, pousse de bambou, radis, roquette, tomate.\n\nLÉGUMES ALCALINISANTS (détoxifient les formes nocives d'œstrogènes)\nBrocoli, chou de Bruxelles, chou cabus, chou-fleur, chou cavalier, chou kale.\n\nLÉGUMES QUI DÉTOXIFIENT LE FOIE\nCœur d'artichaut, oignon, ail et cébettes.\n\nHERBES AROMATIQUES ET ÉPICES\nBasilic (frais ou sec), cannelle en bâton, ciboulette fraîche, citron, citron vert, coriandre, estragon (frais ou sec), gingembre frais, laurier, menthe (fraîche ou séchée), moutarde, paprika, persil (frais ou sec), piment de la Jamaïque, piment rouge en flocons, poivre noir moulu, poudre d'ail, sel de mer.\n\nAROMATES QUI DÉTOXIFIENT LE FOIE\nCurcuma, origan, romarin, sauge, thym.\n\nPROTÉINES\nŒufs, poulet, dinde, bœuf, pancetta ou bacon (sans nitrates/nitrites), fromage de chèvre, poissons blancs (truite arc-en-ciel, tilapia, bar...), fruits de mer (crevettes, coquilles Saint-Jacques, huîtres), tofu, miso ou tempeh, protéines en poudre (collagène, protéines de pois ou de riz, avec moins de 3g de sucre par portion).\n\nFRUITS ET GRAINES OLÉAGINEUSES\nAmandes, purée/beurre d'amande, purée/beurre de noix de cajou, graines de chia, graines de courge, graines de lin, graines de sésame, graines de tournesol, noix, pistaches, olives.\n\nMATIÈRES GRASSES ET VINAIGRES\nBeurre clarifié (ghee) ou beurre biologique, huile d'avocat, huile d'olive vierge extra, huile de coco, huile de noix, huile de sésame, huile riche en TCM, vinaigre de cidre (non filtré), vinaigre de riz ou de coco.\n\nAUTRES\nBouillon d'os, câpres, crème de coco, crème fraîche, farine d'amande, levure nutritionnelle, maca en poudre, sauce curry rouge, sauce tamari, tahin.\n\nBOISSONS\nInfusion de camomille, infusion de cannelle, thé vert, thé chaï, café."
   },
   {
    "id": "p2_rec",
    "type": "texte",
    "titre": "Recommandations",
    "corps": "Pour rééquilibrer vos hormones, il faudra supprimer certains aliments.\n\nÉLIMINER LE SUCRE\nLe sucre ainsi que les édulcorants de synthèse affectent les hormones au quotidien. En grande quantité, c'est un puissant générateur d'inflammation. Il inhibe également les capteurs du cerveau qui empêchent les excès alimentaires...\n• Remplacer le sucre du thé/café par une petite quantité d'édulcorant naturel issu de la stévia, du xylitol ou du fruit du moine.\n• La cannelle ou l'extrait de vanille pure permettent également de pallier le besoin de goût sucré.\n\nÉLIMINER LES SODAS, MÊME LIGHT\nVous savez que les sodas ne sont pas bons pour la santé... mais les sodas light non plus !\nEn effet, ils contiennent de grandes quantités d'acide phosphorique, ce qui augmente le risque de fracture osseuse. Les sodas light sont donc très acides et peuvent même dissoudre l'émail des dents. Pour neutraliser cette acidité, le corps va puiser le calcium des os, ce qui entraîne une réduction de la densité minérale osseuse.\nDe plus, les édulcorants de synthèse présents dans ces sodas peuvent entraîner une prise de poids : ils déclenchent la résistance à l'insuline.\n\nÉLIMINER LE GLUTEN ET LES CÉRÉALES\nLe gluten est une protéine présente dans le blé, le seigle, l'orge, le malt, la levure de bière, dans certaines avoines, les chewing-gums, certains condiments (sauce soja, vinaigrettes), les cafés aromatisés, les soupes en conserve, les plats préparés...\n• Il convient donc de bien lire les étiquettes.\nLes aliments contenant du gluten peuvent perturber la digestion et les bactéries intestinales, car notre système digestif ne peut pas assimiler tout le gluten présent dans notre alimentation moderne.\n\nATTENTION AU CAFÉ ET À L'ALCOOL\nLe café a un pH de 5, il est donc moins acide qu'une boisson de type soda. De plus, il contient de nombreux antioxydants que le corps absorbe facilement.\nMais attention, l'excès de caféine entraîne une hausse du cortisol et d'autres hormones du stress, ce qui favorise la prise de poids.\n• Se limiter à 1 tasse par jour.\nLe thé vert est une véritable alternative au café, car il contient moins de caféine et apporte de nombreux antioxydants.\nL'alcool est une boisson qui a un effet dépressif et qui contient généralement beaucoup de sucre.\n• Même s'il est conseillé de boire un verre de vin rouge par jour à cause de l'antioxydant resvératrol, il est préférable de supprimer l'alcool pendant cette phase.\n\nAVOIR UNE BONNE HYDRATATION\nUne bonne hydratation permet d'avoir moins faim (la soif est souvent confondue avec la faim). Cela permet également aux reins d'éliminer les toxines et au foie de métaboliser les graisses avec plus d'efficacité.\nPour savoir si on boit assez, il suffit d'observer la couleur des urines : elles doivent être claires, non troubles et de couleur jaune pâle.\n• Il faut boire environ 1/30e de son poids idéal. Les apports d'eau sont bien sûr variables selon la température et l'activité physique.\nL'hydratation doit se faire entre les repas : lorsque l'on ingère des aliments, l'estomac sécrète des sucs digestifs. Les boissons diluent ces substances importantes et peuvent perturber la digestion.\n• Idéalement, vous pouvez boire 20 minutes avant le repas et 2h après ce dernier.\n\nAVOIR UNE BONNE MASTICATION\nUne bonne mastication aide la salive à dégrader la nourriture et facilite donc la digestion. Cela empêche les brûlures d'estomac, les ballonnements... Elle permet également de limiter les apports, car elle facilite la perception des signaux de satiété.\n• Mâcher chaque bouchée 20 à 30 fois et mastiquer en pleine conscience pour bien apprécier les aliments."
   },
   {
    "id": "p2_m10",
    "type": "repas",
    "titre": "Menu des 10 jours",
    "intro": "Petit déjeuner identique tous les jours ; déjeuner et dîner jour par jour.",
    "jours": [
     {
      "id": "p2_m10_j1",
      "label": "Jour 1",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade de pousses d’épinards, crevettes & noisettes",
      "col2": "",
      "din": "Poulet, champignons, coco"
     },
     {
      "id": "p2_m10_j2",
      "label": "Jour 2",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade de pousses d’épinards, avocat et oeufs mollets",
      "col2": "",
      "din": "Soupe crémeuse d’épinards + 150g de poulet cuit"
     },
     {
      "id": "p2_m10_j3",
      "label": "Jour 3",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Poulet pané, coco-amandes & carottes râpées",
      "col2": "",
      "din": "Cocotte de cabillaud, légumes au lait de coco"
     },
     {
      "id": "p2_m10_j4",
      "label": "Jour 4",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade tiède de poireaux et sardines",
      "col2": "",
      "din": "Emincé de boeuf au poivron"
     },
     {
      "id": "p2_m10_j5",
      "label": "Jour 5",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Wrap aux brocolis & oeufs",
      "col2": "",
      "din": "Wok de poulet aux poivrons"
     },
     {
      "id": "p2_m10_j6",
      "label": "Jour 6",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Taboulé de chou-fleur + 150g de boeuf grillé",
      "col2": "",
      "din": "Curry vert de julienne et haricots verts"
     },
     {
      "id": "p2_m10_j7",
      "label": "Jour 7",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade dinde avocat et tomates",
      "col2": "",
      "din": "Soupe de poireaux & radis noir + 2 oeufs"
     },
     {
      "id": "p2_m10_j8",
      "label": "Jour 8",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Bouillon légumes + smoothie",
      "col2": "",
      "din": "Bouillon légumes + smoothie"
     },
     {
      "id": "p2_m10_j9",
      "label": "Jour 9",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade de chou blanc, chèvre, jambon et noix",
      "col2": "",
      "din": "Bouillon légumes + smoothie"
     },
     {
      "id": "p2_m10_j10",
      "label": "Jour 10",
      "pdj": "Eau chaude citronnée + P'ti dej' Phase 2 + café ou infusion",
      "col1": "",
      "dej": "Salade de truite fumée",
      "col2": "",
      "din": "Soupe de légumes & dinde"
     }
    ]
   },
   {
    "id": "p2_cou",
    "type": "texte",
    "titre": "Liste de courses",
    "corps": "La liste de courses ci-dessous ne comprend pas les petits déjeuners ni les smoothies. Les ingrédients pour le bouillon de légumes sont prévus pour les 3 repas.\n\nLÉGUMES\n• 3 poignées de pousses d'épinards\n• 1.5 avocat\n• 2.5 citrons\n• 300g de carottes + 3.5\n• 1 petit poireau + 1 + 100g de blanc de poireau\n• 5 tomates cerises + 250g\n• 2 grandes feuilles de laitue\n• 200g de brocolis haché\n• 200g de champignons de Paris\n• 1 poivron rouge + 100g\n• 1 poivron vert\n• 100g de poivron jaune\n• 200g de chou-fleur\n• 2 tomates\n• 200g de chou blanc\n• 100g de céleri branche + 2 branches\n• 100g de radis noir\n• 200g d'haricots verts surgelés\n• 2.5 courgettes\n• 40g de chou chinois\n\nHERBES AROMATIQUES (fraîches ou surgelées)\n• Ciboulette\n• Persil\n• Coriandre\n• Basilic\n\nÉPICES / AROMATES\n• Vinaigre de cidre\n• Jus de citron\n• Curry\n• Échalotes, ail, oignon, oignon rouge\n• 2 CS de poivrons rouges en conserve\n• Romarin\n• Ail semoule\n• Piment\n• Paprika, curcuma\n• Moutarde\n• Sauce nuoc-mâm\n• 20 ml de jus de citron vert\n• 1 clou de girofle\n• Baies roses et genièvre\n• 10g de pâte de curry verte\n• Thym, laurier\n• Bouillon de légumes\n• Gingembre frais\n• Tamari\n\nVIANDE / POISSONS / ŒUFS / FROMAGE\n• 120g de crevettes roses\n• 7 œufs\n• 590g de blanc de poulet\n• 1 boîte de sardines à l'huile d'olive\n• 160g de steak de bœuf + 150g\n• 300g d'escalope de dinde\n• 120g de dés de jambon\n• 30g de fromage de chèvre\n• 80g de truite fumée\n• 150g de filet de julienne\n• 200g de cabillaud\n\nMATIÈRES GRASSES\n• Huile de cameline\n• Huile de noix\n• Huile d'olive\n• Huile de coco\n• Huile de sésame\n• 5 noisettes\n• 1 CS de tapenade noire\n• 5 cerneaux de noix + 2 CS de noix concassées\n• 15g de poudre d'amandes\n• 20g de noix de coco râpée\n• 2 CS de purée de sésame\n• 130g de crème de coco\n• 1 CS de pignons de pin + 20g\n• 2 CS de noix de macadamia\n• 20g de graines de courge\n• 2 CS de pistaches grillées\n• 150ml de lait de coco"
   },
   {
    "id": "p2_h_Petitsdéje",
    "type": "texte",
    "titre": "Recettes · Petits déjeuners et smoothies",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Eau chaude citronnée\n• Smoothie énergétique\n• Smoothie Anti-Fringale Noisette\n• Smoothie Détox Concombre & Menthe\n• Smoothie vanille\n• Crêpes aux amandes\n• Flan coco\n• Yaourt graines de chia et cannelle\n• Pudding de chia au lait de coco et à l'avocat\n• Biscuits amandes, noisettes et cacao\n• Pancakes à l’avocat et graines\n• Omelette verte\n• Baconnais"
   },
   {
    "id": "p2_r13",
    "type": "texte",
    "titre": "Eau chaude citronnée",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 1 cc de jus de citron\n• 1 cc de vinaigre de cidre non filtré\n• Une pincée de poivre\n\nPRÉPARATION\n1. Mélanger le tout dans de l'eau chaude"
   },
   {
    "id": "p2_r14",
    "type": "texte",
    "titre": "Smoothie énergétique",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 1/2 concombre émincé\n• 1 branche de céleri\n• 1/4 avocat\n• 1 cc de graines de chia\n• 1 cc de graines de lin\n• 1 CS d'huile de coco\n• 1 fine tranche de gingembre frais\n• 250ml d'eau + 3 à 4 glaçons\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p2_r15",
    "type": "texte",
    "titre": "Smoothie Anti-Fringale Noisette",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 200 ml de lait de noisette sans sucre\n• 1 poignée de jeunes pousses (épinards ou roquette)\n• 1 c. à soupe de graines de chia (laisser gonfler 10 min)\n• ½ avocat\n• Jus de citron\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p2_r16",
    "type": "texte",
    "titre": "Smoothie Détox Concombre & Menthe",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 1/2 concombre\n• 1 poignée de roquette ou mâche\n• Quelques feuilles de menthe fraîche\n• Jus d’1 citron\n• 200 ml d’eau filtrée\n• Option : un peu de spiruline en poudre\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p2_r17",
    "type": "texte",
    "titre": "Smoothie vanille",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 70g de pousses d'épinards\n• 10 à 12 feuilles de menthe\n• 1 CS de purée d'amande\n• 1/4 cc d'extrait de vanille\n• 375ml de lait d'amande ou de lait de coco non sucré\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p2_r18",
    "type": "texte",
    "titre": "Crêpes aux amandes",
    "corps": "Pour : 5 crêpes · Préparation : 5 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• 1 oeuf\n• 50g de purée d'amandes\n• 1 CS d'huile de coco\n• 1 pincée de sel\n\nPRÉPARATION\n1. Dans un mixeur ou à la main, mélanger l’oeuf, la purée d'amandes, 50ml d'eau, 1 cc d'huile de coco et le sel.\n2. Dans une poêle faire fondre un peu d'huile de coco, verser une louche de pâte et faire cuire la crêpe 30 seconde de chaque côté."
   },
   {
    "id": "p2_r19",
    "type": "texte",
    "titre": "Flan coco",
    "corps": "Pour : 2 flans · Préparation : 10 min · Cuisson : 40 min\n\nINGRÉDIENTS\n• 3 oeufs\n• 130ml de lait de coco\n• 50g de noix de coco râpée\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 180°C (th6).\n2. Fendre la gousse de vanille en 2 dans le sens de la longueur et récupérer les grains à l'aide de la pointe d'un couteau.\n3. Battre les oeufs, ajouter le lait de coco, la noix de coco râpée, la vanille et la cannelle.\n4. Verser dans 2 petits moules et cuire 40 minutes.\n5. Déguster tiède ou froid."
   },
   {
    "id": "p2_r20",
    "type": "texte",
    "titre": "Yaourt graines de chia et cannelle",
    "corps": "Pour : 2 personnes · Préparation : 4 h\n\nINGRÉDIENTS\n• 3 CS de graines de chia moulues\n• 40cl de lait végétal : amandes ou de coco\n• 1 cc de vanille en poudre\n• 1 cc de cannelle\n\nPRÉPARATION\n1. Dans un saladier, mélanger les graines de chia, le lait végétal, la vanille et la cannelle.\n2. Laisser reposer 10 min et mélanger de nouveau.\n3. Répartir dans 2 pots et réserver 4h au réfrigérateur."
   },
   {
    "id": "p2_r21",
    "type": "texte",
    "titre": "Pudding de chia au lait de coco et à l'avocat",
    "corps": "Pour : 2 personnes · Préparation : 2h\n\nINGRÉDIENTS\n• 1 avocat\n• 3 CS de graines de chia moulues\n• 3 CS de lait de coco\n• 2 CS de cacao en poudre\n• 2 cc de cannelle\n• 1 gousse de vanille\n• 1 CS d'huile de coco\n\nPRÉPARATION\n1. Dans un bol, verser les graines de chia, la cannelle, le lait de coco et 200ml d'eau.\n2. Remuer jusqu'à ce que le mélange devienne gélatineux (5 à 10 min).\n3. Réserver.\n4. Récupérer la chair de l'avocat.\n5. Dans un blinder, mixer l'avocat, l'huile de coco, le caco et les grains de vanille.\n6. Ajouter la préparation au chia, mixer de nouveau.\n7. Répartir dans 2 ramequins et réserver au réfrigérateur au minimum 2h."
   },
   {
    "id": "p2_r22",
    "type": "texte",
    "titre": "Biscuits amandes, noisettes et cacao",
    "corps": "Pour : 10 biscuits · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 25g de poudre de noisettes\n• 80g de poudre d'amandes\n• 1 cc de cacao cru en poudre\n• 2 oeufs\n• 1 CS d'huile de coco\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 170°C (th5)\n2. Mélanger tous les ingrédients.\n3. Etaler la pâte et former des cercles.\n4. Les déposer sur une feuille de papier cuisson et enfourner 15 min."
   },
   {
    "id": "p2_r23",
    "type": "texte",
    "titre": "Pancakes à l’avocat et graines",
    "corps": "Pour : 1 personne · Préparation : 5 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• ½ avocat bien mûr\n• 1 œuf (ou substitut végétal)\n• 1 CS de graines de lin moulues\n• 1 CS de purée de cajou ou d’amande\n• 1 pincée de vanille\n\nPRÉPARATION\n1. Mixer tous les ingrédients pour une pâte lisse.\n2. Cuire à la poêle anti-adhésive à feu doux (petits tas comme des pancakes).\n3. Déguster avec de la purée de noisette ou juste nature."
   },
   {
    "id": "p2_r24",
    "type": "texte",
    "titre": "Omelette verte",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 2 œufs\n• 1 poignée d'épinards frais\n• 1 CS d'huile d'olive ou de ghee\n• 1 CS de persil ou coriandre fraîchement ciselé\n• 1 filet de jus de citron\n• Sel, poivre\n\nPRÉPARATION\n1. Battre les œufs dans un bol avec une pincée de sel et de poivre.\n2. Chauffez l'huile dans un poêle antiadhésive.\n3. Faites revenir les épinards jusqu'à ce qu'ils ramollissent.\n4. Verser les œufs battus sur les épinards, saupoudrer d'herbes fraîches, et laisser cuire à feu doux jusqu'à ce que l'omelette soit prise.\n5. Servir avec un filet de citron."
   },
   {
    "id": "p2_r25",
    "type": "texte",
    "titre": "Baconnais",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 2 tranches de bacon\n• 1 oeuf\n• 1 tomates cocktail\n• 2 olives\n• 1/4 d’échalote\n• Sel, poivre\n\nPRÉPARATION\n1. Hacher grossièrement le bacon et le déposer dans un moule à muffin.\n2. Ajouter l’échalote, la tomates et les olives hachées.\n3. Casser l’oeuf dessus.\n4. Saler et poivrer.\n5. Cuire à 180°C pendant 12 à 15 minutes."
   },
   {
    "id": "p2_h_Déjeuners",
    "type": "texte",
    "titre": "Recettes · Déjeuners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Taboulé de chou-fleur\n• Quiche sans pâte champignons, asperges\n• Salade asiatique\n• Salade dinde avocat et tomates\n• Salade de chou blanc, chèvre, jambon et noix\n• Salade de truite fumée"
   },
   {
    "id": "p2_r27",
    "type": "texte",
    "titre": "Taboulé de chou-fleur",
    "corps": "Pour : 1 personne · Préparation : 10 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 200g de chou-fleur\n• 1 tomate\n• Persil frais\n• 1 petit oignon\n• 1/2 gousse d’ail\n• 2 CS de jus de citron\n• 2 CS d’huile de cameline ou de noix\n• Sel\n\nPRÉPARATION\n1. Rincer le chou-fleur et le mixer au robot afin d’obtenir une semoule.\n2. Couper la tomate en petits dés.\n3. Hacher finement le persil, l’ail et l’oignon.\n4. Dans un saladier, mélanger tous les ingrédients et ajouter le jus de citron, l’huile et le sel."
   },
   {
    "id": "p2_r28",
    "type": "texte",
    "titre": "Quiche sans pâte champignons, asperges",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 35 min\n\nINGRÉDIENTS\n• 80g d’asperges vertes en conserve ou surgelée\n• 100g de champignons de Paris\n• 2 oeufs\n• 30ml de lait de coco\n• 1 CS d’huile de coco\n• 1 CS de graines de sésame\n• Romarin\n• Sel, poivre\n\nPRÉPARATION\n1. Préchauffer le four à 180°C (th6)\n2. Emincer les champignons.\n3. Couper les asperges en tronçons de 5cm.\n4. Dans une poêle faire chauffer 1 CS d’huile de coco et ajouter les champignons et asperges (si elles sont surgelées). Faire cuire 5 min.\n5. Dans un saladier, battre les oeufs avec le lait de coco.\n6. Ajouter le romarin et les graines de sésame, saler et poivrer.\n7. Verser les légumes et la préparation aux oeufs dans un ramequin.\n8. Enfourner et cuire 30 min."
   },
   {
    "id": "p2_r29",
    "type": "texte",
    "titre": "Salade asiatique",
    "corps": "Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 2 champignons de Paris\n• 1 poignée de germes de soja frais\n• 50g de concombre\n• 150g de thon en conserve\n• 1 CS de ciboulette ciselée\n• 1 CS de persil ciselée\n• Le jus d’un citron\n• 1 CS d’huile d’olive\n• 20g de pignons\n• Sel, poivre\n\nPRÉPARATION\n1. Emincer les champignons et les citronner.\n2. Rincer et égoutter les germes de soja.\n3. Egoutter et émietter le thon. Fouetter le jus de citron avec l’huile, saler et poivrer.\n4. Dans un saladier mélanger tous les ingrédients, ajouter ciboulette, persil et la sauce.\n5. Mélanger, parsemer de pignon et servir."
   },
   {
    "id": "p2_r30",
    "type": "texte",
    "titre": "Salade dinde avocat et tomates",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 150g d'escalope de dinde\n• 1/2 avocat\n• 100g de tomates cerises\n• 1/2 oignon rouge\n• Le jus d'1/2 citron\n• 1 CS d'huile d'olive\n• 20g de graines de courges\n• 1 cc de paprika\n• Coriandre\n• Sel, poivre\n\nPRÉPARATION\n1. Peler et émincer l'oignon rouge.\n2. Couper les tomates cerises en 2.\n3. Détailler la chair de l’avocat en lamelles.\n4. Mélanger le jus de citron avec l'huile d'olive et ajouter tous les légumes ainsi que l'oignon.\n5. Saler et poivrer et ajouter la coriandre ciselée.\n6. Dans une poêle antiadhésive, faire griller les escalopes de dinde 4 minutes de chaque côté.\n7. Saler, poivrer et parsemer de paprika.\n8. Couper l’escalope en morceaux.\n9. Dans une assiette, déposer la salade et les morceaux de dinde.\n10. Parsemer de graines de courges."
   },
   {
    "id": "p2_r31",
    "type": "texte",
    "titre": "Salade de chou blanc, chèvre, jambon et noix",
    "corps": "Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 200g de chou blanc\n• 120g de dés de jambon\n• 30g de chèvre\n• 1 CS de vinaigre de vin\n• 1 CS d’eau\n• 1 cc de moutarde\n• 1 CS d’huile d'olive\n• 2 CS de noix concassées\n• Sel, poivre\n• Persil\n\nPRÉPARATION\n1. Laver le chou blanc et râper-le. Placez-le dans un saladier.\n2. Couper le chèvre en petits dés et ajoutez-les au chou.\n3. Ajouter les dés de jambon.\n4. Mélanger.\n5. Mélanger le vinaigre avec un peu de sel et de poivre.\n6. Ajouter la moutarde, l'eau puis l'huile tout en fouettant.\n7. Arroser la salade de chou blanc avec cette sauce et mélanger bien.\n8. Parsemer de noix concassées."
   },
   {
    "id": "p2_r32",
    "type": "texte",
    "titre": "Salade de truite fumée",
    "corps": "Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 80g de truite fumée\n• 100g de céleri branche\n• 100g de tomates cerises\n• 2 CS de pistaches grillées\n• 1 CS de basilic\n• 20 ml de jus de citron vert\n• 1 CS d’huile de sésame\n• 1 CS de sauce nuoc mâm\n• 1/2 gousse d’ail pilée\n\nPRÉPARATION\n1. Couper la truite fumée en lanières.\n2. Emincer le celeri et couper les tomates cerises en 2.\n3. Melanger l’huile avec le jus de citron, la sauce nuoc-mam et la gousse d’ail.\n4. Dans un saladier, mélanger la truite, les tomates, le céleri, le basilic, les pistaches et napper de sauce."
   },
   {
    "id": "p2_h_Bouillons",
    "type": "texte",
    "titre": "Recettes · Bouillons",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Bouillon thaï au lait de coco\n• Bouillon alcalin\n• Bouillon légumes"
   },
   {
    "id": "p2_r33",
    "type": "texte",
    "titre": "Bouillon thaï au lait de coco",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 40 min\n\nINGRÉDIENTS\n• 1 tige de citronnelle\n• Gingembre frais\n• 1 oignon nouveau\n• 1 tige de celeri\n• 1 carotte\n• 20g de champignons de Paris\n• 20g de mini courgettes émincées\n• 40ml de lait de coco\n• 30ml de jus de citron\n• Coriandre hachée\n• 1 CS de sauce nuoc-mam\n• 1 cube de bouillon de volaille\n\nPRÉPARATION\n1. Ciseler la citronnelle. Hacher finement le gingembre. Couper l’oignon en dés et le céleri en morceaux. Peler la carotte et la couper en rondelle.\n2. Remplir une casserole avec 500ml d’eau, ajouter le cube de bouillon et porter à ébullition.\n3. Ajouter le gingembre, les oignons, le céleri, les carottes, les champignons, les courgettes.\n4. Laisser frémir 20 minutes.\n5. Incorporer le lait de coco et le jus de citron. Ajouter la sauce nuoc-mâm.\n6. Décorer de coriandre et servir."
   },
   {
    "id": "p2_r34",
    "type": "texte",
    "titre": "Bouillon alcalin",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 8h\n\nINGRÉDIENTS\n• 2 carottes\n• 2 tiges de céléri avec leur feuilles\n• 1 oignon de taille moyenne\n• 7 gousses d'ail\n• 70g de fleurettes de chou-fleur ou de brocoli\n• 2 feuilles de laurier\n• 2 cc de sel de mer\n• 2 CS de vinaigre de cidre\n\nPRÉPARATION\n1. Brosser les carottes.\n2. Les couper grossièrement ainsi que le céleri et l'oignon.\n3. Eplucher et écraser l'ail.\n4. Mettre tous les ingrédients dans une cocotte, recouvrir d'eau à hauteur puis ajouter encore de l'eau 2cm au dessus.\n5. Faire cuire à feu doux pendant 8h (ou mettre dans un autocuiseur ou un cuiseur électrique et laisser chauffer pendant 1h à feu vif)\n6. Saler si nécessaire.\n7. Conservation 3 jours au réfrigérateur et 3 mois au congélateur."
   },
   {
    "id": "p2_r35",
    "type": "texte",
    "titre": "Bouillon légumes",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 1h\n\nINGRÉDIENTS\n• 3 carottes\n• 2 branches de céleri\n• 2 courgettes\n• 1 oignon moyen émincé\n• 1 poignée de persil frais\n• 2 gousses d'ail écrasées\n• 2 à 3 cm de gingembre frais râpé\n• 1 feuille de laurier\n• 1 CS de tamari\n• 1 pincée de curcuma en poudre\n• 2 litres d'eau\n• Sel, poivre\n\nPRÉPARATION\n1. Laver tous les légumes et couper-les en morceaux.\n2. Mettre tous les ingrédients dans une grande cocotte.\n3. Ajouter l'eau et porter à ébullition.\n4. Réduire le feu et laisser mijoter à couvert pendant environ 45 minutes à 1 heure.\n5. Une fois les légumes bien cuits, filtrer le bouillon à l'aide d'un chinois ou d'une passoire fine.\n6. Déguster chaud ou tiède."
   },
   {
    "id": "p2_h_Dîners",
    "type": "texte",
    "titre": "Recettes · Dîners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Soupe de poireaux & radis noir + 2 CS d’huile\n• Curry vert de julienne et haricots verts\n• Poulet en croûte de noix et sa fondue de poireaux\n• Blanquette de veau au potiron\n• Soupe de légumes & dinde"
   },
   {
    "id": "p2_r37",
    "type": "texte",
    "titre": "Soupe de poireaux & radis noir + 2 CS d’huile",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 1 poireau\n• 100g de radis noir\n• 1 clou de girofle\n• Baies roses et genevrier\n\nPRÉPARATION\n1. Laver et émincer le poireaux.\n2. Couper le radis en dés.\n3. Dans une casserole verser 300ml d’eau et ajouter tous les ingrédients.\n4. Faire cuire 20 minutes, mixer et servir."
   },
   {
    "id": "p2_r38",
    "type": "texte",
    "titre": "Curry vert de julienne et haricots verts",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 150g de filet de julienne\n• 200g d’haricots verts surgelés\n• 1 CS d’huile d’olive\n• 1 échalote\n• 10g de pâte de curry verte\n• 100ml de lait de coco\n• 1 CS de coriandre\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le poisson en morceaux.\n2. Hacher finement l’échalote.\n3. Dans une casserole faire revenir l’échalote dans l’huile d’olive avec la pâte de curry.\n4. Verser le lait de coco et porter à ébullition.\n5. Ajouter le poisson et laisser mijoter 5 minutes.\n6. Incorporer les haricots verts préalablement décongelé et couper en morceaux.\n7. Remuer et cuire jusqu’à ce que les légumes soient tendre.\n8. Saler, poivrer et parsemer de coriandre."
   },
   {
    "id": "p2_r39",
    "type": "texte",
    "titre": "Poulet en croûte de noix et sa fondue de poireaux",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 45 min\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 200g de blancs de poireaux\n• 30g de cerneaux de noix\n• 50ml de crème fraiche à 4%\n• 1/2 gousse d'ail\n• 1 cc de moutarde\n• 1 CS d'huile d'olive\n• Sel, poivre\n\nPRÉPARATION\n1. Préchauffer le four à 180°C.\n2. Mixer les noix avec 25ml de crème fraiche et la moutarde. Saler et poivrer.\n3. Recouvrir une plaque à four de papier sulfurisé et déposer le blanc de poulet.\n4. Répartir le mélange de noix.\n5. Cuire 45 minutes jusqu'à ce que la croûte soit bien dorée.\n6. Laver les poireaux et les émincer finement. Peler et hacher l'ail.\n7. Dans une poêle, faire chauffer l'huile puis ajouter les poireaux et l'ail. Faire revenir 5 minutes.\n8. Ajouter les 25ml de crème fraiche restant et poursuivre la cuisson 15 minutes. Saler et poivrer."
   },
   {
    "id": "p2_r40",
    "type": "texte",
    "titre": "Blanquette de veau au potiron",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 1h40\n\nINGRÉDIENTS\n• 200g de blanquette de veau\n• 250g de potiron\n• 1/2 oignon\n• 1 CS de graines de sésame\n• 1 brin de coriandre\n• 1 CS d'huile de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Peler et émincer l'oignon.\n2. Couper le potiron en morceaux.\n3. Dans une cocotte, faire cuire le veau et les oignons dans 750ml d'eau, pendant 1h à feu très doux.\n4. Egoutter la viande et réserver.\n5. Ajouter le potiron et cuire 30 minutes.\n6. Saler et poivrer.\n7. Remettre la viande, ajouter la coriandre, les graines et l'huile de sésame.\n8. Chauffer 5 minutes et servir."
   },
   {
    "id": "p2_r41",
    "type": "texte",
    "titre": "Soupe de légumes & dinde",
    "corps": "Pour : 1 personne · Préparation : 15 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 100g de blanc de poireaux\n• 100g de carottes\n• 150g de dinde\n• 50g de tomates cerises\n• 1 petit oignon\n• 1/2 gousse d’ail\n• 380ml de bouillon de légumes\n• 1 CS d’huile d’olive\n• 20g de pignons de pin\n• Thym\n• Sel, poivre\n\nPRÉPARATION\n1. Peler et couper les légumes en petits morceaux.\n2. Hacher l’ail et émincer l’oignon.\n3. Couper la dinde en morceaux.\n4. Dans une cocotte, faire revenir l’oignon avec l’ail dans l’huile d’olive.\n5. Ajouter les poireaux et carottes, la dinde en morceaux, puis mouiller avec le bouillon.\n6. Ajouter le thym, l’ail haché, saler et poivrer.\n7. Laisser mijoter 15 minutes à feu moyen.\n8. Parsemer de pignons de pin et servir"
   }
  ]
 },
 {
  "id": "mealtpl_phase3_menopause_active",
  "nom": "Phase 3 · Ménopause active",
  "accent": "#2C4432",
  "icone": "🌸",
  "description": "21 jours en 3 semaines : réintroduction progressive des fruits, puis des féculents, puis des deux ensemble.",
  "sections": [
   {
    "id": "p3_intro",
    "type": "texte",
    "titre": "Programme · Phase 3 Ménopause active",
    "corps": "Cette phase se déroule sur 3 semaines, avec une réintroduction progressive des aliments : les fruits en semaine 1, les féculents en semaine 2, puis une combinaison équilibrée des fruits et des féculents en semaine 3.\n\nLes plans alimentaires ci-dessous vous indiquent la marche à suivre pour chaque semaine.\n\nVous pouvez choisir les aliments que vous aimez à l'aide de la liste des aliments autorisés, ou simplement suivre les recettes adaptées fournies dans la partie Recettes (P'ti dej', Dej' et Dîner Ménopause Active).\n\nLes quantités précisées sont à adapter en fonction de votre faim. Vous devez être rassasiée en fin de repas."
   },
   {
    "id": "p3_s1",
    "type": "repas",
    "titre": "Semaine 1 — réintroduction des fruits, le midi",
    "intro": "",
    "jours": [
     {
      "id": "p3_s1_j1",
      "label": "Jours 1 à 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 130g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux) + 150g de fruit\nOU\nDej' Ménopause Active",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Ménopause Active"
     }
    ]
   },
   {
    "id": "p3_s2",
    "type": "repas",
    "titre": "Semaine 2 — réintroduction des féculents, le midi",
    "intro": "",
    "jours": [
     {
      "id": "p3_s2_j1",
      "label": "Jours 1 à 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 130g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux) + 100g de féculents\nOU\nDej' Ménopause Active",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Ménopause Active"
     }
    ]
   },
   {
    "id": "p3_s3",
    "type": "repas",
    "titre": "Semaine 3 — combinaison équilibrée des fruits et des féculents, le midi",
    "intro": "",
    "jours": [
     {
      "id": "p3_s3_j1",
      "label": "Jours 1 à 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "150 à 200g de légumes crus ou cuits + 100 à 120g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux) + 100g de féculents + 150g de fruits\nOU\nDej' Ménopause Active",
      "col2": "",
      "din": "150 à 200g de légumes cuits + 100 à 150g de protéines + 2 CS d'huile (ou 1 CS d'huile + 20g d'oléagineux)\nOU\nDîner Ménopause Active"
     }
    ]
   },
   {
    "id": "p3_ind",
    "type": "texte",
    "titre": "Indications",
    "corps": "• Cuisson : vapeur, basse température (sous vide, à l'étouffée, à feu très doux, en mijoteuse, au bain-marie...).\n• Prendre le temps de manger (au moins 20 minutes) et avoir une bonne mastication.\n• Bien s'hydrater en buvant suffisamment entre les repas.\n• Prendre 1 cc de vinaigre de cidre avant les repas pour faciliter la digestion.\n• Penser aux infusions dans la matinée.\n• Ajouter 1 cc de beurre clarifié ou 1 CS d'huile TCM à votre café pour consolider l'apport en matières grasses. Vous pouvez utiliser cette boisson en cas de faim ou de fringale.\n• Ne pas manger entre les repas et ne pas faire de collations.\n• Mettre en place le mode de vie REBOOST."
   },
   {
    "id": "p3_ali",
    "type": "texte",
    "titre": "Les aliments autorisés",
    "corps": "Ces aliments sont :\n• Alcalinisants, afin de favoriser la détoxification des hormones (notamment les formes nocives d'œstrogènes) et la perte de poids.\n• Anti-inflammatoires, avec les oméga 3.\n• Riches en nutriments pour détoxifier le foie.\n• Pauvres en glucides pour stabiliser le taux d'insuline.\n\nSi possible, choisir des aliments d'origine biologique, frais et entiers, des protéines d'animaux sauvages plutôt que d'élevage, des œufs de poules élevées en plein air et des aliments provenant d'animaux nourris à l'herbe dans les pâturages plutôt qu'aux céréales.\n\nLÉGUMES\nAil, algues (chlorella, spiruline), asperge verte, aubergine, avocat, artichaut, betterave, brocoli, carotte, cébette, céleri, champignon, chou de Bruxelles, chou cabus, chou-fleur, chou cavalier, chou kale, chou rouge, concombre, courgettes, courge, cresson, endive, épinards, fenouil, graines germées, graines de soja, haricots verts/beurre, kimchi, légumes verts à feuille (laitue, blette, fane de betterave...), navet, oignon, petits pois, piment, pissenlit, pois mange-tout, poireau, poivron, potiron, pousse de bambou, radis, radis noir, roquette, rutabaga, tomate.\n\nHERBES AROMATIQUES ET ÉPICES\nBasilic (frais ou sec), cannelle en bâton, ciboulette fraîche, citron, citron vert, coriandre, curcuma, estragon (frais ou sec), gingembre frais, laurier, menthe (fraîche ou séchée), moutarde, origan, paprika, persil (frais ou sec), piment de la Jamaïque, piment rouge en flocons, poivre noir moulu, poudre d'ail, romarin, sauge, sel de mer, thym.\n\nFRUITS\nAbricot, ananas, banane, baies, citron, fruit de la passion, grenade, griotte, groseille, kiwi, kumquat, mandarine, mangue, melon, nectarine, noix de coco, orange, pamplemousse, poire, pomme, pastèque, papaye, raisin, rhubarbe.\n\nFÉCULENTS\nFlageolet, lentilles, maïs, millet, quinoa, patate douce, pâtes complètes, pâtes aux légumineuses, pomme de terre nouvelle, pomme de terre cuite avec la peau, riz basmati/thaï, sarrasin, topinambour.\n\nPROTÉINES\nŒufs, poulet, dinde, bœuf, agneau, pancetta ou bacon (sans nitrates/nitrites), poissons blancs (truite arc-en-ciel, tilapia, bar...), thon en conserve, fruits de mer (crevettes, coquilles Saint-Jacques, huîtres), saumon frais ou fumé, tofu, miso ou tempeh.\n\nPRODUITS LAITIERS\nFromage de chèvre, emmental, yaourt nature.\n\nOLÉAGINEUX\nAmandes, purée d'amande ou de noix de cajou, beurre d'amande ou de noix de cajou, graines de chia, graines de courge, graines de lin, graines de sésame, graines de tournesol, noix, pistaches, pignons de pin, olives.\n\nMATIÈRES GRASSES ET VINAIGRES\nBeurre clarifié (ghee) ou beurre biologique, huile d'avocat, huile d'olive vierge extra, huile de coco, huile de noix, huile de sésame, huile riche en TCM, vinaigre de cidre (non filtré), vinaigre de riz ou de coco.\n\nAUTRES\nBouillon d'os, bouillon de légumes, câpres, crème de coco, crème fraîche, farine d'amande, levure nutritionnelle, maca en poudre, pickles, sauce curry rouge, sauce tamari, tahin.\n\nBOISSONS\nInfusion de camomille, infusion de cannelle, thé vert, thé chaï, café."
   },
   {
    "id": "p3_rec",
    "type": "texte",
    "titre": "Recommandations",
    "corps": "Pour rééquilibrer vos hormones, il faudra supprimer certains aliments.\n\nATTENTION AU SUCRE\nLe sucre ainsi que les édulcorants de synthèse affectent les hormones au quotidien. En grande quantité, c'est un puissant générateur d'inflammation. Il inhibe également les capteurs du cerveau qui empêchent les excès alimentaires...\n• Si vous avez une envie irrésistible de sucré, prenez un carré de chocolat noir contenant au moins 75% de cacao, à chaque repas.\n• La cannelle ou l'extrait de vanille pure permettent également de pallier le besoin de goût sucré.\n\nÉLIMINER LES SODAS, MÊME LIGHT\nVous savez que les sodas ne sont pas bons pour la santé... mais les sodas light non plus !\nEn effet, ils contiennent de grandes quantités d'acide phosphorique, ce qui augmente le risque de fracture osseuse. Les sodas light sont donc très acides et peuvent même dissoudre l'émail des dents. Pour neutraliser cette acidité, le corps va puiser le calcium des os, ce qui entraîne une réduction de la densité minérale osseuse.\nDe plus, les édulcorants de synthèse présents dans ces sodas peuvent entraîner une prise de poids : ils déclenchent la résistance à l'insuline.\n\nLIMITER LE GLUTEN ET LES CÉRÉALES\nLe gluten est une protéine présente dans le blé, le seigle, l'orge, le malt, la levure de bière, dans certaines avoines, les chewing-gums, certains condiments (sauce soja, vinaigrettes), les cafés aromatisés, les soupes en conserve, les plats préparés...\n• Choisir des aliments complets.\nLes femmes en ménopause et ménopausées stockent l'énergie facilement. Les céréales peuvent entraîner une prise de poids et perturber l'équilibre glycémique.\n\nATTENTION AU CAFÉ ET À L'ALCOOL\nLe café a un pH de 5, il est donc moins acide qu'une boisson de type soda. De plus, il contient de nombreux antioxydants que le corps absorbe facilement.\nMais attention, l'excès de caféine entraîne une hausse du cortisol et d'autres hormones du stress, ce qui favorise la prise de poids.\n• Se limiter à 1 tasse par jour.\nLe thé vert est une véritable alternative au café, car il contient moins de caféine et apporte de nombreux antioxydants.\nL'alcool est une boisson qui a un effet dépressif et qui contient généralement beaucoup de sucre.\n• Même s'il est conseillé de boire un verre de vin rouge par jour à cause de l'antioxydant resvératrol, il est préférable de supprimer l'alcool pendant cette phase.\n\nAVOIR UNE BONNE HYDRATATION\nUne bonne hydratation permet d'avoir moins faim (la soif est souvent confondue avec la faim). Cela permet également aux reins d'éliminer les toxines et au foie de métaboliser les graisses avec plus d'efficacité.\nPour savoir si on boit assez, il suffit d'observer la couleur des urines : elles doivent être claires, non troubles et de couleur jaune pâle.\n• Il faut boire environ 1/30e de son poids idéal. Les apports d'eau sont bien sûr variables selon la température et l'activité physique.\nL'hydratation doit se faire entre les repas : lorsque l'on ingère des aliments, l'estomac sécrète des sucs digestifs. Les boissons diluent ces substances importantes et peuvent perturber la digestion.\n• Idéalement, vous pouvez boire 20 minutes avant le repas et 2h après ce dernier.\n\nAVOIR UNE BONNE MASTICATION\nUne bonne mastication aide la salive à dégrader la nourriture et facilite donc la digestion. Cela empêche les brûlures d'estomac, les ballonnements... Elle permet également de limiter les apports, car elle facilite la perception des signaux de satiété.\n• Mâcher chaque bouchée 20 à 30 fois et mastiquer en pleine conscience pour bien apprécier les aliments."
   },
   {
    "id": "p3_m1",
    "type": "repas",
    "titre": "Menu · Semaine 1",
    "intro": "Petit déjeuner identique tous les jours ; déjeuner et dîner jour par jour.",
    "jours": [
     {
      "id": "p3_m1_j1",
      "label": "Jour 1",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de mâche kiwi & noix + 130g de poulet grillé",
      "col2": "",
      "din": "Emincé de porc au paprika + 200g d’haricots verts"
     },
     {
      "id": "p3_m1_j2",
      "label": "Jour 2",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade dinde avocat et poivrons + 1 fruit",
      "col2": "",
      "din": "Poulet au gingembre"
     },
     {
      "id": "p3_m1_j3",
      "label": "Jour 3",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade thaïe au boeuf + 1 fruit",
      "col2": "",
      "din": "Filet de saumon aux champignons"
     },
     {
      "id": "p3_m1_j4",
      "label": "Jour 4",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade asiatique",
      "col2": "",
      "din": "Oeuf cocotte aux épinards"
     },
     {
      "id": "p3_m1_j5",
      "label": "Jour 5",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de crevette façon thaïe + 1 fruit",
      "col2": "",
      "din": "Salade de brocolis aux oléagineux + 120g de jambon blanc"
     },
     {
      "id": "p3_m1_j6",
      "label": "Jour 6",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Carpaccio de bresaola / roquette + 1 fruit",
      "col2": "",
      "din": "Tajine de cabillaud aux poireaux"
     },
     {
      "id": "p3_m1_j7",
      "label": "Jour 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Poulet tomates & olives + 200g d’haricots verts + 1 fruit",
      "col2": "",
      "din": "Velouté de chou-fleur + 2 oeufs"
     }
    ]
   },
   {
    "id": "p3_c1",
    "type": "texte",
    "titre": "Liste de courses — Semaine 1",
    "corps": "La liste de courses ci-dessous ne comprend pas les petits déjeuners ni les smoothies.\n\nLÉGUMES / FRUITS\n• 2 champignons de Paris\n• 1.5 poignée de germes de soja frais\n• 2 poignées de mâche\n• 1 belle poignée de roquette\n• 50g de concombre + 1/2\n• 1/4 poivron jaune\n• 1/4 avocat\n• 50g de tomates cerises\n• 150g de courgette\n• 100g de poivron rouge\n• 200g de champignons frais\n• 400g d'haricots verts en conserve\n• 1 poignée de mesclun\n• 1.5 tomate\n• 200g de brocolis\n• 150g de chou-fleur\n• 250g d'épinards surgelés\n• 1/2 blanc de poireau + 150g\n• 1 kiwi\n• 100g de pamplemousse\n• 2.5 citrons\n• Fruits : 4\n\nHERBES AROMATIQUES (fraîches ou surgelées)\n• Ciboulette\n• Persil\n• Coriandre\n• Menthe\n\nÉPICES / AROMATES\n• Jus de citron\n• Oignon rouge, oignon blanc\n• Ail, échalote\n• Paprika, curcuma, cumin, ras-el-hanout\n• Thym, laurier\n• Vinaigre de riz\n• Sauce nuoc-mâm\n• Gingembre frais, en poudre\n• Concentré de tomate\n• Sauce soja\n• 50g de tomates concassées en conserve\n\nVIANDE / POISSONS / ŒUFS\n• 430g de poulet\n• 100g de thon en conserve\n• 130g d'escalope de dinde\n• 150g de rumsteak\n• 10 tranches fines de bresaola (100g)\n• 4 grosses crevettes cuites et décortiquées\n• 150g d'escalope de porc\n• 150g de saumon\n• 3 œufs\n• 60g de dés de chorizo\n• 150g de cabillaud\n• 120g de jambon blanc\n\nFROMAGE\n• Copeaux de parmesan\n\nMATIÈRES GRASSES\n• Huile d'olive\n• Huile de sésame\n• Huile de coco\n• Huile mélange 4 huiles\n• 20g de noix\n• 1 CS de cacahuètes hachées\n• 6 olives noires\n• 1 CS de graines de sésame\n• 1 CS de pignons de pin\n• 2 CS de graines de courge\n• 5 cerneaux de noix\n• 10 noisettes\n• 1 CS d'amandes effilées"
   },
   {
    "id": "p3_m2",
    "type": "repas",
    "titre": "Menu · Semaine 2",
    "intro": "Petit déjeuner identique tous les jours ; déjeuner et dîner jour par jour.",
    "jours": [
     {
      "id": "p3_m2_j1",
      "label": "Jour 1",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de riz 3 couleurs et crabe",
      "col2": "",
      "din": "Quiche endives et jambon"
     },
     {
      "id": "p3_m2_j2",
      "label": "Jour 2",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Buddha bowls veggies à l'avocat",
      "col2": "",
      "din": "Courgettes farcies"
     },
     {
      "id": "p3_m2_j3",
      "label": "Jour 3",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Poulet et flageolet à la provençale",
      "col2": "",
      "din": "Papillotes de cabillaud, pois gourmands"
     },
     {
      "id": "p3_m2_j4",
      "label": "Jour 4",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade tex mex",
      "col2": "",
      "din": "Tomates cuites viande de grison"
     },
     {
      "id": "p3_m2_j5",
      "label": "Jour 5",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Poivrons farcis au quinoa + 1 steak haché à 5%",
      "col2": "",
      "din": "Saumon en croûte de noix + 200g de légumes cuits"
     },
     {
      "id": "p3_m2_j6",
      "label": "Jour 6",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Crevettes à la provençale",
      "col2": "",
      "din": "Gratin de poireaux à la mimolette + 2 oeufs"
     },
     {
      "id": "p3_m2_j7",
      "label": "Jour 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Galette avocat, bresaola et roquette",
      "col2": "",
      "din": "Soupe orientale"
     }
    ]
   },
   {
    "id": "p3_c2",
    "type": "texte",
    "titre": "Liste de courses — Semaine 2",
    "corps": "La liste de courses ci-dessous ne comprend pas les petits déjeuners ni les smoothies.\n\nLÉGUMES\n• 2 avocats\n• Radis roses\n• 1/2 concombre\n• 1 citron jaune\n• 50g de tomates cerises\n• 150g de poivron rouge + 1/2\n• 100g de poivron (vert et jaune)\n• 100g de fenouil\n• 200g de carottes + 1\n• 1 poignée de roquette\n• 1/2 tomate + 200g\n• 200g de pois gourmands\n• 200g de légumes cuits\n• 200g d'endives\n• 100g de courgette\n• 1 courgette ronde\n• 2 blancs de poireaux\n\nHERBES AROMATIQUES (fraîches ou surgelées)\n• Ciboulette\n• Persil\n• Menthe\n• Basilic\n\nÉPICES / AROMATES\n• Jus de citron\n• Oignon rouge\n• Ail\n• Vinaigre de vin\n• Tabasco\n• Cumin, curcuma, piment, ras-el-hanout\n• Bouillon de légumes\n• Laurier, thym\n• 350g de tomates concassées en conserve\n• Concentré de tomates\n• 5cl de vin blanc sec\n\nFÉCULENTS\n• 35g de mélange de riz 3 couleurs\n• 50g de fèves\n• 70g de quinoa\n• 100g de haricots rouges en conserve\n• 35g de riz sauvage\n• 100g de flageolets en conserve\n• 1 galette de sarrasin (blé noir)\n\nVIANDE / POISSONS / ŒUFS\n• 100g de chair de crabe en conserve\n• 100g de talon de jambon\n• 120g de crevettes décortiquées\n• 130g de filet de poulet\n• 80g de bresaola\n• 160g de cabillaud\n• 150g de pavé de saumon\n• 50g de jambon cuit\n• 3 œufs\n• 150g d'escalope de dinde\n• 150g de bœuf haché à 5%\n• 100g de viande de grison\n\nMATIÈRES GRASSES\n• Huile d'olive\n• 2 CS de pignons de pin\n• 1 CS de graines de sésame\n• 4 olives noires\n• 10g de beurre\n• 30g de noix/amandes\n• 1 CS de crème fraîche à 4% + 20ml\n• 2 CS de graines de courge\n\nFROMAGE / PRODUITS LAITIERS\n• Copeaux de parmesan\n• 30g de gruyère râpé\n• 20g de parmesan\n• 50ml de lait demi-écrémé\n• 30g de mimolette"
   },
   {
    "id": "p3_m3",
    "type": "repas",
    "titre": "Menu · Semaine 3",
    "intro": "Petit déjeuner identique tous les jours ; déjeuner et dîner jour par jour.",
    "jours": [
     {
      "id": "p3_m3_j1",
      "label": "Jour 1",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Pokebowl au thon",
      "col2": "",
      "din": "Flan de légumes au cabillaud & comté"
     },
     {
      "id": "p3_m3_j2",
      "label": "Jour 2",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de chou-fleur, grenade, pois-chiches & oeufs pochés",
      "col2": "",
      "din": "Tartare de saumon aller-retour + 200g de légumes cuits"
     },
     {
      "id": "p3_m3_j3",
      "label": "Jour 3",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de pâtes à l'italienne + 1 fruit",
      "col2": "",
      "din": "Soupe thaïe aux crevettes"
     },
     {
      "id": "p3_m3_j4",
      "label": "Jour 4",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de quinoa croquante + 1 fruit",
      "col2": "",
      "din": "Chou-fleur cantonais"
     },
     {
      "id": "p3_m3_j5",
      "label": "Jour 5",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de lentilles, saumon et tomates + 1 fruit",
      "col2": "",
      "din": "Tiramisu betterave chèvre frais + 150g de poulet grillé"
     },
     {
      "id": "p3_m3_j6",
      "label": "Jour 6",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Wraps poulet, chèvre frais et avocat + 1 fruit",
      "col2": "",
      "din": "Quiche petits pois, chèvre frais et épinards"
     },
     {
      "id": "p3_m3_j7",
      "label": "Jour 7",
      "pdj": "Smoothie Détox ou P'ti dej' Ménopause Active + café ou infusion",
      "col1": "",
      "dej": "Salade de pâtes au poireaux et dés de bacon + 1 fruit",
      "col2": "",
      "din": "Wok encornets et poivrons"
     }
    ]
   },
   {
    "id": "p3_c3",
    "type": "texte",
    "titre": "Liste de courses — Semaine 3",
    "corps": "La liste de courses ci-dessous ne comprend pas les petits déjeuners ni les smoothies.\n\nLÉGUMES / FRUITS\n• 2 citrons, 1/2 citron vert\n• 100g de betterave crue\n• 100g de concombre\n• 1 belle poignée de roquette + quelques feuilles\n• 200g de tomates cerises\n• 200g de tomates cocktail\n• 1/2 tomate\n• 1/4 avocat\n• 180g de carottes\n• 350g de chou-fleur\n• 200g de poireaux\n• Quelques pousses d'épinards\n• 150g de petits pois surgelés\n• 80g de chou chinois\n• 2 champignons noirs\n• 100g de poivron jaune\n• 100g de poivron vert\n• 200g de betteraves rouges cuites\n• 200g de macédoine de légumes\n• 200g de légumes cuits au choix\n• 80g d'ananas\n• 150g de grenade\n\nHERBES AROMATIQUES (fraîches ou surgelées)\n• Coriandre\n• Basilic\n• Ciboulette\n• Persil\n\nÉPICES / AROMATES\n• Sauce soja\n• Vinaigre balsamique\n• 4 tomates séchées\n• Jus de citron\n• Curry, curcuma, ail semoule, ras-el-hanout\n• Oignon blanc, échalote\n• Estragon\n• Sauce nuoc-mâm\n• Bouillon de volaille\n• 1/4 de bâton de citronnelle\n\nFÉCULENTS\n• 70g de quinoa\n• 35g de tortis aux légumineuses\n• 1 galette mexicaine au maïs\n• 100g de pois chiches égouttés\n• 35g de lentilles vertes\n• 40g de penne\n\nVIANDE / POISSONS / ŒUFS\n• 100g de thon en conserve\n• 2 tranches de jambon cru\n• 270g de filet de poulet\n• 6 œufs\n• 80g de saumon fumé\n• 100g de saumon frais\n• 100g de dés de bacon (ou allumettes)\n• 120g de jambon blanc\n• 150g de crevettes crues\n• 150g d'encornets en anneaux (surgelés ou frais)\n• 80g de cabillaud\n\nMATIÈRES GRASSES\n• Huile d'olive\n• Huile de noix\n• 3 noix\n• 2 CS de graines de chia\n• 1 CS de pignons de pin + 20g\n• 1 CS de graines de sésame\n• 1 CS de graines de courge\n• 100ml de lait de coco\n\nFROMAGE / PRODUITS LAITIERS\n• Parmesan (râpé ou copeaux)\n• 120g de chèvre frais\n• 40g de féta\n• 1/2 yaourt à la grecque\n• 50ml de crème à 4%\n• 30g de comté râpé"
   },
   {
    "id": "p3_h_Petitsdéje",
    "type": "texte",
    "titre": "Recettes · Petits déjeuners et smoothies",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Smoothie énergétique\n• Smoothie vert\n• Smoothie vanille\n• Smoothie vert au noix de cajou\n• Crêpes aux amandes\n• Flan coco\n• Yaourt graines de chia et cannelle\n• Pudding de chia au lait de coco et à l'avocat\n• Biscuits amandes, noisettes et cacao\n• Omelette verte\n• Baconnais"
   },
   {
    "id": "p3_r17",
    "type": "texte",
    "titre": "Smoothie énergétique",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 1/2 concombre émincé\n• 1 branche de céleri\n• 1/4 avocat\n• 1 cc de graines de chia\n• 1 cc de graines de lin\n• 1 CS d'huile de coco\n• 1 fine tranche de gingembre frais\n• 250ml d'eau + 3 à 4 glaçons\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p3_r18",
    "type": "texte",
    "titre": "Smoothie vert",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 70g de légumes verts\n• 1/2 citron\n• 1 morceau de gingembre (5cm)\n• 1/4 d'avocat\n• 30g de flocon d'epeautre non sucrés\n• 1 CS d'huile de coco\n• 375ml d'eau\n\nPRÉPARATION\n1. Presser le jus de citron et râper le gingembre.\n2. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p3_r19",
    "type": "texte",
    "titre": "Smoothie vanille",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 70g de pousses d'épinards\n• 10 à 12 feuilles de menthe\n• 1 CS de purée d'amande\n• 1/4 cc d'extrait de vanille\n• 375ml de lait d'amande ou de lait de coco non sucré\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p3_r20",
    "type": "texte",
    "titre": "Smoothie vert au noix de cajou",
    "corps": "Pour : 1 personne · Préparation : 5 min\n\nINGRÉDIENTS\n• 70g d'épinards frais\n• 8 à 10 noix de cajou\n• 1/4 d'avocat\n• 1 CS de flocon d'épeautre non sucrés\n• 1 cc de cannelle\n• 250ml de lait de cajou ou autre lait de fruits à coques\n\nPRÉPARATION\n1. Mettre tous les ingrédients dans un blender et mélanger jusqu'à obtention d'une consistance homogène."
   },
   {
    "id": "p3_r21",
    "type": "texte",
    "titre": "Crêpes aux amandes",
    "corps": "Pour : 5 crêpes · Préparation : 5 min\n\nINGRÉDIENTS\n• 1 oeuf\n• 50g de purée d'amandes\n• 1 CS d'huile de coco\n• 1 pincée de sel\n\nPRÉPARATION\n1. Dans un mixeur ou à la main, mélanger l’oeuf, la purée d'amandes, 50ml d'eau, 1 cc d'huile de coco et le sel.\n2. Dans une poêle faire fondre un peu d'huile de coco, verser une louche de pâte et faire cuire la crêpe 30 seconde de chaque côté."
   },
   {
    "id": "p3_r22",
    "type": "texte",
    "titre": "Flan coco",
    "corps": "Pour : 2 flans · Préparation : 5 min · Cuisson : 40 min\n\nINGRÉDIENTS\n• 3 oeufs\n• 130ml de lait de coco\n• 50g de noix de coco râpée\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 180°C (th6).\n2. Fendre la gousse de vanille en 2 dans le sens de la longueur et récupérer les grains à l'aide de la pointe d'un couteau.\n3. Battre les oeufs, ajouter le lait de coco, la noix de coco râpée, la vanille et la cannelle.\n4. Verser dans 2 petits moules et cuire 40 minutes.\n5. Déguster tiède ou froid."
   },
   {
    "id": "p3_r23",
    "type": "texte",
    "titre": "Yaourt graines de chia et cannelle",
    "corps": "Pour : 2 personnes · Préparation : 5 min\n\nINGRÉDIENTS\n• 3 CS de graines de chia moulues\n• 40cl de lait végétal : amandes ou de coco\n• 1 cc de vanille en poudre\n• 1 cc de cannelle\n\nPRÉPARATION\n1. Dans un saladier, mélanger les graines de chia, le lait végétal, la vanille et la cannelle.\n2. Laisser reposer 10 min et mélanger de nouveau.\n3. Répartir dans 2 pots et réserver 4h au réfrigérateur."
   },
   {
    "id": "p3_r24",
    "type": "texte",
    "titre": "Pudding de chia au lait de coco et à l'avocat",
    "corps": "Pour : 2 personnes · Préparation : 15 min\n\nINGRÉDIENTS\n• 1 avocat\n• 3 CS de graines de chia moulues\n• 3 CS de lait de coco\n• 2 CS de cacao en poudre\n• 2 cc de cannelle\n• 1 gousse de vanille\n• 1 CS d'huile de coco\n\nPRÉPARATION\n1. Dans un bol, verser les graines de chia, la cannelle, le lait de coco et 200ml d'eau.\n2. Remuer jusqu'à ce que le mélange devienne gélatineux (5 à 10 min).\n3. Réserver.\n4. Récupérer la chair de l'avocat.\n5. Dans un blinder, mixer l'avocat, l'huile de coco, le caco et les grains de vanille.\n6. Ajouter la préparation au chia, mixer de nouveau.\n7. Répartir dans 2 ramequins et réserver au réfrigérateur au minimum 2h."
   },
   {
    "id": "p3_r25",
    "type": "texte",
    "titre": "Biscuits amandes, noisettes et cacao",
    "corps": "Pour : 10 biscuits · Préparation : 15 min\n\nINGRÉDIENTS\n• 25g de poudre de noisettes\n• 80g de poudre d'amandes\n• 1 cc de cacao cru en poudre\n• 2 oeufs\n• 1 CS d'huile de coco\n• 1 gousse de vanille\n• 1/2 cc de cannelle\n\nPRÉPARATION\n1. Préchauffer le four à 170°C (th5)\n2. Mélanger tous les ingrédients.\n3. Etaler la pâte et former des cercles. Les déposer sur une feuille de papier cuisson et enfourner 15 min."
   },
   {
    "id": "p3_r26",
    "type": "texte",
    "titre": "Omelette verte",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 2 œufs\n• 1 poignée d'épinards frais\n• 1 CS d'huile d'olive ou de ghee\n• 1 CS de persil ou coriandre fraîchement ciselé\n• 1 filet de jus de citron\n• Sel, poivre\n\nPRÉPARATION\n1. Battre les œufs dans un bol avec une pincée de sel et de poivre.\n2. Chauffez l'huile dans un poêle antiadhésive.\n3. Faites revenir les épinards jusqu'à ce qu'ils ramollissent.\n4. Verser les œufs battus sur les épinards, saupoudrer d'herbes fraîches, et laisser cuire à feu doux jusqu'à ce que l'omelette soit prise.\n5. Servir avec un filet de citron."
   },
   {
    "id": "p3_r27",
    "type": "texte",
    "titre": "Baconnais",
    "corps": "Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 2 tranches de bacon\n• 1 oeuf\n• 1 tomates cocktail\n• 2 olives\n• 1/4 d’échalote\n• Sel, poivre\n\nPRÉPARATION\n1. Hacher grossièrement le bacon et le déposer dans un moule à muffin.\n2. Ajouter l’échalote, la tomates et les olives hachées.\n3. Casser l’oeuf dessus.\n4. Saler et poivrer.\n5. Cuire à 180°C pendant 12 à 15 minutes."
   },
   {
    "id": "p3_h_Déjeuners",
    "type": "texte",
    "titre": "Recettes · Déjeuners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Carpaccio de bresaola / Roquette\n• Salade de crevette façon thaïe\n• Thon au sésame & pamplemousse\n• Salade thaïe au boeuf\n• Salade dinde avocat et poivrons\n• Salade de mâche kiwi & noix\n• Poulet tomates & olives\n• Salade asiatique\n• Poivrons farcis au quinoa\n• Salade tex mex\n• Poulet et flageolet à la provençale\n• Crevettes à la provencale\n• Pokebowl au thon\n• Salade de pâtes à l'italienne\n• Wraps poulet, chèvre frais et avocat\n• Salade de pâtes au poireaux et dés de bacon\n• Salade de quinoa croquante\n• Salade de chou-fleur, grenade, pois-chiches & oeufs pochés\n• Dhal de lentilles et potimarron au curry\n• Salade de lentilles, saumon et tomates"
   },
   {
    "id": "p3_r29",
    "type": "texte",
    "titre": "Carpaccio de bresaola / Roquette",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 10 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 10 tranches fines de bresaola (100g)\n• 2 CS d'huile d'olive\n• Le jus d'un citron\n• Copeaux de parmesan\n• Poivre\n• 1 belle poignée de roquette\n\nPRÉPARATION\n1. Répartir les tranches de bresaola sur une assiette.\n2. Ajouter l'huile d'olive, le jus de citron et poivrer.\n3. Ajouter la roquette et les copeaux de parmesan."
   },
   {
    "id": "p3_r30",
    "type": "texte",
    "titre": "Salade de crevette façon thaïe",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 1h\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 4 grosses crevettes cuites et décortiquées\n• 1/2 poignée de germes de soja\n• 1/4 concombre\n• 1/4 oignon rouge\n• 1 CS de menthe ciselée\n• 1/2 cc de gingembre frais râpé\n• 2 CS d'huile d'olive\n• Le jus d'1/2 citron\n• Sel, poivre\n\nPRÉPARATION\n1. Peler le concombre et le couper en dés.\n2. Peler et émincer l'oignon rouge.\n3. Dans un bol, mélanger l'huile avec le jus de citron et le gingembre. Saler et poivrer.\n4. Rincer et sécher les germes de soja.\n5. Dans un saladier, mélanger les germes de soja, les crevettes, le concombre, l'oignon, la menthe et la sauce.\n6. Réserver 1h au réfrigérateur."
   },
   {
    "id": "p3_r31",
    "type": "texte",
    "titre": "Thon au sésame & pamplemousse",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 10 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• 1 pavé de thon (150g)\n• 1 belle poignée de roquette\n• 1/2 pamplemousse rose\n• Le jus d'1/2 citron\n• 1 CS d'huile d'olive\n• 1 CS de graines de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Peler le pamplemousse, détacher les quartiers et récuperer le jus écoulé.\n2. Fouetter le jus de citron avec le jus de pamplemousse et 1 cc d'huile d'olive. Verser sur la roquette et mélanger.\n3. Chauffer 1 cc d'huile d'olive dans un poêle et saisir le pavé de thon 2 minutes de chaque côté. Saler et poivrer.\n4. Dans une assiette, répartir la salade de roquette, les quartiers de pamplemousse et déposer le thon.\n5. Parsemer de graines de sésame et servir."
   },
   {
    "id": "p3_r32",
    "type": "texte",
    "titre": "Salade thaïe au boeuf",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 10 min · Cuisson : 6 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 150g de rumsteak\n• 1/4 de concombre\n• 1 poignée de mesclun\n• 1 CS de cacahuètes hachées\n• 1 CS de sauce nuoc-mam\n• 1 CS de vinaigre de riz\n• 1 CS d'huile de sésame\n\nPRÉPARATION\n1. Faire chauffer une poêle antiadhésive et saisir le boeuf 2 à 3 minutes de chaque côté.\n2. Couper le en fines tranches.\n3. Couper le concombre en fines lamelles.\n4. Dans un saladier, mélanger le vinaigre, l'huile et la sauce nuoc-mam.\n5. Ajouter la salade, les concombres et le boeuf.\n6. Mélanger et saupoudrer de cacahuètes hachées"
   },
   {
    "id": "p3_r33",
    "type": "texte",
    "titre": "Salade dinde avocat et poivrons",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 15 min · Cuisson : 10 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 130g d'escalope de dinde\n• 1/4 poivron jaune\n• 1/4 avocat\n• 50g de tomates cerises\n• 1/2 oignon rouge\n• Le jus d'1/2 citron\n• 2 CS d'huile d'olive\n• 1/2 cc de paprika\n• Coriandre\n• Sel, poivre\n\nPRÉPARATION\n1. Laver le poivron, l'épépiner et le couper en bâtonnets.\n2. Peler et émincer l'oignon rouge. Couper les tomates cerises en 2.\n3. Détailler la chair de l’avocat en lamelles.\n4. Mélanger le jus de citron avec l'huile d'olive et ajouter tous les légumes ainsi que l'oignon. Saler et poivrer et ajouter la coriandre ciselée.\n5. Dans une poêle antiadhésive, faire griller l’escalope de dinde 4 minutes de chaque côté. Saler, poivrer et parsemer de paprika.\n6. Couper l’escalope en morceaux. Dans une assiette, déposer la salade et les morceaux de dinde."
   },
   {
    "id": "p3_r34",
    "type": "texte",
    "titre": "Salade de mâche kiwi & noix",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 10 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 2 poignées de mâche\n• 1 kiwi\n• 20g de noix\n• 1 CS d'huile d'olive\n• 2 CS de jus de citron\n• Sel, poivre\n\nPRÉPARATION\n1. Concasser les noix.\n2. Peler le kiwi et le couper en dés.\n3. Fouetter l'huile avec le jus de citron.\n4. Dans un saladier, mélanger la mâche avec les noix, kiwis et napper de vinaigrette."
   },
   {
    "id": "p3_r35",
    "type": "texte",
    "titre": "Poulet tomates & olives",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 15 min · Cuisson : 20 min\nÀ ajouter : légumes & fruit\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 1 tomate\n• 1 petit oignon\n• 1/2 gousse d’ail\n• 6 olives noires\n• Thym, laurier\n• 1 CS d’huile d’olive\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le blanc de poulet en morceaux.\n2. Peler et émincer l’oignon finement.\n3. Couper la tomate en dés.\n4. Dans une cocotte, faire chauffer l’huile d’olive et ajouter le poulet.\n5. Faire revenir pendant 10 minutes. Réserver dans une assiette.\n6. Ajouter les oignons, l’ail émincé, les tomates, le thym et le laurier.\n7. Faire sauter quelques minutes puis remettre le poulet.\n8. Saler, poivrer et faire mijoter pendant 15 minutes.\n9. Ajouter les olives et poursuivre la cuisson pendant 5 minutes."
   },
   {
    "id": "p3_r36",
    "type": "texte",
    "titre": "Salade asiatique",
    "corps": "Semaine 1 · Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 2 champignons de Paris\n• 1 poignée de germes de soja frais\n• 100g de pamplemousse\n• 50g de concombre\n• 100g de thon en conserve\n• 1 CS de ciboulette ciselée\n• 1 CS de persil ciselée\n• Le jus d’1/2 citron\n• 1 CS d’huile d’olive\n• Sel, poivre\n\nPRÉPARATION\n1. Emincer les champignons et le citronner.\n2. Rincer et égoutter les germes de soja.\n3. Peler le pamplemousse à vif et le couper en morceaux en gardant le jus.\n4. Egoutter et émietter le thon.\n5. Fouetter le jus de pamplemousse avec l’huile, saler et poivrer.\n6. Dans un saladier mélanger tous les ingrédients, ajouter ciboulette, persil et la sauce.\n7. Mélanger et servir."
   },
   {
    "id": "p3_r37",
    "type": "texte",
    "titre": "Poivrons farcis au quinoa",
    "corps": "Semaine 2 · Pour : 1 personne · Préparation : 40 min · Cuisson : 12 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 35g de quinoa\n• 1/2 poivron rouge\n• 1/2 tomate\n• 1/4 concombre\n• 1/2 oignon\n• 2 CS d'huile d'olive\n• Le jus d'1/4 citron\n• 1/4 botte de persil\n• 1/4 botte de menthe\n• Sel, poivre\n\nPRÉPARATION\n1. Faire cuire le quinoa dans de l’eau bouillante salée pendant 12 minutes. Egoutter et réserver.\n2. Peler et couper le concombre en dés.\n3. Laver et couper les tomates en petits dès.\n4. Peler et émincer l'oignon.\n5. Mettre le quinoa refroidit dans un saladier. Ajouter le concombre, les tomates et l'oignon puis verser l'huile d'olive et le jus de citron. Réserver.\n6. Ciseler le persil et la menthe et les ajouter à la préparation. Saler et poivrer.\n7. Réserver au frais pendant 30 minutes.\n8. Remplir le 1/2 poivron.\n9. Décorer de persil et servir."
   },
   {
    "id": "p3_r38",
    "type": "texte",
    "titre": "Salade tex mex",
    "corps": "Semaine 2 · Pour : 1 personne · Préparation : 15 min\n\nINGRÉDIENTS\n• 100g de haricots rouges en conserve\n• 1/2 avocat\n• 50g de tomates cerises\n• 50g de poivron rouge\n• 1/4 oignon rouge\n• 4 olives noires\n• 100g de talon de jambon\n• 1 CS d’huile d’olive\n• 1 CS de vinaigre de vin\n• Tabasco\n• 1 pincée de cumin\n• Persil ciselé\n• Sel, poivre\n\nPRÉPARATION\n1. Egoutter les haricots rouges.\n2. Couper les tomates cerises en 4, le poivron en lanières.\n3. Emincer l”oignon rouge.\n4. Couper l’avocat et le talon de jambon en dés.\n5. Mélanger tous les ingrédients.\n6. Ajouter l’huile, le vinaigre, le cumin, tabasco, le persil.\n7. Saler et poivrer.\n8. Mélanger le tout."
   },
   {
    "id": "p3_r39",
    "type": "texte",
    "titre": "Poulet et flageolet à la provençale",
    "corps": "Semaine 2 · Pour : 1 personne · Préparation : 15 min · Cuisson : 25 min\n\nINGRÉDIENTS\n• 130g de filet de poulet\n• 100g de flageolet en conserve\n• 100g de poivrons rouge\n• 100g de carottes\n• 100g de tomates concassées\n• 1/2 oignon\n• 1/2 gousse d’ail\n• 1/2 cc de concentré de tomate\n• 1 CS d’huile d’olive\n• 1 CS de pignons de pin\n• 1/2 cc de thym\n• Piment\n• Sel, poivre\n\nPRÉPARATION\n1. Peler et émincer l’ail et l’oignon.\n2. Couper le poulet en morceaux.\n3. Couper le poivron et les carottes en dés.\n4. Dans une cocotte faire revenir l’ail et l’oignon avec l’huile d’olive pendant 2 minutes.\n5. Ajouter le poulet, saler, poivre et laisser cuire 10 minutes en remuant.\n6. Ajouter les dés de poivrons et de carottes, les tomates concassées et leur jus, le concentré de tomate, le thym et le piment.\n7. Mélanger et ajouter les flageolets.\n8. Poursuivre la cuisson 10 minutes à couvert et à feu doux.\n9. Parsemer de pignons de pin et servir."
   },
   {
    "id": "p3_r40",
    "type": "texte",
    "titre": "Crevettes à la provencale",
    "corps": "Semaine 2 · Pour : 1 personne · Préparation : 15 min · Cuisson : 40 min\n\nINGRÉDIENTS\n• 120g de crevettes décortiquées\n• 35g de riz sauvage\n• 100g de poivron (vert et jaune)\n• 100g de fenouil\n• 100g de tomates concassées en conserve\n• 1 petit oignon, laurier, thym\n• 1/2 gousse d’ail\n• 350ml de bouillon de légumes\n• 1 CS d’huile d’olive\n• Piment de cayenne, curcuma,\n• Sel, poivre\n\nPRÉPARATION\n1. Laver et émincer les poivrons et fenouil.\n2. Peler et hacher l’ail et l’oignon.\n3. Dans un faitout, faire revenir l’oignon, les poivrons, le fenouil, le laurier et le thym avec l’huile d’olive pendant 10 minutes.\n4. Mélanger régulièrement. Saler et poivrer.\n5. Lorsque les légumes sont fondant, ajouter l’ail, le piment, le curcuma, les tomates avec leur jus et le bouillon de légumes.\n6. Porter à ébullition, baisser le feu, couvrir et laisser cuire 5 minutes.\n7. Verser le riz, mélanger et laisser cuire 30 minutes. Incorporer les crevettes, ajouter de l’eau si necessaire et cuire de nouveau 5 min."
   },
   {
    "id": "p3_r41",
    "type": "texte",
    "titre": "Pokebowl au thon",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 15 min · Cuisson : 12 min\n\nINGRÉDIENTS\n• 100g de thon en conserve\n• 35g de quinoa\n• 100g betterave crue\n• 100g de concombre\n• 80g d'ananas\n• Le jus d'1/2 citron\n• 1 CS de sauce soja\n• 1 CS d'huile d'olive\n• 1 cc de coriandre ciselée\n• 1 CS de graines de chia\n• Sel, poivre\n\nPRÉPARATION\n1. Emietter le thon et ajouter la sauce soja et l'huile d'olive.\n2. Faire cuire le quinoa dans de l'eau bouillante salée pendant 12 minutes.\n3. Egoutter, passer sous l'eau froide et réserver.\n4. Couper l'ananas en petits cubes.\n5. Peler la betterave et la râper.\n6. Peler le concombre et le couper en fines rondelles.\n7. Dans une assiette, répartir le quinoa, le thon, l'ananas, la betterave et le concombre.\n8. Saler, poivrer, parsemer de coriandre, de graines de chia et arroser de jus de citron."
   },
   {
    "id": "p3_r42",
    "type": "texte",
    "titre": "Salade de pâtes à l'italienne",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 15 min · Cuisson : 12 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 35g de tortis aux légumineuses\n• 100g de tomates cerises\n• 2 tomates séchées\n• 2 tranches de jambon cru\n• 1 CS de pignons de pin\n• 1 belle poignée de roquette\n• 1 CS d'huile d'olive\n• 1 CS de vinaigre balsamique\n• Parmesan (râpé ou copeaux)\n• Sel, poivre\n• Basilic frais\n\nPRÉPARATION\n1. Faire cuire les pâtes al dente, dans de l'eau bouillante salée.\n2. Les égoutter et les laisser refroidir.\n3. Laver et couper les tomates cerises en 2.\n4. Couper les tomates séchées en morceaux.\n5. Dans un saladier, mélanger les tomates avec les pâtes.\n6. Déposer la roquette. Ajouter l'huile, le vinaigre, les pignons de pins, le basilic émincé, saler et poivrer.\n7. Mélanger délicatement.\n8. Mettre la salade dans une assiette.\n9. Ajouter les tranches de jambon cru et parsemer de parmesan (râpé ou en copeaux)."
   },
   {
    "id": "p3_r43",
    "type": "texte",
    "titre": "Wraps poulet, chèvre frais et avocat",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 1 galette mexicaine au maïs\n• 120g de filet de poulet\n• 1/2 tomate\n• 1/4 avocat\n• 40g de chèvre frais\n• 1 CS huile d’olive\n• Jus de citron\n• Ciboulette\n• Sel, poivre\n\nPRÉPARATION\n1. Emincer le poulet et le faire cuire à la poêle.\n2. Laisser refroidir.\n3. Laver la tomate et la couper en rondelles.\n4. Couper l’avocat en petits dés et arroser- le de citron.\n5. Dans un saladier, mélanger le poulet refroidit, les tomates, l’avocat, le chèvre frais, la ciboulette, l’huile d’olive. Saler et poivrer.\n6. Faire réchauffer la galette mexicaine au micro-ondes.\n7. Garnir la galette du mélange."
   },
   {
    "id": "p3_r44",
    "type": "texte",
    "titre": "Salade de pâtes au poireaux et dés de bacon",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 200g de poireaux\n• 40g de penne\n• 100g de dés de bacon (ou allumettes)\n• 1 CS d’huile d’olive\n• 1 CS de graines de courges\n• Sel, poivre\n\nPRÉPARATION\n1. Nettoyer les poireaux, ôter la partie verte foncé et émincer les en rondelles.\n2. Faire fondre dans une sauteuse avec l’huile d’olive, pendant 15 minutes à feu moyen.\n3. Faire cuire les pâtes dans de l’eau bouillante salée.\n4. Ajouter les dés de bacon aux poireaux et poursuivre la cuisson 5 minutes.\n5. Mélanger le tout, saler et poivrer et parsemer de graines de courges."
   },
   {
    "id": "p3_r45",
    "type": "texte",
    "titre": "Salade de quinoa croquante",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 35g de quinoa\n• 100g de carottes\n• 100g de tomates cerises\n• 1 CS d’huile de noix\n• 1/2 citron\n• 3 noix\n• 1/2 cc de curry\n• 40g de féta\n• Persil\n• Sel, poivre\n\nPRÉPARATION\n1. Peler les carottes et les couper en petits dés.\n2. Couper les tomates cerises en 2.\n3. Faire cuire le quinoa selon les indications du paquet.\n4. Egoutter et le passer sous l’eau froide.\n5. Dans un saladier, fouetter le jus de citron avec l’huile et le curry.\n6. Ajouter les carottes, les tomates, le quinoa, les noix concassées, la féta émittée.\n7. Parsemer de persil et mélanger."
   },
   {
    "id": "p3_r46",
    "type": "texte",
    "titre": "Salade de chou-fleur, grenade, pois-chiches & oeufs pochés",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 200g de chou-fleur\n• 100g de pois chiches égouttés\n• 150g de grenade\n• 2 oeufs\n• Quelques feuilles de roquette\n• Persil\n• 1/2 cc de curcuma\n• 1 CS d’huile d’olive\n• 1/2 citron\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le chou-fleur en fleurettes et le faire cuire à la vapeur pendant 15 minutes.\n2. Rincer la roquette.\n3. Récupérer les graines de grenade.\n4. Dans un saladier, mélanger la roquette avec les pois chices et le chou-fleur.\n5. Faire pocher les oeufs pendant 6 minutes dans de l’eau frémissante.\n6. Mélanger le jus de citron avec l’huile et le curcuma. Saler et poivrer.\n7. Napper la salade de sauce, déposer les oeufs pochés et parsemer de persil haché."
   },
   {
    "id": "p3_r47",
    "type": "texte",
    "titre": "Dhal de lentilles et potimarron au curry",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 30 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 150g de potimarron\n• 50g de tomates concassées\n• 100g de pois chiche en conserve\n• 1 petit oignon\n• 35g de lentilles corail\n• 100ml de bouillon de légumes\n• 2 CS d’huile d’olive\n• Gingembre frais\n• 1/2 gousse d’ail\n• 1/2 cc de curry\n• Coriandre\n• Sel, poivre\n\nPRÉPARATION\n1. Peler le potimarron et le couper en gros dés.\n2. Peler et émincer l’oignon et l’ail.\n3. Dans une poêle, faire chauffer l’huile d’olive, ajouter le potimarron, l’oignon, le gingembre râpé, l’ail et faire suer pendant 3 min.\n4. Ajouter le curry et cuire 5 min.\n5. Verser les tomates concassées, les pois chiches, les lentilles et le bouillon.\n6. Saler, poivrer et laisser cuire 25 min à feu doux.\n7. Parsemer de coriandre et servir."
   },
   {
    "id": "p3_r48",
    "type": "texte",
    "titre": "Salade de lentilles, saumon et tomates",
    "corps": "Semaine 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\nÀ ajouter : fruit\n\nINGRÉDIENTS\n• 35g de lentilles vertes\n• 1 petit oignon blanc\n• 80g de saumon fumé\n• 200g de tomates cocktail\n• 1 CS de vinaigre balsamique\n• 1 CS d’huile d’olive\n• 1 CS de graines de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Faire cuire les lentilles 15 minutes à l’eau bouillante.\n2. Les egoutter et les passer sous un filet d’eau froide.\n3. Peler et émincer l’oignon.\n4. Couper le saumon en lanières.\n5. Dans un saladier, fouetter l’huile avec le vinaigre, saler et poivrer.\n6. Ajouter les lentilles, l’oignon, le saumon, les tomates coupées en deux et les graines de sésame.\n7. Melanger.\n8. Réserver au frais jusqu’au service."
   },
   {
    "id": "p3_h_Dîners",
    "type": "texte",
    "titre": "Recettes · Dîners",
    "corps": "Les recettes de cette partie, dans l'ordre :\n• Emincé de porc au paprika\n• Clafoutis de légumes rôtis\n• Brochettes de poulet aux épices\n• Tiramisu betterave chèvre frais et pignons de pins\n• Tartare de saumon aller-retour\n• Tartare de thon\n• Poulet au gingembre\n• Courgettes farcies\n• Filet de saumon aux champignons\n• Oeuf cocotte aux épinards\n• Gratin de poireaux à la mimolette\n• Velouté de chou-fleur\n• Tajine de cabillaud aux poireaux\n• Flan de légumes au cabillaud & comté\n• Wok encornets et poivrons\n• Salade de brocolis aux oléagineux\n• Tomates cuites viande de grison\n• Soupe orientale\n• Chou-fleur cantonais\n• Quiche petits pois, chèvre frais et épinards"
   },
   {
    "id": "p3_r50",
    "type": "texte",
    "titre": "Emincé de porc au paprika",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 25 min\nÀ ajouter : légumes\n\nINGRÉDIENTS\n• 150g d'escalope de porc\n• 1/2 tomate\n• 1/2 oignon\n• Persil\n• 1/2 cc de paprika\n• 1 cc de concentré de tomate\n• 1 CS d'huile d'olive\n• 1 CS de graines de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le porc en petits morceaux.\n2. Peler et émincer l'oignon.\n3. Laver la tomate et la couper en dés.\n4. Dans une sauteuse, faire chauffer l'huile et ajouter l'oignon et le porc.\n5. Faire sauter 10 minutes à feu moyen en remuant.\n6. Ajouter les tomates, le concentré de tomates, le paprika, le sel, le poivre et 3 CS d'eau.\n7. Couvrir et laisser mijoter pendant 15 minutes.\n8. Parsemer de persil et de graines de sésame juste avant de servir."
   },
   {
    "id": "p3_r51",
    "type": "texte",
    "titre": "Clafoutis de légumes rôtis",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 1h\n\nINGRÉDIENTS\n• 130ml de lait demi-écrémé\n• 2 oeufs\n• 5g de maïzena\n• 1/2 courgette\n• 1/4 de poivron rouge\n• 1/2 échalote\n• 4 tomates cerises\n• 1/2 cc de paprika\n• 1 CS d’huile d’olive\n• 1/2 crottin de chèvre\n• 1/2 gousse d’ail\n• Thym\n• Sel, poivre\n\nPRÉPARATION\n1. Préchauffer le four à 220°C.\n2. Découper la courgette, le poivron et l'échalote en lanières. Les déposer sur une plaque allant au four.\n3. Ajouter le paprika, l’ail émincé, l’huile d’olive, le sel et le poivre. Mélanger.\n4. Enfourner 20 minutes et retourner les légumes toutes les 10 minutes.\n5. Répartir les légumes dans un ramequin (environ 12 cm de diamètre)\n6. Mélanger le lait, les oeufs, la maïzena et le thym. Saler et poivrer.\n7. Répartir le mélange dans le ramequin.\n8. Ajouter les tomates cerises et les crottins de chèvre coupés en morceaux.\n9. Cuire 40 minutes à 160°C."
   },
   {
    "id": "p3_r52",
    "type": "texte",
    "titre": "Brochettes de poulet aux épices",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 1h · Cuisson : 10 min\nÀ ajouter : légumes cuits\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 1 CS d'huile d'olive\n• Le jus d'1/2 citron\n• 1/2 gousse d'ail\n• 1/2 cc de piment\n• 1/2 cc de cumin en poudre\n• 1/2 cc de sumac\n• 1/2 cc de thym\n• 1 CS de graines de sésame\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le poulet en cubes.\n2. Peler et presser les gousses d'ail.\n3. Mélanger l'huile, le thym, les épices, le jus de citron, les graines de sésame et l'ail.\n4. Ajouter les cubes de poulet.\n5. Mélanger et réserver 1h au réfrigérateur.\n6. Enfiler les cubes de poulet sur des pics à brochettes et les faire griller au barbecue ou à la poêle."
   },
   {
    "id": "p3_r53",
    "type": "texte",
    "titre": "Tiramisu betterave chèvre frais et pignons de pins",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 2h\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 200g de betterave rouges cuites\n• 30g de chèvre frais\n• 1/2 yaourt à la grecque\n• 20g de pignons de pins\n• Persil frais\n• Sel, poivre\n\nPRÉPARATION\n1. Couper les betteraves en lamelles.\n2. Mélanger le chèvre frais avec le yaourt.\n3. Saler, poivrer et ajouter le persil frais ciselé.\n4. Dans un ramequin, disposer une lamelle de betterave. Recouvrir du mélange au chèvre. Ajouter des pignons. Renouveler l’opération jusqu’à épuisement des ingrédients.\n5. Réserver 2h au réfrigérateur minimum.\n6. Déposer du persil frais dessus au moment de servir"
   },
   {
    "id": "p3_r54",
    "type": "texte",
    "titre": "Tartare de saumon aller-retour",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 4 min\nÀ ajouter : légumes cuits + 1 CS d'huile ou d'oléagineux\n\nINGRÉDIENTS\n• 100g de saumon frais\n• 1 jaune d’oeuf\n• Le jus d’1/2 citron\n• 1/2 échalote\n• 2 tomates séchées\n• Basilic frais\n• 1 CS d’huile d’olive\n• Sel, poivre\n\nPRÉPARATION\n1. Hacher le saumon grossièrement.\n2. Dans un saladier, fouetter le jaune d’oeuf.\n3. Ajouter le jus de citron, l’huile d’olive. Remuer. Saler et poivrer.\n4. Ajouter le saumon à la sauce, l’échalote hachée, les tomates séchées coupées en petits dés et le basilic ciselé.\n5. Former une galette.\n6. Dorer 1 minute sur chaque face dans un poêle antiadhésive."
   },
   {
    "id": "p3_r55",
    "type": "texte",
    "titre": "Tartare de thon",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 2h\nÀ ajouter : légumes cuits\n\nINGRÉDIENTS\n• 150g de thon frais\n• 1 échalote\n• Le jus d'1/2 citron\n• 1/4 bouquet de coriandre\n• 2 CS d'huile d'olive\n• 1 CS de persil ciselé\n• 1 CS de ciboulette hachée\n• Piment de cayenne\n• Sel, poivre\n\nPRÉPARATION\n1. Enlever la peau et les arêtes du thon.\n2. Le couper en petits cubes de 1/2cm d'épaisseur.\n3. Mettre le tout dans un saladier.\n4. Saler, poivrer, pimenter. Ajouter l'huile d'olive et remuer.\n5. Ajouter les échalotes hachées, le persil et la ciboulette.\n6. Ajouter un peu de jus de citron.\n7. Réserver 2h au réfrigérateur.\n8. Arroser du jus de citron restant et servir."
   },
   {
    "id": "p3_r56",
    "type": "texte",
    "titre": "Poulet au gingembre",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 15 min\n\nINGRÉDIENTS\n• 150g de blanc de poulet\n• 150g de courgette\n• 100g de poivron rouge\n• 1/2 cc de gingembre râpé\n• 1 CS de sauce soja salé\n• 2 CS d'huile mélange 4 huiles\n\nPRÉPARATION\n1. Émincer le poulet finement.\n2. Couper la courgette en bâtonnets et le poivron en lanières.\n3. Dans un wok, faire revenir le poivron dans l'huile. Ajouter la courgette. Faire cuire 5 minutes.\n4. Ajouter le poulet, le gingembre et la sauce soja.\n5. Cuire 10 minutes."
   },
   {
    "id": "p3_r57",
    "type": "texte",
    "titre": "Courgettes farcies",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 45 min\n\nINGRÉDIENTS\n• 1 courgette ronde\n• 150g de boeuf haché à 5%\n• 1 cc de concentré de tomates\n• 1 CS de persil haché\n• 1 CS de menthe ciselée\n• 1/2 oignon\n• 2 CS d'huile d'olive\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le chapeau de la courgette.\n2. Creuser à l'aide d'une petite cuillière et récupérer la chair.\n3. La couper en morceaux.\n4. Préchauffer le four à 180°C.\n5. Peler et émincer l'oignon.\n6. Faire chauffer l'huile dans une poêle et faire revenir l'oignon avec la chair de courgette pendant 5 minutes.\n7. Ajouter le concentré de tomate, les herbes, la viande, saler et poivrer.\n8. Garnir la courgette avec la farce et la déposer dans un plat allant au four avec un verre d'eau.\n9. Cuire 45 minutes."
   },
   {
    "id": "p3_r58",
    "type": "texte",
    "titre": "Filet de saumon aux champignons",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\n\nINGRÉDIENTS\n• 150g de saumon\n• 1 CS d'huile d'olive\n• 1 échalote\n• 1 gousse d'ail écrasée\n• 1/2 cc de gingembre en poudre\n• 1 CS d'huile de sésame\n• 200g de champignons frais\n• Coriandre\n\nPRÉPARATION\n1. Dans une pôle faire chauffer l'huile d'olive et faire revenir l'ail, l'échalote émincée et le gingembre pendant 1 minute.\n2. Ajouter le filet de saumon et faire cuire 3 minutes de chaque côté.\n3. Retirer le poisson de la poêle et réserver.\n4. Faire chauffer la même poêle et ajouter l'huile de sésame.\n5. Mettre les champignons préalablement émincé et cuire 3 minutes sans cesser de remuer.\n6. Dresser les champignons dans une assiette et déposer le filet de saumon par dessus.\n7. Parsemer de coriandre."
   },
   {
    "id": "p3_r59",
    "type": "texte",
    "titre": "Oeuf cocotte aux épinards",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 250g d’épinards surgelés\n• 1 oeufs\n• 60g de dés de chorizo\n• 1 CS de pignons de pins\n• Sel, poivre\n\nPRÉPARATION\n1. Faire fondre les épinards dans une casserole avec un peu d’eau.\n2. Saler et poivrer.\n3. Les mettre dans un ramequin allant au four.\n4. Casser un œuf et parsemer de dés de chorizo.\n5. Cuire au four 15 à 20 minutes, à 180°C.\n6. Parsemer de pignons de pins."
   },
   {
    "id": "p3_r60",
    "type": "texte",
    "titre": "Gratin de poireaux à la mimolette",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 35 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 2 blancs de poireaux\n• 30g de mimolette\n• 1 CS d'huile d'olive\n• 20ml de crème fraiche à 4%\n• 5cl de vin blanc sec\n• 1 cc de pignons de pins\n• Sel, poivre\n\nPRÉPARATION\n1. Laver les poireaux, les couper et les émincer en julienne.\n2. Dans une sauteuse, faire chauffer l'huile d'olive et faire fondre les poireaux.\n3. Saler et poivrer.\n4. Faire suer les poireaux pendant quelques minutes et ajouter le vin blanc.\n5. Cuire 30 minutes à feu doux.\n6. Préchauffer le four à 210°C (th7).\n7. Dans un plat à gratin, répartir la fondue de poireaux.\n8. Ajouter la mimolette coupée en morceaux, la crème liquide et les pignons de pins.\n9. Enfourner 5 minutes."
   },
   {
    "id": "p3_r61",
    "type": "texte",
    "titre": "Velouté de chou-fleur",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 150g de chou-fleur\n• 1/2 blanc de poireau\n• 1/2 oignon\n• 1/2 gousse d'ail\n• 1 CS d'huile de coco\n• 1 CS de graines de courges\n• Sel, poivre\n\nPRÉPARATION\n1. Détailler le chou-fleur en fleurette et le rincer.\n2. Laver et émincer le poireau.\n3. Peler et hacher l'ail et l'oignon.\n4. Dans une casserole, faire fondre l'huile de coco à feu doux pendant 2 minutes.\n5. Ajouter les poireaux, le chou-fleur, l'ail et l'oignon. Saler, poivrer.\n6. Faire cuire à feu doux pendant 5 minutes en remuant.\n7. Couvrir d'eau à hauteur et cuire à couvert pendant 15 minutes.\n8. Mixer le tout jusqu'à l'obtention d'un velouté.\n9. Parsemer de graines de courges et servir."
   },
   {
    "id": "p3_r62",
    "type": "texte",
    "titre": "Tajine de cabillaud aux poireaux",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 35 min\n\nINGRÉDIENTS\n• 150g de blancs de poireaux\n• 150g de cabillaud\n• 50g de tomates concassées en conserve\n• 1/2 oignon\n• 1 CS d’huile d’olive\n• 1 CS de graines de courges\n• 1/2 cc de ras-el-hanout\n• 1/2 cc de cumin\n• 1/2 cc de curcuma\n• Sel, poivre\n\nPRÉPARATION\n1. Emincer les poireaux finement.\n2. Les faire cuire 15 minutes à la vapeur.\n3. Peler et émincer l’oignon.\n4. Couper le cabillaud en cubes.\n5. Dans une cocotte ou plat à tajine, faire revenir l’oignon dans l’huile, ajouter les épices et les tomates.\n6. Saler et poivrer et laisser cuire 20 minutes à feu doux.\n7. Déposer les cubes de poissons et prolonger la cuisson de 10 minutes en retournant le poisson à mi-cuisson.\n8. Servir avec les poireaux et parsemer de graines de courges."
   },
   {
    "id": "p3_r63",
    "type": "texte",
    "titre": "Flan de légumes au cabillaud & comté",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 200g de macédoine de légumes\n• 80g de cabillaud\n• 30g de comté râpé\n• 1 oeuf\n• 50ml de crème à 4%\n• Sel, poivre\n\nPRÉPARATION\n1. Préchauffer le four à 150°C.\n2. Egoutter la macédoine.\n3. Couper le cabillaud en petits dés.\n4. Dans un saladier, battre l’oeuf en omelette, ajouter la crème et le comté.\n5. Saler et poivrer.\n6. Ajouter la macédoine et le poisson.\n7. Mélanger.\n8. Mettre dans un ramequin et cuire 20 minutes."
   },
   {
    "id": "p3_r64",
    "type": "texte",
    "titre": "Wok encornets et poivrons",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 40 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 150g d'encornets en anneaux (surgelés ou frais)\n• 100g de poivron jaune\n• 100g de poivron vert\n• 6 tomates cerises\n• 1/2 oignon rouge\n• 2 CS d'huile d'olive\n• 1/2 cc de raz el hanout\n• 1 cc d'ail\n• 1 cc de persil ciselée\n• 1 cc de ciboulette ciselée\n• Le jus d'1/2 citron\n• Sel, poivre\n\nPRÉPARATION\n1. Laver et couper les poivrons en morceaux.\n2. Couper l'oignon en 4.\n3. Dans un saladier, mélanger les encornets, les poivrons, les oignons, les tomates cerises, le persil, la ciboulette, le jus de citron, le raz el hanout, l'ail et l'huile d'olive.\n4. Saler et poivrer et laisser mariner pendant 30 minutes.\n5. Faire chauffer un wok et ajouter la marinade.\n6. Faire cuire pendant 20 minutes en remuant.\n7. Ajouter de l'eau si nécessaire."
   },
   {
    "id": "p3_r65",
    "type": "texte",
    "titre": "Salade de brocolis aux oléagineux",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 10 min\nÀ ajouter : viande ou poisson\n\nINGRÉDIENTS\n• 200g de brocolis\n• 5 cerneaux de noix\n• 10 noisettes\n• 1 CS d’amandes effilées\n• 1 CS d’huile d’olive ou de noix\n• Sel, poivre\n\nPRÉPARATION\n1. Couper le brocoli en fleurettes et le faire cuire à la vapeur pendant 10 minutes.\n2. Dans un saladier, mélanger les brocolis avec les amandes, les noix et les noisettes concassées.\n3. Saler, poivrer et ajouter l’huile d’olive."
   },
   {
    "id": "p3_r66",
    "type": "texte",
    "titre": "Tomates cuites viande de grison",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 100g de viande de grisons\n• 200g de tomate\n• 1 gousse d'ail\n• Basilic frais\n• 1 CS d'huile d'olive\n• Sel, poivre\n\nPRÉPARATION\n1. Faire préchauffer le four à 100°C.\n2. Couper les tomates en 2 dans le sens de la longueur.\n3. Les placer sur une plaque allant au four.\n4. Emincer l'ail et le répartir sur les tomates.\n5. Cuire pendant 20 minutes.\n6. A la sortie du four, napper d'huile d'olive, saler et poivrer et répartir la viande de grison."
   },
   {
    "id": "p3_r67",
    "type": "texte",
    "titre": "Soupe orientale",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 20 min\n\nINGRÉDIENTS\n• 150g d’escalope de dinde\n• 100g de courgette\n• 100g de carottes\n• 150g de concassé de tomates\n• Coriandre\n• 1 cc de ras el-hanout\n• 2 CS de graines de courges\n\nPRÉPARATION\n1. Laver les légumes.\n2. Peler la carotte et la couper en rondelles.\n3. Couper la courgette en dés.\n4. Couper la dinde en lamelles.\n5. Porter 300ml d’eau à ébullition avec le concassé de tomates et les épices.\n6. Ajouter les carottes et la dinde. Cuire 5minutes.\n7. Ajouter les courgettes et la coriandre. Cuire 1 minute.\n8. Saler et poivrer. Parsemer de graines de courges."
   },
   {
    "id": "p3_r68",
    "type": "texte",
    "titre": "Chou-fleur cantonais",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 5 min\n\nINGRÉDIENTS\n• 150g de chou-fleur\n• 1 petit oignon\n• 50g de petits pois surgelés\n• 120g de jambon blanc\n• 1 CS de sauce soja\n• 1 CS d’huile d’olive\n• 1 CS de graines de chia\n\nPRÉPARATION\n1. Emincer les oignons.\n2. Mixer le chou-fleur pour obtenir de gros grains.\n3. Couper le jambon en dés.\n4. Dans une sauteuse, faire chauffer l’huile, ajouter les oignons, le chou-fleur et la sauce soja.\n5. Au bout d’une minute ajouter les petits pois et le jambon.\n6. Cuire 2 minutes.\n7. Saler, poivrer et parsemer de graines de chia."
   },
   {
    "id": "p3_r69",
    "type": "texte",
    "titre": "Quiche petits pois, chèvre frais et épinards",
    "corps": "Semaine 1, 2 ou 3 · Pour : 1 personne · Préparation : 10 min · Cuisson : 25 min\n\nINGRÉDIENTS\n• Quelques pousses d'épinards\n• 100g de petits pois surgelés\n• 2 oeufs\n• 50g de chèvre frais\n• Estragon\n• Sel, poivre\n\nPRÉPARATION\n1. Préchauffer le four à 200°C.\n2. Recouvrir le fond d'un moule à tartelette de papier cuisson humidifié.\n3. Mélanger le chèvre, les petits pois, les épinards équeutés, l'estragon coupé aux ciseaux et les oeufs. Saler et poivrer.\n4. Verser la préparation dans le moule, tasser et cuire 25 minutes"
   }
  ]
 }
]);
})();
