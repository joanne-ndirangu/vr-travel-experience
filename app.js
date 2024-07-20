document.addEventListener('DOMContentLoaded', function() {
    let destinations = [
        {
            id: 1,
            name: "Paris, France",
            description: "Explore the romantic streets of Paris and visit iconic landmarks like the Eiffel Tower.",
            imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fHww",
            virtualTourUrl: "https://youtu.be/1_XzrxXnwMM?si=heXL2ZzaOkYpVvh4",
            travelPackages: [
                {
                    name: "Romantic Getaway",
                    description: "Enjoy a romantic weekend in Paris with a private tour and luxury accommodation.",
                    price: "$1500"
                },
                {
                    name: "Family Adventure",
                    description: "Experience Paris with your family with guided tours and family-friendly activities.",
                    price: "$2000"
                }
            ],
            userReviews: [
                {
                    username: "Traveler123",
                    rating: 5,
                    review: "Absolutely loved my virtual tour of Paris! It felt so real!"
                },
                {
                    username: "Explorer456",
                    rating: 4,
                    review: "Great experience exploring Paris from the comfort of my home."
                }
            ]
        },
        {
            id: 2,
            name: "Kyoto, Japan",
            description: "Immerse yourself in the beauty of Kyoto's temples, gardens, and traditional culture.",
            imageUrl: "https://media.istockphoto.com/id/902966276/photo/kyoto-japan-in-spring.webp?b=1&s=170667a&w=0&k=20&c=RODeywvcF6NtsZlMWLsIOuazWyTnqX_TeWlXFshYFe0=",
            virtualTourUrl: "https://youtu.be/OjHbS-_nncw?si=nTN3hDlMb_w1hG-y",
            travelPackages: [
                {
                    name: "Zen Retreat",
                    description: "Experience tranquility in Kyoto with meditation sessions and temple visits.",
                    price: "$1200"
                },
                {
                    name: "Cultural Discovery",
                    description: "Discover Kyoto's rich culture with guided tours and tea ceremonies.",
                    price: "$1800"
                }
            ],
            userReviews: [
                {
                    username: "ZenTraveler",
                    rating: 5,
                    review: "Kyoto is a must-visit! The virtual tour was a serene experience."
                },
                {
                    username: "CultureSeeker",
                    rating: 4,
                    review: "Fascinating insights into Kyoto's culture. Loved every moment!"
                }
            ]
        },
        {
            id: 3,
            name: "New York City, USA",
            description: "Experience the bustling streets of NYC, visit Times Square, and see the Statue of Liberty.",
            imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
            virtualTourUrl: "https://youtu.be/-IpXdtWfneI?si=444mxV1VC-_dCZrw",
            travelPackages: [
                {
                    name: "City Explorer",
                    description: "Discover the iconic landmarks and hidden gems of New York City.",
                    price: "$1800"
                },
                {
                    name: "Broadway Special",
                    description: "Enjoy the best of Broadway shows with premium seats and backstage tours.",
                    price: "$2500"
                }
            ],
            userReviews: [
                {
                    username: "CityLover",
                    rating: 5,
                    review: "NYC is amazing! The virtual tour was like being there in person."
                },
                {
                    username: "ShowFanatic",
                    rating: 4,
                    review: "Loved the Broadway special package. Highly recommend!"
                }
            ]
        },
        {
            id: 4,
            name: "Sydney, Australia",
            description: "Explore the beautiful beaches and iconic Sydney Opera House.",
            imageUrl: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.webp?b=1&s=170667a&w=0&k=20&c=RbGrLAF446T6O5u30kIvUfKu2MrIg4f3f16VH1KcNdE=",
            virtualTourUrl: "https://youtu.be/HRg1gJi6yqc?si=cNPUSD4457e3vpG7",
            travelPackages: [
                {
                    name: "Beach Getaway",
                    description: "Relax on the stunning beaches of Sydney with guided tours and activities.",
                    price: "$1600"
                },
                {
                    name: "Cultural Tour",
                    description: "Discover the rich culture and history of Sydney with expert guides.",
                    price: "$2000"
                }
            ],
            userReviews: [
                {
                    username: "BeachBum",
                    rating: 5,
                    review: "Sydney's beaches are breathtaking! The virtual tour was spectacular."
                },
                {
                    username: "HistoryBuff",
                    rating: 4,
                    review: "Learned so much about Sydney's history. Great experience!"
                }
            ]
        },
    ];
})