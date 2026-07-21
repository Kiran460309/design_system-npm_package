import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Table>;

const rows = [
  { name: "Ada Lovelace", role: "Engineer" },
  { name: "Grace Hopper", role: "Engineer" },
  { name: "Alan Turing", role: "Researcher" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.name}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
