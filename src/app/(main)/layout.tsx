import Logo from "@/components/Logo";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full">
      <Navbar />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
