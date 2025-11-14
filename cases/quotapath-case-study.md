---
layout: default
title: "Telary - Case Study: QuotaPath"
---

<style>
.gradient-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stats-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.testimonial-quote {
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  font-size: 4rem;
  color: #e5e7eb;
  position: absolute;
  top: -1rem;
  left: -2rem;
  font-family: serif;
}

.pain-point-card {
  border-left: 4px solid #ef4444;
  transition: transform 0.2s ease;
}

.pain-point-card:hover {
  transform: translateX(4px);
}

.solution-feature {
  transition: all 0.3s ease;
}

.solution-feature:hover {
  background-color: #f8fafc;
  transform: scale(1.02);
}
</style>

<body class="bg-gray-50 text-gray-900 font-sans">
  
  <!-- Hero Section -->
  <section class="gradient-hero text-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="mb-4">
            <span class="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              SaaS Technology
            </span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            How QuotaPath Accelerated Revenue Operations with Real-Time Data
          </h1>
          <p class="text-xl text-white text-opacity-90 mb-8">
            QuotaPath transformed their commission tracking and sales analytics by implementing a modern data platform, reducing report generation time by 75% and improving sales team productivity.
          </p>
          
          <!-- Key Stats Preview -->
          <div class="grid grid-cols-2 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-white">75%</div>
              <div class="text-white text-opacity-80">Faster Reporting</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-white">$2M+</div>
              <div class="text-white text-opacity-80">Revenue Tracked</div>
            </div>
          </div>
        </div>
        
        <!-- Company Info Card -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-white mb-2">QuotaPath</h2>
            <p class="text-white text-opacity-80">Commission Management Platform</p>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="text-center">
              <div class="font-semibold text-white">Industry</div>
              <div class="text-white text-opacity-80">SaaS Technology</div>
            </div>
            <div class="text-center">
              <div class="font-semibold text-white">Company Size</div>
              <div class="text-white text-opacity-80">50-200 employees</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Overview -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">About QuotaPath</h2>
      <div class="prose prose-lg max-w-none text-center">
        <p class="text-xl text-gray-600 leading-relaxed">
          QuotaPath is a leading commission management platform that helps sales teams track, calculate, and optimize their compensation plans. With thousands of sales professionals using their platform, QuotaPath processes millions of commission calculations and needs real-time data insights to drive business decisions.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-purple-600 mb-2">5,000+</div>
          <div class="text-gray-600">Sales Professionals</div>
        </div>
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-purple-600 mb-2">$50M+</div>
          <div class="text-gray-600">Commissions Calculated</div>
        </div>
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-purple-600 mb-2">95%</div>
          <div class="text-gray-600">Customer Satisfaction</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Challenge Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
      <div class="mb-12">
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          As QuotaPath scaled rapidly, their data infrastructure began showing strain. Manual reporting processes were taking hours to complete, sales teams weren't getting real-time insights into their performance, and the engineering team was spending too much time on data maintenance instead of product development.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="pain-point-card bg-white p-6 rounded-lg shadow-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Slow Reporting Process</h3>
              <p class="text-gray-600">Commission reports took 4-6 hours to generate, causing delays in sales team feedback and decision-making.</p>
            </div>
          </div>
        </div>
        
        <div class="pain-point-card bg-white p-6 rounded-lg shadow-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Silos</h3>
              <p class="text-gray-600">Customer data was scattered across multiple systems, making it difficult to get a complete view of sales performance.</p>
            </div>
          </div>
        </div>
        
        <div class="pain-point-card bg-white p-6 rounded-lg shadow-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Manual Data Processing</h3>
              <p class="text-gray-600">Engineering team spent 30% of their time on data maintenance instead of core product development.</p>
            </div>
          </div>
        </div>
        
        <div class="pain-point-card bg-white p-6 rounded-lg shadow-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Scalability Issues</h3>
              <p class="text-gray-600">Existing infrastructure couldn't handle growing data volumes and user base efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">The Solution</h2>
      <div class="mb-12">
        <p class="text-lg text-gray-600 leading-relaxed">
          QuotaPath partnered with Telary to implement a comprehensive data platform that would automate their reporting processes, consolidate data sources, and provide real-time insights to their sales teams. The solution included automated data pipelines, real-time analytics, and scalable infrastructure.
        </p>
      </div>
      
      <!-- Data Sources Integration -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Integrated Data Sources</h3>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Telary seamlessly connected QuotaPath's existing systems, creating a unified data ecosystem for comprehensive sales analytics and commission calculations.
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Salesforce</h4>
            <p class="text-sm text-blue-600 font-medium mb-2">CRM System</p>
            <p class="text-xs text-gray-600">Sales opportunities, leads, and customer data</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H13L16,8L15,7L11,11V6H10V11L6,7L5,8L8,11H3V12H8L5,15L6,16L10,12V17H11V12L15,16L16,15L13,12H18V11Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">HubSpot</h4>
            <p class="text-sm text-green-600 font-medium mb-2">Marketing Platform</p>
            <p class="text-xs text-gray-600">Lead generation and marketing analytics</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5,4.5C1.5,3.12 2.62,2 4,2H20C21.38,2 22.5,3.12 22.5,4.5V19.5C22.5,20.88 21.38,22 20,22H4C2.62,22 1.5,20.88 1.5,19.5V4.5M4,4.5V19.5H20V4.5H4Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Stripe</h4>
            <p class="text-sm text-purple-600 font-medium mb-2">Payment Processing</p>
            <p class="text-xs text-gray-600">Transaction data and billing information</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Intercom</h4>
            <p class="text-sm text-orange-600 font-medium mb-2">Customer Support</p>
            <p class="text-xs text-gray-600">Customer interactions and support tickets</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Google Analytics</h4>
            <p class="text-sm text-red-600 font-medium mb-2">Web Analytics</p>
            <p class="text-xs text-gray-600">Website traffic and user behavior</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Slack</h4>
            <p class="text-sm text-indigo-600 font-medium mb-2">Team Communication</p>
            <p class="text-xs text-gray-600">Automated notifications and alerts</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">PostgreSQL</h4>
            <p class="text-sm text-yellow-600 font-medium mb-2">Database</p>
            <p class="text-xs text-gray-600">Historical commission and sales data</p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">CSV Files</h4>
            <p class="text-sm text-teal-600 font-medium mb-2">File Storage</p>
            <p class="text-xs text-gray-600">Legacy reports and data exports</p>
          </div>
        </div>
        
        <div class="text-center">
          <div class="bg-gray-50 p-8 rounded-lg inline-block">
            <div class="flex items-center justify-center space-x-4 mb-4">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                <div class="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                <div class="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-600">
              <span class="font-medium text-gray-900">8+ data sources</span> unified into one powerful platform
            </p>
          </div>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Automated Data Pipelines</h3>
          <p class="text-gray-600">Real-time data ingestion and processing from CRM, billing, and sales systems.</p>
        </div>
        
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
          <p class="text-gray-600">Live dashboards showing commission calculations and sales performance metrics.</p>
        </div>
        
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Scalable Infrastructure</h3>
          <p class="text-gray-600">Cloud-native architecture that grows with QuotaPath's expanding user base.</p>
        </div>
        
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Integration</h3>
          <p class="text-gray-600">Seamless connection to Salesforce, HubSpot, and other sales tools.</p>
        </div>
        
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Quality Monitoring</h3>
          <p class="text-gray-600">Automated validation and error detection to ensure data accuracy.</p>
        </div>
        
        <div class="solution-feature text-center p-6 rounded-lg border border-gray-200">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Automated Reporting</h3>
          <p class="text-gray-600">Scheduled reports delivered directly to sales teams and leadership.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Results & Impact</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">75%</div>
          <div class="text-gray-600 font-medium mb-2">Faster Report Generation</div>
          <div class="text-sm text-gray-500">From 4-6 hours to 60 minutes</div>
        </div>
        
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
          <div class="text-gray-600 font-medium mb-2">Monthly Revenue Tracked</div>
          <div class="text-sm text-gray-500">With 99.9% accuracy</div>
        </div>
        
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">90%</div>
          <div class="text-gray-600 font-medium mb-2">Reduction in Manual Tasks</div>
          <div class="text-sm text-gray-500">Engineering time freed up</div>
        </div>
        
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">50%</div>
          <div class="text-gray-600 font-medium mb-2">Improvement in Sales Productivity</div>
          <div class="text-sm text-gray-500">Better visibility into performance</div>
        </div>
        
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">24/7</div>
          <div class="text-gray-600 font-medium mb-2">Real-Time Monitoring</div>
          <div class="text-sm text-gray-500">Automated alerts and notifications</div>
        </div>
        
        <div class="stats-card bg-white p-8 rounded-xl shadow-sm text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">300%</div>
          <div class="text-gray-600 font-medium mb-2">Data Processing Capacity</div>
          <div class="text-sm text-gray-500">Ready for future growth</div>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-gray-900">Improved Sales Team Morale</h4>
              <p class="text-gray-600 text-sm">Real-time visibility into commissions and performance</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-gray-900">Better Customer Insights</h4>
              <p class="text-gray-600 text-sm">Unified view of customer data across all touchpoints</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-gray-900">Reduced Infrastructure Costs</h4>
              <p class="text-gray-600 text-sm">Optimized cloud resources and automated scaling</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-gray-900">Enhanced Data Security</h4>
              <p class="text-gray-600 text-sm">Enterprise-grade security and compliance features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="bg-gray-50 rounded-2xl p-12 relative">
        <blockquote class="testimonial-quote text-xl text-gray-700 italic mb-8 relative z-10">
          The transformation has been incredible. Our sales team now has real-time visibility into their commission calculations, and we've freed up our engineering team to focus on what they do best - building great products. Telary didn't just solve our data problems; they enabled us to scale our business more effectively.
        </blockquote>
        <div class="flex items-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-purple-600 font-bold text-lg">AM</span>
          </div>
          <div>
            <div class="font-semibold text-gray-900">Alex Martinez</div>
            <div class="text-gray-600">VP of Engineering</div>
            <div class="text-gray-500">QuotaPath</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-purple-700 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Data Operations Like QuotaPath?</h2>
      <p class="text-xl text-purple-100 mb-8">
        See how Telary can help your SaaS company achieve similar results with automated data pipelines and real-time analytics.
      </p>
      <div class="space-x-4">
        <a href="/contact" class="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
          Get Started Today
        </a>
        <a href="/demo" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors inline-block">
          Schedule a Demo
        </a>
      </div>
    </div>
  </section>
  
  <div class="max-w-4xl mx-auto px-6 py-8">
    <a href="../index.html" class="text-purple-700 underline text-lg hover:text-purple-900 transition-colors">
      ← Retour à l'accueil
    </a>
  </div>

</body>
