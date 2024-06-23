/**
 * @name HideTyping
 * @version 1.4.9
 * @description hides typing status in DMs and servers n any other shi
 * @author prodbystarz
 */

module.exports = class HideTyping {
    start() {
        const typing = BdApi.findModuleByProps('startTyping', 'stopTyping');
        const oldStartTyping = typing.startTyping;

        typing.startTyping = (channelId) => {
        };

        this.stop = () => {
            typing.startTyping = oldStartTyping;
        };
    }

    stop() {
    }
};
