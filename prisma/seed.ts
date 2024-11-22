// import { links } from "@/src/JSON/links";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.link.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {}, // Fields to update if the user already exists
    create: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  const links = [
    {
      category: "Open Source",
      description: "Fullstack React framework",
      id: 1,
      imageUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
      title: "Next.js",
      url: "https://nextjs.org",
    },
    {
      category: "Open Source",
      description: "Next Generation ORM for TypeScript and JavaScript",
      id: 2,
      imageUrl: "https://www.prisma.io/images/og-image.png",
      title: "Prisma",
      url: "https://prisma.io",
    },
    {
      category: "Open Source",
      description: "Utility-fist css framework",
      id: 3,
      imageUrl:
        "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",
      title: "TailwindCSS",
      url: "https://tailwindcss.com",
    },
    {
      category: "Open Source",
      description: "GraphQL implementation ",
      id: 4,
      imageUrl: "https://www.apollographql.com/apollo-home.jpg",
      title: "Apollo GraphQL",
      url: "https://apollographql.com",
    },
  ];

  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
