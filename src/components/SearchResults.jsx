import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Box, Container, Text } from "@chakra-ui/react";

export const SearchResults = () => {
  const getUserSuccess = useSelector((state) => state);

  const columns = [
    {
      name: "Avatar",
      selector: (row) => `${row.avatar_url}`,
      sortable: true,
      center: true,
      cell: (row) => (
        <div
          data-tag="allowRowEvents"
          style={{
            border: "3px solid #b9b9d0",
            borderRadius: "50%",
            margin: ".5rem 0rem",
          }}
        >
          <img
            src={row.avatar_url}
            alt="avatar"
            style={{ height: "50px", borderRadius: "50%" }}
          />
        </div>
      ),
      style: {
        color: "#b9b9d0",
        fontSize: "1.2rem",
      },
    },
    {
      name: "Username",
      selector: (row) => `${row.login}`,
      sortable: true,
      center: true,
      style: {
        color: "#9494bb",
        fontSize: "1.2rem",
      },
    },
    {
      name: "Type",
      selector: (row) => `${row.type}`,
      sortable: true,
      center: true,
      style: {
        color: "#9494bb",
        fontSize: "1.2rem",
      },
    },
  ];

  const tableData =
    getUserSuccess?.data?.length > 0 &&
    getUserSuccess?.data?.map((item) => ({
      id: item.id,
      avatar_url: item.avatar_url,
      login: item.login,
      type: item.type,
    }));

  return (
    <Box pos="relative">
      <Container maxW="1024px" py="4rem" h="100%">
        <Box>
          {getUserSuccess?.data?.length > 0 ? (
            <Box>
              <DataTable
                title="GitHub Search Results"
                columns={columns}
                data={tableData}
                pagination={true}
                paginationPerPage={9}
                paginationRowsPerPageOptions={[9, 16, 21, 26]}
                defaultSortField="login"
                width="100%"
              />
            </Box>
          ) : (
            <Box textAlign="center">
              <Box fontSize={["5rem", "10rem"]} color="#b9b9d0">
                <i className="fas fa-ghost"></i>
              </Box>
              <Text fontSize={[".8rem", "1rem"]}>
                No user found! Please search for a user
              </Text>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
