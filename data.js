const rizalData = [
    {
        id: 1,
        location_name: "Calamba, Laguna",
        coordinates: [14.2117, 121.1653],
        transit: "local",
        significant_events: [
            {
                id: "e1",
                title: "Birth and Baptism",
                description: "José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. Baptized three days later by Father Rufino Collantes, he was the seventh child in a prosperous family of 11 children.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            },
            {
                id: "e2",
                title: "Teodora Alonso as First Teacher",
                description: "His mother served as his primary educator, teaching him the alphabet at age three, introducing him to Spanish poetry, and fostering his early wonder for the nature surrounding Laguna de Bay.",
                images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"]
            },
            {
                id: "e3",
                title: "Early Childhood Influences",
                description: "Growing up in a spacious stone house with a private library, Rizal spent hours observing local flora and fauna, sketching, and listening to native folklore from his mother and family servants.",
                images: ["https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400"]
            }
        ],
        description: "Calamba is the birthplace of José Rizal. The family's historic home and the tranquil lakeside scenery profoundly shaped his early artistic and intellectual character.",
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
        location_name: "Calamba (Early Tutors)",
        coordinates: [14.2150, 121.1600],
        transit: "local",
        significant_events: [
            {
                id: "e4",
                title: "Private Instruction",
                description: "Before formal academy enrollment, Rizal received customized foundation lessons from private home tutors including Maestro Celestino and Maestro Lucas Padua.",
                images: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400"]
            },
            {
                id: "e5",
                title: "Mentorship under Leon Monroy",
                description: "Leon Monroy, a former classmate of his father, boarded with the family to teach young Rizal Spanish and Latin grammar before passing away several months later.",
                images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"]
            }
        ],
        description: "His early home tutoring phase provided the strict linguistic bedrock that enabled him to easily surpass peers when entering formal school.",
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
        location_name: "Biñan, Laguna",
        coordinates: [14.3364, 121.0858],
        transit: "local",
        significant_events: [
            {
                id: "e6",
                title: "Studies under Maestro Justiniano Aquino Cruz",
                description: "At around age nine, Rizal was sent to Biñan for formal schooling. On his first day, when asked if he knew Spanish and Latin, he modestly replied that he knew only a little.",
                images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"]
            },
            {
                id: "e7",
                title: "Academic Dominance & Painting Lessons",
                description: "Despite facing initial bullying from older boys, Rizal quickly outperformed his classmates in grammar. He also took painting lessons from an old master named Juancho.",
                images: ["https://images.unsplash.com/photo-1562774053-701939374585?w=400"]
            }
        ],
        description: "Biñan marks Rizal's first time living away from home, proving his intellectual fortitude, competitive spirit, and artistic talent.",
        images: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400"
        ],
        next_stop_id: 4
    },
    {
        id: 4,
        location_name: "Ateneo Municipal de Manila",
        coordinates: [14.5995, 120.9842],
        transit: "local",
        significant_events: [
            {
                id: "e8",
                title: "The Carthaginians and Roman Empire",
                description: "Entering Ateneo in 1872 shortly after the Gomburza execution, Rizal started at the bottom of the external students (Carthaginians) but rapidly rose to become 'Emperor' of the internal students (Roman Empire).",
                images: ["https://images.unsplash.com/photo-1562774053-701939374585?w=400"]
            },
            {
                id: "e9",
                title: "Sobresaliente Honors & Artistry",
                description: "He earned Sobresaliente (Excellent) across all subjects, graduating in March 1877 with a Bachelor of Arts with highest honors while carving wood statues and writing poetry.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            }
        ],
        description: "Ateneo Municipal was where Rizal flourished under Jesuit instruction, mastering literature, philosophy, and carving out his nationalist worldview.",
        images: [
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400",
            "https://images.unsplash.com/photo-1524231768259-8cd1e3d71c79?w=400"
        ],
        next_stop_id: 5
    },
    {
        id: 5,
        location_name: "University of Santo Tomas (UST)",
        coordinates: [14.6091, 120.9899],
        transit: "local",
        significant_events: [
            {
                id: "e10",
                title: "Philosophy to Medicine Shift",
                description: "Rizal initially enrolled in Philosophy and Letters to please his father, but later shifted to Medicine (specializing in ophthalmology) to cure his mother's declining eyesight.",
                images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400"]
            },
            {
                id: "e11",
                title: "Racial Discrimination & Literary Triumphs",
                description: "Facing open hostility and rigid scholastic methods from Dominican professors, Rizal penned award-winning literary pieces like 'A la juventud filipina' before deciding to leave the country.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            }
        ],
        description: "UST provided higher medical instruction but also exposed Rizal to intense racial prejudice under the friar-run system, prompting his move to Europe.",
        images: [
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 6
    },
    {
        id: 6,
        location_name: "Madrid, Spain",
        coordinates: [40.4168, -3.7038],
        transit: "overseas",
        significant_events: [
            {
                id: "e12",
                title: "Universidad Central de Madrid",
                description: "Secretly departing in May 1882, Rizal earned dual licentiates in Medicine and Philosophy and Letters while associating with European intellectuals.",
                images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400"]
            },
            {
                id: "e13",
                title: "The Propaganda Movement",
                description: "He aligned with Filipino expatriates in Madrid and Barcelona to campaign peacefully for Spanish administrative reforms and equal rights.",
                images: ["https://images.unsplash.com/photo-1549144511-f099e773c147?w=400"]
            }
        ],
        description: "Madrid served as the prime hub for Rizal's professional medical qualifications and his deep dive into the overseas reform movement.",
        images: [
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 7
    },
    {
        id: 7,
        location_name: "Berlin, Germany",
        coordinates: [52.5200, 13.4050],
        transit: "overseas",
        significant_events: [
            {
                id: "e14",
                title: "Publication of Noli Me Tangere",
                description: "In March 1887, with funds borrowed from Maximo Viola, Rizal successfully published Noli Me Tangere in Berlin, exposing the brutal abuses of the Spanish friars.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            },
            {
                id: "e15",
                title: "Scientific Circles",
                description: "While in Berlin, he gained membership in the Anthropological, Ethnological, and Geographical Societies, earning the respect of prominent European scientists.",
                images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"]
            }
        ],
        description: "Berlin is where Rizal completed his groundbreaking anti-colonial novel Noli Me Tangere and cemented his reputation within international scientific communities.",
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400"
        ],
        next_stop_id: 8
    },
    {
        id: 8,
        location_name: "Ghent, Belgium",
        coordinates: [51.0543, 3.7174],
        transit: "overseas",
        significant_events: [
            {
                id: "e16",
                title: "Publishing El Filibusterismo",
                description: "In September 1891, enduring severe financial hardship and pawning his belongings, Rizal published El Filibusterismo, his darker, revolutionary sequel.",
                images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"]
            }
        ],
        description: "Ghent represents the challenging final stretch of Rizal's overseas writing career, resulting in his second monumental novel.",
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 9
    },
    {
        id: 9,
        location_name: "Manila (La Liga Filipina & Arrest)",
        coordinates: [14.6000, 120.9800],
        transit: "local",
        significant_events: [
            {
                id: "e17",
                title: "Founding La Liga Filipina",
                description: "Upon returning home in July 1892, Rizal established La Liga Filipina, a civic organization aimed at uniting the archipelago and fostering grassroots economic reform.",
                images: ["https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400"]
            },
            {
                id: "e18",
                title: "Arrest by Governor-General Despujol",
                description: "Fearing the political threat of La Liga, Spanish authorities arrested Rizal just days after its founding and ordered his swift deportation.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            }
        ],
        description: "Manila marked his dramatic return from Europe, the founding of his civic league, and his sudden arrest that triggered his exile.",
        images: [
            "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1524231768259-8cd1e3d71c79?w=400"
        ],
        next_stop_id: 10
    },
    {
        id: 10,
        location_name: "Dapitan, Zamboanga del Norte",
        coordinates: [8.6541, 123.4251],
        transit: "sea",
        significant_events: [
            {
                id: "e19",
                title: "Four Years of Productive Exile",
                description: "From 1892 to 1896, Rizal turned isolation into community progress by engineering a water system, opening a school for boys, and running a free medical clinic.",
                images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"]
            },
            {
                id: "e20",
                title: "Scientific Discovery & Josephine Bracken",
                description: "He collected local zoological and botanical specimens (including the Draco rizali) and met Josephine Bracken, whom he considered his wife.",
                images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400"]
            }
        ],
        description: "Dapitan was Rizal's haven of forced exile, where he dedicated his brilliant mind to public works, medicine, and scientific exploration.",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
        ],
        next_stop_id: 11
    },
    {
        id: 11,
        location_name: "Fort Santiago, Manila",
        coordinates: [14.5947, 120.9734],
        transit: "sea",
        significant_events: [
            {
                id: "e21",
                title: "Imprisonment & Rigged Military Trial",
                description: "Implicated in the outbreak of the 1896 revolution, Rizal was detained in Fort Santiago and subjected to a biased military trial that condemned him to death.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            },
            {
                id: "e22",
                title: "Composing Mi Último Adiós",
                description: "On the eve of his execution, he penned his timeless farewell masterpiece, Mi Último Adiós, hiding the manuscript inside an alcohol cooking stove.",
                images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"]
            }
        ],
        description: "Fort Santiago served as Rizal's final holding cell and the sacred place where he wrote his parting words to the Filipino nation.",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: 12
    },
    {
        id: 12,
        location_name: "Bagumbayan / Luneta",
        coordinates: [14.5826, 120.9787],
        transit: "local",
        significant_events: [
            {
                id: "e23",
                title: "Execution and Martyrdom",
                description: "At dawn on December 30, 1896, Rizal faced the firing squad calmly at Bagumbayan at the age of 35, transforming his ultimate sacrifice into the spark of the Philippine Revolution.",
                images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"]
            }
        ],
        description: "Bagumbayan (now Rizal Park) marks the final chapter of Rizal's life, standing forever as the national monument of his martyrdom and legacy.",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
        ],
        next_stop_id: null
    }
];