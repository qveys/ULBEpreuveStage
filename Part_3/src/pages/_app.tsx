import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/providers/ThemeProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
