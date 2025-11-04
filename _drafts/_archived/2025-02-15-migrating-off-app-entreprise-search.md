---
title: Migrating off AppSearch / EntrepriseSearch
slug: migrating-off-app-entreprise-search
date_published: 2025-02-15T11:28:46.000Z
date_updated: 2025-02-15T11:36:24.000Z
layout: post
image: /assets/img/banners/photo-researca-14.avif

---

At the end of November 2024, [Elastic announced that there would be no further updates to App/Entreprise Search and advised users to start planning their migration away from it](https://www.elastic.co/blog/app-search-to-elasticsearch). The features are planned to be added to the base elastic products which could be beneficial since AppSearch integration was not always seamless. However, it was a useful product that allowed clients to build and customize simple search use cases. If a use case became too complex, users could transition to direct Elasticsearch querying.

They are offering a [jupyter notebook](https://github.com/elastic/elasticsearch-labs/blob/main/notebooks/enterprise-search/app-search-engine-exporter.ipynb) to help you migrate but I find it concerning to migrate while making changes. Instead, I believe a soft migration with a dual-run approach—keeping the same mappings and indices—would be a safer strategy.

In my vision of the migration most of the work is to be done in DevTools and a few curl requests.

I imagine some use cases where this way of working can be useful:

- You want to have exactly the same mapping as your AppSearch engine
- You want to ensure you are able to quickly recreate AppSearch indices so you can drop them instead of using delete_by_query
- Migrate with more confidence using this no-changes approach

# Detailed guide

## Identify the perfect document(s) candidate(s)

First you will have to identify the perfect document candidate, this means the document that covers all your fields if you need several it's not a big deal, the goal is to ensure you will be able to generate all our mapping with as few documents as possible.

    GET .ent-search-engine-documents-telary-engine/_search
    {
      "query": {
        "match": {
          "id": "5902270777574"
        }
      }
    }

query to extract my ideal candidate

You will then store the document as a json array in a text file. Be careful, you should take only the "_source" content.

    [
      {
          "id": "5902270777574",
          "field_2": "my field"
      },
      {
      ...
      }
    ]

example of json to prepare

## Prepare the migration engine

You will then go to the AppSearch UI and create a new engine, ideally you should configure it exactly the same as your current production engine. Once the engine is created you will use the json array you built in the previous step and import it via the form available.

Using `GET _cat/indices/.ent-search-engine*` you should be able to see your newly created engine.

Use `GET /.ent-search-engine-documents-telary-migration/_mapping` to ensure the mapping matches your production engine. It should be the case if your perfect candidates where the good ones (if there is no way of finding them, feel free to create a fake document)

## Clone the engine index

⚠️

For some unknown reason, setting any index to read-only triggers an AppSearch banner stating that all of AppSearch is read-only. However, this does not appear to be true. But **be careful on this part.**

Now you will clone the index, but before you will need to mark it as read only.

    PUT /.ent-search-engine-documents-telary-migration/_settings
    {
      "index.blocks.write": true
    }

Marking the index as read only

    POST /.ent-search-engine-documents-telary-migration/_clone/migration-index
    

Clone the index

You can now re-enable write on the index to remove the worrying AppSearch banner.

    PUT /.ent-search-engine-documents-telary-migration/_settings
    {
      "index.blocks.write": false
    }

Re-authorizing writes

As you fully cloned the index, even its settings, you should revert the 2 following settings.

    PUT /migration-index/_settings
    {
      "index.blocks.write": false
    }
    PUT /migration-index/_settings
    {
      "index.hidden": false
    }
    

Removing the 'hidden' and 'blocks.write' settings to make the index usable by AppSearch

Now, you need to clear the index to ensure it's empty

    POST migration-index/_delete_by_query
    {
      "query": {
        "match_all": {}
      }
    }

Empty the index

You can choose to keep it for reference or start filling it for testing.

## Use the index

If you want to make comparison testing or a slow running migration you can create an AppSearch engine on top of this index this would let you work on it using the AppSearch API while migrating the calls one by one, and easily ensuring you have the same results.

To create the engine you will have to put an alias on top of your index like this

    POST _aliases
    {
      "actions": [
        {
          "add": {
            "index": "migration-index",
            "alias": "search-engine-native-elasticsearch"
          }
        }
      ]
    }

Adding an alias on top of the index so it can be used by AppSearch

## Convert AppSearch queries to ES DSL

The last part is now to test our AppSearch queries directly on our Elasticsearch index, for this kind of use case you should use the [explain query](https://www.elastic.co/guide/en/app-search/current/search-explain.html) documentation.

I usually do something like that.

    import requests
    import json
    ES_DEPLOYMENT = "https://telary-prod.ent.europe-west1.gcp.cloud.es.io"
    ENGINE = "telary-engine"
    SEARCH_WORD = "word i'm searching for"
    HEADERS = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": f"Bearer {PRIVATE_KEY}"
    }
    BODY = {
        "query": f"{SEARCH_WORD}"
    }
    
    response = requests.get(
        url = f'{ES_DEPLOYMENT}/api/as/v1/engines/{ENGINE}/search_explain',
        json = BODY,
        headers = HEADERS
    )
    
    print(response.status_code)
    print(json.dumps(response.json()["query_body"], indent=2))

Example of python code to extract ES query from AppSearch query

It will respond with a json object containing the "query_body" which is the ES query used by AppSearch. The whole object contains interesting data so take a look at it.

# Conclusion

While this method covers the data and query migration, you still need to explore alternatives for GUI-based search customization and other advanced AppSearch features.
