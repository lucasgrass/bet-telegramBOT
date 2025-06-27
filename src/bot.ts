import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
import { noteCommand } from "./commands/note";
import messages from "./messages";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);
const allowed_ID = Number(process.env.ALLOWED_ID)

bot.use((ctx, next) => {
  const userId = ctx.from?.id;

  if (!userId || userId !== allowed_ID) {
    console.log(`Bloqueado: @${ctx.from?.username || 'no username'} (${ctx.from?.id})`);
    return ctx.reply(messages.permissionError);
  }

  return next();
});

bot.command('anotar', noteCommand);

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));