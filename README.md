# SceneShift Sales Site

Marketing site for SceneShift, built with React, TypeScript, and Vite. The site is configured for AWS Amplify Gen 2 branch deployments and includes an SES-backed contact form workflow.

## Local development

Install dependencies and start the site:

```bash
npm install
npm run dev
```

The contact form can call a locally supplied API URL by creating a `.env.local` file from `.env.example`:

```bash
VITE_CONTACT_FORM_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/contact
```

If that variable is not present, the frontend will look for `/amplify_outputs.json` at runtime.

## Amplify backend

The Amplify Gen 2 backend lives in `amplify/` and provisions:

- a public HTTP endpoint at `/contact`
- a Lambda function that validates the payload
- Amazon SES delivery for:
  - internal notifications to `contact@sceneshift.org`
  - confirmation emails back to the submitter

Useful commands:

```bash
npm run amplify:sandbox
npm run amplify:generate-outputs -- --branch <branch> --app-id <app-id>
npm run amplify:pipeline-deploy -- --branch <branch> --app-id <app-id>
```

## Amplify hosting

`amplify.yml` is set up for fullstack branch builds in Amplify Hosting:

1. install dependencies
2. deploy backend changes with `ampx pipeline-deploy`
3. generate `amplify_outputs.json`
4. build the Vite app and publish `dist/`

The build also copies `amplify_outputs.json` into `public/` so the frontend can discover the deployed contact API during the same branch build.

## Required Amplify branch environment variables

Configure these in the Amplify console for the deployed branch:

- `CONTACT_FORM_FROM_EMAIL`
  Required. Must be a verified SES sender identity in the same AWS region as the backend.
- `CONTACT_FORM_TO_EMAIL`
  Optional. Defaults to `contact@sceneshift.org`.
- `CONTACT_FORM_ALLOWED_ORIGIN`
  Recommended. Set this to the deployed site origin such as `https://sceneshift.org`.

Amplify provides `AWS_APP_ID` and `AWS_BRANCH` during the branch build, which are used by `amplify.yml`.

## SES checklist

Before the contact form can send email successfully:

1. Verify the sender identity used by `CONTACT_FORM_FROM_EMAIL` in Amazon SES.
2. If you want to send to arbitrary recipients in production, move the SES account out of sandbox.
3. Confirm DNS records for SPF, DKIM, and DMARC on the sending domain.

## Validation

Run the project checks locally:

```bash
npm run lint
npm run build
```
