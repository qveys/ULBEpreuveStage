"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
// This component is a wrapper around the NextThemesProvider
// from the 'next-themes' package. It is responsible for passing
// theme-related properties down to the components in the application.
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
