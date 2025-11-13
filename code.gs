function sendMessageToSlack() {

    let webhookURL = 'WEBHOOK_URL';
    let name = 'Sheets Ninja';

    let body = {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Hey, Slack!\n\nThis is a test message.\n\nThanks ${name} for your contributions!`
                }
            }
        ]
    }

    let params = {
        'method': 'POST',
        'content-type': 'application/json',
        'payload': JSON.stringify(body)
    }

    UrlFetchApp.fetch(webhookURL, params);

}
