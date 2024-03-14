import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import DarkModeToggler from "@/components/DarkModeToggler";
import DarkModeContext from "@/context/DarkModeContext";
import ActiveSectionContext from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const metadata = {
  title: "Ankush Bhagat | Portfolio",
  description:
    "Ankush Bhagat is a software engineer based in India and this is his portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-56 sm:pt-56 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 no-scrollbar`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

        <DarkModeContext>
          <ActiveSectionContext>
            <Navbar />
            <DarkModeToggler />
            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContext>
        </DarkModeContext>
      </body>
    </html>
  );
}
