export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-brand-red" : "text-brand-red"
      }`}
    >
      {children}
    </p>
  );
}
