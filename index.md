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
      <style>
        /* Scoped styles for Opportunities section */
        .op-section { 
          --op-purple: #6A1B9A; 
          --op-purple-hover: #7B1FA2;
          --op-bg: #ffffff;
          --op-text: #111827; /* gray-900 */
          --op-muted: #374151; /* gray-700 */
          font-family: Inter, Roboto, "Open Sans", system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
          max-width: 64rem; /* ~1024px */
          margin: 0 auto;
        }
        .op-wrap { display: flex; flex-direction: column; gap: 1.25rem; }
        .op-title { font-size: 1.875rem; line-height: 2.25rem; font-weight: 800; color: var(--op-purple); text-align: center; margin-bottom: 1.5rem; }
        .op-card { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; border-radius: 0.75rem; background: var(--op-bg); color: var(--op-text); transition: background-color .2s ease, transform .2s ease; }
        .op-card:hover .op-icon svg { stroke: var(--op-purple-hover); }
        .op-icon { flex: 0 0 auto; width: 112px; height: 112px; display: grid; place-items: center; }
  .op-icon svg { width: 100%; height: 100%; stroke: var(--op-purple); stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; transition: stroke .2s ease; }
  .op-icon svg text { fill: var(--op-purple); stroke: none; font-weight: 800; letter-spacing: 0.5px; }
        /* Alternate layout on medium+ screens */
        @media (min-width: 768px) {
          .op-wrap { gap: 1rem; }
          .op-card { gap: 1.25rem; padding: 1rem 1.5rem; }
          .op-card.alt { flex-direction: row-reverse; }
          .op-card.alt .op-text { text-align: right; }
        }
        /* Subtle hover background (kept light) */
        .op-card:hover { background: rgba(106, 27, 154, 0.04); }
        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .op-section { --op-bg: #0B0B0F; --op-text: #E5E7EB; --op-muted: #CBD5E1; }
          .op-card { background: #0B0B0F; }
          .op-card:hover { background: rgba(124, 58, 237, 0.10); }
        }
      </style>
      <div class="op-section">
        <h2 class="text-3xl font-bold text-center mb-8 text-purple-700">Unlock new opportunities for your teams</h2>
        <div class="op-wrap">
          <!-- 1: Dashboard / Reporting -->
          <div class="op-card">
            <div class="op-icon" aria-hidden="true">
              <!-- Minimal dashboard/reporting icon -->
              <svg viewBox="0 0 48 48" role="img">
                <rect x="6" y="8" width="36" height="28" rx="3"></rect>
                <line x1="6" y1="16" x2="42" y2="16"></line>
                <rect x="12" y="24" width="4" height="8" rx="1"></rect>
                <rect x="22" y="20" width="4" height="12" rx="1"></rect>
                <rect x="32" y="26" width="4" height="6" rx="1"></rect>
              </svg>
            </div>
            <div class="op-text">
              <p>Forget about monthly exports and endless Excel transformations. <strong>Automate your reporting</strong> and steer your business day to day.</p>
            </div>
          </div>

          <!-- 2: Person with speech bubble / Analytics (alternate) -->
          <div class="op-card alt">
            <div class="op-icon" aria-hidden="true">
              <!-- Person with chat bubble icon -->
              <svg viewBox="0 0 48 48" role="img">
                <circle cx="16" cy="18" r="6"></circle>
                <path d="M6 36c1.5-5.5 6.5-9 12-9s10.5 3.5 12 9"></path>
                <rect x="28" y="10" width="14" height="10" rx="2"></rect>
                <path d="M34 20v5l4-5"></path>
              </svg>
            </div>
            <div class="op-text">
              <p>Dig into your business from top to bottom with <strong>Analytics</strong> and uncover actionable insights to improve your business.</p>
            </div>
          </div>

          <!-- 3: Cloud / Network -->
          <div class="op-card">
            <div class="op-icon" aria-hidden="true">
              <!-- Cloud with nodes icon -->
              <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <!-- Chart container -->
                <rect x="6" y="8" width="36" height="32" rx="3"></rect>

                <!-- Axes -->
                <line x1="10" y1="34" x2="34" y2="34"></line>
                <line x1="10" y1="12" x2="10" y2="34"></line>

                <!-- Bars (simple columns) -->
                <rect x="14" y="28" width="4" height="6" rx="1"></rect>
                <rect x="20" y="22" width="4" height="12" rx="1"></rect>
                <rect x="26" y="18" width="4" height="16" rx="1"></rect>

                <!-- Trend line -->
                <polyline points="12,30 16,24 22,18 28,15 34,13" fill="none" />

                <!-- Data points on trend -->
                <circle cx="16" cy="24" r="1.2"></circle>
                <circle cx="22" cy="18" r="1.2"></circle>
                <circle cx="28" cy="15" r="1.2"></circle>
                <circle cx="34" cy="13" r="1.2"></circle>
              </svg>    </div>
            <div class="op-text">
              <p>Explore <strong>predictive analytics</strong> and <strong>machine learning</strong> to anticipate future trends and make smarter decisions.</p>
            </div>
          </div>

          <!-- 4: Microchip with AI (alternate) -->
          <div class="op-card alt">
            <div class="op-icon" aria-hidden="true">
              <!-- Microchip with AI letters icon -->
              <svg viewBox="0 0 48 48" role="img">
                <rect x="12" y="12" width="24" height="24" rx="3"></rect>
                <text x="24" y="24" text-anchor="middle" dominant-baseline="middle" font-size="10" font-family="Inter, Roboto, 'Open Sans', Arial, sans-serif">AI</text>
                <!-- pins -->
                <line x1="18" y1="8" x2="18" y2="12"></line>
                <line x1="24" y1="8" x2="24" y2="12"></line>
                <line x1="30" y1="8" x2="30" y2="12"></line>
                <line x1="18" y1="36" x2="18" y2="40"></line>
                <line x1="24" y1="36" x2="24" y2="40"></line>
                <line x1="30" y1="36" x2="30" y2="40"></line>
                <line x1="8" y1="18" x2="12" y2="18"></line>
                <line x1="8" y1="24" x2="12" y2="24"></line>
                <line x1="8" y1="30" x2="12" y2="30"></line>
                <line x1="36" y1="18" x2="40" y2="18"></line>
                <line x1="36" y1="24" x2="40" y2="24"></line>
                <line x1="36" y1="30" x2="40" y2="30"></line>
              </svg>
            </div>
            <div class="op-text">
              <p>Power your <strong>AI agents</strong> with trustworthy data they can truly learn from.</p>
            </div>
          </div>
        </div>
      </div>
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