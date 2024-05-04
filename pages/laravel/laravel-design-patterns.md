# Design Patterns

The development approaches outlined below are all "Design Patterns" in the strict definition of the term, but they represent approaches I employ within my code.

## Restful Controllers

https://twitter.com/taylorotwell/status/1651593413140287488?s=61&t=zBs9vYUdRe9_XPH9OP6gmQ

## Decorator Pattern

Wikipedia defines the [decorator pattern]((https://en.wikipedia.org/wiki/Decorator_pattern)) as follows:

> In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

I primarily use this pattern to facilitate caching within my Laravel applications.

* **Article:** Feb 2020 - [Design Patterns in PHP: Decorator (with Laravel)](https://dev.to/ahmedash95/design-patterns-in-php-decorator-with-laravel-5hk6)

## Refactoring to Actions

Refactoring to Actions is a pattern I found via our friends at [Spatie](https://spatie.be) that helps you keep your controllers and models skinny. Read their blog post for an in-depth introduction.

* **Article:** June 2019 — [Refactoring to Actions](https://freek.dev/1371-refactoring-to-actions)
* **Article:** March 2019 — [Queueable actions in Laravel](https://stitcher.io/blog/laravel-queueable-actions)
* **Package:** [lorisleiva/laravel-actions](https://laravelactions.com/)

## View Models

A view model class is designed to house the complex logic of your views and reduce view-related logic within controllers.

* **Article:** Dec 2019 - [Laravel Beyond CRUD](https://stitcher.io/blog/laravel-beyond-crud-08-view-models) - Chapter 8 - View models
* **Article:** Sept 2018 - [Laravel View Models](https://laravel-news.com/laravel-view-models) - via Laravel News

## Caching Strategies

* [Model Caching](https://laravel-news.com/laravel-model-caching)

