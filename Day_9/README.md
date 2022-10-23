# Core Module: child_process, cluster and worker_threads

---

Takeaways:

- Become familiar with the use cases of **child_process**, **cluster** and **worker_threads** core modules in Nodejs

---

### Things to consider (threads vs processes)

- **Communication**

Communication between threads is not as CPU intensive as communication between processes

- **Overhead**

The creation of threads is not as CPU intensive as the creation of processes 

- **Isolation**

Threads are not isolated from one another. They belong to the same process and share memory. Processes however are isolated and do not share memory.

### child_process

This core module is used to create a process for any command or file that can executed in a command line.

[https://www.youtube.com/watch?v=bbmFvCbVDqo](https://www.youtube.com/watch?v=bbmFvCbVDqo)

[https://www.youtube.com/watch?v=bbmFvCbVDqo](https://www.youtube.com/watch?v=bbmFvCbVDqo)

[https://www.youtube.com/watch?v=7cFNTD73N88](https://www.youtube.com/watch?v=7cFNTD73N88)

[https://www.youtube.com/watch?v=7cFNTD73N88](https://www.youtube.com/watch?v=7cFNTD73N88)

### cluster

This core module is used to create Nodejs processes by utilizing `child_process.fork()`

[https://www.youtube.com/watch?v=9RLeLngtQ3A](https://www.youtube.com/watch?v=9RLeLngtQ3A)

[https://www.youtube.com/watch?v=9RLeLngtQ3A](https://www.youtube.com/watch?v=9RLeLngtQ3A)

### worker_threads

Used to run computationally intensive tasks in a thread separate from the main JavaScript thread

[https://www.youtube.com/watch?v=SOHrgnvytiU](https://www.youtube.com/watch?v=SOHrgnvytiU)

[https://www.youtube.com/watch?v=SOHrgnvytiU](https://www.youtube.com/watch?v=SOHrgnvytiU)

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-2-JavaScript-Refresher-96ecdd77ddb3462ba90ea6f7c83af90b)