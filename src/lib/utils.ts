import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'INR',
    notation?: Intl.NumberFormatOptions['notation'],
    locale?: string
  } = {}
) => {
  const { currency = 'INR', notation = 'standard', locale = 'en-IN' } = options;
  const numericPrice = typeof price === 'string' ? parseInt(price) : price;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
    currencyDisplay: 'narrowSymbol' // Use 'narrowSymbol' for compact currency display like ₹
  }).format(numericPrice);
}