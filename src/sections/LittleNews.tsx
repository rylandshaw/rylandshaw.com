import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
            <article>
                October 2024: Nancy Baym, Chuncheng Liu and I had our upcoming paper accepted to AoIR, <em>"It’s a Friend! It’s a Puppy! It’s AI!: Making Sense of Copilot"</em>. See you in Sheffield!
            </article>
            <article>
                November 2024: I am organizing a hybrid workshop at CSCW in Costa Rica on the <em><a href="https://sites.google.com/view/thehumanfactorinairedteaming/home?authuser=0" target="_blank">Human Factor in AI Red Teaming</a></em>, alongside a team of researchers from Microsoft Research, Carnegie Mellon, UI Chicago and U of Michigan.
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