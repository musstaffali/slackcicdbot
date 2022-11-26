const { WebClient } = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')

const slackSigningSecret = ""

const slackEvents = createEventAdapter(slackSigningSecret);