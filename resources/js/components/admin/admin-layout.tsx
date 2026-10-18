import { Head, Link, usePage } from '@inertiajs/react';
import { Bell, FileText, LayoutDashboard, Menu, Users, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';

const navigation = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Service requests', href: '/admin/requests', icon: FileText },
    { label: 'Citizens', href: '/admin/citizens', icon: Users },
    { label: 'Notifications', href: '/admin/notifications', icon: Bell },
];

export default function AdminLayout({ title, children }: { title: string; children: ReactNode }) {
    const page = usePage<{ auth: { user: { name: string } }; unreadNotifications: number }>();
    const { auth, unreadNotifications } = page.props;
    const { url } = page;
    const [mobileOpen, setMobileOpen] = useState(false);
    const initials = auth.user.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase();
    const links = <nav className="space-y-1.5" aria-label="Admin navigation">{navigation.map(({ label, href, icon: Icon }) => {
        const active = href === '/admin' ? url === '/admin' : url.startsWith(href);
        return <Link key={href} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold no-underline transition ${active ? 'bg-[#e8f2eb] text-[#075d38]' : 'text-[#526158] hover:bg-[#f3f7f4] hover:text-[#075d38]'}`}><Icon size={17} strokeWidth={1.8} />{label}</Link>;
    })}</nav>;

    return <div className="min-h-screen bg-[#f5f8f5] font-sans text-[#18231d]">
        <Head title={`${title} · Sauti Yako Admin`} />
        <div className="h-1.5 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#e2e9e4] bg-white px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
                <button onClick={() => setMobileOpen(!mobileOpen)} className="grid size-9 place-items-center rounded-lg border border-[#dfe8e1] text-[#075d38] lg:hidden" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
                <Link href="/admin" className="flex items-center gap-3 no-underline">
                    <img src="/kenya-coat-of-arms.png" alt="Coat of arms of Kenya" className="h-10 w-10 object-contain" />
                    <span className="h-9 w-px bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
                    <span className="text-[17px] font-extrabold tracking-tight text-[#064e32]">Sauti Yako<span className="mt-0.5 block text-[9px] font-semibold tracking-[.11em] text-[#68766d]">ADMINISTRATION</span></span>
                </Link>
            </div>
            <div className="flex items-center gap-4"><Link href="/admin/notifications" aria-label={`Notifications${unreadNotifications ? `, ${unreadNotifications} unread` : ''}`} className="relative grid size-9 place-items-center rounded-lg text-[#526158] no-underline hover:bg-[#f3f7f4]"><Bell size={18} />{unreadNotifications > 0 && <span className="absolute -top-1 -right-1 grid min-h-4 min-w-4 place-items-center rounded-full bg-[#b42332] px-1 text-[9px] font-bold leading-none text-white">{unreadNotifications > 99 ? '99+' : unreadNotifications}</span>}</Link><span className="hidden items-center gap-2 text-xs font-medium text-[#66736c] sm:flex">Admin workspace</span><div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-full bg-[#e6f2ea] text-[11px] font-bold text-[#064e32]">{initials}</span><span className="hidden max-w-40 truncate text-xs font-semibold sm:inline">{auth.user.name}</span></div></div>
        </header>
        <div className="mx-auto flex min-h-[calc(100vh_-_78px)] max-w-[1440px]">
            <aside className="hidden w-[236px] shrink-0 border-r border-[#e2e9e4] bg-white px-4 py-6 lg:block"><div className="mb-3 px-3 text-[10px] font-bold tracking-[.14em] text-[#87938b]">ADMIN MENU</div>{links}<div className="mt-8 rounded-xl border border-[#e2e9e4] bg-[#f7faf7] p-4"><div className="text-xs font-bold text-[#244133]">Public Service Requests</div><p className="mb-0 mt-1.5 text-[11px] leading-5 text-[#718077]">Review reports and keep citizens informed as cases progress.</p></div></aside>
            {mobileOpen && <div className="fixed inset-0 z-20 bg-black/25 lg:hidden" onClick={() => setMobileOpen(false)}><aside className="h-full w-[270px] bg-white px-4 py-6 shadow-xl" onClick={(event) => event.stopPropagation()}><div className="mb-3 px-3 text-[10px] font-bold tracking-[.14em] text-[#87938b]">ADMIN MENU</div>{links}</aside></div>}
            <main className="min-w-0 flex-1 px-4 py-7 sm:px-6 lg:px-9 lg:py-8">{children}</main>
        </div>
    </div>;
}
