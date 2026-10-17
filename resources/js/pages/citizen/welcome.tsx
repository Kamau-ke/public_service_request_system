import { Head, Link, usePage } from '@inertiajs/react';

type Props = { auth: { user: { name: string } | null } };

export default function Welcome() {
    const { auth } = usePage<Props>().props;
    return <div className="min-h-screen bg-[#f5f8f5] font-sans text-[#18231d]">
        <Head title="Sauti Yako · Public Service Portal" />
        <div className="h-1.5 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" />
        <header className="border-b border-[#e2e9e4] bg-white"><div className="mx-auto flex min-h-[78px] max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
            <Link href="/" className="flex min-w-0 items-center gap-3 text-inherit no-underline" aria-label="Sauti Yako home"><img className="h-12 w-13 object-contain" src="/kenya-coat-of-arms.png" alt="Coat of arms of Kenya" /><span className="h-11 w-1 shrink-0 bg-[linear-gradient(to_bottom,#111_0_33.33%,#bb1e2d_33.33%_66.66%,#087a45_66.66%)]" /><span className="text-[20px] leading-none font-extrabold tracking-tight text-[#064e32]">Sauti Yako<small className="mt-1.5 block text-[9px] font-semibold tracking-[.08em] text-[#66736c]">PUBLIC SERVICE PORTAL</small></span></Link>
            <div className="ml-auto flex items-center gap-2"><Link href={auth.user ? '/citizen' : '/login'} className="inline-flex items-center justify-center rounded-lg border border-[#cad8ce] bg-white px-3 py-2.5 text-[11px] font-bold text-[#006b3f] no-underline hover:bg-[#f3f8f4]">{auth.user ? 'My portal' : 'Log in'}</Link>{!auth.user && <Link href="/register" className="inline-flex items-center justify-center rounded-lg bg-[#006b3f] px-3 py-2.5 text-[11px] font-bold text-white no-underline hover:bg-[#064e32]">Create account</Link>}</div>
        </div></header>
        <main className="mx-auto w-[calc(100%_-_2rem)] max-w-5xl py-14 sm:w-[calc(100%_-_3rem)] sm:py-20">
            <span className="text-[10px] font-bold tracking-[.13em] text-[#006b3f]">REPUBLIC OF KENYA · CITIZEN SERVICES</span>
            <h1 className="mt-5 text-[clamp(48px,8vw,80px)] leading-[.98] font-extrabold tracking-[-.04em] text-[#17251d]">Your community.<br /><span className="text-[#006b3f]">Your voice.</span></h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#66736c] sm:text-[17px]">Report local service issues, follow their progress and help make public services work better for everyone.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5"><Link href={auth.user ? '/citizen' : '/login'} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006b3f] px-4 py-3 text-xs font-bold text-white no-underline hover:bg-[#064e32]">{auth.user ? 'Open my portal' : 'Get started'} <span aria-hidden="true">→</span></Link><Link href="/register" className="text-xs font-bold text-[#006b3f] no-underline">Create a citizen account</Link></div>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-[72px] sm:grid-cols-3"><article className="rounded-xl border border-[#e2e9e4] bg-white p-5"><span className="text-[10px] font-bold text-[#006b3f]">01</span><h2 className="mt-3 mb-1.5 text-[15px] font-bold">Report an issue</h2><p className="m-0 text-xs leading-relaxed text-[#66736c]">Send a service request with its location and an optional photo.</p></article><article className="rounded-xl border border-[#e2e9e4] bg-white p-5"><span className="text-[10px] font-bold text-[#006b3f]">02</span><h2 className="mt-3 mb-1.5 text-[15px] font-bold">Track progress</h2><p className="m-0 text-xs leading-relaxed text-[#66736c]">See when a request is pending, being handled or resolved.</p></article><article className="rounded-xl border border-[#e2e9e4] bg-white p-5"><span className="text-[10px] font-bold text-[#006b3f]">03</span><h2 className="mt-3 mb-1.5 text-[15px] font-bold">Stay informed</h2><p className="m-0 text-xs leading-relaxed text-[#66736c]">Get updates and find all your reports in one place.</p></article></div>
        </main>
        <footer className="flex flex-col justify-between gap-2 border-t border-[#e2e9e4] bg-white px-4 py-4 text-[11px] text-[#6f7c73] sm:flex-row sm:px-6 lg:px-10 xl:px-20">Sauti Yako · Republic of Kenya <span className="text-[#8b968f]">Public service, together.</span></footer>
    </div>;
}
