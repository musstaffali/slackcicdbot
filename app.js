const { WebClient } = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackToken = process.env.SLACK_TOKEN;
const port = process.env.SLACK_PORT || 3000


const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken)

slackEvents.on('app_mention', (event) => {
    console.log(`Got messafe from user ${event.user}: ${event.text}`);
    (async () => {
        try {
            await slackClient.chat.postMessafe({ channel: event.channel, text: `Hello <@$event.user})
        }
    })
})