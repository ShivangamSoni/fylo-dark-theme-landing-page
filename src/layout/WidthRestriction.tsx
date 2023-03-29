export default function WidthRestriction({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="mx-auto w-[min(90rem,96%)]">{children}</div>;
}
