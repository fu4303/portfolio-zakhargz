import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import LayoutWrapper from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
