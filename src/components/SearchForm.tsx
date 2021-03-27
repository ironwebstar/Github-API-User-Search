import React from 'react';
import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input } from '@chakra-ui/react';
import { QueryObserverResult, RefetchOptions } from 'react-query';

import { IUsersResponse } from '../utils/interface';

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean;
  refetch:(options?: RefetchOptions | undefined) => Promise<QueryObserverResult<IUsersResponse, unknown>>
}

const SearchForm: React.FC<Props> = ({isLoading, setSearchValue}: Props) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const handleSubmit = async (e:React.FormEvent<any>) => {
    e.preventDefault()
    if (inputRef && inputRef.current) {
      setSearchValue(inputRef.current?.value)
    }
  }
    return (<Box as="form" onSubmit={handleSubmit}>
      <FormControl>

      <FormLabel as="legend">Github User Search</FormLabel>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={9}>
          <Input ref={inputRef} placeholder="Search..." />
        </GridItem>
        <GridItem colSpan={3}>
          <Button
            colorScheme="teal"
            isLoading={isLoading}
            type="submit"
          >Search</Button>
        </GridItem>
      </Grid>
      <FormHelperText>Type here...</FormHelperText>
      </FormControl>
    </Box>)
}

export default SearchForm;
