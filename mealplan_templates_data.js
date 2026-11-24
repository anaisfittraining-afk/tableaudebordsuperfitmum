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
