import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import AnimatePage from './animatepage.js';

const Raffles = () => {


    return (
        <div>
            <AnimatePage>
                <section className="raffles">
                    <section className="home" style={{ minHeight: "100vh" }}>
                        <div className="rules" style={{ marginTop: "40px" }}>
                            <div className="rule fst">
                                <span className="titlep"><span style={{ color: "#768D70" }}>Regulamin</span> Dnia Sportu</span>
                                <span className=" ruletext">Organizowanego na prośbę Zespołu Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej przez Juliana Jagiełło i Patryka Kunę
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§1</span> CEL I ORGANIZATOR</span>
                                <span className=" ruletext">1. Dzień Sportu ma na celu promowanie aktywności fizycznej oraz zdrowego stylu życia wśród uczniów III Liceum Ogólnokształcącego z oddziałami dwujęzycznymi im. Stefana Żeromskiego w Bielsku-Białej.
                                    <br />2. Wydarzenie ma zamiar kształtować wśród uczestników zasady rywalizacji takich jak zasada fair play.
                                    <br />3. Organizatorem Dnia Sportu jest Pan Julian Jagiełło.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§2</span> TERMIN I MIEJSCE</span>
                                <span className="ruletext">1. Dzień Sportu zaplanowany jest na 2 czerwca 2023 roku.
                                    <br />2. Organizator zastrzega sobie prawo do zmiany terminu wydarzenia z powodu niekorzystnych warunków atmosferycznych, lub innego powodu nie wymienionego w tym regulaminie.
                                    <br />3. Dokładny plan dnia, który nie ulegnie zmianie zostanie zatwierdzony na co najmniej 3 dni przed startem imprezy.
                                    <br />4. Miejscem wydarzenia jest obszar ww. Zespołu Szkół przy ulicy Bohaterów Warszawy w Bielsku Białej.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§3</span> UCZESTNICY</span>
                                <span className="ruletext">1. Uczestnikami Dnia Sportu mogą być wszyscy uczniowie III Liceum Ogólnokształcącego z oddziałami dwujęzycznymi im. Stefana Żeromskiego w Bielsku-Białej.
                                    <br />2. Każda osoba uczestnicząca w Dniu Sportu musi być zapisana na liście uczestników znajdującej się w zakładce <a href="./zapisy">zapisy</a>
                                    <br />3. Lista zapisów została udostępniona przewodniczącym klas poprzez komunikator Messenger.
                                    <br />4. Uczestnicy Dnia Sportu zobowiązani są do przestrzegania zasad fair play, a także kierowania się dobrymi obyczajami i szacunkiem wobec innych uczestników, organizatorów oraz personelu.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§4</span> ZAWODY SPORTOWE</span>
                                <span className="ruletext">1. W ramach Dnia Sportu odbędą się następujące zawody sportowe: bieg na 100 m, sztafeta 4x170m, skok w dal, turniej piłki nożnej, siatkowej i koszykowej, tenis stołowy, unihokej, szachy błyskawiczne oraz gra w kapsle.
                                    <br />2. Każdy uczestnik może wziąć udział w ograniczonej liczbie zawodów sportowych.
                                    <br />3. Wyniki zawodów sportowych będą ogłaszane na bieżąco, a zwycięzcy otrzymają nagrody rzeczowe.
                                    <br />4. Organizator zastrzega sobie prawo do wyznaczania osób sędziujących konkurencje podczas wydarzenia.
                                    <br />5. Harmonogram Dnia Sportu można pobrać w zakładce <a href="./pliki">pliki do pobrania</a> jako Plan Dnia.
                                    <br />6. Ogólna punktacja konkurencji sportowych zostanie udostępniona do 1 maja 2023.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§5</span> ZASADY KONKURENCJI</span>
                                <span className="ruletext">
                                    a) Piłka nożna


                                    <br />1. Drużyny składają się z 5 zawodników, w tym jednego bramkarza.
                                    <br />2. Każda klasa zgłosić może maksymalnie jedną drużynę piłkarską wraz z 2 rezerwowymi.
                                    <br />3. Zawody rozgrywane są w 2 fazach: grupowej i pucharowej.
                                    <br />4. Niezależnie od ilości zgłoszonych drużyn, pierwszym etapem rywalizacji jest faza grupowa z podziałem na 4 grupy.
                                    <br />5. Losowanie przydzielające drużyny do grup odbywa się w terminie wyznaczonym przez organizatora.
                                    <br></br><br></br>
                                    b) Koszykówka


                                    <br />1. Drużyny składają się z 5 zawodników.
                                    <br />2. Każda klasa zgłosić może maksymalnie jedną drużynę piłki koszykowej.
                                    <br />3. Konkurencja podzielona jest na fazę grupową i pucharową.
                                    <br />4. Faza pucharowa rozgrywana jest wg ogólnie przyjętego modelu “drabinki turniejowej”.

                                    <br></br><br></br>
                                    c) Siatkówka


                                    <br />1. Drużyny składają się z 4 zawodników.
                                    <br />2. Każda klasa zgłosić może maksymalnie dwie drużyny piłki siatkowej.
                                    <br />3. Płeć uczestników nie jest regulowana przepisami.
                                    <br />4. Konkurencja odbywa się wg systemu ustalonego w dniu zawodów.

                                    <br></br><br></br>
                                    d) Skok w dal


                                    <br />1. Jest to konkurs nie wymagający zapisów uczestników.
                                    <br />2. Zawody rozgrywane są w 2 fazach: kwalifikacjach i finale.
                                    <br />3. Każdemu uczestnikowi Dnia Sportu przysługuje prawo do oddania 2 podejść w rywalizacji na szczeblu kwalifikacyjnym.
                                    <br />4. Runda finałowa polega na wyłonieniu 5 najlepszych zawodników z fazy kwalifikacyjnej.
                                    <br />5. W finale każdy zawodnik oddaje 3 próby, z których to najlepszy i najgorszy rezultat odrzuca się - (mediana).
                                    <br />6. Zwycięzcą konkurencji jest osoba, której mediana długości skoków z rundy finałowej będzie najwyższa.


                                    <br></br><br></br>
                                    e) Bieg na 100m

                                    <br />1. Klasa może wyznaczyć maksymalnie 1 zawodnika do tej konkurencji.
                                    <br />2. Zawody rozgrywane są w 2 fazach: kwalifikacjach i finale.
                                    <br />3. Spośród zmierzonych czasów, 4 najlepszych zawodników przechodzi do biegu finałowego.
                                    <br />4. Zwycięzcą konkurencji jest zawodnik, który w finale jako pierwszy przetnie linię mety.

                                    <br></br><br></br>
                                    f) Sztafeta 4x170m


                                    <br />1. Drużyny składają się z 4 zawodników.
                                    <br />2. Każda klasa może zgłosić maksymalnie 1 drużynę.
                                    <br />3. Drużyna musi składać się z dwóch kobiet i dwóch mężczyzn.
                                    <br />4. Zwycięzcą konkurencji jest sztafeta, która w najkrótszym czasie pokona wyznaczony dystans.

                                    <br></br><br></br>
                                    g) Tenis stołowy

                                    <br />1. Konkurencja przeprowadza jest na 3 stołach do tenisa stołowego ustawionych na “małej salce”.
                                    <br />2. Każda klasa może zgłosić maksymalnie 2 zawodników.
                                    <br />3. Mecz składa się z maksymalnie 3 setów granych do 11 punktów (zasada BO3), starcie kończy się wynikiem 2:0 lub 2:1.

                                    <br></br><br></br>
                                    h) Unihokej

                                    <br />1. Zawody odbywają się na sali gimnastycznej.
                                    <br />2. Drużyna unihokeja składa się z 5 zawodników.
                                    <br />3. Każda klasa może zgłosić maksymalnie jedną drużyne unihokeja.
                                    <br />4. Mecze trwają 5 minut, bądź kończą się po strzeleniu przez jedną drużynę 3 goli.
                                    <br />5. W pierwszej fazie zawodów drużyny zostają przydzielone do grup.
                                    <br />6. Faza pucharowa działa na zasadzie drabinki turniejowej.

                                    <br></br><br></br>
                                    i) Szachy
                                    <br />1.  Mecze rozgrywane są tempem 5|0, co oznacza że każdy zawodnik na wykonanie swoich ruchów ma 5 minut.
                                    <br />2. Każda klasa może zgłosić maksymalnie 2 szachistów.
                                    <br />3. Zawodnicy rozgrywają mecze między sobą, każdy po 3.
                                    <br />4. Punktacja zawodów to: 1 pkt - wygrana, 0,5 pkt - remis oraz 0 pkt - przegrana.
                                    <br />5. Zawodnicy, którzy zdobędą najwięcej punktów przechodzą do finału.

                                    <br></br><br></br>
                                    j) Kapsle
                                    <br />1. Każdy uczestnik Dnia Sportu może wziąć udział w tej konkurencji.
                                    <br />2. Turniej polega na przejściu toru przeszkód w jak najkrótszym czasie.
                                    <br />3. Zwycięzcami tej konkurencji zostaną osoby, które osiągną wyznaczony próg czasowy.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§6</span> ZASADY BEZPIECZEŃSTWA</span>
                                <span className="ruletext">1. Wszyscy uczestnicy Dnia Sportu są zobowiązani do przestrzegania zasad bezpieczeństwa podczas uprawiania sportu.
                                    <br />2. Każdy uczestnik musi posiadać odpowiedni strój sportowy oraz obuwie sportowe zgodne z wytycznymi administratora obiektu.
                                    <br />3. Uczestnicy wydarzenia muszą przestrzegać poleceń organizatorów oraz instruktorów prowadzących zawody sportowe.
                                    <br />4. Organizatorzy Dnia Sportu nie ponoszą odpowiedzialności za ewentualne kontuzje lub urazy uczestników wynikłe w trakcie uprawiania sportu.
                                    <br />5. Organizator ma prawo do przeprowadzenia kontroli bagażu uczestników w celu zapewnienia bezpieczeństwa wszystkich uczestników i personelu.
                                    <br />6. Przeprowadzenie kontroli może obejmować sprawdzenie zawartości plecaków i innych bagaży uczestników.
                                    <br />7. Uczestnicy wyrażają zgodę na przeszukanie swojego bagażu przez pracowników organizatora.
                                    <br />8. W przypadku stwierdzenia w bagażu niebezpiecznych przedmiotów, takich jak substancje wybuchowe, narzędzia o ostrych krawędziach lub inne nielegalne substancje, organizator ma prawo do odmowy wpuszczenia uczestnika na teren wydarzenia lub konfiskaty przedmiotów.
                                </span>
                            </div>

                            <div className="rule">
                                <span className="titlep"><span style={{ color: "#768D70" }}>§7</span> POSTANOWIENIA KOŃCOWE</span>
                                <span className="ruletext">1. Niniejszy regulamin jest integralną częścią Dnia Sportu.
                                    <br />2. W sprawach nieuregulowanych w niniejszym regulaminie decyzje podejmuje organizator Dnia Sportu.
                                    <br />3. Organizator ma prawo do zmian w regulaminie podczas trwania zawodów.
                                    <br />4. Wszelkie zmiany niniejszego regulaminu wymagają pisemnej formy i muszą zostać zaakceptowane przez organizatora Dnia Sportu.
                                    <br />5. Osobą decyzyjną oprócz Organizatora jest Patryk Kuna.
                                </span>
                            </div>

                        </div>
                    </section>
                </section>
            </AnimatePage>
        </div>
    );
}

export default Raffles;
