import Background from "@/components/Background";

export default function NoDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}