import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
            <article>
                Aug 2025: Two papers coming out soon: <em><a href="https://arxiv.org/abs/2505.24246" target="_blank">Locating Risk: Task Designers and the Challenge of Risk Disclosure in RAI Content Work</a></em>, accepted to CSCW 2026, and <em><a href="https://dl.acm.org/doi/full/10.1145/3772318.3791558" target="_blank">Worker Discretion Advised: Co-designing Risk Disclosure in Crowdsourced Responsible AI Content Work</a></em>, which we presented at CHI2026 in Barcelona. These projects were led by Alice Qian, and supported by myself, Ziqi Yang, Laura Dabbish, Jina Suh, Mary Gray and Hong Shen.  
            </article>
            <article>
                April 2025: I gave a talk titled <em>From questioning energy to questioning power: Deconstructing 'AI for Sustainability'</em> to members of Seton Hall University's Teaching, Learning, and Technology Roundtable AI subcommittee.
            </article>
        </>
    )
}