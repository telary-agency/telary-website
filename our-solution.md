---
layout: main_page
title: Telary
lang: en
page_id: index
permalink: /our-solution

---
  <body class="bg-gray-50 text-gray-900 font-sans">
    <!-- Hero -->
    <section class="bg-white py-20 px-6 text-center shadow-md textured-section-hero">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-extrabold text-purple-700 mb-4">
          Your data. Ready for <span id="rotating-text" class="inline-block min-w-[250px] text-left">AI.</span>
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          A turnkey, managed data platform, 100% open source and deployed in 24h. 
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

    {% include sections/data_burden.html %}

    {% include sections/our_solution.html %}

    {% include sections/key_features.html %}

    {% include sections/economic_comparison.html %}

    {% include sections/success_story.html %}

    <!-- Call to Action -->
    <section class="bg-purple-700 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to leverage your data?</h2>
      <p class="mb-6 text-lg">Contact us to discover how we can help you.</p>
      <a href="https://www.linkedin.com/in/constant-deschietere/" class="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
        Contact us
      </a>
    </section>
  </body> 