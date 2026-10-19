import { Head, Link, usePage } from '@inertiajs/react';
import { Bell, ChevronLeft, FilePlus2, FileText, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import PortalProfileMenu from '@/components/portal-profile-menu';

type Props = { title: string; backHref?: string; backLabel?: string; children: React.ReactNode };

export default function PortalLayout({ title, backHref, backLabel = 'Back to dashboard', children }: Props) {
    const { auth, unreadNotifications } = usePage<{ auth: { user: { name: string; email: string; is_admin?: boolean } | null }; unreadNotifications: number }>().props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const name = auth.user?.name ?? 'Citizen';

    return (
        <div className="min-h-screen bg-[#f5f8f5] font-sans text-[#18231d]">
            <Head title={`${title} · Sauti Yako`} />
            <div className="h-1.5 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
            <header className="relative border-b border-[#e2e9e4] bg-white">
                <div className="mx-auto flex min-h-[78px] max-w-6xl items-center gap-5 px-4 py-3 sm:px-6">
                    <Link href="/citizen" className="flex min-w-0 items-center gap-3 text-inherit no-underline" aria-label="Sauti Yako home">
                        <img className="h-12 w-13 object-contain" src="/kenya-coat-of-arms.png" alt="Coat of arms of Kenya" />
                        <span className="h-11 w-1 shrink-0 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
                        <span className="text-[20px] leading-none font-extrabold tracking-tight text-[#064e32]">Sauti Yako<small className="mt-1.5 block text-[9px] font-semibold tracking-[.08em] text-[#66736c]">PUBLIC SERVICE PORTAL</small></span>
                    </Link>
                    <button className="ml-auto grid place-items-center rounded p-2 text-[#064e32] sm:hidden" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                    <nav className={`${mobileOpen ? 'absolute top-[77px] right-0 left-0 z-10 flex flex-col border-b border-[#e2e9e4] bg-white px-4 py-2 shadow-lg sm:static sm:ml-auto sm:flex-row sm:items-center sm:border-0 sm:p-0 sm:shadow-none' : 'hidden sm:ml-auto sm:flex sm:items-center'} gap-2 sm:gap-5`} aria-label="Citizen navigation">
                        <Link className="inline-flex items-center gap-2 px-1 py-2 text-xs font-semibold text-[#526158] no-underline hover:text-[#006b3f]" href="/citizen"><Home size={16} />Home</Link>
                        <Link className="inline-flex items-center gap-2 px-1 py-2 text-xs font-semibold text-[#526158] no-underline hover:text-[#006b3f]" href="/citizen/requests/create"><FilePlus2 size={16} />Submit a request</Link>
                        <Link className="inline-flex items-center gap-2 px-1 py-2 text-xs font-semibold text-[#526158] no-underline hover:text-[#006b3f]" href="/citizen/requests"><FileText size={16} />My requests</Link>
                        <Link className="inline-flex items-center gap-2 px-1 py-2 text-xs font-semibold text-[#526158] no-underline hover:text-[#006b3f]" href="/citizen/notifications"><span className="relative"><Bell size={16} />{unreadNotifications > 0 && <span className="absolute -top-2 -right-2 grid min-h-4 min-w-4 place-items-center rounded-full bg-[#b42332] px-1 text-[9px] font-bold leading-none text-white" aria-label={`${unreadNotifications} unread notifications`}>{unreadNotifications > 99 ? '99+' : unreadNotifications}</span>}</span>Notifications</Link>
                        {auth.user?.is_admin && <Link className="inline-flex items-center gap-2 px-1 py-2 text-xs font-semibold text-[#526158] no-underline hover:text-[#006b3f]" href="/admin">Admin</Link>}
                    </nav>
                    {auth.user && <PortalProfileMenu name={name} email={auth.user.email} />}
                </div>
            </header>
            <main className="mx-auto min-h-[calc(100vh_-_154px)] w-[calc(100%_-_2rem)] max-w-5xl py-6 sm:w-[calc(100%_-_3rem)] sm:py-9">
                {backHref && <Link href={backHref} className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#496056] no-underline hover:text-[#006b3f]"><ChevronLeft size={19} />{backLabel}</Link>}
                {children}
            </main>
            <footer className="flex flex-col justify-between gap-2 border-t border-[#e2e9e4] bg-white px-4 py-4 text-[11px] text-[#6f7c73] sm:flex-row sm:px-6 lg:px-10 xl:px-20">Sauti Yako · Republic of Kenya <span className="text-[#8b968f]">Public service, together.</span></footer>
        </div>
    );
}
