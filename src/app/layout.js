import Link from "next/link";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";
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
        
        <Footer></Footer>
      
        </body>
        
      </html>
    );
  };
