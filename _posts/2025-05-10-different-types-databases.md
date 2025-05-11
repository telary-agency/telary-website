---
title: The different types of databases
slug: different-types-of-databases
date_published: 2025-05-10T12:04:12.000Z
date_updated: 2025-05-10T12:08:02.000Z
image: /assets/img/banners/photo-researca-17.avif
---

This article is the second of a several part aimed to let sales and marketing colleagues hired catch up on the data landscape and ecosystem. For each technology I will highlight what existed before, by whom it was created and to solve which painpoints.

# Relational database

Relational database are defined in 1970 and start getting commonly used in 1980, the main key point is that data is stored in tables having several columns, and tables have relationship between them. We use keys to link 2 tables and ensure their relation is existing. To make retrieving data more easy, we use index, which under the hood are metadata tables.

| **Creator**       | IBM                                                 |
| **Reason**        |                                                     |
| **Use Case**      | Most commonly used, should be the default choice    |
| **Comon example** | Oracle, MySQL, PostgreSQL, SQLite, Snowflake        |

Note that nowadays most RDBMS (Relationnal database management system) are queried using SQL.

In the 1990s, object oriented programming started growing and SQL while still being available started getting concurrence from ORM (object relationnal mapping) which is a way to abstrat your database and access the data as if it were simply some objects in your code. SQL and ORM technologies are still commonly used, and one didn't supplant the other because they are used in different contexts.

# NoSQL and NewSQL

When the web got bigger and the big tech company started facing challenges never seen before, RDBMS started showing their limits and the opinionated choices that the database developper did where sometimes not suitable anymore for the scale of the web.

NoSQL databases are often very fast, do not require fixed table schemas, avoid join operations by storing denormalized data, and are designed to scale horizontally.

In recent years, there has been a strong demand for massively distributed databases with high partition tolerance, but according to the CAP theorem, it is impossible for a distributed system to simultaneously provide consistency, availability, and partition tolerance guarantees. A distributed system can satisfy any two of these guarantees at the same time, but not all three. For that reason, many NoSQL databases are using what is called eventual consistency to provide both availability and partition tolerance guarantees with a reduced level of data consistency. 

NewSQL is a class of modern relational databases that aims to provide the same scalable performance of NoSQL systems for online transaction processing (read-write) workloads while still using SQL and maintaining the ACID guarantees of a traditional database system. 


| **Creator**       |                                                  |
| **Reason**        |                                                     |
| **Use Case**      |     |
| **Comon example** |         |

# Example of database catagories

Note that those different types of categories can be combined and for example most of the data warehouse are distributed data warehouse.

## In memory database

An in-memory database is a database that primarily resides in main memory, but is typically backed-up by non-volatile computer data storage. Main memory databases are faster than disk databases, and so are often used where response time is critical, such as in telecommunications network equipment. The tradeoff is tha t you can't store that much data in memory.

| **Creator**       |                                                  |
| **Reason**        |                                                     |
| **Use Case**      |     |
| **Comon example** |         |

## Data Warehouses

Data warehouses archive data from operational databases and often from external sources such as market research firms. The warehouse becomes the central source of data for use by managers and other end-users who may not have access to operational data. For example, sales data might be aggregated to weekly totals and converted from internal product codes to use UPCs so that they can be compared with ACNielsen data. Some basic and essential components of data warehousing include extracting, analyzing, and mining data, transforming, loading, and managing data so as to make them available for further use.

## Distributed Databases

A distributed database is one in which both the data and the DBMS span multiple computers.

## Document Oriented database

A document-oriented database is designed for storing, retrieving, and managing document-oriented, or semi structured, information. Document-oriented databases are one of the main categories of NoSQL databases.

## Embeded database

An embedded database system is a DBMS which is tightly integrated with an application software that requires access to stored data in such a way that the DBMS is hidden from the application's end-users and requires little or no ongoing maintenance.

## Federated database system

A federated database system comprises several distinct databases, each with its own DBMS. It is handled as a single database by a federated database management system (FDBMS), which transparently integrates multiple autonomous DBMSs, possibly of different types (in which case it would also be a heterogeneous database system), and provides them with an integrated conceptual view.

## Graph Database

A graph database is a kind of NoSQL database that uses graph structures with nodes, edges, and properties to represent and store information. General graph databases that can store any graph are distinct from specialized graph databases such as triplestores and network databases.

*** add about llms***

## Key Value

## Column oriented database

![](/assets/img/2025/05/column_store.png)
*Difference between column storage and standard storage*

## Vector database

## Operational database

Operational databases store detailed data about the operations of an organization. They typically process relatively high volumes of updates using transactions. Examples include customer databases that record contact, credit, and demographic information about a business's customers, personnel databases that hold information such as salary, benefits, skills data about employees, enterprise resource planning systems that record details about product components, parts inventory, and financial databases that keep track of the organization's money, accounting and financial dealings.

## Real time

Real-time databases process transactions fast enough for the result to come back and be acted on right away.

## Spatial

A spatial database can store the data with multidimensional features. The queries on such data include location-based queries, like "Where is the closest hotel in my area?".

## Temporal

A temporal database has built-in time aspects, for example a temporal data model and a temporal version of SQL. More specifically the temporal aspects usually include valid-time and transaction-time

# Glossary

## ACID

## OLAP


    L’OLTP consiste à utiliser la base de données pour faire tourner votre business.
    L’OLAP consiste à utiliser la base de données pour comprendre votre business.

## OLTP