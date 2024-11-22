import { Footer } from "@/components/Footer";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Navbar } from "@/components/ui/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainProvider from "@/components/web3auth/provider/providers";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TBD | Tokenized Funds Aggregator",
  description: "TBD",
};

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html suppressHydrationWarning>
      <body>
        <MainProvider>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex flex-1 overflow-hidden">
                <SidebarComponent />
                <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-l from-gray-900 to-black">{children}</main>
              </div>
              <Footer />
            </div>
          </SidebarProvider>
        </MainProvider>
      </body>
    </html>
  );
};

export default Layout;
