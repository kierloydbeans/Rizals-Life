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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/binyagnirizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmlueWFnbmlyaXphbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM0NjY2LCJleHAiOjE3OTU4MjY2NjZ9.9l7Oqj2GOr6CCOBhCBpG41Q7i5Hp0vmA6VLEmFAyFPyn4_dvyubLEObp1W_vy5AcTM2xSj_AD1VpmnMsltsXFw"]
            },
            {
                id: "e2",
                title: "Teodora Alonso as First Teacher",
                description: "His mother served as his primary educator, teaching him the alphabet at age three, introducing him to Spanish poetry, and fostering his early wonder for the nature surrounding Laguna de Bay.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/donateodora.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZG9uYXRlb2RvcmEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNDY4NSwiZXhwIjoxNzk1ODI2Njg1fQ.URP58_W0FtJUNchypt65MO-HpYBSSQa9GsUtL-NQHIdotompYr3zPYbZNI1ukIuGGOLc8Rs4BUz8WGueyQyFkA"]
            },
            {
                id: "e3",
                title: "Early Childhood Influences",
                description: "Growing up in a spacious stone house with a private library, Rizal spent hours observing local flora and fauna, sketching, and listening to native folklore from his mother and family servants.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/calambahouse.png?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvY2FsYW1iYWhvdXNlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzQ3MDEsImV4cCI6MTc5NTgyNjcwMX0.Lx1f8OttRYZyiqRYJU8LZAmmWZV2R03x3_UQIEk96RcNeBL7LJOkx1ptV88-ru3YeRLRNk5gWYdLNkohH_ii2w"]
            }
        ],
        description: "Calamba is the birthplace of José Rizal. The family's historic home and the tranquil lakeside scenery profoundly shaped his early artistic and intellectual character.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/binyagnirizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmlueWFnbmlyaXphbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM0NjY2LCJleHAiOjE3OTU4MjY2NjZ9.9l7Oqj2GOr6CCOBhCBpG41Q7i5Hp0vmA6VLEmFAyFPyn4_dvyubLEObp1W_vy5AcTM2xSj_AD1VpmnMsltsXFw",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/donateodora.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZG9uYXRlb2RvcmEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNDY4NSwiZXhwIjoxNzk1ODI2Njg1fQ.URP58_W0FtJUNchypt65MO-HpYBSSQa9GsUtL-NQHIdotompYr3zPYbZNI1ukIuGGOLc8Rs4BUz8WGueyQyFkA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/calambahouse.png?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvY2FsYW1iYWhvdXNlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzQ3MDEsImV4cCI6MTc5NTgyNjcwMX0.Lx1f8OttRYZyiqRYJU8LZAmmWZV2R03x3_UQIEk96RcNeBL7LJOkx1ptV88-ru3YeRLRNk5gWYdLNkohH_ii2w",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/binyagnirizal1.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmlueWFnbmlyaXphbDEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNDgwOCwiZXhwIjoxNzk1ODI2ODA4fQ.8Wnt6glxJeOsttlxsFZ8fEPF_cjoFhnAE3piKeIImXvGDOQawDJ3eHWgbNONghY_c00Jj2I2IfnO3i7NTpRJLA"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/kidrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMva2lkcml6YWwuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNjk2NCwiZXhwIjoxNzk1ODI4OTY0fQ.YKAcY2Onlal7bIsBp1AE0F8cAtVXMK1TNWirSgGIpVlLqybnAMV6MklHI376NCc3sk_jSjb7TOFFXEee7L5DRA"]
            },
            {
                id: "e5",
                title: "Mentorship under Leon Monroy",
                description: "Leon Monroy, a former classmate of his father, boarded with the family to teach young Rizal Spanish and Latin grammar before passing away several months later.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/leonmonroy.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGVvbm1vbnJveS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MDA2LCJleHAiOjE3OTU4MjkwMDZ9.rkrc9wDug0tfEpAtsvt-_vVFbs1Ky2hHy7OPsGHb9TFOaXbVHdzMR4th-vw7T6-LnJoBBgQftG3IiFRsY9LlHA"]
            }
        ],
        description: "His early home tutoring phase provided the strict linguistic bedrock that enabled him to easily surpass peers when entering formal school.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/kidrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMva2lkcml6YWwuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNjk2NCwiZXhwIjoxNzk1ODI4OTY0fQ.YKAcY2Onlal7bIsBp1AE0F8cAtVXMK1TNWirSgGIpVlLqybnAMV6MklHI376NCc3sk_jSjb7TOFFXEee7L5DRA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/leonmonroy.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGVvbm1vbnJveS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MDA2LCJleHAiOjE3OTU4MjkwMDZ9.rkrc9wDug0tfEpAtsvt-_vVFbs1Ky2hHy7OPsGHb9TFOaXbVHdzMR4th-vw7T6-LnJoBBgQftG3IiFRsY9LlHA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/josealberto.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvam9zZWFsYmVydG8uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzAzNCwiZXhwIjoxNzk1ODI5MDM0fQ.Picj-_oTBSMeQLqL45-xbzJjs0SLkEjWzADSaoVb2Z4OAwuLQlz-LgUJBi8oUz7-uOUcrlbbCQ_thI2vph_QTQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/younrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMveW91bnJpemFsLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcwNDgsImV4cCI6MTc5NTgyOTA0OH0.RGnOa69HibBT-wM_ux024IQsKxw_mOpIzaF1YWBUBvGNmbfvtrCvM_LfqvgXt7erXR3epN9GTeQ-2siXCrWFpQ"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/maestrojustiniano.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbWFlc3Ryb2p1c3Rpbmlhbm8uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzA5MiwiZXhwIjoxNzk1ODI5MDkyfQ.9_m21IkyeDb8Bip1bl74XnUFndUVPzM9vOIK3mbclgO0e_jigc3VspaHsLjXbKX2nE8p6IkSPZFiMZO_Ss0ZiA"]
            },
            {
                id: "e7",
                title: "Academic Dominance & Painting Lessons",
                description: "Despite facing initial bullying from older boys, Rizal quickly outperformed his classmates in grammar. He also took painting lessons from an old master named Juancho.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/oldjuancho.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvb2xkanVhbmNoby5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MTIxLCJleHAiOjE3OTU4MjkxMjF9.8ZwLqFXa4om6_w3LoUY5sfRpixjCNa4y-TQmOkIvRx48dp9XMpmwB0FvaM4VJ7qfECs4AUU_U2wtveZkn-suIg"]
            }
        ],
        description: "Biñan marks Rizal's first time living away from home, proving his intellectual fortitude, competitive spirit, and artistic talent.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/maestrojustiniano.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbWFlc3Ryb2p1c3Rpbmlhbm8uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzA5MiwiZXhwIjoxNzk1ODI5MDkyfQ.9_m21IkyeDb8Bip1bl74XnUFndUVPzM9vOIK3mbclgO0e_jigc3VspaHsLjXbKX2nE8p6IkSPZFiMZO_Ss0ZiA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/oldjuancho.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvb2xkanVhbmNoby5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MTIxLCJleHAiOjE3OTU4MjkxMjF9.8ZwLqFXa4om6_w3LoUY5sfRpixjCNa4y-TQmOkIvRx48dp9XMpmwB0FvaM4VJ7qfECs4AUU_U2wtveZkn-suIg",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalfirstpainting.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxmaXJzdHBhaW50aW5nLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcxNDgsImV4cCI6MTc5Mzg0MTk0OH0.HZw8tiXcLUguDyIqg3zYkylkRteci16owoboIfOWkAA1Z_XzTNFI3glr0hKsI23QW1nwkqjaW8-YRsNDG7D6HA"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ateneo.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYXRlbmVvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcxOTAsImV4cCI6MTc5NTgyOTE5MH0.8eY8jxoMxHofqXVqvxSoW_r0qcbH6B9AcQBxmzvV6fWqH9mb47auQZH7t0y0Wzmr_B2cOjaX4d8rBaBUhCN0JQ"]
            },
            {
                id: "e9",
                title: "Sobresaliente Honors & Artistry",
                description: "He earned Sobresaliente (Excellent) across all subjects, graduating in March 1877 with a Bachelor of Arts with highest honors while carving wood statues and writing poetry.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ateneo.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYXRlbmVvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcyMjQsImV4cCI6MTc5NTgyOTIyNH0.3kSeA9xjld1yJ9JsSRw1oVxPuT8uW0QcK8e5Lhg9Xi4cZW741jwyWnv5vch1P-Mxr28F1rIBw952sKLUf94NvQ"]
            }
        ],
        description: "Ateneo Municipal was where Rizal flourished under Jesuit instruction, mastering literature, philosophy, and carving out his nationalist worldview.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ateneo.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYXRlbmVvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcxOTAsImV4cCI6MTc5NTgyOTE5MH0.8eY8jxoMxHofqXVqvxSoW_r0qcbH6B9AcQBxmzvV6fWqH9mb47auQZH7t0y0Wzmr_B2cOjaX4d8rBaBUhCN0JQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ateneo.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYXRlbmVvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcyMjQsImV4cCI6MTc5NTgyOTIyNH0.3kSeA9xjld1yJ9JsSRw1oVxPuT8uW0QcK8e5Lhg9Xi4cZW741jwyWnv5vch1P-Mxr28F1rIBw952sKLUf94NvQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ateneanrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYXRlbmVhbnJpemFsLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcyNTcsImV4cCI6MTc5NTgyOTI1N30.nRQeE2opYrZGFsjVYGrJp-L9VfkjLgi4WhGn74mh9wJEoZNMS9CdINdniv4KVCOQVav50iXjYtj-teE_e5K3Ew",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalateneocert.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxhdGVuZW9jZXJ0LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc0MjEsImV4cCI6MTc5NTgyOTQyMX0.s2RQwYMb4vghqV4zSGULbJp2fu3rBS7uMePOBK5jQXC-ZkK5eVbVW6sCpZGCl0ndbgCv_UZ140L7yhmkBg2JNA"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ust.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdXN0LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcyODgsImV4cCI6MTc5NTgyOTI4OH0.taAn4OIxzKthYEmzT0qIls7BT1iXF77scuyPqnGErmLswfA2zTps6SXdzibCRYBRRqD92zXyw96QmD1Pii6Jbg"]
            },
            {
                id: "e11",
                title: "Racial Discrimination & Literary Triumphs",
                description: "Facing open hostility and rigid scholastic methods from Dominican professors, Rizal penned award-winning literary pieces like 'A la juventud filipina' before deciding to leave the country.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/tomasianrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdG9tYXNpYW5yaXphbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MzE2LCJleHAiOjE3OTU4MjkzMTZ9.C-nin9ysMsuDNB51TZBBQvtBjrxnHrejSVbxwpq1GhNRVd4HoLCjzZk4smPE5gt8JlMXq-e1ACPPKFRGxfkUyQ"]
            }
        ],
        description: "UST provided higher medical instruction but also exposed Rizal to intense racial prejudice under the friar-run system, prompting his move to Europe.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ust.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdXN0LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzcyODgsImV4cCI6MTc5NTgyOTI4OH0.taAn4OIxzKthYEmzT0qIls7BT1iXF77scuyPqnGErmLswfA2zTps6SXdzibCRYBRRqD92zXyw96QmD1Pii6Jbg",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/tomasianrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdG9tYXNpYW5yaXphbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3MzE2LCJleHAiOjE3OTU4MjkzMTZ9.C-nin9ysMsuDNB51TZBBQvtBjrxnHrejSVbxwpq1GhNRVd4HoLCjzZk4smPE5gt8JlMXq-e1ACPPKFRGxfkUyQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalustgrades.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWx1c3RncmFkZXMuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzQ0MywiZXhwIjoxNzk1ODI5NDQzfQ.bGsxEugAlDs0JEjmFkFPawrcqaN_Elh9R56D7cwxj__G_Waxu_gT_FepZm3F51MU3gwYYDS6fglH5YcdkFrU0A",
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalmadrid.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxtYWRyaWQuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzQ4MCwiZXhwIjoxNzk1ODI5NDgwfQ.tMe5zMXvFZI2bG0GtDHHxms2w4wHdT0sGic6lJyAIE0iLfjlhIcJG3694dM0i-DICgaohvDAmHOek6w0zk-wXg"]
            },
            {
                id: "e13",
                title: "The Propaganda Movement",
                description: "He aligned with Filipino expatriates in Madrid and Barcelona to campaign peacefully for Spanish administrative reforms and equal rights.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/madridriza.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbWFkcmlkcml6YS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3NDk3LCJleHAiOjE3OTU4Mjk0OTd9.wzVhaijkGMlHFKON5aCiB4YTGEVSdPGw4hQHk99zVVG9nh1LivNrXjWKNDQ5yx_dV-KQP-cdIrti2szjF5Og5Q"]
            }
        ],
        description: "Madrid served as the prime hub for Rizal's professional medical qualifications and his deep dive into the overseas reform movement.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/madridriza.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbWFkcmlkcml6YS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3NDk3LCJleHAiOjE3OTU4Mjk0OTd9.wzVhaijkGMlHFKON5aCiB4YTGEVSdPGw4hQHk99zVVG9nh1LivNrXjWKNDQ5yx_dV-KQP-cdIrti2szjF5Og5Q",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalmadrid.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxtYWRyaWQuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzUzOSwiZXhwIjoxNzk1ODI5NTM5fQ.s_MhvEBydRNcFnyiNI_ZLp8NnB1Ly5pCeJaTLPaMYL6KldoWCLl0p8i2DDtNZ-S7gMDq3_sxbia1X2zEZ3OVBQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/univesidaddemadrid.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdW5pdmVzaWRhZGRlbWFkcmlkLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc2NDEsImV4cCI6MTc5NTgyOTY0MX0.kjyUrWbKbNEL3m_PMslGat3vAAlIdZM4BLirXREfp7JcMCJzhktcwrz1Xm-J2Dq0af1nnYRjwhHED-oZgf-8Zg"   ],
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
                images: "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/noli.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbm9saS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3Njc0LCJleHAiOjE3OTU4Mjk2NzR9.uJObVUjsPHdDsHs6FBaVmGOFHRs9gngkRWihW73w9pBu9Y2KvQKcMq3u-KuZ8QoSCZy7ln-0MswTgDCSN-CUaA"
            },
            {
                id: "e15",
                title: "Scientific Circles",
                description: "While in Berlin, he gained membership in the Anthropological, Ethnological, and Geographical Societies, earning the respect of prominent European scientists.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/berlin.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmVybGluLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc3MTAsImV4cCI6MTc5NTgyOTcxMH0.ZdD1pTdk66Yr7RDs-GZqYvC-4D-NEp5jOxpv2zu5d36fQC4cpJMVrk5dqL-KIk3HuEP2cib8XrFyY-w_XAqk-g"]
            }
        ],
        description: "Berlin is where Rizal completed his groundbreaking anti-colonial novel Noli Me Tangere and cemented his reputation within international scientific communities.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/noli.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbm9saS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3NzM3LCJleHAiOjE3OTU4Mjk3Mzd9.CeopmI-EC7Uujoa-zaueRUZ4RmvJ45Vwg8lghxKXwGDIv_eRH0Vs6ct4H0-AvBx6JQnQi0NWWv5GQtjXs3bJKg",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/berlin.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmVybGluLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc3MTAsImV4cCI6MTc5NTgyOTcxMH0.ZdD1pTdk66Yr7RDs-GZqYvC-4D-NEp5jOxpv2zu5d36fQC4cpJMVrk5dqL-KIk3HuEP2cib8XrFyY-w_XAqk-g",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/viola.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvdmlvbGEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzc1MSwiZXhwIjoxNzk1ODI5NzUxfQ.t_OpKykKXjWVvsChwFZ_kMzjRYGakh6_tdbpwwVC3J5bv9-nk-GhrDNtOsMBlvbyvC0VfsV0qVXaF9UFs40owQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/berlin1886sketchrizal.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvYmVybGluMTg4NnNrZXRjaHJpemFsLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc3ODIsImV4cCI6MTc5NTgyOTc4Mn0.0-L7QHvSGx11gcj4sCDCvXdISTsxX_qBXmWick2HWUrzGwMyYauN8zAuFbdn78qRxr0uJiMS25tvA41uqw9z8Q"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/elfili.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZWxmaWxpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc4MjEsImV4cCI6MTc5NTgyOTgyMX0.iD6QD7xWzPYP81iYxn5i8kY_nHuuznEUDMvA78tmy24GhV2m3qam4Ee_tg-BSOa-6xz2vleZGTUsGfD5zSg_wA"]
            }
        ],
        description: "Ghent represents the challenging final stretch of Rizal's overseas writing career, resulting in his second monumental novel.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ghent.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZ2hlbnQuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzgzNSwiZXhwIjoxNzk1ODI5ODM1fQ.cKkxxrT6PpJC5_0XKU6TBJstcQB3hJ-A5aHTsmfH2ahnYDdCCdSm1mbziTCutBfJ4F2S3gsGZDJVVUgcPiqeSw",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ghent1.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZ2hlbnQxLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc4NTUsImV4cCI6MTc5NTgyOTg1NX0.uWYA03CJC1t4qSSIxz4SBAGp0-0q9Gb1waQKDlEz955ET_furHZZbzsBNQglfR25fjVVFMzKlyejT95HK-SLDw",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/ghent2.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZ2hlbnQyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc4NzYsImV4cCI6MTc5NTgyOTg3Nn0.3DDUHrTPYF0X2tMI5KUcCJx5OyQTavpjERc6dwkwDWaSDCOIH6OgLciLcqyioffJVApN5qwdDJxnqmxI-en9JQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/elfili.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZWxmaWxpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc4ODUsImV4cCI6MTc5NTgyOTg4NX0.IXwehzsjK5nKuOSzNa-mE2HPgPayCnKgDs71UYd-_KCeMCn22HPDfCtLxuK3SG5S8rK2HLxQOk4l-fhYvn54Fw"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/la%20liga%20filipina.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGEgbGlnYSBmaWxpcGluYS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3OTA3LCJleHAiOjE3OTU4Mjk5MDd9.3lazSRFsBhQ5Ls8W6spVbMzWAfGc-6WpS8AdlWC0bo-UbRGCVwP_vcdn8SHvPD-QokFlr0NLnqL3yKofDpaw9A"]
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
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/la%20liga%20filipina.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGEgbGlnYSBmaWxpcGluYS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3OTA3LCJleHAiOjE3OTU4Mjk5MDd9.3lazSRFsBhQ5Ls8W6spVbMzWAfGc-6WpS8AdlWC0bo-UbRGCVwP_vcdn8SHvPD-QokFlr0NLnqL3yKofDpaw9A",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/laliga.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGFsaWdhLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzc5MjcsImV4cCI6MTc5NTgyOTkyN30.ItvczS8r7Dd2-4vrnkVK2Z4PaWFdmWH48M1QqJBMMoK6WDvxUSSUcRBKhwyMUw421YgU3JOPOcX5UWOyPsfwUw",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/laligamonu.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbGFsaWdhbW9udS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM3OTQwLCJleHAiOjE3OTU4Mjk5NDB9.VMpNEQf7ra-t2AyLcbkpMMNY0nkA7WTBEy-sCpZTO6Ii9IY4hVHB_1WaQNMD-9I-2dBwtBqzGlHLUNCkRr2gtQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/despujol.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZGVzcHVqb2wuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzNzk1MywiZXhwIjoxNzk1ODI5OTUzfQ.neq12VLVb1gWFTag3DdCbqWFvwlWisTSwzfjHgOXW7GOlWIit4EKbmRPWwfEdOJfDuYXwxMBLlkpjcxvk91GBg"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/dracorizali.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZHJhY29yaXphbGkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODAwMywiZXhwIjoxNzk1ODMwMDAzfQ.0I6bZbLXewnHdnYwCyekXRX7WRO5y9prMk6pZvsSN-LAK0PhuAulKGxaKk535yWItTB9sPejVnycuNNPHVrTpQ"]
            },
            {
                id: "e20",
                title: "Scientific Discovery & Josephine Bracken",
                description: "He collected local zoological and botanical specimens (including the Draco rizali) and met Josephine Bracken, whom he considered his wife.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalbracken.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxicmFja2VuLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgwMTksImV4cCI6MTc5NTgzMDAxOX0.VLap8Bwszv-no-mDc6wUO5-r3TfmkflCjEF2XxBTnBgtHgCphQ0pQkQ218qy0GE8WnAe_c7nJ_tOw6Z18f3coQ"]
            }
        ],
        description: "Dapitan was Rizal's haven of forced exile, where he dedicated his brilliant mind to public works, medicine, and scientific exploration.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalbracken.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxicmFja2VuLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgwMTksImV4cCI6MTc5NTgzMDAxOX0.VLap8Bwszv-no-mDc6wUO5-r3TfmkflCjEF2XxBTnBgtHgCphQ0pQkQ218qy0GE8WnAe_c7nJ_tOw6Z18f3coQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/dracorizali.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZHJhY29yaXphbGkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODA1OSwiZXhwIjoxNzk1ODMwMDU5fQ.yVaX9YNfIuafImb1dGr4tj3PfQXZ0XkoEb3k882bqxOkkc3MyYVCf_HXtpVjMBE5PxuPkCIMlbuz8Vevz7MVQw",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizallanding.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxsYW5kaW5nLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgwNzMsImV4cCI6MTc5NTgzMDA3M30.JlA2y3nZMCA3KtIs_oIkR2W56_or5ioTo2DBLplzJgc0Y-HNgKo0BN5hrGBB_I-54Fic6qCn0IVwjwxJ-12O0A",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalexilehouse.png?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxleGlsZWhvdXNlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgwOTQsImV4cCI6MTc5NTgzMDA5NH0.MIPn0ycKNmQFwPQovKerPQDYnL3gbIBfoYZgWSdj7cNAy3TGGELaD4UU6OQTwq8kbbobxkzOAOPZphlW-_GQrA"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalprisonstatue.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxwcmlzb25zdGF0dWUuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODExNCwiZXhwIjoxNzk1ODMwMTE0fQ.WVgqgXLZeKeBk2bpidLs29i2WqWQT3kKOh8nHfM63g5VYgxwfdcb11M4qRr1ehg_8pIhKSXC6jUKTAMMC7iS6A"]
            },
            {
                id: "e22",
                title: "Composing Mi Último Adiós",
                description: "On the eve of his execution, he penned his timeless farewell masterpiece, Mi Último Adiós, hiding the manuscript inside an alcohol cooking stove.",
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizaltrial.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWx0cmlhbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM4MTMwLCJleHAiOjE3OTU4MzAxMzB9._IvDuQn1Bh8L6FS0nFUx1mFnyKj6HuTxn6OkgzfrCuVFxPWNyfDlzOG_q9jhE_a415CsA_zXPgcExxy2h3u_xQ"]
            }
        ],
        description: "Fort Santiago served as Rizal's final holding cell and the sacred place where he wrote his parting words to the Filipino nation.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizaltrial.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWx0cmlhbC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM4MTMwLCJleHAiOjE3OTU4MzAxMzB9._IvDuQn1Bh8L6FS0nFUx1mFnyKj6HuTxn6OkgzfrCuVFxPWNyfDlzOG_q9jhE_a415CsA_zXPgcExxy2h3u_xQ",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalprisonstatue.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxwcmlzb25zdGF0dWUuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODE2NCwiZXhwIjoxNzk1ODMwMTY0fQ.upk3D5quPBzVVR5Jjc3Cc-jlL8PW2A5A_sK121YvapjuBhT9yJXm7JMZwnEta7FwiOyOyCbiCn-HU4IrJ0G2FA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalfortstatue4.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxmb3J0c3RhdHVlNC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM4MTk4LCJleHAiOjE3OTU4MzAxOTh9.r4PXbYTfmNq4sDfkpd7hmpNg1ioZn46y-65Re5mOJlfnWJfJ-iM1lNSGHzA_oqci_A-PfYRTLJho1RdPkdOPag",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/fortsantiago.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvZm9ydHNhbnRpYWdvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgyMTIsImV4cCI6MTc5NTgzMDIxMn0.QbcGSy-MMiy5a4Fayj7s9nCFq91b-4HPBcBT5bGgEqP5Bdhkwh7txWZiIoZ29TQ3tZ0gss1LVOOAPXiYphIOMg",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/miultimoadios.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvbWl1bHRpbW9hZGlvcy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMjM4MjM1LCJleHAiOjE3OTU4MzAyMzV9.1dLQ8za0pDZ_NkRG7Nun1Mn0bDP9I0tCBnmsE7V7Ur4htWAAIzFDucIvwxyD_m7ogosxdALV2uWQqMSnsGCx7Q"
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
                images: ["https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalmartyrdom.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxtYXJ0eXJkb20uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODI2OCwiZXhwIjoxNzk1ODMwMjY4fQ.hOPZyAHltjRvwzbnSKRTjRCsqRkUV2GOpwTQk5E7EWIdVaDAB40zwLiHGC1VXUT5j-US1WdMt6NZMr2IM8UN2g"]
            }
        ],
        description: "Bagumbayan (now Rizal Park) marks the final chapter of Rizal's life, standing forever as the national monument of his martyrdom and legacy.",
        images: [
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalmartyrdom.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxtYXJ0eXJkb20uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODI2OCwiZXhwIjoxNzk1ODMwMjY4fQ.hOPZyAHltjRvwzbnSKRTjRCsqRkUV2GOpwTQk5E7EWIdVaDAB40zwLiHGC1VXUT5j-US1WdMt6NZMr2IM8UN2g",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalexecution.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxleGVjdXRpb24uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODI5MywiZXhwIjoxNzk1ODMwMjkzfQ.TjOn3LyO4R_mkVZSebmIh3lxX-jsuAodO-xRkFFOEKb-Ba_bAyJF-b3NOqCWWF-WjVjgLGzUjQ2YCeb0AqHwcg",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/consummatumest.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvY29uc3VtbWF0dW1lc3QuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzIzODMxOSwiZXhwIjoxNzk1ODMwMzE5fQ.bDlWn8yPZdKGXm6FAHyAOEev-_XFXr39JatzFUPmqIlIENTeBgPBzh2X-sXW_X2hyvNmtxFgbxT4xLXHm-flfA",
            "https://rsqrklcqhcyqxscvoudd.supabase.co/storage/v1/object/sign/rizal-images/rizalsfootsteps.jpg?token=eyJraWQiOiI0Y2Q1MmZlYi0xNGQ2LTQxYTUtOGRmMS0wZTBiNWE4ODQ3OTIiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJyaXphbC1pbWFnZXMvcml6YWxzZm9vdHN0ZXBzLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMyMzgzMzIsImV4cCI6MTc5NTgzMDMzMn0.bleUTIZigT47yYB4unQmFFpjJ-wy3VwGYM64h24TSUl7j5Fhx-CLxpcJ8NfUHhUkIm3lMSHB4HgdfOcOdTXeyw"
        ],
        next_stop_id: null
    }
];