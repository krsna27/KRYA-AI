"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



const montserrat= Montserrat({
    weight:"600",
    subsets:["latin"]
});

const routes=[
   {
        label: "Dashboard",
        icon: LayoutDashboard,
        href:"/dashboard",
        color:"text-purple-500",
        bgColor:"text-purple-500/10"
   },
   {
    label: "Conversation",
    icon: MessageSquare,
    href:"/conversation",
    color:"text-violet-500",
    bgColor:"bg-violet-500/10"
   },
   {
    label: "Image Generation",
    icon: ImageIcon,
    href:"/image",
    color:"text-pink-700",
    bgColor:"bg-pink-700/10"
   },
   {
    label: "Video Generation",
    icon: VideoIcon,
    href:"/video",
    color:"text-orange-700",
    bgColor:"bg-orange-700/10"
   },
   {
    label: "Music Generation",
    icon: Music,
    href:"/music",
    color:"text-emerald-500",
    bgColor:"bg-emerald-500/10"
   },
   {
    label: "Code Generation",
    icon: Code,
    href:"/code",
    color:"text-green-700",
    bgColor:"bg-green-700/10"
   }
];


interface SidebarProps {
    apiLimitCount: number;
}

const Sidebar=()=>{

    const pathname = usePathname();

    
  const [isMounted,setIsMounted] = useState(false);
  useEffect(()=>{
      setIsMounted(true);
  },[]);

    return(
        <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-10
                 mb-14">
                <div className="relative w-10 h-10 ">
                    <Image 
                        fill 
                        alt="Logo"
                        src="/logo.png"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold",montserrat.className)}>
                   NEXTGEn
                </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                    <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",pathname===route.href?"text-white bg-white/10":"text-zinc-400")}
                    >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;