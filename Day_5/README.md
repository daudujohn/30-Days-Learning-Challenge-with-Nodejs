# Day 5 | Global Object: Process

---

On Day 1 of the **30 Days Learning Challenge with Nodejs**, we learnt that a **Web Browser’s execution context** for JavaScript differs from **Nodejs’ execution context** for JavaScript. 

One way their execution contexts differ is through the **globals** they expose. **Globals** are objects that are **always available in the global scope** of a JavaScript program.

Today, we will be learning about a **global object** that the **Nodejs execution context** provides called the **process object**. This object holds useful **information about the currently running Nodejs process** and provides **functionality for controlling the currently running Nodejs process**.

Amongst other things, we will learn how to use the process object to access **command line arguments** from a Nodejs program and load **environment variables** into a Nodejs program.

---

# Learning

[Global Object: Process](https://www.notion.so/Global-Object-Process-eeadec83fbaa4bc9b273dad7ce44af6a)

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Tasks

**Aim**

We are going to be writing a program that simulates a running web server. This program will receive a command line argument to set the web server’s port and will load an environment variable to determine whether to run the web server in production mode or development mode.

- Start **Visual Studio Code** using today’s task folder as the **current working directory**
- Run `npm init` or `npm init -y` to create a **package.json** file in today’s task folder
- Add the following packages to today’s task folder: **minimist** and **dotenv** using ****`npm install minimist dotenv`
- Create a file in today’s task folder named **index.js** and import **minimist** and **dotenv** packages
- Use **minimist** to retrieve a command line argument named **PORT**
- Create a variable named **PORT** and store the **PORT command line argument** inside the variable
- Use **dotenv** to load the **MODE environment variable** into the **process.env** object
- Create a variable named **MODE** and store the **MODE environment variable** inside the variable
- Create a conditional statement that executes the below statements based on the mode variable:
- **if mode equals “production”**, then log **“Server running in production mode”** to the console
- **if mode equals “development”**, then log **“Server running in development mode”** to the console
- **else**, then log **“MODE environment variable not set. Exiting…”** and exit the process immediately using `process.exit()`
- Log the port the server is running on to the console using the message **“Server running on PORT: ${PORT}”**
- Create a **.env** file in the project root folder and add **either** of the following environment variables to it: **MODE=production** or **MODE=development** (use one, not both)
- Open the Visual Studio Code terminal and run `node index.js --PORT=5000`
- Expected output

For **MODE=production**

![Screenshot (96).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7cce4a50-e501-41aa-8b57-6c49ee881e43/Screenshot_(96).png)

For **MODE=development**

![Screenshot (97).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bebcbc-a07c-4560-bed1-5f81b8def67e/Screenshot_(97).png)

For **MODE is unset**

![Screenshot (98).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23fbd3fc-df50-4501-8b2b-1198eba17354/Screenshot_(98).png)

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-5-Global-Object-Process-ca19d368671f4417b659bdbd8c3adb7e)