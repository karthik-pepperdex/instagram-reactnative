import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://kardev07.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1632988572081%2FfqFq6N6yH.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    user: USERS[0].user,
    likes: 26,
    caption: "How does the programming language you choose matter?",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Gourav Khunger",
        comment: "Good read! Recommended for all :)",
      },

      {
        user: "Mango",
        comment: "Nice",
      },
    ],
  },

  {
    imageUrl:
      "https://kardev07.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631765825003%2FNLBOTu8a-.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    user: USERS[3].user,
    likes: 26,
    caption: "What is TypeScript and why should you be using it",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "Rozen Deedi",
        comment: "Awesome bro 🔥✨",
      },

      {
        user: "Usman Sabuwala",
        comment:
          "TypeScript is what I hated at first TypeScript is what I loved at second",
      },
    ],
  },
];
