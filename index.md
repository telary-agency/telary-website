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
          Forget monthly exports and Excel dead-ends—automate your dashboards and steer your business in real time.
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
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Business Insights</h3>
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

    <section class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content - Left Column -->
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-purple-700">
              Deploy Telary within hours, and get started with your data journey
            </h2>
            <p class="text-lg text-gray-600">
              Our platform is designed to remove the complexity of data management, and allow organizations to explore their data without having to hire a dedicated team.
            </p>
            <p class="text-gray-600 text-justify">
              With a comprehensive UI, no code components, and automation through AI, getting started with Data has never been so easy.
            </p>
          </div>
          
          <!-- Image - Right Column -->
          <div class="lg:order-last">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1725733618919-f45972c90229?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Telary Data Platform Architecture" class="w-full h-auto rounded-xl shadow-lg">
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-xl"></div>
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
    

    <!-- Use cases -->
    <section class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column - Title and CTA -->
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-purple-700">
              Explore Real-World Use Cases
            </h2>
            <p class="text-lg text-gray-600">
              Discover how different departments can leverage Telary to transform their data into actionable insights.
            </p>
            <a href="/usecases" class="inline-block bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition">
              View All Use Cases
            </a>
          </div>
          
          <!-- Right Column - Use Case Drawers -->
          <div class="space-y-4">
            <!-- Finance Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="finance-content">
                <h3 class="text-lg font-semibold text-gray-900">💰 Finance</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="finance-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Automate financial reporting, track KPIs, and gain real-time visibility into cash flow and profitability.</p>
                <a href="/blog/finance-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>

            <!-- Sales Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="sales-content">
                <h3 class="text-lg font-semibold text-gray-900">📈 Sales</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="sales-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Track sales performance, forecast revenue, and optimize your sales funnel with data-driven insights.</p>
                <a href="/blog/sales-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>

            <!-- Marketing Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="marketing-content">
                <h3 class="text-lg font-semibold text-gray-900">🎯 Marketing</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="marketing-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Measure campaign effectiveness, understand customer acquisition costs, and optimize marketing spend across channels.</p>
                <a href="/blog/marketing-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>

            <!-- Operations Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="operations-content">
                <h3 class="text-lg font-semibold text-gray-900">⚙️ Operations</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="operations-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Streamline inventory management, optimize supply chain, and monitor operational efficiency metrics.</p>
                <a href="/blog/operations-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>

            <!-- Product Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="product-content">
                <h3 class="text-lg font-semibold text-gray-900">🚀 Product</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="product-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Analyze user behavior, track feature adoption, and make data-driven product decisions to improve user experience.</p>
                <a href="/blog/product-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>

            <!-- Customer Service Drawer -->
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition text-left use-case-toggle" data-target="customer-service-content">
                <h3 class="text-lg font-semibold text-gray-900">💬 Customer Service</h3>
                <span class="text-2xl text-purple-700 use-case-icon">+</span>
              </button>
              <div id="customer-service-content" class="use-case-content hidden px-4 pb-4 bg-gray-50">
                <p class="text-gray-600 mb-3">Monitor support ticket trends, measure response times, and identify opportunities to improve customer satisfaction.</p>
                <a href="/blog/customer-service-data-use-cases" class="text-purple-700 hover:text-purple-800 font-medium">Read detailed case study →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- JavaScript for drawer functionality -->
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            const toggles = document.querySelectorAll('.use-case-toggle');
            
            toggles.forEach(toggle => {
              toggle.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const content = document.getElementById(targetId);
                const icon = this.querySelector('.use-case-icon');
                
                // Close all other drawers
                toggles.forEach(otherToggle => {
                  if (otherToggle !== this) {
                    const otherTargetId = otherToggle.getAttribute('data-target');
                    const otherContent = document.getElementById(otherTargetId);
                    const otherIcon = otherToggle.querySelector('.use-case-icon');
                    
                    if (otherContent && !otherContent.classList.contains('hidden')) {
                      otherContent.classList.add('hidden');
                      otherIcon.textContent = '+';
                    }
                  }
                });
                
                // Toggle current drawer
                if (content.classList.contains('hidden')) {
                  content.classList.remove('hidden');
                  icon.textContent = '−';
                } else {
                  content.classList.add('hidden');
                  icon.textContent = '+';
                }
              });
            });
          });
        </script>
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