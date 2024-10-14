import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51Q8orHAeHtXSvt59f3q2wAlHb1t2bzEKxXCEwFFx0dRifxFmPdmV7wKUcIOliux7CKQDp2ZNM3o95NHZkmg7YBrq00S5wz8PiU",
  {
    apiVersion: "2024-09-30.acacia",
    typescript: true,
  }
);
