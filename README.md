# Chrome Extension for typing commands in input on page

Forked from [this repo](https://github.com/chibat/chrome-extension-typescript-starter)

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

> It's important to remember to add new files that are supposed to be included to the webpack config file.

## npm Commands

### Build

```cmd
npm run build
```

### Build in watch mode

```cmd
npm run watch
```

## Development

1. Go to `chrome://extensions/` and click `Load unpacked` and select `dist` directory.

2. Run `npm run watch` and edit source files.

3. Reload the extension on `chrome://extensions/` if you change manifest.json or background script by pressing `Update` button on the extension card.

4. Refresh the page where you test extension.

## Test

`npx jest` or `npm run test`

## TODO

* [ ] Improve Autocomplete
* [ ] Make commands async
* [ ] Add option to import commands from elsewhere
* [ ] Prepare library for commands
* [ ] Add option to configure command trigger
* [ ] Add option to configure keybinding
* [ ] Prepare custom elements to be used internally
* [ ] Add most common commands to library like math, date, etc.

---

### Custom Elements

Custom elements will allow for easier customization of the extension because they could be provided with other data-attributes and styles.

---

### Async Commands

Async commands will allow for more complex commands to be executed. For example, a command could be used to fetch data from an API and then display it in a popup.

---

### Import commands / Commands Library

Commands will be able to be imported from other sources. This will most likely require putting the imported command file in designated folder from where extension will read them and add them to the list of all available commands.

---

### Common Commands

Common commands like math and date should be supported out of the box.

Example math command:

```cmd
//. math 2 + 2
```

or with shorthand:

```cmd
//. = 2 + 2
```

---
