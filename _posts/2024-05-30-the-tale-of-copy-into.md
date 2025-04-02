---
title: The tale of COPY INTO
slug: the-tale-of-copy-into
date_published: 2024-05-30T18:00:00.000Z
date_updated: 2024-06-23T19:25:27.000Z
tags: Data platforms
layout: post
---

Let me tell you the tale of copy into

*I originally wrote this article as a Reddit post.*

For those of you that don’t know this kind of command, COPY INTO, is a command that lets you unload data from snowflake to any external source and with a specified format, it also works in the other direction to load data.

Here is the documentation for the curious ones [https://docs.snowflake.com/en/sql-reference/sql/copy-into-location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location)

As all the talented data engineers on this subreddit we wanted to build an idempotent pipeline to export data so we decided to use the Overwrite option to… overwrite the data in case we have to re-run the process if there are some data quality issues for example.

    COPY INTO 'gcs://mybucket/unload/my_file.csv'   
    FROM mytable   
    STORAGE_INTEGRATION = myintegration   
    FILE_FORMAT = (FORMAT_NAME = my_csv_format)   
    OVERWRITE = True;

As the naming is fairly obvious and it looks really like the option I’m looking for I didn’t dig deeper in the documentation.

But a few days later we started having some issues, sometimes we had a bit too many rows, most of the time a few rows were fully duplicated, but never a lot, around 5% and not on every run… We tried to replicate it, but it was not always happening. And it was part of a more complex pipeline.

After investigating we were left with only two possibilities: either copy into doesn’t work (highly improbable) or we didn’t use the command well (weird because it didn’t look complicated). I decided to RTFM deeper.

After looking at File format features I started to dig on OVERWRITE

> OVERWRITE = TRUE | FALSE 
> Boolean that specifies whether the COPY command overwrites existing files with matching names, if any, in the location where files are stored.

Quite what you would expect from overwrite but wait.. there is more

> The option does not remove any existing files that do not match the names of the files that
>  the COPY command unloads.

Hum…

> In many cases, enabling this option helps prevent data duplication in the target stage when the same COPY INTO <location> statement is executed multiple times. However, when an unload operation writes multiple files to a stage, Snowflake appends a suffix that ensures each  file name is unique across parallel execution threads (e.g. data_0_1_0). The number of  parallel execution threads can vary between unload operations. If the files written by an unload operation do not have the same filenames as files written by a previous operation, SQL statements that include this copy option cannot replace the existing files, resulting in duplicate files.

Oh… so if your process is using multiple threads (like you would expect in a data platform), multiple partitions are written and if between different runs the number of threads used changes it may not overwrite all your partitions.

In our case it was a single partition that was sometimes overwritten or not explaining the small row count difference we had. 

But there is a solution offered,

> To avoid data duplication in the target stage, we recommend setting the INCLUDE_QUERY_ID = TRUE copy option instead of OVERWRITE = TRUE 
> and removing all data files in the target stage and path (or using a different path for each unload operation) between each unload job.

I can think of 2 other solutions that could be also useful for different use cases:

1. include query_id name in each partition file, in our case we would have some duplicates but it would be a far easier bug to discover because it would be a full duplication of the data
2. use SINGLE=True to write the output to a single partition, works for a lot of cases, but not big data use cases
3. empty the folder before outputting to it using another tool

I hope it will help some data engineers to avoid this pitfall.

**TLDR**: Snowflake OVERWRITE option in COPY INTO should be named OPTIMISTIC_OVERWRITE, and I should have taken the time to read the doc.

Link to the original post: [https://www.reddit.com/r/dataengineering/comments/1csv7g2/the_tale_of_copy_into/](https://www.reddit.com/r/dataengineering/comments/1csv7g2/the_tale_of_copy_into/)
