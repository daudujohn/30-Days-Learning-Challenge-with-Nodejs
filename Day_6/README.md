# Day 6 | Core Module: fs and path

---

So far in the **30 Days Learning Challenge with Nodejs**, we have come across two types of file modules in Nodejs: 

- the ones written by us and
- the ones written and published by other programmers i.e., **packages**

Today, we will get introduced to yet another type of file module in Nodejs: **core modules**. **Core modules** are similar to **packages**, except that they come **pre-installed with Nodejs** (hence why they are called **core modules**). Since they come **pre-installed with Nodejs**, we do not have to use a **package manager** to make them available for importing or requiring.

Particularly, we will be covering two **core modules** today: **fs** and **path,** which provide functionality for **interacting with file systems** and **working with file paths** respectively.

---

# Learning

[Core Module: fs and path](https://www.notion.so/Core-Module-fs-and-path-08354a6cae514b7bb435dc6671db672e)

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Tasks

**Aim**

We are going to be writing a program to examine the memory footprint of a Nodejs process that reads a large file at once into memory

- Start **Visual Studio Code** using today’s task folder as the **current working directory**
- Run `npm init` or `npm init -y` to create a **package.json** file in today’s task folder
- Create a file named **index.js** in today’s task folder
- Log the memory usage of the Nodejs process **before reading the large file into memory** using this message: `“Memory usage before reading file = ${process.memoryUsage().rss}”`
- Using a **for loop** and `fs.appendFileSync()`, create a large file named **largeFile.txt** that contains **50000** lines of the below message: 

*"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum”*

**Note**: you will observe a slight delay during the creation of **largeFile.txt**
- Read the large file, **largeFile.txt**, into memory using `fs.readFileSync()`
- Log the memory usage of the Nodejs process **after reading the large file to memory** using this message: `“Memory usage after reading file = ${process.memoryUsage().rss}”`
- Run `node index.js`
- Did you notice a considerable spike in the memory footprint of the Nodejs process after reading **largeFile.txt** into memory? (Answer should be **YES**)
- Expected output

![Screenshot (99).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bf016d5-0b04-45ec-9d2b-acf3f3a91709/Screenshot_(99).png)


### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-2-JavaScript-Refresher-96ecdd77ddb3462ba90ea6f7c83af90b)