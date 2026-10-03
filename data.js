const rizalData = [
    {
        id: 1,
        location_name: "Calamba, Laguna",
        coordinates: [14.2117, 121.1653],
        transit: "local",
        significant_events: [
            {
                id: "e1",
                title: "Birth of Rizal",
                description: "Jose Rizal was born on June 19, 1861, in the ancestral house of the Rizal family in Calamba, Laguna. He was the seventh child in a family of 11 children.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            },
            {
                id: "e2",
                title: "Early Childhood",
                description: "Rizal spent his early childhood in Calamba, where he developed his love for nature and learning. His mother taught him to read and write at an early age.",
                images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"]
            }
        ],
        description: "Calamba is the birthplace of Jose Rizal. The Rizal ancestral house, now a museum, stands as a testament to his humble beginnings.",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 2
    },
    {
        id: 2,
        location_name: "Biñan, Laguna",
        coordinates: [14.3364, 121.0858],
        transit: "local",
        significant_events: [
            {
                id: "e3",
                title: "First Formal Education",
                description: "At age 9, Rizal was sent to Biñan to study under Maestro Justiniano Aquino Cruz. This was his first formal schooling outside Calamba.",
                images: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400"]
            },
            {
                id: "e4",
                title: "School Days",
                description: "In Biñan, Rizal excelled in his studies and showed early signs of his intellectual prowess. He boarded with his aunt's family during this time.",
                images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"]
            }
        ],
        description: "Biñan, Laguna is where Rizal received his first formal education. The town preserves the memory of his early academic achievements.",
        images: [
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400"
        ],
        next_stop_id: 3
    },
    {
        id: 3,
        location_name: "Manila / UST",
        coordinates: [14.6091, 120.9899],
        transit: "local",
        significant_events: [
            {
                id: "e5",
                title: "University Studies",
                description: "Rizal enrolled at the University of Santo Tomas, the oldest university in Asia, where he studied philosophy and letters before switching to medicine.",
                images: ["https://images.unsplash.com/photo-1562774053-701939374585?w=400"]
            },
            {
                id: "e6",
                title: "Literary Works",
                description: "During his time in Manila, Rizal wrote several poems and essays that showcased his growing nationalism and literary talent.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            }
        ],
        description: "Manila, particularly the University of Santo Tomas, was where Rizal pursued higher education and began his journey as a writer and thinker.",
        images: [
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400",
            "https://images.unsplash.com/photo-1524231768259-8cd1e3d71c79?w=400"
        ],
        next_stop_id: 4
    },
    {
        id: 4,
        location_name: "Madrid, Spain",
        coordinates: [40.4168, -3.7038],
        transit: "overseas",
        significant_events: [
            {
                id: "e7",
                title: "Medical Studies",
                description: "Rizal traveled to Madrid to continue his medical studies at the Universidad Central de Madrid. He graduated with honors in 1884.",
                images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400"]
            },
            {
                id: "e8",
                title: "Noli Me Tangere",
                description: "In Madrid, Rizal wrote his first novel, Noli Me Tangere, which exposed the abuses of Spanish colonial rule in the Philippines.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            }
        ],
        description: "Madrid, Spain was where Rizal completed his medical degree and wrote his groundbreaking novel Noli Me Tangere, becoming a leading figure in the Propaganda Movement.",
        images: [
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 5
    },
    {
        id: 5,
        location_name: "Dapitan, Zamboanga del Norte",
        coordinates: [8.6541, 123.4251],
        transit: "sea",
        significant_events: [
            {
                id: "e9",
                title: "Exile",
                description: "Rizal was exiled to Dapitan for four years (1892-1896) by the Spanish authorities. Despite his isolation, he remained productive and served the community.",
                images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"]
            },
            {
                id: "e10",
                title: "Community Service",
                description: "In Dapitan, Rizal practiced medicine, taught local children, established a school, and engaged in agricultural and scientific projects.",
                images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400"]
            }
        ],
        description: "Dapitan was Rizal's place of exile where he continued to serve his people through education, medicine, and community development projects.",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
        ],
        next_stop_id: 6
    },
    {
        id: 6,
        location_name: "Bagumbayan / Luneta",
        coordinates: [14.5826, 120.9787],
        transit: "sea",
        significant_events: [
            {
                id: "e11",
                title: "Martyrdom",
                description: "On December 30, 1896, Rizal was executed by firing squad at Bagumbayan (now Rizal Park or Luneta). His death sparked the Philippine Revolution.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            },
            {
                id: "e12",
                title: "Final Legacy",
                description: "Rizal's final walk to his execution site and his last words, 'Consummatum est' (It is finished), became symbols of Filipino patriotism and sacrifice.",
                images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"]
            }
        ],
        description: "Bagumbayan, now known as Luneta or Rizal Park, is the site of Rizal's execution. It stands as a national monument to his martyrdom and legacy.",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: null
    }
];
