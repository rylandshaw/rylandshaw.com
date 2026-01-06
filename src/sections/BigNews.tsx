import penguin from '../assets/big penguin.svg'

export default function BigNews() {
    return (
        <>
            <header>
                <img className='BigImage' src={penguin} />
                <h2>Big News!</h2>
            </header>
            <article>
                Dec 2025: I published a new article in the International Journal of Communication: <em><a href="https://ijoc.org/index.php/ijoc/article/view/24604" target="_blank">Is TikTok “for” News? Sociotechnical Frictions and Workarounds in Environmental News Events on TikTok</a></em>.
            </article>
            <article>
                Aug 2025: I've joined USC's doctoral program in Communication as an Annenberg Fellow! See my profile <em><a href="https://annenberg.usc.edu/phd-students/ryland-shaw" target="_blank">here</a></em>. 
            </article>
            <article>
                Apr 2024: The documentary I produced and assistant edited, <em><a href="https://amakki.net" target="_blank">Amakki</a></em>, premiered at the 2024 Atlanta Film Festival, where it won Best Documentary Feature. <em>Amakki</em> was also an official selection of FESPACO 2025, 2024 Black Harvest Film Festival in Chicago and the 2024 International Images Film Festival for Women in Zimbabwe. 
            </article>
            <article>
                Dec 2023: I successfully defended my master’s thesis, <em>The Logic of Imitation and the Reconfiguration of News in Climate Communication on TikTok</em>, finishing my time at Simon Fraser University.
            </article>
            <article>
                June 2023: I joined Microsoft Research’s Social Media Collective as a pre-doctoral research assistant.
            </article>
        </>
    )
}