---
title: "Data story: Aviation"
slug: data-story-aviation
date_published: 2025-11-03T12:12:00.000Z
date_updated: 2025-11-04T00:00:00.000Z
tags: Data story
layout: post
image: /assets/img/banners/photo-researca-4.avif
---

Here is how we used Telary to investigate on Airplane safety.

# Finding the data

First we had to find the data, we decided to work with NTSB, that tracks airplane event and offer a simple to use data export tool.

Click here to see the [NTSB query tool.](https://data.ntsb.gov/carol-main-public/query-builder?month=1&year=2025)

We decided to pre-filter the data to avoid having informations about small private plane accidents, here are the filters I went with.

![filters used](/assets/img/2025/11/ntsb.png)

# Uploading to Google Drive

We're expected to see 4976 rows in our dataset.

Let's upload it to google drive, as it's the simplest way to import public data in our data platform.

# Importing it in the data platform

Using what we learned in our [other blog post](https://telary.io/posts/demo-public-google-sheet/) we can easily import our data and check that we still have 4976 rows.

![Imported data](/assets/img/2025/11/airplane_import_data.png)

# Decide on our analysis

The goal of this small project is to confirm some well known facts like are incident mostly occuring during landing and takeoff.

But also investigate interesting facts:
* How many incidents happens during taxi?
* How long does it take for a report to be closed?
* What are the most concerned plane makers?
* What are the most concerned operator?

# Exploring the data

Based on the questions we're asking ourselves we may have some pre-requisites work to do:

## Incident occurs during landing and takeoff

For are incident occurs during landing and takeoff, we need to ensure in the dataset what are the states a plane can be and how they are used.

![Airplane phase](/assets/img/2025/11/airplane_phase.png)

Most of the planes don't have a phase of flight declared, which is not ideal for us, but we may need to investigate further to find why it's the case. Maybe only major incidents will have something declared in this column.

Even if we added the HighestInjuryLevel information adding context on the impact of an incident, the column wasn't reliabily filled.

![Airplane phase 2](/assets/img/2025/11/airplane_phase_2.png)

I tried to check if the field was set based on another relation, like country or having a report but no success. The conclusion is either I don't know how to use it or the dataset isn't built to permit what I wanted to do. Let's move on to another question.

## Report duration

Some incidents are covered by a report made by the NTSB and I wanted to know how long does it take for a report to closed.

![Airplane report](/assets/img/2025/11/airplane_report.png)

Using this we find that only 10% of the incidents are covered by a closed report. It's also the same ratio for uncompleted reports.

![Airplane duration](/assets/img/2025/11/airplane_duration.png)

We wanted also to cover unclosed investigation, and maybe see the evolution of the investigation duration through the years.

# Let's model it

We have two possibilities here, either we let superset our datavisualisation tool handle the processing and the data visualisation or pre-process the data beforehand. In most complex scenarios you will choose the second option. In this case we will simply do a small normalization step.

![Airplane makers](/assets/img/2025/11/airplane_makers.png)

While exploring the data we found that for example Boeing was present in the dataset under several syntaxe. This is a good case for normalization.

This will lead to using the silver database.

```
CREATE OR REPLACE TABLE silver_db.main.airplane_data_cleaned AS
SELECT 
    NtsbNo, 
    LOWER(Make) AS MakeCleaned, 
    * 
FROM airplane_raw
```

Our only data processing will be to lower the name of the maker which should fix the most obvious issues.

![Airplane makers cleaned](/assets/img/2025/11/airplane_makers_cleaned.png)

We could go deeper and handle a table of variant for each makers name.

This is where duckdb really shine we can very simply create a python dictionnary with our brands and create a table from it.

````
maker_dictionnary = [
    {"name":"Boeing", "options":["boeing", "boeing company", "the boeing company", "boeing - canada (de havilland)", "boeing of canada/dehav div", "boeing commercial airplane gro"]},
    {"name":"Beech", "options": ["beech", "hawker beechcraft corp.", "hawker beechcraft", "beechcraft", "hawker beechcraft corporation", "hawker beech" ]},
    {"name":"Mcdonnell Douglas", "options": ["mcdonnell douglas", "douglas"]},
    {"name":"Airbus", "options": ["airbus", "airbus industrie"]}
]
connection.query("CREATE OR REPLACE TABLE Maker_list AS SELECT x.* FROM (SELECT unnest($data) as x)", params={"data": maker_dictionnary})
````

And store the result like this:

````
CREATE OR REPLACE TABLE silver_db.main.airplane_data_cleaned AS
SELECT 
    NtsbNo, 
    IF(ml.name is not null, ml.name, LOWER(Make)) AS MakeCleaned, 
    * 
FROM airplane_raw
LEFT JOIN Maker_list ml ON LOWER(Make) IN ml.options
````

Here is the new result we get:

![Airplane makers cleaned](/assets/img/2025/11/airplane_makers_cleaned_2.png)

See how McDonnell Douglass got second with this new approach.

# Dashboarding

To get back on our initial questions:

* **Are incident mostly occuring during landing and takeoff?** We can't respond to this with the data.

* **How many incidents happens during taxi?** Due to the constitution of our dataset this would not be reliable.

* **How long does it take for a report to be closed?** This can be covered.

* **What are the most concerned plane makers?** This after data cleaning can be covered.

* **What are the most concerned operator?** Most of the operators in the dataset have 0 or 1 incident so it's not really interesting to compare this without other dataset.


![Airplane dashboard](/assets/img/2025/11/airplane_dashboard.png)

Based on the Sankey visualisation we can see that while it represent a small share of the maker as you can see on the donut, small plane manufacturer like Beech, Cesna and Piper are overly represented in the fatal injury level.

# Broadening our horizon

Saying who is the most cited airplane maker is not a good way to guess if it's the riskiest or not. 

For this kind of conclusion we need to have some informations about the volume of flights done on each model or make.

Hopefully this is where the data platform gets really handy. Add another data source, clean and join the data, and you should be there.
