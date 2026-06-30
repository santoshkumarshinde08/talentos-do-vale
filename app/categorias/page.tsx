export default function Categorias() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Categorias do Evento
      </h1>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "22px" }}>
        <li style={{ margin: "15px 0" }}>🎤 Música</li>
        <li style={{ margin: "15px 0" }}>🎙️ Cantores</li>
        <li style={{ margin: "15px 0" }}>💃 Dança</li>
        <li style={{ margin: "15px 0" }}>🎭 Teatro</li>
        <li style={{ margin: "15px 0" }}>🎨 Artes Visuais</li>
        <li style={{ margin: "15px 0" }}>🤸 Esportes</li>
        <li style={{ margin: "15px 0" }}>📚 Literatura</li>
        <li style={{ margin: "15px 0" }}>🎬 Vídeo & Cinema</li>
      </ul>
    </div>
  );
}
