import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join Tailwind CSS classes.
 * It combines `clsx` (for conditional classes) and `tailwind-merge` (for resolving conflicts).
 *
 * @param inputs - Class values to be combined.
 * @returns A single string of combined and merged Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
