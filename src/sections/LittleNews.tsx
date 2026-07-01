import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
            <article>
                [Upcoming] October 2026]: I'll be presenting a paper on my early work on emerging carbon capture technology at this year's 4S in Toronto: <em>Becoming infrastructural: A genealogy of the commercialization of Direct Air Capture technology</em>. It is part of a closed panel I co-organized with Riley Gold, titled <em>Mediating Carbon: Abstractions, Infrastructures, Imaginaries</em>.
            </article>
            <article>
                [Upcoming] October 2026: I'll be presenting at AoIR in Mexico City later this fall, on a project called <em>"Your use of Al is killing the planet": Individual versus institutional theories of change in the public debate over Al's environmental harms</em>. This project looks at online and offline discussions of datacenters' environmental risks to see what forms of action are emerging against it. 
            </article>
            <article>
                Aug 2025: Two papers coming out now: <em><a href="https://dl.acm.org/doi/10.1145/3788065" target="_blank">Locating Risk: Task Designers and the Challenge of Risk Disclosure in RAI Content Work</a></em>, accepted to CSCW 2026, and <em><a href="https://dl.acm.org/doi/full/10.1145/3772318.3791558" target="_blank">Worker Discretion Advised: Co-designing Risk Disclosure in Crowdsourced Responsible AI Content Work</a></em>, which we presented at CHI2026 in Barcelona. These projects were led by Alice Qian, and supported by myself, Ziqi Yang, Laura Dabbish, Jina Suh, Mary Gray and Hong Shen.  
            </article>
            <article>
                April 2025: I gave a talk titled <em>From questioning energy to questioning power: Deconstructing 'AI for Sustainability'</em> to members of Seton Hall University's Teaching, Learning, and Technology Roundtable AI subcommittee.
            </article>
        </>
    )
}