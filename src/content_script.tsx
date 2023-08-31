import "./css/commander.css"
import { Command } from "./libs/commands/command";
// debugger;
console.log("CONTENT SCRIPT LOADED")


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});



// TODO create command class that will be used  to declare commands

const helloWorldCommand = new Command('hello')
helloWorldCommand.run = ({value, input, args}) => {
  console.log(args)
  input.value += `Hello ${args[0]||'World'}!`
}

const commands = [
  helloWorldCommand,
  new Command('foo'),
  new Command('bar'),
]





const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  let input_value: string = "";
  let current_input_command: string = "";

  const commandNames = commands.map(cmd => cmd.name);
  const autocompleteElement = document.createElement("div");

  autocompleteElement.classList.add("autocomplete");
  input.parentElement?.appendChild(autocompleteElement);

  input.addEventListener("keyup", () => {
    input_value = input.value;
    // TODO if value is empty, clear autocomplete
    if (current_input_command.trim() === "") {
      autocompleteElement.innerHTML = "";
    }
    // TODO Implement better check logic to see if command is being entered
    if (input_value.includes("//. ")) {
      current_input_command = input_value.split("//. ").at(-1) || "";
      // TODO Implement better autocomplete logic / wait for first letter to appear
      const autocompleteCommands = commandNames.filter(cmd => cmd.startsWith(current_input_command));
      autocompleteElement.innerHTML = autocompleteCommands[0];
    }
    chrome.runtime.sendMessage({ type: "keyup", value: input_value });
  });


  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      current_input_command = input_value.split("//. ").at(-1)?.split(' ').at(0) || "";
      for (const cmd of commands) {
        if (cmd.name === current_input_command) {
          const args = input_value.split("//. ").at(-1)?.split(" ").splice(1) || [];
          cmd.beforeRun({value: input_value, input, args});
          cmd.run({value: input_value, input, args});
        }
      }
      console.log("Ctrl + Enter")
    }
  })
});