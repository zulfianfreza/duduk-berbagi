import Hightlight from "@/components/profile/Hightlight";
import TabProfile from "@/components/profile/TabProfile";
import UserProfile from "@/components/profile/UserProfile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" container mx-auto w-full mt-28">
      <div className="flex gap-16">
        <div className="flex-1">
          <UserProfile />
          <Hightlight className=" w-full mt-4 block md:hidden" />
          <TabProfile />
          <div className=" mt-4">{children}</div>
        </div>

        {/* RIGHTBAR */}
        <Hightlight className=" hidden md:block" />
      </div>
    </div>
  );
}
