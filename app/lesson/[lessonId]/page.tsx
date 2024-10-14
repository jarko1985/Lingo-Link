import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import { Quiz } from "../Quiz";

type Props = {
  params: {
    lessonId: number;
  };
};

const LessonIdPage = async ({ params }: Props) => {
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);
  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialProgress =
    lesson.challenges.filter((challenge) => challenge.completed).length /
    lesson.challenges.length /
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialProgress}
      userSubscription={userSubscription}
    />
  );
};

export default LessonIdPage;
