import { Form } from '@inertiajs/react';
import { ImagePlus, Send } from 'lucide-react';
import InputError from '@/components/input-error';
import PortalLayout from '@/components/citizen/portal-layout';

const categories = ['Streetlight', 'Water supply', 'Garbage collection', 'Road damage', 'Other'];
const counties = ['Nairobi', 'Mombasa', 'Kiambu', 'Nakuru', 'Kisumu', 'Uasin Gishu', 'Other'];
const label = 'mb-1.5 block text-[13px] font-semibold text-[#26372d]';
const field = 'w-full rounded-lg border border-[#d6e0d8] bg-white px-3 py-2.5 text-[13px] text-[#18231d] outline-none focus:border-[#006b3f] focus:ring-2 focus:ring-[#006b3f]/15';
const hint = 'mt-1.5 text-[11px] leading-relaxed text-[#66736c]';

export default function SubmitRequest() {
    return (
        <PortalLayout title="Submit a request">
            <div className="mb-5 flex items-end justify-between gap-4"><div><h1 className="m-0 text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-[#17251d]">Submit a service request</h1><p className="mt-2 text-sm text-[#66736c]">Tell us what needs attention. Your report will be sent to the right response team.</p></div></div>
            <Form action="/citizen/requests" method="post" encType="multipart/form-data" className="max-w-[790px] rounded-xl border border-[#e2e9e4] bg-white p-5 shadow-sm sm:p-7">
                {({ errors, processing }) => <>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                        <div><label className={label} htmlFor="category">Service category <span className="text-[#bb1e2d]">*</span></label><select className={field} id="category" name="category" required defaultValue=""><option value="" disabled>Select a category</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><InputError message={errors.category} className="mt-1.5 text-[11px] text-red-700" /></div>
                        <div><label className={label} htmlFor="county">County <span className="text-[#bb1e2d]">*</span></label><select className={field} id="county" name="county" required defaultValue=""><option value="" disabled>Select your county</option>{counties.map((item) => <option key={item}>{item}</option>)}</select><InputError message={errors.county} className="mt-1.5 text-[11px] text-red-700" /></div>
                        <div className="sm:col-span-2"><label className={label} htmlFor="location">Specific location <span className="text-[#bb1e2d]">*</span></label><input className={field} id="location" name="location" required maxLength={255} placeholder="Street, estate, landmark or nearest building" /><div className={hint}>A nearby landmark helps the response team find the issue.</div><InputError message={errors.location} className="mt-1.5 text-[11px] text-red-700" /></div>
                        <div className="sm:col-span-2"><label className={label} htmlFor="description">Describe the issue <span className="text-[#bb1e2d]">*</span></label><textarea className={`${field} min-h-28 resize-y`} id="description" name="description" required maxLength={5000} placeholder="What happened, and when did you first notice it?" /><div className={hint}>Include useful details. Please do not include sensitive personal information.</div><InputError message={errors.description} className="mt-1.5 text-[11px] text-red-700" /></div>
                        <div className="sm:col-span-2"><label className={label} htmlFor="image">Photo evidence <span className="font-normal text-[#77847c]">(optional)</span></label><div className="flex items-center gap-3 rounded-lg border border-dashed border-[#b7c8bc] bg-[#fbfdfb] p-4"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#e9f4ec] text-[#006b3f]"><ImagePlus size={18} /></span><div className="min-w-0"><input className="max-w-full text-xs text-[#526158] file:mr-3 file:rounded-md file:border-0 file:bg-[#e9f4ec] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#006b3f]" id="image" type="file" name="image" accept="image/jpeg,image/png,image/webp" /><div className={hint}>Attach a clear photo · JPG, PNG or WebP, up to 10 MB</div></div></div><InputError message={errors.image} className="mt-1.5 text-[11px] text-red-700" /></div>
                    </div>
                    <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#e2e9e4] pt-5 sm:flex-row sm:items-center"><span className="max-w-sm text-[11px] leading-relaxed text-[#66736c]">Your contact details are shared only with the team handling this request.</span><button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006b3f] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#064e32] disabled:cursor-wait disabled:opacity-60" type="submit" disabled={processing}>{processing ? 'Submitting…' : <>Submit request <Send size={15} /></>}</button></div>
                </>}
            </Form>
            <aside className="mt-3 max-w-[790px] rounded-lg bg-[#edf6ef] px-4 py-3 text-xs leading-relaxed text-[#3d5948]"><strong>What happens next?</strong> You’ll receive a reference number and can track your request as it moves from Pending to In Progress and Resolved.</aside>
        </PortalLayout>
    );
}
