import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limits";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative bg-[#0D1B2E]">
      <div className="hidden h-full md:flex md:w-60 lg:w-72 md:flex-col md:fixed md:inset-y-0 z-20">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-60 lg:pl-72 h-full fixed z-10 w-full">
        <Navbar />
        <div className="bg-gray-100 rounded-tl-xl h-full p-2 md:p-4 lg:p-8 overflow-scroll">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
