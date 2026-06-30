"use client";

import { useState } from "react";

export default function Formulario() {
  const [visaoCultural, setVisaoCultural] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <div
      style={{
        backgroundImage: "url('/fundo-talentos.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.70)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Formulário de Inscrição
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Preencha todas as informações e envie os vídeos obrigatórios.
        </p>

        <form
  action="https://script.google.com/macros/s/AKfycbx2Sa3j-TNL291ZtY3NaGQX4dPZ4h2qT4gyIPtXdEEfcoYQhuvnkx6OcLXTix1yMUfZ/exec
"
  method="POST"
  encType="multipart/form-data"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: "left",
          }}
        >
          <label>
            Nome Completo:
            <input type="text" name="nome" required style={inputStyle} />
          </label>

          <label>
            Data de Nascimento:
            <input type="date" name="nascimento" required style={inputStyle} />
          </label>

          <label>
            Telefone / WhatsApp:
            <input type="text" name="telefone" required style={inputStyle} />
          </label>

          <label>
            Email:
            <input type="email" name="email" required style={inputStyle} />
          </label>

          <label>
            Categoria de Inscrição:
            <select
              required
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={inputStyle}
            >
              <option value="">Selecione...</option>
              <option value="musica">🎵 Música</option>
              <option value="cantores">🎤 Cantores</option>
              <option value="danca">💃 Dança</option>
              <option value="teatro">🎭 Teatro</option>
              <option value="artes_visuais">🎨 Artes Visuais</option>
              <option value="esportes">🤸 Esportes</option>
              <option value="literatura">📚 Literatura</option>
              <option value="video_cinema">🎬 Vídeo & Cinema</option>
            </select>
          </label>

          <label>
            Interesses pessoais:
            <input type="text" name="interesses" required style={inputStyle} />
          </label>

          <label>
            Educação e Qualificação:
            <input type="text" name="educacao" required style={inputStyle} />
          </label>

          <label>
            Ocupação:
            <input type="text" name="ocupacao" required style={inputStyle} />
          </label>

          <label>
            Instagram (link):
            <input type="url" name="instagram" style={inputStyle} />
          </label>

          <label>
            TikTok (link):
            <input type="url" name="tiktok" style={inputStyle} />
          </label>

          <label>
            Facebook (link):
            <input type="url" name="facebook" style={inputStyle} />
          </label>

          <label>
            O que cultura e talento representam para você?
            <textarea
              maxLength={1000}
              required
              name="visaoCultural"
              value={visaoCultural}
              onChange={(e) => setVisaoCultural(e.target.value)}
              style={{
                ...inputStyle,
                height: "120px",
                resize: "vertical",
              }}
            />
            <div style={{ fontSize: "14px", color: "#333" }}>
              {visaoCultural.length}/1000 caracteres
            </div>
          </label>

          <label>
            Vídeo de Apresentação (50 segundos):
            <input
              type="file"
              name="introVideo"
              accept="video/mp4, video/webm, video/ogg"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Vídeo de Talento (50 segundos):
            <input
              type="file"
              name="talentVideo"
              accept="video/mp4, video/webm, video/ogg"
              required
              style={inputStyle}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              background: "#0070f3",
              color: "#fff",
              padding: "15px",
              borderRadius: "8px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Enviar Inscrição
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontWeight: "bold",
};
