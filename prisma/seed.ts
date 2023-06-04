// import { hashPassword } from '@/lib/auth';
import { db } from '@/lib/db';
import { TASK_STATUS } from '@prisma/client';

const getRandomTaskStatus = () => {
  const statuses = [
    TASK_STATUS.COMPLETED,
    TASK_STATUS.NOT_STARTED,
    TASK_STATUS.STARTED,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const main = async () => {
  const user = await db.user.upsert({
    where: { email: 'user@email.com' },
    update: {},
    create: {
      email: 'user@email.com',
      firstName: 'User',
      lastName: 'Person',
      password: 'password',
      projects: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i + 1}`,
          due: new Date(2023, 6, 4),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  const tasks = await Promise.all(
    user.projects.map((project) =>
      db.task.createMany({
        data: new Array(10).fill(1).map((_, i) => {
          return {
            name: `Task ${i + 1}`,
            ownerId: user.id,
            projectId: project.id,
            description: `Everything that describes Task ${i + 1}`,
            status: getRandomTaskStatus(),
          };
        }),
      })
    )
  );

  console.log({ user, tasks });
};

(async () => {
  try {
    await main();
    await db.$disconnect();
  } catch (e) {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  }
})();
