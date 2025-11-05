---
layout: main_page
title: Telary - Data made Agile
lang: en
page_id: index
permalink: /
---

  <body class="bg-gray-50 text-gray-900 font-sans">
    <!-- Hero -->
    <section class="bg-white py-20 px-6 text-center shadow-md textured-section-hero">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-extrabold text-purple-700 mb-4">
          Your data. Ready for <span id="rotating-text" class="inline-block min-w-[250px] text-left">AI.</span>
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Headache free data management tool for ambitious SMBs and startups.
        </p>
        <style>
          #rotating-text {
            transition: opacity 0.2s ease-in-out;
          }
          #rotating-text.fade {
            opacity: 0;
          }
        </style>
        <script>
          (function() {
            const words = ['AI.', 'Insights.', 'Monitoring.'];
            let currentIndex = 0;
            const element = document.getElementById('rotating-text');
            
            function rotateText() {
              element.classList.add('fade');
              
              setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                element.textContent = words[currentIndex];
                element.classList.remove('fade');
              }, 500);
            }
            
            setInterval(rotateText, 1500);
          })();
        </script>
        <div class="flex items-center justify-center space-x-4 mt-6">
          <a href="#dashboard" class="bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition">
            Discover the product
          </a>
          <a href="https://www.linkedin.com/company/telary-data/" class="bg-white text-purple-700 border border-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Schedule a demo
          </a>
        </div>   
      </div>
    </section>

    <!-- Opportunities Section -->
    <section class="bg-white py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <section class="bg-white py-24">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
      Unlock new opportunities for your teams
    </h2>
    <p class="text-gray-600 max-w-2xl mx-auto mb-16">
      Turn data complexity into impact across reporting, insights, forecasting and AI.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
      <!-- Card 1 -->
      <div class="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
        <div class="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-50 text-purple-700 mb-6 group-hover:bg-purple-100">
          <!-- Icon: bar chart -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18M9 17V9m4 8v-5m4 5V5" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Automated Reporting</h3>
        <p class="text-gray-600">
          Forget monthly exports and Excel dead-ends—automate your dashboards and run your business in real time.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
        <div class="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-50 text-purple-700 mb-6 group-hover:bg-purple-100">
          <!-- Icon: beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" role="img">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
    </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Business Analytics</h3>
        <p class="text-gray-600">
          Dive deep into your operations—from marketing to inventory—to uncover actionable insights.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
        <div class="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-50 text-purple-700 mb-6 group-hover:bg-purple-100">
          <!-- Icon: trending up -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17l6-6 4 4 8-8" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
        <p class="text-gray-600">
          Harness machine learning to anticipate trends and make smarter decisions before they happen.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
        <div class="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-50 text-purple-700 mb-6 group-hover:bg-purple-100">
          <!-- Icon: AI chip -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9h6v6H9zM3 3h2v2H3zm16 0h2v2h-2zM3 19h2v2H3zm16 0h2v2h-2zM5 5h14v14H5z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">AI-Powered Agents</h3>
        <p class="text-gray-600">
          Train your AI on clean, trustworthy data—so your agents don’t just react, they drive value.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <a href="#dashboard" class="inline-block bg-purple-700 text-white font-medium px-8 py-3 rounded-full hover:bg-purple-700 transition">
        Discover the Platform
      </a>
    </div>
  </div>
</section>

      </div>
    </section>

      <!-- Who is it for -->
    <section class="py-20 px-6 bg-gray-100 textured-section">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-purple-700">Some of the Data Driven organization we worked with :</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div class="bg-white p-6 rounded-xl shadow flex items-center justify-center">
            <svg viewBox="0 0 200 80" width="160" height="64" aria-hidden="true" role="img">
              <image href="/assets/img/ref/mangopay.png" width="200" height="80" />
            </svg>
          </div>
          <div class="bg-white p-6 rounded-xl shadow flex items-center justify-center">
            <svg viewBox="0 0 200 80" width="160" height="64" aria-hidden="true" role="img">
              <image href="/assets/img/ref/edf.png" width="200" height="80" />
            </svg>
          </div>
          <div class="bg-white p-6 rounded-xl shadow flex items-center justify-center">
            <svg viewBox="0 0 200 80" width="160" height="64" aria-hidden="true" role="img">
              <image href="/assets/img/ref/axa.png" width="200" height="80" />
            </svg>
          </div>
          <div class="bg-white p-6 rounded-xl shadow flex items-center justify-center">
            <svg viewBox="0 0 200 80" width="160" height="64" aria-hidden="true" role="img">
              <image href="/assets/img/ref/ricard.png" width="200" height="80" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- Challenges Section -->
    <section class="bg-gray-50 py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8 text-purple-700">
          Without a data platform, your data is a burden, not an asset.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Common problems</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">❌</span>
                <span>Scattered Excel files, manual reporting</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">❌</span>
                <span>No clear vision on sales, inventory, or costs</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">❌</span>
                <span>Unable to cross-reference CRM, e-commerce, marketing, and internal application data</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">❌</span>
                <span>Teams waste time searching, cleaning, and understanding data</span>
              </li>
            </ul>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl shadow border-t-4 border-purple-700">
            <h3 class="text-xl font-semibold mb-4 text-purple-700">The Telary solution</h3>
            <p class="text-gray-700 mb-4">
              👉 Telary helps you structure, centralize, and leverage your data without hiring a technical team.
            </p>
            <div class="text-center">
              <a href="#dashboard" class="inline-block bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                Discover the solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is it for -->
    <section class="py-20 px-6 bg-gray-100 textured-section">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-purple-700">Designed for ambitious startups and SMEs</h2>
        <p class="text-lg text-gray-600 mb-8">
          Our platform is designed for companies that want to leverage their data without hiring a dedicated team.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Data centralization</h3>
            <p>Connect your CRM, ERP, marketing tools, and internal databases.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Reporting & automation</h3>
            <p>Generate dashboards and automated reports.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Zero proprietary dependencies</h3>
            <p>100% open source, no black boxes, you keep control.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Included support</h3>
            <p>5/7 maintenance with SLA, our team watches over you.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Hosting in France</h3>
            <p>Your data is hosted in France and Europe, in compliance with GDPR.</p>
          </div>
          </a>
          <a href="usecases">
            <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold mb-2">✔️ Made in France</h3>
            <p>Developed and maintained in France by a French team.</p>
          </div>
          </a>
        </div>
        <a href="usecases" class="mt-8 inline-block bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Learn more about what you can do with Telary
        </a>
      </div>
    </section>

    <!-- Pricing -->
    <section class="bg-white py-20 px-6">
      {% include hero/pricing_en.html %}
    </section>

     <!-- Economic comparison -->
     <section class="bg-white py-20 px-6 textured-section">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-10 text-purple-700">Why choose us?</h2>
          <p class="text-lg text-gray-600 mb-8">Save up to <strong>€100,000/year</strong> compared to building your own platform.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="bg-gray-50 p-6 rounded-xl shadow border-t-4 border-purple-700">
              <h3 class="text-xl font-semibold mb-4">👩‍💻 Internal Data Team</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 1 Senior Data Engineer: €50,000/year</li>
                <li>• 1 Junior Data Engineer: €35,000/year</li>
                <li>• Overhead: €30,000/year</li>
                <li>• Several months to get started</li>
                <li class="font-bold mt-2">💸 Total: from €115,000/year</li>
              </ul>
            </div>
            <div class="bg-purple-100 p-6 rounded-xl shadow border-t-4 border-purple-700">
              <h3 class="text-xl font-semibold mb-4">🚀 Our platform</h3>
              <ul class="space-y-2 text-gray-800">
                <li>• Ready-to-use platform</li>
                <li>• Deployment in 24h</li>
                <li>• Included maintenance (5/7 SLA)</li>
                <li>• Human support</li>
                <li class="font-bold mt-2">✅ From 7,200/year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    <!-- Dashboard Preview -->
    <section id="dashboard" class="bg-gray-100 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-10 text-center text-purple-700">Dashboard Preview</h2>
        <p class="text-lg text-gray-600 mb-8 text-center">It's interactive, click on the sections, clicking on Data Platform returns you to the dashboard</p>
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
          <iframe src="dashboard/data.html" class="w-full h-[700px] bg-white"></iframe>
        </div>
      </div>
    </section>

    <!-- Success Stories & Clients -->
    <section class="bg-white py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-purple-700">They already trust us</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Client 1 -->
              <div class="bg-gray-50 rounded-xl shadow p-6">
                <a href="./cas/teletravail.guru">
                  <h3 class="text-xl font-semibold text-purple-700 mb-2">💻 Télétravail.guru
                    <p class="text-sm font-normal text-purple-700 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                      View case study
                    </p>
                  </h3>
                  
                  <p class="text-gray-600 mb-2">"Telary allows us to aggregate and analyze all the job offers we collect every day."</p>
                  <a href="https://teletravail.guru" target="_blank" class="text-sm text-purple-700 underline">teletravail.guru</a>
                </a>
              </div>
    
            <!-- Client 2 -->
            <div class="bg-gray-50 rounded-xl shadow p-6">
              <a href="./cas/joezz.com">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">🚀 Joezz
                  <p class="text-sm font-normal text-purple-700 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                    View case study
                  </p>
                </h3>
                
                <p class="text-gray-600 mb-2">"Telary deployed the Essential version of the data platform to enable Joezz to ingest 15 million products every day"</p>
                <a href="https://www.joezz.com" target="_blank" class="text-sm text-purple-700 underline">joezz.com</a>
              </a>
            </div>
    
            <!-- Client 3 -->
            <div class="bg-gray-50 rounded-xl shadow p-6">
              <a href="./cas/researca.com">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">📰 Researca
                  <p class="text-sm font-normal text-purple-700 bg-purple-100 inline-block px-2 py-1 rounded-full mt-1 mb-2">
                    View case study
                  </p>
                </h3>
                
                <p class="text-gray-600 mb-2">"Throughout the day, Researca ingests hundreds of thousands of press articles and stores them in a Telary data platform."</p>
                <a href="https://researca.com" target="_blank" class="text-sm text-purple-700 underline">researca.com</a>
              </a>
            </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-purple-700 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to leverage your data?</h2>
      <p class="mb-6 text-lg">Contact us to discover how we can help you.</p>
      <a href="https://www.linkedin.com/in/constant-deschietere/" class="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
        Contact us
      </a>
    </section>
  </body> 