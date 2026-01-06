import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
            <article>
                Aug 2025: Two pre-prints out!: <em><a href="https://arxiv.org/abs/2505.24246" target="_blank">Locating Risk: Task Designers and the Challenge of Risk Disclosure in RAI Content Work</a></em>, accepted to CSCW 2026, and <em><a href="https://arxiv.org/pdf/2509.12140" target="_blank">Worker Discretion Advised: Co-designing Risk Disclosure in Crowdsourced
Responsible AI (RAI) Content Work</a></em>, submitted to CHI. These projects were led by Alice Q. Zhang, and supported by myself, Ziqi Yang, Laura Dabbish, Jina Suh, and Hong Shen.  
            </article>
            <article>
                April 2025: I gave a talk titled <em>From questioning energy to questioning power: Deconstructing 'AI for Sustainability'</em> to members of Seton Hall University's Teaching, Learning, and Technology Roundtable AI subcommittee.
            </article>
            <article>
                December 2024: Hot off the (pre-print) press, with Tarleton Gillespie, Jina Suh and Mary Gray: <em><a href="https://arxiv.org/abs/2412.09751" target="_blank">AI Red Teaming is a Sociotechnical System. Now What? </a></em> 
            </article>
        </>
    )
}