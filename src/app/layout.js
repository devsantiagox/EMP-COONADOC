// Import Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.css";

import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import SearchForm from "./components/SearchForm/SearchForm";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "COONADOC Website",
  description: "Website of COONADOC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <SearchForm />
        <Nav />
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
