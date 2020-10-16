#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { AlarmsStack } from "../lib/alarms-stack";

const app = new cdk.App();
new AlarmsStack(app, "AlarmsStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
