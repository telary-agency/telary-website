---
title: A quick history of data
slug: quick-history-data
date_published: 2025-05-10T12:04:12.000Z
date_updated: 2025-05-10T12:08:02.000Z
layout: post
image: /assets/img/banners/photo-researca-18.avif
---

I was looking to hire and train a sales team so I decided to write this first post, it's part of a series on the basics of data, this way my sales team will have a deep understanding of what we're selling.

* (< 1970/1980) In the beginning a Database is a file containing your data, it lets you write to it and search through it. 
	* There are in-memory database that don't persist data on disk
	* Specialized database software are called Database Server.
	* A database server can contain serveral table and database
	* To make retrieval efficient we use index 
		* index are another "table" that contains meta data to help you find your results faster
	* Database comes with a query language, most of the time SQL (but they are several dialect)
	* Database servers are often called 
		* SGBD in French (Système de gestion de base de données)
		* DataBase Management System / DBMS
* (1970/1980) They are constraints in the way that is stored in SQL database
	* We're talking about **normalization**
		* Normalization are "best practices" to tidy your data
		* https://en.wikipedia.org/wiki/Database_normalization
		* Between 70 and 80s we identified several additives best practices
* (1990/2000) - BI & Star schema
	* BI gets defined as "concepts and methods to improve business decision making by using fact-based support systems."
	* Reporting, KPI, Dashboard, Analytics
	* Kimball - Dimensional Modelling
		* In the continuation of other standards like normalization, Kimball offers a check list on how to represent business data to make its exploitation easy
		* This is still something commonly used
* (2010/2020) Big data emergence & parallel (distributed) computing
	* Companies start to generate so much data that it can't be processed on a simple server
	* Researchers find some solution to split the load between a "cluster" of servers. 
		* For example, 
			* you want to find unique values in a big table, you split it, send the parts to several servers, each server will send back a list of its unique values, and finally you regroup all the sub lists given and reprocess it to remove the final duplicated values.
			* some use cases are less straighforward like if you want to sort a big table, you will split it, send a part to all the servers.
			* a big framework in the big data was map reduce, which means split a big list in smaller list, realise an action on each part (map), and finally process the result of the first step (reduce).
			* common framework is spark
	* 2020 came and the big data gets more marginally used because most of the clients don't have this kind of issues and big data brings some complexity.
	* CAP theorem gets less and less true because of the scale we can reach.
* (2015-2020) Biggest valuations
	* Everybody wants big data
	* Data Scientist is the sexiest job of the year
	* Pure player
		* **Snowflake** (2012 - 3.3Bn revenue - 53Bn valo) 
		* **Databricks** (2013 - 1.6Bn revenue - 62Bn valo)
			* Built by spark contributors
	* Cloud platform
		* **Amazon** web service: Glue, Athena
		* **Google** Cloud Platform: Big Query
		* **Azure** Data Factory
	* AI is called Machine Learning 
		* Statistics and maths
		* Pandas, Sklearn
	* ZIRP - Zero interest rate problem
		* Big data gets less important
	* Data Engineer becomes a real job
		* https://app.researca.com/article/77413
		* source: https://blog.det.life/the-history-of-data-engineering-1762b017541a
	* IA is getting revolutionized
		* https://www.understandingai.org/p/why-the-deep-learning-boom-caught
* (2020+) DATA + IA 
	* Big data is understood, there is a slope of desillusion, it works, it's cool but most of the companies don't need it.
	* Big data disappear (on a commercial standpoint)
	* Companies started to make big data easy shift into making AI easy or aggregating data
	* (**Azure**) Microsoft Fabric
	* AI becomes LLMs and is API-ized

Understanding the evolution of data is crucial for grasping the modern data landscape. Here's a concise history:

## Early Days (<1970/1980)
- Databases began as simple files storing data, with indexing for faster retrieval.
- Specialized software, called Database Management Systems (DBMS), emerged to manage multiple tables and queries.
- In-memory databases appeared, storing data in RAM for speed but lacking persistence.
- Database servers could manage multiple databases and tables.
- SQL became the standard query language, though dialects vary.
- Indexes, essentially metadata tables, improved retrieval efficiency.
- Known as SGBD in French (Système de gestion de base de données).

## Relational Databases (1970/1980)
- Introduced structured data storage with relationships between tables.
- Normalization defined best practices for organizing data.
- SQL became the standard for querying relational databases.
- Object-Relational Mapping (ORM) tools abstracted database interactions but didn't replace SQL.

## Business Intelligence (1990/2000)
- BI focused on improving decision-making with reporting, KPIs, dashboards, and analytics.
- Dimensional modeling, popularized by Kimball, simplified data representation for business use.

## Big Data Era (2010/2020)
- Companies generated data at scales too large for single servers.
- Distributed computing frameworks like MapReduce and Spark emerged.
  - Tasks like finding unique values or sorting were split across server clusters.
- CAP theorem highlighted trade-offs between consistency, availability, and partition tolerance.
- Big data's complexity limited its adoption for smaller-scale use cases.

## Modern Trends (2020+)
- Big data matured, and focus shifted to AI and data aggregation.
- Cloud platforms like AWS (Glue, Athena), GCP (BigQuery), and Azure (Data Factory) simplified workflows.
- AI evolved into Large Language Models (LLMs), accessible via APIs.
- Data engineering became a distinct profession.
- Companies like Snowflake and Databricks achieved massive valuations.
- AI and data aggregation replaced big data as the primary focus.

From simple files to AI-driven insights, the history of data reflects humanity's quest to harness information for better decision-making.