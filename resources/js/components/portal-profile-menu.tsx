import { Link, router } from '@inertiajs/react';
import { LogOut, UserRound } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/routes';

type Props = { name: string; email: string };

export default function PortalProfileMenu({ name, email }: Props) {
    const initials = name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    aria-label={'Open profile menu for ' + name}
                    className="ml-1 inline-flex items-center gap-2 rounded-full p-1 pr-2 text-xs font-semibold text-[#26372d] outline-none hover:bg-[#f2f7f3] focus-visible:ring-2 focus-visible:ring-[#087a45]"
                >
                    <span className="grid size-9 place-items-center rounded-full bg-[#e6f2ea] text-[11px] font-bold text-[#064e32]">
                        {initials || <UserRound size={16} />}
                    </span>
                    <span className="hidden max-w-36 truncate md:inline">{name}</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom" className="w-64 rounded-xl border border-[#e2e9e4] bg-white p-1.5 shadow-lg">
                <DropdownMenuLabel className="px-3 py-2.5 font-normal">
                    <span className="block truncate text-sm font-semibold text-[#26372d]">{name}</span>
                    <span className="mt-0.5 block truncate text-xs text-[#718077]">{email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#e7ede8]" />
                <DropdownMenuItem asChild>
                    <Link
                        href={logout()}
                        as="button"
                        onClick={() => router.flushAll()}
                        className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#a12632] focus:bg-[#fff2f2] focus:text-[#a12632]"
                    >
                        <LogOut size={16} />
                        Log out
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
