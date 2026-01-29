export const projectsData = [
    {
        title: "Project (W)NBA",
        description: "Project (W)NBA is a self-directed data engineering and analytics initiative designed to creatively showcase the evolution of the NBA and WNBA through data. As the sole architect, I extracted, cleaned, and modeled structured historical basketball data—including player statistics, team records, playoff results, and award achievements—from multiple external sources. I built cloud-based pipelines, constructed relational data tables, and unified these sources into a centralized mega table, enabling robust visualizations. The final product features six interactive dashboards (three each for NBA and WNBA) in Domo, allowing users to explore trends, compare performance across eras, and engage with basketball history in an accessible, visual format. This project highlights my technical ability in data engineering and visualization, as well as a strong focus on storytelling and user experience.",
        dashboards: [
            {
                id: "nba-swish",
                category: "NBA",
                title: "Swish Central",
                url: "https://embed.domo.com/embed/pages/289wJ",
                color: "#17408B" // NBA Blue-ish
            },
            {
                id: "nba-regular",
                category: "NBA",
                title: "Regular Season Highlights",
                url: "https://embed.domo.com/embed/pages/5R0oB",
                color: "#C9082A" // NBA Red-ish
            },
            {
                id: "nba-playoff",
                category: "NBA",
                title: "Playoff Highlights",
                url: "https://embed.domo.com/embed/pages/0YnY5",
                color: "#17408B"
            },
            {
                id: "wnba-swish",
                category: "WNBA",
                title: "Swish Central",
                url: "https://embed.domo.com/embed/pages/jZwZy",
                color: "#FF671F" // WNBA Orange
            },
            {
                id: "wnba-regular",
                category: "WNBA",
                title: "Regular Season Highlights",
                url: "https://embed.domo.com/embed/pages/lxyxj",
                color: "#000000"
            },
            {
                id: "wnba-playoff",
                category: "WNBA",
                title: "Playoff Highlights",
                url: "https://embed.domo.com/embed/pages/nxAR5",
                color: "#FF671F"
            }
        ]
    }
]
