import penguin from '../assets/big penguin.svg'

export default function BigNews() {
    return (
        <>
            <header>
                <img className='BigImage' src={penguin} />
                <h2>Big News!</h2>
            </header>
            <article>
                Apr 2024: The feature-length documentary I produced and assistant edited, <em>Amakki</em>, premiered at the 2024 Atlanta Film Festival, where it won best documentary.
            </article>
            <article>
                Dec 2023: I successfully defended my master’s thesis, <em>The Logic of Imitation and the Reconfiguration of News in Climate Communication on TikTok</em>.
            </article>
            <article>
                June 2023: I joined Microsoft Research’s Social Media Collective as a pre-doctoral research assistant.
            </article>
            <article>
                October 2022: I co-authored a paper with Professor Tammara Soma, <em>To the Farm, Mars and Beyond: Technologies for Growing Food in Space, the Future of Long-Duration Space Missions, and Earth Implication in English News Media Coverage</em>, published in Frontiers in Communication.
            </article>
        </>
    )
}