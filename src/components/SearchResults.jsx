import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Skeleton, Stack, Text } from "@chakra-ui/react";
import DataTable from "react-data-table-component";

export const SearchResults = () => {
  const getUsersSuccess = useSelector((state) => state);
  const getUsersLoading = useSelector((state) => state.loading);
  const getUsersFailed = useSelector((state) => state.error);

  const columns = [
    {
      name: "Avatar Url",
      selector: (row) => `${row.avatar_url}`,
      sortable: true,
      center: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" style={{ margin: ".5rem 0rem" }}>
          <img
            src={row.avatar_url}
            alt="avatar"
            style={{ height: "50px", borderRadius: "50%" }}
          />
        </div>
      ),
    },
    {
      name: "Login",
      selector: (row) => `${row.login}`,
      sortable: true,
      center: true,
    },
    {
      name: "Type",
      selector: (row) => `${row.type}`,
      sortable: true,
      center: true,
    },
  ];

  const tableData =
    getUsersSuccess.data.length > 0 &&
    getUsersSuccess.data.map((item) => ({
      id: item.id,
      avatar_url: item.avatar_url,
      login: item.login,
      type: item.type,
    }));

  return (
    <Box>
      <Container maxW="container.xl" my="4rem">
        <Box>
          {getUsersSuccess.data.length > 0 ? (
            <Box>
              {getUsersLoading ? (
                <DataTable
                  title="Search Results"
                  columns={columns}
                  data={tableData}
                  pagination={true}
                  paginationPerPage={9}
                  paginationRowsPerPageOptions={[9, 16, 21, 26]}
                  defaultSortField="login"
                  width="100%"
                />
              ) : (
                <Stack>
                  <Skeleton height="70px" />
                  <Skeleton height="70px" />
                  <Skeleton height="70px" />
                </Stack>
              )}
            </Box>
          ) : (
            <Text>
              {getUsersFailed === null
                ? "Oops. No user found! Please search for a user"
                : getUsersFailed}
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  );
};
