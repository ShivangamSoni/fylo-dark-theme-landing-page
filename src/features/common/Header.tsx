import { NavLinks } from "@data/Links";

import Logo from "@assets/Logo";

import WidthRestriction from "@layout/WidthRestriction";
import Link from "@components/Link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0">
            <WidthRestriction>
                <div className="flex items-center justify-between py-8 font-header">
                    <h1>
                        <span className="sr-only">Fylo</span>
                        <Logo aria-hidden />
                    </h1>
                    <nav>
                        <ul className="flex items-center gap-8">
                            {NavLinks.map(({ id, label, link }) => (
                                <li key={id}>
                                    <Link
                                        href={link}
                                        className="text-gray-400 hover:text-white focus-visible:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </WidthRestriction>
        </header>
    );
}
