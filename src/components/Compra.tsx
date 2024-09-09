import React from 'react';
import { Outlet } from 'react-router-dom';
 
import "../styledComponents/Compra.css";
 
 
let cart: { name: string, price: number }[] = [];
let total: number = 0;

function addToCart(itemName: string, itemPrice: number): void {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart(): void {
    const cartItemsDiv = document.getElementById('cart-items') as HTMLDivElement;
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `<p>${item.name}: R$ ${item.price.toFixed(2)}</p>`;
    });
    const totalDiv = document.getElementById('total') as HTMLDivElement;
    totalDiv.innerText = total.toFixed(2);
}

function checkout(): void {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}







 
 
const ProductSection: React.FC = () => (
    <section id="products">
        <h1>Nossas Peças</h1>
        <article className="product">
            <h3>Pastilhas de Freio</h3>
            <img src="src/img/pastilhasfreio.jpeg" alt="Pastilhas de Freio" />
            <p>Preço: R$ 149,99</p>
            <button onClick={() => addToCart('Pastilhas de Freio', 149.99)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Óleo do Motor</h3>
            <img src="src/img/filtro de oleo.jpeg" alt="Óleo do Motor" />
            <p>Preço: R$ 79,90</p>
            <button onClick={() => addToCart('Óleo do Motor', 79.90)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Porta de Carro</h3>
            <img src="src/img/portadecarro.jpg" alt="Porta de Carro" />
            <p>Preço: R$ 760,00</p>
            <button onClick={() => addToCart('Porta de Carro', 760.00)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Pneu</h3>
            <img src="src/img/pneu.jpg" alt="Pneu" />
            <p>Preço: R$ 429,90</p>
            <button onClick={() => addToCart('Pneu', 429.90)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Retrovisor</h3>
            <img src="src/img/retrovisor.jpg" alt="Retrovisor" />
            <p>Preço: R$ 220,00</p>
            <button onClick={() => addToCart('Retrovisor', 220.00)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Para-Brisa</h3>
            <img src="src/img/parabrisa.jpg" alt="Para-Brisa" />
            <p>Preço: R$ 109,90</p>
            <button onClick={() => addToCart('Para-Brisa', 109.90)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Bancos</h3>
            <img src="src/img/banco.jpg" alt="Bancos" />
            <p>Preço: R$ 3.599,90</p>
            <button onClick={() => addToCart('Bancos', 3599.00)}>Adicionar ao Carrinho</button>
        </article>
        <article className="product">
            <h3>Kit Chave de Rodas</h3>
            <img src="src/img/kit.jpg" alt="Kit Chave de Rodas" />
            <p>Preço: R$ 169,99</p>
            <button onClick={() => addToCart('Kit Chave de Rodas', 169.99)}>Adicionar ao Carrinho</button>
        </article>

        <script src="src/jscomponents/Compra.js"></script>
    </section>
);
 
const CartAside: React.FC = () => (
    <aside id="cart">
        <h2>Carrinho de Compras<img className="carrinho" src="src/img/checkout.png" alt="Carrinho de Compras" /></h2>
        <div id="cart-items">
            <p>Seu carrinho está vazio.</p>
        </div>
        <p>Total: R$ <span id="total">0.00</span></p>
        <button onClick={checkout}>Finalizar Compra</button>
    </aside>
);
 
const Compra: React.FC = () => (

    
    <div>
        <Outlet />
        <ProductSection />
        <CartAside />
    </div>
   
);
 
export default Compra;

