import React from 'react';
import { Text, Table, TableCaption, Tbody, Thead, Tr, Td, Th, Avatar, Link } from '@chakra-ui/react';

import { IUser } from '../utils/interface';

interface Props {
  items: IUser[]
  login: string
}

const renderUsersList: React.FC<Props> = ({ items, login }: Props) => (
  <Table variant="simple">
    <TableCaption>
      Request Login:
      <Text color="tomato" as="kbd" isTruncated> {login}</Text>
    </TableCaption>
    <Thead>
      <Tr>
        <Th>Avatar</Th>
        <Th>Login</Th>
        <Th>Type</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        items?.map((item) => (
          <Tr key={item.id}>
            <Td>
              <Avatar name={item.login} src={item.avatar_url} />
            </Td>
            <Td>
              <Link isExternal href={item.html_url}>
                {item.login}
              </Link>
            </Td>
            <Td>{item.type}</Td>
          </Tr>
        ))
      }
    </Tbody>
  </Table>
);

export default renderUsersList;
