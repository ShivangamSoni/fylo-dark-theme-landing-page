export default function WidthRestriction({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="mx-auto w-[min(90rem,100%)]">{children}</div>;
}
