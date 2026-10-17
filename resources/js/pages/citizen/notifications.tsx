import { Link } from '@inertiajs/react';
import { Bell, CheckCheck, CircleCheck, Clock3, Inbox } from 'lucide-react';
import { useEffect, useState } from 'react';
import PortalLayout from '@/components/citizen/portal-layout';

type CitizenNotification = { id: number; reference: string; category: string; status: 'Pending' | 'In Progress' | 'Resolved'; note: string | null; created_at: string; updated_at: string };
const dateLabel = (value: string) => new Intl.DateTimeFormat('en-KE', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));

export default function Notifications({ notifications }: { notifications: CitizenNotification[] }) {
    const [showAll, setShowAll] = useState(false);
    const [readIds, setReadIds] = useState<number[]>([]);
    useEffect(() => {
        try {
            const stored = window.localStorage.getItem('sauti-yako-read-notifications');
            if (stored) setReadIds(JSON.parse(stored) as number[]);
        } catch {
            window.localStorage.removeItem('sauti-yako-read-notifications');
        }
    }, []);
    const unread = notifications.some((item) => !readIds.includes(item.id));
    const markAllRead = () => {
        const ids = notifications.map((item) => item.id);
        window.localStorage.setItem('sauti-yako-read-notifications', JSON.stringify(ids));
        setReadIds(ids);
    };
    const visible = showAll ? notifications : notifications.slice(0, 4);
    return <PortalLayout title="Notifications" backHref="/citizen" backLabel="Back to dashboard">
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="m-0 text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-[#17251d]">Notifications</h1><p className="mt-2 text-sm text-[#66736c]">Updates about your service requests.</p></div>{notifications.length > 0 && <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cad8ce] bg-white px-3 py-2.5 text-[11px] font-bold text-[#006b3f] hover:bg-[#f3f8f4]" type="button" onClick={markAllRead}><CheckCheck size={15} />{unread ? 'Mark all as read' : 'All caught up'}</button>}</div>
        <section className="rounded-xl border border-[#e2e9e4] bg-white px-4 shadow-sm sm:px-5" aria-label="Notifications">{visible.length ? visible.map((item) => {
            const pending = item.status === 'Pending'; const resolved = item.status === 'Resolved'; const title = pending ? 'Request received' : resolved ? 'Request resolved' : 'Request in progress';
            return <article className="grid grid-cols-[36px_minmax(0,1fr)] items-start gap-3 border-b border-[#e2e9e4] py-4 last:border-0 sm:grid-cols-[38px_minmax(0,1fr)_auto] sm:gap-3.5" key={item.id}><span className={`grid size-9 place-items-center rounded-xl ${pending ? 'bg-[#fff5df] text-[#9b6b00]' : resolved ? 'bg-[#eaf4ed] text-[#006b3f]' : 'bg-[#eaf1fb] text-[#34619a]'}`}>{resolved ? <CircleCheck size={18} /> : pending ? <Bell size={17} /> : <Clock3 size={18} />}</span><div className="text-[13px] leading-relaxed text-[#304038]"><strong className="text-[#18271f]">{title}</strong>{!readIds.includes(item.id) && <span className="ml-2 inline-block size-1.5 rounded-full bg-[#087b49] align-middle" aria-label="Unread" />}<br />{item.note || (pending ? `Your ${item.category.toLowerCase()} request ${item.reference} was received and is pending review.` : `There is an update to your ${item.category.toLowerCase()} request ${item.reference}.`)}<br /><Link href="/citizen/requests" className="font-bold text-[#006b3f] no-underline">View request →</Link></div><time className="col-start-2 text-[11px] text-[#7c8981] sm:col-start-auto sm:whitespace-nowrap">{dateLabel(item.updated_at || item.created_at)}</time></article>;
        }) : <div className="px-5 py-11 text-center"><span className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-[#eaf4ed] text-[#006b3f]"><Inbox size={21} /></span><h2 className="m-0 text-[17px] font-bold">You’re all caught up</h2><p className="mx-auto mb-4 mt-2 max-w-sm text-xs text-[#66736c]">Updates about your service requests will appear here.</p><Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cad8ce] bg-white px-3 py-2.5 text-[11px] font-bold text-[#006b3f] no-underline hover:bg-[#f3f8f4]" href="/citizen/requests"><Bell size={15} /> View my requests</Link></div>}</section>
        {notifications.length > 4 && <button className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-[#cad8ce] bg-white px-4 py-2.5 text-[11px] font-bold text-[#006b3f] hover:bg-[#f3f8f4]" type="button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show fewer notifications' : 'View more notifications'}</button>}
    </PortalLayout>;
}
