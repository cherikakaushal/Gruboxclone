// components/meal/MealPlans.js
import React from 'react';
import './meal.css';

export default function MealPlans() {
  const plans = [
    {
      title: 'Daily Thali',
      price: '₹99/day',
      features: ['Vegetarian', 'Balanced Nutrition', 'Cooked Fresh Daily'],
    },
    {
      title: 'Weekly Buffet',
      price: '₹550/week',
      features: ['Unlimited Variety', 'Multiple Cuisines', 'Subsidized Pricing'],
    },
    {
      title: 'Monthly Subscription',
      price: '₹1999/month',
      features: ['Save More', 'Custom Menu', 'Priority Delivery'],
    },
  ];

  return (
    <section className="w3-container w3-padding-64 meal-section">
      <div className="w3-content">
        <h2 className="w3-xxlarge w3-bold w3-center">Meal Plans</h2>
        <p className="w3-large w3-text-grey w3-center">
          Choose a plan that suits your taste and schedule.
        </p>

        {/* Plan Cards */}
        <div className="w3-row-padding w3-margin-top">
          {plans.map((plan, idx) => (
            <div key={idx} className="w3-third w3-padding">
              <div className="w3-card card-glass meal-card">
                <h3 className="w3-xlarge w3-bold">{plan.title}</h3>
                <p className="w3-large w3-text-green">{plan.price}</p>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i} className="w3-text-grey">{f}</li>
                  ))}
                </ul>
                <button className="w3-button w3-round-large order-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="w3-row w3-margin-top">
          {[
            { icon: '1', step: 'Choose your plan' },
            { icon: '2', step: 'Confirm delivery slot' },
            { icon: '3', step: 'Meals delivered fresh' },
          ].map((item, idx) => (
            <div key={idx} className="w3-third w3-center w3-padding">
              <div className="step-circle">{item.icon}</div>
              <p className="w3-large">{item.step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
