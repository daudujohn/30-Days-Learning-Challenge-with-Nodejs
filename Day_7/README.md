# Day 7 | Core Module: stream

---

In our task for **Day 6** of the **30 Days Learning Challenge with Nodejs**, we noticed a considerable spike in the memory usage of a Nodejs process after reading a large file at once into memory.

This is unacceptable as we are to **design our programs to use system resources efficiently**.

**Streams** can be used to overcome this by allowing us **work with large data in chunks** rather than as a whole. Think of using **streams** as **breaking the large data into chunks** then placing those chunks on a conveyor belt. 

Nodejs provides some **readymade streams** (already created) for us to use. Nodejs also allows us to create our own **streams** through the **stream core module** (although we will not be covering this today).

---

# Learning

[Core Module: stream](https://www.notion.so/Core-Module-stream-3f533306b4d94fb396a517817e559073)

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Tasks

**Aim**

We will be revisiting our task for **Day 6** of the **30 Days Learning Challenge with Nodejs** to make improvements**.** We will use `fs.createReadStream()`, **a readymade stream**, in place of `fs.readFileSync()`. We will then examine the memory footprint of the Nodejs process for any improvements.

- Copy the contents of yesterday’s task folder into today’s task folder
- Log the memory usage of the Nodejs process **before creating the readable stream** using this message: `“Memory usage before creating read stream for large file = ${process.memoryUsage().rss}”`
- Inside **index.js**, replace `fs.readFileSync()` with `fs.createReadStream()`
- Log the memory usage of the Nodejs process **after creating the readable stream** using this message: `“Memory usage after creating read stream for large file = ${process.memoryUsage().rss}”`
- Run `node index.js`
- Compare the spike in the memory footprint of the Nodejs process between yesterday. What do you notice? Can you explain why you are getting these results? 🤔🤔🤔
- Expected output

Memory usage for `fs.createReadStream()`

![Screenshot (100).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ffd4deb-4dd6-4c3f-a83b-cdd20e0786b0/Screenshot_(100).png)

Memory usage for `fs.readFileSync()` (from yesterday)

![Screenshot (99).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf4fb853-04c0-4f8d-a187-3c6373308595/Screenshot_(99).png)

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-7-Core-Module-stream-447ac193ef1643fca3630e59ed85925b)