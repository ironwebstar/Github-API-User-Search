import React, { useEffect } from 'react';
import { Stack, StackDivider } from '@chakra-ui/react';

import Wrapper from '../../components/Wrapper';
import LoadingIndicator from '../../components/LoadingIndicator';
import Result from '../../components/Result';
import SearchForm from '../../components/SearchForm';
import { useListUsers } from '../../service/hooks';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const { data, isLoading, refetch } = useListUsers(searchValue);

  useEffect(() => {
    if (searchValue) {
      refetch();
    }
  }, [searchValue])

  return (
    <Wrapper>
      <Stack
        spacing="24px"
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
      >
        <SearchForm isLoading={isLoading} refetch={refetch} setSearchValue={setSearchValue}/>
        {isLoading && <LoadingIndicator />}
        {!isLoading &&
          data?.items && <Result items={data?.items} login={searchValue} />
        }
      </Stack>
    </Wrapper>
  );
};

export default Search;
