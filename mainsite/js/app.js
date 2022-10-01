import React from "react";
import { createRoot } from "react-dom/client";
 
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div className="main">
                <select className="months">
                    <option id="sty">Styczeń</option>
                    <option id="lut">Luty</option>
                    <option id="mar">Marzec</option>
                    <option id="kwi">Kwiecień</option>
                    <option id="maj">Maj</option>
                    <option id="cze">Czerwiec</option>
                    <option id="lip">Lipiec</option>
                    <option id="sie">Sierpień</option>
                    <option id="wrz">Wrzesień</option>
                    <option id="paz">Październik</option>
                    <option id="lis">Listopad</option>
                    <option id="gru">Grudzień</option>
                </select>
                <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
            </div>); 
/*root.render(<div class="icons">
                <div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div>
                <div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div>
                <div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div>
                <div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div>
            </div>);*/

/*root.render(<div className="data">
    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
</div>)*/

const butt = document.getElementById("butt");
const sty = document.getElementById("sty");
const lut = document.getElementById("lut");
const mar = document.getElementById("mar");
const kwi = document.getElementById("kwi");
const maj = document.getElementById("maj");
const cze = document.getElementById("cze");
const sie = document.getElementById("sie");
const wrz = document.getElementById("wrz");
const paz = document.getElementById("paz");
const lis = document.getElementById("lis");
const gru = document.getElementById("gru");

function selectMonth(){
    if(sty === true){
        return ;
    }
};

