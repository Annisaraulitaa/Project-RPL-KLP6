import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
