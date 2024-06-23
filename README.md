# hidetyping

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
 * @version 1.0.0
 * @description Hides your typing status in Discord
 * @author Starz
 */

module.exports = class HideTyping {
    start() {
        const typing = BdApi.findModuleByProps('startTyping', 'stopTyping');
        const oldStartTyping = typing.startTyping;

        typing.startTyping = (channelId) => {
            // Prevent sending typing status
        };

        this.stop = () => {
            typing.startTyping = oldStartTyping;
        };
    }

    stop() {
        // This will be overwritten when the plugin is started
    }
};
```
## disclaimer

this plugin may violate discord’s terms of service. use at your own risk. the author is not responsible for any consequences resulting from the use of this plugin.
