// Stripe configuration for future payment integration
// This file is prepared for when you're ready to add Stripe payments

// Conditional Stripe import - only when Stripe is installed
let stripe: any = null

if (typeof window === 'undefined') {
  try {
    const Stripe = require('stripe')
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
      apiVersion: '2023-10-16',
    })
  } catch (error) {
    // Stripe not installed yet, will be available when you add it
    console.log('Stripe not installed yet - this is expected for now')
  }
}

export default stripe

// Example usage for future implementation:
/*
export async function createCheckoutSession(items: CartItem[]) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  })
  
  return session
}
*/
