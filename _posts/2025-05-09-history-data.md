---
title: A quick history of data
slug: quick-history-data
date_published: 2025-05-10T12:04:12.000Z
date_updated: 2025-05-10T12:08:02.000Z
layout: post
image: /assets/img/banners/photo-researca-18.avif
---

I was looking to hire and train a sales team so I decided to write this first post, it's part of a series on the basics of data, this way my sales team will have a deep understanding of what we're selling.

I took some shortcuts to focus on the most important topYcs for my business.

# Early Days (<1970/1980)

Databases began as simple files storing data. This has some limitations and as usage of tech grows, an alternative starts to emerge.

# Relational Databases (1970/1980)

* Specialized software, called Database Management Systems (DBMS), emerged to manage multiple tables and queries.
Introduced structured data storage with relationships between tables.
* Database servers could manage multiple databases and tables.
* SQL became the standard query language, though dialects vary.
* Indexes, essentially metadata tables, improved retrieval efficiency.
* DBMS are known as SGBD in French (Système de gestion de base de données).

## Normalization

* Normalization defined best practices for organizing data.
	* [Normalization detail](https://en.wikipedia.org/wiki/Database_normalization)
	* Between 70 and 80s we identified several additives best practices
* Object-Relational Mapping (ORM) tools abstracted database interactions but didn't replace SQL.


# Business Intelligence (1990/2000)

* BI focused on improving decision-making with reporting, KPIs, dashboards, and analytics.
* Dimensional modeling, popularized by Kimball, simplified data representation for business use.
	* It's built around facts and traits [Dimensional modeling](https://en.wikipedia.org/wiki/Dimensional_modeling)
	* While it's old, it's still commonly used
	* There are other data modelling techniques like the [data vault](https://en.wikipedia.org/wiki/Data_vault_modeling)
* BI queries started getting really ressource intensive for the databases


# Big Data Era (2010/2020)

Companies generated data at scales too large to be manipulated using single servers. (We're talking at least Go or even To.)

Distributed computing frameworks like MapReduce and Spark emerged.

* Tasks like finding unique values or sorting were split across server clusters.
	* Researchers find some solution to split the load between a "cluster" of servers. For example, 
		* you want to find unique values in a big table, you split it, send the parts to several servers, each server will send back a list of its unique values, and finally you regroup all the sub lists given and reprocess it to remove the final duplicated values.
		* some use cases are less straighforward like if you want to sort a big table, you will split it, send a part to all the servers.
		* a big framework in the big data was map reduce, which means split a big list in smaller list, realise an action on each part (map), and finally process the result of the first step (reduce).
		* common framework is spark or map reduce

![Map reduce word count](/assets/img/2025/05/word-count.png)
*Word count using map reduce framework*

* CAP theorem highlighted trade-offs between consistency, availability, and partition tolerance.
	* CAP theorem gets less and less true because of the scale we can reach.
	* [Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law) is getting contested but is still partly true and  computing continually gets more efficient

![Cap Theorem](/assets/img/2025/05/cap_theorem.jpg)
*Cap Theorem, highlights tradeoff between different technologies*

Globally Big data's complexity limited its adoption for smaller-scale use cases.


# Zero interest rate period

Between 2015 and 2020, FED led a ZIRP, which made acquiring money for companies fairly easy it greatly impacted the world of data.

Big Data was seen as a way to make money, we saw things like data is the new oil, [data jobs are the sexiest](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century), every big company wanted data scientist to turn their data into gold.

We saw some data pure player appear
* **Snowflake** (2012 - 3.3Bn revenue - 53Bn valo) 
* **Databricks** (2013 - 1.6Bn revenue - 62Bn valo)
	* Built by spark contributors

Yet the biggest share is still for the big cloud actors.
* Cloud platform
	* **Amazon** web service: Glue, Athena
	* **Google** Cloud Platform: Big Query
	* **Azure** Data Factory


Aroung this time AI is called Machine Learning, it's mostly statistics and maths and isn't accessible through API.

I think at this time we went through the slope of desillusion on big data technologies to reach the plateau of stability.

[More details on the job Data Engineer created around 2015](https://app.researca.com/article/77413) source: https://blog.det.life/the-history-of-data-engineering-1762b017541a

Based on the big data progress and a lot of other factors, the AI gets revolutionized, [this piece is very interesting on the factors making llm possible](https://www.understandingai.org/p/why-the-deep-learning-boom-caught)

# Personnal view on the current situation (2020+)

Big Data and AI are related topics, AI is first a matter of data but as it's heavily productisized, I don't see why it would change the situation for big data. It is now mature, it works, but most of the companies don't need it, especially not SMBs.

Big data is disappear on a commercial standpoint, the vendors don't call it this way, it's now only a tool and not a selling point.

Companies that started to make big data easy, shift into making AI accessible.

AI becomes LLMs and is API-ized, and that's why it's so easily adopted.
