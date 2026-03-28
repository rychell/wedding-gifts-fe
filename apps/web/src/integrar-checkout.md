# MD for: https://www.mercadopago.com.br/developers/pt/docs/checkout-pro/overview.md

 Integrate Checkout Pro and set up a predesigned experience  With this solution, your customers buy on your website and pay in the Mercado Pago environment with their saved payment methods. 

 Agile integration 

 For web, Android, and iOS 

 Pre-built experience 

 With redirection to Mercado Pago 

 Looking for development-free options? Explore [more solutions](https://www.mercadopago.com.br/developers/pt/docs#online-payments). 

 What it offers  Combine different features to ensure transaction security and conversion. 

Customization

  * Financing in installments
  * Return URL after payment approval
  * Appearance and style of the payment button
  * Customizable payment methods with the option to split the total amount into 2 parts

Conversion

  * Quick payment with the payment methods saved in Mercado Pago
  * Option to pay without a Mercado Pago account, as a guest user
  * Online and offline payment methods, such as cards and account money
  * Recovery of rejected payments

Payment approval

  * 3DS 2.0 technology for transaction authentication
  * Fraud prevention tools and customer identity verification
  * Transaction validation using industry-specific data

Fraud protection

  * OWASP and PCI DSS protocols
  * Buyer identity verification
  * Facial recognition with FaceAuth to access the Mercado Pago account

 How it works 

 The customer chooses the product or service on your site, pays in Mercado Pago’s secure environment, and returns to your website or the configured destination. 

[ How to integrate ](https://www.mercadopago.com.br/developers/en/docs/checkout-pro/create-application)

![](https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/3/25/1745606380425-chopropt990px.gif)

[ Simulate the payment processing ](https://www.mercadopago.com.br/developers/en/live-demo/checkout-pro)

 Payment process 
1. The buyer checks out their shopping cart on your website and chooses to pay with Mercado Pago.
2. They’re redirected to the payment form, where they decide whether to proceed with their Mercado Pago account or as a guest user.
3. They can choose their preferred payment method, whether it’s one saved in their account or a new one they entered.
4. Once the purchase is completed, they are redirected to your website or the configured destination.
[ How to integrate ](https://www.mercadopago.com.br/developers/en/docs/checkout-pro/create-application)

What sets it apartCompare our checkouts and choose the option that best fits your business. Check the [rates](https://www.mercadopago.com.br/developers/pt/ajuda/33399).

You are here

Checkout Pro[How to integrate](https://www.mercadopago.com.br/developers/en/docs/checkout-pro/create-application)

Checkout Transparente[Go to the overview](https://www.mercadopago.com.br/developers/en/docs/checkout-api-payments/overview)

Checkout Bricks[Go to the overview](https://www.mercadopago.com.br/developers/en/docs/checkout-bricks/landing)

Integration effort

Integration effort

Integration effort

Integration effort

Customization level

Customization level

Customization level

Customization level

Design ready to set up

Design ready to set up

Design ready to set up

\-

Design ready to set up

Collection experience

Collection experience

In Mercado Pago

Collection experience

In your site

Collection experience

In your site

Recurring payments

Recurring payments

\-

Recurring payments

Recurring payments

Payment methods

Payment methods

Credit card, Pix, boleto bancário, Caixa virtual debit card, Mercado Pago Wallet and Installments without Card 

Payment methods

 Credit card, Pix, boleto bancário, Caixa virtual debit card, Mercado Pago Wallet and Installments without Card

Payment methods

 Credit card, Pix, boleto bancário, Caixa virtual debit card, Mercado Pago Wallet and Installments without Card

Availability by country

Availability by country

AR

BR

CL

CO

MX

PE

UY

Availability by country

AR

BR

CL

CO

MX

PE

UY

Availability by country

AR

BR

CL

CO

MX

PE

UY

 How to integrate 

 Learn about the steps you need to follow to integrate this solution. 

 Prerequisites 
* **Seller account**  
To integrate Checkout Pro, you need to access Mercado Pago and [create a seller account](https://www.mercadopago.com.br/hub/registration/landing).
* **SSL Certificate (Secure Sockets Layer)**  
Allows secure browsing and the protection of your data during information transfers.

 Integration process 

1. Create an application.
2. Configure the development environment.
3. Create and configure your payment preference.
4. Configure the Back URLs.
5. Add the SDK to the frontend and initialize the checkout.
6. Configure the payment notifications.
7. Test your integration.
8. Go to production.
[ I want to start integrating ](https://www.mercadopago.com.br/developers/en/docs/checkout-pro/create-application)


  flowchart TD
  A["Access Your integrations"] --> B["Create application"]
  B --> C["Build the environment"]
  C --> D["Create payment preferences"]
  D -- Amount, payment methods, details, others --> F["Configure notifications"]
  F -- Webhooks and IPN --> E["Test the integration"]
  E -- Successful tests --> H["Go to production"]
  E -- Errors detected --> I["Fix configuration"]
  I --> H
  H --> J["Measure quality"]
  