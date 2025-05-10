---
layout: main_page
title: Telary - Data made Agile
---

  <body class="bg-gray-50 text-gray-900 font-sans">
    <!-- Hero -->
    <section class="bg-white py-20 px-6 text-center shadow-md">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-extrabold text-purple-700 mb-4">
          Votre data platform, dès 1200€/mois
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Une data platform clé en main, maintenue, 100% open source.
        </p>
        <a href="#dashboard" class="bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition">
          Découvrir le produit
        </a>
      </div>
    </section>

    <!-- À qui s'adresse l'offre -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-purple-800">Conçue pour les startups et PME ambitieuses</h2>
        <p class="text-lg text-gray-600 mb-8">
          Notre plateforme est pensée pour les entreprises qui veulent tirer parti de leurs données sans embaucher une équipe dédiée.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Centralisation des données</h3>
            <p>Connectez vos CRM, ERP, outils marketing et bases de données internes.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Reporting & automatisation</h3>
            <p>Générez des tableaux de bord et rapports automatisés.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Zéro dépendance propriétaire</h3>
            <p>100% open source, aucune boîte noire, vous gardez le contrôle.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Support inclus</h3>
            <p>Maintenance 5j/7 avec SLA, notre équipe veille pour vous.</p>
          </div>
          </a>
        </div>
        <a href="usecases" class="mt-8 inline-block bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-800 transition">
          Découvrir tous les usages
        </a>
      </div>
    </section>

    <!-- Tarifs -->
    <section class="bg-white py-20 px-6">
      {% include hero/pricing.html %}
    </section>

     <!-- Comparatif économique -->
     <section class="bg-white py-20 px-6">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-10 text-purple-800">Pourquoi nous choisir ?</h2>
          <p class="text-lg text-gray-600 mb-8">Économisez jusqu’à <strong>100 000€/an</strong> par rapport à une équipe data interne.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="bg-gray-50 p-6 rounded-xl shadow border-t-4 border-purple-600">
              <h3 class="text-xl font-semibold mb-4">👩‍💻 Équipe Data Interne</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 1 Data Engineer confirmé : 50 000€/an</li>
                <li>• 1 Data Engineer junior : 35 000€/an</li>
                <li>• Charge : 30 000€/an</li>
                <li>• Plusieurs mois pour démarrer</li>
                <li class="font-bold mt-2">💸 Total : à partir de 115 000€/an</li>
              </ul>
            </div>
            <div class="bg-purple-100 p-6 rounded-xl shadow border-t-4 border-purple-700">
              <h3 class="text-xl font-semibold mb-4">🚀 Notre plateforme</h3>
              <ul class="space-y-2 text-gray-800">
                <li>• Plateforme prête à l'emploi</li>
                <li>• Déploiement en 3 jours</li>
                <li>• Maintenance incluse (SLA 5j/7)</li>
                <li>• Support humain</li>
                <li class="font-bold mt-2">✅ À partir de 14 400€/an</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    <!-- Aperçu du Dashboard intégré dans une fenêtre de navigateur -->
    <section id="dashboard" class="bg-gray-100 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-10 text-center text-purple-800">Aperçu du Dashboard</h2>
        <p class="text-lg text-gray-600 mb-8 text-center">C'est interactif, cliquez sur les rubriques, en cliquant sur Data Platform vous revenez au dashboard</p>
        <div class="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
          <!-- Simulated browser top bar -->
          <div class="flex items-center justify-between bg-gray-200 px-4 py-2 text-sm text-gray-600">
            <div class="flex space-x-1">
              <span class="w-3 h-3 bg-red-400 rounded-full"></span>
              <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span class="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <div class="truncate text-center w-full absolute left-0 right-0 text-gray-500">https://client.telary.io/dashboard</div>
          </div>
          <iframe src="dashboard.html" class="w-full h-[700px] bg-white"></iframe>
        </div>
      </div>
    </section>

    <!-- Success Stories & Clients -->
    <section class="bg-white py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-purple-800">Ils nous font déjà confiance</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Client 1 -->
              <div class="bg-gray-50 rounded-xl shadow p-6">
                <a href="./cas/teletravail.guru">
                  <h3 class="text-xl font-semibold text-purple-700 mb-2">💻 Télétravail.guru
                    <p class="text-sm font-normal text-purple-800 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                      Voir cas client
                    </p>
                  </h3>
                  
                  <p class="text-gray-600 mb-2">"Telary nous permet d'aggréger et d'analyser l'ensemble des offres d'emplois que nous collectons chaque jour."</p>
                  <a href="https://teletravail.guru" target="_blank" class="text-sm text-purple-700 underline">teletravail.guru</a>
                </a>
              </div>
    
            <!-- Client 2 -->
            <div class="bg-gray-50 rounded-xl shadow p-6">
              <a href="./cas/joezz.com">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">🚀 Joezz
                  <p class="text-sm font-normal text-purple-800 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                    Voir cas client
                  </p>
                </h3>
                
                <p class="text-gray-600 mb-2">"Telary a déployé la version Essentielle de la data platform pour permettre à Joezz d'ingérer 15 millions de produits chaque jours"</p>
                <a href="https://www.joezz.com" target="_blank" class="text-sm text-purple-700 underline">joezz.com</a>
              </a>
            </div>
    
            <!-- Client 3 -->
            <div class="bg-gray-50 rounded-xl shadow p-6">
              <a href="./cas/researca.com">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">📰 Researca
                  <p class="text-sm font-normal text-purple-800 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                    Voir cas client
                  </p>
                </h3>
                
                <p class="text-gray-600 mb-2">"Tout au long de la journée, Researca ingère des centraines de milliers d'article de presse et les stocks dans une data platform Telary."</p>
                <a href="https://researca.com" target="_blank" class="text-sm text-purple-700 underline">researca.com</a>
              </a>
            </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-purple-700 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Prêt à prendre le contrôle de vos données ?</h2>
      <p class="mb-6 text-lg">Réservez un audit gratuit pour découvrir comment nous pouvons vous aider.</p>
      <a href="mailto:contact@votredata.fr" class="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
        Contactez-nous
      </a>
    </section>
