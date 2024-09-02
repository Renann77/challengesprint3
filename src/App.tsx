
import './App.css';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0' }}>

        <div className="container-1">
          <div className="container-5">
            <div className="ajuda">
              <span className="ajuda-text">Ajuda</span>
            </div>
            <div className="servicos">
              <span className="servicos-text">Serviços</span>
            </div>
            <div className="container">
              <span className="entrar">Entrar</span>
            </div>
          </div>

          {/* Área do Cliente */}
          <div className="area-cliente">
            <div className="image-9"></div>
            <div className="container-2">
              <div className="area-do-cliente">Área do Cliente</div>
              <div className="descricao-area-cliente">
                Queremos que você encontre todas as respostas que procura por aqui. Tudo de forma simples, prática e ágil. Do nosso jeito LRI.
              </div>
              <div className="container-6">
                <a href="./Login.html"><button className="btologin">Login</button></a>
              </div>
            </div>
          </div>

          {/* Seção de Cadastro */}
          <div className="container-4">
            <div className="gp-cadastro">
              <div className="image-10"></div>
              <div className="container-3">
                <div className="ainda-nao-possui-conta">Ainda não possui conta?</div>
                <div className="clique-no-icone-abaixo-para-realizar-seu-cadastro">
                  Clique no ícone abaixo para realizar seu cadastro!
                </div>
                <div className="container-7">
                  <span className="cadastrar"></span>
                  <a href="./Cadastro.html"><button className="btoforcad">Cadastrar</button></a>
                </div>
              </div>
            </div>
            <div className="cryptocurrency-colorchat">
              
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="rectangle-59"></div>

        

        {/* Tipos de Seguros */}
        <section className="tipos-seguros">
          <h2>Nossos Seguros</h2>
          <div className="tipos-seguros-cards">
            <div className="seguro-card">
              <h3>Seguro Completo</h3>
              <p>Proteção total para o seu carro contra acidentes, roubos, furtos e danos a terceiros.</p>
            </div>
            <div className="seguro-card">
              <h3>Seguro Contra Terceiros</h3>
              <p>Proteção específica para danos causados a outros veículos ou propriedades em acidentes.</p>
            </div>
            <div className="seguro-card">
              <h3>Seguro Roubo e Furto</h3>
              <p>Garanta a segurança do seu patrimônio com cobertura em caso de roubo ou furto.</p>
            </div>
            <div className="seguro-card">
              <h3>Assistência 24h</h3>
              <p>Assistência completa em casos de emergências, pane elétrica ou mecânica, disponível 24 horas por dia.</p>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="faq">
          <div className="faq-item">
            <h3>Quais são os benefícios do seguro completo?</h3>
            <p>O seguro completo oferece proteção total para seu veículo.</p>
          </div>
          <div className="faq-item">
            <h3>Posso incluir mais de um carro na minha apólice?</h3>
            <p>Sim, é possível incluir mais de um veículo em sua apólice, garantindo a segurança de toda a sua frota pessoal.</p>
          </div>
          <div className="faq-item">
            <h3>Como posso acionar a assistência 24 horas?</h3>
            <p>Basta ligar para o nosso número de emergência disponível na sua apólice, e nossa equipe estará pronta para ajudá-lo a qualquer momento.</p>
          </div>
        </section>

        {/* Parceiros */}
        <section className="parceiros">
          <h2>Nossos Parceiros</h2>
          <div className="parceiros-logos">
            <img src="../img/th.jpg" alt="Parceiro 1" />
            <img src="../img/th (1).jpg" alt="Parceiro 2" />
          </div>
        </section>

        {/* Contato */}
        <section className="contato">
          <h2>Fale Conosco</h2>
          <form className="form-contato" action="/enviar-mensagem" method="POST">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 LRI Seguros. Todos os direitos reservados.</p>
        </footer>
      </div>

      
    </>
  );
}

export default App;
