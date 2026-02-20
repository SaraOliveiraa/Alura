import Logo from "./componentes/logo/index.jsx";
import perfilIcone from "./image/perfil.svg";
import sacolaIcone from "./image/sacola.svg";
import livroImg from "./image/livro.png";
import livro2Img from "./image/livro2.png";
import styled from "styled-components";

/* ===== Variáveis ===== */
const cores = {
  primaria: "#002f52",
  secundaria: "#33a8db",
  destaque: "#eb9b00",
  fundo: "#f5f5f5",
  texto: "#333333",
  textoClaro: "#666666",
  branco: "#ffffff",
};

/* ===== Layout Principal ===== */
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${cores.fundo};
  font-family: "Poppins", sans-serif;
  color: ${cores.texto};
`;

/* ===== Header ===== */
const Header = styled.header`
  background-color: ${cores.primaria};
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    position: relative;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${cores.destaque};
      transition: width 0.3s;
    }

    &:hover {
      color: ${cores.destaque};
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const HeaderAcoes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BuscaContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 0.4rem 1rem;
  transition: background-color 0.3s;

  &:focus-within {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const BuscaIcone = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const BuscaInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${cores.branco};
  font-size: 0.85rem;
  width: 140px;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    width: 200px;
  }

  transition: width 0.3s;

  @media (max-width: 600px) {
    width: 80px;
    &:focus {
      width: 120px;
    }
  }
`;

const HeaderIcone = styled.img`
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition:
    transform 0.2s,
    filter 0.3s;

  &:hover {
    transform: scale(1.15);
    filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(15deg);
  }
`;

/* ===== Hero ===== */
const HeroSection = styled.section`
  background: linear-gradient(135deg, ${cores.primaria} 0%, #004a7c 50%, ${cores.secundaria} 100%);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(235, 155, 0, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroConteudo = styled.div`
  flex: 1;
`;

const HeroSubtitulo = styled.p`
  color: ${cores.destaque};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const HeroTitulo = styled.h1`
  font-family: "Playfair Display", serif;
  color: ${cores.branco};
  font-size: 3rem;
  line-height: 1.15;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const HeroDescricao = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 900px) {
    margin: 0 auto 2rem;
  }
`;

const HeroBotao = styled.button`
  background-color: ${cores.destaque};
  color: ${cores.branco};
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.3s;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #d48a00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(235, 155, 0, 0.4);
  }
`;

const HeroImagem = styled.div`
  flex-shrink: 0;

  img {
    width: 320px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s;

    &:hover {
      transform: rotate(-2deg) scale(1.03);
    }
  }

  @media (max-width: 900px) {
    img {
      width: 240px;
    }
  }
`;

/* ===== Categorias ===== */
const CategoriasSection = styled.section`
  background-color: ${cores.branco};
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e8e8e8;
`;

const CategoriasContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.secundaria};
    border-radius: 3px;
  }
`;

const CategoriaBtn = styled.button`
  background-color: transparent;
  border: 2px solid #ddd;
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;
  font-family: "Poppins", sans-serif;
  color: ${cores.textoClaro};

  &:hover,
  &.ativa {
    background-color: ${cores.primaria};
    color: ${cores.branco};
    border-color: ${cores.primaria};
  }
`;

/* ===== Seção de Livros ===== */
const SecaoLivros = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SecaoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const SecaoTitulo = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: ${cores.primaria};
`;

const SecaoVerMais = styled.a`
  color: ${cores.secundaria};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;

  &:hover {
    color: ${cores.primaria};
  }
`;

/* ===== Grid de Livros ===== */
const LivrosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
`;

/* ===== Card de Livro ===== */
const LivroCardContainer = styled.article`
  background-color: ${cores.branco};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }
`;

const LivroCapa = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #e8f4f8, #f0f0f0);
  padding: 2rem;
  display: flex;
  justify-content: center;

  img {
    width: 140px;
    height: auto;
    transition: transform 0.4s;
  }

  ${LivroCardContainer}:hover & img {
    transform: scale(1.08);
  }
`;

const LivroTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${cores.branco};

  background-color: ${(props) => (props.$tipo === "novo" ? cores.secundaria : "#e74c3c")};
`;

const LivroInfo = styled.div`
  padding: 1.25rem;
`;

const LivroCategoria = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${cores.secundaria};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const LivroNome = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${cores.primaria};
  margin-bottom: 0.3rem;
  line-height: 1.3;
`;

const LivroAutor = styled.p`
  font-size: 0.8rem;
  color: ${cores.textoClaro};
  margin-bottom: 1rem;
`;

const LivroPrecoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const LivroPrecoAntigo = styled.span`
  font-size: 0.8rem;
  color: #aaa;
  text-decoration: line-through;
`;

const LivroPreco = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${cores.destaque};
`;

const LivroBotao = styled.button`
  width: 100%;
  background-color: ${cores.primaria};
  color: ${cores.branco};
  border: none;
  padding: 0.7rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: ${cores.secundaria};
  }
`;

/* ===== Seção Destaque ===== */
const SecaoDestaque = styled.section`
  background: linear-gradient(135deg, ${cores.primaria}, #004a7c);
  padding: 5rem 2rem;
`;

const DestaqueContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DestaqueImagem = styled.div`
  img {
    width: 280px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 900px) {
    img {
      width: 200px;
    }
  }
`;

const DestaqueConteudo = styled.div`
  flex: 1;
`;

const DestaqueLabel = styled.p`
  color: ${cores.destaque};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const DestaqueTitulo = styled.h2`
  font-family: "Playfair Display", serif;
  color: ${cores.branco};
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const DestaqueAutor = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const DestaqueDescricao = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const DestaqueBotao = styled.button`
  background-color: ${cores.destaque};
  color: ${cores.branco};
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.3s;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #d48a00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(235, 155, 0, 0.4);
  }
`;

/* ===== Newsletter ===== */
const NewsletterSection = styled.section`
  background-color: ${cores.branco};
  padding: 4rem 2rem;
  text-align: center;
`;

const NewsletterContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NewsletterTitulo = styled.h2`
  font-family: "Playfair Display", serif;
  color: ${cores.primaria};
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const NewsletterDescricao = styled.p`
  color: ${cores.textoClaro};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.9rem 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: ${cores.secundaria};
  }
`;

const NewsletterBotao = styled.button`
  background-color: ${cores.primaria};
  color: ${cores.branco};
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;

  &:hover {
    background-color: ${cores.secundaria};
  }
`;

/* ===== Footer ===== */
const FooterContainer = styled.footer`
  background-color: ${cores.primaria};
  color: rgba(255, 255, 255, 0.7);
  padding: 3rem 2rem 1.5rem;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    color: ${cores.branco};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s;

    &:hover {
      color: ${cores.destaque};
    }
  }
`;

const FooterInferior = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`;

/* ===== Dados ===== */
const livros = [
  {
    id: 1,
    nome: "React: Aprenda Praticando",
    autor: "Juliana Amoasei",
    categoria: "Front-end",
    preco: "R$ 49,90",
    precoAntigo: "R$ 69,90",
    tag: "novo",
    imagem: livroImg,
  },
  {
    id: 2,
    nome: "JavaScript: O Guia Definitivo",
    autor: "David Flanagan",
    categoria: "Programação",
    preco: "R$ 59,90",
    precoAntigo: null,
    tag: null,
    imagem: livro2Img,
  },
  {
    id: 3,
    nome: "Python para Data Science",
    autor: "Guilherme Silveira",
    categoria: "Data Science",
    preco: "R$ 39,90",
    precoAntigo: "R$ 54,90",
    tag: "desconto",
    imagem: livroImg,
  },
  {
    id: 4,
    nome: "CSS: Técnicas Modernas",
    autor: "Vanessa Me Tonini",
    categoria: "Front-end",
    preco: "R$ 44,90",
    precoAntigo: null,
    tag: "novo",
    imagem: livro2Img,
  },
];

const categorias = ["Todos", "Front-end", "Programação", "Data Science", "Back-end", "UX & Design", "Mobile"];

/* ===== Componente CardLivro ===== */
function CardLivro({ livro }) {
  return (
    <LivroCardContainer>
      <LivroCapa>
        {livro.tag && <LivroTag $tipo={livro.tag}>{livro.tag === "novo" ? "Novo" : "-20%"}</LivroTag>}
        <img src={livro.imagem} alt={livro.nome} />
      </LivroCapa>
      <LivroInfo>
        <LivroCategoria>{livro.categoria}</LivroCategoria>
        <LivroNome>{livro.nome}</LivroNome>
        <LivroAutor>{livro.autor}</LivroAutor>
        <LivroPrecoArea>
          {livro.precoAntigo && <LivroPrecoAntigo>{livro.precoAntigo}</LivroPrecoAntigo>}
          <LivroPreco>{livro.preco}</LivroPreco>
        </LivroPrecoArea>
        <LivroBotao>Comprar</LivroBotao>
      </LivroInfo>
    </LivroCardContainer>
  );
}

/* ===== Componente Principal ===== */
function App() {
  return (
    <AppContainer>
      {/* Header */}
      <Header>
        <HeaderContainer>
          <Logo />
          <HeaderNav>
            <a href="#categorias">Categorias</a>
            <a href="#favoritos">Favoritos</a>
            <a href="#novidades">Novidades</a>
          </HeaderNav>
          <HeaderAcoes>
            <BuscaContainer>
              <BuscaIcone viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </BuscaIcone>
              <BuscaInput type="text" placeholder="Buscar livros..." />
            </BuscaContainer>
            <a href="#perfil">
              <HeaderIcone src={perfilIcone} alt="Perfil" />
            </a>
            <a href="#sacola">
              <HeaderIcone src={sacolaIcone} alt="Sacola" />
            </a>
          </HeaderAcoes>
        </HeaderContainer>
      </Header>

      {/* Hero */}
      <HeroSection>
        <HeroContainer>
          <HeroConteudo>
            <HeroSubtitulo>Novidade da semana</HeroSubtitulo>
            <HeroTitulo>Descubra o universo da programação com os melhores livros</HeroTitulo>
            <HeroDescricao>Encontre uma curadoria especial de livros de tecnologia com os melhores preços e conteúdos atualizados para impulsionar sua carreira.</HeroDescricao>
            <HeroBotao>
              Ver coleção completa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </HeroBotao>
          </HeroConteudo>
          <HeroImagem>
            <img src={livroImg} alt="Livro em destaque" />
          </HeroImagem>
        </HeroContainer>
      </HeroSection>

      {/* Categorias */}
      <CategoriasSection id="categorias">
        <CategoriasContainer>
          {categorias.map((cat, i) => (
            <CategoriaBtn key={i} className={i === 0 ? "ativa" : ""}>
              {cat}
            </CategoriaBtn>
          ))}
        </CategoriasContainer>
      </CategoriasSection>

      {/* Livros */}
      <SecaoLivros id="novidades">
        <SecaoHeader>
          <SecaoTitulo>Mais vendidos</SecaoTitulo>
          <SecaoVerMais href="#">Ver todos &rarr;</SecaoVerMais>
        </SecaoHeader>
        <LivrosGrid>
          {livros.map((livro) => (
            <CardLivro key={livro.id} livro={livro} />
          ))}
        </LivrosGrid>
      </SecaoLivros>

      {/* Destaque */}
      <SecaoDestaque id="favoritos">
        <DestaqueContainer>
          <DestaqueImagem>
            <img src={livro2Img} alt="Livro destaque" />
          </DestaqueImagem>
          <DestaqueConteudo>
            <DestaqueLabel>Escolha do editor</DestaqueLabel>
            <DestaqueTitulo>JavaScript: O Guia Definitivo</DestaqueTitulo>
            <DestaqueAutor>por David Flanagan</DestaqueAutor>
            <DestaqueDescricao>
              A referência completa e definitiva para todo programador que deseja dominar JavaScript do básico ao avançado. Atualizado com ES2024 e as melhores práticas do mercado.
            </DestaqueDescricao>
            <DestaqueBotao>
              Conhecer o livro
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </DestaqueBotao>
          </DestaqueConteudo>
        </DestaqueContainer>
      </SecaoDestaque>

      {/* Newsletter */}
      <NewsletterSection>
        <NewsletterContainer>
          <NewsletterTitulo>Fique por dentro das novidades</NewsletterTitulo>
          <NewsletterDescricao>Receba recomendações de livros e ofertas exclusivas direto no seu e-mail.</NewsletterDescricao>
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <NewsletterInput type="email" placeholder="Seu melhor e-mail" />
            <NewsletterBotao type="submit">Inscrever-se</NewsletterBotao>
          </NewsletterForm>
        </NewsletterContainer>
      </NewsletterSection>

      {/* Footer */}
      <FooterContainer>
        <FooterGrid>
          <FooterColuna>
            <h4>Alura Books</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="#">Fale conosco</a>
          </FooterColuna>
          <FooterColuna>
            <h4>Categorias</h4>
            <a href="#">Front-end</a>
            <a href="#">Back-end</a>
            <a href="#">Data Science</a>
            <a href="#">Mobile</a>
          </FooterColuna>
          <FooterColuna>
            <h4>Para Autores</h4>
            <a href="#">Publique conosco</a>
            <a href="#">Diretrizes</a>
            <a href="#">Recursos</a>
          </FooterColuna>
          <FooterColuna>
            <h4>Ajuda</h4>
            <a href="#">Central de ajuda</a>
            <a href="#">Formas de pagamento</a>
            <a href="#">Como baixar e-books</a>
          </FooterColuna>
        </FooterGrid>
        <FooterInferior>
          <p>2026 Alura Books. Todos os direitos reservados.</p>
        </FooterInferior>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
