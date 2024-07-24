// import  Navbar from "@/components/navbar";
// import  Sidebar  from "@/components/sidebar";

// const Dashboardlayout = async ({
//     children
// }: {
//     children: React.ReactNode;
// }) => {

//     return (
//         <div className="h-full relative">
//             <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
//                 <Sidebar />
//             </div>
//             <main className="md:pl-72">
//                 <Navbar/>
//                 {children}
//             </main>
//         </div>
//     );
// }

// export default Dashboardlayout;
import  Navbar from "@/components/navbar";
import  Sidebar  from "@/components/sidebar";
import { getAPiLimitCount } from "@/lib/api-limit"

const Dashboardlayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {

    const apiLimitCount = await getAPiLimitCount();

    return (
        <div className="h-full relative bg-gray-100">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar apiLimitCount = {apiLimitCount}/>
            </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
    );
}

export default Dashboardlayout;