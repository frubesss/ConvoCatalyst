import { SlackAPI } from "https://deno.land/x/deno_slack_api@2.4.0/mod.ts";

const client = SlackAPI("token");

const messages = [
  "Hope you're having a great weekend!",
  "Hello, team! Ready for the week ahead?",
  "Wishing everyone a productive Sunday!",
  "Happy Sunday! Let's make the upcoming week successful.",
  "Greetings on this beautiful Sunday! Stay positive and productive.",
];

async function sendMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  try {
    const response = await client.chat.postMessage({
      text: message,
      channel: "channel-id",
    });

    console.log("Message sent successfully:", response);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
}

sendMessage();
