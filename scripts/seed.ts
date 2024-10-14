import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the DATABASE");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Arabic",
        imageSrc: "/SA.svg",
      },
      {
        id: 2,
        title: "Spanish",
        imageSrc: "/ES.svg",
      },
      {
        id: 3,
        title: "German",
        imageSrc: "/DE.svg",
      },
      {
        id: 4,
        title: "Korean",
        imageSrc: "/KR.svg",
      },
      {
        id: 5,
        title: "Danish",
        imageSrc: "/DK.svg",
      },
      {
        id: 6,
        title: "French",
        imageSrc: "/FR.svg",
      },
      {
        id: 7,
        title: "English",
        imageSrc: "/GB-UKM.svg",
      },
    ]);
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 7,
        title: "Unit 1",
        description: "Learn The Basics",
        order: 1,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Verbs",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Nouns",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Phrasal Verbs",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Conjunctions",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Sentences",
      },
      {
        id: 6,
        unitId: 1,
        order: 6,
        title: "Wrap up",
      },
    ]);
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //verbs
        type: "SELECT",
        order: 1,
        question: "eating or drinking",
      },
      {
        id: 2,
        lessonId: 1, //verbs
        type: "SELECT",
        order: 2,
        question: "standing or sitting",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/eating.svg",
        correct: true,
        text: "eating",
        audioSrc: "/en_eating.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/drinking.svg",
        correct: false,
        text: "drinking",
        audioSrc: "/en_drinking.mp3",
      },
    ]);
    console.log("Seeding Finished!!");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the database!!");
  }
};

main();
