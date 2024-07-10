# Laravel Data

## Overview

[Laravel Data](https://spatie.be/docs/laravel-data/v4/introduction) is a package by [Spatie](https://spatie.be/) that enables the creation of rich data objects that can be used in various ways. Using this package, you only need to describe your data once. It can replace form requests, API transformers, or manual creation of a typescript definition.

## Resources

### Why You Should Use spatie/laravel-data

**Published October 2023 by Stefan Zweifel**

[https://stefanzweifel.dev/posts/2023/10/29/spatielaravel-data-is-probably-the-best-way-to-store-settings-in-your-laravel-app](https://stefanzweifel.dev/posts/2023/10/29/spatielaravel-data-is-probably-the-best-way-to-store-settings-in-your-laravel-app)

This article addresses a challenge I have frequently come up against:

> For a long time, I struggled to find a good way to store settings for a user, team, or other model in my Laravel app.
>
> I either added separate columns for each setting to the respective database table (e.g., a timezone or date_format column to the `users` table), created separate database tables to hold all the settings (e.g., a `user_settings` table with `user_id`, `timezone`, and `date_format` columns), or added a generic settings JSON column to my `users` table to store the settings.

Lately, I’ve personally been in the latter camp. I’m not querying this information frequently, so the JSON format works just fine.

### Laravel Data and Value Objects

**Published in September 2023 by Sean Kegel**

[https://blog.stackademic.com/laravel-data-and-value-objects-dc7d25e7d182](https://blog.stackademic.com/laravel-data-and-value-objects-dc7d25e7d182)

The author made this article a members-only article, so the full content may not be available to you.
