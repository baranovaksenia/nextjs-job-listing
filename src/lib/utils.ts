import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNowStrict } from "date-fns";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string
 * @param inputs - The class names to combine
 * @returns The combined class names as a string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats the given amount as a currency in en-US locale
 * @param amount - The amount to format as currency
 * @returns The formatted currency string
 */
export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Returns the relative date from the given date
 * @param from - The date to calculate the relative date from
 * @returns The relative date as a string
 */
export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}
