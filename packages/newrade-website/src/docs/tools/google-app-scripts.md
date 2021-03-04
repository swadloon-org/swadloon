# Google App Scripts

## Resources

- https://developers.google.com/apps-script/overview
- https://developers.google.com/apps-script/guides/clasp
- https://stackoverflow.com/questions/54533397/error-retrieving-access-token-typeerror-cannot-read-property-project-id-of-u
- https://stackoverflow.com/questions/18646554/importing-external-javascript-to-google-apps-script

### Tutorials

- https://developers.google.com/gsuite/solutions
- https://developers.google.com/apps-script/articles/tutorials

## Local Setup

```bash
npm i -g @google/clasp
```

## Create OAuth 2.0 Credentials in GCP

1. Create GCP Project
1. Assign Google App Script Project to GCP Project
1. Save creds to `.clasprc.json`

```
{
  "installed": {
    "client_id": "901964004785-rs9bg7uj3ese5m0mer20dlk3us9hqtrm.apps.googleusercontent.com",
    "project_id": "newrade-automation",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "xxxxxx",
    "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
  }
}
```

1. Login `clasp login --creds .clasprc.json`

## Usage

Sync TS files:

```bash
clasp push --watch -f
```

Deploy new scripts with:

```bash
clasp deploy
```

Redeploy:

```bash
clasp redeploy AKfycbx8mOlTM80ja3gX8mxCsS3nn_ZtNHTkprEKE0YdEBEwfA5wJsmiHj2aYQ
```
