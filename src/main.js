const { Command } = window.__TAURI__.shell;

let greetMsgEl;
let argumentsMsgEl;

window.addEventListener("DOMContentLoaded", () => {
  greetMsgEl = document.querySelector("#greetMsg");
  argumentsMsgEl = document.querySelector("#argMsg");
});

// document.querySelector("#greet-btn").addEventListener("click", greet);

async function greet() {
  // Get values from input fields
  const nameVal = document.getElementById("name").value;
  const arg1 = document.getElementById("arg1").value;
  const arg2 = document.getElementById("arg2").value;

  // Check if any input is empty
  if (!nameVal || !arg1 || !arg2) {
    alert("Please fill in all the fields");
    return;
  }

  // Pass user-input values to Python script
  const args = [nameVal, arg1, arg2];
  const command = Command.sidecar("bin/python/test", args );
  const output = await command.execute();
  const { stdout, stderr } = output;

  // Parse the JSON output
  const jsonOutput = JSON.parse(stdout);

  // Access individual pieces of information
  const greetingMsg = jsonOutput.greeting;
  const argumentsMsg = jsonOutput.arguments;

  // Update the DOM elements
  greetMsgEl.textContent = greetingMsg;
  argumentsMsgEl.textContent = argumentsMsg;

}

window.greet = greet;
