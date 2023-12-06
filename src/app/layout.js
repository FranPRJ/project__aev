import Link from "next/link";
import { Navigation } from "./components/navigation";
import '../styles/globals.css';



export default function RootLayout({children}) {
    return (
      <html>
        <head>
          <title>
            esto es el titulo
          </title>
        </head>
        <body>
          <Navigation></Navigation>
          {children}
        </body>
      </html>
    );
  };
