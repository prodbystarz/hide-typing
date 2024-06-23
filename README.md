# hide-typing

a betterdiscord plugin that hides your typing status in dms and servers.

## installation

1. download the `hidetyping.plugin.js` file.
2. move the file to your betterdiscord `plugins` folder. you can find this folder by going to `settings` > `betterdiscord` > `plugins` > `open plugins folder`.
3. enable the plugin in the betterdiscord settings.

## usage

once the plugin is enabled, it will automatically hide your typing status in all dms and servers. no further configuration is required.

## code

```javascript
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
```
## disclaimer

this plugin may violate discord’s terms of service. use at your own risk. the author is not responsible for any consequences resulting from the use of this plugin.
