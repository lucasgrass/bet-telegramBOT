import { Context } from 'telegraf';
import messages from '../messages';

export const noteCommand = async (ctx: Context) => {
    try {
        if (!ctx.message || !('text' in ctx.message)) {
            await ctx.reply(messages.notTextMessageError);
            return;
        }

        const userText = ctx.message.text.split(' ').slice(1).join(' ').trim();

        if (!userText) {
            await ctx.reply(messages.commandNotExists);
            return;
        }
        console.log(`[Anotar] ${userText}`);
        return ctx.reply(messages.noteConfirmed(userText));
    } catch (err) {
        console.log('Error: ', err);
        return ctx.reply(messages.error);
    }
}