import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Icons from "../global/icons";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
    return (
        <header className="sticky top-0 inset-x-0 w-full h-14 border-b border-border/40 bg-background/50 backdrop-blur-md z-50">
            <MaxWidthWrapper>
                <div className="flex items-center justify-between w-full h-full">
                    <div className="flex">
                        <Link href="/" className="flex items-center gap-2 text-sm">
                            <Icons.logo className="w-8 h-8" />
                            <span className="uppercase">Артимэйк</span>
                            <Separator orientation="vertical" className="hidden h-4 md:block" />
                            <span className="hidden md:block text-gray-400">Умные кресла</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/auth/signin" className={buttonVariants({ size: "sm", variant: "ghost" })}>Скачать приложение</Link>
                        <Link href="/auth/signup" className={buttonVariants({ size: "sm" })}>Купить в Ozon <ArrowRightIcon className="w-4 h-4 ml-1.5" /></Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    )
};

export default Navbar
