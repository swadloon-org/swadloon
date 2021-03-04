# Netlify Functions

### ressources

- https://docs.netlify.com/cli/get-started/
-

## Manual deploy

To do a manual deployment for the test purpose of the netlify functions you will have to install the netlify Cli

- https://docs.netlify.com/cli/get-started/

  ### comand for deploy

  ```
      netlify deploy --prod
  ```

## Gatsby Cloud deploying Netlify Functions

- https://support.gatsbyjs.com/hc/en-us/articles/360054529274-Deploying-Netlify-Functions-from-Gatsby-Cloud

If you want to use Gatsby Cloud to deploy automatically your netlify functions you will have to publish them into the folder `public/functions`.

The files need to be bundle before being move to the `public` folder.

1. Bundle the files of the applications with webpack and use a script to move them toward the `functions` folder at the root of the current gatsby website.

   Afterward you will have to add in the `gatsby-node.ts` the following function

   ```
    import child_process from 'child_process';
    import util from 'util';

    const exec = util.promisify(child_process.exec);

    export const onPostBuild = async (gatsbyNodeHelpers: any) => {
    const { reporter } = gatsbyNodeHelpers;

    const reportOut = (report: any) => {
        const { stderr, stdout } = report;
        if (stderr) reporter.error(stderr);
        if (stdout) reporter.info(stdout);
    };
    reportOut(await exec('yarn copy:functions'));
    };
   ```

   The onPostBuild will run after the build of the current website.

   exemple of the current script 'yarn copy:functions'

   ```
   import fs from 'fs-extra';

   const copyFile = () => {
       fs.copySync(`./functions`, './public/functions', {
           recursive: true,
           overwrite: true,
       });
   };

   copyFile();

   ```

   The script in the package.json would need to look like this

   ```
    "copy:functions": "TS_NODE_PROJECT=tsconfig.script.json node -r ts-node/register scripts/copy-functions.script.ts",
   ```

   ### netlify.toml

   The files `netlify.toml` is used to redirects the app/api and to give the path of the build functions

   - https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file
   - https://docs.netlify.com/routing/redirects/rewrites-proxies/#custom-headers-in-proxy-redirects

   ```
       [dev]
           command = "yarn typecheck"
           # path to functions
           functions = "functions"

       [build]
           command = "#"
           publish = "public/"
           # path to functions
           functions = "public/functions/"

        [[redirects]]
           from = "/api/server/*"
           to = "/.netlify/functions/server"
           status = 200
           force = true
   ```

   ## \*Fix for the current redirect

   The current way to do the redirect for the moment is to add in the static folder `_redirect`

   ```
       /api/server/*  /.netlify/functions/server 200
   ```

# Feature to explore

## Logs

- https://docs.netlify.com/functions/logs/

## Trigger serverless functions on events

- https://docs.netlify.com/functions/trigger-on-events/

## Background Functions overview

- https://docs.netlify.com/functions/background-functions/
