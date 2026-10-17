import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-[#f5f8f5] font-sans text-[#18231d]">
            <div className="h-1.5 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
            <header className="border-b border-[#e2e9e4] bg-white"><div className="mx-auto flex min-h-[78px] max-w-6xl items-center px-4 py-3 sm:px-6">
                <Link href={home()} className="flex items-center gap-3 text-inherit no-underline" aria-label="Sauti Yako home">
                    <img className="h-12 w-13 object-contain" src="/kenya-coat-of-arms.png" alt="Coat of arms of Kenya" />
                    <span className="h-11 w-1 shrink-0 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
                    <span className="text-[20px] leading-none font-extrabold tracking-tight text-[#064e32]">Sauti Yako<small className="mt-1.5 block text-[9px] font-semibold tracking-[.08em] text-[#66736c]">PUBLIC SERVICE PORTAL</small></span>
                </Link>
            </div></header>
            <main className="grid min-h-[calc(100vh-84px)] place-items-center px-4 py-8">
                <div className="w-full max-w-[460px]">
                    <section className="rounded-xl border border-[#e2e9e4] bg-white p-5 shadow-sm sm:p-7">
                        <div className="mb-6 text-center"><h1 className="m-0 text-2xl font-bold tracking-tight text-[#17251d]">{title}</h1><p className="mt-2 text-[13px] text-[#66736c]">{description}</p></div>
                        <div className="text-[#18231d] [&_label]:font-semibold [&_label]:text-[#26372d] [&_a]:text-[#006b3f] [&_button[data-slot=button]]:rounded-lg [&_button[data-slot=button]]:bg-[#006b3f] [&_button[data-slot=button]]:font-bold [&_button[data-slot=button]]:text-white [&_button[data-slot=button]:hover]:bg-[#064e32] [&_input[data-slot=input]]:h-11 [&_input[data-slot=input]]:rounded-lg [&_input[data-slot=input]]:border-[#d6e0d8] [&_input[data-slot=input]]:bg-white [&_input[data-slot=input]]:text-[#18231d] [&_input[data-slot=input]:focus-visible]:border-[#006b3f]">{children}</div>
                    </section>
                    <div className="mt-4 text-center text-[11px] text-[#758279]">Republic of Kenya · Secure citizen access</div>
                </div>
            </main>
        </div>
    );
}
