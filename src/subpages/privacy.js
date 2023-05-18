import '../assets/css/styles.css';
import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';



const Privacy = () => {
    return (
        <div>
            <section className="about">
                <section className="home">
                    <section className="privacy">
                        <span className="privacy_policy"><span style={{ color: "#768D70" }}>Polityka prywatności</span><span style={{ display: "block" }}>www.dziensportu.info</span></span>
                    </section>
                    <div className="rules" style={{ marginTop: "200px" }}>
                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>0</span> INFORMACJE WSTĘPNE</span>
                            <span className="ruletext">1. Dla Właściciela niniejszej strony internetowej, ochrona danych osobowych Użytkowników jest sprawą najwyższej wagi. Dokłada on ogrom starań, aby Użytkownicy czuli się bezpiecznie, powierzając swoje dane osobowe w trakcie korzystania ze strony internetowej.
                                <br />
                                2. Użytkownik to osoba fizyczna, osoba prawna albo jednostka organizacyjna, nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych, dostępnych w ramach strony internetowej.
                                <br />
                                3. Niniejsza polityka prywatności wyjaśnia zasady i zakres przetwarzania danych osobowych Użytkownika, przysługujące mu prawa, jak też obowiązki administratora tych danych, a także informuje o używaniu plików cookies.
                                <br />
                                4. Administrator stosuje najnowocześniejsze środki techniczne i rozwiązania organizacyjne, zapewniające wysoki poziom ochrony przetwarzanych danych osobowych oraz zabezpieczenia przed dostępem osób nieupoważnionych.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>I</span> ADMINISTARTOR DANYCH OSOBOWYCH</span>
                            <span className=" ruletext">Administratorem danych osobowych jest osoba prywatna Pan Patryk Kuna, który prowadzi działalność nierejestrowaną, ponieważ przychody firmy nie przekraczają w żadnym miesiącu 50% minimalnego wynagrodzenia (na rok 2022 tj. 1505zł).</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>II</span> CEL PRZETWARZANIA DANYCH OSOBOWYCH</span>
                            <span className="ruletext">1. Administrator przetwarza dane osobowe Użytkownika w celu: Dzien Sportu nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem tych zawartych w plikach cookies.
                                <br />
                                2. Użytkownik może również wyrazić zgodę na otrzymywanie informacji o nowościach i promocjach, co spowoduje, że administrator będzie również przetwarzać dane osobowe, w celu przesyłania Użytkownikowi informacji handlowych, dotyczących m.in. nowych produktów lub usług, promocji czy wyprzedaży.
                                <br />
                                3. Dane osobowe są również przetwarzane w ramach wypełnienia prawnych obowiązków, ciążących na administratorze danych oraz realizacji zadań, w interesie publicznym m.in. do wykonywania zadań, związanych z bezpieczeństwem i obronnością lub przechowywaniem dokumentacji podatkowej.
                                <br />
                                4. Dane osobowe mogą być również przetwarzane w celach marketingu bezpośredniego produktów, zabezpieczenia i dochodzenia roszczeń lub ochrony przed roszczeniami Użytkownika lub osoby trzeciej, jak również marketingu usług i produktów podmiotów trzecich lub marketingu własnego, niebędącego marketingiem bezpośrednim.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>III</span> RODZAJ DANYCH</span>
                            <span className="ruletext">Administrator nie przetwarza żadnych danych osobowych, z wyjątkiem informacji zawartych w plikach cookies.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>IV</span> PODSTAWA PRAWNA PRZETWARZANIA DANYCH OSOBOWYCH</span>
                            <span className="ruletext">1. Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), OJ L 119, 4.5.2016, p. 1–88, dalej zwane: „rozporządzenie RODO".
                                <br />
                                2. Administrator przetwarza dane osobowe wyłącznie po uprzednim uzyskaniu zgody Użytkownika.
                                <br />
                                3. Wyrażenie zgody na przetwarzanie danych osobowych jest całkowicie dobrowolne.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>V</span> PRAWA PRZYSŁUGUJĄCE UŻYTKOWNIKOWI</span>
                            <span className="ruletext">1. Użytkownik może w każdej chwili zażądać od administratora informacji o zakresie przetwarzania danych osobowych.
                                <br />
                                2. Użytkownik może w każdej chwili zażądać poprawienia bądź sprostowania swoich danych osobowych.
                                <br />
                                3. Użytkownik może w każdej chwili wycofać swoją zgodę na przetwarzanie jego danych osobowych, bez podawania przyczyny. Żądanie nieprzetwarzania danych może dotyczyć wskazanego przez Użytkownika konkretnego celu przetwarzania np. wycofanie zgody na otrzymywanie informacji handlowych bądź dotyczyć wszystkich celów przetwarzania danych. Wycofanie zgody co do wszystkich celów przetwarzania spowoduje, że konto Użytkownika zostanie usunięte ze strony internetowej, wraz ze wszystkimi wcześniej przetwarzanymi przez administratora danymi osobowymi Użytkownika. Wycofanie zgody nie wpłynie na już dokonane czynności.
                                <br />
                                4. Użytkownik może w każdej chwili żądać, bez podawania przyczyny, aby administrator usunął Jego dane. Żądanie usunięcia danych nie wpłynie na dotychczas dokonane czynności. Usunięcie danych oznacza jednoczesne usunięcie konta Użytkownika, wraz ze wszystkimi zapisanymi i przetwarzanymi do tej pory przez administratora danymi osobowymi.
                                <br />
                                5. Użytkownik może w każdej chwili wyrazić sprzeciw przeciwko przetwarzaniu danych osobowych, zarówno w zakresie wszystkich przetwarzanych przez administratora danych osobowych Użytkownika, jak również jedynie w ograniczonym zakresie np. co do przetwarzania danych w konkretnie wskazanym celu. Sprzeciw nie wpłynie na dotychczas dokonane czynności. Wniesienie sprzeciwu spowoduje usunięcie konta Użytkownika, wraz ze wszystkimi zapisanymi i przetwarzanymi do tej pory, przez administratora, danymi osobowymi.
                                <br />
                                6. Użytkownik może zażądać ograniczenia przetwarzania danych osobowych, czy to przez określony czas, czy też bez ograniczenia czasowego, ale w określonym zakresie, co administrator będzie obowiązany spełnić. Żądanie to nie wpłynie na dotychczas dokonane czynności.
                                <br />
                                7. Użytkownik może zażądać, aby administrator przekazał innemu podmiotowi, przetwarzane dane osobowe Użytkownika. Powinien w tym celu napisać prośbę do administratora, wskazując, jakiemu podmiotowi (nazwa, adres) należy przekazać dane osobowe Użytkownika oraz jakie konkretnie dane Użytkownik życzy sobie, żeby administrator przekazał. Po potwierdzeniu przez Użytkownika swojego życzenia, administrator przekaże, w formie elektronicznej, wskazanemu podmiotowi, dane osobowe Użytkownika. Potwierdzenie przez Użytkownika żądania jest niezbędne z uwagi na bezpieczeństwo danych osobowych Użytkownika oraz uzyskanie pewności, że żądanie pochodzi od osoby uprawnionej.
                                <br />
                                8. Administrator informuje Użytkownika o podjętych działaniach, przed upływem miesiąca od otrzymania jednego z żądań wymienionych w poprzednich punktach.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>VI</span> OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</span>
                            <span className="ruletext">1. Zasadniczo dane osobowe są przechowywane tylko tak długo, jak to jest konieczne do wypełnienia zobowiązań umownych lub ustawowych, dla których zostały one zgromadzone. Dane te zostaną usunięte natychmiast, gdy ich przechowywanie nie będzie konieczne, w celach dowodowych, zgodnie z prawem cywilnym lub w związku z ustawowym obowiązkiem przechowywania danych.
                                <br />
                                2. Informacje, dotyczące umowy, przechowuje się w celach dowodowych, przez okres trzech lat, począwszy od końca roku, w którym zakończono relacje handlowe z Użytkownikiem. Usunięcie danych nastąpi po upływie ustawowego terminu przedawnienia dochodzenia roszczeń umownych.
                                <br />
                                3. Ponadto, administrator może zachować informacje archiwalne, dotyczące zawartych transakcji, gdyż ich przechowywanie jest związane z przysługującymi Użytkownikowi roszczeniami np. z tytułu rękojmi.
                                <br />
                                4. Jeśli żadna umowa nie została zawarta, między Użytkownikiem i Właścicielem, dane osobowe Użytkownika są przechowywane do czasu usunięcia konta Użytkownika na stronie internetowej. Usunięcie konta może nastąpić w wyniku wysunięcia żądania przez Użytkownika, wycofania zgody na przetwarzanie danych osobowych, bądź też zgłoszenia sprzeciwu co do przetwarzania tych danych.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>VII</span> POWIERZENIE PRZETWARZANIA DANYCH INNYM PODMIOTOM</span>
                            <span className="ruletext">1. Administrator może powierzać przetwarzanie danych osobowych podmiotom współpracującym z administratorem, w zakresie niezbędnym dla realizacji transakcji np. w celu przygotowania zamówionego towaru oraz dostarczania przesyłek lub przekazywania informacji handlowych, pochodzących od administratora (ostatnie dotyczy Użytkowników, którzy wyrazili zgodę na otrzymywanie informacji handlowych).
                                <br />
                                2. Poza celami, wskazanymi w niniejszej Polityce Prywatności, dane osobowe Użytkowników, nie będą w żaden sposób udostępniane osobom trzecim, ani przekazywane innym podmiotom, w celu przesyłania materiałów marketingowych tych osób trzecich.
                                <br />
                                3. Dane osobowe Użytkowników strony internetowej nie są przekazywane poza obszar Unii Europejskiej.
                                <br />
                                4. Niniejsza Polityka Prywatności jest zgodna z przepisami wynikającymi z art. 13 ust. 1 i ust. 2 rozporządzenia RODO.</span>
                        </div>

                        <div className="rule">
                            <span className="titlep"><span style={{ color: "#768D70" }}>VII</span> PLIKI COOKIES</span>
                            <span className="ruletext">1. Strona internetowa używa plików cookies (ciasteczka) lub podobną technologię (dalej łącznie nazywane: "cookies") do zbierania informacji o dostępie Użytkownika do strony internetowej (np. za pomocą komputera lub smartfonu) oraz jego preferencjach. Są one wykorzystywane m.in. w celach reklamowych i statystycznych oraz w celu dostosowania strony internetowej do indywidualnych potrzeb Użytkownika.
                                <br />
                                2. Pliki cookies to fragmenty informacji, które zawierają unikalny kod referencyjny, który strona internetowa przesyła na urządzenie Użytkownika, w celu przechowywania, a czasem śledzenia informacji, dotyczących używanego urządzenia. Zwykle nie pozwalają one zidentyfikować osoby Użytkownika. Ich głównym zadaniem jest lepsze dopasowanie strony internetowej do Użytkownika.
                                <br />
                                3. Niektóre z plików cookies, występujące na stronie internetowej, są dostępne tylko przez czas trwania danej sesji internetowej i wygasają po zamknięciu przeglądarki. Inne pliki cookies służą do zapamiętywania Użytkownika, który po powrocie na stronę internetową, jest na niej rozpoznawany. Są one wówczas zachowywane przed dłuższy czas.
                                <br />
                                4. Pliki cookies używane na niniejszej stronie internetowej to: Stałe pliki cookies – dzięki nim korzystanie ze strony jest ułatwione (m.in. zapamiętują Twój wybór w przypadku licznika popularności danego produktu). Mogą być wykorzystywane do różnych celów, w tym do zapamiętywania Twoich preferencji i wyborów podczas korzystania ze strony internetowej. Te pliki cookies pozostają pamięci przeglądarki przez dłuższy okres.
                                <br />
                                5. Wszystkie pliki cookies, występujące na stronie internetowej, są ustalane przez administratora.
                                <br />
                                6. Wszystkie pliki cookies, używane przez niniejszą stronę internetową, są zgodne z obowiązującym prawem Unii Europejskiej.
                                <br />
                                7. Większość Użytkowników i niektórych przeglądarek mobilnych automatycznie akceptuje pliki cookies. Jeżeli Użytkownik nie zmieni ustawień, pliki cookies zostaną zapisane w pamięci urządzenia.
                                <br />
                                8. Użytkownik może zmienić preferencje, dotyczące akceptacji plików cookies lub zmienić przeglądarkę, aby móc otrzymać za każdym razem stosowne powiadomienie, gdy funkcja cookies jest ustawiona. Aby zmienić ustawienia akceptacji cookies, należy dostosować ustawienia w przeglądarce.
                                <br />
                                9. Warto pamiętać, że blokowanie lub usuwanie plików cookies może uniemożliwić pełne korzystanie ze strony internetowej.
                                <br />
                                10. Pliki cookies będą wykorzystywane do niezbędnego zarządzania sesją, w tym:
                                a. Tworzenia specjalnej sesji logowania dla Użytkownika strony internetowej, aby strona zapamiętała, że Użytkownik jest zalogowany, a jego żądania były dostarczane w sposób skuteczny, bezpieczny i spójny;
                                b. Rozpoznawania Użytkownika, który już wcześniej odwiedził stronę internetową, co pozwala na identyfikację liczby unikalnych użytkowników, którzy skorzystali z serwisu i pozwala upewnić się co do wystarczającej pojemności serwisu dla liczby nowych użytkowników;
                                c. Rozpoznawania, czy osoba odwiedzająca stronę internetową jest zarejestrowana na stronie internetowej;
                                d. Rejestrowanie informacji z urządzenia Użytkownika, w tym: pliki cookies, adres IP i informacje o używanej przeglądarce, w celu możliwości diagnozowania problemów, administrowania i śledzenia Użytkowania witryny;
                                e. Dostosowywania elementów układu szaty graficznej lub zawartości strony internetowej;
                                f. Zbierania informacji statystycznych o tym, jak Użytkownik korzysta ze strony, w celu możliwości ulepszania witryny i stwierdzenia, które zakresy strony internetowej są najbardziej popularne dla Użytkowników.</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Privacy;
