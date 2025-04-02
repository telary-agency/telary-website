---
title: Selecting your Snowflake license
slug: selecting-your-snowflake-license
date_published: 1970-01-01T00:00:00.000Z
date_updated: 2024-06-27T13:52:23.000Z
draft: true
---

*Note: Snowflake offers will probably change, this post was written in june 2024*

## Licensing and features
[

Snowflake Editions | Snowflake Documentation

![](https://static.ghost.org/v5.0.0/images/link-icon.svg)Snowflake Documentation

](https://docs.snowflake.com/en/user-guide/intro-editions#feature-edition-matrix)
Choosing between the different versions can be limiting and quite impacting budget wise because there is **between****50% and 33% price increasing between each license**. Taking an upper level license for things that don't need it would lead to pay more for the same workload as you're paying for the computing time. Of course you should discuss that with the sales team.

Enterprise is the mostly selected one and I think it's for the following important features that are only in this version:

- Extended time travel up to 90 days (**link**)
- Column / Row level security
- Multi cluster warehouses
- Materialized views

If you don't need that, favor the standard edition. You can still switch between 2 versions easily.

## Semantic changes

There are some semantic changes when working with Snowflake.

- Warehouse becomes the computing component, you can't run a query without a warehouse running (it is nearly instantaneous to start one no worries). It is a single cluster of compute.
- A lot of database lingo is back in the game, and that's very cool when speaking with shareholder. There is a higher chance they will fully get what you're saying.
- Clustering becomes the fact that you can scale your warehouse to be running several clusters, either using auto-scale with different policies or with a fixed number of warehouses.

Regarding theses changes, I like the SQL world naming, but disliked the warehouse, cluster naming which I find confusing. Especially as Snowflake is defined as a Data Warehouse, naming the computing component a Warehouse can be misleading especially for external shareholders.
