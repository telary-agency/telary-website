---
title: Une Brève Histoire des Données
slug: quick-history-data
date_published: 2025-05-10T12:04:12.000Z
date_updated: 2025-05-10T12:08:02.000Z
layout: post
image: /assets/img/banners/photo-researca-18.avif
lang: fr
---

# Les Débuts (<1970/1980)

Les bases de données ont commencé comme de simples fichiers stockant des données. Cela présentait certaines limitations, et avec l'essor de la technologie, une alternative a commencé à émerger.

# Bases de Données Relationnelles (1970/1980)

* Des logiciels spécialisés, appelés Systèmes de Gestion de Base de Données (SGBD), sont apparus pour gérer plusieurs tables et requêtes.
  * Introduction du stockage structuré des données avec des relations entre les tables.
* Les serveurs de base de données pouvaient gérer plusieurs bases de données et tables.
* SQL est devenu le langage de requête standard, bien que les dialectes varient.
* Les index, essentiellement des tables de métadonnées, ont amélioré l'efficacité de la récupération.
* Les SGBD sont connus sous le même acronyme en français.

## Normalisation

* La normalisation a défini les meilleures pratiques pour organiser les données.
  * [Détails sur la normalisation](https://fr.wikipedia.org/wiki/Normalisation_(base_de_donn%C3%A9es))
  * Entre les années 70 et 80, plusieurs bonnes pratiques additives ont été identifiées.
* Les outils de Mapping Objet-Relationnel (ORM) ont abstrait les interactions avec la base de données mais n'ont pas remplacé SQL.

# Business Intelligence (1990/2000)

* La BI s'est concentrée sur l'amélioration de la prise de décision avec des rapports, des KPIs, des tableaux de bord et des analyses.
* La modélisation dimensionnelle, popularisée par Kimball, a simplifié la représentation des données pour un usage commercial.
  * Construite autour des faits et des caractéristiques. [Modélisation dimensionnelle](https://fr.wikipedia.org/wiki/Mod%C3%A9lisation_dimensionnelle)
  * Bien qu'elle soit ancienne, elle est encore couramment utilisée.
  * D'autres techniques de modélisation de données incluent le [data vault](https://fr.wikipedia.org/wiki/Data_vault).
* Les requêtes BI ont commencé à devenir intensives en ressources pour les bases de données.

# L'Ère du Big Data (2010/2020)

Les entreprises généraient des données à des échelles trop grandes pour être manipulées sur des serveurs uniques (nous parlons d'au moins des GB voire des TB).

Des frameworks de calcul distribué comme MapReduce et Spark sont apparus.

* Des tâches comme la recherche de valeurs uniques ou le tri étaient réparties sur des clusters de serveurs. Par exemple :
  * Pour trouver des valeurs uniques dans une grande table, vous la divisez, envoyez les parties à plusieurs serveurs, chaque serveur traite sa partie, et enfin, vous regroupez toutes les sous-listes et supprimez les doublons.
  * Le tri d'une grande table suit un processus similaire.
  * Un framework majeur dans le big data était MapReduce, qui divise une grande liste en listes plus petites, effectue une action sur chaque partie (map), et traite finalement les résultats (reduce).
  * Les frameworks courants incluent Spark et MapReduce.

![Map reduce word count](/assets/img/2025/05/word-count.png)
*Comptage de mots utilisant le framework MapReduce*

* Le théorème CAP a mis en évidence les compromis entre cohérence, disponibilité et tolérance aux partitions.
  * Le théorème CAP devient moins pertinent en raison de l'échelle que nous pouvons maintenant atteindre.
  * La [loi de Moore](https://fr.wikipedia.org/wiki/Loi_de_Moore) est contestée mais reste partiellement vraie, et l'informatique devient continuellement plus efficace.

![Cap Theorem](/assets/img/2025/05/cap_theorem.jpg)
*Le théorème CAP met en évidence les compromis entre différentes technologies.*

Globalement, la complexité du Big Data a limité son adoption pour les cas d'utilisation à plus petite échelle.

# Période de Taux d'Intérêt Zéro

Entre 2015 et 2020, la FED a mené une politique de taux zéro (ZIRP), ce qui a rendu l'acquisition d'argent assez facile pour les entreprises. Cela a grandement impacté le monde des données.

Le Big Data était vu comme un moyen de gagner de l'argent. Nous avons vu des phrases comme "les données sont le nouveau pétrole" et [les métiers des données sont les plus sexy](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century). Chaque grande entreprise voulait des data scientists pour transformer leurs données en or.

Nous avons vu émerger des acteurs purement dédiés aux données :
* **Snowflake** (2012 - 3,3 milliards de revenus - 53 milliards de valorisation)
* **Databricks** (2013 - 1,6 milliard de revenus - 62 milliards de valorisation)
  * Créé par des contributeurs de Spark.

Pourtant, la plus grande part est toujours détenue par les grands acteurs du cloud :
* Plateformes cloud :
  * **Amazon** Web Services : Glue, Athena.
  * **Google** Cloud Platform : BigQuery.
  * **Azure** Data Factory.

À cette époque, l'IA était appelée Machine Learning. C'était principalement des statistiques et des mathématiques et n'était pas accessible via des API.

Je pense qu'à cette époque, nous sommes passés par la "pente de désillusion" des technologies big data pour atteindre le "plateau de stabilité".

[Plus de détails sur le métier d'Ingénieur de Données créé vers 2015](https://app.researca.com/article/77413). Source : https://blog.det.life/the-history-of-data-engineering-1762b017541a.

Basé sur les progrès du big data et d'autres facteurs, l'IA a été révolutionnée. [Cet article est très intéressant sur les facteurs rendant les LLMs possibles](https://www.understandingai.org/p/why-the-deep-learning-boom-caught).

# Point de Vue Personnel sur la Situation Actuelle (2020+)

Le Big Data et l'IA sont des sujets liés. L'IA est d'abord une question de données, mais comme elle est fortement productisée, je ne vois pas pourquoi cela changerait la situation pour le big data. Il est maintenant mature, il fonctionne, mais la plupart des entreprises n'en ont pas besoin, surtout pas les PME.

Le Big Data disparaît d'un point de vue commercial. Les vendeurs ne l'appellent plus ainsi ; c'est maintenant seulement un outil et non un argument de vente.

Les entreprises qui ont commencé à rendre le Big Data facile se sont tournées vers la démocratisation de l'IA.

L'IA est devenue les LLMs et est API-isée, c'est pourquoi elle est si facilement adoptée. 