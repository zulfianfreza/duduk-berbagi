import { getCurrentUser } from "@/actions/user";
import InitializerUser from "@/components/initializer/InitializerUser";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className=" w-full">
      {/* <InitializerUser user={user} /> */}
      <Navbar user={user} />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
