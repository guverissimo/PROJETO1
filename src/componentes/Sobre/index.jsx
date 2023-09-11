import {} from "react";
import './Sobre.css'
import filial from '../../assets/filial.jpg'

const Sobre = () => {

    return (
        <>
            <div className="content">
                <h1 className="title">Sobre</h1>
                <div className="main">
                    <img className="img-filial" src={filial} alt="Foto da Filial " />
                    <p className="text-sobre">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, libero a iaculis dictum, ipsum massa interdum dui, quis finibus arcu lacus in lorem. Aenean tristique rutrum rhoncus. In libero velit, volutpat eu ante vitae, consectetur vulputate sem. Maecenas euismod lectus nec purus volutpat feugiat. In id ligula a orci interdum posuere. Ut id ipsum id metus gravida sodales a at velit. Proin rutrum, velit at malesuada eleifend, mi massa porta erat, sed faucibus elit justo a mauris. Etiam vitae suscipit urna, et laoreet nisi. Quisque fermentum, metus eu vestibulum tincidunt, ligula lacus rhoncus nibh, a auctor nibh erat id mi. Vivamus scelerisque, neque eget malesuada maximus, massa diam congue nisi, quis semper erat leo nec tortor.
                        <br />
                        Maecenas at dui nec mi venenatis iaculis. Duis nec nunc quam. Nulla vel orci id sem pretium blandit. Vivamus semper porta tortor nec accumsan. Etiam cursus quam euismod, efficitur justo et, aliquam tortor. Fusce odio erat, consectetur eget lectus a, hendrerit varius eros. Donec sit amet tellus ornare, pulvinar nisl vitae, rhoncus tellus. Phasellus imperdiet tellus ac mauris porttitor, in tempus sem viverra.
                        <br />
                        Quisque sed tortor blandit, bibendum dolor eu, sodales leo. Sed blandit consectetur magna sed semper. Praesent et pharetra dui. Phasellus non mattis ipsum. Quisque scelerisque diam velit, sit amet euismod nisi lobortis eu. Nullam dictum ligula non ante tristique, eget sollicitudin diam consectetur. Vivamus non suscipit augue, at molestie lectus. Proin scelerisque at libero vel porttitor.
                        <br />
                        Etiam et molestie arcu, convallis tempor magna. Praesent aliquet purus odio, vitae blandit diam ultricies eu. Nulla augue nibh, tempor eu tincidunt ac, convallis vel tellus. Aenean sollicitudin rhoncus erat ac finibus. Suspendisse orci erat, tempus eget semper in, euismod eu sem. Proin enim elit, porta quis risus eget, lacinia posuere tortor. Nunc eu vulputate mi. Phasellus eget imperdiet quam. Aenean tincidunt mattis fringilla. Etiam ut tellus est. Morbi ut erat vitae augue lobortis finibus vitae sed sem. Aliquam accumsan, nisl a volutpat venenatis, lectus eros aliquet mi, venenatis lacinia dui sapien ac nisl. Aliquam massa diam, consequat ac nibh et, iaculis commodo odio.</p>
                </div>
            </div>
        </>
    )

}

export default Sobre