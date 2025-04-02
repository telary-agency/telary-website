---
title: Building easy to maintain data pipelines
slug: building-easy-to-maintain-data-pipelines
date_published: 1970-01-01T00:00:00.000Z
date_updated: 2024-07-02T17:59:24.000Z
draft: true
---

After having to manage pipelines for a few years I think here is the checklist I will try to always follow when building any data pipeline for some batch processing.

1. **Backfill ready: **The jobshould accept a daily parameter to be able to launch missing day
2. **Date specific: **All queries should be filtered 
3. **Idempotent: **Running 2 times the same day, should not create duplicated rows
4. **Notifications: **Any job should launch notifications on startup, failure and retry.
5. **Failure notifications: **should be sent in a different place than sucess notifications
