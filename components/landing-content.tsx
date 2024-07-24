// "use client";

// import { describe } from "node:test";
// import { title } from "process";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const testimonials=[
//     {
//         name:"Krishna",
//         avatar:"K",
//         title:"Software Engineer",
//         description:"I built this application!!!"
//     },
//     {
//         name:"Krishna",
//         avatar:"K",
//         title:"Software Engineer",
//         description:"I built this application!!!"
//     }
// ]

// export const LandingContent = ()=>{
//     return(
//         <div className="px-10 pb-20">
//             <h2 className="text-center text-4xl text-white font-extrabold mb-10">
//                 Developers
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 items-center">
//                {testimonials.map((item)=>(
//                 <Card key={item.description} className="bg-[#192339] border-none text-white">
//                        <CardHeader>
//                         <CardTitle className="flex items-center gap-x-2">
//                             <div>
//                                 <p className="text-lg"> {item.name} </p>
//                                 <p className="text-zinc-400 text-sm"> {item.title} </p>
//                             </div>
//                         </CardTitle>

//                         <CardContent className="pt-4 px-0">
//                             {item.description}
//                         </CardContent>                        
//                        </CardHeader>
//                 </Card>
//                ))} 
//             </div>
//         </div>
//     )
// }
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


const LandingContent = () => {
  return (
<div className="px-10 pb-20">
    <h2 className="text-center text-4xl text-white font-extrabold mb-10">Developers</h2>
    <div className="flex justify-center gap-9 m-2">
        <Card className="bg-white/10 border-none text-white">
            <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                    <img src="/krishna.jpg" alt="Krishna Biliye" className="w-17 rounded-full" />
                    <div>
                        <p className="text-lg">Krishna Biliye</p>
                        <p className="text-white-400 text-sm">Software Developer</p>
                    </div>
                </CardTitle>
            </CardHeader>
        </Card>
        <Card className="bg-white/10 border-none text-white">
            <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                    <img src="/Yash.png" alt="Yash Naik" className="w-17 rounded-full" />
                    <div>
                        <p className="text-lg">Yash Naik</p>
                        <p className="text-white-400 text-sm">Software Developer</p>
                    </div>
                </CardTitle>
            </CardHeader>
        </Card>
    </div>
</div>

  )
}

export default LandingContent;