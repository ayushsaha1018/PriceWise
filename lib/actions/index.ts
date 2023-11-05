"use server";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scarpedProduct = await scrapeAmazonProduct(productUrl);

    if (!scarpedProduct) {
      return;
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update product : ${error.message}`);
  }
}
