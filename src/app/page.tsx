import { GraphQLClient } from "graphql-request";

export default async function Home() {
    const client = new GraphQLClient("https://graphql.datocms.com/", {
        headers: {
            authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        },
    });

    const query = `
        query {
            allPages(filter: { label: { eq: "homePage" } }) {
                title
                description
                logo {
                    url
                }
            }
        }
    `;

    try {
        const data = await client.request(query);

        return (
            <div className="container">
                <nav className="nav">
                    <h1>NextRecycler</h1>
                    <ul className="nav-links">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/blog">BLOG</a></li>
                        <li><a href="https://toprrr.com" target="_blank">TR</a></li>
                    </ul>
                </nav>
                <main className="main">
                    <img src={data.allPages[0].logo.url} alt="Logo" className="logo" />
                    <h1>{data.allPages[0].title}</h1>
                    <p>{data.allPages[0].description}</p> 
                </main>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className="container">
                <h1 className="error">Error: Unable to fetch data</h1>
            </div>
        );
    }
}
