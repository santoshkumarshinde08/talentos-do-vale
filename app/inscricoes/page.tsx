export default function Inscricoes() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Inscrições Abertas
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
        Para participar do Talentos do Vale, preencha o formulário de inscrição
        com seus dados e escolha a categoria desejada.
      </p>

      <a
        href="/inscricoes/formulario"
        style={{
          display: "inline-block",
          marginTop: "40px",
          background: "#0070f3",
          color: "#fff",
          padding: "15px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Preencher Formulário
      </a>
    </div>
  );
}
