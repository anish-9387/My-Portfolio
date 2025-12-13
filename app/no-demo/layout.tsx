import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

export default function NoDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}