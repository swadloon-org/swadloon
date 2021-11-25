import { Probot } from 'probot';

// todo https://github.com/tgymnich/fork-sync/blob/master/src/main.ts

export = (app: Probot) => {
  app.on('push', async (context) => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!',
    });

    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
