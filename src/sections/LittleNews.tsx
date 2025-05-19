import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
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
                November 2024: I organized a workshop at CSCW in Costa Rica on the <em><a href="https://sites.google.com/view/thehumanfactorinairedteaming/home?authuser=0" target="_blank">Human Factor in AI Red Teaming</a></em>, alongside a team of researchers from Microsoft Research, Carnegie Mellon, UI Chicago and U of Michigan.
            </article>
            <article>
                October 2024: Nancy Baym, Chuncheng Liu and I presented our work on the metaphors used to negotiate contested future visions of generative AI at AoIR: <em>"It’s a Friend! It’s a Puppy! It’s AI!: Making Sense of Copilot"</em>. 
            </article>
            <article>
                June 2024: A book chapter I wrote with Shane Gunster and Robert Neubauer, <em><a href="https://books.google.com/books?hl=en&lr=&id=mrI0EQAAQBAJ&oi=fnd&pg=PA259&ots=huaA9dlo9x&sig=g6PhWTRSL1AmBlGEVgS37X3rK0w#v=onepage&q&f=false" target="_blank">Sourcing matters: Voices in progressive alternative media</a></em>, was published in Anabela Carvalho and Tarla Rai Peterson’s <em>Handbook on Environmental Communications</em>.
            </article>
        </>
    )
}