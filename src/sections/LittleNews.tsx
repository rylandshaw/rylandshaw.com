import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
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
                June 2024: A book chapter I wrote with Shane Gunster and Robert Neubauer, <em>Sourcing Matters: Activism, expertise and alternative media</em>, was accepted and will appear in Anabela Carvalho and Tarla Rai Peterson’s <em>Handbook on Environmental Communications</em>.
            </article>
            <article>
                March 2024: I was credited for research assistance on three recently published papers: Tarleton Gillespie, <em>Generative AI and the Politics of Visibility</em>; Janet A. Vertesi and danah boyd, <em>The Resource Bind: System Failure and Legitimacy Threats in Sociotechnical Organizations</em>; and Maria P. Angel and danah boyd, <em>Techno-legal Solutionism: Regulating Children’s Online Safety in the United States</em>.
            </article>
        </>
    )
}