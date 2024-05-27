import penguin from '../assets/small penguin.svg'

export default function LittleNews() {
    return (
        <>
            <header>
                <img className='SmallImage' src={penguin} />
                <h2>Little News</h2>
            </header>
            <article>
                June 2024: A book chapter I wrote with Shane Gunster and Robert Neubauer, <em>Sourcing Matters: Activism, expertise and alternative media</em>, was accepted and will appear in Anabela Carvalho and Tarla Rai Peterson’s <em>Handbook on Environmental Communications</em>.
            </article>
            <article>
                March 2024: I was credited for research assistance on three recently published papers: Tarleton Gillespie, <em>Generative AI and the Politics of Visibility</em>; Janet A. Vertesi and danah boyd, <em>The Resource Bind: System Failure and Legitimacy Threats in Sociotechnical Organizations</em>; and Maria P. Angel and danah boyd, <em>Techno-legal Solutionism: Regulating Children’s Online Safety in the United States</em>.
            </article>
            <article>
                October 2023: I presented preliminary findings of my thesis at the Association of Internet Researchers conference in Philadelphia. The presentation was also accepted, but not presented at IAMCR23 and the Canadian Communication Association conferences.
            </article>
        </>
    )
}