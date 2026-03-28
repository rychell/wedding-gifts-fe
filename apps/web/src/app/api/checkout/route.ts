import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { env } from "@wedding-gifts-fe/env/web";

const client = new MercadoPagoConfig({
  accessToken: env.MERCADOPAGO_ACCESS_TOKEN,
});

export async function POST(request: NextRequest) {
  const { giftId, title, price, name, message } = await request.json();

  const baseUrl = env.BASE_URL;
  const successUrl = name
    ? `${baseUrl}/obrigado?nome=${encodeURIComponent(name)}`
    : `${baseUrl}/obrigado`;

  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: giftId,
          title,
          quantity: 1,
          unit_price: Number(price),
          currency_id: "BRL",
        },
      ],
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 4,
      },
      back_urls: {
        success: successUrl,
        failure: `${baseUrl}/presentes`,
        pending: `${baseUrl}/obrigado`,
      },
      auto_return: "approved",
      metadata: { giftId, name, message },
    },
  });

  return NextResponse.json({ checkoutUrl: preference.init_point });
}
