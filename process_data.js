// ── BIBLIOTHÈQUE DE PROCESS — Anaïs Fit Training ──
// 24 process, 6 par pôle (Marketing, Vente, Livraison coaching, Administratif).
// Chaque process a une checklist rapide (pour toi) et une version détaillée prête à déléguer.
var PROCESS_LIBRARY = [
  // ── MARKETING ──
  {
    pole: "Marketing",
    name: "Créer le calendrier éditorial du mois",
    freq: "Mensuel",
    objectif: "Avoir toutes les idées de contenu du mois posées à l'avance, pour ne jamais être prise de court et publier régulièrement.",
    checklist: ["Ouvrir l'onglet Création vidéos / réseaux sociaux.", "Lister 12 à 16 idées réparties sur les 6 piliers (alimentation, sport, stress, sommeil, temps, confiance en soi) + témoignages + offres.", "Répartir les idées sur les semaines du mois, en visant 3-4 publications Instagram/semaine.", "Statut de chaque idée à 'Idée'.", "Bloquer 1 à 2 créneaux dans le mois pour tourner/rédiger plusieurs contenus d'un coup (batch)."],
    detail: "Ce process est le point de départ de tout le pôle marketing. Il se fait une fois par mois, idéalement le dernier lundi du mois pour le mois suivant.\n\nContexte : sans calendrier, on publie au feeling, ce qui mène à l'irrégularité — et l'irrégularité tue la visibilité sur les réseaux sociaux.\n\nÉtapes détaillées :\n1. Relire les KPIs du mois précédent (quels contenus ont le mieux marché) avant de choisir les nouveaux sujets.\n2. Pour chaque semaine, prévoir un mix : 1 contenu pédagogique (piliers), 1 contenu preuve sociale (témoignage/résultat), 1 contenu plus personnel/coulisses, 1 contenu offre ou appel à l'action.\n3. Noter chaque idée avec plateforme, type et pilier.\n4. Identifier les créneaux de tournage/écriture dans l'agenda et les bloquer comme un rendez-vous non négociable.\n\nErreurs à éviter : vouloir improviser chaque jour (source n°1 d'irrégularité), ne publier que des posts 'vente' (fatigue l'audience), oublier de varier les piliers.",
    tools: "Onglet Création vidéos / Réseaux sociaux ; agenda"
  },
  {
    pole: "Marketing",
    name: "Créer un contenu, de l'idée à la publication",
    freq: "Hebdomadaire",
    objectif: "Transformer une idée du calendrier en contenu prêt à publier, avec un rendu qui reflète ta marque.",
    checklist: ["Choisir une idée au statut 'Idée' dans le calendrier.", "Écrire le message clé en une phrase (qu'est-ce que la personne doit retenir ?).", "Filmer ou rédiger le contenu.", "Ajouter les sous-titres / la légende avec un appel à l'action clair.", "Passer le statut à 'Prêt'."],
    detail: "Contexte : un contenu réussi part toujours d'un message unique, pas de dix idées mélangées.\n\nÉtapes :\n1. Relire le pilier et l'objectif du contenu (notoriété, engagement, conversion, fidélisation).\n2. Rédiger d'abord le message clé et l'accroche (les 3 premières secondes/lignes) — c'est ce qui décide si la personne continue à regarder/lire.\n3. Produire le contenu. Pour les vidéos, privilégier une lumière naturelle et un son clair plutôt que des effets.\n4. Ajouter une légende avec une question ou un appel à l'action (commenter, enregistrer, DM).\n5. Relire une dernière fois : est-ce que ça sonne comme moi ? Est-ce qu'il y a une seule idée claire ?\n\nErreurs à éviter : vouloir un rendu parfait qui retarde la publication (le contenu régulier imparfait bat le contenu parfait rare), légende sans appel à l'action, oublier de sous-titrer les vidéos.",
    tools: "Téléphone / appareil photo"
  },
  {
    pole: "Marketing",
    name: "Publier et diffuser un contenu",
    freq: "Quotidien",
    objectif: "Publier au bon moment et maximiser la portée d'un contenu déjà prêt.",
    checklist: ["Vérifier les contenus au statut 'Prêt' pour aujourd'hui.", "Publier à l'heure la plus active de ton audience.", "Republier en story avec un sondage ou une question.", "Répondre aux commentaires et messages dans l'heure si possible.", "Passer le statut à 'Publié'."],
    detail: "Contexte : la diffusion est aussi importante que la création — un excellent contenu mal diffusé ne sert à personne.\n\nÉtapes :\n1. Publier le contenu prêt selon le planning du calendrier éditorial.\n2. Dans les 30 minutes suivant la publication, la relayer en story pour capter une deuxième vague d'audience.\n3. Rester disponible dans l'heure qui suit pour répondre aux premiers commentaires — cela booste la portée sur la plupart des plateformes.\n4. Noter tout retour marquant pour l'analyse mensuelle.\n\nErreurs à éviter : publier puis disparaître sans interagir, republier toujours au même horaire sans jamais tester d'autres créneaux.",
    tools: "Instagram / TikTok"
  },
  {
    pole: "Marketing",
    name: "Rédiger et envoyer la newsletter mensuelle",
    freq: "Mensuel",
    objectif: "Garder le lien avec la liste de contacts et rappeler l'offre, sans dépendre uniquement des réseaux sociaux.",
    checklist: ["Choisir un sujet principal (conseil, actualité, offre du mois).", "Rédiger un message court et personnel.", "Ajouter un seul appel à l'action clair.", "Envoyer à date fixe (ex : premier mardi du mois)."],
    detail: "Contexte : la newsletter touche les personnes qui ne voient pas toujours les réseaux sociaux — c'est un canal que tu maîtrises à 100%.\n\nÉtapes :\n1. Partir d'un des piliers ou d'un résultat client marquant du mois.\n2. Écrire comme si tu parlais à une seule personne, pas à une foule.\n3. Un seul appel à l'action par email — plusieurs CTA diluent l'efficacité.\n4. Envoyer toujours le même jour du mois pour créer une habitude chez les lectrices.\n\nErreurs à éviter : envoyer uniquement quand on a une offre à vendre, des emails trop longs.",
    tools: "Outil d'emailing"
  },
  {
    pole: "Marketing",
    name: "Analyser les performances marketing du mois",
    freq: "Mensuel",
    objectif: "Comprendre ce qui a fonctionné pour en faire plus, et ajuster ce qui n'a pas marché.",
    checklist: ["Repérer les contenus publiés du mois.", "Noter le nombre de contenus publiés dans les KPIs mensuels.", "Identifier les 2-3 contenus qui ont le mieux performé.", "Identifier ce qu'ils ont en commun (pilier, format, sujet).", "Intégrer ce constat dans le calendrier du mois suivant."],
    detail: "Contexte : sans ce point mensuel, on répète les mêmes erreurs et on n'exploite pas ce qui marche déjà.\n\nÉtapes :\n1. Regarder les statistiques natives de chaque plateforme (portée, enregistrements, partages) plus que les seuls likes.\n2. Croiser avec les prises de rendez-vous du mois : quels contenus ont précédé un pic de demandes ?\n3. Décider consciemment de refaire un format proche le mois suivant.\n\nErreurs à éviter : juger un contenu sur les seuls likes, changer de stratégie après un seul mauvais résultat plutôt que sur une tendance.",
    tools: "KPIs mensuels ; statistiques des plateformes"
  },
  {
    pole: "Marketing",
    name: "Récolter un témoignage client",
    freq: "À la demande",
    objectif: "Transformer un bon résultat client en preuve sociale utilisable en marketing et en vente.",
    checklist: ["Repérer une cliente avec un résultat marquant.", "Lui demander l'autorisation d'utiliser son témoignage.", "Lui poser 2-3 questions simples (avant/après, ce qui a changé).", "Ajouter le témoignage au calendrier de contenu."],
    detail: "Contexte : rien ne convainc plus une future cliente que le témoignage d'une femme qui lui ressemble.\n\nÉtapes :\n1. Repérer le bon moment (juste après un résultat, un palier franchi, un message spontané de gratitude).\n2. Demander explicitement l'autorisation d'utiliser son témoignage publiquement, en précisant où.\n3. Poser des questions ouvertes plutôt que de préparer les réponses à sa place.\n4. Mettre en forme (citation courte + photo si possible) et programmer la publication.\n\nErreurs à éviter : publier sans autorisation explicite, ne récolter des témoignages qu'une fois par an au lieu de le faire en continu.",
    tools: "Bilans Hebdo"
  },
  // ── VENTE ──
  {
    pole: "Vente",
    name: "Traiter une nouvelle demande de contact",
    freq: "À la demande",
    objectif: "Répondre vite et bien à toute personne qui manifeste un intérêt, avant qu'elle ne perde sa motivation ou parte voir ailleurs.",
    checklist: ["Créer la ligne prospect avec la source.", "Répondre dans les 24h maximum.", "Poser 1-2 questions de qualification (objectif, disponibilité).", "Proposer un créneau d'appel de découverte.", "Noter la date de l'appel."],
    detail: "Contexte : le temps de réponse est un facteur clé de conversion — une prospect qui attend plusieurs jours perd souvent sa motivation initiale.\n\nÉtapes :\n1. Dès qu'un message arrive (DM, formulaire, bouche-à-oreille), créer immédiatement la fiche pour ne jamais en perdre une.\n2. Répondre avec chaleur et une question simple pour engager la conversation, pas un lien de prise de rendez-vous froid.\n3. Une fois l'intérêt confirmé, proposer 2-3 créneaux précis pour l'appel de découverte.\n4. Bloquer le créneau dans l'agenda dès qu'il est confirmé.\n\nErreurs à éviter : laisser une demande sans réponse plus de 24h, enchaîner directement sur le prix avant l'appel.",
    tools: "Messagerie Instagram ; agenda"
  },
  {
    pole: "Vente",
    name: "Préparer un appel de découverte",
    freq: "À la demande",
    objectif: "Arriver à l'appel avec le contexte de la personne déjà en tête, pour un échange plus naturel et plus efficace.",
    checklist: ["Relire la fiche prospect.", "Vérifier le matériel (son, connexion, lieu calme).", "Relire son propre script d'appel.", "Préparer de quoi prendre des notes en direct."],
    detail: "Contexte : un appel de découverte réussi commence avant l'appel lui-même.\n\nÉtapes :\n1. Relire les échanges précédents avec la prospect pour ne rien lui faire répéter inutilement.\n2. S'installer dans un endroit calme, sans interruption prévisible, 5 minutes avant l'heure convenue.\n3. Garder sous les yeux la structure de l'appel (briser la glace, poser le cadre, point A, point B, douleurs, autorité, offre, prix, engagement) sans la lire mot à mot.\n4. Avoir de quoi cocher les étapes et noter les objections au fur et à mesure.\n\nErreurs à éviter : enchaîner les appels sans pause, improviser sans structure.",
    tools: "Téléphone / visio ; script d'appel"
  },
  {
    pole: "Vente",
    name: "Mener l'appel de découverte (closing)",
    freq: "À la demande",
    objectif: "Aider la prospect à clarifier sa situation et son objectif, et l'accompagner vers une décision — sans forcer.",
    checklist: ["Briser la glace et poser le cadre (30 min, bienveillance).", "Comprendre le point A (situation actuelle) et le point B (objectif).", "Creuser les douleurs et les obstacles.", "Poser son autorité et présenter l'offre en 6 piliers.", "Présenter le prix (comptant puis facilités) et traiter les objections.", "Conclure : engagement + paiement, ou prochaine étape claire.", "Remplir la fiche juste après l'appel."],
    detail: "Ce process est déjà ta plus grande force — il ne s'agit pas de le réinventer mais de le sécuriser et de le rendre reproductible.\n\nÉtapes détaillées (ton script actuel, formalisé) :\n1. Briser la glace : vérifier le son/la vidéo, installer une ambiance chaleureuse.\n2. Poser le cadre : annoncer la durée (30 min) et l'objectif de l'appel avec bienveillance.\n3. Point A : comprendre sa situation actuelle en détail.\n4. Point B : faire exprimer son objectif précis, ce que ça changerait dans sa vie.\n5. Creuser les douleurs et obstacles : depuis quand, pourquoi ça n'a pas marché avant, quel est le coût de l'inaction.\n6. Poser son autorité : partager son expérience avec d'autres mamans dans la même situation.\n7. Présenter l'offre : les 6 piliers, adaptée à son quotidien.\n8. Présenter le prix : comptant d'abord, puis facilités de paiement (4 ou 12 mois), garantie si proposée.\n9. Traiter les objections avec des questions ouvertes plutôt que des contre-arguments frontaux.\n10. Conclure : engagement, paiement, et lancement du coaching de démarrage dans la foulée si elle signe.\n\nErreurs à éviter : sauter une étape, présenter le prix trop tôt, ne pas noter la fiche juste après.",
    tools: "Script d'appel"
  },
  {
    pole: "Vente",
    name: "Envoyer le contrat et encaisser le paiement",
    freq: "À la demande",
    objectif: "Sécuriser administrativement un engagement pris à l'oral, sans perdre de temps ni laisser la cliente refroidir.",
    checklist: ["Envoyer le contrat dans les 24h suivant l'appel.", "Vérifier la signature et l'encaissement du premier paiement.", "Créer la fiche cliente active.", "Enregistrer le contrat avec montant et durée.", "Planifier le coaching de démarrage."],
    detail: "Contexte : entre l'appel et la signature, chaque heure qui passe est une heure où la motivation peut redescendre.\n\nÉtapes :\n1. Préparer et envoyer le contrat immédiatement après l'appel si possible, sinon dans les 24h.\n2. Vérifier la réception du paiement avant de considérer la vente comme finalisée.\n3. Basculer la prospect vers les clientes actives avec toutes ses informations.\n4. Enregistrer le contrat (référence, montant, durée, statut).\n5. Fixer immédiatement le rendez-vous de coaching de démarrage.\n\nErreurs à éviter : laisser traîner l'envoi du contrat, oublier de vérifier que le paiement est bien passé.",
    tools: "Outil de facturation/paiement"
  },
  {
    pole: "Vente",
    name: "Relancer une prospect indécise",
    freq: "Hebdomadaire",
    objectif: "Ne jamais laisser une prospect intéressée sans réponse, sans être insistante.",
    checklist: ["Filtrer les prospects sans réponse depuis 5-7 jours.", "Envoyer un message court, chaleureux, sans pression.", "Répondre à l'objection principale identifiée pendant l'appel si besoin.", "Si toujours pas de réponse après 2 relances, passer en pause."],
    detail: "Contexte : la majorité des ventes se font après une ou plusieurs relances, pas au premier contact.\n\nÉtapes :\n1. Chaque semaine, repérer les prospects 'à relancer' et la date du dernier échange.\n2. Adapter le message à l'objection notée pendant l'appel plutôt qu'un message générique.\n3. Proposer une prochaine étape concrète plutôt qu'un simple 'des nouvelles ?'.\n4. Respecter un rythme de relance espacé (J+5, puis J+12 par exemple).\n\nErreurs à éviter : relancer tous les jours, abandonner après une seule relance sans réponse.",
    tools: "Onglet RDV & Prospects"
  },
  {
    pole: "Vente",
    name: "Analyser une vente perdue",
    freq: "À la demande",
    objectif: "Comprendre pourquoi une prospect n'a pas signé, pour améliorer le script et l'offre au fil du temps.",
    checklist: ["Repasser la fiche de la prospect non signée.", "Identifier l'objection ou le frein principal.", "Noter la cause (prix, timing, confiance, ciblage).", "Une fois par trimestre, regarder les tendances globales."],
    detail: "Contexte : chaque vente perdue est une information sur l'offre, le script, ou le ciblage — pas juste un échec isolé.\n\nÉtapes :\n1. Après avoir accepté qu'une prospect ne signera pas, prendre 5 minutes pour noter objectivement ce qui s'est passé.\n2. Distinguer les causes : budget réellement insuffisant, mauvais moment dans sa vie, manque de conviction, ciblage marketing pas assez qualifié en amont.\n3. Tous les trimestres, relire l'ensemble des ventes perdues pour repérer une tendance.\n4. Ajuster le script ou le contenu marketing en conséquence.\n\nErreurs à éviter : prendre chaque refus personnellement, ne jamais reprendre contact plus tard.",
    tools: "Onglet RDV & Prospects"
  },
  // ── LIVRAISON COACHING ──
  {
    pole: "Livraison coaching",
    name: "Onboarder une nouvelle cliente",
    freq: "À la demande",
    objectif: "Donner un départ clair et rassurant à chaque nouvelle cliente, pour créer un engagement fort dès le début.",
    checklist: ["Envoyer le message de bienvenue et les informations pratiques.", "Recueillir les infos initiales (âge, taille, poids, objectifs, contraintes).", "Construire le premier programme (sport + nutrition).", "Planifier le rythme des bilans.", "Faire le premier appel/message de coaching de démarrage."],
    detail: "Contexte : les premières 48h déterminent souvent la qualité de l'engagement de la cliente sur toute la durée du contrat.\n\nÉtapes :\n1. Envoyer un message de bienvenue chaleureux avec les informations pratiques.\n2. Recueillir toutes les informations nécessaires à la construction du programme.\n3. Construire un premier programme adapté aux 6 piliers, réaliste par rapport à son quotidien de maman.\n4. Convenir ensemble du rythme des bilans (hebdomadaire recommandé) et du jour/heure.\n5. Faire un point de démarrage pour s'assurer qu'elle a bien compris son programme et se sent prête.\n\nErreurs à éviter : envoyer un programme générique sans adaptation, laisser trop de temps s'écouler entre la signature et le premier contact.",
    tools: "Suivi client (Clientes actives, Programmes, Contrats)"
  },
  {
    pole: "Livraison coaching",
    name: "Réaliser le bilan hebdomadaire d'une cliente",
    freq: "Hebdomadaire",
    objectif: "Suivre l'évolution de chaque cliente, ajuster si besoin, et maintenir le lien de confiance.",
    checklist: ["Récolter les infos de la semaine (poids, énergie, alimentation, sport).", "Remplir la fiche bilan.", "Repérer les points de vigilance.", "Rédiger un retour personnalisé et encourageant.", "Fixer les objectifs de la semaine suivante."],
    detail: "Contexte : le bilan hebdomadaire est le cœur de la relation de coaching — c'est ce qui différencie un vrai accompagnement d'un simple programme envoyé une fois.\n\nÉtapes :\n1. Récolter les données de la semaine (message, formulaire ou appel).\n2. Renseigner la fiche : poids, énergie, respect de l'alimentation et du sport, compte-rendu.\n3. Repérer les signaux faibles : énergie en baisse, sport non respecté plusieurs semaines de suite, messages qui se raccourcissent.\n4. Toujours valoriser un progrès, même petit, avant de suggérer un ajustement.\n5. Fixer 1 à 2 objectifs clairs et atteignables pour la semaine suivante.\n\nErreurs à éviter : un bilan uniquement basé sur le chiffre du poids, des retours copier-coller peu personnalisés.",
    tools: "Suivi client"
  },
  {
    pole: "Livraison coaching",
    name: "Ajuster le programme sport/nutrition d'une cliente",
    freq: "Mensuel",
    objectif: "Faire évoluer le programme pour qu'il reste adapté à la progression et à la vie réelle de la cliente.",
    checklist: ["Relire les 2-3 derniers bilans hebdomadaires.", "Identifier ce qui fonctionne et ce qui bloque.", "Ajuster un seul levier à la fois.", "Expliquer le changement à la cliente et pourquoi."],
    detail: "Contexte : un programme qui ne bouge jamais finit par ne plus être adapté — au fil des semaines, le corps et la vie de la cliente changent.\n\nÉtapes :\n1. Avant tout ajustement, relire l'historique récent des bilans pour ne pas réagir à un seul mauvais bilan isolé.\n2. Identifier la cause du blocage : manque de temps, manque de motivation, plateau physiologique, contrainte de vie.\n3. Modifier un seul paramètre à la fois pour pouvoir mesurer l'effet.\n4. Toujours expliquer à la cliente pourquoi le changement est fait.\n\nErreurs à éviter : tout changer en même temps, ajuster sans expliquer le pourquoi à la cliente.",
    tools: "Programmes ; Bilans"
  },
  {
    pole: "Livraison coaching",
    name: "Gérer une baisse de motivation chez une cliente",
    freq: "À la demande",
    objectif: "Repérer tôt une cliente en train de décrocher, et l'aider à se remobiliser avant qu'elle n'abandonne.",
    checklist: ["Repérer les signaux (bilans manqués, réponses courtes, programme non suivi 2+ semaines).", "Prendre contact directement (appel plutôt que message).", "Écouter avant de proposer une solution.", "Alléger temporairement le programme si besoin.", "Reformuler un petit objectif motivant à court terme."],
    detail: "Contexte : la plupart des abandons ne sont pas soudains — ils sont précédés de signaux visibles dans les bilans, si on les regarde.\n\nÉtapes :\n1. Surveiller les signaux d'alerte : bilan manqué, réponses de plus en plus courtes, programme non respecté sur 2 semaines consécutives.\n2. Dès le premier signal net, prendre contact directement et personnellement, idéalement par appel.\n3. Poser des questions ouvertes pour comprendre la vraie cause avant de proposer quoi que ce soit.\n4. Si besoin, alléger temporairement le programme.\n5. Se fixer avec elle un objectif très court terme et atteignable.\n\nErreurs à éviter : attendre que la cliente vienne d'elle-même, culpabiliser la cliente plutôt que de l'accompagner.",
    tools: "Suivi client"
  },
  {
    pole: "Livraison coaching",
    name: "Anticiper la fin de contrat et le renouvellement",
    freq: "À la demande",
    objectif: "Ne jamais laisser un contrat se terminer sans avoir proposé la suite, et sécuriser le renouvellement.",
    checklist: ["Repérer les contrats se terminant dans 3 semaines.", "Faire un bilan global de l'accompagnement avec la cliente.", "Proposer la suite adaptée.", "Envoyer le nouveau contrat si elle continue.", "Si elle ne continue pas, comprendre pourquoi."],
    detail: "Contexte : anticiper la fin de contrat évite les trous dans le suivi et les pertes de clientes 'par oubli' plutôt que par vrai choix.\n\nÉtapes :\n1. Chaque semaine, vérifier les échéances à venir dans les 3 semaines.\n2. Environ 3 semaines avant la fin, faire un vrai bilan de tout le parcours avec la cliente.\n3. Présenter naturellement la suite possible, adaptée à ses nouveaux objectifs.\n4. Si elle renouvelle, envoyer le nouveau contrat sans délai.\n5. Si elle ne renouvelle pas, la faire basculer proprement en 'inactive' avec la raison.\n\nErreurs à éviter : attendre la dernière semaine pour aborder le sujet, considérer la fin de contrat comme un échec plutôt qu'une étape naturelle.",
    tools: "Contrats ; Suivi client"
  },
  {
    pole: "Livraison coaching",
    name: "Gérer un abandon / une cliente qui part",
    freq: "À la demande",
    objectif: "Clore proprement l'accompagnement, comprendre la raison, et garder la porte ouverte pour l'avenir.",
    checklist: ["Faire un dernier échange bienveillant, sans jugement.", "Demander la raison principale de l'arrêt.", "Basculer la fiche dans les clientes archivées avec date et raison.", "Remercier et laisser la porte ouverte.", "Une fois par trimestre, regarder les raisons d'abandon les plus fréquentes."],
    detail: "Contexte : un abandon bien géré protège la réputation (bouche-à-oreille) et donne des informations précieuses pour améliorer l'accompagnement.\n\nÉtapes :\n1. Accueillir la décision sans culpabiliser la cliente, même si la raison semble évitable.\n2. Poser une question simple et honnête sur la raison principale de l'arrêt.\n3. Enregistrer la fiche avec la date et la raison exacte.\n4. Terminer sur une note positive : la remercier et lui dire explicitement qu'elle est la bienvenue si elle souhaite revenir.\n5. Chaque trimestre, relire l'ensemble des raisons d'abandon pour repérer un pattern à corriger.\n\nErreurs à éviter : couper le contact brutalement, ne jamais analyser les raisons d'abandon en global.",
    tools: "Archive clientes"
  },
  // ── ADMINISTRATIF ──
  {
    pole: "Administratif",
    name: "Facturer une prestation",
    freq: "À la demande",
    objectif: "Émettre une facture conforme rapidement après chaque vente ou chaque échéance de paiement.",
    checklist: ["Récupérer les infos du contrat (montant, durée, cliente).", "Émettre la facture avec toutes les mentions légales obligatoires.", "Envoyer la facture à la cliente.", "Vérifier l'encaissement effectif."],
    detail: "Contexte : chaque facture émise doit être fiable et conforme — c'est la trace officielle de ton activité, utile en cas de contrôle et pour ta propre comptabilité.\n\nÉtapes :\n1. Reprendre les informations exactes du contrat signé.\n2. Émettre la facture avec les mentions obligatoires : nom, adresse, n° SIRET, date, numéro de facture unique et chronologique, description, montant, mention 'TVA non applicable, art. 293 B du CGI' si franchise de TVA.\n3. Envoyer la facture à la cliente dans les meilleurs délais.\n4. Vérifier que le paiement correspondant a bien été reçu, et relancer si besoin.\n\nErreurs à éviter : numéroter les factures de façon non chronologique, oublier les mentions légales obligatoires.",
    tools: "Facturation Superfitmum / Womanbooster"
  },
  {
    pole: "Administratif",
    name: "Déclarer le chiffre d'affaires (URSSAF)",
    freq: "Mensuel",
    objectif: "Rester en règle avec l'URSSAF et éviter toute pénalité de retard.",
    checklist: ["Totaliser le CA encaissé sur la période.", "Se connecter sur autoentrepreneur.urssaf.fr.", "Déclarer le montant avant la date limite.", "Vérifier le prélèvement des cotisations."],
    detail: "Contexte : la déclaration est obligatoire même si le chiffre d'affaires est nul sur la période, et les échéances sont fixes (mensuelles en fin de mois, ou trimestrielles au 30 avril, 31 juillet, 31 octobre, 31 janvier selon l'option choisie à la création de l'activité).\n\nÉtapes :\n1. Avant l'échéance, additionner tout le chiffre d'affaires réellement encaissé sur la période.\n2. Se connecter sur autoentrepreneur.urssaf.fr et remplir la déclaration.\n3. Vérifier le montant des cotisations calculées (autour de 21-22% du CA pour une activité de prestation de services — taux exact à confirmer selon ta catégorie BIC/BNC).\n4. Vérifier le prélèvement automatique dans les jours suivants.\n\nErreurs à éviter : oublier de déclarer un mois à 0€, attendre le dernier jour. Ce n'est pas un conseil fiscal personnalisé — vérifie ton taux et tes échéances exactes sur ton espace URSSAF.",
    tools: "autoentrepreneur.urssaf.fr"
  },
  {
    pole: "Administratif",
    name: "Provisionner les charges sociales",
    freq: "Mensuel",
    objectif: "Ne jamais être prise au dépourvu par un prélèvement de cotisations, en mettant l'argent de côté au fur et à mesure.",
    checklist: ["À chaque encaissement, mettre de côté environ 21-22% sur un compte séparé.", "Vérifier en fin de mois que la provision correspond bien au prélèvement à venir.", "Ajuster si le taux réel diffère de l'estimation."],
    detail: "Contexte : le piège classique de la micro-entreprise est de dépenser tout le chiffre d'affaires encaissé, puis de ne plus avoir la trésorerie pour payer les cotisations au moment du prélèvement.\n\nÉtapes :\n1. Dès qu'un paiement client est encaissé, virer immédiatement la part correspondant aux cotisations sociales vers un compte séparé.\n2. Ne jamais considérer cette part comme disponible pour les dépenses courantes.\n3. En fin de mois, vérifier que le montant mis de côté correspond bien à ce qui sera prélevé.\n\nErreurs à éviter : mélanger l'argent des cotisations avec la trésorerie courante, découvrir le montant à payer seulement au moment du prélèvement.",
    tools: "Compte bancaire dédié"
  },
  {
    pole: "Administratif",
    name: "Renouveler les obligations professionnelles",
    freq: "Trimestriel",
    objectif: "Ne jamais laisser expirer une assurance ou une obligation professionnelle sans y avoir pensé à l'avance.",
    checklist: ["Vérifier trimestriellement les échéances à venir.", "Relancer l'assureur/l'organisme un mois avant l'échéance.", "Comparer les offres si le renouvellement approche (annuel)."],
    detail: "Contexte : une assurance responsabilité civile professionnelle expirée sans y avoir pensé peut être lourd de conséquences en cas de pépin avec une cliente.\n\nÉtapes :\n1. Chaque trimestre, passer en revue toutes les échéances administratives à venir.\n2. Pour les échéances à moins d'un mois, contacter l'organisme concerné pour initier le renouvellement.\n3. Pour l'assurance professionnelle en particulier, profiter du renouvellement annuel pour vérifier que les garanties sont toujours adaptées à l'activité.\n\nErreurs à éviter : découvrir l'expiration après coup, renouveler par automatisme sans revérifier que les garanties sont toujours adaptées.",
    tools: "—"
  },
  {
    pole: "Administratif",
    name: "Suivre la trésorerie mensuelle",
    freq: "Mensuel",
    objectif: "Avoir une vision claire de ce qui rentre, ce qui sort et ce qui reste, chaque mois.",
    checklist: ["Additionner le CA encaissé du mois.", "Soustraire les charges provisionnées et les dépenses professionnelles.", "Reporter le CA dans les KPIs mensuels.", "Comparer avec les mois précédents."],
    detail: "Contexte : ce point mensuel est ce qui transforme une activité 'au feeling' en véritable entreprise pilotée.\n\nÉtapes :\n1. En fin de mois, additionner tous les encaissements réels (pas les factures émises non payées).\n2. Soustraire les charges sociales provisionnées et les dépenses professionnelles.\n3. Reporter le chiffre d'affaires encaissé dans les KPIs mensuels.\n4. Comparer avec les 2-3 mois précédents pour repérer une tendance.\n5. Si la tendance baisse, remonter aux causes possibles.\n\nErreurs à éviter : regarder uniquement le chiffre du mois sans le comparer dans le temps, confondre chiffre d'affaires facturé et réellement encaissé.",
    tools: "Onglet KPIs mensuels ; compte bancaire professionnel"
  },
  {
    pole: "Administratif",
    name: "Archiver les documents administratifs",
    freq: "Mensuel",
    objectif: "Retrouver n'importe quel document en quelques secondes, en cas de besoin ou de contrôle.",
    checklist: ["Vérifier que tous les contrats du mois sont bien attachés aux fiches clientes.", "Vérifier que toutes les factures émises sont enregistrées.", "Sauvegarder les accusés de déclaration URSSAF du mois.", "Ranger dans un dossier daté."],
    detail: "Contexte : en micro-entreprise, les documents doivent être conservés plusieurs années — mieux vaut un rangement systématique qu'une recherche panique le jour d'un contrôle.\n\nÉtapes :\n1. Chaque mois, vérifier que chaque contrat signé est bien attaché à la fiche de la cliente correspondante.\n2. Vérifier que toutes les factures émises dans le mois sont bien enregistrées et archivées (PDF).\n3. Télécharger et sauvegarder les accusés de réception des déclarations URSSAF du mois.\n4. Organiser une sauvegarde par année et par mois.\n\nErreurs à éviter : tout garder uniquement sur un téléphone sans sauvegarde, ne pas dater/nommer clairement les fichiers.",
    tools: "Dossier Superfitmum ; stockage cloud"
  }
];
