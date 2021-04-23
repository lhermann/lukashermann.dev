---
title: 'Schedule Script Execution in a Node.js Docker Image with Cron'
created: 2021-04-23
description: Cron is a popular tool to schedule tasks, it comes pre-installed on almost any Linux image such as Debian or Ubuntu. Most answers on StackOverflow suggest installing extra packages or building a custom image, but neither approach is necessary. The vanilla Node.js Docker image has everything needed to schedule the execution of javascript files.
tags: Docker, Cron, JS
cover_image: /img/writing/covers/cron-in-nodejs-docker-image.jpg
---

Cron is a popular tool to schedule tasks, it comes pre-installed on almost any Linux image such as Debian or Ubuntu. Cron can execute any command at a predefined time like 4:30 AM or every 2 minutes. For this reason, it is the first choice of developers for scheduled script execution.

A docker image is nothing else than a stripped-down Linux operating system and comes with cron. Most answers on StackOverflow suggest installing extra packages or building a custom image, but neither approach is necessary. The vanilla Node.js Docker image has everything needed to schedule the execution of javascript files.

## Example with Code

I want to run a javascript file every 30 minutes inside my docker image. I want to use `docker-compose`[^1] to start and stop the docker container.

Here's my docker compose file:

```yaml
version: "3.1"

services:
  price-daemon:
    image: node:14-alpine
    working_dir: /home/node/app
    volumes:
      - ./:/home/node/app
    command: "/usr/sbin/crond -f -l 0 -c /home/node/app/crontab -L /var/log/cron.log"
```

I use the lightweight `node:14-alpine`[^2] image and mount my current working directory as volume.

The `command` starts the cron daemon and it will look for the file `/home/node/app/crontab/root`. Remove `-l 0` if you don't like a super verbose log. In my working directory I created the file `crontab/root` with this contents:

```bash
# min hour day month weekday command
* * * * * /bin/date --rfc-2822 >> /var/log/cron.log
*/30 * * * * node /home/node/app/scheduled.js >> /var/log/cron.log 2>&1
```

The second line is just a timestamp printed into the log file for debugging purposes. The third line executes the `scheduled.js` file and logs its output into `/var/log/cron.log`

And that's it. Pretty simple right?

[^1]: https://docs.docker.com/compose/
[^2]: https://hub.docker.com/_/node
