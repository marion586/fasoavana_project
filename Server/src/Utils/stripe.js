import Stripe from "stripe";

const STRIPE_SECRET_KEY =
  "sk_test_51LS2L4IIynL6dlcZPMmJJD5vLiCoD827A5zmrVSTPotOOAAs54aH36gGNgHIEGFZEHQEqFWtALEmjztovMmSZbjf00J4zSPgCR";

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});
