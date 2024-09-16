
import '../styledComponents/Inicial.css'; 


function Inicial() {
    return (
      <>
        <div className='principal'>
  
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
  
          
          <div className="rectangle-59"></div>
  
          
  
          
          <section className="tipos-seguros">
            <h2>Nossos Seguros</h2>
            <div className="tipos-seguros-cards">
              <div className="seguro-card1">
                <h3>Seguro Completo</h3>
                <p>Proteção total para o seu carro contra acidentes, roubos, furtos e danos a terceiros.</p>
              </div>
              <div className="seguro-card2">
                <h3>Seguro Contra Terceiros</h3>
                <p>Proteção específica para danos causados a outros veículos ou propriedades em acidentes.</p>
              </div>
              <div className="seguro-card3">
                <h3>Seguro Roubo e Furto</h3>
                <p>Garanta a segurança do seu patrimônio com cobertura em caso de roubo ou furto.</p>
              </div>
              <div className="seguro-card4">
                <h3>Assistência 24h</h3>
                <p>Assistência completa em casos de emergências, pane elétrica ou mecânica, disponível 24 horas por dia.</p>
              </div>
            </div>
          </section>
        </div>
  
        
      </>
    );
  }
  
  export default Inicial;