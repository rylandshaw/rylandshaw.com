import penguin from '../assets/big penguin.svg'

export default function BigNews() {
    return (
        <>
            <header>
                <img className='BigImage' src={penguin} />
                <h2>Big News!</h2>
            </header>
            <article>
                Apr 2024: The documentary I produced and assistant edited, <em><a href="https://amakki.net" target="_blank">Amakki</a></em>, premiered at the 2024 Atlanta Film Festival, where it won Best Documentary Feature.
            </article>
            <article>
                Dec 2023: I successfully defended my master’s thesis, <em>The Logic of Imitation and the Reconfiguration of News in Climate Communication on TikTok</em>.
            </article>
            <article>
                June 2023: I joined Microsoft Research’s Social Media Collective as a pre-doctoral research assistant.
            </article>
            <article>
                October 2022: I co-authored a paper with Professor Tammara Soma, <em><a href="https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2022.1007567/full" target="_blank">To the Farm, Mars and Beyond: Technologies for Growing Food in Space, the Future of Long-Duration Space Missions, and Earth Implication in English News Media Coverage</a></em>, published in Frontiers in Communication.
            </article>
        </>
    )
}