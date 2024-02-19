import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
export default async function Home() {
  // fetch all available jobs from db
  const jobs = await prisma.job.findMany({
    // show the newest on the top
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <main>
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </main>
  );
}
