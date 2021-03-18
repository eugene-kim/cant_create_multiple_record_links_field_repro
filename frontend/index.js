import { useBase, initializeBlock, Button } from "@airtable/blocks/ui";
import { FieldType } from "@airtable/blocks/models";
import React from "react";

const TARGET_TABLE_NAME = "TARGET_TABLE";
const TABLE_WITH_LINK_NAME = "TABLE_WITH_LINK";

function makeCreateTableWithRecordLink(base, targetTable) {
  return function createTableWithRecordLink() {
    base.createTableAsync(TABLE_WITH_LINK_NAME, [
      // This field is necessary since a MULTIPLE_RECORD_LINKS field cannot be a table's primary field
      {
        name: "Name",
        type: FieldType.SINGLE_LINE_TEXT,
      },
      {
        name: "Record Link Field",
        type: FieldType.MULTIPLE_RECORD_LINKS,
        options: {
          linkedTableId: targetTable.id,
        },
      },
    ]);
  };
}

function makeCreateTargetTable(base) {
  return function createTargetTable() {
    base.createTableAsync(TARGET_TABLE_NAME, [
      {
        name: "Name",
        type: FieldType.SINGLE_LINE_TEXT,
      },
    ]);
  };
}

function HelloWorldApp() {
  const base = useBase();
  console.log(base);
  const { tables } = base;
  const targetTable = tables.find((t) => t.name === TARGET_TABLE_NAME);

  if (!targetTable) {
    return (
      <Button onClick={makeCreateTargetTable(base)}>Create Target Table</Button>
    );
  }

  const tableWithRecordLink = tables.find(
    (t) => t.name === TABLE_WITH_LINK_NAME
  );

  if (!tableWithRecordLink) {
    return (
      <Button onClick={makeCreateTableWithRecordLink(base, targetTable)}>
        Create Target Table
      </Button>
    );
  }

  return <div>Hello world 🚀</div>;
}

initializeBlock(() => <HelloWorldApp />);
