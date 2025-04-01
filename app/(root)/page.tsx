import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewByUserId,
  getLatestInterview,
} from "@/lib/actions/general.action";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewByUserId(user!.id),
    getLatestInterview({ userId: user!.id }),
  ]);

  const hasPastInterviews = userInterviews!.length > 0;
  const hasUpcomingInterviews = latestInterviews!.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
          <p>Practise on real interview questions & get instant feedback</p>
          <Button className="btn-primary max-sm:w-full" asChild>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview: Interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews, yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview: Interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are not new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
