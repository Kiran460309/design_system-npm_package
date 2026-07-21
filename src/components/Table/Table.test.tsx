import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

describe("Table", () => {
  it("renders header and cell content", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Ada</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Ada")).toBeInTheDocument();
  });
});
