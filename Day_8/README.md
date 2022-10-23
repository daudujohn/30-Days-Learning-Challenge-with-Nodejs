# Day 8 | Core Module: events

---

Internally, Nodejs’ core modules and APIs are designed using an **event-driven architecture** in which a change in the state of an object causes that object to broadcast a message to other objects causing them to perform an action. 

The broadcasting object whose state changes is called an **Event Emitter** and the objects performing actions as a result of the broadcasted message are called **Event Listeners**.

It is important to understand Nodejs’ **event-driven architecture** if we want to use the core modules and APIs it provides us to the fullest.

In our task for today, we will be revisiting the **stream core module** from yesterday which implements **Event Emitters**, allowing us to attach our own **Event Listeners** to them.

Through the **events core module,** we can also implement our own **Event Emitters** and attach **Event Listeners** to them**.**

---

# Learning

[Core Module: events](https://www.notion.so/Core-Module-events-158df6d051a04d27919520c34f22f753)

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Tasks

**Aim**

We will be exploring the **streams core module** from yesterday which implements some **Event Emitters** for us to attach **Event Listeners** to**.** We will be using them to replicate the behavior of `readable_stream.pipe(writable_stream)`. 

- Copy the contents of yesterday’s task folder into today’s task folder
- Make sure to delete the previous **largeFile.txt**
- Create a **.txt** file in today’s task folder named **largeFileDuplicate.txt**
- Inside **index.js**, create a write stream to **largeFileDuplicate.txt** using ****`fs.createWriteStream()`
- Listen for the **data event** on the read stream from **largeFile.txt** created yesterday and attach an **Event Listener** that writes the chunks of data given as argument to the listener function into **largeFileDuplicate.txt** using its write stream
- Listen for the **end event** on the read stream from **largeFile.txt** created yesterday and attach an **Event Listener** that closes the write stream for **largeFileDuplicate.txt** and logs to the console that writing to **largeFileDuplicate.txt** has been concluded using the message “Done duplicating largeFile.txt into largeFileDuplicate.txt”
- Run `node index.js`
- Expected output

![Screenshot (101).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7383d48-900c-423c-8291-d8cc11dadc30/Screenshot_(101).png)

- We have just replicated the behavior of `readable_stream.pipe(writable_stream)` using the **Event Emitters** provided by the **stream core module**
- Equivalent behavior using **pipes**

![Screenshot (102).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b606f40-44dc-4aff-bbed-d969dc9c025a/Screenshot_(102).png)

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-2-JavaScript-Refresher-96ecdd77ddb3462ba90ea6f7c83af90b)