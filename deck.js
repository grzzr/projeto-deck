const nomeDaCarta = [
    'Pipa do Céu',
    'Pandorga do Inferno',
    'Papagaio do Paraíso'
]

nomeDaCarta.forEach(nome => 
    {
        // 1. Criar carta
        const carta = document.createElement('article')
        // 2. Atribuir class css dela
        carta.className = 'card'
    
        // 3. Gerar o inner HTML da carta
        const innerHTMLCarta = `
            <header>
                <h1>${nome}</h1>
                <div class="header-badge">
                    <img src="/img/badge1utvarahellkite.PNG">
                    <img src="/img/badge2utvarahellkite.PNG">
                    <img src="/img/badge3utvarahellkite.PNG">
                </div>
            </header>
    
            <figure>
                <img src="/img/utvarahellkite.PNG">
                <figcaption class="img-caption">
                    <strong>
                        Creature - dragon
                    </strong>
                    <div class="img-caption-badge">
                        <img src="#">
                    </div>
                </figcaption>
            </figure>
    
            <main>
                <p>Flying</p>
                <p>Whenever a Dragon you control attacks, create a 6/6 red Dragon creature token with flying.</p>
                <p><em>The fear of dragons is as old and as powerful as the fear of death itself.</em></p>
            </main>
    
            <footer>
                <div>
                    <span>144/309 M C17 . EN <img> Mark Zug</span>
                </div>
                <div>
                    <img src="#">
                </div>
                <div>
                    <span>tm & 2017 Wizards of the Coast</span>
                </div>
            </footer>    
    
        `
        //3.1. Atribuimos ele ao elemento article (card)
        carta.innerHTML = innerHTMLCarta;
    
        //4. Adiciona a carta à section .deck
        document.querySelector("#deck")
            .appendChild(carta)
    }
)