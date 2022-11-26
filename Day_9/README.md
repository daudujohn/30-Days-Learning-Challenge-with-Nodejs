# Day 9 | Core Module: child_process, cluster and worker_threads

---

***“JavaScript is single threaded”***

******This statement is often mentioned in the Nodejs community 😅. What it means is that all the JavaScript code in a Nodejs process will be executed on a single thread.

Today, we will be looking at three core modules in Nodejs that enable us: 

- create new processes
- create new Nodejs processes and
- utilize multi-core CPUs through multithreading

---

# Learning

[Core Module: child_process, cluster and worker_threads](https://www.notion.so/Core-Module-child_process-cluster-and-worker_threads-d7ffa7ec071e42a99e944a091bf8a02e)

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

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-9-Core-Module-child_process-cluster-and-worker_threads-6c22100e7df94f0697dde4e79a14ec5c)