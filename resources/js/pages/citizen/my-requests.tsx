import { Link, usePage } from '@inertiajs/react';
import { FilePlus2, Inbox } from 'lucide-react';
import { useMemo, useState } from 'react';
import PortalLayout from '@/components/citizen/portal-layout';

type ServiceRequest = { id: number; reference: string; category: string; county: string; location: string; status: 'Pending' | 'In Progress' | 'Resolved'; created_at: string };
type Props = { requests: ServiceRequest[]; flash: { success?: string | null } };
const dateLabel = (value: string) => new Intl.DateTimeFormat('en-KE', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));

export default function MyRequests({ requests }: Props) {
    const { flash } = usePage<Props>().props;
    const [filter, setFilter] = useState<'All' | 'Open' | 'Resolved'>('All');
    const visible = useMemo(() => requests.filter((item) => filter === 'All' || (filter === 'Open' ? item.status !== 'Resolved' : item.status === 'Resolved')), [requests, filter]);
    const open = requests.filter((item) => item.status !== 'Resolved').length;
    const resolved = requests.length - open;
    return <PortalLayout title="My requests" backHref="/citizen" backLabel="Back to dashboard">
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="m-0 text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-[#17251d]">My requests</h1><p className="mt-2 text-sm text-[#66736c]">Track the progress of the service issues you’ve reported.</p></div><Link href="/citizen/requests/create" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006b3f] px-4 py-2.5 text-xs font-bold text-white no-underline hover:bg-[#064e32]"><FilePlus2 size={15} /> New request</Link></div>
        {flash?.success && <div className="mb-4 rounded-lg border border-[#b5ddc1] bg-[#eef8f0] px-3.5 py-3 text-[13px] text-[#175f36]" role="status">{flash.success}</div>}
        <div className="my-5 flex gap-2" role="group" aria-label="Filter requests">{(['All', 'Open', 'Resolved'] as const).map((item) => <button key={item} type="button" className={`rounded-full border px-3 py-2 text-xs ${filter === item ? 'border-[#bfd6c5] bg-[#e8f3eb] font-bold text-[#064e32]' : 'border-[#dce5de] bg-white text-[#53645a]'}`} onClick={() => setFilter(item)}>{item} <span className="opacity-70">{item === 'All' ? requests.length : item === 'Open' ? open : resolved}</span></button>)}</div>
        <p className="mb-2.5 text-xs text-[#66736c]">Showing {visible.length} {visible.length === 1 ? 'request' : 'requests'}</p>
        <section className="rounded-xl border border-[#e2e9e4] bg-white px-4 shadow-sm sm:px-5" aria-label="Your service requests">{visible.length ? visible.map((item) => <Link href={`/citizen/requests/${item.id}`} className="flex flex-col justify-between gap-3 border-b border-[#e2e9e4] py-4 no-underline last:border-0 hover:bg-[#fbfdfb] sm:flex-row sm:items-center" key={item.id}><div><div className="text-sm font-bold text-[#21332a]">{item.category} request <span className="font-medium text-[#718078]">· {item.reference}</span></div><div className="mt-1.5 text-[11px] leading-relaxed text-[#66736c]">{item.location}, {item.county} County · Submitted {dateLabel(item.created_at)}</div><div className="mt-2 text-[10px] font-bold text-[#006b3f]">View request →</div></div><span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-bold ${item.status === 'Pending' ? 'bg-[#fff4d9] text-[#896400]' : item.status === 'Resolved' ? 'bg-[#e6f4eb] text-[#176b43]' : 'bg-[#e9f2fd] text-[#28619b]'}`}><span className="size-1.5 rounded-full bg-current" />{item.status}</span></Link>) : <div className="px-5 py-11 text-center"><span className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-[#eaf4ed] text-[#006b3f]"><Inbox size={21} /></span><h2 className="m-0 text-[17px] font-bold">{requests.length ? 'No requests in this filter' : 'No service requests yet'}</h2><p className="mx-auto mb-4 mt-2 max-w-sm text-xs text-[#66736c]">{requests.length ? 'Choose another status filter to see your requests.' : 'When you report a community issue, you can follow its progress here.'}</p>{!requests.length && <Link className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006b3f] px-4 py-2.5 text-xs font-bold text-white no-underline hover:bg-[#064e32]" href="/citizen/requests/create"><FilePlus2 size={15} /> Submit a request</Link>}</div>}</section>
        <div className="mt-3 text-[11px] text-[#66736c]">Status updates also appear in your notifications.</div>
    </PortalLayout>;
}
