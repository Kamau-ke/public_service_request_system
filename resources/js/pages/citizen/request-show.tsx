import { Link } from '@inertiajs/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import PortalLayout from '@/components/citizen/portal-layout';

type ServiceRequest = {
    reference: string;
    category: string;
    county: string;
    location: string;
    description: string;
    image_url: string | null;
    status: 'Pending' | 'In Progress' | 'Resolved';
    status_note: string | null;
    created_at: string;
    updated_at: string;
};

const statusStyle = (status: ServiceRequest['status']) => status === 'Resolved'
    ? 'bg-[#e6f4eb] text-[#176b43]'
    : status === 'Pending' ? 'bg-[#fff4d9] text-[#896400]' : 'bg-[#e9f2fd] text-[#28619b]';

const dateLabel = (value: string) => new Intl.DateTimeFormat('en-KE', {
    day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit',
}).format(new Date(value));

export default function CitizenRequestShow({ serviceRequest: item }: { serviceRequest: ServiceRequest }) {
    return <PortalLayout title={`Request ${item.reference}`} backHref="/citizen/requests" backLabel="Back to my requests">
        <div className="mb-5 text-[11px] font-semibold text-[#718077]">MY REQUESTS / {item.reference}</div>
        <div className="mb-6 flex flex-wrap items-center gap-3">
            <h1 className="m-0 text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-[#17251d]">{item.category} request</h1>
            <span className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold ${statusStyle(item.status)}`}>{item.status}</span>
        </div>
        <p className="-mt-4 mb-5 text-xs text-[#66736c]">Reference <span className="font-semibold text-[#35453b]">{item.reference}</span> · Submitted {dateLabel(item.created_at)}</p>
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,.7fr)]">
            <section className="rounded-xl border border-[#e2e9e4] bg-white p-5 shadow-sm sm:p-6">
                <h2 className="m-0 text-base font-bold text-[#24362b]">Request details</h2>
                <div className="mt-5 rounded-lg bg-[#f7faf7] p-3.5">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-[#829087]">Location</div>
                    <div className="mt-2 flex items-start gap-2 text-sm font-medium text-[#35453b]"><MapPin size={16} className="mt-0.5 shrink-0 text-[#087a45]" /><span>{item.location}<span className="block text-xs font-normal text-[#748078]">{item.county} County</span></span></div>
                </div>
                <div className="mt-5"><div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#829087]">Description</div><p className="m-0 whitespace-pre-wrap text-sm leading-6 text-[#35453b]">{item.description}</p></div>
                {item.image_url && <div className="mt-5"><div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#829087]">Attached photo</div><a href={item.image_url} target="_blank" rel="noreferrer"><img src={item.image_url} alt="Photo attached to your service request" className="max-h-[420px] w-full rounded-lg border border-[#e2e9e4] object-cover sm:w-auto sm:max-w-full" /></a></div>}
            </section>
            <aside className="space-y-5">
                <section className="rounded-xl border border-[#e2e9e4] bg-white p-5 shadow-sm">
                    <h2 className="m-0 text-base font-bold text-[#24362b]">Progress update</h2>
                    <p className="mb-0 mt-3 text-sm text-[#35453b]">{item.status_note || (item.status === 'Resolved' ? 'This request has been resolved.' : 'Your request is in the queue. We’ll notify you when there is an update.')}</p>
                    <div className="mt-4 border-t border-[#e7ede8] pt-3 text-[11px] text-[#748078]">Last updated {dateLabel(item.updated_at)}</div>
                </section>
                <Link href="/citizen/notifications" className="inline-flex items-center gap-2 text-xs font-bold text-[#006b3f] no-underline hover:underline"><ArrowLeft size={14} className="rotate-180" />View notifications</Link>
            </aside>
        </div>
    </PortalLayout>;
}
