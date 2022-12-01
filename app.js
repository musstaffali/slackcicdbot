const { WebClient } = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackToken = process.env.SLACK_TOKEN;

const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken)