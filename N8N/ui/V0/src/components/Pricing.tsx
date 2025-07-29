import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      credits: 5,
      features: [
        '5 video generations',
        'Basic voice options',
        'Standard quality images',
        'Email support',
        '720p video quality'
      ],
      popular: false,
      cta: 'Get Started Free',
      href: '/register'
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      credits: 50,
      features: [
        '50 video generations per month',
        'Premium ElevenLabs voices',
        'High-quality Flux Pro images',
        'Priority support',
        '1080p video quality',
        'Advanced customization',
        'Bulk processing',
        'API access'
      ],
      popular: true,
      cta: 'Start Pro Trial',
      href: '/register'
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      credits: 200,
      features: [
        '200 video generations per month',
        'All premium voices',
        'Highest quality images',
        '24/7 priority support',
        '4K video quality',
        'Custom branding',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/register'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎬</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">BibleVideoAI</h1>
                <p className="text-xs text-gray-500">Professional Biblical Content Creation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Sign In
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your biblical video creation needs. 
            All plans include our advanced AI technology and professional features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                plan.popular 
                  ? 'border-blue-500 ring-4 ring-blue-500/20' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {plan.credits} video generations
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How many videos can I create?
              </h3>
              <p className="text-gray-600">
                Each plan includes a specific number of video generations per month. 
                Unused credits roll over to the next month.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in each video?
              </h3>
              <p className="text-gray-600">
                Every video includes AI-generated scenes, professional voice narration, 
                Ken Burns effects, and synchronized captions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. 
                You'll continue to have access until the end of your billing period.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What video quality do you support?
              </h3>
              <p className="text-gray-600">
                Free plans get 720p, Pro plans get 1080p, and Enterprise plans 
                support up to 4K video quality.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators who are already using our platform 
              to produce high-quality biblical content.
            </p>
            <Link
              to="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Your Free Trial
              <Check className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing; 