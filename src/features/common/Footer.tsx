import { FooterLinks } from "@data/Links";

import {
    FaFacebookF as FacebookIcon,
    FaTwitter as TwitterIcon,
    FaInstagram as InstagramIcon,
} from "react-icons/fa";
import { Location, Phone, Email } from "@assets/Icons";
import Logo from "@assets/Logo";

import WidthRestriction from "@layout/WidthRestriction";
import Link from "@components/Link";

export default function Footer() {
    return (
        <footer className="py-20 pt-60 bg-primary-darkBlue-700">
            <WidthRestriction>
                <h2 className="mb-8">
                    <span className="sr-only">Fylo</span>
                    <Logo aria-hidden />
                </h2>

                <div className="grid grid-cols-[2fr_repeat(3,minmax(0,1fr))] gap-8">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 items-start justify-start">
                        <Location />
                        <p className="text-xl w-10/12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Link variant="no-underline">
                            <Phone className="inline mr-4" />
                            +1-543-123-4567
                        </Link>
                        <Link variant="no-underline">
                            <Email className="inline mr-4" />
                            example@fylo.com
                        </Link>
                    </div>

                    <nav className="grid grid-cols-2 items-start gap-4">
                        {FooterLinks.map((links, idx) => (
                            <div key={idx} className="grid gap-6">
                                {links.map(({ id, label, link }) => (
                                    <Link
                                        key={id}
                                        href={link}
                                        variant="no-underline"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-start justify-evenly">
                        <Link
                            variant="no-underline"
                            className="flex items-center justify-center p-2 ring-1 ring-current rounded-full hover:ring-2"
                        >
                            <span className="sr-only">Our Facebook Page</span>
                            <FacebookIcon />
                        </Link>
                        <Link
                            variant="no-underline"
                            className="flex items-center justify-center p-2 ring-1 ring-current rounded-full hover:ring-2"
                        >
                            <span className="sr-only">Our Twitter Profile</span>
                            <TwitterIcon />
                        </Link>
                        <Link
                            variant="no-underline"
                            className="flex items-center justify-center p-2 ring-1 ring-current rounded-full hover:ring-2"
                        >
                            <span className="sr-only">Our Instagram</span>
                            <InstagramIcon />
                        </Link>
                    </div>
                </div>
            </WidthRestriction>
        </footer>
    );
}
