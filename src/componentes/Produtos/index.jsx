import {} from "react";
import './Produtos.css'
import iphone from '../../assets/iphone-14-pro.jpg'
import ipad from '../../assets/ipad-pro.jpg'
import macbook from '../../assets/macbook-pro.jpg'
import watch from '../../assets/watch-ultra.jpg'


const Produtos = () => {

    return (
        <>
            <div className="content">
                <h1 className="title" >Produtos</h1>
                <div className="produtos">
                    <div className="produto">
                        <img src={iphone} alt="iPhone 14 Pro" />
                        <p className="produto-name">iPhone 14 Pro</p>
                        <p className="produto-price">R$ 7.999,00</p>
                        <p className="produto-parcela">ou em até 10x R$ 829,00</p>
                    </div>
                    <div className="produto">
                        <img src={ipad} alt="iPad Pro M1" />
                        <p className="produto-name">iPad Pro M1</p>
                        <p className="produto-price">R$ 24.199,00</p>
                        <p className="produto-price">ou em até 10x R$ 822,00</p>
                    </div>
                    <div className="produto">
                        <img src={macbook} alt="MacBook Pro M2" />
                        <p className="produto-name">MacBook Pro M2</p>
                        <p className="produto-price">R$ 25.499,00</p>
                        <p className="produto-price">ou em até 10x R$ 2.749,00</p>
                    </div>
                    <div className="produto">
                        <img src={watch} alt="Apple Watch Ultra 49mm" />
                        <p className="produto-name">Apple Watch Ultra 49mm</p>
                        <p className="produto-price">R$ 8.449,00</p>
                        <p className="produto-price">ou em até 10x R$ 889,00</p>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Produtos