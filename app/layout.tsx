import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talentos do Vale",
  description: "Festival de talentos do Vale do Paraíba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            background: "#222",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Talentos do Vale
        </header>

        <nav
          style={{
            background: "#444",
            padding: "10px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="/sobre" style={{ color: "#fff", textDecoration: "none" }}>Sobre</a>
          <a href="/categorias" style={{ color: "#fff", textDecoration: "none" }}>Categorias</a>
          <a href="/inscricoes" style={{ color: "#fff", textDecoration: "none" }}>Inscrições</a>
          <a href="/contato" style={{ color: "#fff", textDecoration: "none" }}>Contato</a>
        </nav>

        <main style={{ padding: "40px" }}>{children}</main>

        <footer
          style={{
            background: "#222",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          © 2026 Talentos do Vale — Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
