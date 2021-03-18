This repo reproduces the issue I'm facing where I can't create a table if one of the fields contained is a `MULTIPLE_RECORDS_LINK` field.

To reproduce this yourself:

1. Clone the repo
2. `cd cant_create_multiple_record_links_field_repro`
3. Update `.block/remote.json` to contain your blockId and baseId you want to run this custom block on.
4. Run `npm install`
5. Run `block run`
6. Go to your airtable base and open the app
7. Click the "Create Target Table" button to create a table. We'll refer to this table when creating the record link field in the next table.
8. The button should now read "Create Table With Link"
9. Click the button
10. A modal titled "An error has occurred" should pop up.
