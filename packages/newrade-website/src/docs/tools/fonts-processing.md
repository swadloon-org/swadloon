# Fonts Processing

## Tools

- https://transfonter.org/

## Steps

1. Save the desktop fonts (ttf, otf, etc) to `packages/<package-name>/src/fonts/<font-name>`:

1. Upload the files to https://transfonter.org/ and download the kit

1. Create a folder with a '-webfonts':

   ![image](https://user-images.githubusercontent.com/9644867/103575352-91ee1d00-4e9f-11eb-8ad1-f0047538fa08.png)

1. Add the files from the kit:

   ![image](https://user-images.githubusercontent.com/9644867/103575535-dda0c680-4e9f-11eb-93a0-1ab011ed03f8.png)

1. In `index.ts`:

   Reference the stylesheets to add the @fontfaces rules:

   ![image](https://user-images.githubusercontent.com/9644867/103575680-1476dc80-4ea0-11eb-8e52-58b24daa3388.png)

Done!
