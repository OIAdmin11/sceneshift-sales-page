import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  CorsHttpMethod,
  HttpApi,
  HttpMethod,
} from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";

import { contactForm } from "./functions/contact-form/resource.js";

const backend = defineBackend({
  contactForm,
});

const apiStack = backend.createStack("contact-form-api");
const allowedOrigin = process.env.CONTACT_FORM_ALLOWED_ORIGIN ?? "*";

const httpApi = new HttpApi(apiStack, "ContactFormHttpApi", {
  apiName: "contact-form-api",
  corsPreflight: {
    allowMethods: [CorsHttpMethod.POST, CorsHttpMethod.OPTIONS],
    allowHeaders: ["content-type"],
    allowOrigins: [allowedOrigin],
  },
  createDefaultStage: true,
});

httpApi.addRoutes({
  path: "/contact",
  methods: [HttpMethod.POST],
  integration: new HttpLambdaIntegration(
    "ContactFormIntegration",
    backend.contactForm.resources.lambda,
  ),
});

backend.contactForm.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    sid: "AllowSesEmailSending",
    actions: ["ses:SendEmail", "ses:SendRawEmail"],
    resources: ["*"],
  }),
);

backend.addOutput({
  custom: {
    contactForm: {
      endpoint: `${httpApi.url}contact`,
      region: Stack.of(httpApi).region,
    },
  },
});
