import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/utils/provider";
import UiProvider from "./components/ui/UiProvider";
import NavBar from "./layouts/NavBar";
import SocketProvider from "@/context/socket/SocketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeetYu",
  description: "Meet your favorite.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <UiProvider>
            <SocketProvider>
              <NavBar />
              {children}
            </SocketProvider>
          </UiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
