import { React, useState } from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

/** This function renders the search bar displaying on the header */
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const navigate = useNavigate();
  const navigateToCourseList = () => {
    navigate("/courses");
  };
  return (
    <SearchWrapper>
      <SearchInputs>
        <SearchOutlined Style="font-size:20px; color: white; position: absolute; left: 25px; top: 10px; z-index: 10" />
        <Input
          placeholder="Search a Course"
          value={wordEntered}
          onChange={handleFilter}
          onBlur={clearInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigateToCourseList();
            }
          }}
        />
      </SearchInputs>

      {/*filteredData.length !== 0 && (
        <SearchResult>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <DataItem href={value.link} target="_blank">
                <DataTitle> {value.title} </DataTitle>
              </DataItem>
            );
          })}
        </SearchResult>
        )*/}
    </SearchWrapper>
  );
}

const Input = styled.input`
  position: relative;
  top: 0px;
  left: 13px;
  border: 2px solid white;
  border-radius: 50px;
  width: 200px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Soleil", Arial, sans-serif;
  font-size: 15px;
  transition: 200ms ease-in;
  padding: 12px 20px 12px 40px;
  color: white;
  ::placeholder {
    color: rgb(255, 255, 255);
  }
  :focus {
    ::placeholder {
      color: rgb(180, 180, 180);
    }
    width: 400px;
    border-radius: 0;
  }
`;

const SearchWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 320px;
  top: 50px;
`;

const SearchInputs = styled.div`
  width: 200px;
  height: 40px;
`;

const SearchResult = styled.div`
  position: absolute;
  left: 13px;
  top: 40px;
  width: 400px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DataItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  border-right: 2px solid white;
`;

const DataTitle = styled.p`
  font-family: "Soleil", Arial, sans-serif;
  margin-left: 15px;
  font-size: 16px;
`;

export default SearchBar;
