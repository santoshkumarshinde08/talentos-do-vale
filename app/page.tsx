export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Bem-vindo ao Talentos do Vale
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
        O maior festival de talentos do Vale do Paraíba! Música, dança, teatro,
        artes, esportes e muito mais. Venha mostrar o seu talento para toda a região.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="/inscricoes"
          style={{
            background: "#0070f3",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "20px",
            marginRight: "20px",
          }}
        >
          Fazer Inscrição
        </a>

        <a
          href="/categorias"
          style={{
            background: "#444",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Ver Categorias
        </a>
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Sobre o Evento
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          O Talentos do Vale é um evento criado para incentivar artistas, atletas
          e criadores da região. Aqui você encontra oportunidades, visibilidade e
          uma comunidade apaixonada por cultura e criatividade.
        </p>
      </div>
    </div>
  );
}
