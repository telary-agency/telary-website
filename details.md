---
layout: default
title: Telary - Data made Agile
---

  <body class="bg-gray-50 text-gray-900 font-sans">
    <!-- Header -->
    <header class="bg-purple-700 text-white py-6 text-center">
      <h1 class="text-3xl font-bold">Details des offres</h1>
    </header>
    <section class="bg-white py-20 px-6">
    {% include hero/pricing_en.html %}
    </section>
    <!-- Comparison Table -->
    <section class="py-10 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-6 text-purple-700">Comparatif des outils utilisés</h2>
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 px-4 py-2 text-left">Catégorie</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Produits</th>
                <th class="border border-gray-300 px-4 py-2 text-center">Startup</th>
                <th class="border border-gray-300 px-4 py-2 text-center">Scaleup</th>
                <th class="border border-gray-300 px-4 py-2 text-center">Entreprise</th>
              </tr>
            </thead>
            <tbody>
            <!-- Workflow Orchestration -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="1">Workflow Orchestration</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Apache Airflow</strong> <br />
                  <span class="text-sm text-gray-600">Airbnb, Lyft</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <!-- BI Tools -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="1">BI Tools</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Ligthdash</strong> <br />
                  <span class="text-sm text-gray-600">Alma, Cardless, Workday</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="1">Exploration</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Jupyter</strong> <br />
                  <span class="text-sm text-gray-600">Berkeley, Bloomberg, Google</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <!-- Ingestion -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="1">Ingestion</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>PyAirbyte</strong> <br />
                  <span class="text-sm text-gray-600">Siemens, Calendly, Perplexity</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <!-- Data Processing Tech -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="5">Data Processing Tech</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>DuckDB</strong> <br />
                  <span class="text-sm text-gray-600">Hugging Face, Okta</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Pandas</strong> <br />
                  <span class="text-sm text-gray-600">Databricks, PWC</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Apache Trino</strong> <br />
                  <span class="text-sm text-gray-600">Netflix, LinkedIn</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Polars</strong> <br />
                  <span class="text-sm text-gray-600">Netflix, Microsoft</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Scikitlearn</strong> <br />
                  <span class="text-sm text-gray-600">Spotify, JPMorgan, Inria</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
                <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
                <td class="border border-gray-300 px-4 py-2 text-center">✔️</td>
              </tr>
              <!-- Search engine -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100" rowspan="2">Search Engine</td>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>Elasticsearch</strong> <br />
                  <span class="text-sm text-gray-600">Uber, Booking</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">
                  <strong>TypeSense</strong> <br />
                  <span class="text-sm text-gray-600">Logitech, BBC</span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
                <td class="border border-gray-300 px-4 py-2 text-center">à la demande</td>
              </tr>
              <!-- Pricing -->
              <tr class="bg-gray-100">
                <td colspan="2" class="border border-gray-300 px-4 py-2 font-bold text-right">Prix Mensuel</td>
                <td class="border border-gray-300 px-4 py-2 text-center">1200€</td>
                <td class="border border-gray-300 px-4 py-2 text-center">2400€</td>
                <td class="border border-gray-300 px-4 py-2 text-center">3600€+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
