import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MERCADOPAGO_ACCESS_TOKEN: z.string().min(1),
    BASE_URL: z.string().url().default("https://mayara-e-rychell.ecasei.com.br"),
  },
  client: {},
  runtimeEnv: {
    MERCADOPAGO_ACCESS_TOKEN: process.env.MERCADOPAGO_ACCESS_TOKEN,
    BASE_URL: process.env.BASE_URL,
  },
  emptyStringAsUndefined: true,
});
