---
layout: page
title: Campaign
class: page page-campaign
current: campaign
stripe: yes
permalink: campaign/test/
---

<form id="stripe-form" method="post" action="https://campaign.railsgirlssummerofcode.org/donations/checkout">
  <input type="hidden" name="stripe_card_token" />
  <input type="hidden" name="amount" />
  <input type="hidden" name="package" />
</form>

<p class="custom-donation">
  <input type="number" id="custom-donation-amount" placeholder="75.00" min="0" step="25.00"/>
  <a href="#" class="donate-button button" data-custom="true" data-name="Custom">Donate Now <i class="icon-star-white"></i></a>
</p>

<p class="stripe-note">
  <small>Secure Payments by <a href="https://stripe.com/blog/stripe-checkout">Stripe Checkout</a></small>
</p>
