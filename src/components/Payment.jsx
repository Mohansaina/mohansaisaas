import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiCreditCard, FiDollarSign, FiShield } from 'react-icons/fi';

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plans = {
    starter: {
      name: "Starter",
      price: 29,
      period: "month",
      features: [
        "Up to 5 users",
        "Workflow automation",
        "Basic reporting",
        "10GB storage",
        "Email support",
        "5 integrations"
      ]
    },
    professional: {
      name: "Professional",
      price: 79,
      period: "month",
      features: [
        "Up to 25 users",
        "Advanced workflows",
        "Custom dashboards",
        "100GB storage",
        "Priority support",
        "Unlimited integrations",
        "API access",
        "Single sign-on"
      ]
    },
    enterprise: {
      name: "Enterprise",
      price: 199,
      period: "month",
      features: [
        "Unlimited users",
        "Custom workflows",
        "Advanced analytics",
        "1TB storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "Custom training"
      ]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="payment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Secure Payment Processing</h2>
          <p className="section-subtitle">
            Get started with SassFlow in minutes with our secure checkout. This demo simulates the payment flow. For actual payments, integration with Stripe is required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Plan Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h3>
            
            <div className="space-y-4">
              {Object.entries(plans).map(([key, plan]) => (
                <div
                  key={key}
                  onClick={() => setSelectedPlan(key)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPlan === key
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                      <p className="text-3xl font-bold text-gray-900 mt-2">
                        ${plan.price}<span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                      </p>
                    </div>
                    {selectedPlan === key && (
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Security Features */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Secure Checkout</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FiLock className="text-indigo-600 mr-2" />
                  256-bit SSL
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FiShield className="text-indigo-600 mr-2" />
                  PCI DSS
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FiDollarSign className="text-indigo-600 mr-2" />
                  No hidden fees
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h3>
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h4>
                <p className="text-gray-600 mb-6">
                  Welcome to SassFlow {plans[selectedPlan].name} plan. Your account is now active.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-primary"
                >
                  Continue to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 flex items-center justify-center ${
                        paymentMethod === 'card'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FiCreditCard className="mr-2" />
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 rounded-lg border-2 flex items-center justify-center ${
                        paymentMethod === 'paypal'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.2 18c-.3-.3-.5-.7-.5-1.2v-9.1c0-.5.2-.9.6-1.2l.2-.1h12.7c.4 0 .8.2 1.1.5.3.3.4.7.4 1.1v9.1c0 .5-.2.9-.5 1.2l-.2.1h-12.7c-.4 0-.8-.1-1.1-.4zm.8-1.8h12.6v-9.1h-12.6v9.1zm3.5-5.9v1.2h1.8c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-1.8v1.3h-1.3v-5.7h3.1v1.2h-1.8zm5.6 0c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-3.1v-2.2h3.1zm0 3.1c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-3.1v-2.2h3.1z"/>
                      </svg>
                      PayPal
                    </button>
                  </div>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Form */}
                {paymentMethod === 'paypal' && (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.2 18c-.3-.3-.5-.7-.5-1.2v-9.1c0-.5.2-.9.6-1.2l.2-.1h12.7c.4 0 .8.2 1.1.5.3.3.4.7.4 1.1v9.1c0 .5-.2.9-.5 1.2l-.2.1h-12.7c-.4 0-.8-.1-1.1-.4zm.8-1.8h12.6v-9.1h-12.6v9.1zm3.5-5.9v1.2h1.8c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-1.8v1.3h-1.3v-5.7h3.1v1.2h-1.8zm5.6 0c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-3.1v-2.2h3.1zm0 3.1c.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.2-.5.3-.8.3h-3.1v-2.2h3.1z"/>
                    </svg>
                    <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment</p>
                  </div>
                )}

                {/* Billing Information */}
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Country</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Order Summary</h4>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{plans[selectedPlan].name} Plan</span>
                    <span className="font-medium">${plans[selectedPlan].price}/{plans[selectedPlan].period}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-4">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-gray-900">${plans[selectedPlan].price}/{plans[selectedPlan].period}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full btn-primary mt-8 flex items-center justify-center ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    `Pay $${plans[selectedPlan].price}/${plans[selectedPlan].period}`
                  )}
                </button>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Payment Processing Information</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    This demo uses Stripe for secure payment processing. In a production environment, payments are processed securely and transferred to your bank account within 2-7 business days.
                  </p>
                  <p className="text-blue-700 text-sm mb-3">
                    To set up your bank account for payouts, you'll need to create a Stripe account and enter your banking information in the Stripe Dashboard. Never share sensitive banking details through unsecured channels.
                  </p>
                  <p className="text-blue-700 text-sm mb-3">
                    For detailed setup instructions, please refer to the PAYMENT_SETUP.md file included in your project.
                  </p>
                  <div className="flex items-center text-blue-600 text-sm">
                    <FiLock className="mr-2" />
                    <span>Powered by Stripe - PCI DSS Level 1 compliant</span>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  By clicking "Pay", you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the missing FiCheck icon
const FiCheck = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default Payment;