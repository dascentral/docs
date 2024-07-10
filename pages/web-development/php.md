# PHP

PHP: Hypertext Preprocessor is a general-purpose programming language originally designed for web development. It was created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. Source: [Wikipedia](https://en.wikipedia.org/wiki/PHP)

## Isn't PHP Dead?

No. Quite the opposite, actually. This [2019 blogpost](https://stitcher.io/blog/php-in-2019) addresses some of the misconceptions about the language. And then, in 2023, Aaron Francis published his [PHP doesn't suck (anymore)](https://www.youtube.com/watch?v=ZRV3pBuPxEQ&t=6s) video, which was quickly followed by this [wonderful reaction video from ThePrimeagen](https://www.youtube.com/watch?v=WsnHWxO7Krw).

If you're still not interested in PHP after consuming some of that content, no worries!

### Does PHP Scale?

Yes. I only have a few tweets to back up my claim, but here they are:

* [Freek Van der Herten](https://twitter.com/freekmurze/status/1558169004493209600)
* [Luis Dalmolin](https://twitter.com/luisdalmolin/status/1559869012015726592)

## Managing PHP Versions

### Ubuntu

* PHP 8.3 — [How to install or upgrade to PHP 8.3 on Ubuntu and Debian](https://php.watch/articles/php-8.3-install-upgrade-on-debian-ubuntu#php83-ubuntu-quick)
* PHP 8.2 — [How to install/upgrade PHP 8.2 on Debian and Ubuntu systems](https://php.watch/articles/install-php82-ubuntu-debian)

#### Setting a Default

Set the default version of PHP to be used by the CLI.

```bash
# set PHP 8.2 as the default
sudo update-alternatives --set php /usr/bin/php8.2

# set PHP 8.1 as the default
sudo update-alternatives --set php /usr/bin/php8.1

# set PHP 8.0 as the default
sudo update-alternatives --set php /usr/bin/php8.0

# view current version
php -v
```

Or manually change the version:

```bash
sudo update-alternatives --config php
```

**Reference:** [How To Switch PHP Version on Ubuntu 20.04 LTS](https://php.tutorials24x7.com/blog/how-to-switch-php-version-on-ubuntu-20-04-lts)

## Managing Extensions

List the currently loaded PHP modules or extensions on your system's PHP installation.

```bash
php -m
```

## Enablement

### Exception Handling

* **Article:** May 2019 - [Exceptional Exceptions](https://engagor.github.io/blog/2019/05/22/exceptional-exceptions/)

### Terminal

* **Article:** March 2020 - [Terminal: An Elegant Wrapper around the Symfony Process Component](https://laravel-news.com/terminal-an-elegant-wrapper-around-the-symfony-process-component)

## Extending PHP

### AWS

* **Tutorial:** June 2020 - [Send SMS With Amazon SNS Using PHP](https://stackcoder.in/posts/send-sms-with-amazon-sns-simple-notification-service-using-php?ref=laravelnews)
