import sys  
import json  

arguments = sys.argv[1:]

name = arguments[0]
arg1 = arguments[1]
arg2 = arguments[2]

# Create sentences
sentence1 = "Hello, {}! Greetings from Python!".format(name)
sentence2 = "The first arg is {} and the second is {}".format(arg1, arg2)
# Create a dictionary to represent the JSON object
json_data = {
    "greeting": sentence1,
    "arguments": sentence2
}

# Convert the dictionary to JSON format
json_output = json.dumps(json_data)

# Print the JSON output
print(json_output)