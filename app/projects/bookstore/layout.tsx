export default function BookstoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[oklch(0.23_0.04_266)] text-slate-50">
      {/* hero khusus bookstore */}
      {children}
    </div>
  );
}