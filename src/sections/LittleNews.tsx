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
                December 2024: I helped write and produce several short videos that mobilized great work done at Microsoft Research, like: <em><a href="https://www.microsoft.com/en-us/research/video/pronouns-in-the-workplace-learning-inclusive-software-design-from-real-world-experiences/" target="_blank">Pronouns in the Workplace: Learning Inclusive Software Design from Real-World Experiences</a></em> and <em><a href="https://www.youtube.com/watch?v=XsGqgaxy3Mo/" target="_blank">What Language Does AI Speak?</a></em> (which won an award from the Association for the Advancement of Artificial Intelligence!)
            </article>
            <article>
                December 2024: Hot off the (pre-print) press, with Tarleton Gillespie, Jina Suh and Mary Gray: <em><a href="https://arxiv.org/abs/2412.09751" target="_blank">AI Red Teaming is a Sociotechnical System. Now What? </a></em> 
            </article>
            <article>
                June 2024: A book chapter I wrote with Shane Gunster and Robert Neubauer, <em><a href="https://books.google.com/books?hl=en&lr=&id=mrI0EQAAQBAJ&oi=fnd&pg=PA259&ots=huaA9dlo9x&sig=g6PhWTRSL1AmBlGEVgS37X3rK0w#v=onepage&q&f=false" target="_blank">Sourcing matters: Voices in progressive alternative media</a></em>, was published in Anabela Carvalho and Tarla Rai Peterson’s <em>Handbook on Environmental Communications</em>.
            </article>
        </>
    )
}