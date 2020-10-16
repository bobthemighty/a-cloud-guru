import * as cdk from '@aws-cdk/core';
import { BillingAlert } from "@moralesl/billing-alert";


export class AlarmsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      const alertEmail = new cdk.CfnParameter(this, "alertEmail", {
          type: "String",
          description: "The email address to use for alarms"});

      new BillingAlert(this, "basic-billing", {
          amount: 10,
          emails: [
              alertEmail.valueAsString,
          ]
      })
  }
}
