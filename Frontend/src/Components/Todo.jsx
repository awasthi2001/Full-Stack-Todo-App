import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndUpdate } from "../Redux/action";
import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";
import { Select } from "@chakra-ui/react";
export const Todo = () => {
  const [page, setPage] = useState(1);
  // const [filterBy,setFilterBy] = useState("");
  let { data, loading, error, totalCount } = useSelector((state) => state.Todo);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAndUpdate(page));
  }, [page]);
  // const handleFilter = (e)=>{
  //   setFilterBy(e.target.value)
  // }
  return (
    <div className="Container">
     
      <Heading fontSize="30">TODO APP</Heading>
      <TodoInput page={page} loading={loading} />
      <div id="parentList">
        <Heading fontSize="20" style={{ color: "teal" }}>
          TASKS
        </Heading>
        {/* <Select placeholder="ALL" width='152px' value={filterBy} onChange={handleFilter}>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </Select> */}
        {loading ? (
          <img
            style={{ width: "400px", marginLeft: "-20px" }}
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="loading"
          />
        ) : (
          data.map(({ _id, task, status }) => {
            return (
              <TodoItems
                key={_id}
                _id={_id}
                task={task}
                status={status}
                page={page}
              />
            );
          })
        )}
      </div>
      {loading ? (
        ""
      ) : (
        <>
          <Box mt="-25" p="9">
            <Button
              size="sm"
              disabled={page == 1}
              onClick={() => setPage(page - 1)}
              colorScheme="blue"
            >
              Previous
            </Button>
            <Button size="sm" ml="2" mr="2">
              {page}
            </Button>
            <Button
              size="sm"
              disabled={page >= Math.ceil(totalCount / 5)}
              onClick={() => setPage(page + 1)}
              colorScheme="blue"
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};
